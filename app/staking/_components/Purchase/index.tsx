import { StakingCard } from "./Card";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface PoolDataProps {
  poolId: bigint;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: boolean;
}

const lockPeriods = [
  (50 * 24 * 60 * 60).toString(),
  (100 * 24 * 60 * 60).toString(),
  (200 * 24 * 60 * 60).toString(),
  (400 * 24 * 60 * 60).toString(),
];

const staticPoolData = [
  {
    poolId: BigInt(0),
    isActive: true,
    stakingToken: "0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a",
    lockPeriods,
    rewardRates: ["14", "55", "164", "438"],
  },
  {
    poolId: BigInt(1),
    isActive: true,
    stakingToken: "0x1437819DF58Ad648e35ED4f6F642d992684B2004",
    lockPeriods,
    rewardRates: ["68", "164", "383", "876"],
  },
  {
    poolId: BigInt(2),
    isActive: true,
    stakingToken: "0x96fc64cae162c1cb288791280c3eff2255c330a8",
    lockPeriods,
    rewardRates: ["123", "274", "602", "1314"],
  },
];

export function Purchase() {
  // const { data: poolData } = useScaffoldReadContract({
  //   contractName: "StakingVault",
  //   functionName: "getPools",
  // }) as unknown as { data: PoolDataProps[] };

  return (
    <div className="m-1 grid gap-2">
      {staticPoolData && staticPoolData.length > 0 && (
        <div className="p-8 bg-black bg-opacity-10 rounded-lg flex flex-col h-full">
          <div className="w-full grid grid-rows-[auto_1fr] h-full">
            <div className="flex items-center mb-2">
              <h2 className="mr-10 text-white whitespace-nowrap font-semibold uppercase">Stake</h2>
            </div>
            <div className="flex justify-between items-stretch w-full h-full min-h-[180px]">
              <div className="flex flex-wrap w-full mt-0">
                {staticPoolData.map((item, index) => item.isActive && <StakingCard item={item} key={index} />)}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
