"use client";

import { useEffect, useState } from "react";
import { CampaignCard } from "./_components/CampaignCard";
import { RewardsCard } from "./_components/RewardsCard";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

// Define the Campaign type based on the array structure returned from the contract
type Campaign = readonly [
  bigint, // minBurnAmount
  bigint, // endDate
  bigint, // maxRewards
  bigint, // rewardsIssued
  string, // name
  `0x${string}`, // tokenAddress
  boolean, // isActive
  bigint, // participationLimit
  string, // description
  string, // imageUrl
];

interface CampaignData {
  minBurnAmount: bigint;
  endDate: bigint;
  maxRewards: bigint;
  rewardsIssued: bigint;
  isActive: boolean;
  tokenAddress: `0x${string}`;
}

const Rewards: NextPage = () => {
  const account = useAccount();
  const [campaignData, setCampaignData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const { data: campaign } = useScaffoldReadContract({
    contractName: "RewardsMarket",
    functionName: "getCampaign",
    args: [BigInt(0)], // Campaign ID 0
  });

  const { data: userParticipation } = useScaffoldReadContract({
    contractName: "RewardsMarket",
    functionName: "getUserParticipationCount",
    args: [account.address as `0x${string}`, BigInt(0)],
  });

  useEffect(() => {
    if (campaign) {
      // Access array elements by index instead of properties
      if (!campaign[6]) {
        // isActive is at index 6
        setError("This campaign is not currently active");
        return;
      }

      if (campaign[1] && campaign[1] < BigInt(Math.floor(Date.now() / 1000))) {
        // endDate is at index 1
        setError("This campaign has expired");
        return;
      }

      setCampaignData({
        minBurnAmount: campaign[0],
        endDate: campaign[1],
        maxRewards: campaign[2],
        rewardsIssued: campaign[3],
        isActive: campaign[6],
        tokenAddress: campaign[5],
      });
    }
  }, [campaign]);

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
              Rewards & Income
            </h1>

            {error ? (
              <div className="alert alert-error">{error}</div>
            ) : (
              <div className="space-y-6">
                {campaignData && (
                  <CampaignCard
                    campaign={campaignData}
                    userParticipation={userParticipation ? Number(userParticipation) : 0}
                  />
                )}
                <RewardsCard />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
