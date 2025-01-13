import { DEFAULT_CACHE_VALUES, updatePriceCache, withCache } from "../cache";
import { getAlchemyHttpUrl } from "./networks";
import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { Pair, Route } from "@uniswap/v2-sdk";
import { Address, createPublicClient, fallback, http, parseAbi } from "viem";
import { base } from "viem/chains";

const RPC_ENDPOINTS: readonly string[] = [
  "https://base-rpc.publicnode.com",
  "https://base.drpc.org",
  "https://base-pokt.nodies.app",
] as const;

const alchemyHttpUrl = getAlchemyHttpUrl(base.id);
const rpcFallbacks = [...(alchemyHttpUrl ? [http(alchemyHttpUrl)] : []), ...RPC_ENDPOINTS.map(url => http(url))];

const publicClient = createPublicClient({
  chain: base,
  transport: fallback(rpcFallbacks),
});

const ABI = parseAbi([
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
]) as const;

export const fetchPawsyPriceFromUniswap = async (): Promise<number> => {
  const cacheKey = "pawsy-price";

  return withCache(cacheKey, async () => {
    try {
      const PAWSY = new Token(8453, "0x29e39327b5B1E500B87FC0fcAe3856CD8F96eD2a", 18);
      const USDC = new Token(8453, "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", 6);
      const VIRTUAL = new Token(8453, "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b", 18);

      const pawsyVirtualPairAddress = Pair.getAddress(PAWSY, VIRTUAL) as Address;
      const virtualUsdcPairAddress = Pair.getAddress(VIRTUAL, USDC) as Address;

      const [pawsyVirtualReserves, virtualUsdcReserves, pawsyVirtualToken0, virtualUsdcToken0] = await Promise.all([
        publicClient.readContract({
          address: pawsyVirtualPairAddress,
          abi: ABI,
          functionName: "getReserves",
        }),
        publicClient.readContract({
          address: virtualUsdcPairAddress,
          abi: ABI,
          functionName: "getReserves",
        }),
        publicClient.readContract({
          address: pawsyVirtualPairAddress,
          abi: ABI,
          functionName: "token0",
        }),
        publicClient.readContract({
          address: virtualUsdcPairAddress,
          abi: ABI,
          functionName: "token0",
        }),
      ]);

      const pawsyVirtualPair = new Pair(
        CurrencyAmount.fromRawAmount(
          pawsyVirtualToken0 === PAWSY.address ? PAWSY : VIRTUAL,
          pawsyVirtualReserves[0].toString(),
        ),
        CurrencyAmount.fromRawAmount(
          pawsyVirtualToken0 === PAWSY.address ? VIRTUAL : PAWSY,
          pawsyVirtualReserves[1].toString(),
        ),
      );

      const virtualUsdcPair = new Pair(
        CurrencyAmount.fromRawAmount(
          virtualUsdcToken0 === VIRTUAL.address ? VIRTUAL : USDC,
          virtualUsdcReserves[0].toString(),
        ),
        CurrencyAmount.fromRawAmount(
          virtualUsdcToken0 === VIRTUAL.address ? USDC : VIRTUAL,
          virtualUsdcReserves[1].toString(),
        ),
      );

      const route = new Route([pawsyVirtualPair, virtualUsdcPair], PAWSY, USDC);
      const price = parseFloat(route.midPrice.toSignificant(6));
      updatePriceCache("pawsy", price, "Uniswap V2 Pool");
      return price;
    } catch (error) {
      console.error("Error fetching PAWSY price from Uniswap:", error);
      return DEFAULT_CACHE_VALUES.pawsy.value;
    }
  });
};
