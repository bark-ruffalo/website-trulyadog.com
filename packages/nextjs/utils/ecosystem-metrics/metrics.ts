import { DEFAULT_CACHE_VALUES, withCache } from "../cache";
import { createRpcConfig } from "../common/rpc";
import { Pool } from "../scaffold-eth/calculateTVL";
import { calculateTVL } from "../scaffold-eth/calculateTVL";
import { fetchTotalDaoFunds } from "../scaffold-eth/fetchTotalDaoFunds";
import { fetchVirtualPriceFromUniswap } from "../scaffold-eth/fetchVirtualPriceFromUniswap";
import { AI_AGENTS } from "./agents";
import { checkAllAgentsStatus } from "./agents";
import {
  ERC20_ABI,
  LP_ADDRESS,
  MPAWSY_ADDRESS,
  PAWSY_ADDRESS,
  STAKING_VAULT_ABI,
  STAKING_VAULT_ADDRESS,
  TOKEN_MIGRATION_ADDRESS,
} from "./contracts";
import { retryContractCall } from "./network";
import { fetchCoinGeckoPrice, fetchPawsyHolders } from "./prices";
import { EcosystemMetrics } from "./types";
import { formatUnits } from "viem";
import { createPublicClient, http } from "viem";
import { base } from "viem/chains";
import { createConfig } from "wagmi";

const publicClient = createPublicClient(createRpcConfig());

const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

export async function fetchEcosystemMetrics(): Promise<EcosystemMetrics> {
  const cacheKey = "ecosystem-metrics";

  return withCache(cacheKey, async () => {
    const [btcPrice, ethPrice] = await Promise.all([fetchCoinGeckoPrice("bitcoin"), fetchCoinGeckoPrice("ethereum")]);

    const contractData = await Promise.all([
      retryContractCall(
        () =>
          publicClient.readContract({
            address: STAKING_VAULT_ADDRESS,
            abi: STAKING_VAULT_ABI,
            functionName: "getTotalLockedUsers",
          }),
        BigInt(0),
      ),
      retryContractCall(
        () =>
          publicClient.readContract({
            address: MPAWSY_ADDRESS,
            abi: ERC20_ABI,
            functionName: "totalSupply",
          }),
        BigInt(0),
      ),
      retryContractCall(
        () =>
          publicClient.readContract({
            address: PAWSY_ADDRESS,
            abi: ERC20_ABI,
            functionName: "totalSupply",
          }),
        BigInt(0),
      ),
      fetchPawsyHolders(),
      retryContractCall(
        () =>
          publicClient.readContract({
            address: STAKING_VAULT_ADDRESS,
            abi: STAKING_VAULT_ABI,
            functionName: "getPools",
          }),
        [],
      ),
      retryContractCall(
        () =>
          publicClient.readContract({
            address: PAWSY_ADDRESS,
            abi: ERC20_ABI,
            functionName: "balanceOf",
            args: [TOKEN_MIGRATION_ADDRESS],
          }),
        BigInt(0),
      ),
    ]);

    const [totalStakers, mPawsyTotalSupply, pawsyTotalSupply, pawsyHolders, pools, pawsyInMigrationContract] =
      contractData;

    const tvlData = await retryContractCall(
      async () =>
        calculateTVL(
          pools as unknown as Pool[],
          { address: STAKING_VAULT_ADDRESS, abi: STAKING_VAULT_ABI },
          wagmiConfig,
          { address: LP_ADDRESS },
        ),
      { tvlInPawsy: 0, pawsyPrice: 0, lpPrice: 0 },
    );

    const { tvlInPawsy, pawsyPrice } = tvlData;

    const pawsyMarketCap = Number(formatUnits(pawsyTotalSupply, 18)) * pawsyPrice;
    const realMarketCap = pawsyMarketCap * 23.1;
    const daoMpawsySupply = 11_100_000_000; // 11.1 billion mPAWSY in DAO's posession
    const usersMpawsySupply = Number(formatUnits(mPawsyTotalSupply, 18)) - daoMpawsySupply;
    const percentageOfUsersMpawsySupplyStaked = (tvlInPawsy / usersMpawsySupply) * 100;

    const daoFunds = await retryContractCall(() => fetchTotalDaoFunds(), { totalUsd: 0, breakdown: {} });

    // Filter out tokens with value less than 1 USD
    const filteredDaoFunds = {
      totalUsd: Object.entries(daoFunds.breakdown).reduce((acc, [, value]) => (value >= 1 ? acc + value : acc), 0),
      breakdown: Object.fromEntries(Object.entries(daoFunds.breakdown).filter(([, value]) => value >= 1)),
    };

    const virtualPrice = await fetchVirtualPriceFromUniswap().catch(error => {
      console.error("Failed to fetch VIRTUAL price from Uniswap:", error);
      const defaultPrice = DEFAULT_CACHE_VALUES.virtual.value;
      console.log("Using default VIRTUAL price:", defaultPrice);
      return defaultPrice;
    });

    const agentStatuses = await checkAllAgentsStatus();

    const migratedPawsy = Number(formatUnits(pawsyInMigrationContract, 18));

    return {
      timestamp: new Date().toISOString(),
      btcPrice: btcPrice ?? DEFAULT_CACHE_VALUES.bitcoin.value,
      ethPrice: ethPrice ?? DEFAULT_CACHE_VALUES.ethereum.value,
      virtualPrice: virtualPrice ?? DEFAULT_CACHE_VALUES.virtual.value,
      pawsyPrice: pawsyPrice ?? DEFAULT_CACHE_VALUES.pawsy.value,
      totalStaked: tvlInPawsy,
      totalMigrated: Number(formatUnits(mPawsyTotalSupply, 18)),
      migratedPawsy: migratedPawsy,
      totalStakers: totalStakers ? Number(totalStakers.toString()) : 0,
      pawsyTotalSupply: Number(formatUnits(pawsyTotalSupply, 18)),
      pawsyHolders,
      pawsyMarketCap,
      realMarketCap,
      agentStatuses,
      daoFunds: filteredDaoFunds,
      tvl: tvlInPawsy * pawsyPrice,
      percentageOfUsersMpawsySupplyStaked,
      daoMpawsySupply,
      usersMpawsySupply,
    };
  });
}

