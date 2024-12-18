import { Card } from "./Card";
import { formatEther } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export function Statistics() {
  // const account = useAccount();

  const { data: totalStaking } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getTotalStakedAmount",
  }) as { data: bigint };

  // const { data: totalUsers } = useScaffoldReadContract({
  //   contractName: "StakingVault",
  //   functionName: "getTotalLockedUsers",
  // });

  // const { data: totalRewards } = useScaffoldReadContract({
  //   contractName: "StakingVault",
  //   functionName: "getLifetimeRewards",
  //   args: [account.address],
  // });

  // const { data: rewardTokenSymbol } = useScaffoldReadContract({
  //   contractName: "RewardToken",
  //   functionName: "symbol",
  // });

  const cards = [
    {
      title: "TOTAL VALUE LOCKED",
      value: `${totalStaking ? Number(formatEther(totalStaking)).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : "0.00"}`,
      className: "green",
    },
    // {
    //   title: "TOTAL STAKERS",
    //   value: `${totalUsers}`,
    //   className: "green",
    // },
    // {
    //   title: "REWARDS YOU CLAIMED",
    //   value: `${totalRewards ? Number(formatEther(totalRewards)).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2}) : '0.00'} ${rewardTokenSymbol}`,
    //   className: "green",
    // },
    {
      title: "Claim Rewards",
      value: `Ability to claim rewards`,
      className: "green",
    },
    {
      title: "TO BE ADDED SOON",
      value: `Rewards Market page`,
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
