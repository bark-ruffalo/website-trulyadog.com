import { useEffect, useState } from "react";
import BalanceCard from "./BalanceCard";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { notification } from "~~/utils/scaffold-eth";

interface PoolDataProps {
  poolId: bigint;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: boolean;
}
export function Migrate() {
  const { address } = useAccount();
  const [pawsyAmount, setPawsyAmount] = useState<number>(0);

  const { data: tokenMigrationContract } = useDeployedContractInfo("TokenMigration");

  const { data: pawsyBalance, refetch: refetchPawsyBalance } = useScaffoldReadContract({
    contractName: "PAWSY",
    functionName: "balanceOf",
    args: [address],
  }) as unknown as { data: bigint; refetch: () => Promise<any> };

  const { data: mPawsyBalance, refetch: refetchMPawsyBalance } = useScaffoldReadContract({
    contractName: "mPAWSY",
    functionName: "balanceOf",
    args: [address],
  }) as unknown as { data: bigint; refetch: () => Promise<any> };

  const { data: allowance, refetch: refetchTokenAllowance } = useScaffoldReadContract({
    contractName: "PAWSY",
    functionName: "allowance",
    args: [address, tokenMigrationContract?.address],
  });

  const { writeContractAsync: approve, isPending: isApprovePending } = useScaffoldWriteContract("PAWSY");
  const { writeContractAsync: migrate, isPending: isMigratePending } = useScaffoldWriteContract("TokenMigration");

  const onApprove = async (): Promise<void> => {
    try {
      await approve({
        functionName: "approve",
        args: [tokenMigrationContract?.address, parseEther(pawsyAmount.toString())],
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

    if (!allowance || pawsyAmount > allowance) {
      notification.error("Token Migration: You should approve migrate amount to StakingVault.");
      return;
    }

    try {
      await migrate({
        functionName: "migrateTokens",
        args: [parseEther(pawsyAmount.toString())],
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
      setPawsyAmount(Number(formatEther(pawsyBalance)));
    }
  }, [pawsyBalance]);

  return (
    <div className="m-1 grid grid-cols-2 gap-8 w-[75%]">
      <div className="flex flex-col gap-6">
        <h2 className="text-2xl text-white font-semibold uppercase mb-4">Migrate to $mPAWSY!</h2>

        <div className="p-8 bg-black bg-opacity-10 rounded-lg flex flex-col gap-6">
          <p className="text-white">
            $mPAWSY (migrated $PAWSY) exists for versatility, our ecosystem's profitability, and our future so that we
            do not depend on Virtuals Protocol. Read the screenshot how it started in our Telegram group.
          </p>

          <div className="flex flex-row gap-4">
            <BalanceCard
              title="$PAWSY balance"
              balance={pawsyBalance ? Number(formatEther(pawsyBalance)).toFixed(2) : "0"}
            />
            <BalanceCard
              title="$mPAWSY balance"
              balance={mPawsyBalance ? Number(formatEther(mPawsyBalance)).toFixed(2) : "0"}
            />
          </div>

          <div className="flex flex-col gap-2 w-full border-t border-gray-300 dark:border-[#b2bfce] pt-2">
            <div className="flex justify-between items-center gap-4 w-full">
              <div className="flex justify-between items-center bg-gray-100 dark:bg-base-100 border border-gray-300 dark:border-[#e8effb33] rounded-lg p-2 w-full">
                <input
                  className="bg-transparent border-none outline-none text-gray-800 dark:text-white px-2 w-full"
                  type="text"
                  placeholder="500"
                  value={pawsyAmount.toString()}
                  onChange={e => setPawsyAmount(Number(e.target.value))}
                />
                <span className="text-gray-600 dark:text-white/60">{}</span>
              </div>
            </div>

            {allowance?.toString() &&
              (parseEther(pawsyAmount.toString()) >= allowance ? (
                <button
                  className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl"
                  onClick={onApprove}
                >
                  Approve in order to Migrate
                </button>
              ) : (
                <button
                  className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl bg-disabled-gray"
                  onClick={onMigrate}
                >
                  Migrate
                </button>
              ))}
          </div>
        </div>
      </div>

      <div className="flex items-start justify-center">
        <img src="/vote.png" className="w-full object-contain" alt="community vote" />
      </div>
    </div>
  );
}
