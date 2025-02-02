import { DEFAULT_CACHE_VALUES, updatePriceCache, withCache } from "../cache";
import { fetchWithRetry } from "./network";

const HAS_BASESCAN_PRO = false;

export async function fetchPawsyHolders(): Promise<number> {
  const cacheKey = "pawsyHolders";

  return withCache(cacheKey, async () => {
    if (!HAS_BASESCAN_PRO) {
      console.log("Basescan Pro access not available, using default holders count");
      return DEFAULT_CACHE_VALUES.pawsyHolders.value;
    }

    try {
      const BASESCAN_API_KEY = process.env.BASESCAN_API_KEY;
      const BASESCAN_API_URL = "https://api.basescan.org/api";

      if (!BASESCAN_API_KEY) {
        console.warn("BASESCAN_API_KEY not found, using default holders count");
        return DEFAULT_CACHE_VALUES.pawsyHolders.value;
      }

      const response = await fetchWithRetry(
        `${BASESCAN_API_URL}?module=token&action=tokenholderlist&contractaddress=${process.env.PAWSY_ADDRESS}&apikey=${BASESCAN_API_KEY}`,
        {
          maxRetries: 3,
          headers: {
            Accept: "application/json",
          },
        },
      );

      const data = await response.json();

      if (data.status === "1" && Array.isArray(data.result)) {
        console.log(
          `PAWSY Holders:\n` +
            `  Count: ${data.result.length}\n` +
            `  Source: Basescan API\n` +
            `  Time: ${new Date().toISOString()}`,
        );
        return data.result.length;
      }

      console.warn("Invalid response format from Basescan API:", data);
      return DEFAULT_CACHE_VALUES.pawsyHolders.value;
    } catch (error) {
      console.error("Error fetching PAWSY holders, using default count:", error);
      return DEFAULT_CACHE_VALUES.pawsyHolders.value;
    }
  });
}

export async function fetchCoinGeckoPrice(id: string): Promise<number> {
  try {
    const COINGECKO_API_URL = process.env.NEXT_PUBLIC_COINGECKO_API_URL || "https://api.coingecko.com/api/v3";

    const response = await fetchWithRetry(`${COINGECKO_API_URL}/simple/price?ids=${id}&vs_currencies=usd`, {
      maxRetries: 3,
      headers: {
        Accept: "application/json",
      },
    });

    const data = await response.json();
    const price = data[id]?.usd ?? 0;
    if (price) {
      updatePriceCache(id, price, "CoinGecko");
    }
    return price;
  } catch (error) {
    console.error(`Error fetching ${id} price from CoinGecko:`, error);
    if (id === "bitcoin" || id === "ethereum" || id === "virtual" || id === "pawsy") {
      return DEFAULT_CACHE_VALUES[id].value;
    }
    return 0;
  }
}
