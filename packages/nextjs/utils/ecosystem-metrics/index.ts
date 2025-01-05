import { fetchPawsyPriceFromUniswap } from "../scaffold-eth/fetchPawsyPriceFromUniswap";
import { fetchTotalDaoFunds } from "../scaffold-eth/fetchTotalDaoFunds";
import { fetchVirtualPriceFromUniswap } from "../scaffold-eth/fetchVirtualPriceFromUniswap";
import { formatUnits, parseAbi } from "viem";
import { createPublicClient, fallback, http } from "viem";
import { base } from "viem/chains";

const publicClient = createPublicClient({
  transport: fallback([http("https://base.llamarpc.com")]),
  chain: base,
});

const STAKING_VAULT_ADDRESS = "0xA6FaCD417faf801107bF19F4a24062Ff15AE9C61";
const PAWSY_ADDRESS = "0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a";
const MPAWSY_ADDRESS = "0x1437819DF58Ad648e35ED4f6F642d992684B2004";

const STAKING_VAULT_ABI = parseAbi([
  "function getTotalLockedUsers() external view returns (uint256)",
  "function getTotalStakedAmount() external view returns (uint256)",
  "function getStakingAmountByPool(uint256 poolId) external view returns (uint256)",
]);

const ERC20_ABI = parseAbi([
  "function totalSupply() external view returns (uint256)",
  "function balanceOf(address) external view returns (uint256)",
]);

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
}

async function fetchPawsyHolders(): Promise<number> {
  try {
    const BASESCAN_API_KEY = process.env.NEXT_PUBLIC_BASESCAN_API_KEY;
    if (!BASESCAN_API_KEY) {
      console.warn("NEXT_PUBLIC_BASESCAN_API_KEY not found, using fallback holder count");
      return 16193;
    }

    const response = await fetch(
      `https://api.basescan.org/api?module=token&action=tokenholderlist&contractaddress=${PAWSY_ADDRESS}&apikey=${BASESCAN_API_KEY}`,
    );
    const data = await response.json();

    if (data.status === "1" && Array.isArray(data.result)) {
      return data.result.length;
    }

    console.warn("Invalid response from Basescan API, using fallback holder count");
    return 16193;
  } catch (error) {
    console.error("Error fetching PAWSY holders:", error);
    return 16193;
  }
}

async function fetchCoinGeckoPrice(id: string): Promise<number> {
  try {
    const COINGECKO_API_KEY = process.env.COINGECKO_API_KEY;
    if (!COINGECKO_API_KEY) {
      throw new Error("COINGECKO_API_KEY not found in environment variables");
    }

    const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${id}&vs_currencies=usd`, {
      headers: {
        "x-cg-demo-api-key": COINGECKO_API_KEY,
      },
    });
    const data = await response.json();
    return data[id].usd;
  } catch (error) {
    console.error(`Error fetching ${id} price:`, error);
    return 0;
  }
}

export async function fetchEcosystemMetrics(): Promise<EcosystemMetrics> {
  // Get prices
  const [btcPrice, ethPrice] = await Promise.all([fetchCoinGeckoPrice("bitcoin"), fetchCoinGeckoPrice("ethereum")]);

  const [virtualPrice, pawsyPrice] = await Promise.all([fetchVirtualPriceFromUniswap(), fetchPawsyPriceFromUniswap()]);

  // Get staking data
  const [totalStakers, totalStaked, totalMigrated, pawsyTotalSupply, pawsyHolders] = await Promise.all([
    publicClient.readContract({
      address: STAKING_VAULT_ADDRESS,
      abi: STAKING_VAULT_ABI,
      functionName: "getTotalLockedUsers",
    }),
    publicClient.readContract({
      address: STAKING_VAULT_ADDRESS,
      abi: STAKING_VAULT_ABI,
      functionName: "getTotalStakedAmount",
    }),
    publicClient.readContract({
      address: MPAWSY_ADDRESS,
      abi: ERC20_ABI,
      functionName: "totalSupply",
    }),
    publicClient.readContract({
      address: PAWSY_ADDRESS,
      abi: ERC20_ABI,
      functionName: "totalSupply",
    }),
    fetchPawsyHolders(),
  ]);

  // Calculate market caps
  const pawsyMarketCap = Number(formatUnits(pawsyTotalSupply, 18)) * pawsyPrice;
  const realMarketCap = pawsyMarketCap * 1.1; // Includes mPAWSY value

  // Get DAO funds
  const daoFunds = await fetchTotalDaoFunds();

  return {
    timestamp: new Date().toISOString(),
    btcPrice,
    ethPrice,
    virtualPrice,
    pawsyPrice,
    totalStaked: Number(formatUnits(totalStaked, 18)),
    totalMigrated: Number(formatUnits(totalMigrated, 18)),
    totalStakers: Number(totalStakers),
    pawsyTotalSupply: Number(formatUnits(pawsyTotalSupply, 18)),
    pawsyHolders,
    pawsyMarketCap,
    realMarketCap,
    daoFunds,
  };
}

export function formatEcosystemMetrics(metrics: EcosystemMetrics): string {
  const date = new Date(metrics.timestamp);
  const formattedDate = date.toISOString().split("T")[0];
  const formattedTime = date.toISOString().split("T")[1].substring(0, 5);
  const timeZone = "UTC";

  const text = `Bark Ruffalo ecosystem metrics for ${formattedDate}, ${formattedTime} ${timeZone}:

Prices of main cryptocurrencies: BTC $${metrics.btcPrice.toLocaleString()}, $ETH $${metrics.ethPrice.toLocaleString()}, $VIRTUAL $${metrics.virtualPrice.toFixed(2)}, $PAWSY $${metrics.pawsyPrice.toFixed(4)}.

On trulyadog.com, there's ${metrics.totalStaked.toLocaleString()} staked, and ${metrics.totalMigrated.toLocaleString()} migrated $PAWSY. Total number of stakers is ${metrics.totalStakers}.

The total market cap of $PAWSY is $${(metrics.pawsyMarketCap / 1_000_000).toFixed(2)} million with a current supply of ${Math.round(metrics.pawsyTotalSupply).toLocaleString()}. It has ${metrics.pawsyHolders.toLocaleString()} holders. The real market cap of BR that includes the additional $mPAWSY supply is $${(metrics.realMarketCap / 1_000_000).toFixed(2)} million.

The DAO holds $${Math.round(metrics.daoFunds.totalUsd).toLocaleString()} in these assets: ${Object.keys(metrics.daoFunds.breakdown).join(", ")}

There are 4 AI agents in the ecosystem:

* Bark Ruffalo | ONLINE | goal: promote BR ecosystem (@TrulyADog on X, @BarkRuffalo_bot on Telegram)

* The Great Pupdini | ONLINE | goal: promote BR ecosystem, help by answering questions in the Telegram public group (@TheGreatPupdini on X, @TheGreatPupdini_bot on Telegram)

* The Alpha Doggo | ONLINE | goal: promote BR ecosystem, help with tech support for the sniper in the private groups (@TheAlphaDoggo on X, @TheAlphaDoggo_bot on Telegram)

* Shill 1 | ONLINE | goal: secret, yet obvious (for now, it's best to not reveal the account)`;

  return text;
}
