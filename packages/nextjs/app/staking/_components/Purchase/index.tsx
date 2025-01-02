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
        <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl flex flex-col h-full relative">
          <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
          <div className="relative z-10 text-base-content dark:text-white">
            <div className="w-full grid grid-rows-[auto_1fr] h-full">
              <div className="flex items-center mb-2">
                <h2 className="mr-10 dark:text-white text-base-content whitespace-nowrap font-semibold uppercase">
                  Stake
                </h2>
              </div>
              <div className="flex justify-center items-stretch w-full h-full min-h-[180px]">
                <div className="flex flex-wrap justify-center w-full mt-0 gap-4">
                  {poolData.map((item, index) => item.isActive && <StakingCard item={item} key={index} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
