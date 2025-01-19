import { StakingCard } from "./Card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface PoolDataProps {
  poolId: bigint;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: boolean;
}

export function Purchase() {
  const { data: poolData } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getPools",
  }) as unknown as { data: PoolDataProps[] };

  return (
    <div className="w-full max-w-[95%] sm:max-w-[75%]">
      {poolData && poolData.length > 0 && (
        <div>
          <h2 className="text-2xl font-bold text-center">Staking Pools</h2>
          <div className="relative z-10">
            <div className="flex justify-center items-stretch w-full h-full min-h-[180px]">
              <div className="flex flex-col sm:flex-row flex-wrap justify-center w-full mt-0 gap-8">
                {poolData.map((item, index) => item.isActive && <StakingCard item={item} key={index} />)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
