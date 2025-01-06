import { ChangeEvent, useEffect, useState } from "react";
import Image from "next/image";
import BalanceCard from "./BalanceCard";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
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
    <div className="p-4 sm:p-8 bg-base-200 bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative w-full">
      <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
      <div className="relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
          <div className="w-full lg:w-7/12">
            <div className="flex flex-col gap-4 sm:gap-6">
              <div className="text-center">
                <span className="text-xl sm:text-2xl font-semibold text-base-content/70 dark:text-white/70">
                  Currently migrated:{" "}
                  {totalSupply ? Math.round(Number(formatEther(totalSupply))).toLocaleString("en-US") : "Loading..."}
                </span>
              </div>

              <p className="text-sm sm:text-base">
                $mPAWSY (migrated $PAWSY) exists for versatility, our ecosystem&apos;s profitability, and our future so
                that we do not depend on Virtuals Protocol. Read the screenshot how it started in our Telegram group.
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

              <div className="flex flex-col gap-3 sm:gap-4 w-full border-t border-gray-300 dark:border-[#b2bfce] pt-3 sm:pt-4">
                <div className="flex justify-between items-center gap-3 sm:gap-4 w-full">
                  <div className="flex justify-between items-center bg-gray-100 dark:bg-base-100 border border-gray-300 dark:border-[#e8effb33] rounded-lg p-2 w-full relative">
                    <input
                      className={`bg-transparent border-none outline-none text-gray-800 dark:text-white px-2 w-full text-sm sm:text-base ${
                        inputError ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="Enter amount"
                      value={pawsyAmount}
                      onChange={handlePawsyAmountChange}
                      disabled={isApprovePending || isMigratePending}
                    />
                    <button
                      onClick={handleMaxClick}
                      className="px-2 py-1 text-xs sm:text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                      disabled={isApprovePending || isMigratePending}
                    >
                      MAX
                    </button>
                  </div>
                </div>

                {inputError && <span className="text-red-500 text-xs sm:text-sm mt-1">{inputError}</span>}

                {allowance?.toString() &&
                  (parseEther(pawsyAmount || "0") > allowance ? (
                    <button
                      className="flex justify-center items-center px-3 sm:px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl text-sm sm:text-base w-full sm:w-auto"
                      onClick={onApprove}
                      disabled={isApprovePending}
                    >
                      {isApprovePending ? (
                        <span className="loading loading-spinner loading-sm"></span>
                      ) : (
                        "Approve in order to Migrate"
                      )}
                    </button>
                  ) : (
                    <button
                      className="flex justify-center items-center px-3 sm:px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl bg-disabled-gray text-sm sm:text-base w-full sm:w-auto"
                      onClick={onMigrate}
                      disabled={isMigratePending}
                    >
                      {isMigratePending ? <span className="loading loading-spinner loading-sm"></span> : "Migrate"}
                    </button>
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
                  className="text-blue-400 hover:text-blue-300 underline"
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
    </div>
  );
}
