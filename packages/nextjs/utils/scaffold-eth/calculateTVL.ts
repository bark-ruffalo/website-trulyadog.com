import { fetchPawsyPriceFromUniswap } from "./fetchPawsyPriceFromUniswap";
import { fetchVirtualPriceFromUniswap } from "./fetchVirtualPriceFromUniswap";
import { formatEther } from "viem";
import type { Config } from "wagmi";
import { readContract } from "wagmi/actions";

export interface Pool {
  stakingToken: `0x${string}`;
  rewardToken: `0x${string}`;
  apr: number;
  lockDuration: number;
  totalStaked?: number;
}

export interface TVLResult {
  tvlInPawsy: number;
  pawsyPrice: number;
  lpPrice: number;
}

export async function calculateTVL(
  pools: Pool[],
  vault: { address: `0x${string}`; abi: any },
  config: Config,
  PAWSY_VIRTUAL_LP?: { address: `0x${string}` },
): Promise<TVLResult> {
  try {
    const [pawsyPrice, virtualPrice] = await Promise.all([
      fetchPawsyPriceFromUniswap(),
      fetchVirtualPriceFromUniswap(),
    ]);

    // Get LP token data if PAWSY_VIRTUAL_LP is provided
    let lpPrice = 0;
    if (PAWSY_VIRTUAL_LP?.address) {
      const [reserves, totalSupply] = await Promise.all([
        readContract(config, {
          address: PAWSY_VIRTUAL_LP.address,
          abi: [
            {
              inputs: [],
              name: "getReserves",
              outputs: [
                { internalType: "uint112", name: "", type: "uint112" },
                { internalType: "uint112", name: "", type: "uint112" },
                { internalType: "uint32", name: "", type: "uint32" },
              ],
              stateMutability: "view",
              type: "function",
            },
          ] as const,
          functionName: "getReserves",
        }),
        readContract(config, {
          address: PAWSY_VIRTUAL_LP.address,
          abi: [
            {
              inputs: [],
              name: "totalSupply",
              outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
              stateMutability: "view",
              type: "function",
            },
          ] as const,
          functionName: "totalSupply",
        }),
      ]);

      // Ensure reserves and totalSupply are bigint
      const [reserve0, reserve1] = reserves as [bigint, bigint, number];
      const pawsyReserve = Number(formatEther(reserve1));
      const virtualReserve = Number(formatEther(reserve0));
      const lpTotalSupply = totalSupply as bigint;
      const totalLpSupply = Number(formatEther(lpTotalSupply));

      const totalValue = pawsyReserve * pawsyPrice + virtualReserve * virtualPrice;
      lpPrice = totalValue / totalLpSupply;
    }

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

    const tvlInPawsy = pools.reduce((acc, pool, i) => {
      const tokenPrice = pool.stakingToken === PAWSY_VIRTUAL_LP?.address ? lpPrice : pawsyPrice;
      const poolTVL = Number(formatEther(stakingAmounts[i] as bigint)) * tokenPrice;
      return acc + poolTVL / pawsyPrice;
    }, 0);

    return {
      tvlInPawsy,
      pawsyPrice,
      lpPrice,
    };
  } catch (error) {
    console.error("Error calculating TVL:", error);
    return {
      tvlInPawsy: 0,
      pawsyPrice: 0,
      lpPrice: 0,
    };
  }
}
