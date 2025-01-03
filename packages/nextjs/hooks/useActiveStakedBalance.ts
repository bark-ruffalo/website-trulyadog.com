import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const useActiveStakedBalance = (address: string | undefined) => {
  const { data, error } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getActiveStakedBalance",
    args: [address],
  });

  return {
    activeStakedBalance: data ? Number(data) : 0,
    error,
  };
};
