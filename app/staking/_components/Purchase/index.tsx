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
    <div className="m-1 grid gap-2">
      {poolData && poolData.length > 0 && (
        <div className="p-8 bg-black bg-opacity-10 rounded-lg flex flex-col h-full">
          <div className="w-full grid grid-rows-[auto_1fr] h-full">
            <div className="flex items-center mb-2">
              <h2 className="mr-10 text-white whitespace-nowrap font-semibold uppercase">Stake</h2>
            </div>
            <div className="flex justify-between items-stretch w-full h-full min-h-[180px]">
              <div className="flex flex-wrap w-full mt-0">
                {poolData.map((item, index) => item.isActive && <StakingCard item={item} key={index} />)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
