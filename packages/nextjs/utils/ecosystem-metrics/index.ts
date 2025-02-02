import { DEFAULT_CACHE_VALUES, updateHoldersCache, updatePriceCache, withCache } from "../cache";
import { RPC_ENDPOINTS, createRpcConfig } from "../common/rpc";
import { Pool } from "../scaffold-eth/calculateTVL";
import { calculateTVL } from "../scaffold-eth/calculateTVL";
import { fetchTotalDaoFunds } from "../scaffold-eth/fetchTotalDaoFunds";
import { fetchVirtualPriceFromUniswap } from "../scaffold-eth/fetchVirtualPriceFromUniswap";
import net from "net";
import { createPublicClient, http } from "viem";
import { formatUnits, parseAbi } from "viem";
import { base } from "viem/chains";
import { createConfig } from "wagmi";

const publicClient = createPublicClient(createRpcConfig());

const wagmiConfig = createConfig({
  chains: [base],
  transports: {
    [base.id]: http(),
  },
});

const STAKING_VAULT_ADDRESS = "0xA6FaCD417faf801107bF19F4a24062Ff15AE9C61" as const;
const PAWSY_ADDRESS = "0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a" as const;
const MPAWSY_ADDRESS = "0x1437819DF58Ad648e35ED4f6F642d992684B2004" as const;
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

async function fetchWithRetry(url: string, options: RequestInit & { maxRetries?: number } = {}): Promise<Response> {
  const { maxRetries = 3, ...fetchOptions } = options;
  let lastError: Error | null = null;

  for (let i = 0; i < maxRetries; i++) {
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // Increase timeout to 10 seconds

      const response = await fetch(url, {
        ...fetchOptions,
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (response.ok) return response;
      lastError = new Error(`HTTP error! status: ${response.status}`);
    } catch (error) {
      lastError = error as Error;
      console.warn(`Retry ${i + 1}/${maxRetries} failed:`, error);
      if (i < maxRetries - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000 * (i + 1))); // Longer backoff
      }
    }
  }

  throw lastError;
}

const HAS_BASESCAN_PRO = false; // Set to true if you have Basescan Pro access

async function fetchPawsyHolders(): Promise<number> {
  const cacheKey = "pawsyHolders";

  return withCache(cacheKey, async () => {
    // If no pro access, return default value
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
        `${BASESCAN_API_URL}?module=token&action=tokenholderlist&contractaddress=${PAWSY_ADDRESS}&apikey=${BASESCAN_API_KEY}`,
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
        const holders = data.result.length;
        updateHoldersCache("pawsyHolders", holders, "Basescan API");
        return holders;
      }

      console.warn("Invalid response format from Basescan API:", data);
      return DEFAULT_CACHE_VALUES.pawsyHolders.value;
    } catch (error) {
      console.error("Error fetching PAWSY holders, using default count:", error);
      return DEFAULT_CACHE_VALUES.pawsyHolders.value;
    }
  });
}

async function fetchCoinGeckoPrice(id: string): Promise<number> {
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
    // Only get price for tokens that have a numeric value
    if (id === "bitcoin" || id === "ethereum" || id === "virtual" || id === "pawsy") {
      return DEFAULT_CACHE_VALUES[id].value;
    }
    return 0;
  }
}

async function retryContractCall<T>(fn: () => Promise<T>, fallbackValue: T): Promise<T> {
  let lastError: Error | null = null;

  for (let i = 0; i < RPC_ENDPOINTS.length; i++) {
    try {
      return await fn();
    } catch (error) {
      lastError = error as Error;
      console.warn(`RPC attempt ${i + 1}/${RPC_ENDPOINTS.length} failed:`, error);
      if (i < RPC_ENDPOINTS.length - 1) {
        // Wait a bit before retrying
        await new Promise(resolve => setTimeout(resolve, 1000 * (i + 1)));
      }
    }
  }

  console.error("All RPC endpoints failed. Last error:", lastError);
  return fallbackValue;
}

