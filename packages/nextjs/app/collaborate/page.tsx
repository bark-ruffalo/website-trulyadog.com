"use client";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../../components/ui/accordion";
import type { NextPage } from "next";

const Collaborate: NextPage = () => {
  const accordionItems = [
    {
      title: "We can build or improve your own AI agents",
      content:
        "We have a team of 6 elite developers working with Rust or Typescript AI Agents (Rig, Eliza). We can help you by building the modules you need, or you can even pay us to create full AI agents with all the functionality you want, host them, and maintain their code. Prices start from 5 ETH per agent.",
    },
    {
      title: "We invest in early-stage AI agents and crypto projects!",
      content:
        `To pitch Bark Ruffalo's DAO, use the form linked ` +
        `<a href="https://linktr.ee/TrulyADog" target="_blank" rel="noopener noreferrer">here</a>` +
        `. If what you have there makes sense, we'll invest in your project ourselves and additionally with the Bark Ruffalo DAO. Plus, we'll promote you repeatedly on its socials. Our team has more money in their bank accounts than Sekoia has market cap. At some point in the future, we'll set up an AI agent to ask for and process this data, maybe even invest automatically. For now, we've done the minimum to get the process going.`,
    },
    {
      title: "We can help your AI agent launch!",
      content:
        `If you have a serious project you want to launch on ` +
        `<a href="https://app.virtuals.io/prototypes" target="_blank" rel="noopener noreferrer">app.virtuals.io/prototypes</a>` +
        ` or another AI Agent launchpad, we can help! First, contact ` +
        `<a href="https://t.me/nebu_human" target="_blank" rel="noopener noreferrer">@nebu_human</a>` +
        ` on Telegram and explain what you're doing. Then, if it makes sense (i.e., team funds shouldn't be more than 20%), you will pay 1 $ETH to our DAO address and plan the launch with us. You'll give us the deployer address so our 500k and 5M clubs whitelist it and participate in the bonding curve auction. These are not paper hands. Only those who agree to a minimum 1-week hold will get the deployer address information. Even more, some of us will add to the Uniswap liquidity pool. This way, instead of bots pumping and dumping your token, which happens right now in all auctions, you'll have some informed humans behind your project. We'll also promote you on our social media accounts and groups.`,
    },
    {
      title: "You can copy or build upon our open-source code!",
      content:
        `<a href="https://github.com/bark-ruffalo" target="_blank" rel="noopener noreferrer">On GitHub</a>` +
        `, we've open-sourced our <b>contracts, our scripts, and the UI (website)</b>. Any other crypto or AI agent project may use them; we just ask you to <mark>consider airdropping</mark> our DAO address (0xc638FB83d2bad5dD73d4C7c7deC0445d46a0716F) or our stakers (we can provide a list of addresses, or you can use getLockedUsersByPool() on <a href="https://basescan.org/address/0xA6FaCD417faf801107bF19F4a24062Ff15AE9C61#readContract" target="_blank" rel="noopener noreferrer">our staking contract</a>). We'll help you get started if you need help with the code. Current contracts (you'll definitely need the 1st and the 4th if you're launching through Virtuals Protocol):

1. Staking vault: Stake and lock $PAWSY for various periods.
2. Reward token: Only mintable by the staking vault; tracks user ecosystem contributions.
3. Rewards market: Enables devs/DAO to create campaigns for token exchanges (e.g., reward tokens for NFTs).
4. Token Migration: Facilitates migration from $PAWSY to $mPAWSY, a new token with enhanced features.`,
    },
    {
      title: "Join our team!",
      content: `We are looking for:

• Anyone who can help us with marketing and is confident enough in their skills that he is willing to invest apriori into $PAWSY.

• Top programmers that care about AI agents, MEV, the EVM or the SVM.

• A moderator for our soon-to-be-launched Discord server.

• People who understand how LLMs, datasets, embeddings, Eliza, Rig, etc., work to help us add more AI Agents into the Bark Ruffalo ecosystem.

• People with a good understanding of scaling and hardening AI agents against hacks, uptime loss, etc.

• Someone who can help us create a 3D model of Bark Ruffalo that we can use on Virtuals Protocol or TikTok to live stream.

• Designers, meme creators, artists.

• Anyone else who thinks they have something good to contribute to the ecosystem. We always prefer to work with people with something at stake; therefore, please consider first buying $PAWSY, then migrating, then staking. This also acts as a filter for us to understand that you're serious about participating. We're currently inundated with requests from marketers, fake influencers, etc., through Telegram and X.`,
    },
    {
      title: "Buy access to our knowledge API!",
      content: `We created a private API that can deliver econ & crypto data (other types on demand, with no extra fee) specifically formatted for AI agents to consume the most info with a minimum amount of tokens. We also provide a way to feed it properly when/where it's needed.

        On top of having our agents use it, we rent access to other projects, including other multi-agentic ecosystems. In the first month, setup + access 11 ETH; in the subsequent months, volume-based access at most 0.5 ETH. The first month is much more expensive than subsequent months because clients can get the ideas, run with them, and rewrite whatever code is missing. If any AI agent project wants it, let's discuss it! <a href="https://t.me/nebu_human" target="_blank" rel="noopener noreferrer">nebu_human</a> or <a href="https://t.me/BatataKawaii" target="_blank" rel="noopener noreferrer">BatataKawaii</a> on Telegram.`,
    },
  ];

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-background w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">Collaborate</h1>

            <div>
              <Accordion type="single" collapsible className="space-y-4">
                {accordionItems.map((item, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="mb-0">{item.title}</AccordionTrigger>
                    <AccordionContent className="[&_a]:text-green-800 [&_a]:underline [&_a:hover]:text-green-800/70 text-text">
                      <p dangerouslySetInnerHTML={{ __html: item.content }} className="whitespace-pre-line" />
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
