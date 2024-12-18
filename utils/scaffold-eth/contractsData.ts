import { useTargetNetwork } from "~~/hooks/scaffold-eth";
import { GenericContractsDeclaration, contracts } from "~~/utils/scaffold-eth/contract";

const DEFAULT_ALL_CONTRACTS: GenericContractsDeclaration[number] = {};

export function useAllContracts() {
  const { targetNetwork } = useTargetNetwork();
  const contractsData = contracts?.[targetNetwork.id];

  if (contractsData && typeof contractsData === "object") {
    const { [Object.keys(contractsData).at(6) as string]: omitted, ...filtered } = contractsData;
    return filtered;
  }

  return contractsData || DEFAULT_ALL_CONTRACTS;
}
