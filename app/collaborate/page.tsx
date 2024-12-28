"use client";

import Link from "next/link";
import type { NextPage } from "next";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Collaborate: NextPage = () => {
  const roles = [
    {
      icon: "🎯",
      title: "Marketing Specialists",
      description: "Help shape our marketing strategies and grow our community",
    },
    {
      icon: "💻",
      title: "Developers and Engineers",
      description: "Build and improve our platform's technical infrastructure",
    },
    {
      icon: "🤖",
      title: "AI Enthusiasts",
      description: "Contribute to our AI-driven marketing solutions",
    },
    {
      icon: "🔒",
      title: "Security Experts",
      description: "Ensure platform security and scalability",
    },
    {
      icon: "🎨",
      title: "Creative Talent",
      description: "Design and create engaging content for our community",
    },
    {
      icon: "✨",
      title: "Other Contributors",
      description: "Bring your unique skills to help grow the ecosystem",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Purchase $ATA",
      description: "Join our ecosystem by acquiring $ATA tokens",
      link: "/swap",
    },
    {
      number: "02",
      title: "Migrate & Stake",
      description: "Stake your tokens to earn rewards",
      comingSoon: true,
    },
  ];

  const StepContent = ({ step }: { step: (typeof steps)[0] }) => (
    <div className="flex items-start gap-4">
      <div className="text-3xl font-bold text-blue-500/50 dark:text-blue-400/50">{step.number}</div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-2 text-base-content dark:text-white flex items-center gap-2">
          {step.title}
          {step.comingSoon && (
            <span className="text-xs font-normal px-2 py-1 bg-blue-500/10 rounded-full">Coming Soon</span>
          )}
        </h3>
        <p className="text-base-content/80 dark:text-white/80">{step.description}</p>
        {step.link && (
          <div className="flex items-center gap-2 text-blue-500 dark:text-blue-400 font-semibold mt-2">
            Get $ATA now
            <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        )}
      </div>
    </div>
  );

  const contacts = [
    {
      icon: "📱",
      platform: "Telegram",
      link: "t.me/OfficialATACommunity",
      label: "Join our Telegram",
    },
    {
      icon: "✉️",
      platform: "Email",
      link: "mailto:atavirtuals@gmail.com",
      label: "Send us an email",
    },
  ];

  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative space-y-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-base-content dark:text-white">
                Collaborate With Us
              </h1>
              <p className="text-xl sm:text-2xl text-base-content/80 dark:text-white/80 max-w-3xl mx-auto">
                Join us in shaping the future of digital marketing
              </p>
            </div>

            {/* Roles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className="p-6 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative hover:bg-opacity-100 transition-all duration-300 group"
                >
                  <div className="absolute inset-0 rounded-2xl z-0 bg-indigo-500 bg-opacity-10 dark:bg-opacity-20 blur-sm group-hover:bg-opacity-20" />
                  <div className="relative z-10">
                    <div className="text-4xl mb-4">{role.icon}</div>
                    <h3 className="text-xl font-bold mb-2 text-base-content dark:text-white">{role.title}</h3>
                    <p className="text-base-content/80 dark:text-white/80">{role.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Steps Section */}
            <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
              <div className="absolute inset-0 rounded-2xl z-0 bg-indigo-500 bg-opacity-10 dark:bg-opacity-20 blur-sm" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8 text-base-content dark:text-white text-center">Get Started</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {steps.map((step, index) =>
                    step.link ? (
                      <Link
                        key={index}
                        href={step.link}
                        className="p-4 rounded-xl hover:bg-blue-500/5 transition-colors cursor-pointer group"
                      >
                        <StepContent step={step} />
                      </Link>
                    ) : (
                      <div key={index} className="p-4 rounded-xl hover:bg-blue-500/5 transition-colors">
                        <StepContent step={step} />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>

            {/* Contact Section */}
            <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
              <div className="absolute inset-0 rounded-2xl z-0 bg-indigo-500 bg-opacity-10 dark:bg-opacity-20 blur-sm" />
              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-8 text-base-content dark:text-white text-center">Get in Touch</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
                  {contacts.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.platform === "Email" ? contact.link : `https://${contact.link}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-blue-500/5 transition-all duration-300 group"
                    >
                      <div className="text-3xl group-hover:scale-110 transition-transform">{contact.icon}</div>
                      <div>
                        <h3 className="text-lg font-semibold text-base-content dark:text-white">{contact.platform}</h3>
                        <p className="text-base-content/80 dark:text-white/80">{contact.label}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Final CTA */}
            <div className="text-center mt-12">
              <p className="text-xl text-base-content/80 dark:text-white/80">
                Let&apos;s build the future of $ATA together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
// "use client";

// import { useState } from "react";
// import type { NextPage } from "next";
// import { ChevronDownIcon } from "@heroicons/react/24/outline";

// const Collaborate: NextPage = () => {
//   const [openAccordion, setOpenAccordion] = useState<string | null>(null);

//   const toggleAccordion = (title: string) => {
//     setOpenAccordion(openAccordion === title ? null : title);
//   };

//   const accordionItems = [
//     {
//       title: "Be Part of Our Journey!",
//       content: `We are paving the future of marketing and are seeking passionate individuals to join us. Here’s who we’re looking for:

// • Marketing Specialists
// • Developers and Engineers
// • AI Enthusiasts
// • Scalability and Security Experts
// • Creative Talent
// • Other Contributors

// We prefer to work with individuals who are genuinely invested in the success of the project. As a sign of commitment, we encourage you to:
// 1. Purchase $ATA.
// 2. Migrate and stake your tokens (coming soon).

// Reach out to us on Telegram or at atavirtuals@gmail.com

// Let’s build the future of $ATA together!`,
//     },
//   ];

//   return (
//     <div className="flex items-center flex-col flex-grow">
//       <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
//         <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
//           <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
//             <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
//               Collaborate
//             </h1>

//             <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative w-full">
//               <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
//               <div className="relative z-10 w-full">
//                 <div className="space-y-4 w-full">
//                   {accordionItems.map((item, index) => (
//                     <div
//                       key={index}
//                       className={`
//                         border-2 border-blue-500 dark:border-blue-400 rounded-xl overflow-hidden
//                         transition-all duration-200 ease-in-out
//                         hover:border-blue-600 dark:hover:border-blue-300
//                         ${openAccordion === item.title ? "bg-blue-500 bg-opacity-5 dark:bg-opacity-10" : "bg-base-100 dark:bg-opacity-20"}
//                       `}
//                     >
//                       <button
//                         onClick={() => toggleAccordion(item.title)}
//                         className="w-full px-6 py-4 flex justify-between items-center cursor-pointer group"
//                       >
//                         <h3 className="text-xl font-semibold text-base-content dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
//                           {item.title}
//                         </h3>
//                         <ChevronDownIcon
//                           className={`h-6 w-6 text-blue-500 dark:text-blue-400 transition-transform duration-200
//                             ${openAccordion === item.title ? "rotate-180" : "rotate-0"}
//                           `}
//                         />
//                       </button>
//                       <div
//                         className={`px-6 overflow-hidden transition-all duration-200 ease-in-out
//                           ${openAccordion === item.title ? "max-h-[1000px] pb-6" : "max-h-0"}
//                         `}
//                       >
//                         <p
//                           className="text-base-content dark:text-white whitespace-pre-line"
//                           dangerouslySetInnerHTML={{ __html: item.content }}
//                         ></p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Collaborate;
