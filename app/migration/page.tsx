"use client";

import { Migrate } from "./_components/Migrate";
import type { NextPage } from "next";
import { formatEther } from "viem";
import { useScaffoldReadContract } from "~~/hooks/scaffold-eth";

const Migration: NextPage = () => {
  const { data: totalSupply } = useScaffoldReadContract({
    contractName: "$mPAWSY",
    functionName: "totalSupply",
  }) as { data: bigint };

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
            <div className="flex justify-center items-center gap-4 mb-6 sm:mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold text-center text-base-content dark:text-white">
                Migrate to $mPAWSY!
              </h1>
              <span className="text-xl sm:text-2xl font-semibold text-base-content/70 dark:text-white/70">
                Total Supply: {totalSupply ? Number(formatEther(totalSupply)).toFixed(2) : "Loading..."}
              </span>
            </div>

            <Migrate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migration;
