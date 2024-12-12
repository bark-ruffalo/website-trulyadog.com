import { PortfolioCard } from "./Card";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

interface UserLockProps {
  lockId: bigint;
  amount: bigint;
  lockPeriod: bigint;
  unlockTime: bigint;
  lastClaimTime: bigint;
  poolId: bigint;
  isLocked: boolean;
}
export function Portfolio() {
  const { address } = useAccount();
  const { data: stakeData } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getUserLocks",
    args: [address],
  }) as unknown as { data: UserLockProps[] };

  return (
    <div className="m-1 grid gap-2">
      {stakeData && stakeData.length > 0 && (
        <div className="p-8 bg-black bg-opacity-10 rounded-lg flex flex-col h-full">
          <div className="w-full grid grid-rows-[auto_1fr] h-full">
            <div className="flex items-center mb-2">
              <h2 className="mr-10 text-white whitespace-nowrap font-semibold uppercase">My Portfolio</h2>
            </div>
            <div className="flex justify-between items-stretch w-full h-full min-h-[180px]">
              <div className="flex flex-wrap w-full mt-0">
                {stakeData.map((item, index) => (
                  <PortfolioCard item={item} key={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
