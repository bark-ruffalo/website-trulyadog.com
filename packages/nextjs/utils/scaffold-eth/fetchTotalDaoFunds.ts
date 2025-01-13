import { DEFAULT_CACHE_VALUES, getLastKnownPrice, updatePriceCache, withCache } from "../cache";
import { fetchPawsyPriceFromUniswap } from "./fetchPawsyPriceFromUniswap";
import { fetchVirtualPriceFromUniswap } from "./fetchVirtualPriceFromUniswap";
import { formatUnits } from "viem";
import { createPublicClient, fallback, http, parseAbi } from "viem";

const RPC_ENDPOINTS: readonly string[] = [
  "https://base-rpc.publicnode.com",
  "https://base.drpc.org",
  "https://base-pokt.nodies.app",
] as const;

const publicClient = createPublicClient({
  transport: fallback(RPC_ENDPOINTS.map(url => http(url))),
  chain: {
    id: 8453,
    name: "Base",
    network: "base",
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: RPC_ENDPOINTS },
    },
  },
});

const DAO_ADDRESS = "0xc638FB83d2bad5dD73d4C7c7deC0445d46a0716F" as const;
const PAWSY_VIRTUAL_LP = "0x96FC64caE162C1Cb288791280c3Eff2255c330a8" as const;

// CoinMarketCap IDs for tokens
const CMC_IDS = {
  ethereum: "1027",
} as const;

function logTokenBalance(token: string, balance: number, price: number, value: number, source: string): void {
  console.log(
    `${token} Balance:\n` +
      `  Amount: ${balance.toFixed(4)}\n` +
      `  Price: $${price.toFixed(6)}\n` +
      `  Value: $${value.toFixed(2)}\n` +
      `  Source: ${source}\n` +
      `  Time: ${new Date().toISOString()}`,
  );
}

async function fetchPriceFromCoinMarketCap(cmcId: string): Promise<number> {
  const CMC_API_KEY = process.env.CMC_API_KEY;
  if (!CMC_API_KEY) {
    console.warn("CoinMarketCap API key not found");
    return DEFAULT_CACHE_VALUES.ethereum.value;
  }

  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000);

    const response = await fetch(`https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${cmcId}`, {
      headers: {
        "X-CMC_PRO_API_KEY": CMC_API_KEY,
        Accept: "application/json",
      },
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      console.warn("Failed to fetch price from CoinMarketCap");
      return DEFAULT_CACHE_VALUES.ethereum.value;
    }

    const data = await response.json();
    return data.data[cmcId]?.quote?.USD?.price ?? DEFAULT_CACHE_VALUES.ethereum.value;
  } catch (error) {
    if (error.name === "AbortError") {
      console.warn("CoinMarketCap request timed out");
    } else {
      console.warn("Error fetching price from CoinMarketCap:", error);
    }
    return DEFAULT_CACHE_VALUES.ethereum.value;
  }
}

const TOKENS = [
  {
    symbol: "USDC",
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    decimals: 6,
  },
  {
    symbol: "VIRTUAL",
    address: "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b",
    decimals: 18,
    getPriceFunction: fetchVirtualPriceFromUniswap,
  },
  {
    symbol: "PAWSY",
    address: "0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a",
    decimals: 18,
    getPriceFunction: fetchPawsyPriceFromUniswap,
  },
  {
    symbol: "mPAWSY",
    address: "0x1437819DF58Ad648e35ED4f6F642d992684B2004",
    decimals: 18,
    getPriceFunction: fetchPawsyPriceFromUniswap,
  },
] as const;

const LP_ABI = [
  "function getReserves() external view returns (uint112, uint112, uint32)",
  "function totalSupply() external view returns (uint256)",
  "function balanceOf(address) external view returns (uint256)",
] as const;

const ERC20_ABI = ["function balanceOf(address) external view returns (uint256)"] as const;

export interface EcosystemMetrics {
  timestamp: string;
  btcPrice: number;
  ethPrice: number;
  virtualPrice: number;
  pawsyPrice: number;
  totalStaked: number;
  totalMigrated: number;
  totalStakers: number;
  pawsyTotalSupply: number;
  pawsyHolders: number;
  pawsyMarketCap: number;
  realMarketCap: number;
  daoFunds: {
    totalUsd: number;
    breakdown: { [key: string]: number };
  };
  tvl: number;
}

