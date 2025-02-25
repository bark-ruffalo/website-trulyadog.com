"use client";

import Image from "next/image";
import { Portfolio } from "./_components/Portfolio";
import { Purchase } from "./_components/Purchase";
import { Statistics } from "./_components/Statistics";
import type { NextPage } from "next";
import { Card, CardContent } from "~~/components/ui/card";

const Staking: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
          <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
            <div className="w-full max-w-[95%] sm:max-w-[75%] relative [&_a]:text-green-800 [&_a]:underline [&_a:hover]:text-green-800/70">
              <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
                Stake and become part of the community!
              </h1>

              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <CardContent className="relative z-10 space-y-3 sm:space-y-4 text-sm sm:text-base">
                  <p>
                    The primary purpose of staking is to participate in our income rounds. We have a large income round
                    on the 15th of December of each year. Our first income distribution was on 2025-12-23 and amounted
                    to more than double the staked amount in dollar terms. The following two rounds distributed more
                    than $50k. More about how it works in{" "}
                    <a
                      href="https://x.com/TrulyADog/status/1877740433284935863"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/90 underline"
                    >
                      this tweet
                    </a>
                    . Future distributions may differ in size; investors shouldn&apos;t assume 100%+ yields happening
                    every time.
                  </p>

                  <details className="mt-4">
                    <summary className="cursor-pointer font-semibold text-sm sm:text-base">
                      But there&apos;s more! These are the current ADDITIONAL rewards, depending on the amount staked:
                    </summary>
                    <div className="mt-2 space-y-3 sm:space-y-4">
                      <ul className="space-y-2 list-disc pl-4">
                        <li>
                          50k or more: access to the 50k-club token-gated group with polls that guide the future of the
                          ecosystem + third in line for alerts from EWS + first in line for alerts from PoC and our
                          other partners
                        </li>
                        <li>
                          5M or more: access to the above + 5M group + goodies (like a sniper that purchases newly
                          launched prototypes that pass certain quality checks on Virtuals Protocol) + access to the{" "}
                          <a
                            href="https://www.proof-of-chad.fun"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-primary hover:text-primary/90 underline"
                          >
                            PoC terminal
                          </a>{" "}
                          + second in line for alerts from EWS
                        </li>
                        <li>
                          50M or more: access to the above + 50M group + more (like priority when getting alpha drops,
                          and even exclusive alpha that EWS won&apos;t provide and it won&apos;t be dripped down to the
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
                          className="text-primary hover:text-primary/90 underline"
                        >
                          https://guild.xyz/bark-ruffalo/
                        </a>
                        , and if you&apos;ve staked let&apos;s say 65000, you select the 50k staked club. It should show
                        &quot;You have access&quot;, and you may click on the big blue connect button. You might need to
                        enable popups.
                      </p>
                      <p>
                        Someone from the 5M club should connect to both clubs. And someone from the 50 million club
                        should connect to all three clubs. Connect to them in order, from the lowest to the highest.
                      </p>
                      <p>
                        Access for the virtuals.io sniper has been added as of 2024.12.17 for the 5M club. Access to a
                        more advanced sniper has been added for the 50M club as of 2024.12.27. Go ahead and stake! There
                        are enough reasons to do it on the &quot;Why $PAWSY?&quot; page.
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
                </CardContent>
              </Card>
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
