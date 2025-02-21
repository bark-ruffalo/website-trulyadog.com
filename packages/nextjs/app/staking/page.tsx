"use client";

import Image from "next/image";
import { Portfolio } from "./_components/Portfolio";
import { Purchase } from "./_components/Purchase";
import { Statistics } from "./_components/Statistics";
import type { NextPage } from "next";

const Staking: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
          <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
            <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
              <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
                Stake and become part of the community!
              </h1>

              <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl flex flex-col h-full relative">
                <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10 text-base-content dark:text-white">
                  <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
                    <p>
                      The primary purpose of staking PAWSY, mPAWSY (migrated PAWSY) or the LP token is to receive income
                      rounds and increase the probability of capital gain (more tokens locked = less selling pressure).
                      Income rounds are not preannounced; we simply take a snapshot of the stakers and start sending.
                      Our first income distribution was on 2024-12-23 and amounted to more than double the staked amount
                      in dollar terms. The second one started on February 13, 2025 and it will last up to 10 days,
                      therefore staking will always be the better option. More about how it works in{" "}
                      <a
                        href="https://x.com/TrulyADog/status/1877740433284935863"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        this tweet
                      </a>
                      . Future distributions may differ in size; investors shouldn&apos;t assume 100%+ yields happening
                      every time. We plan to do multiple rounds a year; amounts can vary.
                    </p>
                    <details className="mt-4">
                      <summary className="cursor-pointer font-semibold text-sm sm:text-base">
                        But there&apos;s more! These are the current ADDITIONAL rewards, depending on the amount staked:
                      </summary>
                      <div className="mt-2 space-y-3 sm:space-y-4">
                        <ul className="space-y-2 list-disc pl-4">
                          <li>
                            5k or more: access to the 5k-club token-gated channel with polls that guide the future of
                            the ecosystem + third in line for alerts from EWS + first in line for alerts from PoC and
                            other partners of ours.
                          </li>
                          <li>
                            500k or more: access to the above + goodies (like a sniper that purchases newly launched
                            prototypes that pass certain quality checks on Virtuals Protocol) + access to the{" "}
                            <a
                              href="https://www.proof-of-chad.fun"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                            >
                              PoC terminal
                            </a>{" "}
                            + second in line for alerts from EWS + filter for the alpha alerts from partners to only
                            show the best ones
                          </li>
                          <li>
                            5M or more: access to the above + more (like priority when getting alpha drops, and even
                            exclusive alpha that even EWS won&apos;t provide and it won&apos;t be dripped down to the
                            other tiers)
                          </li>
                        </ul>
                        <p>
                          One last thing: the more you stake and the longer the lock period, the more DRUGS you receive.
                          DRUGS is a reward token with no dollar value that helps Bark Ruffalo track entities most
                          involved financially in its ecosystem. It will receive various utilities, with the first being
                          that you can burn it to get NFTs from the OG collection.
                        </p>
                      </div>
                    </details>
                    <details className="mt-4">
                      <summary className="cursor-pointer font-semibold text-sm sm:text-base">
                        MORE INFO + HOW TO GET ACCESS TO THE GOODIES!
                      </summary>
                      <div className="mt-2 space-y-3 sm:space-y-4">
                        <p>
                          It is recommended that you migrate first as well. Then open{" "}
                          <a
                            href="https://guild.xyz/bark-ruffalo/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                          >
                            https://guild.xyz/bark-ruffalo/
                          </a>
                          , and if you&apos;ve staked let&apos;s say 6,500, you select the 5,000 staked club. It should
                          show &quot;You have access&quot;, and you may click on the big blue connect button. You might
                          need to enable popups.
                        </p>
                        <p>
                          Someone from the 500k club should connect to both clubs. And someone from the 5 million club
                          should connect to all three clubs. Connect to them in order, from the lowest to the highest.
                        </p>
                        <p>
                          Access for the virtuals.io sniper has been added as of 2024.12.17 for the 500k club. Access to
                          a more advanced sniper has been added for the 5M club as of 2024.12.27. Go ahead and stake!
                          There are enough reasons to do it on the &quot;Why $PAWSY?&quot; page.
                        </p>
                        <p>
                          Screenshots with the first version of the sniper and the private repository: <br />
                          EDIT: Note that the current version has A LOT more filters. How do we get good ideas for
                          filters? A secret is checking out what the{" "}
                          <a
                            href="https://x.com/proof_of_chad"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                          >
                            Proof-of-Chad team
                          </a>{" "}
                          has been up to! 🤫
                          <br />
                          <Image
                            src="/Snipy McSnappingson v1.0.png"
                            alt="Sniper screenshot 1"
                            width={800}
                            height={450}
                            className="mt-4 rounded-lg w-full sm:w-auto"
                          />
                          <Image
                            src="/Snipy McSnappingson v1.0 - repo.png"
                            alt="Sniper screenshot 2"
                            width={800}
                            height={450}
                            className="mt-4 rounded-lg w-full sm:w-auto"
                          />
                        </p>
                      </div>
                    </details>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-center items-center mt-8 gap-6 sm:gap-12 flex-col">
            <Statistics />
            <Purchase />
            <Portfolio />
          </div>
        </div>
      </div>
    </>
  );
};

export default Staking;
