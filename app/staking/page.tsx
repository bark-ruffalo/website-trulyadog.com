"use client";

import type { NextPage } from "next";

const Staking: NextPage = () => {
  const features = [
    {
      icon: "💎",
      title: "Token Staking",
      description: "Stake your ATA tokens to earn rewards and participate in governance"
    },
    {
      icon: "📈",
      title: "Profit Sharing",
      description: "Earn a share of platform revenues through staking rewards"
    },
    {
      icon: "🏛️",
      title: "Governance",
      description: "Participate in key platform decisions and shape the future of ATA"
    }
  ];

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative space-y-12">
            {/* Hero Section */}
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-base-content dark:text-white">
                Stake and Earn
              </h1>
              <p className="text-xl sm:text-2xl text-base-content/80 dark:text-white/80 max-w-3xl mx-auto">
                Join our community of stakers and shape the future of digital marketing
              </p>
            </div>

            {/* Coming Soon Banner */}
            <div className="p-8 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-400/5 transition-all duration-300 group-hover:bg-indigo-500/10 dark:group-hover:bg-indigo-400/10"></div>
              <div className="relative z-10">
                <div className="text-5xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500 text-center mb-4 animate-pulse">
                  Coming Soon
                </div>
                <p className="text-center text-base-content/80 dark:text-white/80 text-lg max-w-2xl mx-auto">
                  Our staking platform is under development. Join our community to be notified when staking goes live.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="p-6 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative hover:bg-opacity-100 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-2xl z-0 bg-indigo-500 bg-opacity-10 dark:bg-opacity-20 blur-sm group-hover:bg-opacity-20"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-base-content dark:text-white">{feature.title}</h3>
                    <p className="text-base-content/80 dark:text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats Preview */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { label: "APY", value: "Coming Soon", icon: "📊" },
                { label: "Total Value Locked", value: "Coming Soon", icon: "🔒" },
                { label: "Active Stakers", value: "Coming Soon", icon: "👥" }
              ].map((stat, index) => (
                <div key={index} className="p-6 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative group">
                  <div className="absolute inset-0 rounded-2xl z-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-sm"></div>
                  <div className="relative z-10 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-lg font-semibold text-base-content dark:text-white mb-1">{stat.label}</div>
                    <div className="text-base-content/80 dark:text-white/80 font-mono">{stat.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Newsletter Signup */}
            <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
              <div className="absolute inset-0 rounded-2xl z-0 bg-gradient-to-r from-indigo-500/10 to-cyan-500/10 blur-sm"></div>
              <div className="relative z-10 text-center">
                <h3 className="text-2xl font-bold mb-4 text-base-content dark:text-white">Stay Updated</h3>
                <p className="text-base-content/80 dark:text-white/80 mb-6">
                  Join our community to get notified when staking launches
                </p>
                <a
                  href="https://t.me/OfficialATACommunity"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-indigo-500 to-cyan-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
                >
                  Join Our Telegram
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Staking;