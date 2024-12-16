import { Card } from "./Card";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export function Statistics() {
  const account = useAccount();

  const { data: totalStaking } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getTotalStakedAmount",
  }) as { data: bigint };

  const { data: totalUsers } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getTotalLockedUsers",
  });

  const { data: totalRewards } = useScaffoldReadContract({
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
      title: "TOTAL VALUE LOCKED",
      value: `${totalStaking ? formatEther(totalStaking) : 0}`,
      className: "green",
    },
    {
      title: "TOTAL STAKERS",
      value: `${totalUsers}`,
      className: "green",
    },
    {
      title: "LIFETIME REWARDS",
      value: `${totalRewards ? totalRewards : 0} ${rewardTokenSymbol}`,
      className: "green",
    },
  ];

  return (
    <div className="flex flex-wrap items-center">
      <div className="flex flex-wrap items-center rounded-2xl w-full">
        <Card cards={cards} />
      </div>
    </div>
  );
}
