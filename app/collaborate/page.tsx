"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Collaborate: NextPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const accordionItems = [
    {
      title: "We invest in early-stage AI agents and crypto projects!",
      content:
        `To pitch Bark Ruffalo's DAO, use the form linked ` +
        `<a href="https://linktr.ee/TrulyADog" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline">here</a>` +
        `. If what you have there makes sense, we'll invest in your project ourselves and additionally with the Bark Ruffalo DAO. Plus, we'll promote you repeatedly on its socials. Our team has more money in their bank accounts than Sekoia has market cap. At some point in the future, we'll set up an AI agent to ask for and process this data, maybe even invest automatically. For now, we've done the minimum to get this process going.`,
    },
    {
      title: "We can help your AI agent launch!",
      content:
        `If you have a serious project you want to launch on ` +
        `<a href="https://app.virtuals.io/prototypes" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline">app.virtuals.io/prototypes</a>` +
        ` or another AI Agent launchpad, we can help! First, contact ` +
        `<a href="https://t.me/nebu_human" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline">@nebu_human</a>` +
        ` on Telegram and explain what you're doing. Then, if it makes sense (i.e., team funds shouldn't be more than 20%), you will pay 1 $ETH to our DAO address and plan the launch with us. You'll give us the deployer address so our 500k and 5M clubs whitelist it and participate in the bonding curve auction. These are not paper hands. Only those who agree to a minimum 1-week hold will get the deployer address information. Even more, some of us will add to the Uniswap liquidity pool. This way, instead of bots pumping and dumping your token, which happens right now in all auctions, you'll have some informed humans behind your project. We'll also promote you on our Telegram and X accounts.`,
    },
    {
      title: "You can copy or build upon our open-source code!",
      content:
        `<a href="https://github.com/bark-ruffalo" target="_blank" rel="noopener noreferrer" class="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline">On GitHub</a>` +
        `, we've open-sourced both our contracts, our scripts, and the UI. Any other crypto or AI Agent Project may use them; we just ask you to consider airdropping our DAO address or our stakers. We'll help you get started if you need help with the code. Current contracts (you'll definitely need the 1st and the 4th if you're launching through Virtuals Protocol):
        
1. Staking vault: Stake and lock $PAWSY for various periods.
2. Reward token: Only mintable by the staking vault; tracks user ecosystem contributions.
3. Rewards market: Enables devs/DAO to create campaigns for token exchanges (e.g., reward tokens for NFTs).
4. Token Migration: Facilitates migration from $PAWSY to $mPAWSY, a new token with enhanced features.`,
    },
    {
      title: "Join our team!",
      content: `We are looking for:

• Anyone who can help us with marketing and is confident enough in their skills that he is willing to invest apriori into $PAWSY.

• Programmers that care about AI agents or the EVM. We're doing interesting things; for example, we're now working on a provider to fetch prices IRL for stocks, ETFs, crypto + economic indices and events + summary info about crypto projects. Another example would be a meme generator involving Bark Ruffalo. On the EVM side, we're looking to automate a lot of rewards and income that the stakers will receive.

• A moderator for our soon-to-be-launched Discord server.

• People who understand how LLMs, datasets, embeddings, Eliza, etc., work to help us add more AI Agents into the Bark Ruffalo ecosystem.

• People with a good understanding of scaling and hardening AI agents against hacks, uptime loss, etc.

• Someone who can help us create a 3D model of Bark Ruffalo that we can use on Virtuals Protocol or TikTok to live stream.

• Designers, meme creators, artists.

• Anyone else who thinks they have something good to contribute to the ecosystem. We always prefer to work with people with something at stake; therefore, please consider first buying $PAWSY, then migrating, then staking. This also acts as a filter for us to understand that you're serious about participating. We're currently inundated with requests from marketers, fake influencers, etc., through Telegram and X.`,
    },
  ];

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
              Collaborate
            </h1>

            <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative w-full">
              <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
              <div className="relative z-10 w-full">
                <div className="space-y-4 w-full">
                  {accordionItems.map((item, index) => (
                    <div
                      key={index}
                      className={`
                        border-2 border-blue-500 dark:border-blue-400 rounded-xl overflow-hidden
                        transition-all duration-200 ease-in-out
                        hover:border-blue-600 dark:hover:border-blue-300
                        ${openAccordion === item.title ? "bg-blue-500 bg-opacity-5 dark:bg-opacity-10" : "bg-base-100 dark:bg-opacity-20"}
                      `}
                    >
                      <button
                        onClick={() => toggleAccordion(item.title)}
                        className="w-full px-6 py-4 flex justify-between items-center cursor-pointer group"
                      >
                        <h3 className="text-xl font-semibold text-base-content dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h3>
                        <ChevronDownIcon
                          className={`h-6 w-6 text-blue-500 dark:text-blue-400 transition-transform duration-200
                            ${openAccordion === item.title ? "rotate-180" : "rotate-0"}
                          `}
                        />
                      </button>
                      <div
                        className={`px-6 overflow-hidden transition-all duration-200 ease-in-out
                          ${openAccordion === item.title ? "max-h-[1000px] pb-6" : "max-h-0"}
                        `}
                      >
                        <p
                          className="text-base-content dark:text-white whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
