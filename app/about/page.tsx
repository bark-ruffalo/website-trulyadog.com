"use client";

import type { NextPage } from "next";

const About: NextPage = () => {
  const features = [
    {
      icon: "🎯",
      title: "AI-Driven",
      description:
        "Advanced artificial intelligence that powers precise, personalized recommendations in the digital marketing space",
    },
    {
      icon: "🔗",
      title: "Blockchain-Powered",
      description: "Leveraging blockchain technology to ensure complete transparency and secure transactions",
    },
    {
      icon: "🤝",
      title: "Community-Focused",
      description: "Building a decentralized ecosystem that rewards and empowers all participants",
    },
  ];

  const benefits = [
    {
      icon: "💎",
      title: "Staking Rewards",
      description: "Earn rewards through our $ATA token staking program",
    },
    {
      icon: "📈",
      title: "Commission Sharing",
      description: "Participate in our revolutionary commission sharing system",
    },
    {
      icon: "🔑",
      title: "Platform Access",
      description: "Get exclusive access to cutting-edge AI marketing tools",
    },
  ];

  const socials = [
    {
      icon: "📱",
      platform: "Telegram",
      link: "t.me/OfficialATACommunity",
      handle: "@OfficialATACommunity",
    },
    {
      icon: "✉️",
      platform: "Email",
      link: "mailto:atavirtuals@gmail.com",
      handle: "atavirtuals@gmail.com",
    },
    {
      icon: "🐦",
      platform: "Twitter/X",
      link: "x.com/ata_virtuals",
      handle: "@ata_virtuals",
    },
  ];

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative space-y-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-base-content dark:text-white">About ATA</h1>
              <p className="text-xl sm:text-2xl text-base-content/80 dark:text-white/80 max-w-3xl mx-auto">
                Revolutionizing digital marketing through the innovative combination of artificial intelligence and
                blockchain technology.
              </p>
            </div>

            {/* Whitepaper Banner - New Section */}
            <div className="p-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-400/5 transition-all duration-300 group-hover:bg-blue-500/10 dark:group-hover:bg-blue-400/10"></div>
              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-6">
                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-base-content dark:text-white mb-2">
                    Read Our Whitepaper
                  </h2>
                  <p className="text-base-content/80 dark:text-white/80 text-lg">
                    Dive deep into our technology, vision, and ecosystem
                  </p>
                </div>
                <a
                  href="https://viridian-kale-968.notion.site/ATA-Affiliate-Targeting-AI-Whitepaper-16905e31cf9680cd8d3ef40e05643d81"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 group-hover:scale-105"
                >
                  View Whitepaper
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative hover:bg-opacity-100 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-base-content dark:text-white">Our Mission</h2>
                  <p className="text-base-content dark:text-white/90">
                    To revolutionize the affiliate marketing landscape by creating a decentralized ecosystem that
                    benefits all participants.
                  </p>
                </div>
              </div>
              <div className="p-6 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative hover:bg-opacity-100 transition-all duration-300">
                <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                <div className="relative z-10">
                  <h2 className="text-2xl font-bold mb-4 text-base-content dark:text-white">Our Vision</h2>
                  <p className="text-base-content dark:text-white/90">
                    A future where digital marketing is more efficient, transparent, and rewarding for everyone
                    involved.
                  </p>
                </div>
              </div>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative hover:bg-opacity-100 transition-all duration-300"
                >
                  <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-base-content dark:text-white">{feature.title}</h3>
                    <p className="text-base-content/80 dark:text-white/80">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Community Benefits */}
            <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
              <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-base-content dark:text-white text-center">
                  Community Benefits <span className="text-sm font-normal">(Coming Soon)</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {benefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center text-center p-4 hover:bg-blue-500/5 rounded-xl transition-colors"
                    >
                      <div className="text-3xl mb-3">{benefit.icon}</div>
                      <h3 className="text-lg font-semibold mb-2 text-base-content dark:text-white">{benefit.title}</h3>
                      <p className="text-base-content/80 dark:text-white/80">{benefit.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Connect Section */}
            <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
              <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-6 text-base-content dark:text-white text-center">
                  Connect With Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {socials.map((social, index) => (
                    <a
                      key={index}
                      href={social.platform === "Email" ? social.link : `https://${social.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex flex-col items-center text-center p-4 rounded-xl hover:bg-blue-500/5 transition-all duration-300"
                    >
                      <div className="text-3xl mb-2">{social.icon}</div>
                      <h3 className="text-lg font-semibold mb-1 text-base-content dark:text-white">
                        {social.platform}
                      </h3>
                      <p className="text-base-content/80 dark:text-white/80">{social.handle}</p>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
