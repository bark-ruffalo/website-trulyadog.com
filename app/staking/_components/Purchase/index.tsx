import { StakingCard } from "./Card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface PoolDataProps {
  poolId: string;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: string;
}
export function Purchase() {
  const { data: poolData } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getPools",
  }) as unknown as { data: PoolDataProps[] };

  return (
    <div className="m-1 grid gap-2">
      <div className="p-8 bg-black bg-opacity-10 rounded-lg flex flex-col h-full">
        <div className="w-full grid grid-rows-[auto_1fr] h-full">
          <div className="flex justify-between items-stretch w-full h-full min-h-[180px]">
            <div className="flex flex-wrap w-full mt-0">
              {poolData && poolData.map((item, index) => <StakingCard item={item} key={index}></StakingCard>)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
