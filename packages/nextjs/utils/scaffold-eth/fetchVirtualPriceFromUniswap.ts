import { getAlchemyHttpUrl } from "./networks";
import { CurrencyAmount, Token } from "@uniswap/sdk-core";
import { Pair, Route } from "@uniswap/v2-sdk";
import { Address, createPublicClient, fallback, http, parseAbi } from "viem";
import { base } from "viem/chains";

const alchemyHttpUrl = getAlchemyHttpUrl(base.id);
const rpcFallbacks = alchemyHttpUrl ? [http(alchemyHttpUrl), http()] : [http()];
const publicClient = createPublicClient({
  chain: base,
  transport: fallback(rpcFallbacks),
});

const ABI = parseAbi([
  "function getReserves() external view returns (uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast)",
  "function token0() external view returns (address)",
  "function token1() external view returns (address)",
]);

export const fetchVirtualPriceFromUniswap = async (): Promise<number> => {
  try {
    const VIRTUAL = new Token(8453, "0x0b3e328455c4059EEb9e3f84b5543F74E24e7E1b", 18);
    const USDC = new Token(8453, "0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913", 6);

    const virtualUsdcPairAddress = Pair.getAddress(VIRTUAL, USDC) as Address;

    const virtualUsdcReserves = await publicClient.readContract({
      address: virtualUsdcPairAddress,
      abi: ABI,
      functionName: "getReserves",
    });

    const virtualUsdcToken0 = await publicClient.readContract({
      address: virtualUsdcPairAddress,
      abi: ABI,
      functionName: "token0",
    });

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

    const route = new Route([virtualUsdcPair], VIRTUAL, USDC);
    const price = parseFloat(route.midPrice.toSignificant(6));
    return price;
  } catch (error) {
    console.error(`Error fetching VIRTUAL price in USDC from Uniswap on Base: `, error);
    return 0;
  }
};