export async function fetchEcosystemMetrics(): Promise<EcosystemMetrics> {
  const cacheKey = "ecosystem-metrics";

  return withCache(cacheKey, async () => {
    try {
      const breakdown: { [key: string]: number } = {};

      // Fetch ETH balance and price
      const ethBalance = await publicClient.getBalance({ address: DAO_ADDRESS });
      let ethPrice = getLastKnownPrice("ethereum") ?? 0;

      if (!ethPrice) {
        // Try CoinGecko first
        try {
          const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
          if (response.ok) {
            const data = await response.json();
            ethPrice = data.ethereum?.usd ?? 0;
            if (ethPrice) {
              updatePriceCache("ethereum", ethPrice, "CoinGecko API");
            }
          }
        } catch (error) {
          console.warn("Error fetching ETH price from CoinGecko:", error);
        }

        // Fallback to CoinMarketCap if CoinGecko failed
        if (!ethPrice) {
          const cmcPrice = await fetchPriceFromCoinMarketCap(CMC_IDS.ethereum);
          if (cmcPrice) {
            console.log("Using ETH price from CoinMarketCap:", cmcPrice);
            ethPrice = cmcPrice;
            updatePriceCache("ethereum", cmcPrice, "CoinMarketCap API");
          }
        }
      }

      const ethValue = Number(formatUnits(ethBalance, 18)) * ethPrice;
      breakdown.ETH = ethValue;

      // Fetch LP data
      const [reserves, totalSupply, lpBalance] = await Promise.all([
        publicClient.readContract({
          address: PAWSY_VIRTUAL_LP,
          abi: parseAbi(LP_ABI),
          functionName: "getReserves",
        }),
        publicClient.readContract({
          address: PAWSY_VIRTUAL_LP,
          abi: parseAbi(LP_ABI),
          functionName: "totalSupply",
        }),
        publicClient.readContract({
          address: PAWSY_VIRTUAL_LP,
          abi: parseAbi(LP_ABI),
          functionName: "balanceOf",
          args: [DAO_ADDRESS],
        }),
      ]);

      // Fetch token prices
      const [pawsyPrice, virtualPrice] = await Promise.all([
        fetchPawsyPriceFromUniswap(),
        fetchVirtualPriceFromUniswap(),
      ]);

      // Calculate LP value
      const pawsyReserve = Number(formatUnits(reserves[1] ?? 0n, 18));
      const virtualReserve = Number(formatUnits(reserves[0] ?? 0n, 18));
      const totalLpSupply = Number(formatUnits(totalSupply ?? 0n, 18));
      const lpTokenBalance = Number(formatUnits(lpBalance ?? 0n, 18));

      const totalLpValue = pawsyReserve * pawsyPrice + virtualReserve * virtualPrice;
      const lpPrice = totalLpValue / totalLpSupply;
      const lpValue = lpPrice * lpTokenBalance;
      breakdown.LP = lpValue;

      // Process other tokens
      for (const token of TOKENS) {
        const balance =
          (await publicClient.readContract({
            address: token.address,
            abi: parseAbi(ERC20_ABI),
            functionName: "balanceOf",
            args: [DAO_ADDRESS],
          })) + (token.symbol === "mPAWSY" ? 80_000_000n * 10n ** 18n : 0n);

        let price = token.symbol === "USDC" ? 1 : (getLastKnownPrice(token.symbol.toLowerCase()) ?? 0);

        if (price === 0 && "getPriceFunction" in token) {
          try {
            price = await token.getPriceFunction();
            if (price) {
              updatePriceCache(
                token.symbol.toLowerCase(),
                price,
                token.symbol === "PAWSY"
                  ? "Uniswap V2 Pool"
                  : token.symbol === "VIRTUAL"
                    ? "Virtual LP Pool"
                    : "On-chain Data",
              );
            }
          } catch (error) {
            console.warn(`Error fetching ${token.symbol} price:`, error);
          }
        }

        const value = Number(formatUnits(balance, token.decimals)) * price;
        breakdown[token.symbol] = value;
        logTokenBalance(
          token.symbol,
          Number(formatUnits(balance, token.decimals)),
          price,
          value,
          token.symbol === "PAWSY"
            ? "Uniswap V2 Pool"
            : token.symbol === "VIRTUAL"
              ? "Virtual LP Pool"
              : "On-chain Data",
        );
      }

      const totalUsd = Object.values(breakdown).reduce((a, b) => a + b, 0);
      console.log("Total DAO funds:", breakdown);

      return {
        timestamp: new Date().toISOString(),
        btcPrice: 0,
        ethPrice: ethPrice ?? DEFAULT_CACHE_VALUES.ethereum.value,
        virtualPrice: virtualPrice ?? DEFAULT_CACHE_VALUES.virtual.value,
        pawsyPrice: pawsyPrice ?? DEFAULT_CACHE_VALUES.pawsy.value,
        totalStaked: 0,
        totalMigrated: 0,
        totalStakers: 0,
        pawsyTotalSupply: 0,
        pawsyHolders: 0,
        pawsyMarketCap: 0,
        realMarketCap: 0,
        daoFunds: {
          totalUsd,
          breakdown,
        },
        tvl: 0,
      };
    } catch (error) {
      console.error("Error fetching DAO funds:", error);
      return DEFAULT_CACHE_VALUES["ecosystem-metrics"].daoFunds;
    }
  });
}
