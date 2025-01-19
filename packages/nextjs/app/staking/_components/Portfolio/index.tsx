import { useEffect } from "react";
import { PortfolioCard } from "./Card";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { useStakingStore } from "~~/services/store/stakingStore";
import { notification } from "~~/utils/scaffold-eth";

export function Portfolio() {
  const account = useAccount();

  const {
    data: stakeData,
    error: stakeError,
    refetch: refetchStakeData,
  } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getUserLocks",
    args: [account.address],
  });

  const shouldRefresh = useStakingStore(state => state.shouldRefresh);

  useEffect(() => {
    if (stakeError) {
      notification.error(`Error fetching stake data: ${stakeError.message}`);
      return;
    }
    if (account.isConnected) {
      refetchStakeData();
    }
  }, [shouldRefresh, stakeError, refetchStakeData, account.isConnected]);

  if (!account.isConnected) {
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
        <div>
          <h2 className="text-2xl font-bold text-center">My Portfolio</h2>
          <div className="flex justify-center items-stretch w-full h-full min-h-[180px]">
          <div className="flex flex-wrap justify-center w-full mt-0 gap-8">
            {stakeData.map((item, index) => (
            <PortfolioCard item={item} key={index} />
            ))}
          </div>
          </div>
        </div>
      )}
    </div>
  );
}
