"use client";

import { useState } from "react";
import type { NextPage } from "next";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Collaborate: NextPage = () => {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const toggleAccordion = (title: string) => {
    setOpenAccordion(openAccordion === title ? null : title);
  };

  const accordionItems = [
    {
      title: "Be Part of Our Journey!",
      content: `We are paving the future of marketing and are seeking passionate individuals to join us. Here’s who we’re looking for:

• Marketing Specialists
• Developers and Engineers
• AI Enthusiasts
• Scalability and Security Experts
• Creative Talent
• Other Contributors

We prefer to work with individuals who are genuinely invested in the success of the project. As a sign of commitment, we encourage you to:
1. Purchase $ATA.
2. Migrate and stake your tokens (coming soon).

Reach out to us on Telegram or at atavirtuals@gmail.com

Let’s build the future of $ATA together!`,
    },
  ];

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
              Collaborate
            </h1>

            <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative w-full">
              <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
              <div className="relative z-10 w-full">
                <div className="space-y-4 w-full">
                  {accordionItems.map((item, index) => (
                    <div
                      key={index}
                      className={`
                        border-2 border-blue-500 dark:border-blue-400 rounded-xl overflow-hidden
                        transition-all duration-200 ease-in-out
                        hover:border-blue-600 dark:hover:border-blue-300
                        ${openAccordion === item.title ? "bg-blue-500 bg-opacity-5 dark:bg-opacity-10" : "bg-base-100 dark:bg-opacity-20"}
                      `}
                    >
                      <button
                        onClick={() => toggleAccordion(item.title)}
                        className="w-full px-6 py-4 flex justify-between items-center cursor-pointer group"
                      >
                        <h3 className="text-xl font-semibold text-base-content dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                          {item.title}
                        </h3>
                        <ChevronDownIcon
                          className={`h-6 w-6 text-blue-500 dark:text-blue-400 transition-transform duration-200
                            ${openAccordion === item.title ? "rotate-180" : "rotate-0"}
                          `}
                        />
                      </button>
                      <div
                        className={`px-6 overflow-hidden transition-all duration-200 ease-in-out
                          ${openAccordion === item.title ? "max-h-[1000px] pb-6" : "max-h-0"}
                        `}
                      >
                        <p
                          className="text-base-content dark:text-white whitespace-pre-line"
                          dangerouslySetInnerHTML={{ __html: item.content }}
                        ></p>
                      </div>
                    </div>
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

export default Collaborate;
