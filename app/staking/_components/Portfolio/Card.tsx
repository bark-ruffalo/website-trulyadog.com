import { formatEther } from "viem";
import { useScaffoldWriteContract } from "~~/hooks/scaffold-eth";
import { convertSecondsToDays } from "~~/utils/scaffold-eth";

interface CardProps {
  lockId: bigint;
  amount: bigint;
  lockPeriod: bigint;
  unlockTime: bigint; // Assuming this is in seconds
  lastClaimTime: bigint; // Assuming this is also in seconds
  poolId: bigint;
  isLocked: boolean;
}

export function PortfolioCard({ item }: { item: CardProps }) {
  const { writeContractAsync: unstake, isPending: isUnstakePending } = useScaffoldWriteContract("StakingVault");

  // Convert unlockTime and lastClaimTime to date strings
  const unlockDate = new Date(Number(item.unlockTime) * 1000); // Convert seconds to milliseconds
  const lastClaimDate = new Date(Number(item.lastClaimTime) * 1000); // Convert seconds to milliseconds

  // Format the dates
  const unlockDateString = unlockDate.toLocaleDateString() + " " + unlockDate.toLocaleTimeString();
  const lastClaimDateString = lastClaimDate.toLocaleDateString() + " " + lastClaimDate.toLocaleTimeString();

  const onUnstake = async () => {
    try {
      await unstake({
        functionName: "unstake",
        args: [item.poolId, item.lockId],
      });
      console.log("Unstake successful!");
      // Optionally reset stake amount or update state here
    } catch (error) {
      console.error("Unstaking failed:", error);
    }
  };

  return (
    <div className="flex flex-col justify-between p-5 min-h-[120px] max-w-[380px] bg-base-200 dark:bg-[#8d54751a] rounded-lg relative flex-grow m-1 box-border">
      <div className="flex flex-col mb-2 gap-2 w-full">
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Pool Index</span>
          <span className="text-base-content dark:text-white font-light">{item.poolId.toString()}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Staked Amount</span>
          <span className="text-base-content dark:text-white font-light">{formatEther(item.amount)}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Lock Period</span>
          <span className="text-base-content dark:text-white font-light">
            {convertSecondsToDays(Number(item.lockPeriod))} Days
          </span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Unlocked At</span>
          <span className="text-base-content dark:text-white font-light">{unlockDateString}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Last Claim Time</span>
          <span className="text-base-content dark:text-white font-light">{lastClaimDateString}</span>
        </div>
        {/* <div className="flex justify-between w-full">
          <span className="text-[#b2bfce] font-light">Staking Token</span>
          <Address address={item.stakingToken} />
        </div> */}
        <div className="flex justify-between w-full">
          <span className="text-base-content/70 dark:text-[#b2bfce] font-light">Lock Status</span>
          <span className="text-base-content dark:text-white font-light">{item.isLocked ? "Locked" : "Unlocked"}</span>
        </div>
      </div>
      {item.isLocked && (
        <div className="flex flex-col gap-2 w-full border-t border-[#b2bfce] pt-2">
          <button
            className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#2c1656] to-[#7d3560] text-white rounded-xl bg-disabled-gray"
            onClick={() => onUnstake()}
          >
            {isUnstakePending ? <span className="loading loading-spinner loading-sm"></span> : "Unstake"}
          </button>
        </div>
      )}
    </div>
  );
}
