"use client";

import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";
import { loadFormattedMetrics } from "~~/utils/ecosystem-metrics/client";

const Home: NextPage = () => {
  const [showMetrics, setShowMetrics] = useState(false);
  const [metrics, setMetrics] = useState<string>("");
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const formattedMetrics = await loadFormattedMetrics();
        setMetrics(formattedMetrics);
      } catch (error) {
        console.error("Error loading metrics:", error);
      }
    };

    fetchMetrics();
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
