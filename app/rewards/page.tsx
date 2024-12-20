"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CampaignCard } from "./_components/CampaignCard";
import { RewardsCard } from "./_components/RewardsCard";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

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
          <div className="w-full max-w-[95%] sm:max-w-[90%] relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
              Rewards & Income
            </h1>

            {error ? (
              <div className="alert alert-error">{error}</div>
            ) : (
              <div className="w-full space-y-6 lg:space-y-8">
                <div className="w-full lg:flex lg:flex-wrap lg:gap-8">
                  <div className="w-full lg:w-[calc(50%-1rem)] mb-6">
                    {campaignData && (
                      <CampaignCard
                        campaign={campaignData}
                        userParticipation={userParticipation ? Number(userParticipation) : 0}
                      />
                    )}
                  </div>
                  <div className="w-full lg:w-[calc(50%-1rem)] mb-6 lg:mb-0">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                      <Image
                        src="/br-wealth-and-pawsy.jpg"
                        alt="Wealth and Pawsy"
                        width={800}
                        height={450}
                        className="object-cover rounded-2xl"
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[calc(50%-1rem)]">
                    <div className="relative w-full aspect-video rounded-2xl overflow-hidden">
                      <Image
                        src="/br-playing-chess.jpg"
                        alt="Playing Chess"
                        width={800}
                        height={450}
                        className="object-cover rounded-2xl"
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[calc(50%-1rem)] mb-6">
                    <RewardsCard />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rewards;
