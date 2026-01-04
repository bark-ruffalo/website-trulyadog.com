"use client";

import { useRef, useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [showSunsetMessage, setShowSunsetMessage] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleVideoEnded = () => {
    if (!videoRef.current) return;

    setShowSunsetMessage(true);
    if (videoRef.current && contentRef.current) {
      videoRef.current.style.transform = "translateX(-100%)";
      videoRef.current.style.transition = "transform 1s ease-out";
      contentRef.current.style.transform = "translateX(-200%)";
      contentRef.current.style.transition = "transform 1s ease-out";
    }
  };

  return (
    <>
      <div className="relative flex items-center justify-center flex-col flex-grow pt-10 overflow-hidden">
        {/* Video Background */}
        <video
          ref={videoRef}
          className="absolute inset-0 object-cover w-full h-full"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnded}
        >
          <source src="/landing2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div ref={contentRef} className="relative z-10 px-5 text-center">
          <h1 className="font-fantasy mt-64">
            <span className="block text-white text-3xl sm:text-6xl mb-2 text-shadow">Welcome!</span>
            <span className="block text-white text-4xl sm:text-8xl font-bold text-shadow">$PAWSY {">"} Bitcoin</span>
          </h1>
        </div>

        {/* Sunset Message */}
        {showSunsetMessage && (
          <div
            className="absolute inset-0 bg-base-100 dark:bg-base-300 p-8 overflow-y-auto"
            style={{
              animation: "slideIn 1s ease-out forwards",
            }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="text-base-content dark:text-white text-base sm:text-lg leading-relaxed">
                <p className="mb-6 text-xl font-semibold">
                  This project has been sunset. At the end, we had 7,258,162,016 $mPAWSY staked by 84 users (78.95% of
                  the non-DAO $mPAWSY supply). Thank you for the trust!
                </p>

                <p className="mb-6">
                  Our last income distribution was on December 15, 2025:{" "}
                  <a
                    href="https://x.com/TrulyADog/status/2000530685409259709"
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 underline"
                  >
                    https://x.com/TrulyADog/status/2000530685409259709
                  </a>
                </p>

                <p className="mb-4">
                  These three agents will be reactivated eventually to help with marketing for other projects:
                </p>

                <ul className="list-disc list-inside space-y-3 ml-4">
                  <li>
                    <strong>Bark Ruffalo</strong> (
                    <a
                      href="https://x.com/TrulyADog"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      @TrulyADog
                    </a>{" "}
                    on X,{" "}
                    <a
                      href="https://t.me/BarkRuffalo_bot"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      @BarkRuffalo_bot
                    </a>{" "}
                    on Telegram)
                  </li>
                  <li>
                    <strong>The Great Pupdini</strong> (
                    <a
                      href="https://x.com/TheGreatPupdini"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      @TheGreatPupdini
                    </a>{" "}
                    on X,{" "}
                    <a
                      href="https://t.me/TheGreatPupdini_bot"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      @TheGreatPupdini_bot
                    </a>{" "}
                    on Telegram)
                  </li>
                  <li>
                    <strong>The Alpha Doggo</strong> (
                    <a
                      href="https://x.com/TheAlphaDoggo"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      @TheAlphaDoggo
                    </a>{" "}
                    on X,{" "}
                    <a
                      href="https://t.me/TheAlphaDoggo_bot"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300"
                    >
                      @TheAlphaDoggo_bot
                    </a>{" "}
                    on Telegram)
                  </li>
                </ul>

                <p className="mt-6">
                  The Telegram group will continue to function (link in the footer). Our repository will stay unchanged
                  for historical purposes and in case anyone wants to reuse any of our code.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        .text-shadow {
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default Home;
