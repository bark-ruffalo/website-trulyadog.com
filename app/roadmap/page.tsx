"use client";

import type { NextPage } from "next";
import { useState } from "react";

const Roadmap: NextPage = () => {
  type PhaseKey = "1" | "2a" | "2b" | "2c" | "3";
  const [activePhase, setActivePhase] = useState<PhaseKey>("1");
  const [isPhase2Expanded, setIsPhase2Expanded] = useState(false);

  const phases = {
    "1": {
      title: "Phase 1: Agent Development",
      timeline: "Q1 2024",
      status: "In Progress",
      progress: 56,
      description: "Building and testing core AI agent architecture",
      items: [
        { text: "Design modular agent architecture for conversation and product recommendations", completed: true },
        { text: "Deploy 5 commercial niche agents and 1 self-marketing agent for testing", completed: true },
        { text: "Expand development team:", completed: true, subitems: [
          { text: "Project Manager for coordination and delivery", completed: true },
          { text: "2x Full-Stack Engineers for infrastructure and frontend development", completed: true },
          { text: "Prompt Engineer for agent optimization", completed: true },
        ]},
        { text: "Expand into other social platforms", completed: false, subitems: [
          { text: "Reddit", completed: false },
          { text: "TikTok (Pending Ban)", completed: false },
          { text: "Discord/Telegram", completed: false },
        ]},
        { text: "Implement comprehensive analytics tracking system", completed: false },
      ]
    },
    "2a": {
      title: "Phase 2A: Infrastructure",
      timeline: "Q1-Q2 2024",
      status: "Upcoming",
      progress: 0,
      description: "Developing scalable technical infrastructure",
      items: [
        { text: "Build containerized architecture with automated deployment", completed: false },
        { text: "Create scalable database and S3 integration", completed: false },
        { text: "Develop core management APIs", completed: false },
        { text: "Implement monitoring and logging solutions", completed: false }
      ]
    },
    "2b": {
      title: "Phase 2B: Staking & Rewards",
      timeline: "Q1-Q2 2024",
      status: "Parallel Development",
      progress: 0,
      description: "Implementing staking mechanics and commission tracking",
      items: [
        { text: "Deploy smart contracts for token staking and rewards", completed: false },
        { text: "Build commission tracking and distribution system", completed: false },
        { text: "Create user dashboard for staking insights and earnings", completed: false },
        { text: "Implement automated reward distribution mechanism", completed: false }
      ]
    },
    "2c": {
      title: "Phase 2C: Marketing & Awareness",
      timeline: "Q1-Q2 2024",
      status: "Planned",
      progress: 0,
      description: "Building brand awareness and market presence",
      items: [
        { text: "Community AMAs and Twitter Spaces", completed: false },
        { text: "Strategic partnership development", completed: false },
        { text: "Enhanced documentation and guides", completed: false },
        { text: "Ecosystem awareness campaigns", completed: false }
      ]
    },
    "3": {
      title: "Phase 3: Launchpad Platform",
      timeline: "Q2-Q3 2024",
      status: "Planned",
      progress: 0,
      description: "Creating comprehensive management dashboard and configuration tools",
      items: [
        { text: "Implement user authentication and agent management", completed: false },
        { text: "Build product catalog and configuration interface", completed: false },
        { text: "Deploy real-time analytics and optimization tools", completed: false },
        { text: "Integrate staking dashboard with platform analytics", completed: false }
      ]
    }
  };

  const handlePhaseClick = (phase: PhaseKey | "2") => {
    if (phase === "2") {
      setIsPhase2Expanded(!isPhase2Expanded);
      if (!isPhase2Expanded) {
        setActivePhase("2a");
      }
    } else {
      setActivePhase(phase);
      if (!phase.startsWith("2")) {
        setIsPhase2Expanded(false);
      }
    }
  };

  const keyMetrics = [
    {
      category: "Agent Performance",
      metrics: [
        "Conversion Rate",
        "Revenue per Conversation",
        "User Engagement"
      ]
    },
    {
      category: "Growth & Engagement",
      metrics: [
        "Community Growth",
        "Partnership Success",
        "Market Awareness"
      ]
    },
    {
      category: "Staking & Rewards",
      metrics: [
        "Total Value Locked",
        "Average Return Rate",
        "Distribution Efficiency"
      ]
    }
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300">
            Development Roadmap
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Building the future of AI-driven marketing with integrated staking rewards
          </p>
        </div>

        {/* Phase Navigation */}
        <div className="mb-12">
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap gap-4 justify-center">
              <button
                onClick={() => handlePhaseClick("1")}
                className={`px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 border border-transparent backdrop-blur-sm ${
                  activePhase === "1"
                    ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200/20 dark:border-blue-500/20 shadow-lg shadow-blue-500/5 dark:shadow-blue-400/5 text-gray-900 dark:text-white"
                    : "bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-100/20 dark:hover:border-blue-500/10 text-gray-600 dark:text-gray-300 hover:shadow-md hover:shadow-blue-500/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">01</span>
                  <span>Agent Development</span>
                </div>
              </button>
              
              <button
                onClick={() => handlePhaseClick("2")}
                className={`px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 border border-transparent backdrop-blur-sm ${
                  (activePhase === "2a" || activePhase === "2b" || activePhase === "2c")
                    ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200/20 dark:border-blue-500/20 shadow-lg shadow-blue-500/5 dark:shadow-blue-400/5 text-gray-900 dark:text-white"
                    : "bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-100/20 dark:hover:border-blue-500/10 text-gray-600 dark:text-gray-300 hover:shadow-md hover:shadow-blue-500/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">02</span>
                  <span>Infrastructure & Growth</span>
                  <span className="text-blue-500/70">{isPhase2Expanded ? "▼" : "▶"}</span>
                </div>
              </button>
              
              <button
                onClick={() => handlePhaseClick("3")}
                className={`px-8 py-4 rounded-xl text-sm font-medium transition-all duration-300 border border-transparent backdrop-blur-sm ${
                  activePhase === "3"
                    ? "bg-gradient-to-r from-blue-500/10 to-purple-500/10 border-blue-200/20 dark:border-blue-500/20 shadow-lg shadow-blue-500/5 dark:shadow-blue-400/5 text-gray-900 dark:text-white"
                    : "bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-purple-500/5 hover:border-blue-100/20 dark:hover:border-blue-500/10 text-gray-600 dark:text-gray-300 hover:shadow-md hover:shadow-blue-500/5"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-lg font-semibold">03</span>
                  <span>Launchpad Platform</span>
                </div>
              </button>
            </div>
            
            {isPhase2Expanded && (
              <div className="flex gap-4 mt-3">
                <button
                  onClick={() => handlePhaseClick("2a")}
                  className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                    activePhase === "2a"
                      ? "bg-gradient-to-r from-blue-500/10 to-blue-400/10 text-blue-700 dark:text-blue-200 shadow-lg shadow-blue-500/5"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-blue-500/5 hover:to-blue-400/5 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-xs font-semibold">2A</span>
                    <span>Infrastructure</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-blue-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={() => handlePhaseClick("2b")}
                  className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                    activePhase === "2b"
                      ? "bg-gradient-to-r from-purple-500/10 to-purple-400/10 text-purple-700 dark:text-purple-200 shadow-lg shadow-purple-500/5"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-purple-500/5 hover:to-purple-400/5 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-xs font-semibold">2B</span>
                    <span>Staking & Rewards</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
                
                <button
                  onClick={() => handlePhaseClick("2c")}
                  className={`group relative px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 overflow-hidden ${
                    activePhase === "2c"
                      ? "bg-gradient-to-r from-green-500/10 to-green-400/10 text-green-700 dark:text-green-200 shadow-lg shadow-green-500/5"
                      : "bg-white/50 dark:bg-gray-800/50 hover:bg-gradient-to-r hover:from-green-500/5 hover:to-green-400/5 text-gray-600 dark:text-gray-300"
                  }`}
                >
                  <div className="relative z-10 flex items-center gap-2">
                    <span className="text-xs font-semibold">2C</span>
                    <span>Marketing</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-green-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Active Phase Details */}
        <div className="mb-16">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
            <div className="px-8 py-6 border-b border-gray-100 dark:border-gray-700">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">{phases[activePhase].title}</h2>
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">{phases[activePhase].description}</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="text-sm">
                    <span className="text-gray-500 dark:text-gray-400">Timeline:</span>
                    <span className="ml-2 font-medium text-gray-900 dark:text-white">{phases[activePhase].timeline}</span>
                  </div>
                  <span className={`px-4 py-1.5 rounded-full text-sm font-medium ${
                    phases[activePhase].status === "In Progress" 
                      ? "bg-blue-50 text-blue-700 dark:bg-blue-900/50 dark:text-blue-200"
                      : phases[activePhase].status === "Parallel Development"
                      ? "bg-purple-50 text-purple-700 dark:bg-purple-900/50 dark:text-purple-200"
                      : phases[activePhase].status === "Upcoming"
                      ? "bg-amber-50 text-amber-700 dark:bg-amber-900/50 dark:text-amber-200"
                      : "bg-gray-50 text-gray-700 dark:bg-gray-700 dark:text-gray-200"
                  }`}>
                    {phases[activePhase].status}
                  </span>
                </div>
              </div>
              
              {/* Progress Bar */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-300">Progress</span>
                  <span className="font-medium text-gray-900 dark:text-white">{phases[activePhase].progress}%</span>
                </div>
                <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 transition-all duration-500" 
                    style={{ width: `${phases[activePhase].progress}%` }}
                  ></div>
                </div>
              </div>
            </div>
            
            <div className="px-8 py-6">
              <div className="space-y-4">
                {phases[activePhase].items.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-start gap-4 group">
                      <div className={`mt-1 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                        item.completed
                          ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30"
                          : "border-gray-300 dark:border-gray-600 group-hover:border-gray-400 dark:group-hover:border-gray-500"
                      }`}>
                        {item.completed && (
                          <svg className="w-3 h-3 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-base transition-colors duration-200 ${
                        item.completed 
                          ? "text-gray-900 dark:text-white" 
                          : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                      }`}>
                        {item.text}
                      </span>
                    </div>
                    {item.subitems && (
                      <div className="ml-9 space-y-2">
                        {item.subitems.map((subitem, subIndex) => (
                          <div key={subIndex} className="flex items-start gap-4 group">
                            <div className={`mt-1 w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors duration-200 ${
                              subitem.completed
                                ? "border-emerald-500 bg-emerald-50 dark:bg-emerald-900/30"
                                : "border-gray-300 dark:border-gray-600 group-hover:border-gray-400 dark:group-hover:border-gray-500"
                            }`}>
                              {subitem.completed && (
                                <svg className="w-2 h-2 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              )}
                            </div>
                            <span className={`text-sm transition-colors duration-200 ${
                              subitem.completed 
                                ? "text-gray-900 dark:text-white" 
                                : "text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300"
                            }`}>
                              {subitem.text}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-100 dark:border-gray-700">
          <div className="px-8 py-6 border-b border-gray-100 dark:border-gray-700">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Key Success Metrics</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-700">
            {keyMetrics.map((section, index) => (
              <div key={index} className="p-8 space-y-4">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {section.category}
                </h3>
                <ul className="space-y-3">
                  {section.metrics.map((metric, metricIndex) => (
                    <li key={metricIndex} className="flex items-center gap-3 text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                      <span className="text-sm">{metric}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;