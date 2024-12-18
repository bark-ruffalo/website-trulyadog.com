"use client";

import { useState } from "react";
import type { NextPage } from "next";

const Collaborate: NextPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const accordionItems = [
    {
      title: "We can help your AI agent launch!",
      content: `If you have a serious project you want to launch on app.virtuals.io/prototypes or another AI Agent launchpad, we can help! First, contact nebu_human on Telegram and explain what you're doing. Then, if it makes sense (i.e., team funds shouldn't be more than 20%), you will pay 1 $ETH to our DAO address and plan the launch with us. You'll give us the deployer address so our 500k and 5M clubs whitelist it and participate in the bonding curve auction. These are not paper hands. Only those who agree to a minimum 1-week hold will get the deployer address information. Even more, some of us will add to the Uniswap liquidity pool. This way, instead of bots pumping and dumping your token, which happens right now in all auctions, you'll have some informed humans behind your project. We'll also promote you on our Telegram and X accounts.`,
    },
    {
      title: "You can copy or build upon our open-source code!",
      content: `On GitHub, we've open-sourced both our contracts and the UI. Any other crypto or AI Agent Project may use them; we just ask to consider airdropping our DAO address or our $PAWSY holders. We'll help you get started if you need help with the code. Current contracts (you'll definitely need the 1st and the 4th if you're launching through Virtuals Protocol):
      
1. Staking vault: Stake and lock $PAWSY for various periods.
2. Reward token: Only mintable by the staking vault; tracks user ecosystem contributions.
3. Rewards market: Enables devs/DAO to create campaigns for token exchanges (e.g., reward tokens for NFTs).
4. Token Migration: Facilitates migration from $PAWSY to $mPAWSY, a new token with enhanced features.`,
    },
  ];

  return (
    <div className="flex items-center flex-col flex-grow pt-10">
      <div className="px-5 w-full max-w-[75%]">
        <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
          <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
          <div className="relative z-10">
            <h1 className="text-4xl font-bold text-center mb-8 text-base-content dark:text-white">Collaborate</h1>
            <div className="space-y-4">
              {accordionItems.map((item, index) => (
                <div key={index} className="collapse collapse-arrow bg-base-100 dark:bg-opacity-20">
                  <input
                    type="radio"
                    name="accordion"
                    checked={openAccordion === item.title}
                    onChange={() => toggleAccordion(item.title)}
                  />
                  <div className="collapse-title text-xl font-medium">{item.title}</div>
                  <div className="collapse-content">
                    <p className="whitespace-pre-line">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
