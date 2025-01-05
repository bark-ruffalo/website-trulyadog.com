"use client";

import { useEffect, useRef, useState } from "react";
import type { NextPage } from "next";

const Home: NextPage = () => {
  const [showMetrics, setShowMetrics] = useState(false);
  const [metrics, setMetrics] = useState<string>("");
  const [links, setLinks] = useState<string[]>([]);
  const videoRef = useRef<HTMLVideoElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const loadMetrics = async () => {
      try {
        const response = await fetch("/api/transparency");
        const text = await response.text();
        setMetrics(text);

        // Extract links from text
        const linkRegex = /@\w+|https?:\/\/[^\s)]+/g;
        const matches = text.match(linkRegex) || [];
        setLinks(matches);
      } catch (error) {
        console.error("Error loading metrics:", error);
      }
    };

    loadMetrics();
  }, []);

  const handleVideoEnded = () => {
    if (!videoRef.current) return;

    if (videoRef.current.dataset.playCount === undefined) {
      videoRef.current.dataset.playCount = "1";
      videoRef.current.play();
    } else {
      setShowMetrics(true);
      if (videoRef.current && contentRef.current) {
        videoRef.current.style.transform = "translateX(-100%)";
        videoRef.current.style.transition = "transform 1s ease-out";
        contentRef.current.style.transform = "translateX(-200%)";
        contentRef.current.style.transition = "transform 1s ease-out";
      }
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
              <pre className="whitespace-pre-wrap text-base-content dark:text-white font-mono text-sm sm:text-base">
                {metrics}
              </pre>

              {links.length > 0 && (
                <div className="mt-8">
                  <h2 className="text-xl font-bold mb-4 text-base-content dark:text-white">Links mentioned:</h2>
                  <ul className="space-y-2">
                    {links.map((link, index) => (
                      <li key={index}>
                        {link.startsWith("@") ? (
                          <span className="text-blue-500">{link}</span>
                        ) : (
                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                          >
                            {link}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
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