const AI_AGENTS = [
  {
    name: "Bark Ruffalo",
    handle: "@TrulyADog",
    telegramHandle: "@BarkRuffalo_bot",
    ipEnv: "BARKRUFFALO_IP",
    goal: "promote BR ecosystem",
  },
  {
    name: "The Great Pupdini",
    handle: "@TheGreatPupdini",
    telegramHandle: "@TheGreatPupdini_bot",
    ipEnv: "PUPDINI_IP",
    goal: "promote BR ecosystem, help by answering questions in the Telegram public group",
  },
  {
    name: "The Alpha Doggo",
    handle: "@TheAlphaDoggo",
    telegramHandle: "@TheAlphaDoggo_bot",
    ipEnv: "ALPHADOGGO_IP",
    goal: "promote BR ecosystem, help with tech support for the sniper in the private groups",
  },
  {
    name: "Shill",
    handle: "@laur_science",
    ipEnv: "SHILL_IP",
    goal: "shill and raid for the BR ecosystem",
  },
  {
    name: "Early Warning System",
    handle: "@BR_EWS",
    telegramHandle: "@br_ews_bot",
    ipEnv: "EWS_IP",
    goal: "identify high-potential meme coin launches, alert stakers, snipe for the DAO",
  },
] as const;

interface AgentStatus {
  name: string;
  status: "online" | "offline";
}

async function checkAgentStatus(connection: string): Promise<"online" | "offline"> {
  const [ip, portStr] = connection.split(":");
  const port = parseInt(portStr || "65311");

  if (ip === "1.3.3.7") {
    return "online";
  }

  return new Promise(resolve => {
    const socket = new net.Socket();
    const timeout = 2000;

    socket.setTimeout(timeout);

    socket.on("connect", () => {
      socket.destroy();
      resolve("online");
    });

    socket.on("timeout", () => {
      socket.destroy();
      resolve("offline");
    });

    socket.on("error", () => {
      socket.destroy();
      resolve("offline");
    });

    socket.connect(port, ip);
  });
}

async function checkAllAgentsStatus(): Promise<AgentStatus[]> {
  const statusChecks = AI_AGENTS.map(async agent => {
    const connection = process.env[agent.ipEnv];
    if (!connection) {
      console.warn(`${agent.name} connection not found, using default status`);
      return { name: agent.name, status: "offline" };
    }
    const status = await checkAgentStatus(connection);
    return { name: agent.name, status };
  });

  return Promise.all(statusChecks);
}

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
  agentStatuses: AgentStatus[];
  daoFunds: {
    totalUsd: number;
    breakdown: { [key: string]: number };
  };
  tvl: number;
}

export async function fetchEcosystemMetrics(): Promise<EcosystemMetrics> {
  const cacheKey = "ecosystem-metrics";

  return withCache(cacheKey, async () => {
    // Get prices
    const [btcPrice, ethPrice] = await Promise.all([fetchCoinGeckoPrice("bitcoin"), fetchCoinGeckoPrice("ethereum")]);

    // Get staking data with better error handling
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
    ]);

    const [totalStakers, totalMigrated, pawsyTotalSupply, pawsyHolders, pools] = contractData;

    // Calculate TVL with error handling
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

    // Calculate market caps
    const pawsyMarketCap = Number(formatUnits(pawsyTotalSupply, 18)) * pawsyPrice;
    const realMarketCap = pawsyMarketCap * 1.1; // Includes mPAWSY value

    // Get DAO funds with error handling
    const daoFunds = await retryContractCall(() => fetchTotalDaoFunds(), { totalUsd: 0, breakdown: {} });

    const virtualPrice = await fetchVirtualPriceFromUniswap().catch(error => {
      console.error("Failed to fetch VIRTUAL price from Uniswap:", error);
      const defaultPrice = DEFAULT_CACHE_VALUES.virtual.value;
      console.log("Using default VIRTUAL price:", defaultPrice);
      return defaultPrice;
    });

    const agentStatuses = await checkAllAgentsStatus();

    return {
      timestamp: new Date().toISOString(),
      btcPrice: btcPrice ?? DEFAULT_CACHE_VALUES.bitcoin.value,
      ethPrice: ethPrice ?? DEFAULT_CACHE_VALUES.ethereum.value,
      virtualPrice: virtualPrice ?? DEFAULT_CACHE_VALUES.virtual.value,
      pawsyPrice: pawsyPrice ?? DEFAULT_CACHE_VALUES.pawsy.value,
      totalStaked: tvlInPawsy,
      totalMigrated: Number(formatUnits(totalMigrated, 18)),
      totalStakers: Number(totalStakers),
      pawsyTotalSupply: Number(formatUnits(pawsyTotalSupply, 18)),
      pawsyHolders,
      pawsyMarketCap,
      realMarketCap,
      agentStatuses,
      daoFunds,
      tvl: tvlInPawsy * pawsyPrice,
    };
  });
}

