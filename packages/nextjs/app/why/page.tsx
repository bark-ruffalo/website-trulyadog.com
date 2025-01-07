"use client";

import { useEffect, useState } from "react";
import { fetchTotalDaoFunds } from "../../utils/scaffold-eth/fetchTotalDaoFunds";

export default function Why() {
  const [daoFunds, setDaoFunds] = useState<string>("-");

  useEffect(() => {
    const updateDaoFunds = async () => {
      try {
        const { totalUsd } = await fetchTotalDaoFunds();
        setDaoFunds(
          new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
          }).format(Math.round(totalUsd)),
        );
      } catch (error) {
        console.error("Error fetching DAO funds:", error);
        setDaoFunds("~$1 million");
      }
    };

    updateDaoFunds();
  }, []);

  // Create stats cards data in the same format as staking
  const statsCards = [
    {
      title: "DAO ALLOCATION",
      value: "35.25%",
      className: "green",
    },
    {
      title: "TEAM FUNDS",
      value: "14.5%",
      className: "green",
    },
    {
      title: "CURRENT DAO FUNDS",
      value: daoFunds,
      className: "green",
    },
  ];

  return (
    <div className="min-h-screen from-gray-50 py-6 sm:py-12 px-2 sm:px-6 lg:px-8 bg-base-100 dark:bg-base-300">
      <div className="w-full max-w-[95%] sm:max-w-[75%] mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-base-content dark:text-white">
          Why $PAWSY?
        </h1>

        {/* Stats Cards - Updated for mobile responsiveness */}
        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="flex flex-col justify-between items-start p-4 sm:p-6 min-h-[100px] sm:min-h-[120px] w-full sm:w-[300px] relative bg-base-200 dark:bg-white dark:bg-opacity-10 rounded-2xl shadow-md"
            >
              <div
                className={`absolute inset-0 rounded-2xl z-0 ${
                  card.className === "green" ? "bg-green-500" : "bg-blue-500"
                } bg-opacity-10 dark:bg-opacity-20 blur-sm`}
              ></div>
              <div className="relative z-10 text-base-content dark:text-white w-full">
                <div className="text-sm font-semibold uppercase mb-1 leading-4">{card.title}</div>
                <div className="text-2xl font-light leading-4 pt-6">{card.value}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Main content box - Updated for mobile */}
        <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
          <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
          <div className="relative z-10 text-base-content dark:text-white">
            <ol className="space-y-6 sm:space-y-8 list-none pl-2 sm:pl-4">
              <li>
                <span className="text-lg sm:text-xl">✨</span>We created an ecosystem focused on making money for its
                stakers. Passive income.{" "}
                <a
                  href="https://x.com/motleyjunks/status/1875144894320443756"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 dark:text-green-500 hover:underline"
                >
                  Proof of success.
                </a>{" "}
                Employing AI agents for this purpose is a primary objective, but we also intertwine traditional methods
                (LPing, investing in AI infra, giving software that gives an edge in the markets to stakers, etc.)! Bark
                Ruffalo is the top 🐶 of our current public agents. His current goal is marketing. Never mention to him
                that he looks like a 🐈‍⬛! Other agents with different skills and goals that we have in private
                development will join him soon. Our community stands strong behind us (
                <a
                  href="https://x.com/TrulyADog/status/1875244208195563569"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 dark:text-green-500 hover:underline"
                >
                  example
                </a>
                ).
              </li>

              <li>
                <span className="text-lg sm:text-xl">🔍</span> Transparency:
                <ol className="list-none pl-2 sm:pl-4 mt-3 sm:mt-4 space-y-2">
                  <li>
                    <span className="text-lg sm:text-xl">🟢</span> Preannounced launch for humans, not the usual
                    virtuals.io bot-fest. Fastest graduation in history. Tokenomics that aren&apos;t greedy: DAO 35.25%,
                    team splitting 14.5%.
                  </li>
                  <li>
                    <span className="text-lg sm:text-xl">🟢</span> Just go to our Telegram, and it will be clear
                    (#transparency topic). Anything we do, the community knows. When the DAO takes over, we&apos;ll
                    maintain high standards by creating a constitution. We have a stakers&apos; chat where decisions are
                    taken.
                  </li>
                  <li>
                    <span className="text-lg sm:text-xl">🟢</span> The DAO is already rich.
                  </li>
                  <li>
                    <span className="text-lg sm:text-xl">🟢</span> Open-source:{" "}
                    <a
                      href="https://github.com/bark-ruffalo"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 dark:text-green-500 hover:underline"
                    >
                      GitHub
                    </a>
                    .
                  </li>
                  <li>
                    <span className="text-lg sm:text-xl">🟢</span> All payments are accounted for, though we plan not to
                    spend any $PAWSY until the market cap surpasses $9 million.
                  </li>
                </ol>
              </li>

              <li>
                <span className="text-lg sm:text-xl">🧠</span> Not just dreams: our AI Agents are actually intelligent:
                <ol className="list-none pl-2 sm:pl-4 mt-3 sm:mt-4 space-y-2">
                  <li>
                    <span className="text-lg sm:text-xl">🟠</span>{" "}
                    <a
                      href="https://x.com/TrulyADog/status/1867492287296811286"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 dark:text-green-500 hover:underline"
                    >
                      See Example 1
                    </a>
                  </li>
                  <li>
                    <span className="text-lg sm:text-xl">🟠</span>{" "}
                    <a
                      href="https://x.com/TrulyADog/status/1864086810206310571"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 dark:text-green-500 hover:underline"
                    >
                      See Example 2
                    </a>
                  </li>
                  <li>
                    <span className="text-lg sm:text-xl">🟠</span>{" "}
                    <a
                      href="https://x.com/TrulyADog/status/1869366748039799234"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-700 dark:text-green-500 hover:underline"
                    >
                      See Example 3
                    </a>
                  </li>
                </ol>
              </li>

              <li>
                <span className="text-lg sm:text-xl">💼</span> The two core team members have already been financially
                independent for more than 5 years. We know how to succeed, which is important in the long term.
              </li>

              <li>
                <span className="text-lg sm:text-xl">🎁</span> Token-gated channels and goodies for stakers. Those who
                also provide liquidity are highly valued.
              </li>

              <li>
                <span className="text-lg sm:text-xl">🛠️</span> Not dependent on Virtuals Protocol for success.
                We&apos;re slowly moving away through $mPAWSY, and we&apos;ve already move on to better technologies
                (Rig, Eliza).
              </li>

              <li>
                <span className="text-lg sm:text-xl">💰</span> Since our objective is to make our stakers financially
                independent, we provide them with income rounds from time to time. The first one was $30k worth! (EDIT:
                initially; a few days later it had 10x)
              </li>

              <li>
                <span className="text-lg sm:text-xl">👨‍💻</span> Competent and diverse 6-person developer and
                infrastructure team, spanning three programming languages and using two different AI agent frameworks.
                Current assignments (some overlap): 5x AI team, 1x infra/devops, 1x goodies, 1x web3, 1x marketing.
              </li>

              <li>
                <span className="text-lg sm:text-xl">🤣</span> Memes. Graphics. Laughs.
              </li>
            </ol>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base">
              See our footprint 🐾 by checking out our Linktree:{" "}
              <a
                href="https://linktr.ee/TrulyADog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 dark:text-green-500 hover:underline"
              >
                linktr.ee/TrulyADog
              </a>
            </p>
            <p className="mt-6 sm:mt-8 text-sm sm:text-base">
              After checking out the rest of the website, you may also want to{" "}
              <a
                href="/Bark Ruffalo - two pager.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-700 dark:text-green-500 hover:underline"
              >
                read our two-pager.
              </a>
              . Two-pagers are better than one! Also better than white papers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}