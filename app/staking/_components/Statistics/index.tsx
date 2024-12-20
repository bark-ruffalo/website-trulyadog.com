import { Card } from "./Card";
import { formatEther } from "viem";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface ContractResponse {
  data: bigint | undefined;
  error: Error | null;
}

interface RewardTokenResponse {
  data: string | undefined;
  error: Error | null;
}

interface TotalSupplyResponse {
  data: bigint;
}

export function Statistics() {
  const account = useAccount();

  const { data: totalStaking, error: totalStakingError } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getTotalStakedAmount",
  }) as ContractResponse;

  const { data: totalRewards } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getLifetimeRewards",
    args: [account.address],
  }) as ContractResponse;

  const { data: rewardTokenSymbol } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "symbol",
  }) as RewardTokenResponse;

  const { data: totalSupply } = useScaffoldReadContract({
    contractName: "$mPAWSY",
    functionName: "totalSupply",
  }) as TotalSupplyResponse;

  const cards = [
    {
      title: "TOTAL VALUE LOCKED",
      value: totalStakingError
        ? "Error loading data"
        : `${totalStaking ? Math.round(Number(formatEther(totalStaking))).toLocaleString("en-US") : "0"}`,
      className: totalStakingError ? "red" : "green",
    },
    {
      title: "$mPAWSY supply: ",
      value: `${totalSupply ? Math.round(Number(formatEther(totalSupply))).toLocaleString("en-US") : "0"}`,
      className: "green",
    },
    {
      title: "REWARDS YOU CLAIMED",
      value: `${totalRewards ? Number(formatEther(totalRewards)).toFixed(2) : "0.00"} ${rewardTokenSymbol ? rewardTokenSymbol : ""}`,
      className: "green",
    },
    // {
    //   title: "Claim Rewards",
    //   value: `Ability to claim rewards`,
    //   className: "green",
    // },
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
