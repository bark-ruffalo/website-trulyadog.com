"use client";

import type { NextPage } from "next";
import { ArrowsRightLeftIcon, WalletIcon } from "@heroicons/react/24/outline";

const ATA_TOKEN_ADDRESS = "0xb18c609796848C723eAcaDC0BE5b71Ceb2289a48";

const SwapPage: NextPage = () => {
  const handleSwapClick = () => {
    const uniswapURL = `https://app.uniswap.org/swap?outputCurrency=${ATA_TOKEN_ADDRESS}&chain=base`;
    window.open(uniswapURL, "_blank");
  };

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative space-y-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-base-content dark:text-white">Get ATA</h1>
              <p className="text-xl sm:text-2xl text-base-content/80 dark:text-white/80 max-w-3xl mx-auto">
                Join our ecosystem by acquiring ATA tokens through our trusted partners.
              </p>
            </div>

            {/* Swap Section */}
            <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 transition-all duration-300 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10"></div>
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-base-content dark:text-white mb-2">
                    Swap on Uniswap
                  </h2>
                  <p className="text-base-content/80 dark:text-white/80 text-lg">
                    Trade ETH for ATA tokens directly through Uniswap
                  </p>
                </div>
                <button
                  onClick={handleSwapClick}
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 group-hover:scale-105"
                >
                  <ArrowsRightLeftIcon className="h-5 w-5" />
                  Swap Now
                </button>
              </div>
            </div>

            {/* Coming Soon Section */}
            <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
              <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
              <div className="relative z-10 text-center">
                <div className="bg-blue-500/10 dark:bg-blue-400/10 inline-block px-4 py-1 rounded-full text-sm font-semibold text-blue-600 dark:text-blue-400 mb-4">
                  Coming Soon
                </div>
                <div className="flex flex-col items-center justify-center gap-4">
                  <WalletIcon className="h-12 w-12 text-base-content/60 dark:text-white/60" />
                  <h2 className="text-2xl font-bold text-base-content dark:text-white">Direct Swap</h2>
                  <p className="text-base-content/80 dark:text-white/80 max-w-md">
                    Soon you'll be able to swap for ATA tokens directly through our website from your connected wallet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SwapPage;