export function formatEcosystemMetrics(metrics: EcosystemMetrics): string {
  const date = new Date(metrics.timestamp);
  const formattedDate = date.toISOString().split("T")[0];
  const formattedTime = date.toISOString().split("T")[1].substring(0, 5);
  const timeZone = "UTC";

  const lpBreakdown = Object.entries(metrics.daoFunds.breakdown)
    .filter(([key]) => key.includes("-VIRTUAL-LP"))
    .map(
      ([key, value]) =>
        `  * Value of LP ${key.replace("-VIRTUAL-LP", "")}/VIRTUAL: $${value.toLocaleString(undefined, { maximumFractionDigits: 0 })}`,
    )
    .join("\n");

  const agentsSection = AI_AGENTS.map(agent => {
    const status = metrics.agentStatuses.find(s => s.name === agent.name)?.status || "offline";
    const xHandle = "handle" in agent ? `${agent.handle} on X` : null;
    const telegramHandle = "telegramHandle" in agent ? `${agent.telegramHandle} on Telegram` : null;
    const handles = [xHandle, telegramHandle].filter(Boolean).join(", ");
    return `  * ${agent.name} | ${status.toUpperCase()} | goal: ${agent.goal} (${handles})`;
  }).join("\n");

  const text = `Bark Ruffalo ecosystem metrics for ${formattedDate}, ${formattedTime} ${timeZone}:
- Prices of main cryptocurrencies: BTC $${metrics.btcPrice.toLocaleString()}, ETH $${Math.round(metrics.ethPrice).toLocaleString()}, VIRTUAL $${metrics.virtualPrice.toFixed(2)}, PAWSY $${metrics.pawsyPrice.toFixed(4)}.
- On trulyadog.com, there's ${Math.round(metrics.totalStaked).toLocaleString()} staked, and ${Math.round(metrics.totalMigrated).toLocaleString()} migrated $PAWSY. Total number of stakers is ${metrics.totalStakers}.
- The total market cap of $PAWSY is $${(metrics.pawsyMarketCap / 1_000_000).toFixed(2)} million with a current supply of ${Math.round(metrics.pawsyTotalSupply).toLocaleString()}. It has ${metrics.pawsyHolders.toLocaleString()} holders. The real market cap of BR that includes the additional $mPAWSY supply is $${(metrics.realMarketCap / 1_000_000).toFixed(2)} million.
- The DAO main address holds ~$${Math.round(metrics.daoFunds.totalUsd).toLocaleString()} in these assets: ETH, LPs, VIRTUAL, PAWSY, mPAWSY, POC, MAR, QTG.
${lpBreakdown}
- The DAO sniping address holds: VIRTUAL, MAR.
- There are ${AI_AGENTS.length} public AI agents in the ecosystem:
${agentsSection}`;

  return text;
}
