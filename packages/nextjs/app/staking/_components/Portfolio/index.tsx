import { useEffect } from "react";
import { PortfolioCard } from "./Card";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useStakingStore } from "~~/services/store/stakingStore";
import { notification } from "~~/utils/scaffold-eth";

interface UserLockProps {
  lockId: bigint;
  amount: bigint;
  lockPeriod: bigint;
  unlockTime: bigint;
  lastClaimTime: bigint;
  poolId: bigint;
  isLocked: boolean;
}

interface StakeDataResponse {
  data: UserLockProps[] | undefined;
  error: Error | null;
  refetch: () => Promise<void>;
}

export function Portfolio() {
  const { address, isConnected } = useAccount();

  const {
    data: stakeData,
    error: stakeError,
    refetch: refetchStakeData,
  } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getUserLocks",
    args: [address || undefined],
  });

  const shouldRefresh = useStakingStore(state => state.shouldRefresh);

  useEffect(() => {
    if (stakeError) {
      notification.error(`Error fetching stake data: ${stakeError.message}`);
      return;
    }
    refetchStakeData();
  }, [shouldRefresh, stakeError, refetchStakeData]);

  if (!isConnected) {
    return (
      <div className="w-full text-center text-base-content dark:text-white">
        Please connect your wallet to view your portfolio
      </div>
    );
  }

  if (stakeError) {
    return <div className="w-full text-center text-red-500">Error loading portfolio data: {stakeError.message}</div>;
  }

  return (
    <div data-component="portfolio" className="w-full max-w-[95%] sm:max-w-[75%]">
      {stakeData && stakeData.length > 0 && (
        <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-lg flex flex-col h-full">
          <div className="w-full grid grid-rows-[auto_1fr] h-full">
            <div className="flex items-center mb-2">
              <h2 className="mr-10 text-white whitespace-nowrap font-semibold uppercase">My Portfolio</h2>
            </div>
            <div className="flex justify-center items-stretch w-full h-full min-h-[180px]">
              <div className="flex flex-wrap justify-center w-full mt-0 gap-4">
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
