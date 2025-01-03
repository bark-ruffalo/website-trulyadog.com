import { fetchPawsyPriceFromUniswap } from "./fetchPawsyPriceFromUniswap";
import { fetchVirtualPriceFromUniswap } from "./fetchVirtualPriceFromUniswap";
import { formatUnits } from "viem";
import { createPublicClient, fallback, http, parseAbi } from "viem";

const publicClient = createPublicClient({
  transport: fallback([http("https://base.llamarpc.com")]),
  chain: {
    id: 8453,
    name: "Base",
    network: "base",
    nativeCurrency: { name: "Ethereum", symbol: "ETH", decimals: 18 },
    rpcUrls: {
      default: { http: ["https://base.llamarpc.com"] },
    },
  },
});

const DAO_ADDRESS = "0xc638FB83d2bad5dD73d4C7c7deC0445d46a0716F";
const PAWSY_VIRTUAL_LP = "0x96FC64caE162C1Cb288791280c3Eff2255c330a8";

const TOKENS = [
  {
    symbol: "USDC",
    address: "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913",
    decimals: 6,
    coingeckoId: "usd-coin",
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

export const fetchTotalDaoFunds = async (): Promise<{ totalUsd: number; breakdown: { [key: string]: number } }> => {
  try {
    const breakdown: { [key: string]: number } = {};

    const ethBalance = await publicClient.getBalance({ address: DAO_ADDRESS });
    const ethPrice = await fetch("https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd")
      .then(res => res.json())
      .then(data => data.ethereum.usd);
    const ethValue = Number(formatUnits(ethBalance, 18)) * ethPrice;
    breakdown.ETH = ethValue;

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

    const [pawsyPrice, virtualPrice] = await Promise.all([
      fetchPawsyPriceFromUniswap(),
      fetchVirtualPriceFromUniswap(),
    ]);

    const pawsyReserve = Number(formatUnits(reserves[1] ?? 0n, 18));
    const virtualReserve = Number(formatUnits(reserves[0] ?? 0n, 18));
    const totalLpSupply = Number(formatUnits(totalSupply ?? 0n, 18));
    const lpTokenBalance = Number(formatUnits(lpBalance ?? 0n, 18));

    const totalLpValue = pawsyReserve * pawsyPrice + virtualReserve * virtualPrice;
    const lpPrice = totalLpValue / totalLpSupply;
    const lpValue = lpPrice * lpTokenBalance;
    breakdown.LP = lpValue;

    for (const token of TOKENS) {
      const balance =
        (await publicClient.readContract({
          address: token.address,
          abi: parseAbi(ERC20_ABI),
          functionName: "balanceOf",
          args: [DAO_ADDRESS],
        })) + (token.symbol === "mPAWSY" ? 80_000_000n * 10n ** 18n : 0n);

      let price: number;
      if ("getPriceFunction" in token) {
        price = await token.getPriceFunction();
      } else if ("coingeckoId" in token) {
        price = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=${token.coingeckoId}&vs_currencies=usd`)
          .then(res => res.json())
          .then(data => data[token.coingeckoId].usd);
      } else {
        continue;
      }

      const value = Number(formatUnits(balance, token.decimals)) * price;
      if (value > 0) {
        breakdown[token.symbol] = value;
      }
    }

    console.log(breakdown);
    const totalUsd = Object.values(breakdown).reduce((a, b) => a + b, 0);

    return {
      totalUsd,
      breakdown,
    };
  } catch (error) {
    console.error("Error fetching DAO funds:", error);
    throw error;
  }
};
