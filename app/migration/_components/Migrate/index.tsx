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
  });

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
      console.error("Error adding token to metamask:", error);
    }
  };

  const onApprove = async (): Promise<void> => {
    try {
      await approve({
        functionName: "approve",
        args: [tokenMigrationContract?.address, parseEther(pawsyAmount)],
      });
      console.log("Approval successful!");
      await refetchTokenAllowance();
    } catch (error) {
      console.error("Approval failed:", error);
    }
  };
  const onMigrate = async (): Promise<void> => {
    if (!pawsyAmount) {
      notification.error("Token Migration: Cannot migrate zero amount.");
      return;
    }

    if (!allowance || BigInt(pawsyAmount) > allowance) {
      notification.error("Token Migration: You should approve migrate amount to StakingVault.");
      return;
    }

    try {
      await migrate({
        functionName: "migrateTokens",
        args: [parseEther(pawsyAmount)],
      });
      console.log("Stake successful!");
      await refetchMPawsyBalance();
      await refetchPawsyBalance();
    } catch (error) {
      console.error("Staking failed:", error);
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

    if (value === "" || /^\d*\.?\d*$/.test(value)) {
      setPawsyAmount(value);

      const numValue = Number(value);
      if (pawsyBalance && numValue > Number(formatEther(pawsyBalance))) {
        setInputError("Amount exceeds balance");
      } else if (numValue < 0) {
        setInputError("Amount must be positive");
      }
    }
  }

  const handleMaxClick = () => {
    if (pawsyBalance) {
      setPawsyAmount(formatEther(pawsyBalance));
    }
  };

  return (
    <div className="m-1 grid grid-cols-12 gap-8 w-[90%]">
      <div className="col-span-7 flex flex-col gap-6">
        <h2 className="text-2xl text-white font-semibold mb-4">Migrate to $mPAWSY!</h2>

        <div className="p-8 bg-black bg-opacity-10 rounded-lg flex flex-col gap-6">
          <p className="text-white">
            $mPAWSY (migrated $PAWSY) exists for versatility, our ecosystem&apos;s profitability, and our future so that
            we do not depend on Virtuals Protocol. Read the screenshot how it started in our Telegram group.
          </p>

          <div className="flex flex-row gap-4">
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
              // onAddToMetamask={() => addTokenToMetamask(pawsyContract?.address || "", "PAWSY")}
            />
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

          <div className="flex flex-col gap-2 w-full border-t border-gray-300 dark:border-[#b2bfce] pt-2">
            <div className="flex justify-between items-center gap-4 w-full">
              <div className="flex justify-between items-center bg-gray-100 dark:bg-base-100 border border-gray-300 dark:border-[#e8effb33] rounded-lg p-2 w-full relative">
                <input
                  className={`bg-transparent border-none outline-none text-gray-800 dark:text-white px-2 w-full ${
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
                  className="px-2 py-1 text-sm bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                  disabled={isApprovePending || isMigratePending}
                >
                  MAX
                </button>
              </div>
            </div>

            {inputError && <span className="text-red-500 text-sm mt-1">{inputError}</span>}

            {allowance?.toString() &&
              (parseEther(pawsyAmount || "0") > allowance ? (
                <button
                  className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl"
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
                  className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl bg-disabled-gray"
                  onClick={onMigrate}
                  disabled={isMigratePending}
                >
                  {isMigratePending ? <span className="loading loading-spinner loading-sm"></span> : "Migrate"}
                </button>
              ))}
          </div>
        </div>
      </div>

      <div className="col-span-5 flex items-start justify-center">
        <Image src="/vote.png" alt="community vote" width={500} height={300} className="w-full object-contain" />
      </div>
    </div>
  );
}
