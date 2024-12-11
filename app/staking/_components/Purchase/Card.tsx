import { useState } from "react";
import { parseEther } from "viem";
import { useAccount } from "wagmi";
import { Address } from "~~/components/scaffold-eth";
import { useDeployedContractInfo, useScaffoldReadContract, useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { calculateRewardRate, convertSecondsToDays } from "~~/utils/scaffold-eth";

interface CardProps {
  poolId: bigint;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: boolean;
}

export function StakingCard({ item }: { item: CardProps }) {
  const { address } = useAccount();
  const [stakeAmount, setStakeAmount] = useState<number>(0);
  const [lockPeriodIndex, setLockPeriodIndex] = useState<number>(0);

  const { data: stakingVault } = useDeployedContractInfo("StakingVault");
  const { data: allowance, refetch: refetchTokenAllowance } = useScaffoldReadContract({
    contractName: "TestnetToken",
    functionName: "allowance",
    args: [address, stakingVault?.address],
  });
  const { writeContractAsync: approve, isPending: isApprovePending } = useScaffoldWriteContract("TestnetToken");
  const { writeContractAsync: stake, isPending: isStakePending } = useScaffoldWriteContract("StakingVault");

  const onApprove = async (): Promise<void> => {
    try {
      await approve({
        functionName: "approve",
        args: [stakingVault?.address, parseEther(stakeAmount.toString())], // args: [spender address, amount]
      });
      console.log("Approval successful!");
      await refetchTokenAllowance();
    } catch (error) {
      console.error("Approval failed:", error);
    }
  };

  const onStake = async (): Promise<void> => {
    try {
      await stake({
        functionName: "stake",
        args: [item.poolId, parseEther(stakeAmount.toString()), BigInt(item.lockPeriods[lockPeriodIndex])], // args: [amount, lock period in seconds]
      });
      console.log("Stake successful!");
      // Optionally reset stake amount or update state here
    } catch (error) {
      console.error("Staking failed:", error);
    }
  };

  return (
    <div className="flex flex-col justify-between p-5 min-h-[120px] max-w-[380px] bg-[#8d54751a] rounded-lg relative flex-grow m-1 box-border">
      <div className="text-white font-medium flex gap-2 items-center mb-3">
        <label className="text-[#b2bfce] font-light mr-2">Lock Period:</label>
        <select
          value={lockPeriodIndex}
          onChange={e => setLockPeriodIndex(Number(e.target.value))}
          className="bg-[#541752] border border-[#e8effb33] rounded-xl p-1 text-white"
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
          <span className="text-[#b2bfce] font-light">Pool Index</span>
          <span className="text-white font-light">{item.poolId}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-[#b2bfce] font-light">Reward Rate per period</span>
          <span className="text-white font-light">{Number(item.rewardRates[lockPeriodIndex])}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-[#b2bfce] font-light">Reward APY</span>
          <span className="text-white font-light">
            {calculateRewardRate(
              Number(item.rewardRates[lockPeriodIndex]),
              Number(item.lockPeriods[lockPeriodIndex]),
            ).toFixed(2)}{" "}
            %
          </span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-[#b2bfce] font-light">Staking Token</span>
          <Address address={item.stakingToken} />
        </div>
        <div className="flex justify-between w-full">
          <span className="text-[#b2bfce] font-light">Pool Status</span>
          <span className="text-white font-light">{item.isActive ? "Active" : "Paused"}</span>
        </div>
      </div>

      <div className="flex flex-col gap-2 w-full border-t border-[#b2bfce] pt-2">
        <div className="flex justify-between items-center gap-4 w-full">
          <div className="flex justify-between items-center bg-[#541752] border border-[#e8effb33] rounded-lg p-2 w-full">
            <input
              className="bg-transparent border-none outline-none text-white px-2 w-3/4"
              type="text"
              placeholder="500"
              value={stakeAmount}
              onChange={e => setStakeAmount(Number(e.target.value))}
            />
            <span className="text-white/60">TOKEN</span>
          </div>
          {allowance && parseEther(stakeAmount.toString()) > allowance && (
            <button
              className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#2c1656] to-[#7d3560] text-white rounded-xl"
              onClick={onApprove}
            >
              {isApprovePending ? <span className="loading loading-spinner loading-sm"></span> : "Approve"}
            </button>
          )}
        </div>

        <button
          className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#2c1656] to-[#7d3560] text-white rounded-xl bg-disabled-gray"
          onClick={() => onStake()}
          disabled={stakeAmount <= 0}
        >
          {isStakePending ? <span className="loading loading-spinner loading-sm"></span> : "Stake"}
        </button>
      </div>
    </div>
  );
}
