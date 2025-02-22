"use client";

import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [showMetrics, setShowMetrics] = useState(false);
  const [metrics, setMetrics] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const response = await fetch("/api/transparency");
        let text = await response.text();
        // add links for X (Twitter) accounts first
        text = text.replace(/@(\w+)(?!_bot)/g, '<a href="https://x.com/$1" target="_blank">@$1</a>');
        // then add links for telegram agents
        text = text.replace(/@(\w+_bot)/g, '<a href="https://t.me/$1" target="_blank">@$1</a>');
        // Add links for specific tokens
        const tokenLinks: { [key: string]: string } = {
          POC: "https://app.virtuals.io/virtuals/13983",
          MAR: "https://app.virtuals.io/prototypes/0x5066d3df51FE1546b110918bf9f578baB92979c2",
          QTG: "https://app.virtuals.io/virtuals/20286",
        };

        // Replace token names with links (only first occurrence)
        Object.entries(tokenLinks).forEach(([token, link]) => {
          text = text.replace(new RegExp(token), `<a href="${link}" target="_blank">${token}</a>`);
        });
        setMetrics(text);
      } catch (error) {
        console.error("Error loading metrics:", error);
      }
    };

    loadMetrics();
  }, []);

  const handleVideoEnded = () => {
    if (!videoRef.current) return;

    setShowMetrics(true);
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

        {/* Metrics */}
        {showMetrics && (
          <div
            className="absolute inset-0 bg-base-100 dark:bg-base-300 p-8 overflow-y-auto"
            style={{
              animation: "slideIn 1s ease-out forwards",
            }}
          >
            <div className="max-w-4xl mx-auto">
              <div
                className="whitespace-pre-wrap text-base-content dark:text-white font-mono text-sm sm:text-base [&_a]:text-blue-500 [&_a]:hover:text-blue-600 dark:[&_a]:text-blue-400 dark:[&_a]:hover:text-blue-300"
                dangerouslySetInnerHTML={{ __html: metrics }}
              />
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