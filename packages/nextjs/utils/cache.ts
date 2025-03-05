export const cache = new Map<string, { data: any; timestamp: number }>();
export const CACHE_DURATION = 4 * 60 * 1000;

export interface CacheEntry<T> {
  value: T;
  timestamp: number;
  source?: string;
}

interface DaoFunds {
  totalUsd: number;
  breakdown: { [key: string]: number };
}

type CacheValues = {
  ethereum: CacheEntry<number>;
  bitcoin: CacheEntry<number>;
  virtual: CacheEntry<number>;
  pawsy: CacheEntry<number>;

  totalStaked: CacheEntry<number>;
  totalMigrated: CacheEntry<number>;
  totalStakers: CacheEntry<number>;
  pawsyTotalSupply: CacheEntry<number>;
  pawsyHolders: CacheEntry<number>;
  pawsyMarketCap: CacheEntry<number>;
  realMarketCap: CacheEntry<number>;
  daoFunds: CacheEntry<DaoFunds>;
  tvl: CacheEntry<number>;
};

export const DEFAULT_CACHE_VALUES: CacheValues = {
  ethereum: { value: 3500, timestamp: 0, source: "initial" },
  bitcoin: { value: 65000, timestamp: 0, source: "initial" },
  virtual: { value: 0.12, timestamp: 0, source: "initial" },
  pawsy: { value: 0.00023, timestamp: 0, source: "initial" },

  totalStaked: { value: 450000000, timestamp: 0, source: "initial" },
  totalMigrated: { value: 80000000, timestamp: 0, source: "initial" },
  totalStakers: { value: 56, timestamp: 0, source: "initial" },
  pawsyTotalSupply: { value: 1000000000, timestamp: 0, source: "initial" },
  pawsyHolders: { value: 27595, timestamp: 0, source: "initial" },
  pawsyMarketCap: { value: 230000, timestamp: 0, source: "contract" },
  realMarketCap: { value: 253000, timestamp: 0, source: "calculation" },
  daoFunds: {
    value: {
      totalUsd: 150000,
      breakdown: {
        ETH: 50000,
        USDC: 50000,
        PAWSY: 25000,
        VIRTUAL: 25000,
      },
    },
    timestamp: 0,
    source: "contract",
  },
  tvl: { value: 103500, timestamp: 0, source: "contract" },
};

export const priceCache: Record<string, CacheEntry<number>> = Object.fromEntries(
  Object.entries(DEFAULT_CACHE_VALUES)
    .filter(([key]) => ["ethereum", "bitcoin", "virtual", "pawsy"].includes(key))
    .map(([key, value]) => [key, value as CacheEntry<number>]),
);

export async function withCache<T>(key: string, fetchFn: () => Promise<T>): Promise<T> {
  const cached = cache.get(key);
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    const age = Math.round((Date.now() - cached.timestamp) / 1000);
    const source = (cached.data as CacheEntry<T>)?.source || "unknown";
    console.log(`Cache hit for ${key} (age: ${age}s, source: ${source})`);
    return Promise.resolve(cached.data);
  }

  console.log(`Cache miss for ${key}, fetching fresh data`);
  const data = await fetchFn();
  const timestamp = Date.now();
  cache.set(key, { data, timestamp });
  console.log(`Updated cache for ${key} at ${new Date(timestamp).toISOString()}`);
  return data;
}

export function updatePriceCache(symbol: string, price: number, source: string): void {
  const sourceMap: Record<string, string> = {
    "Uniswap V2": "Uniswap V2 Pool",
    "Virtual LP": "Virtual LP Pool",
    CoinMarketCap: "CMC API",
    contract: "On-chain Data",
    calculation: "Derived Value",
    initial: "Default Value",
  };

  const timestamp = Date.now();
  const formattedSource = sourceMap[source] || source;
  console.log(
    `Updating price cache for ${symbol}:\n` +
      `  Price: $${price.toFixed(6)}\n` +
      `  Source: ${formattedSource}\n` +
      `  Time: ${new Date(timestamp).toISOString()}`,
  );
  priceCache[symbol] = { value: price, timestamp, source: formattedSource };
}

export function getLastKnownPrice(symbol: string): number | null {
  const cached = priceCache[symbol];
  if (!cached) return null;

  const age = Math.round((Date.now() - cached.timestamp) / 1000);
  console.log(`Last known price for ${symbol}: $${cached.value.toFixed(6)} (age: ${age}s, source: ${cached.source})`);
  return cached.value;
}

export function updateHoldersCache(key: string, value: number, source: string) {
  const sourceMap: Record<string, string> = {
    "Basescan API": "Basescan API",
    contract: "On-chain Data",
    calculation: "Derived Value",
    initial: "Default Value",
  };

  const timestamp = Date.now();
  const formattedSource = sourceMap[source] || source;
  console.log(`Updating ${key} cache: ${value} (source: ${formattedSource})`);
  cache.set(key, {
    data: { value, source: formattedSource },
    timestamp,
  });
}
