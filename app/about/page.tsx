"use client";

import React, { useEffect, useState } from 'react';
import { NotionRenderer } from 'react-notion';

const About = () => {
  const [notionData, setNotionData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotionData = async () => {
      try {
        const res = await fetch(
          'https://notion-api.splitbee.io/v1/page/16905e31cf9680cd8d3ef40e05643d81'
        );
        const data = await res.json();
        setNotionData(data);
      } catch (error) {
        console.error('Error fetching Notion data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNotionData();
  }, []);

  return (
    <div>
      <h1>About</h1>
    <div style={styles.container}>
      {loading && <p>Loading...</p>}
      {notionData && <NotionRenderer blockMap={notionData} />}
    </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '20px',
    maxWidth: '1000px',
    margin: '0 auto',

    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  },
};

export default About;
// export default function Why() {
//   // Create stats cards data in the same format as staking
//   const statsCards = [
//     {
//       title: "DAO ALLOCATION",
//       value: "30%",
//       className: "green",
//     },
//     {
//       title: "OPERATIONAL FUNDS",
//       value: "5.25%",
//       className: "green",
//     },
//     {
//       title: "TEAM FUNDS",
//       value: "14.5%",
//       className: "green",
//     },
//   ];

//   return (
//     <div className="min-h-screen from-gray-50 py-6 sm:py-12 px-2 sm:px-6 lg:px-8 bg-base-100 dark:bg-base-300">
//       <div className="w-full max-w-[95%] sm:max-w-[75%] mx-auto">
//         <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12 text-base-content dark:text-white">
//           Why $PAWSY?
//         </h1>

//         {/* Stats Cards - Updated for mobile responsiveness */}
//         <div className="flex flex-col sm:flex-row items-center justify-center w-full gap-4 mb-8 sm:mb-12 px-2 sm:px-0">
//           {statsCards.map((card, index) => (
//             <div
//               key={index}
//               className="flex flex-col justify-between items-start p-4 sm:p-6 min-h-[100px] sm:min-h-[120px] w-full sm:w-[300px] relative bg-base-200 dark:bg-white dark:bg-opacity-10 rounded-2xl shadow-md"
//             >
//               <div
//                 className={`absolute inset-0 rounded-2xl z-0 ${
//                   card.className === "green" ? "bg-green-500" : "bg-blue-500"
//                 } bg-opacity-10 dark:bg-opacity-20 blur-sm`}
//               ></div>
//               <div className="relative z-10 text-base-content dark:text-white w-full">
//                 <div className="text-sm font-semibold uppercase mb-1 leading-4">{card.title}</div>
//                 <div className="text-2xl font-light leading-4 pt-6">{card.value}</div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Main content box - Updated for mobile */}
//         <div className="p-4 sm:p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
//           <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
//           <div className="relative z-10 text-base-content dark:text-white">
//             <ol className="space-y-6 sm:space-y-8 list-none pl-2 sm:pl-4">
//               <li>
//                 <span className="text-lg sm:text-xl">✨</span> We are creating an ecosystem and a community focused on
//                 making money. Employing AI agents for this purpose will be a primary objective, but we will do it all!
//                 Bark Ruffalo will be their top 🐶. Never mention to him that he looks like a 🐈‍⬛!
//               </li>

//               <li>
//                 <span className="text-lg sm:text-xl">🔍</span> Transparency:
//                 <ol className="list-none pl-2 sm:pl-4 mt-3 sm:mt-4 space-y-2">
//                   <li>
//                     <span className="text-lg sm:text-xl">🟢</span> Preannounced launch for humans, not the usual
//                     fuvirtuals.io bot-fest. Fastest graduation in history. Tokenomics that aren&apos;t greedy: DAO 30%,
//                     operational funds 5.25%, team splitting 14.5%.
//                   </li>
//                   <li>
//                     <span className="text-lg sm:text-xl">🟢</span> Just go to our Telegram, and it will be clear.
//                     Anything we do, the community knows. When the DAO takes over, we&apos;ll maintain high standards by
//                     creating a constitution. We already have a stakers&apos; chat where decisions are taken.
//                   </li>
//                   <li>
//                     <span className="text-lg sm:text-xl">🟢</span> The DAO is already rich:{" "}
//                     <a
//                       href="https://x.com/TrulyADog/status/1866198160252543321"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-green-500 hover:underline"
//                     >
//                       Proof
//                     </a>{" "}
//                     (old news; we now have more with the equivalent of 100 million $PAWSY).
//                   </li>
//                   <li>
//                     <span className="text-lg sm:text-xl">🟢</span> Open-source:{" "}
//                     <a
//                       href="https://github.com/bark-ruffalo"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-green-500 hover:underline"
//                     >
//                       GitHub
//                     </a>
//                     .
//                   </li>
//                   <li>
//                     <span className="text-lg sm:text-xl">🟢</span> All payments are accounted for, though we plan not to
//                     spend any $PAWSY until the market cap passes $9 million.
//                   </li>
//                 </ol>
//               </li>

//               <li>
//                 <span className="text-lg sm:text-xl">🧠</span> Not just dreams: our AI Agents are actually intelligent:
//                 <ol className="list-none pl-2 sm:pl-4 mt-3 sm:mt-4 space-y-2">
//                   <li>
//                     <span className="text-lg sm:text-xl">🟠</span>{" "}
//                     <a
//                       href="https://x.com/TrulyADog/status/1867492287296811286"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-green-500 hover:underline"
//                     >
//                       See Example 1
//                     </a>
//                   </li>
//                   <li>
//                     <span className="text-lg sm:text-xl">🟠</span>{" "}
//                     <a
//                       href="https://x.com/TrulyADog/status/1864086810206310571"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-green-500 hover:underline"
//                     >
//                       See Example 2
//                     </a>
//                   </li>
//                   <li>
//                     <span className="text-lg sm:text-xl">🟠</span>{" "}
//                     <a
//                       href="https://x.com/TrulyADog/status/1869366748039799234"
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="text-green-500 hover:underline"
//                     >
//                       See Example 3
//                     </a>
//                   </li>
//                 </ol>
//               </li>

//               <li>
//                 <span className="text-lg sm:text-xl">💼</span> The team members have already been financially
//                 independent for more than 5 years. We know how to succeed, which is important in the long term.
//               </li>

//               <li>
//                 <span className="text-lg sm:text-xl">🎁</span> Token-gated channels and goodies for stakers. Those who
//                 also provide liquidity are highly valued.
//               </li>

//               <li>
//                 <span className="text-lg sm:text-xl">🛠️</span> Not dependent on Virtuals Protocol for success.
//                 We&apos;re slowly moving away through $mPAWSY.
//               </li>

//               <li>
//                 <span className="text-lg sm:text-xl">💰</span> Since our objective is to make our stakers financially
//                 independent, we provide income rounds to stakers from time to time. The first one was $30k worth!
//               </li>

//               <li>
//                 <span className="text-lg sm:text-xl">🤣</span> Memes. Graphics. Laughs.
//               </li>
//             </ol>
//             <p className="mt-6 sm:mt-8 text-sm sm:text-base">
//               See our footprint 🐾 by checking out our Linktree:{" "}
//               <a
//                 href="https://linktr.ee/TrulyADog"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-green-500 hover:underline"
//               >
//                 linktr.ee/TrulyADog
//               </a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
