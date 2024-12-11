import { MouseEvent, useState } from "react";

interface CardProps {
  poolId: string;
  stakingToken: string;
  lockPeriods: string[];
  rewardRates: string[];
  isActive: string;
}

export function StakingCard({ item }: { item: CardProps }) {
  const [stakeAmount, setStakeAmount] = useState(0);
  const [usdcAllowance, setUsdcAllowance] = useState(0);

  function onApprove(event: MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  function onStake(event: MouseEvent<HTMLButtonElement>): void {
    throw new Error("Function not implemented.");
  }

  return (
    <div className="flex flex-col justify-between p-5 min-h-[120px] max-w-[980px] bg-[#8d54751a] rounded-lg relative flex-grow m-1 box-border">
      <div className="text-white font-medium flex gap-2 items-center mb-6">{item.lockPeriods} Days Lock</div>

      <div className="flex flex-col mb-2 gap-2 w-full">
        <div className="flex justify-between w-full">
          <span className="text-[#b2bfce] font-light">Pool Index</span>
          <span className="text-white font-light">{item.poolId}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-[#b2bfce] font-light">Reward SIP</span>
          <span className="text-white font-light">{item.rewardRates}</span>
        </div>
        <div className="flex justify-between w-full">
          <span className="text-[#b2bfce] font-light">Staking Token</span>
          <span className="text-white font-light">{item.stakingToken}</span>
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
            <span className="text-white/60">USDC</span>
          </div>
          {stakeAmount > usdcAllowance && (
            <button
              className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#2c1656] to-[#7d3560] text-white rounded-lg"
              onClick={onApprove}
            >
              Approve
            </button>
          )}
        </div>

        <button
          className="flex justify-center items-center px-8 py-2 bg-gradient-to-r from-[#2c1656] to-[#7d3560] text-white rounded-lg"
          onClick={onStake}
        >
          Stake
        </button>
      </div>
    </div>
  );
}
