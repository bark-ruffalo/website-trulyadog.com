import { getAlchemyHttpUrl } from "../scaffold-eth/networks";
import { fallback, http } from "viem";
import { base } from "viem/chains";

export const RPC_ENDPOINTS = [
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
