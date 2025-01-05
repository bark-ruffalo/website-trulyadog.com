import { Pool } from "../scaffold-eth/calculateTVL";
import { calculateTVL } from "../scaffold-eth/calculateTVL";
// import { fetchPawsyPriceFromUniswap } from "../scaffold-eth/fetchPawsyPriceFromUniswap";
import { fetchTotalDaoFunds } from "../scaffold-eth/fetchTotalDaoFunds";
import { fetchVirtualPriceFromUniswap } from "../scaffold-eth/fetchVirtualPriceFromUniswap";
import { formatUnits, parseAbi } from "viem";
import { createPublicClient, fallback, http } from "viem";
import { base } from "viem/chains";
import { createConfig } from "wagmi";

const publicClient = createPublicClient({
  transport: fallback([http("https://base.llamarpc.com")]),
  chain: base,
});

const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

const STAKING_VAULT_ADDRESS = "0xA6FaCD417faf801107bF19F4a24062Ff15AE9C61";
const PAWSY_ADDRESS = "0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a";
const MPAWSY_ADDRESS = "0x1437819DF58Ad648e35ED4f6F642d992684B2004";
const LP_ADDRESS = "0x96FC64caE162C1Cb288791280c3Eff2255c330a8";

const STAKING_VAULT_ABI = [
  {
    inputs: [{ internalType: "address", name: "_rewardToken", type: "address" }],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  { inputs: [], name: "EnforcedPause", type: "error" },
  { inputs: [], name: "ExpectedPause", type: "error" },
  { inputs: [{ internalType: "address", name: "owner", type: "address" }], name: "OwnableInvalidOwner", type: "error" },
  {
    inputs: [{ internalType: "address", name: "account", type: "address" }],
    name: "OwnableUnauthorizedAccount",
    type: "error",
  },
  { inputs: [], name: "ReentrancyGuardReentrantCall", type: "error" },
  {
    inputs: [{ internalType: "address", name: "token", type: "address" }],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint256", name: "lockId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "lockPeriod", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "unlockTime", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "poolId", type: "uint256" },
    ],
    name: "Locked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "previousOwner", type: "address" },
      { indexed: true, internalType: "address", name: "newOwner", type: "address" },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
    name: "Paused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "poolId", type: "uint256" },
      { indexed: true, internalType: "address", name: "stakingToken", type: "address" },
    ],
    name: "PoolAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "poolId", type: "uint256" },
      { indexed: false, internalType: "bool", name: "isActive", type: "bool" },
    ],
    name: "PoolStatusUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "uint256", name: "poolId", type: "uint256" },
      { indexed: false, internalType: "uint256[]", name: "newRewardRates", type: "uint256[]" },
    ],
    name: "RewardRatesUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint256", name: "poolId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "RewardsClaimed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint256", name: "poolId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "lockPeriod", type: "uint256" },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint256", name: "lockId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "poolId", type: "uint256" },
    ],
    name: "Unlocked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: "address", name: "account", type: "address" }],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: "address", name: "user", type: "address" },
      { indexed: true, internalType: "uint256", name: "poolId", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "amount", type: "uint256" },
      { indexed: false, internalType: "uint256", name: "reward", type: "uint256" },
    ],
    name: "Unstaked",
    type: "event",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "_stakingToken", type: "address" },
      { internalType: "uint256[]", name: "_lockPeriods", type: "uint256[]" },
      { internalType: "uint256[]", name: "_rewardRates", type: "uint256[]" },
    ],
    name: "addPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "user", type: "address" },
      { internalType: "uint256", name: "lockId", type: "uint256" },
    ],
    name: "calculateRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "poolId", type: "uint256" },
      { internalType: "uint256", name: "lockId", type: "uint256" },
    ],
    name: "claimRewards",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { inputs: [], name: "emergencyUnlockAll", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getActiveStakedBalance",
    outputs: [{ internalType: "uint256", name: "totalStaked", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getLifetimeRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
    name: "getLockedUsersByPool",
    outputs: [{ internalType: "address[]", name: "", type: "address[]" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getPools",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "poolId", type: "uint256" },
          { internalType: "contract IERC20", name: "stakingToken", type: "address" },
          { internalType: "uint256[]", name: "lockPeriods", type: "uint256[]" },
          { internalType: "uint256[]", name: "rewardRates", type: "uint256[]" },
          { internalType: "bool", name: "isActive", type: "bool" },
        ],
        internalType: "struct StakingVault.Pool[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "poolId", type: "uint256" }],
    name: "getStakingAmountByPool",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalLockedUsers",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getTotalStakedAmount",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "user", type: "address" }],
    name: "getUserLocks",
    outputs: [
      {
        components: [
          { internalType: "uint256", name: "lockId", type: "uint256" },
          { internalType: "uint256", name: "amount", type: "uint256" },
          { internalType: "uint256", name: "lockPeriod", type: "uint256" },
          { internalType: "uint256", name: "unlockTime", type: "uint256" },
          { internalType: "uint256", name: "lastClaimTime", type: "uint256" },
          { internalType: "uint256", name: "poolId", type: "uint256" },
          { internalType: "bool", name: "isLocked", type: "bool" },
        ],
        internalType: "struct StakingVault.LockInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "", type: "address" }],
    name: "lifetimeRewards",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "lockedUsers",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  { inputs: [], name: "pause", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "paused",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    name: "pools",
    outputs: [
      { internalType: "uint256", name: "poolId", type: "uint256" },
      { internalType: "contract IERC20", name: "stakingToken", type: "address" },
      { internalType: "bool", name: "isActive", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "contract IERC20", name: "tokenAddress", type: "address" },
      { internalType: "address", name: "to", type: "address" },
      { internalType: "uint256", name: "amount", type: "uint256" },
    ],
    name: "recoverTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { inputs: [], name: "renounceOwnership", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [],
    name: "rewardToken",
    outputs: [{ internalType: "contract RewardToken", name: "", type: "address" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "poolId", type: "uint256" },
      { internalType: "bool", name: "isActive", type: "bool" },
    ],
    name: "setPoolStatus",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "_rewardToken", type: "address" }],
    name: "setRewardToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "poolId", type: "uint256" },
      { internalType: "uint256", name: "_amount", type: "uint256" },
      { internalType: "uint256", name: "_lockPeriod", type: "uint256" },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  { inputs: [], name: "unpause", outputs: [], stateMutability: "nonpayable", type: "function" },
  {
    inputs: [
      { internalType: "uint256", name: "poolId", type: "uint256" },
      { internalType: "uint256", name: "lockId", type: "uint256" },
    ],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "uint256", name: "poolId", type: "uint256" },
      { internalType: "uint256[]", name: "newRewardRates", type: "uint256[]" },
    ],
    name: "updateRewardRates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      { internalType: "address", name: "", type: "address" },
      { internalType: "uint256", name: "", type: "uint256" },
    ],
    name: "userLocks",
    outputs: [
      { internalType: "uint256", name: "lockId", type: "uint256" },
      { internalType: "uint256", name: "amount", type: "uint256" },
      { internalType: "uint256", name: "lockPeriod", type: "uint256" },
      { internalType: "uint256", name: "unlockTime", type: "uint256" },
      { internalType: "uint256", name: "lastClaimTime", type: "uint256" },
      { internalType: "uint256", name: "poolId", type: "uint256" },
      { internalType: "bool", name: "isLocked", type: "bool" },
    ],
    stateMutability: "view",
    type: "function",
  },
];

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

  // Get staking data
  const [totalStakers, totalMigrated, pawsyTotalSupply, pawsyHolders, pools] = await Promise.all([
    publicClient.readContract({
      address: STAKING_VAULT_ADDRESS,
      abi: STAKING_VAULT_ABI,
      functionName: "getTotalLockedUsers",
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
    publicClient.readContract({
      address: STAKING_VAULT_ADDRESS,
      abi: STAKING_VAULT_ABI,
      functionName: "getPools",
    }),
  ]);

  // Calculate TVL
  const { tvlInPawsy, pawsyPrice } = await calculateTVL(
    pools as unknown as Pool[],
    STAKING_VAULT_ADDRESS,
    STAKING_VAULT_ABI,
    LP_ADDRESS,
    LP_ADDRESS,
    wagmiConfig,
  );

  // Calculate market caps
  const pawsyMarketCap = Number(formatUnits(pawsyTotalSupply, 18)) * pawsyPrice;
  const realMarketCap = pawsyMarketCap * 1.1; // Includes mPAWSY value

  // Get DAO funds
  const daoFunds = await fetchTotalDaoFunds();

  return {
    timestamp: new Date().toISOString(),
    btcPrice,
    ethPrice,
    virtualPrice: await fetchVirtualPriceFromUniswap(),
    pawsyPrice,
    totalStaked: tvlInPawsy,
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

Prices of main cryptocurrencies: BTC $${metrics.btcPrice.toLocaleString()}, $ETH $${Math.round(metrics.ethPrice).toLocaleString()}, $VIRTUAL $${metrics.virtualPrice.toFixed(2)}, $PAWSY $${metrics.pawsyPrice.toFixed(4)}.

On trulyadog.com, there's ${Math.round(metrics.totalStaked).toLocaleString()} staked, and ${Math.round(metrics.totalMigrated).toLocaleString()} migrated $PAWSY. Total number of stakers is ${metrics.totalStakers}.

The total market cap of $PAWSY is $${(metrics.pawsyMarketCap / 1_000_000).toFixed(2)} million with a current supply of ${Math.round(metrics.pawsyTotalSupply).toLocaleString()}. It has ${metrics.pawsyHolders.toLocaleString()} holders. The real market cap of BR that includes the additional $mPAWSY supply is $${(metrics.realMarketCap / 1_000_000).toFixed(2)} million.

The DAO holds $${Math.round(metrics.daoFunds.totalUsd).toLocaleString()} in these assets: ${Object.keys(metrics.daoFunds.breakdown).join(", ")}

There are 3 public AI agents in the ecosystem:

* Bark Ruffalo | ONLINE | goal: promote BR ecosystem (@TrulyADog on X, @BarkRuffalo_bot on Telegram)

* The Great Pupdini | ONLINE | goal: promote BR ecosystem, help by answering questions in the Telegram public group (@TheGreatPupdini on X, @TheGreatPupdini_bot on Telegram)

* The Alpha Doggo | ONLINE | goal: promote BR ecosystem, help with tech support for the sniper in the private groups (@TheAlphaDoggo on X, @TheAlphaDoggo_bot on Telegram)`;

  return text;
}
