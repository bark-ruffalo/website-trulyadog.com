import { getAlchemyHttpUrl } from "../scaffold-eth/networks";
import { fallback, http } from "viem";
import { base } from "viem/chains";

// Get Base RPC URL from environment variable, fallback to public RPC endpoints
const baseRpcUrl = process.env.BASE_RPC;

export const RPC_ENDPOINTS = [
  ...(baseRpcUrl ? [baseRpcUrl] : []),
  "https://base-rpc.publicnode.com",
  "https://base.drpc.org",
  "https://base-pokt.nodies.app",
] as const;

export const alchemyHttpUrl = getAlchemyHttpUrl(base.id);
export const rpcFallbacks = [...(alchemyHttpUrl ? [http(alchemyHttpUrl)] : []), ...RPC_ENDPOINTS.map(url => http(url))];

export const createRpcConfig = () => ({
  chain: base,
  transport: fallback(rpcFallbacks),
});
