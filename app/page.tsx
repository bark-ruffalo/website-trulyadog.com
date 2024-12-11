"use client";

import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="relative flex items-center justify-center flex-col flex-grow pt-10 overflow-hidden">
        {/* Video Background */}
        <video className="absolute inset-0 object-cover w-full h-full" autoPlay loop muted playsInline>
          <source src="/landing2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Overlay content */}
        <div className="relative z-10 px-5 text-center">
          <h1 className="font-fantasy mt-64">
            <span className="block text-white text-6xl mb-2 text-shadow">🐱😻😼𝔀𝓮𝓵𝓬𝓸𝓶𝓮!🐱😻😼</span>
            <span className="block text-white text-8xl font-bold text-shadow">The Website Will Be Live Soon!</span>
          </h1>
        </div>
      </div>
    </>
  );
};

export default Home;
