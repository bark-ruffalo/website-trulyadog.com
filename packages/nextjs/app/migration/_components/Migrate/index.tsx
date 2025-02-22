import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import BalanceCard from "./BalanceCard";
import { Loader2 } from "lucide-react";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { Button } from "~~/components/ui/button";
import { Card, CardContent } from "~~/components/ui/card";
import { Input } from "~~/components/ui/input";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

export function Migrate() {
  const { address } = useAccount();
  const [pawsyAmount, setPawsyAmount] = useState<string>("");

  const { data: tokenMigrationContract } = useDeployedContractInfo("TokenMigration");
  const { data: pawsyContract } = useDeployedContractInfo("$PAWSY");
  const { data: mPawsyContract } = useDeployedContractInfo("$mPAWSY");

  const { data: pawsyBalance, refetch: refetchPawsyBalance } = useScaffoldReadContract({
    contractName: "$PAWSY",
    functionName: "balanceOf",
    args: [address],
  }) as unknown as { data: bigint; refetch: () => Promise<any> };

  const { data: mPawsyBalance, refetch: refetchMPawsyBalance } = useScaffoldReadContract({
    contractName: "$mPAWSY",
    functionName: "balanceOf",
    args: [address],
  }) as unknown as { data: bigint; refetch: () => Promise<any> };

  const { data: allowance, refetch: refetchTokenAllowance } = useScaffoldReadContract({
    contractName: "$PAWSY",
    functionName: "allowance",
    args: [address, tokenMigrationContract?.address],
  }) as unknown as { data: bigint; refetch: () => Promise<any> };

  const { writeContractAsync: approve, isPending: isApprovePending } = useScaffoldWriteContract("$PAWSY");
  const { writeContractAsync: migrate, isPending: isMigratePending } = useScaffoldWriteContract("TokenMigration");

  const addTokenToMetamask = async (address: string, symbol: string) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found");

      await window.ethereum.request({
        method: "wallet_watchAsset",
        params: {
          type: "ERC20",
          options: {
            address,
            symbol,
            decimals: 18,
          },
        },
      });
    } catch (error) {
      notification.error(`Error adding token to metamask: ${error}`);
    }
  };

  const onApprove = async (): Promise<void> => {
    try {
      await approve({
        functionName: "approve",
        args: [tokenMigrationContract?.address, parseEther(pawsyAmount)],
      });
      notification.success("Approval successful!");
      await refetchTokenAllowance();
    } catch (error) {
      notification.error(`Approval failed: ${error}`);
    }
  };
  const onMigrate = async (): Promise<void> => {
    if (!pawsyAmount || Number(pawsyAmount) === 0) {
      notification.error("Token Migration: Cannot migrate zero amount.");
      return;
    }

    try {
      const parsedAmount = parseEther(pawsyAmount);
      if (!allowance || parsedAmount > allowance) {
        notification.error("Token Migration: You should approve migrate amount to StakingVault.");
        return;
      }

      await migrate({
        functionName: "migrateTokens",
        args: [parsedAmount],
      });
      console.log("Migration successful!");
      await refetchMPawsyBalance();
      await refetchPawsyBalance();
      notification.success("Migration completed successfully!");
    } catch (error) {
      console.error("Migration failed:", error);
      notification.error(`Migration failed: ${error instanceof Error ? error.message : "Unknown error"}`);
    }
  };

  useEffect(() => {
    if (pawsyBalance && pawsyBalance > 0) {
      setPawsyAmount(formatEther(pawsyBalance));
    }
  }, [pawsyBalance]);

  const [inputError, setInputError] = useState<string>("");

  function handlePawsyAmountChange(event: ChangeEvent<HTMLInputElement>): void {
    const value = event.target.value;
    setInputError("");

    if (value === "" || /^\d*\.?\d{0,18}$/.test(value)) {
      if (value.split(".").length <= 2) {
        setPawsyAmount(value);

        if (value !== "") {
          const numValue = Number(value);
          if (pawsyBalance && numValue > Number(formatEther(pawsyBalance))) {
            setInputError("Amount exceeds balance");
          } else if (numValue < 0) {
            setInputError("Amount must be positive");
          }
        }
      }
    }
  }

  const handleMaxClick = () => {
    if (pawsyBalance) {
      setPawsyAmount(formatEther(pawsyBalance));
    } else {
      setPawsyAmount(formatEther(BigInt(0)));
    }
  };

  const { data: totalSupply } = useScaffoldReadContract({
    contractName: "$mPAWSY",
    functionName: "totalSupply",
  }) as { data: bigint };

  return (
    <Card className="relative w-full">
      <CardContent className="p-4 sm:p-8">
        <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
        <div className="relative z-10 w-full">
          <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
            <div className="w-full lg:w-7/12">
              <div className="flex flex-col gap-4 sm:gap-6">
                <div className="text-center">
                  <span className="text-xl sm:text-2xl font-semibold text-muted-foreground">
                    Currently migrated:{" "}
                    {totalSupply ? Math.round(Number(formatEther(totalSupply))).toLocaleString("en-US") : "Loading..."}
                  </span>
                </div>

                <p className="text-sm sm:text-base">
                  $mPAWSY (migrated $PAWSY) exists for versatility, our ecosystem's profitability, and our future so
                  that we do not depend on Virtuals Protocol. It's{" "}
                  <a
                    href="https://aerodrome.finance/swap?from=0x0b3e328455c4059eeb9e3f84b5543f74e24e7e1b&to=0x1437819df58ad648e35ed4f6f642d992684b2004&chain0=8453&chain1=8453"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    trading at the same price
                  </a>{" "}
                  as $PAWSY. Read the screenshot how it started in our Telegram group.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full">
                  <div className="w-full sm:w-1/2">
                    <BalanceCard
                      title="$PAWSY balance"
                      balance={
                        pawsyBalance
                          ? Number(formatEther(pawsyBalance)).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : "0"
                      }
                      tokenAddress={pawsyContract?.address}
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <BalanceCard
                      title="$mPAWSY balance"
                      balance={
                        mPawsyBalance
                          ? Number(formatEther(mPawsyBalance)).toLocaleString("en-US", {
                              minimumFractionDigits: 2,
                              maximumFractionDigits: 2,
                            })
                          : "0"
                      }
                      tokenAddress={mPawsyContract?.address}
                      onAddToMetamask={() => addTokenToMetamask(mPawsyContract?.address || "", "mPAWSY")}
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-3 sm:gap-4 w-full border-t border-border pt-3 sm:pt-4">
                  <div className="flex justify-between items-center gap-3 sm:gap-4 w-full">
                    <div className="flex justify-between items-center w-full relative">
                      <Input
                        className={inputError ? "border-destructive" : ""}
                        type="text"
                        placeholder="Enter amount"
                        value={pawsyAmount}
                        onChange={handlePawsyAmountChange}
                        disabled={isApprovePending || isMigratePending}
                      />
                      <Button
                        variant="noShadow"
                        size="sm"
                        onClick={handleMaxClick}
                        disabled={isApprovePending || isMigratePending}
                        className="absolute right-1.5 top-1.5 bottom-1.5 h-auto px-2"
                      >
                        MAX
                      </Button>
                    </div>
                  </div>

                  {inputError && <span className="text-destructive text-xs sm:text-sm mt-1">{inputError}</span>}

                  {allowance?.toString() &&
                    (parseEther(pawsyAmount || "0") > allowance ? (
                      <Button className="w-full sm:w-auto" onClick={onApprove} disabled={isApprovePending}>
                        {isApprovePending ? (
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        ) : (
                          "Approve in order to Migrate"
                        )}
                      </Button>
                    ) : (
                      <Button
                        className="w-full sm:w-auto"
                        onClick={onMigrate}
                        variant="default"
                        disabled={isMigratePending}
                      >
                        {isMigratePending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : "Migrate"}
                      </Button>
                    ))}
                </div>
              </div>
            </div>

            <div className="w-full lg:w-5/12 flex items-start justify-center mt-4 lg:mt-0">
              <div className="w-full max-w-[500px] flex flex-col gap-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/vote.png"
                    alt="community vote"
                    width={500}
                    height={300}
                    className="w-full h-auto object-contain"
                  />
                </div>
                <p className="text-sm sm:text-base text-center">
                  The first 10 persons to migrate and stake more than 5 million get airdropped an NFT from the{" "}
                  <a
                    href="https://opensea.io/collection/bark-ruffalo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-800 hover:text-blue-600 underline"
                  >
                    OG collection
                  </a>
                  . Thus, they can have two because they may also get one by trading staking rewards. This text will
                  disappear when ten persons have already done it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}