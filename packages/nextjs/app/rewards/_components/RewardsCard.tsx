import { useState } from "react";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

export function RewardsCard() {
  const account = useAccount();
  const [burnAmount, setBurnAmount] = useState<string>("25000");
  const [error, setError] = useState<string | null>(null);
  const [inputValue, setInputValue] = useState<number>(25000);

  const { data: rewardBalance } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "balanceOf",
    args: [account.address as `0x${string}`],
  });

  const { data: rewardsMarketContract } = useDeployedContractInfo("RewardsMarket");

  const { data: allowance } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "allowance",
    args: [account.address as `0x${string}`, rewardsMarketContract?.address],
  });

  const { writeContractAsync: approve, isPending: isApprovePending } = useScaffoldWriteContract("RewardToken");
  const { writeContractAsync: triggerReward, isPending: isBurnPending } = useScaffoldWriteContract("RewardsMarket");

  const handleApprove = async () => {
    try {
      setError(null);
      if (!burnAmount || isNaN(Number(burnAmount))) {
        throw new Error("Please enter a valid amount");
      }

      await approve({
        functionName: "approve",
        args: [rewardsMarketContract?.address, parseEther(burnAmount)],
      });
      notification.success("Approval successful!");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  const handleTriggerReward = async () => {
    try {
      setError(null);
      if (!burnAmount || isNaN(Number(burnAmount))) {
        throw new Error("Please enter a valid amount");
      }

      if (!rewardBalance || parseEther(burnAmount) > rewardBalance) {
        throw new Error("Insufficient DRUGS balance");
      }

      if (!allowance || parseEther(burnAmount) > allowance) {
        throw new Error("Please approve tokens first");
      }

      await triggerReward({
        functionName: "triggerReward",
        args: [BigInt(0), parseEther(burnAmount)],
      });
      notification.success("Burn successful!");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  const isLoading = isApprovePending || isBurnPending;
  const needsApproval = !allowance || (burnAmount && parseEther(burnAmount) > allowance);

  return (
    <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
      <div className="absolute inset-0 rounded-2xl z-0 bg-green-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
      <div className="relative z-10 text-base-content dark:text-white">
        <h2 className="text-2xl font-bold mb-4">Your DRUGS Balance</h2>
        <p className="text-xl mb-4">
          {rewardBalance
            ? Number(formatEther(rewardBalance)).toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })
            : "0.00"}{" "}
          DRUGS
        </p>

        <div className="space-y-4">
          <div>
            <label className="label">
              <span className="label-text text-base-content dark:text-white">Amount to Burn</span>
            </label>
            <input
              type="number"
              value={inputValue}
              readOnly
              className="input input-bordered w-full"
              placeholder="Enter amount to burn"
            />
          </div>

          {error && <div className="alert alert-error">{error}</div>}

          {needsApproval ? (
            <button className="btn btn-primary w-full" onClick={handleApprove} disabled={isLoading || !burnAmount}>
              {isApprovePending ? <span className="loading loading-spinner"></span> : "Approve DRUGS"}
            </button>
          ) : (
            <button
              className="btn btn-primary w-full"
              onClick={handleTriggerReward}
              disabled={isLoading || !burnAmount}
            >
              {isBurnPending ? <span className="loading loading-spinner"></span> : "Burn DRUGS for NFT"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
