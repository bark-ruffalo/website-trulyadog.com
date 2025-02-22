"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { CampaignCard } from "./_components/CampaignCard";
import { RewardsCard } from "./_components/RewardsCard";
import type { NextPage } from "next";
import { useAccount } from "wagmi";
import { Alert, AlertDescription } from "~~/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
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
      <div className="flex-grow w-full px-2 sm:px-8 py-6 sm:py-12 bg-background">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[90%] relative [&_a]:text-green-800 [&_a]:underline [&_a:hover]:text-green-800/70">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Rewards & Income</h1>

            {error ? (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
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
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="/br-wealth-and-pawsy.jpg"
                        alt="Wealth and Pawsy"
                        width={800}
                        height={450}
                        className="object-cover rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[calc(50%-1rem)]">
                    <div className="relative w-full aspect-video rounded-lg overflow-hidden">
                      <Image
                        src="/br-playing-chess.jpg"
                        alt="Playing Chess"
                        width={800}
                        height={450}
                        className="object-cover rounded-lg"
                        priority
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-[calc(50%-1rem)] mb-6">
                    <RewardsCard />
                  </div>
                  <Card className="w-full">
                    <CardHeader>
                      <CardTitle>Income source 1</CardTitle>
                    </CardHeader>
                    <CardContent className="text-lg leading-relaxed">
                      <p>
                        A more complex sniper has been made available to the 5M club. We've removed some liquidity from
                        the operational funds (<strong>without selling {"$"}PAWSY</strong>, just so that we get {"$"}
                        VIRTUAL) to start that sniper for BR when the market is in bull stages. Coupled with our
                        expertise in detecting legitimate projects, we should have a good entry point and know when to
                        sell. The profit will go to current stakers (always depending on when the snapshot is taken). On
                        December 23, we had the{" "}
                        <a
                          href="https://x.com/TrulyADog/status/1871317844018839980"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          first income distribution round
                        </a>
                        , which was worth $30k. For those who held, a few days later it was worth 10x. Here's{" "}
                        <a
                          href="https://x.com/motleyjunks/status/1875144894320443756"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          a report from a happy DAO member
                        </a>
                        . Here's{" "}
                        <a
                          href="https://x.com/TrulyADog/status/1875244208195563569"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          another report
                        </a>{" "}
                        of someone who even donated back to the DAO because he was grateful. How many crypto projects do
                        you know where this happens? As more income sources from the ones mentioned in{" "}
                        <a href="/collaborate" className="text-primary hover:text-primary/90 underline">
                          Collaborate
                        </a>{" "}
                        materialize, they'll add more to the next income round. We'll strive for next rounds to be as
                        good as the first one! Our objective is to make our 500k-club stakers financially independent.
                        For the others, this should still be a great passive income and capital gain (from $PAWSY price
                        going to Mars) opportunity. Note that you can also make money by yourself with the tools, the
                        information and the terminals that we make available;{" "}
                        <b>expand the "But there's more!" section from the Staking page!</b>
                      </p>
                    </CardContent>
                  </Card>
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
