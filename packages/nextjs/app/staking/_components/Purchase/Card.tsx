import { ChangeEvent, useEffect, useState } from "react";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { Badge } from "~~/components/ui/badge";
import { Button } from "~~/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "~~/components/ui/select";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { useStakingStore } from "~~/services/store/stakingStore";
import {
  calculateRewardRate,
  convertSecondsToDays,
  getPoolTokens,
  notification,
  scrollToPortfolio,
} from "~~/utils/scaffold-eth";

interface CardProps {
  poolId: bigint;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: boolean;
}

interface TokenBalanceResponse {
  data: bigint | undefined;
  error: Error | null;
  refetch: () => Promise<any>;
}

interface AllowanceResponse {
  data: bigint | undefined;
  error: Error | null;
  refetch: () => Promise<any>;
}

export function StakingCard({ item }: { item: CardProps }) {
  const { address } = useAccount();
  const [stakeAmount, setStakeAmount] = useState<string>("");
  const [lockPeriodIndex, setLockPeriodIndex] = useState<number>(0);

  const {
    data: tokenBalance,
    error: tokenBalanceError,
    refetch: refetchTokenBalance,
  } = useScaffoldReadContract({
    contractName: getPoolTokens(Number(item.poolId)),
    functionName: "balanceOf",
    args: [address],
  }) as unknown as TokenBalanceResponse;
  const { data: stakingVault } = useDeployedContractInfo("StakingVault");
  const { data: allowance, refetch: refetchTokenAllowance } = useScaffoldReadContract({
    contractName: getPoolTokens(Number(item.poolId)),
    functionName: "allowance",
    args: [address, stakingVault?.address],
  }) as unknown as AllowanceResponse;
  const { writeContractAsync: approve, isPending: isApprovePending } = useScaffoldWriteContract(
    getPoolTokens(Number(item.poolId)),
  );
  const { writeContractAsync: stake, isPending: isStakePending } = useScaffoldWriteContract("StakingVault");

  const triggerPortfolioRefresh = useStakingStore(state => state.triggerRefresh);

  const onApprove = async (): Promise<void> => {
    try {
      await approve({
        functionName: "approve",
        args: [stakingVault?.address, parseEther(stakeAmount)],
      });
      notification.success("Approval successful!");
      await refetchTokenAllowance();
    } catch (error) {
      notification.error(`Approval failed: ${error}`);
    }
  };

  const onStake = async (): Promise<void> => {
    if (!stakeAmount || Number(stakeAmount) === 0) {
      notification.error("Staking Vault: Cannot stake zero amount.");
      return;
    }

    try {
      const parsedAmount = parseEther(stakeAmount);
      if (!allowance || parsedAmount > allowance) {
        notification.error("Staking Vault: You should approve stake amount to StakingVault.");
        return;
      }

      await stake({
        functionName: "stake",
        args: [item.poolId, parsedAmount, BigInt(item.lockPeriods[lockPeriodIndex])],
      });
      notification.success("Stake successful!");
      await refetchTokenBalance();
      triggerPortfolioRefresh();
      scrollToPortfolio();
    } catch (error) {
      console.error("Staking failed:", error);
      notification.error(`Staking failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  useEffect(() => {
    if (tokenBalanceError) {
      notification.error(`Error fetching token balance: ${tokenBalanceError.message}`);
      return;
    }

    if (tokenBalance && tokenBalance > 0) {
      setStakeAmount(formatEther(tokenBalance));
    }
  }, [tokenBalance, tokenBalanceError]);

  const handleMaxClick = () => {
    if (tokenBalance) {
      setStakeAmount(formatEther(tokenBalance));
    } else {
      setStakeAmount(formatEther(BigInt(0)));
    }
  };

  function handleStakeAmountChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;

    if (value === "" || /^\d*\.?\d{0,18}$/.test(value)) {
      if (value.split(".").length <= 2) {
        setStakeAmount(value);
      }
    }
  }
  return (
    <Card className="w-full sm:min-w-[400px] sm:w-auto">
      <CardHeader className="relative">
        <CardTitle>
          {getPoolTokens(Number(item.poolId))}
          <Badge className="absolute top-2 right-2" variant={item.isActive ? "default" : "neutral"}>
            {calculateRewardRate(
              Number(item.rewardRates[lockPeriodIndex]) / (item.poolId === 2n ? 66 : 1),
              Number(item.lockPeriods[lockPeriodIndex]),
            ).toFixed(2)}{" "}
            % APY
          </Badge>
        </CardTitle>
        <CardDescription className="flex gap-2">
          {item.isActive ? "Active" : "Paused"} &bull; Token: <Address address={item.stakingToken} size="sm" />
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div>
          <label>Lock Period:</label>
          <Select
            value={lockPeriodIndex.toString()}
            onValueChange={(value) => setLockPeriodIndex(Number(value))}
          >
            <SelectTrigger className="bg-bw">
              <SelectValue placeholder="Select a lock period" />
            </SelectTrigger>
            <SelectContent className="bg-bw">
              <SelectGroup>
                {item.lockPeriods.map((period, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {convertSecondsToDays(Number(period))} Days
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div className="mt-2">
          <label>Stake Amount:</label>
          <div className="relative">
            <Input type="number" value={stakeAmount} onChange={handleStakeAmountChange} />
            <Button
              size="sm"
              variant="noShadow"
              className="absolute right-2 top-1/2 -translate-y-1/2 h-7"
              onClick={handleMaxClick}
              disabled={isApprovePending || isStakePending}
            >
              Max
            </Button>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        {allowance?.toString() &&
          (parseEther(stakeAmount) > allowance ? (
            <Button onClick={onApprove} disabled={isApprovePending} className="w-full" variant="neutral">
              {isApprovePending ? (
                <span className="loading loading-spinner loading-sm"></span>
              ) : (
                "Approve to Stake"
              )}
            </Button>
          ) : (
            <Button onClick={onStake} disabled={isStakePending} className="w-full" variant="neutral">
              {isStakePending ? <span className="loading loading-spinner loading-sm"></span> : "Stake"}
            </Button>
          ))}
      </CardFooter>
    </Card>
  );
}
