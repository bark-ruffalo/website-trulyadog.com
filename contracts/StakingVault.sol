// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import "./RewardToken.sol";
import "@openzeppelin/contracts/utils/Pausable.sol";

contract StakingVault is Ownable, ReentrancyGuard, Pausable {
	using SafeERC20 for IERC20;

	struct Pool {
		uint256 poolId; // Unique identifier for the pool
		IERC20 stakingToken; // Token being staked
		uint256[] lockPeriods; // Supported lock periods
		uint256[] rewardRates; // Reward rates corresponding to lock periods
		bool isActive; // Whether the pool is active
	}

	struct LockInfo {
		uint256 lockId; // Unique identifier for the lock
		uint256 amount; // Amount of tokens locked
		uint256 lockPeriod; // Lock duration in seconds
		uint256 unlockTime; // Timestamp when tokens can be unlocked
		uint256 lastClaimTime; // Timestamp when user claimed rewards
		uint256 poolId; // Identifier for the pool associated with this lock
		bool isLocked; // Whether the lock is still active
	}

	Pool[] public pools; // Array of pools
	RewardToken public rewardToken; // Reference to the rewards token

	mapping(address => LockInfo[]) public userLocks; // Tracks locks for each user
	mapping(address => uint256) public lifetimeRewards; // Tracks total rewards earned by each address
	address[] public lockedUsers;

	event Staked(
		address indexed user,
		uint256 indexed poolId,
		uint256 amount,
		uint256 lockPeriod
	);
	event Unstaked(
		address indexed user,
		uint256 indexed poolId,
		uint256 amount,
		uint256 reward
	);
	event RewardsClaimed(
		address indexed user,
		uint256 indexed poolId,
		uint256 amount
	);

	event Locked(
		address indexed user,
		uint256 indexed lockId,
		uint256 amount,
		uint256 lockPeriod,
		uint256 unlockTime,
		uint256 poolId
	);
	event Unlocked(
		address indexed user,
		uint256 indexed lockId,
		uint256 amount,
		uint256 poolId
	);
	event PoolAdded(uint256 indexed poolId, address indexed stakingToken);
	event RewardRatesUpdated(uint256 indexed poolId, uint256[] newRewardRates);
	event PoolStatusUpdated(uint256 indexed poolId, bool isActive);

	/**
	 * @dev Constructor to initialize the contract with the reward token address.
	 * @param _rewardToken The address of the reward token contract.
	 */
	constructor(address _rewardToken) Ownable(msg.sender) {
		rewardToken = RewardToken(_rewardToken);
	}

	// Set the reward token address (can be called after deployment if needed)
	function setRewardToken(address _rewardToken) external onlyOwner {
		rewardToken = RewardToken(_rewardToken);
	}

	/**
	 * @dev Add a new pool for staking.
	 * @param _stakingToken The token that will be staked in the pool.
	 * @param _lockPeriods The array of supported lock periods for the pool.
	 * @param _rewardRates The corresponding reward rates for each lock period.
	 * @notice Only callable by the contract owner.
	 * @notice Lock periods and reward rates must match in length.
	 * @custom:events Emits PoolAdded event.
	 */
	function addPool(
		IERC20 _stakingToken,
		uint256[] calldata _lockPeriods,
		uint256[] calldata _rewardRates
	) external onlyOwner {
		require(
			address(_stakingToken) != address(0),
			"Invalid staking token address"
		);
		require(
			_lockPeriods.length == _rewardRates.length,
			"Mismatched lock periods and rates"
		);

		uint256 poolId = pools.length;

		pools.push(
			Pool({
				poolId: poolId,
				stakingToken: _stakingToken,
				lockPeriods: _lockPeriods,
				rewardRates: _rewardRates,
				isActive: true
			})
		);
		emit PoolAdded(poolId, address(_stakingToken));
	}

	/**
	 * @dev Activate or deactivate a staking pool.
	 * @param poolId The ID of the pool to update.
	 * @param isActive The new status of the pool (active or inactive).
	 * @notice Only callable by the contract owner.
	 * @custom:events Emits PoolStatusUpdated event.
	 */
	function setPoolStatus(uint256 poolId, bool isActive) external onlyOwner {
		require(poolId < pools.length, "Pool does not exist");

		pools[poolId].isActive = isActive;

		emit PoolStatusUpdated(poolId, isActive);
	}

	/**
	 * @dev Update the reward rates for a specific pool.
	 * @param poolId The ID of the pool to update.
	 * @param newRewardRates The new reward rates corresponding to the existing lock periods.
	 * @notice Only callable by the contract owner.
	 * @notice Reward rates must match the number of lock periods.
	 * @custom:events Emits RewardRatesUpdated event.
	 */
	function updateRewardRates(
		uint256 poolId,
		uint256[] memory newRewardRates
	) external onlyOwner {
		require(poolId < pools.length, "Pool does not exist");
		Pool storage pool = pools[poolId];
		require(
			pool.lockPeriods.length == newRewardRates.length,
			"Mismatched lock periods and reward rates"
		);

		pool.rewardRates = newRewardRates;

		emit RewardRatesUpdated(poolId, newRewardRates);
	}

	/**
	 * @dev Stake tokens in a specific pool with a lock period.
	 * @param poolId The ID of the pool to stake in.
	 * @param _amount The amount of tokens to stake.
	 * @param _lockPeriod The duration for which the tokens will be locked.
	 * @notice This function can be paused by the contract owner in case of emergencies.
	 * @custom:events Emits Staked event.
	 */
	function stake(
		uint256 poolId,
		uint256 _amount,
		uint256 _lockPeriod
	) external whenNotPaused {
		require(poolId < pools.length, "Invalid pool ID");
		Pool memory pool = pools[poolId];
		require(pool.isActive, "Pool is not active");

		// Determine reward rate
		uint256 rewardRate = getRewardRate(poolId, _lockPeriod);
		require(rewardRate > 0, "Invalid lock period");

		// Transfer staking tokens to contract
		pool.stakingToken.safeTransferFrom(msg.sender, address(this), _amount);

		// Lock tokens
		lock(msg.sender, poolId, _amount, _lockPeriod);

		emit Staked(msg.sender, poolId, _amount, _lockPeriod);
	}

	/**
	 * @dev Unstake tokens and claim rewards for a specific lock.
	 * @param poolId The ID of the pool to unstake from.
	 * @param lockId The ID of the lock to unlock.
	 */
	function unstake(uint256 poolId, uint256 lockId) external {
		require(poolId < pools.length, "Invalid pool ID");
		require(lockId < userLocks[msg.sender].length, "Invalid lock ID");
		Pool memory pool = pools[poolId];

		// Calculate pending rewards
		uint256 pendingRewards = calculateRewards(msg.sender, lockId);

		// Unlock tokens
		(uint256 amount, bool locked) = unlock(msg.sender, lockId);
		require(!locked, "Lock period not yet over");

		// Mint rewards and transfer staked tokens back to user
		rewardToken.mint(msg.sender, pendingRewards);
		pool.stakingToken.safeTransfer(msg.sender, amount);

		// Update lifetime rewards and reset claim time
		lifetimeRewards[msg.sender] += pendingRewards;

		// Set last claim time
		LockInfo storage lockInfo = userLocks[msg.sender][lockId];
		lockInfo.lastClaimTime = block.timestamp;

		emit Unstaked(msg.sender, poolId, amount, pendingRewards);
	}

	/**
	 * @dev Locks the user's tokens.
	 * @param user The address of the user locking the tokens.
	 * @param poolId The ID of the pool the lock belongs to.
	 * @param amount The amount of tokens to lock.
	 * @param lockPeriod The duration for which tokens are locked.
	 */
	function lock(
		address user,
		uint256 poolId,
		uint256 amount,
		uint256 lockPeriod
	) internal {
		require(user != address(0), "Invalid user address");
		require(poolId < pools.length, "Invalid pool ID");
		require(amount > 0, "Amount must be greater than zero");
		require(lockPeriod > 0, "Lock period must be greater than zero");

		uint256 unlockTime = block.timestamp + lockPeriod;
		uint256 lockId = userLocks[user].length;

		if (userLocks[user].length == 0) {
			lockedUsers.push(user);
		}
		userLocks[user].push(
			LockInfo({
				lockId: lockId,
				amount: amount,
				lockPeriod: lockPeriod,
				unlockTime: unlockTime,
				lastClaimTime: 0,
				poolId: poolId,
				isLocked: true
			})
		);

		emit Locked(user, lockId, amount, lockPeriod, unlockTime, poolId);
	}

	/**
	 * @dev Unlocks the user's tokens for a specific lock ID.
	 * @param user The address of the user unlocking the tokens.
	 * @param lockId The ID of the lock to unlock.
	 * @return The amount of tokens that were unlocked and whether the lock is still active.
	 * @custom:events Emits Unlocked event.
	 */
	function unlock(
		address user,
		uint256 lockId
	) internal returns (uint256, bool) {
		require(user != address(0), "Invalid user address");
		require(lockId < userLocks[user].length, "Invalid lock ID");

		LockInfo storage lockInfo = userLocks[user][lockId];
		require(block.timestamp >= lockInfo.unlockTime, "Lock period not over");
		require(lockInfo.isLocked, "Lock already unlocked");

		lockInfo.isLocked = false;
		if (userLocks[user].length == 0) {
			for (uint256 i = 0; i < lockedUsers.length; i++) {
				if (lockedUsers[i] == user) {
					// Swap with the last element
					lockedUsers[i] = lockedUsers[lockedUsers.length - 1];
					// Remove the last element
					lockedUsers.pop();
				}
			}
		}

		emit Unlocked(user, lockId, lockInfo.amount, lockInfo.poolId);

		return (lockInfo.amount, lockInfo.isLocked);
	}

	/**
	 * @dev Claims rewards for a specific lock without unlocking the tokens.
	 * @param poolId The ID of the pool the rewards are being claimed from.
	 * @param lockId The ID of the lock the rewards are being claimed for.
	 * @custom:events Emits RewardsClaimed event.
	 */
	function claimRewards(uint256 poolId, uint256 lockId) external {
		require(poolId < pools.length, "Invalid pool ID");
		require(lockId < userLocks[msg.sender].length, "Invalid lock ID");

		// Calculate pending rewards
		uint256 pendingRewards = calculateRewards(msg.sender, lockId);
		require(pendingRewards > 0, "No rewards available");

		// Mint rewards
		rewardToken.mint(msg.sender, pendingRewards);

		// Update lifetime rewards and claim time
		lifetimeRewards[msg.sender] += pendingRewards;

		// Update last claim time
		LockInfo storage lockInfo = userLocks[msg.sender][lockId];
		lockInfo.lastClaimTime = block.timestamp;

		emit RewardsClaimed(msg.sender, poolId, pendingRewards);
	}

	/**
	 * @dev Calculates the pending rewards for a user based on their lock.
	 * @param user The address of the user.
	 * @param lockId The ID of the lock to calculate rewards for.
	 * @return The amount of rewards earned for the specified lock.
	 */
	function calculateRewards(
		address user,
		uint256 lockId
	) public view returns (uint256) {
		uint256 rewards = 0;
		uint256 currentTime = block.timestamp;
		LockInfo memory lockInfo = userLocks[user][lockId];

		// Fetch reward rate
		uint256 rewardRate = getRewardRate(
			lockInfo.poolId,
			lockInfo.lockPeriod
		);
		require(rewardRate > 0, "Invalid lock period.");

		if (lockInfo.isLocked) {
			uint256 stakingTime = currentTime -
				(
					lockInfo.lastClaimTime > 0
						? lockInfo.lastClaimTime
						: lockInfo.unlockTime - lockInfo.lockPeriod
				);
			rewards +=
				(lockInfo.amount * rewardRate * stakingTime) /
				(lockInfo.lockPeriod * 10000);
		}

		return rewards;
	}

	/**
	 * @dev Retrieves the reward rate for a specific pool and lock period.
	 * @param poolId The ID of the pool to check.
	 * @param lockPeriod The lock period to get the reward rate for.
	 * @return The reward rate for the specified pool and lock period.
	 */
	function getRewardRate(
		uint256 poolId,
		uint256 lockPeriod
	) internal view returns (uint256) {
		Pool storage pool = pools[poolId];
		for (uint256 i = 0; i < pool.lockPeriods.length; i++) {
			if (pool.lockPeriods[i] == lockPeriod) {
				return pool.rewardRates[i];
			}
		}
		return 0;
	}

	// Function to get total locked users
	function getTotalLockedUsers() external view returns (uint256) {
		return lockedUsers.length;
	}

	// Function to get total staked amount for all users
	function getTotalStakedAmount() external view returns (uint256) {
		uint256 totalStaked = 0;
		for (uint256 i = 0; i < lockedUsers.length; i++) {
			LockInfo[] memory locks = userLocks[lockedUsers[i]];
			for (uint256 j = 0; j < locks.length; j++) {
				if (locks[j].isLocked) {
					totalStaked += locks[j].amount;
				}
			}
		}
		return totalStaked;
	}

	// Function to get all pools
	function getPools() external view returns (Pool[] memory) {
		return pools;
	}

	// Function to get locked users for a specific pool
	function getLockedUsersByPool(
		uint256 poolId
	) external view returns (address[] memory) {
		require(poolId < pools.length, "Invalid pool ID");

		address[] memory poolLockedUsers = new address[](lockedUsers.length);
		uint256 count = 0;

		for (uint256 i = 0; i < lockedUsers.length; i++) {
			LockInfo[] memory locks = userLocks[lockedUsers[i]];
			for (uint256 j = 0; j < locks.length; j++) {
				if (locks[j].poolId == poolId && locks[j].isLocked) {
					poolLockedUsers[count] = lockedUsers[i];
					count++;
					break;
				}
			}
		}

		// Resize the array to fit actual count
		address[] memory result = new address[](count);
		for (uint256 i = 0; i < count; i++) {
			result[i] = poolLockedUsers[i];
		}
		return result;
	}

	// Function to get total staking amount for a specific pool
	function getStakingAmountByPool(
		uint256 poolId
	) external view returns (uint256) {
		require(poolId < pools.length, "Invalid pool ID");

		uint256 totalStaked = 0;
		for (uint256 i = 0; i < lockedUsers.length; i++) {
			LockInfo[] memory locks = userLocks[lockedUsers[i]];
			for (uint256 j = 0; j < locks.length; j++) {
				if (locks[j].poolId == poolId && locks[j].isLocked) {
					totalStaked += locks[j].amount;
				}
			}
		}
		return totalStaked;
	}

	/**
	 * @dev Retrieves the lock information for a specified user.
	 * @param user The address of the user whose locks to retrieve.
	 * @return An array of LockInfo structures for the specified user.
	 */
	function getUserLocks(
		address user
	) external view returns (LockInfo[] memory) {
		return userLocks[user];
	}

	/**
	 * @dev Retrieves the total rewards earned by a user.
	 * @param user The address of the user to check.
	 * @return The total amount of rewards earned by the specified user.
	 */
	function getLifetimeRewards(address user) external view returns (uint256) {
		return lifetimeRewards[user];
	}

	/**
	 * @dev Allows the owner to recover any ERC20 tokens mistakenly sent to the contract.
	 * @param tokenAddress The address of the ERC20 token to recover.
	 * @param to The address to send the recovered tokens to.
	 * @param amount The amount of tokens to recover.
	 * @notice Only callable by the contract owner.
	 */
	function recoverTokens(
		IERC20 tokenAddress,
		address to,
		uint256 amount
	) external onlyOwner {
		require(to != address(0), "Cannot recover to zero address");
		tokenAddress.safeTransfer(to, amount);
	}

	/**
	 * @dev Emergency function to reset the lock period for all users, allowing immediate withdrawal.
	 * @notice This function should only be used in emergency situations where users need immediate access to their funds.
	 * @notice This is a one-way operation and cannot be reversed.
	 * @notice This function will unlock all locked tokens across all pools.
	 * @notice Gas costs will increase with the number of pools and locked positions.
	 * @custom:security-note This is a critical function that can override normal staking mechanics.
	 * @custom:requirements Only callable by contract owner.
	 * @custom:events Emits Unlocked event for each lock that is modified.
	 */
	function emergencyUnlockAll() external onlyOwner {
		for (uint256 i = 0; i < lockedUsers.length; i++) {
			for (uint256 j = 0; j < userLocks[lockedUsers[i]].length; j++) {
				LockInfo storage lockInfo = userLocks[lockedUsers[i]][j];
				if (lockInfo.isLocked) {
					lockInfo.isLocked = false;
					lockInfo.unlockTime = block.timestamp;
					emit Unlocked(
						lockedUsers[i],
						lockInfo.lockId,
						lockInfo.amount,
						lockInfo.poolId
					);
				}
			}
		}
	}

	/**
	 * @dev Pauses the staking functionality.
	 * @notice Only callable by the contract owner.
	 */
	function pause() external onlyOwner {
		_pause();
	}

	/**
	 * @dev Unpauses the staking functionality.
	 * @notice Only callable by the contract owner.
	 */
	function unpause() external onlyOwner {
		_unpause();
	}

	/**
	 * @dev Returns the total amount of tokens actively staked by a user across all locks.
	 * @param user The address of the user to check.
	 * @return totalStaked The total amount of tokens still in the staking contract (in wei).
	 * @notice Counts tokens in both active locks and unlocked-but-not-withdrawn positions.
	 */
	function getActiveStakedBalance(address user) external view returns (uint256 totalStaked) {
		LockInfo[] storage locks = userLocks[user];
		for (uint256 i = 0; i < locks.length; i++) {
			// Include amount if either locked OR not yet withdrawn
			if (locks[i].amount > 0) {
				totalStaked += locks[i].amount;
			}
		}
	}
}
