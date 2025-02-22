"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { Card, CardContent, CardTitle } from "~~/components/ui/card";

const Roadmap: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow w-full px-2 sm:px-8 py-6 sm:py-12 bg-background">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative  [&_a]:text-green-800 [&_a]:underline [&_a:hover]:text-green-800/70">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8">
              Bark Ruffalo Ecosystem: The Path to Multi-Agentic Dominance
            </h1>

            <div className="space-y-8">
              <Card>
                <CardContent className="p-4 sm:p-8 relative">
                  <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
                  <div className="relative z-10">
                    <CardTitle className="text-2xl sm:text-3xl font-bold mb-4">
                      🏆 Already Fetched (Achievements)
                    </CardTitle>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li>✅ Fastest graduation in virtuals.io history with high initial liquidity to deter bots</li>
                      <li>✅ Deployed fair tokenomics: 35.25% DAO, 14.5% team</li>
                      <li>✅ The DAO and operational funds have been getting income since day 1 through LPing</li>
                      <li>✅ Established presence across Twitter, Telegram, Bluesky, Mastodon and Farcaster</li>
                      <li>✅ Enabled token-gated benefits system for stakers through Guild.xyz</li>
                      <li>
                        ✅ Launched{" "}
                        <a
                          href="https://opensea.io/collection/bark-ruffalo/overview"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          OG NFT collection
                        </a>{" "}
                        for the most loyal stakers and supporters on social media
                      </li>
                      <li>
                        ✅ Started collaboration programs that should bring future income (see{" "}
                        <Link href="/collaborate">Collaborate</Link>)
                      </li>
                      <li>
                        ✅ Launched migration to $mPAWSY to reduce dependency on Virtuals Protocol and eliminate their
                        1% trade and liquidity add/remove fees
                      </li>
                      <li>✅ Established staking system with reward tracking token</li>
                      <li>✅ Launched website with staking and migration functionality</li>
                      <li>✅ Open-sourced all contracts and website for crypto community use</li>
                      <li>✅ Released advanced app.virtuals.io/prototypes sniper tool for 500k+ and 5M clubs</li>
                      <li>✅ Created multi-agentic AI ecosystem with three instances using various technologies</li>
                    </ul>
                    <p className="text-sm sm:text-base mt-4">
                      All of this has happened in 25 days (up to and including December 18, 2024).
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Building the Pack Section */}
              <Card>
                <CardContent className="p-4 sm:p-8 relative">
                  <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
                  <div className="relative z-10">
                    <CardTitle className="text-2xl sm:text-3xl font-bold mb-4">
                      Building the Pack (Current) 🌱
                    </CardTitle>
                    <p className="text-sm sm:text-base mb-4">
                      Please, first read this{" "}
                      <a
                        href="https://x.com/TrulyADog/status/1875102445744889913"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/90 underline"
                      >
                        Twitter post
                      </a>
                      . It contains our short-term objectives. We don&apos;t update these lists with everything that we
                      do; if you want that level of detail,{" "}
                      <a
                        href="https://t.me/cadogai"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/90 underline"
                      >
                        join our public Telegram group
                      </a>
                      .
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li>
                        ✅ Enabled the rewards market (the contract was already live, but we have also created{" "}
                        <Link href="/rewards" target="_blank">
                          the web page
                        </Link>
                        )
                      </li>
                      <li>
                        ✅ (done spontaneously; not planned) Bark Ruffalo has invested a small amount in{" "}
                        <a
                          href="https://x.com/TrulyADog/status/1870243832878559647"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          another AI agent
                        </a>
                      </li>
                      <li>
                        ✅ Distributed our first income round to stakers ($30k worth initially, 10x in a few days!) (
                        <a
                          href="https://x.com/TrulyADog/status/1871317844018839980"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          proof
                        </a>
                        )
                      </li>
                      <li>
                        ✅ Created even more open-source content: scripts to plan, normalize, and execute income
                        distribution for stakers (scripts/ folder from contracts repo)
                      </li>
                      <li>
                        ✅ Created good marketing audio content (
                        <a
                          href="https://www.instagram.com/p/DELpw6_s2BO/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          example 1
                        </a>
                        ,{" "}
                        <a
                          href="https://x.com/TrulyADog/status/1872615920243228987"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          example 2
                        </a>
                        )
                      </li>
                      <li>
                        ✅ Created{" "}
                        <a
                          href="https://chatgpt.com/g/g-6771043e673c8191882aa08fb3c90cf9-bark-ruffalo-creator-of-image-generation-prompts"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          prompt generator
                        </a>{" "}
                        (GPT) for AI image generation with Bark Ruffalo
                      </li>
                      <li>✅ Hired more developers accross multiple programming languages</li>
                      <li>
                        ✅ Created{" "}
                        <a
                          href="https://bazar.trulyadog.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          Bark Ruffalo&apos;s bazar
                        </a>
                        . Income from there goes to devs.
                      </li>
                      <li>
                        ✅ Established presence across Instagram and TikTok (though we have no plan to focus on this in
                        the short-term)
                      </li>
                      <li>
                        ✅ Created a private API that can deliver econ & crypto data (other types on demand), perfectly
                        formated and delivered to AI agents in such a way to minimze token usage
                      </li>
                      <li>
                        ✅ We launched Early Warning System (
                        <a
                          href="http://twitter.com/BR_EWS"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          @BR_EWS
                        </a>
                        ). It attempts to find out about high-potential meme coin launches as soon as possible and then
                        announces it to the public in a staggered manner: 5M/500k/5k clubs (5min gaps), public (+20min).
                        It can also snipe the token for the DAO, using its hot wallet on Solana.
                      </li>
                      <li>
                        ✅ We partnered with{" "}
                        <a
                          href="https://app.virtuals.io/prototypes/0x5066d3df51FE1546b110918bf9f578baB92979c2"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          AI agents for marketing
                        </a>
                        ,{" "}
                        <a
                          href="https://app.virtuals.io/virtuals/13983"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          Proof-of-Chad
                        </a>{" "}
                        and{" "}
                        <a
                          href="https://app.virtuals.io/virtuals/20286"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/90 underline"
                        >
                          Quantego
                        </a>
                        . Read in the staking page what are some of the benefits that stakers get out of it.
                      </li>
                      <li>✅ Distributed two more income rounds to stakers.</li>

                      <li>
                        📩{" "}
                        <b>
                          Some of the following have already been completed, but we simply don&apos;t have time to
                          update this page every day. We advance fast. Other objectives that we work on might not be
                          added.
                        </b>{" "}
                        ⬇️
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Add multiple new high-utility AI agents to the Bark
                        Ruffalo ecosystem
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Keep expanding the team with top talent
                      </li>
                      <li>
                        🎯 <i className="text-sm">(constantly doing it)</i> Improve the ability of the DAO to generate
                        income both passively and actively
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Expand AI agent capabilities across social platforms
                      </li>
                      <li>🎯 Optimize AI agents&apos; uptime and resilience to hacks or social media bans</li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Perfect infrastructure and DevOps for AI agent
                        deployment and maintenance
                      </li>
                      <li>🎯 Improve multi-agentic interactions</li>
                      <li>
                        🎯 Establish partnerships with other crypto/AI projects, especially those in which we provide a
                        service for a token allocation or ETH/USDC payments to the DAO or stakers
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Create data provider for information on stocks,
                        ETFs, crypto (maybe other AI agents will rent it, thereby gaining us another source of income)
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Create generalizable data provider that has various
                        sources/methods for getting information and various destinations, including non-RAG for more
                        data accuracy
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Add ability for AI agents to inherit abilities and
                        knowledge from each other
                      </li>
                      <li>🎯 Enhance token-gated benefits (5M club and 5k club both getting something)</li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Deploy ETH/mPAWSY liquidity pool on Base / Aerodrome
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Deploy VIRTUAL/mPAWSY liquidity pool on Base /
                        Uniswap v3
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Deploy arbitrage bot between the pools that the DAO
                        participates in
                      </li>
                      <li>
                        🎯 <i className="text-sm">(constantly doing it)</i> Continue to distribute rewards manually
                      </li>
                      <li>
                        🎯 <i className="text-sm">(in progress)</i> Scale marketing efforts through AI-driven strategies
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              {/* Phase 2 Section Removed */}

              {/* Phase 3 Section Removed */}

              {/* Important Notes Section Removed */}
              {/* Core Principles Section Removed */}
              {/* Remember Section Removed */}

              {/* Future Plans Section */}
              <Card>
                <CardContent className="p-4 sm:p-8 relative">
                  <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
                  <div className="relative z-10">
                    <CardTitle className="text-2xl sm:text-3xl font-bold mb-4">Future Plans 🔮</CardTitle>
                    <p className="text-sm sm:text-base mb-4">
                      We don&apos;t want to reveal too much about our future plans. We prefer to under-promise and
                      over-deliver. But here are some hints:
                    </p>
                    <ul className="space-y-2 text-sm sm:text-base">
                      <li>
                        🎯 Expand the ecosystem with more AI agents, each with their own unique capabilities and
                        objectives
                      </li>
                      <li>
                        🎯 Develop and release more tools and utilities for the crypto community, with special benefits
                        for stakers
                      </li>
                      <li>
                        🎯 Continue to grow and strengthen our presence across various social media platforms and
                        communities
                      </li>
                      <li>
                        🎯 Further develop our infrastructure to support more sophisticated AI operations and data
                        analysis
                      </li>
                      <li>
                        🎯 Explore new opportunities for generating income and value for our stakers and the broader
                        ecosystem
                      </li>
                    </ul>
                    <p className="text-base-content dark:text-white text-sm sm:text-base mt-6">
                      <a
                        href="https://x.com/TrulyADog/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/90 underline"
                      >
                        Follow us on X
                      </a>
                      .
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
