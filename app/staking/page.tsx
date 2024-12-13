"use client";

import { Portfolio } from "./_components/Portfolio";
import { Purchase } from "./_components/Purchase";
import { Statistics } from "./_components/Statistics";
import type { NextPage } from "next";

const Staking: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-8 py-12">
          <div className="flex w-full justify-center items-center gap-12 flex-col sm:flex-row mb-10">
            <div className="w-full max-w-[75%] relative">
              <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl flex flex-col h-full relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10 text-base-content dark:text-white">
                  <div className="space-y-4">
                    <p>
                      $rPAWSY is a reward token with no dollar value that helps Bark Ruffalo track entities most
                      involved financially in its ecosystem. These are the current rewards for those who obtained
                      $rPAWSY, depending on the amount staked:
                    </p>
                    <div className="space-y-2">
                      <p>• 5k or more: access to the 5k-club token-gated channel and goodies</p>
                      <p>• 500k or more: access to the above + more</p>
                    </div>
                    <p>
                      $rPAWSY itself will receive various utilities, with the first being that you'll soon be allowed to
                      burn it to get NFTs from the OG collection.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center gap-12 flex-col sm:flex-row">
            <Statistics />
          </div>
          <div className="flex w-full justify-center items-center gap-12 flex-col sm:flex-row mt-10">
            <Purchase />
          </div>
          <div className="flex w-full justify-center items-center gap-12 flex-col sm:flex-row mt-10">
            <Portfolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default Staking;
