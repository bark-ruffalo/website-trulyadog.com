import { useEffect, useState } from "react";
import { Card } from "./Card";
import { formatEther, parseAbi } from "viem";
import { useAccount, useConfig, useReadContracts } from "wagmi";
import { readContract } from "wagmi/actions";
import { useScaffoldContract, useScaffoldReadContract } from "~~/hooks/scaffold-eth";
import { withCache } from "~~/utils/cache";
import { fetchPawsyPriceFromUniswap } from "~~/utils/scaffold-eth";
import { fetchVirtualPriceFromUniswap } from "~~/utils/scaffold-eth/fetchVirtualPriceFromUniswap";

const LP_ADDRESS = "0x96FC64caE162C1Cb288791280c3Eff2255c330a8";
const LP_ABI = [
  "function getReserves() external view returns (uint112, uint112, uint32)",
  "function totalSupply() external view returns (uint256)",
] as const;

export function Statistics() {
  const account = useAccount();
  const config = useConfig();
  const [tvl, setTvl] = useState("-");
  const [lpPrice] = useState(0);

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
  const { data: totalRewards } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getLifetimeRewards",
    args: [account.address],
  });

  const { data: rewardTokenSymbol } = useScaffoldReadContract({
    contractName: "RewardToken",
    functionName: "symbol",
  });

  const { data: totalSupply } = useScaffoldReadContract({
    contractName: "$mPAWSY",
    functionName: "totalSupply",
  });

  const { data: PAWSY } = useScaffoldContract({ contractName: "$PAWSY" });
  const { data: mPAWSY } = useScaffoldContract({ contractName: "$mPAWSY" });
  const { data: PAWSY_VIRTUAL_LP } = useScaffoldContract({ contractName: "$PAWSY/$VIRTUAL LP" });

  useEffect(() => {
    async function calculateLPPrice() {
      return withCache("lp-price", async () => {
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

        setTvl(Math.round(totalTVL).toLocaleString("en-US") + " $PAWSY");
      } catch (error) {
        console.error("Error calculating TVL:", error);
        setTvl("Error");
      }
    }

    calculateTVL();
  }, [pools, vault, config, lpPrice, PAWSY, mPAWSY, PAWSY_VIRTUAL_LP]);

  const cards = [
    {
      title: "TOTAL VALUE LOCKED",
      value: tvl,
      className: tvl === "Error" ? "red" : "green",
    },
    {
      title: "$mPAWSY supply: ",
      value: totalSupply ? Math.round(Number(formatEther(totalSupply))).toLocaleString("en-US") : "0",
      className: "green",
    },
    {
      title: "REWARDS YOU CLAIMED",
      value: `${totalRewards ? Number(formatEther(totalRewards)).toFixed(2) : "0.00"} ${rewardTokenSymbol ?? ""}`,
      className: "green",
    },
  ];

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
