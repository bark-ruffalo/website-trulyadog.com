import { fetchPawsyPriceFromUniswap } from "./fetchPawsyPriceFromUniswap";
import { fetchVirtualPriceFromUniswap } from "./fetchVirtualPriceFromUniswap";
import { formatEther } from "viem";
import { Config, readContract } from "wagmi/actions";

export interface Pool {
  stakingToken: string;
}

export interface TVLResult {
  tvlInPawsy: number;
  pawsyPrice: number;
  lpPrice: number;
}

export async function calculateTVL(
  pools: Pool[],
  vaultAddress: string,
  vaultAbi: any,
  lpAddress: string,
  pawsyVirtualLpAddress: string,
  config: Config,
): Promise<TVLResult> {
  const [pawsyPrice, virtualPrice] = await Promise.all([fetchPawsyPriceFromUniswap(), fetchVirtualPriceFromUniswap()]);

  // Get LP price
  const [reserves, totalSupply] = await Promise.all([
    readContract(config, {
      address: lpAddress,
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
      address: lpAddress,
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

  const pawsyReserve = Number(formatEther(reserves[1]));
  const virtualReserve = Number(formatEther(reserves[0]));
  const totalLpSupply = Number(formatEther(totalSupply));

  const totalValue = pawsyReserve * pawsyPrice + virtualReserve * virtualPrice;
  const lpPrice = totalValue / totalLpSupply;

  // Get staking amounts for each pool
  const stakingAmounts = await Promise.all(
    pools.map((_, i) =>
      readContract(config, {
        address: vaultAddress,
        abi: vaultAbi,
        functionName: "getStakingAmountByPool",
        args: [BigInt(i)],
      }),
    ),
  );

  // Calculate total TVL in PAWSY
  const totalTVL = pools.reduce((acc, pool, i) => {
    const tokenPrice = pool.stakingToken === pawsyVirtualLpAddress ? lpPrice : pawsyPrice;
    const poolTVL = Number(formatEther(stakingAmounts[i])) * tokenPrice;
    return acc + poolTVL / pawsyPrice;
  }, 0);

  return {
    tvlInPawsy: totalTVL,
    pawsyPrice,
    lpPrice,
  };
}
