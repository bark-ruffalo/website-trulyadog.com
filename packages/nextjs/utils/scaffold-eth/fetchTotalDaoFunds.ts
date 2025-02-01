import { DEFAULT_CACHE_VALUES, withCache } from "../cache";
import { RPC_ENDPOINTS } from "../common/rpc";
import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { Pair, Route } from "@uniswap/v2-sdk";
import { type Address, formatUnits } from "viem";
import { createPublicClient, fallback, http, parseAbi } from "viem";
import { base } from "viem/chains";

const publicClient = createPublicClient({
  transport: fallback(RPC_ENDPOINTS.map(endpoint => http(endpoint))),
  chain: base,
});

const DAO_ADDRESS = "0xc638FB83d2bad5dD73d4C7c7deC0445d46a0716F" as const;
const VIRTUAL_TOKEN_ADDRESS = "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b" as const;
const USDC_TOKEN_ADDRESS = "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913" as const;

// CoinMarketCap IDs for tokens
const CMC_IDS = {
  ethereum: "1027",
} as const;

// LP pair configuration
interface LPConfig {
  symbol: string; // Symbol of the paired token
  address: Address; // LP pair address
  tokenAddress: Address; // Address of the paired token
  decimals: number;
}

// Configuration for all tokens and LP pairs
const CONFIG = {
  tokens: [
    {
      symbol: "USDC",
      address: USDC_TOKEN_ADDRESS,
      decimals: 6,
    },
    {
      symbol: "VIRTUAL",
      address: VIRTUAL_TOKEN_ADDRESS,
      decimals: 18,
    },
  ],
  lpPairs: [
    {
      symbol: "PAWSY",
      address: "0x96FC64caE162C1Cb288791280c3Eff2255c330a8",
      tokenAddress: "0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a",
      decimals: 18,
    },
    {
      symbol: "POC",
      address: "0xcd180f29612332254d646a54408b9f1dfd04a358",
      tokenAddress: "0x1c8d2d30f8F994c091211b039C29A99DeFcAE522",
      decimals: 18,
    },
    {
      symbol: "QTG",
      address: "0x0e39a4dc9fdfd67cb0c8bda3a544f34f8c58b639",
      tokenAddress: "0xb4Df5F42A2133933b6AB6bDa8037CaB6E5604DF1",
      decimals: 18,
    },
  ],
} as const;

const LP_ABI = parseAbi([
  "function getReserves() view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address) view returns (uint256)",
  "function token0() view returns (address)",
  "function token1() view returns (address)",
]);

const ERC20_ABI = parseAbi(["function balanceOf(address) view returns (uint256)"]);

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
  } catch (error: unknown) {
    if (error instanceof Error && error.name === "AbortError") {
      console.warn("CoinMarketCap request timed out");
    } else {
      console.warn("Error fetching price from CoinMarketCap:", error);
    }
    return DEFAULT_CACHE_VALUES.ethereum.value;
  }
}

async function calculateTokenPriceFromLP(lpConfig: LPConfig, virtualPrice: number): Promise<number> {
  try {
    const VIRTUAL = new Token(8453, VIRTUAL_TOKEN_ADDRESS, 18);
    const PAIRED_TOKEN = new Token(8453, lpConfig.tokenAddress, lpConfig.decimals);

    const [[reserve0, reserve1], token0] = await Promise.all([
      publicClient.readContract({
        address: lpConfig.address,
        abi: LP_ABI,
        functionName: "getReserves",
      }),
      publicClient.readContract({
        address: lpConfig.address,
        abi: LP_ABI,
        functionName: "token0",
      }),
    ]);

    const pair = new Pair(
      CurrencyAmount.fromRawAmount(token0 === VIRTUAL.address ? VIRTUAL : PAIRED_TOKEN, reserve0.toString()),
      CurrencyAmount.fromRawAmount(token0 === VIRTUAL.address ? PAIRED_TOKEN : VIRTUAL, reserve1.toString()),
    );

    const route = new Route([pair], PAIRED_TOKEN, VIRTUAL);
    const priceInVirtual = parseFloat(route.midPrice.toSignificant(6));
    return priceInVirtual * virtualPrice;
  } catch (error) {
    console.error(`Error calculating price for ${lpConfig.symbol} from LP:`, error);
    return 0;
  }
}

