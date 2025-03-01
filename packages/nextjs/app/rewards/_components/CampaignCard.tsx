import { useEffect, useState } from "react";
import { formatEther } from "viem";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";

// type Campaign = readonly [
//   bigint, // minBurnAmount
//   bigint, // endDate
//   bigint, // maxRewards
//   bigint, // rewardsIssued
//   string, // name
//   `0x${string}`, // tokenAddress
//   boolean, // isActive
//   bigint, // participationLimit
//   string, // description
//   string, // imageUrl
// ];

interface CampaignData {
  minBurnAmount: bigint;
  endDate: bigint;
  maxRewards: bigint;
  rewardsIssued: bigint;
  isActive: boolean;
  tokenAddress: `0x${string}`;
}

interface CampaignCardProps {
  campaign: CampaignData;
  userParticipation: number;
}

export function CampaignCard({ campaign /* , userParticipation */ }: CampaignCardProps) {
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    const updateCountdown = () => {
      if (!campaign.endDate) return;

      const now = Math.floor(Date.now() / 1000);
      const endTime = Number(campaign.endDate);
      const diff = endTime - now;

      if (diff <= 0) {
        setTimeLeft("Expired");
        return;
      }

      const days = Math.floor(diff / (24 * 60 * 60));
      setTimeLeft(`${days} days`);
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000 * 60); // Update every minute

    return () => clearInterval(interval);
  }, [campaign.endDate]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Rewards Campaign 1: OG NFTs</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
        <div className="relative z-10 space-y-2">
          <p>
            <span className="font-semibold">Minimum Burn Required:</span>{" "}
            {campaign.minBurnAmount ? formatEther(campaign.minBurnAmount) : "0"} rPAWSY
          </p>
          <p>
            <span className="font-semibold">Campaign Ends In:</span>
            {/* {timeLeft} */} <span className="text-red-200">Temporarily Disabled</span>
          </p>
          <p>
            <span className="font-semibold">Maximum Rewards:</span>{" "}
            {campaign.maxRewards ? Number(campaign.maxRewards).toLocaleString() : "Unlimited"} NFTs
          </p>
          <p>
            <span className="font-semibold">Rewards Claimed:</span>{" "}
            {campaign.rewardsIssued ? Number(campaign.rewardsIssued).toLocaleString() : "0"} NFTs
          </p>
          {/* <p>
            <span className="font-semibold">Your Participations:</span> {userParticipation}
          </p> */}
          <div className="mt-4">
            <a
              href="https://opensea.io/collection/bark-ruffalo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/90 underline"
            >
              View NFT Collection on OpenSea
            </a>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
