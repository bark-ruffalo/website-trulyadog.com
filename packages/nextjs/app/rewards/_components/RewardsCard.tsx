import { useState } from "react";
import { Loader2 } from "lucide-react";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { Alert, AlertDescription } from "~~/components/ui/alert";
import { Button } from "~~/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Label } from "~~/components/ui/label";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

export function RewardsCard() {
  const account = useAccount();
  const [burnAmount] = useState<string>("25000");
  const [error, setError] = useState<string | null>(null);
  const [inputValue] = useState<number>(25000);

  const { data: rewardBalance } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "balanceOf",
    args: [account.address as `0x${string}`],
  });

  const { data: rewardsMarketContract } = useDeployedContractInfo("RewardsMarket");

  const { data: allowance } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "allowance",
    args: [account.address as `0x${string}`, rewardsMarketContract?.address],
  });

  const { writeContractAsync: approve, isPending: isApprovePending } = useScaffoldWriteContract("RewardToken");
  const { writeContractAsync: triggerReward, isPending: isBurnPending } = useScaffoldWriteContract("RewardsMarket");

  const handleApprove = async () => {
    try {
      setError(null);
      if (!burnAmount || isNaN(Number(burnAmount))) {
        throw new Error("Please enter a valid amount");
      }

      await approve({
        functionName: "approve",
        args: [rewardsMarketContract?.address, parseEther(burnAmount)],
      });
      notification.success("Approval successful!");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  const handleTriggerReward = async () => {
    try {
      setError(null);
      if (!burnAmount || isNaN(Number(burnAmount))) {
        throw new Error("Please enter a valid amount");
      }

      if (!rewardBalance || parseEther(burnAmount) > rewardBalance) {
        throw new Error("Insufficient DRUGS balance");
      }

      if (!allowance || parseEther(burnAmount) > allowance) {
        throw new Error("Please approve tokens first");
      }

      await triggerReward({
        functionName: "triggerReward",
        args: [BigInt(0), parseEther(burnAmount)],
      });
      notification.success("Burn successful!");
    } catch (error) {
      setError(error instanceof Error ? error.message : "An unknown error occurred");
    }
  };

  const isLoading = isApprovePending || isBurnPending;
  const needsApproval = !allowance || (burnAmount && parseEther(burnAmount) > allowance);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Your DRUGS Balance</CardTitle>
      </CardHeader>
      <CardContent className="relative">
        <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
        <div className="relative z-10 space-y-4">
          <p className="text-xl">
            {rewardBalance
              ? Number(formatEther(rewardBalance)).toLocaleString("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })
              : "0.00"}{" "}
            DRUGS
          </p>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="burnAmount">Amount to Burn</Label>
              <Input id="burnAmount" type="number" value={inputValue} readOnly placeholder="Enter amount to burn" />
            </div>

            {error && (
              <Alert variant="destructive">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {needsApproval ? (
              <Button className="w-full" onClick={handleApprove} variant="neutral" disabled={isLoading || !burnAmount}>
                {isApprovePending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Approve DRUGS"}
              </Button>
            ) : (
              <Button
                className="w-full"
                onClick={handleTriggerReward}
                variant="neutral"
                disabled={isLoading || !burnAmount}
              >
                {isBurnPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Burn DRUGS for NFT"}
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