async function calculateLPValue(
  lpConfig: LPConfig,
  virtualPrice: number,
): Promise<{ lpValue: number; tokenPrice: number }> {
  try {
    const [[reserve0, reserve1], totalSupply, lpBalance] = await Promise.all([
      publicClient.readContract({
        address: lpConfig.address,
        abi: LP_ABI,
        functionName: "getReserves",
      }),
      publicClient.readContract({
        address: lpConfig.address,
        abi: LP_ABI,
        functionName: "totalSupply",
      }),
      publicClient.readContract({
        address: lpConfig.address,
        abi: LP_ABI,
        functionName: "balanceOf",
        args: [DAO_ADDRESS],
      }),
    ]);

    const tokenPrice = await calculateTokenPriceFromLP(lpConfig, virtualPrice);

    const virtualReserve = Number(formatUnits(reserve0, 18));
    const tokenReserve = Number(formatUnits(reserve1, lpConfig.decimals));
    const totalLpSupply = Number(formatUnits(totalSupply, 18));
    const lpTokenBalance = Number(formatUnits(lpBalance, 18));

    const totalLpValue = virtualReserve * virtualPrice + tokenReserve * tokenPrice;
    const lpPrice = totalLpValue / totalLpSupply;
    const lpValue = lpPrice * lpTokenBalance;

    return { lpValue, tokenPrice };
  } catch (error) {
    console.error(`Error calculating LP value for ${lpConfig.symbol}:`, error);
    return { lpValue: 0, tokenPrice: 0 };
  }
}

async function fetchEthPrice(): Promise<number> {
  try {
    const response = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd");
    if (response.ok) {
      const data = await response.json();
      return data.ethereum?.usd ?? 0;
    }
  } catch (error) {
    console.warn("Error fetching ETH price from CoinGecko:", error);
  }
  return fetchPriceFromCoinMarketCap(CMC_IDS.ethereum);
}

export async function fetchTotalDaoFunds(): Promise<{ totalUsd: number; breakdown: { [key: string]: number } }> {
  const cacheKey = "dao-funds";

  return withCache(cacheKey, async () => {
    try {
      const breakdown: { [key: string]: number } = {};
      const tokenBalances: { [key: string]: number } = {};

      // Fetch ETH balance and price
      const ethBalance = await publicClient.getBalance({ address: DAO_ADDRESS });
      const ethPrice = await fetchEthPrice();
      const ethValue = Number(formatUnits(ethBalance, 18)) * ethPrice;
      breakdown.ETH = ethValue;

      // First fetch all token balances
      for (const token of CONFIG.tokens) {
        const balance = await publicClient.readContract({
          address: token.address,
          abi: ERC20_ABI,
          functionName: "balanceOf",
          args: [DAO_ADDRESS],
        });

        const balanceFormatted = Number(formatUnits(balance, token.decimals));
        tokenBalances[token.symbol] = balanceFormatted;

        // Only set USDC value for now, VIRTUAL will be updated later
        if (token.symbol === "USDC") {
          const value = balanceFormatted * 1; // USDC price is 1
          breakdown[token.symbol] = value;
          logTokenBalance(token.symbol, balanceFormatted, 1, value, "On-chain Data");
        }
      }

      // Calculate VIRTUAL price first as it's needed for LP calculations
      const virtualUsdcPair = Pair.getAddress(
        new Token(8453, VIRTUAL_TOKEN_ADDRESS, 18),
        new Token(8453, USDC_TOKEN_ADDRESS, 6),
      );

      const inverseVirtualPrice = await calculateTokenPriceFromLP(
        {
          symbol: "VIRTUAL-USDC",
          address: virtualUsdcPair,
          tokenAddress: USDC_TOKEN_ADDRESS,
          decimals: 6,
        },
        1,
      );

      const virtualPrice = 1 / inverseVirtualPrice;

      // Now we can calculate VIRTUAL value
      const virtualValue = tokenBalances.VIRTUAL * virtualPrice;
      breakdown.VIRTUAL = virtualValue;
      logTokenBalance("VIRTUAL", tokenBalances.VIRTUAL, virtualPrice, virtualValue, "Uniswap V2 Pool");

      // Process LP pairs
      for (const lpConfig of CONFIG.lpPairs) {
        const { lpValue, tokenPrice } = await calculateLPValue(lpConfig, virtualPrice);

        // Add LP value to breakdown
        breakdown[`${lpConfig.symbol}-VIRTUAL-LP`] = lpValue;

        // Get token balance and value
        const tokenBalance = await publicClient.readContract({
          address: lpConfig.tokenAddress,
          abi: ERC20_ABI,
          functionName: "balanceOf",
          args: [DAO_ADDRESS],
        });

        const tokenValue = Number(formatUnits(tokenBalance, lpConfig.decimals)) * tokenPrice;
        breakdown[lpConfig.symbol] = tokenValue;

        logTokenBalance(
          lpConfig.symbol,
          Number(formatUnits(tokenBalance, lpConfig.decimals)),
          tokenPrice,
          tokenValue,
          "Uniswap V2 Pool",
        );
      }

      const totalUsd = Object.values(breakdown).reduce((a, b) => a + b, 0);
      console.log("Total DAO funds:", breakdown);

      return {
        totalUsd,
        breakdown,
      };
    } catch (error) {
      console.error("Error fetching DAO funds:", error);
      throw error;
    }
  });
}
