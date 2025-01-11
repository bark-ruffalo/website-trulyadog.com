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
                      The primary purpose of staking is to participate in our income rounds. We do not preannounce them;
                      we just take a snapshot of the stakers and start sending. The current annualized APY for those who
                      participated in round 1 is 102.93%. More about how it works in{" "}
                      <a
                        href="https://x.com/TrulyADog/status/1877740433284935863"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                      >
                        this tweet
                      </a>
                      .
                    </p>
                    <p>
                      But there&apos;s more! DRUGS is a reward token with no dollar value that helps Bark Ruffalo track
                      entities most involved financially in its ecosystem. These are the current rewards for those who
                      obtained DRUGS, depending on the amount staked:
                    </p>
                    <ul className="space-y-2 list-disc pl-4">
                      <li>
                        5k or more: access to the 5k-club token-gated channel with polls that guide the future of the
                        ecosystem
                      </li>
                      <li>
                        500k or more: access to the above + goodies (like a sniper that purchases newly launched
                        prototypes that pass certain quality checks on Virtuals Protocol)
                      </li>
                      <li>5M or more: access to the above + more (like priority when getting alpha drops)</li>
                    </ul>
                    <p>
                      DRUGS itself will receive various utilities, with the first being that you&apos;re currently able
                      to burn it to get NFTs from the OG collection.
                    </p>
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
