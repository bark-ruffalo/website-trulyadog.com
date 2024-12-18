import { ChangeEvent, useEffect, useState } from "react";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { calculateRewardRate, convertSecondsToDays, getPoolTokens, notification } from "~~/utils/scaffold-eth";

interface CardProps {
  poolId: bigint;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: boolean;
}

export function StakingCard({ item }: { item: CardProps }) {
  const { address } = useAccount();
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const [lockPeriodIndex, setLockPeriodIndex] = useState<number>(0);

  const { data: tokenBalance, refetch: refetchTokenBalance } = useScaffoldReadContract({
    contractName: getPoolTokens(Number(item.poolId)),
    functionName: "balanceOf",
    args: [address],
  });
  const { data: stakingVault } = useDeployedContractInfo("StakingVault");
  const { data: allowance, refetch: refetchTokenAllowance } = useScaffoldReadContract({
    contractName: getPoolTokens(Number(item.poolId)),
    functionName: "allowance",
    args: [address, stakingVault?.address],
  });
  const { writeContractAsync: approve, isPending: isApprovePending } = useScaffoldWriteContract(
    getPoolTokens(Number(item.poolId)),
  );
  const { writeContractAsync: stake, isPending: isStakePending } = useScaffoldWriteContract("StakingVault");

  const onApprove = async (): Promise<void> => {
    try {
      await approve({
        functionName: "approve",
        args: [stakingVault?.address, parseEther(stakeAmount)],
      });
      console.log("Approval successful!");
      await refetchTokenAllowance();
    } catch (error) {
      console.error("Approval failed:", error);
    }
  };

  const onStake = async (): Promise<void> => {
    if (!stakeAmount) {
      notification.error("Staking Vault: Cannot stake zero amount.");
      return;
    }

    if (!allowance || parseEther(stakeAmount) > allowance) {
      notification.error("Staking Vault: You should approve stake amount to StakingVault.");
      return;
    }

    try {
      await stake({
        functionName: "stake",
        args: [item.poolId, parseEther(stakeAmount), BigInt(item.lockPeriods[lockPeriodIndex])],
      });
      console.log("Stake successful!");
      refetchTokenBalance();
    } catch (error) {
      console.error("Staking failed:", error);
    }
  };

  useEffect(() => {
    if (tokenBalance && tokenBalance > 0) {
      setStakeAmount(formatEther(tokenBalance));
    }
  }, [tokenBalance]);

  const handleMaxClick = () => {
    if (tokenBalance) {
      setStakeAmount(formatEther(tokenBalance));
    } else {
      setStakeAmount(formatEther(BigInt(0)));
    }
  };

  function handleStakeAmountChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;

    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setStakeAmount(value);
    }
  }

  return (
    <div className="flex flex-col justify-between p-4 sm:p-5 min-h-[120px] w-full sm:max-w-[380px] bg-base-200 dark:bg-[#8d54751a] rounded-lg relative m-1 box-border">
      <div className="text-base-content dark:text-white font-medium flex flex-wrap gap-2 items-center mb-3">
        <label className="text-base-content/70 dark:text-[#b2bfce] font-light">Lock Period:</label>
        <select
          value={lockPeriodIndex}
          onChange={e => setLockPeriodIndex(Number(e.target.value))}
          className="bg-base-100 border border-base-300 dark:border-[#e8effb33] rounded-xl p-1 text-sm sm:text-base text-base-content dark:text-white"
        >
          {item.lockPeriods.map((period, index) => (
            <option key={index} value={index}>
              {convertSecondsToDays(Number(period))} Days
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-2 gap-2 w-full">
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Token Name</span>
          <span className="text-base-content dark:text-white">{getPoolTokens(Number(item.poolId))}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Token Address</span>
          <Address address={item.stakingToken} />
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Pool Status</span>
          <span className="text-base-content dark:text-white font-light">{item.isActive ? "Active" : "Paused"}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Reward APY</span>
          <span className="text-base-content dark:text-white font-light">
            {calculateRewardRate(
              Number(item.rewardRates[lockPeriodIndex]),
              Number(item.lockPeriods[lockPeriodIndex]),
            ).toFixed(2)}{" "}
            %
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full border-t border-[#b2bfce] pt-2">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex justify-between items-center bg-base-100 border border-[#e8effb33] rounded-lg p-2 w-full">
            <input
              className="bg-transparent border-none outline-none text-white px-2 w-3/4"
              type="text"
              value={stakeAmount}
              onChange={handleStakeAmountChange}
            />
            <button
              onClick={handleMaxClick}
              className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
              disabled={isApprovePending || isStakePending}
            >
              MAX
            </button>{" "}
          </div>
        </div>

        {allowance?.toString() &&
          (parseEther(stakeAmount) > allowance ? (
            <button
              className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl"
              onClick={onApprove}
              disabled={isApprovePending}
            >
              {isApprovePending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Approve in order to Stake"
              )}
            </button>
          ) : (
            <button
              className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl bg-disabled-gray"
              onClick={onStake}
              disabled={isStakePending}
            >
              {isStakePending ? <span className="loading loading-spinner loading-sm"></span> : "Stake"}
            </button>
          ))}
      </div>
    </div>
  );
}
