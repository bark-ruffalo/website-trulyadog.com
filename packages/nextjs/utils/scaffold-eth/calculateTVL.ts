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

    const lpPrice = (pawsyPrice + virtualPrice) / 2;

    const tvlInPawsy = pools.reduce((acc, pool, i) => {
      const tokenPrice = pool.stakingToken === PAWSY_VIRTUAL_LP?.address ? lpPrice : pawsyPrice;
      const poolTVL = Number(formatEther(stakingAmounts[i])) * tokenPrice;
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
