import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

export const useActiveStakedBalance = (address: string | undefined) => {
  const { data, error } = useScaffoldReadContract({
    contractName: "StakingVault",
    functionName: "getActiveStakedBalance",
    args: [address],
  });

  return {
<<<<<<< HEAD:packages/nextjs/hooks/useActiveStakedBalance.ts
    activeStakedBalance: data ? Number(data) : 0,
=======
    activeStakedBalance: data ? Number(data) : 0, 
>>>>>>> main:hooks/useActiveStakedBalance.ts
    error,
  };
};
