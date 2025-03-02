"use client";

import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "~~/components/ui/card";

export default function Why() {
  const [displayValue, setDisplayValue] = useState(0);
  const [error, setError] = useState(false);
  const animationRef = useRef<number>();
  const currentValueRef = useRef(0);
  const startTimeRef = useRef(0);
  const durationRef = useRef(4000);
  const pulseStartTimeRef = useRef(0);

  const updateValue = (value: number) => {
    currentValueRef.current = value;
    setDisplayValue(value);
  };

  useEffect(() => {
    startTimeRef.current = performance.now();
    pulseStartTimeRef.current = performance.now();

    const initialAnimate = (now: number) => {
      const elapsed = now - startTimeRef.current;
      const progress = Math.min(elapsed / 4000, 1);

      const easedProgress = 1 - Math.pow(1 - progress, 3);

      const initialTarget = 320000;
      const value = easedProgress * initialTarget;
      updateValue(Math.round(value));

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(initialAnimate);
      } else {
        animationRef.current = requestAnimationFrame(pulseAnimation);
      }
    };

    const pulseAnimation = () => {
      const time = performance.now() - pulseStartTimeRef.current;
      const wave1 = Math.sin(time / 800) * 2000;
      const wave2 = Math.sin(time / 1200) * 1000;
      const pulseValue = 320000 + wave1 + wave2;
      updateValue(Math.round(pulseValue));
      animationRef.current = requestAnimationFrame(pulseAnimation);
    };

    animationRef.current = requestAnimationFrame(initialAnimate);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/dao-funds");
        const data = await response.json();
        startTransitionToRealValue(data.totalUsd);
      } catch (error) {
        console.error("Error fetching DAO funds:", error);
        startTransitionToRealValue(1000000);
        setError(true);
      }
    };

    const startTransitionToRealValue = (target: number) => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);

      const startValue = currentValueRef.current;
      startTimeRef.current = performance.now();

      const difference = Math.abs(target - startValue);
      durationRef.current = Math.max(1000, Math.min(difference / 400, 4000));

      const animateToRealValue = (now: number) => {
        const elapsed = now - startTimeRef.current;
        const progress = Math.min(elapsed / durationRef.current, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 2);

        const current = startValue + (target - startValue) * easedProgress;
        updateValue(Math.round(current));

        if (progress < 1) {
          animationRef.current = requestAnimationFrame(animateToRealValue);
        }
      };

      animationRef.current = requestAnimationFrame(animateToRealValue);
    };

    fetchData();
  }, []);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

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
      value: error ? "~$1 million" : formatCurrency(displayValue),
      className: "green",
    },
  ];

  return (
    <div className="min-h-screen py-6 sm:py-12 px-2 sm:px-6 lg:px-8 bg-background">
      <div className="w-full max-w-[95%] sm:max-w-[75%] mx-auto [&_a]:text-green-800 [&_a]:underline [&_a:hover]:text-green-800/70">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Why $PAWSY?</h1>

        <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
          {statsCards.map((card, index) => (
            <Card key={index} className="w-full sm:w-[300px] relative">
              <CardContent className="p-4 sm:p-6 min-h-[100px] sm:min-h-[120px]">
                <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
                <div className="relative z-10 w-full">
                  <div className="text-sm font-semibold uppercase mb-1 leading-4">{card.title}</div>
                  <div className="text-2xl font-light leading-4 pt-6">{card.value}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="relative">
          <CardContent className="p-4 sm:p-8">
            <div className="absolute inset-0 rounded-lg z-0 bg-primary/5 blur-sm" />
            <div className="relative z-10">
              <ol className="space-y-6 sm:space-y-8 list-none pl-2 sm:pl-4">
                <li>
                  <span className="text-lg sm:text-xl">✨</span>We created an ecosystem focused on making money for its
                  stakers. Passive income.{" "}
                  <a
                    href="https://x.com/motleyjunks/status/1875144894320443756"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/90 underline"
                  >
                    Proof of success.
                  </a>{" "}
                  We also provide access to various tools, alpha and exclusive terminals (expand the &quot;But
                  there&apos;s more!&quot; section from the staking page). Employing AI agents for these purposes is a
                  primary objective, but we also intertwine traditional methods (LPing, investing in AI infra, giving
                  software that gives an edge in the markets to stakers, etc.)! Bark Ruffalo is the top 🐶 of our
                  current public agents. His current goal is marketing. Never mention to him that he looks like a 🐈‍⬛!
                  Other agents with different skills and goals that we created have already joined him, and we have more
                  in development. Our community stands strong behind us (
                  <a
                    href="https://x.com/TrulyADog/status/1875244208195563569"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/90 underline"
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
                      virtuals.io bot-fest. Fastest graduation in history. Tokenomics that aren&apos;t greedy: DAO
                      35.25%, team splitting 14.5%.
                    </li>
                    <li>
                      <span className="text-lg sm:text-xl">🟢</span> Just go to our Telegram, and it will be clear
                      (#transparency topic). Anything we do, the community knows. When the DAO takes over, we&apos;ll
                      maintain high standards by creating a constitution. We have a stakers&apos; chat where decisions
                      are taken.
                    </li>
                    <li>
                      <span className="text-lg sm:text-xl">🟢</span> The DAO is already richer and more involved than
                      all these pathetic investment DAOs popping up every day. Some of them have higher market caps even
                      though they&apos;re actually poor and not transparent in how they spend their funds.
                    </li>
                    <li>
                      <span className="text-lg sm:text-xl">🟢</span> Open-source:{" "}
                      <a
                        href="https://github.com/bark-ruffalo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/90 underline"
                      >
                        GitHub
                      </a>
                      . Of course, we do have proprietary private code as well (private versions of Eliza and Rig, the
                      Knoledge API, etc.; you can check the Collaborate page for more info).
                    </li>
                    <li>
                      <span className="text-lg sm:text-xl">🟢</span> All payments are accounted for, though we plan not
                      to spend any $PAWSY until the market cap surpasses $9 million.
                    </li>
                  </ol>
                </li>

                <li>
                  <span className="text-lg sm:text-xl">🧠</span> Not just dreams: our AI Agents are actually
                  intelligent:
                  <ol className="list-none pl-2 sm:pl-4 mt-3 sm:mt-4 space-y-2">
                    <li>
                      <span className="text-lg sm:text-xl">🟠</span>{" "}
                      <a
                        href="https://x.com/TrulyADog/status/1867492287296811286"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/90 underline"
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
                        className="text-primary hover:text-primary/90 underline"
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
                        className="text-primary hover:text-primary/90 underline"
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
                  <span className="text-lg sm:text-xl">🔒</span> All developers funds in the Bark Ruffalo ecosystem are
                  either providing liquidity, or migrated to $mPAWSY and staked. Infinite trust in what we&apos;re
                  doing.
                </li>

                <li>
                  <span className="text-lg sm:text-xl">🎁</span> Token-gated channels, goodies and real alpha for
                  stakers. That real alpha consists of actual BUY recommendations, not general info like aix__ provides.
                  Read our staking page for more.
                </li>

                <li>
                  <span className="text-lg sm:text-xl">🛠️</span> Not dependent on Virtuals Protocol for success.
                  We&apos;re slowly moving away through $mPAWSY, and we&apos;ve already move on to better technologies
                  (Rig, Eliza).
                </li>

                <li>
                  <span className="text-lg sm:text-xl">💰</span> Since our objective is to make our stakers financially
                  independent, we provide them with income rounds from time to time. The first one was $30k worth!
                  (EDIT: initially; a few days later it had 10x)
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

              <div className="mt-6 sm:mt-8 space-y-4">
                <p className="text-sm sm:text-base">
                  See our footprint 🐾 by checking out our Linktree:{" "}
                  <a
                    href="https://linktr.ee/TrulyADog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/90 underline"
                  >
                    linktr.ee/TrulyADog
                  </a>
                </p>

                <p className="text-sm sm:text-base">
                  After checking out the rest of the website, you may also want to{" "}
                  <a
                    href="/Bark Ruffalo - two pager.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/90 underline"
                  >
                    read our two-pager
                  </a>
                  . Two-pagers are better than one! Also better than white papers.
                </p>

                <p className="text-sm sm:text-base">
                  You can buy $PAWSY on{" "}
                  {[
                    {
                      name: "Matcha",
                      url: "https://matcha.xyz/tokens/base/0x29e39327b5b1e500b87fc0fcae3856cd8f96ed2a?sellChain=8453&sellAddress=0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
                    },
                    {
                      name: "KyberSwap",
                      url: "https://kyberswap.com/swap/base/eth-to-pawsy",
                    },
                    {
                      name: "CowSwap",
                      url: "https://swap.cow.fi/#/8453/swap/WETH/PAWSY",
                    },
                    {
                      name: "Virtuals Protocol",
                      url: "https://app.virtuals.io/virtuals/5801",
                    },
                    {
                      name: "Uniswap",
                      url: "https://app.uniswap.org/swap?chain=base&inputCurrency=NATIVE&outputCurrency=0x29e39327b5b1e500b87fc0fcae3856cd8f96ed2a",
                    },
                  ].map((exchange, i, arr) => (
                    <span key={exchange.name}>
                      <a
                        href={exchange.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:text-primary/90 underline"
                      >
                        {exchange.name}
                      </a>
                      {i === arr.length - 1 ? ". " : i === arr.length - 2 ? ", or " : ", "}
                    </span>
                  ))}
                  Depending on the price it trades at (PAWSY and mPAWSY are equal in true value) it might make more
                  sense to{" "}
                  <a
                    href="https://tokentool.bitbond.com/tokensale/0xF544D44081005219217A0bE72ceBEfE3d2C42519?chainId=8453"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    buy $mPAWSY directly with USDC from the DAO
                  </a>{" "}
                  (this is on a discount, transferred after sale ends when $100k-worth of tokens sold or 365 days pass).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