export function formatEcosystemMetrics(metrics: EcosystemMetrics): string {
  const date = new Date(metrics.timestamp);
  const formattedDate = date.toISOString().split("T")[0];
  const formattedTime = date.toISOString().split("T")[1].substring(0, 5);
  const timeZone = "UTC";

  //   const lpBreakdown = Object.entries(metrics.daoFunds.breakdown)
  //     .filter(([key]) => key.includes("-VIRTUAL-LP"))
  //     .map(
  //       ([key, value]) =>
  //         `  * Value of LP ${key.replace("-VIRTUAL-LP", "")}/VIRTUAL: $${value.toLocaleString(undefined, {
  //           maximumFractionDigits: 0,
  //         })}`,
  //     )
  //     .join("\n");
  // Helper function to format percentage without trailing zeros
  const formatPercentage = (value: number): string => {
    return value.toFixed(2).replace(/\.?0+$/, "");
  };

  const agentsSection = AI_AGENTS.map(agent => {
    const status = metrics.agentStatuses.find(s => s.name === agent.name)?.status || "offline";
    const xHandle = "handle" in agent ? `${agent.handle} on X` : null;
    const telegramHandle = "telegramHandle" in agent ? `${agent.telegramHandle} on Telegram` : null;
    const handles = [xHandle, telegramHandle].filter(Boolean).join(", ");
    return `  * ${agent.name} | ${status.toUpperCase()} | goal: ${agent.goal} (${handles})`;
  }).join("\n");

  return `Bark Ruffalo ecosystem metrics for ${formattedDate}, ${formattedTime} ${timeZone}:
- Prices of main cryptocurrencies: BTC $${metrics.btcPrice.toLocaleString()}, ETH $${Math.round(
    metrics.ethPrice,
  ).toLocaleString()}, VIRTUAL $${metrics.virtualPrice.toFixed(2)}, PAWSY $${metrics.pawsyPrice.toFixed(4)}.
- On trulyadog.com, there's ${Math.round(metrics.totalStaked).toLocaleString()} $mPAWSY staked by ${metrics.totalStakers} users (${formatPercentage(metrics.percentageOfUsersMpawsySupplyStaked)}% of the non-DAO $mPAWSY supply). The DAO owns 1.11 billion $mPAWSY, which will be used mostly for LPing and community rewards. The users own ${Math.round(metrics.usersMpawsySupply).toLocaleString()} $mPAWSY.
- The supply of $PAWSY is ${Math.round(metrics.pawsyTotalSupply).toLocaleString()}. It has ${metrics.pawsyHolders.toLocaleString()} holders, most of which have been airdropped small amounts. A part of this supply has been migrated irreversibly: ${Math.round(metrics.migratedPawsy).toLocaleString()} $PAWSY (${formatPercentage((metrics.migratedPawsy / metrics.pawsyTotalSupply) * 100)}% of total supply).
- The total market cap of the Bark Ruffalo ecosystem ($PAWSY + $mPAWSY) is $${(
    metrics.realMarketCap / 1_000_000
  ).toFixed(2)} million, which is approximated as 23 times the market cap of $PAWSY.
- The supply of $mPAWSY is ${Math.round(metrics.totalMigrated).toLocaleString()}, most of which is held by the DAO.
- The DAO main address holds ~$${Math.round(metrics.daoFunds.totalUsd).toLocaleString()} in these assets: ETH, VIRTUAL, mPAWSY, MAR.
- The DAO sniping addresses hold: ETH, SOL, VIRTUAL, MAR.
- There are ${AI_AGENTS.length} public AI agents in the ecosystem:
${agentsSection}`;
  // removed ${lpBreakdown}
}
