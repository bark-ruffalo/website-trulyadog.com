import Image from "next/image";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { convertSecondsToDays, notification } from "~~/utils/scaffold-eth";

interface CardProps {
  lockId: bigint;
  amount: bigint;
  lockPeriod: bigint;
  unlockTime: bigint;
  lastClaimTime: bigint;
  poolId: bigint;
  isLocked: boolean;
}

export function PortfolioCard({ item }: { item: CardProps }) {
  const { address } = useAccount();
  const { writeContractAsync: unstake, isPending: isUnstakePending } = useScaffoldWriteContract("StakingVault");

  const { writeContractAsync: claimRewards, isPending: isClaimRewardPending } =
    useScaffoldWriteContract("StakingVault");

  // Add rewards calculation read
  const { data: pendingRewards, refetch: refetchPendingRewards } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "calculateRewards",
    args: [address, item.lockId],
  });

  // Convert unlockTime and lastClaimTime to date strings
  const unlockDate = new Date(Number(item.unlockTime) * 1000); // Convert seconds to milliseconds
  const lastClaimDate = new Date(Number(item.lastClaimTime) * 1000); // Convert seconds to milliseconds

  // Format the dates
  const unlockDateString = unlockDate.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
  const lastClaimDateString = lastClaimDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Add this helper function to check if unlock time has passed
  const canUnstake = () => {
    return Date.now() >= Number(item.unlockTime) * 1000;
  };

  const onUnstake = async () => {
    try {
      await unstake({
        functionName: "unstake",
        args: [item.poolId, item.lockId],
      });
      notification.success("Unstake successful!");
      // Optionally reset stake amount or update state here
    } catch (error) {
      notification.error(`Unstaking failed: ${error}`);
    }
  };

  const onClaimRewards = async () => {
    try {
      await claimRewards({
        functionName: "claimRewards",
        args: [item.poolId, item.lockId],
      });
      notification.success("Rewards claimed successfully!");
      refetchPendingRewards();
    } catch (error) {
      notification.error(`Claiming rewards failed: ${error}`);
    }
  };

  const { data: rewardTokenContract } = useDeployedContractInfo("RewardToken");

  const addTokenToMetamask = async () => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");

      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address: rewardTokenContract?.address || "",
            symbol: "DRUGS",
            decimals: 18,
          },
        },
      });
    } catch (error) {
      notification.error(`Error adding token to metamask: ${error}`);
    }
  };

  return (
    <div className="flex flex-col justify-between p-4 sm:p-5 min-h-[120px] w-full sm:max-w-[380px] bg-base-200 dark:bg-[#8d54751a] rounded-lg relative m-1 box-border">
      <div className="flex flex-col mb-2 gap-2 w-full text-sm sm:text-base">
        <div className="flex justify-between w-full gap-8">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Pool Index</span>
          <span className="text-base-content dark:text-white font-light">{item.poolId.toString()}</span>
        </div>
        <div className="flex justify-between w-full gap-8">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Staked Amount</span>
          <span className="text-base-content dark:text-white font-light">{formatEther(item.amount)}</span>
        </div>
        <div className="flex justify-between w-full gap-8">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Lock Period</span>
          <span className="text-base-content dark:text-white font-light">
            {convertSecondsToDays(Number(item.lockPeriod))} Days
          </span>
        </div>
        <div className="flex justify-between w-full gap-8">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Unlocked At</span>
          <span className="text-base-content dark:text-white font-light">{unlockDateString}</span>
        </div>
        <div className="flex justify-between w-full gap-8">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Last Claim Time</span>
          <span className="text-base-content dark:text-white font-light">
            {item.lastClaimTime > 0 ? lastClaimDateString : "Not claimed yet"}
          </span>
        </div>
        <div className="flex justify-between w-full gap-8">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Pending Rewards</span>
          <span className="text-base-content dark:text-white font-light">
            {pendingRewards ? Number(formatEther(pendingRewards)).toFixed(2) : "0"}
          </span>
        </div>
        <div className="flex justify-between w-full gap-8">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Lock Status</span>
          <span className="text-base-content dark:text-white font-light">{item.isLocked ? "Locked" : "Unlocked"}</span>
        </div>
      </div>
      {item.isLocked && (
        <div className="flex flex-col gap-2 w-full border-t border-[#b2bfce] pt-2">
          <div className="flex justify-between items-center gap-2">
            <button
              className="flex-1 justify-center items-center px-8 py-2 bg-gradient-to-r from-[#2c1656] to-[#7d3560] text-white rounded-xl"
              onClick={() => onClaimRewards()}
              disabled={!pendingRewards || pendingRewards === 0n}
            >
              {isClaimRewardPending ? <span className="loading loading-spinner loading-sm"></span> : "Claim Rewards"}
            </button>
            {item.lastClaimTime > 0 && (
              <button
                onClick={addTokenToMetamask}
                className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-gradient-to-r from-[#1976d2] to-[#64b5f6] hover:from-[#1565c0] hover:to-[#42a5f5] text-white rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg"
              >
                <Image src="/metamask-fox.svg" alt="MetaMask" width={20} height={20} className="w-5 sm:w-6" />
              </button>
            )}
          </div>
          <button
            className={`flex justify-center items-center px-8 py-2 bg-gradient-to-r ${
              canUnstake() ? "from-[#2c1656] to-[#7d3560]" : "from-gray-400 to-gray-500 cursor-not-allowed"
            } text-white rounded-xl`}
            onClick={() => onUnstake()}
            disabled={!canUnstake() || isUnstakePending}
          >
            {isUnstakePending ? <span className="loading loading-spinner loading-sm"></span> : "Unstake"}
          </button>
        </div>
      )}
    </div>
  );
}
