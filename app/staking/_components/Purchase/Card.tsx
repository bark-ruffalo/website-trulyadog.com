import { useEffect, useState } from "react";
import { formatEther, parseEther } from "viem";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { calculateRewardRate, convertSecondsToDays, getPoolTokens, notification } from "~~/utils/scaffold-eth";

interface CardProps {
  poolId: bigint;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: boolean;
}

export function StakingCard({ item }: { item: CardProps }) {
  const { address } = useAccount();
  const [stakeAmount, setStakeAmount] = useState<bigint>(BigInt(0));
  const [lockPeriodIndex, setLockPeriodIndex] = useState<number>(0);

  // const { data: tokenBalance, refetch: refetchTokenBalance } = useScaffoldReadContract({
  //   contractName: getPoolTokens(Number(item.poolId)),
  //   functionName: "balanceOf",
  //   args: [address],
  // });
  // const { data: stakingVault } = useDeployedContractInfo("StakingVault");
  // const { data: allowance, refetch: refetchTokenAllowance } = useScaffoldReadContract({
  //   contractName: "TTK",
  //   functionName: "allowance",
  //   args: [address, stakingVault?.address],
  // });
  // const { writeContractAsync: approve, isPending: isApprovePending } = useScaffoldWriteContract("TTK");
  // const { writeContractAsync: stake, isPending: isStakePending } = useScaffoldWriteContract("StakingVault");

  // const onApprove = async (): Promise<void> => {
  //   try {
  //     await approve({
  //       functionName: "approve",
  //       args: [stakingVault?.address, parseEther(stakeAmount.toString())],
  //     });
  //     console.log("Approval successful!");
  //     await refetchTokenAllowance();
  //   } catch (error) {
  //     console.error("Approval failed:", error);
  //   }
  // };

  // const onStake = async (): Promise<void> => {
  //   if (!stakeAmount) {
  //     notification.error("Staking Vault: Cannot stake zero amount.");
  //     return;
  //   }

  //   if (!allowance || stakeAmount > allowance) {
  //     notification.error("Staking Vault: You should approve stake amount to StakingVault.");
  //     return;
  //   }

  //   try {
  //     await stake({
  //       functionName: "stake",
  //       args: [item.poolId, parseEther(stakeAmount.toString()), BigInt(item.lockPeriods[lockPeriodIndex])],
  //     });
  //     console.log("Stake successful!");
  //   } catch (error) {
  //     console.error("Staking failed:", error);
  //   }
  // };

  // useEffect(() => {
  //   if (tokenBalance && tokenBalance > 0) {
  //     setStakeAmount(BigInt(formatEther(tokenBalance)));
  //   }
  // }, [tokenBalance]);

  return (
    <div className="flex flex-col justify-between p-5 min-h-[120px] max-w-[380px] bg-base-200 dark:bg-[#8d54751a] rounded-lg relative flex-grow m-1 box-border">
      <div className="text-base-content dark:text-white font-medium flex gap-2 items-center mb-3">
        <label className="text-base-content/70 dark:text-[#b2bfce] font-light mr-2">Lock Period:</label>
        <select
          value={lockPeriodIndex}
          onChange={e => setLockPeriodIndex(Number(e.target.value))}
          className="bg-base-100 border border-base-300 dark:border-[#e8effb33] rounded-xl p-1 text-base-content dark:text-white"
        >
          {item.lockPeriods.map((period, index) => (
            <option key={index} value={index}>
              {convertSecondsToDays(Number(period))} Days
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col mb-2 gap-2 w-full">
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Token Name</span>
          <span className="text-base-content dark:text-white">{getPoolTokens(Number(item.poolId))}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Token Address</span>
          <Address address={item.stakingToken} />
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Pool Status</span>
          <span className="text-base-content dark:text-white font-light">
            {item.isActive ? "COMING SOON" : "Paused"}
          </span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Reward APY</span>
          <span className="text-base-content dark:text-white font-light">
            {calculateRewardRate(
              Number(item.rewardRates[lockPeriodIndex]),
              Number(item.lockPeriods[lockPeriodIndex]),
            ).toFixed(2)}{" "}
            %
          </span>
        </div>
      </div>

      {/* <div className="flex flex-col gap-2 w-full border-t border-[#b2bfce] pt-2">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex justify-between items-center bg-base-100 border border-[#e8effb33] rounded-lg p-2 w-full">
            <input
              className="bg-transparent border-none outline-none text-white px-2 w-3/4"
              type="text"
              placeholder="500"
              value={stakeAmount.toString()}
              onChange={e => setStakeAmount(BigInt(e.target.value))}
            />
            <span className="text-white/60">{getPoolTokens(Number(item.poolId))}</span>
          </div>
          {allowance?.toString() && parseEther(stakeAmount.toString()) > allowance && (
            <button
              className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl"
              onClick={onApprove}
              disabled={isApprovePending}
            >
              {isApprovePending ? <span className="loading loading-spinner loading-sm"></span> : "Approve"}
            </button>
          )}
        </div>

        <button
          className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#1976d2] to-[#64b5f6] text-white rounded-xl bg-disabled-gray"
          onClick={() => onStake()}
          disabled={isStakingPending}
        >
          {isStakePending ? <span className="loading loading-spinner loading-sm"></span> : "Stake"}
        </button>
      </div> */}
    </div>
  );
}
