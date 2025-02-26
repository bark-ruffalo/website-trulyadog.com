import { useEffect, useMemo, useState } from "react";
import { Card } from "./Card";
import { formatEther, parseAbi } from "viem";
import { useAccount, useConfig, useReadContracts } from "wagmi";
import { readContract } from "wagmi/actions";
import { useScaffoldContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { withCache } from "~~/utils/cache";
import { getUserPayout } from "~~/utils/common/sir";
import { fetchPawsyPriceFromUniswap } from "~~/utils/scaffold-eth";
import { fetchVirtualPriceFromUniswap } from "~~/utils/scaffold-eth/fetchVirtualPriceFromUniswap";

const LP_ADDRESS = "0x96FC64caE162C1Cb288791280c3Eff2255c330a8";
const LP_ABI = [
  "function getReserves() external view returns (uint112, uint112, uint32)",
  "function totalSupply() external view returns (uint256)",
] as const;

export function Statistics() {
  const config = useConfig();
  const account = useAccount();
  const [tvl, setTvl] = useState("-");
  const [lpPrice, setLpPrice] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const { data: lpData } = useReadContracts({
    contracts: [
      {
        address: LP_ADDRESS,
        abi: parseAbi(LP_ABI),
        functionName: "getReserves",
      },
      {
        address: LP_ADDRESS,
        abi: parseAbi(LP_ABI),
        functionName: "totalSupply",
      },
    ],
  });

  const { data: pools } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getPools",
  });

  const { data: vault } = useScaffoldContract({ contractName: "StakingVault" });

  const { data: totalSupply } = useScaffoldReadContract({
    contractName: "$mPAWSY",
    functionName: "totalSupply",
  });

  const { data: totalStakers } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getTotalLockedUsers",
  });

  const { data: PAWSY } = useScaffoldContract({ contractName: "$PAWSY" });
  const { data: mPAWSY } = useScaffoldContract({ contractName: "$mPAWSY" });
  const { data: PAWSY_VIRTUAL_LP } = useScaffoldContract({ contractName: "$PAWSY/$VIRTUAL LP" });

  const { data: totalRewards, isLoading: rewardsLoading } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getLifetimeRewards",
    args: [account.address],
  });

  const { data: rewardTokenSymbol } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "symbol",
  });

  const cards = useMemo(
    () => [
      {
        title: "Total Value Locked",
        value: isLoading ? "Loading..." : tvl,
        subtext: "$mPAWSY",
        className: tvl === "Error" ? "red" : "green",
      },
      {
        title: "$mPAWSY Supply",
        value: isLoading
          ? "Loading..."
          : totalSupply
            ? Math.round(Number(formatEther(totalSupply))).toLocaleString("en-US")
            : "0",
        subtext: "$mPAWSY",
        className: "green",
      },
      {
        title: "Stakers",
        value: isLoading ? "Loading..." : totalStakers ? totalStakers.toString() : "0",
        subtext: "Total",
        className: "green",
      },
      {
        title: "If You Staked $10,000",
        value: `${getUserPayout(10000)}`,
        subtext: "$$$ You'd Have",
        className: "green",
      },
      {
        title: "Rewards You Claimed",
        value: rewardsLoading
          ? "Loading..."
          : `${totalRewards ? Number(formatEther(totalRewards)).toFixed(2) : "0.00"}`,
        subtext: "$" + rewardTokenSymbol,
        className: "green",
      },
    ],
    [tvl, totalSupply, totalStakers, isLoading, totalRewards, rewardsLoading, rewardTokenSymbol],
  );

  useEffect(() => {
    async function calculateLPPrice() {
      try {
        setIsLoading(true);
        const price = await withCache("lp-price", async () => {
          if (!lpData?.[0] || !lpData?.[1]) return 0;

          try {
            const [reserves, totalSupply] = lpData;
            const [pawsyPrice, virtualPrice] = await Promise.all([
              fetchPawsyPriceFromUniswap(),
              fetchVirtualPriceFromUniswap(),
            ]);

            const pawsyReserve = Number(formatEther(reserves.result?.[1] ?? 0n));
            const virtualReserve = Number(formatEther(reserves.result?.[0] ?? 0n));
            const totalLpSupply = Number(formatEther(totalSupply.result ?? 0n));

            const totalValue = pawsyReserve * pawsyPrice + virtualReserve * virtualPrice;
            return totalValue / totalLpSupply;
          } catch (error) {
            console.error("Error calculating LP price:", error);
            return 0;
          }
        });
        setLpPrice(price);
      } catch (error) {
        console.error("Error calculating LP price:", error);
        setLpPrice(0);
      } finally {
        setIsLoading(false);
      }
    }

    calculateLPPrice();
  }, [lpData]);

  useEffect(() => {
    async function calculateTVL() {
      if (!pools || !vault?.address || !vault?.abi) return;

      try {
        const pawsyPrice = await fetchPawsyPriceFromUniswap();
        const stakingAmounts = await Promise.all(
          pools.map((_, i) =>
            readContract(config, {
              address: vault.address,
              abi: vault.abi,
              functionName: "getStakingAmountByPool",
              args: [BigInt(i)],
            }),
          ),
        );

        const totalTVL = pools.reduce((acc, pool, i) => {
          const tokenPrice = pool.stakingToken === PAWSY_VIRTUAL_LP?.address ? lpPrice : pawsyPrice;
          const poolTVL = Number(formatEther(stakingAmounts[i])) * tokenPrice;
          return acc + poolTVL / pawsyPrice;
        }, 0);

        setTvl(Math.round(totalTVL).toLocaleString("en-US"));
      } catch (error) {
        console.error("Error calculating TVL:", error);
        setTvl("Error");
      }
    }

    calculateTVL();
  }, [pools, vault, config, lpPrice, PAWSY, mPAWSY, PAWSY_VIRTUAL_LP]);

  return (
    <div className="w-full max-w-[95%] sm:max-w-[75%]">
      <div className="flex flex-wrap items-center">
        <div className="flex flex-wrap items-center rounded-2xl w-full">
          <Card cards={cards} />
        </div>
      </div>
    </div>
  );
}
