import { Card } from "../Statistics/Card";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { getUserPayout } from "~~/utils/common/sir";

export function ClaimedRewards() {
  const account = useAccount();
  const { data: totalRewards, isLoading } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getLifetimeRewards",
    args: [account.address],
  });

  const { data: rewardTokenSymbol } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "symbol",
  });

  const cards = [
    {
      title: "If You Staked $10,000",
      value: `so far you earned ${getUserPayout(10000)}`,
      className: "green",
    },
    {
      title: "Rewards You Claimed",
      value: isLoading
        ? "Loading..."
        : `${totalRewards ? Number(formatEther(totalRewards)).toFixed(2) : "0.00"} ${rewardTokenSymbol ?? ""}`,
      className: "green",
    },
  ];

  return (
    <div className="w-full max-w-[95%] sm:max-w-[75%]">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-wrap items-center rounded-2xl w-full">
          <Card cards={cards} />
        </div>
      </div>
    </div>
  );
}
