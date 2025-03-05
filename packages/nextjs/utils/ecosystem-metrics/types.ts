export interface AgentStatus {
  name: string;
  status: "online" | "offline";
}

export interface EcosystemMetrics {
  timestamp: string;
  btcPrice: number;
  ethPrice: number;
  virtualPrice: number;
  pawsyPrice: number;
  totalStaked: number;
  totalMigrated: number;
  migratedPawsy: number;
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
  percentageOfUsersMpawsySupplyStaked: number;
  daoMpawsySupply: number;
  usersMpawsySupply: number;
  pawsyInBurnAddress: number;
  pawsyInLostAddress: number;
  pawsyInLpAddress: number;
  tradingSupply: number;
  barkRuffaloSupply: number;
  barkRuffaloMarketCap: number;
}
