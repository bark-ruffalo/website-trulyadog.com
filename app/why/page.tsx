import Link from "next/link";

export default function Why() {
  // Create stats cards data in the same format as staking
  const statsCards = [
    {
      title: "DAO ALLOCATION",
      value: "30%",
      className: "green",
    },
    {
      title: "OPERATIONAL FUNDS",
      value: "5.25%",
      className: "green",
    },
    {
      title: "TEAM FUNDS",
      value: "14.5%",
      className: "green",
    },
  ];

  return (
    <div className="min-h-screen from-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-base-100 dark:bg-base-300">
      <div className="max-w-7xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h1 className="text-4xl font-bold text-center mb-12 text-base-content dark:text-white">Why $PAWSY?</h1>

          {/* Stats Cards - Updated to match staking style */}
          <div className="flex items-center justify-center w-full flex-nowrap mb-12">
            {statsCards.map((card, index) => (
              <div
                key={index}
                className="flex flex-col justify-between items-start p-6 min-h-[120px] w-[300px] m-2 relative bg-base-200 dark:bg-white dark:bg-opacity-10 rounded-2xl shadow-md flex-shrink-0 sm:w-[350px] md:w-[450px]"
              >
                <div
                  className={`absolute inset-0 rounded-2xl z-0 ${card.className === "green" ? "bg-green-500" : "bg-blue-500"} bg-opacity-10 dark:bg-opacity-20 blur-sm`}
                ></div>
                <div className="relative z-10 text-base-content dark:text-white">
                  <div className="text-sm font-semibold uppercase mb-1 leading-4">{card.title}</div>
                  <div className="text-2xl font-light leading-4 pt-6">{card.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Main content box - Updated to match staking style */}
          <div className="p-8 bg-base-200 dark:bg-white bg-opacity-90 dark:bg-opacity-10 rounded-2xl relative">
            <div className="absolute inset-0 rounded-2xl z-0 bg-blue-500 bg-opacity-10 dark:bg-opacity-20 blur-sm"></div>
            <div className="relative z-10 text-base-content dark:text-white">
              <ol className="space-y-8 list-decimal pl-4">
                <li>
                  We are creating an ecosystem and a community focused on making money. Employing AI agents for this
                  purpose will be a primary objective, but we will do it all! Bark Ruffalo will be their top 🐶. Never
                  mention to him that he looks like a 🐈!
                </li>

                <li>
                  Transparency:
                  <ol className="list-[lower-alpha] pl-4 mt-4 space-y-2">
                    <li>
                      Preannounced launch for humans, not the usual fun.virtuals.io bot-fest. Fastest graduation in
                      history. Tokenomics that aren't greedy: DAO 30%, operational funds 5.25%, team splitting 14.5%.
                    </li>
                    <li>
                      Just go to our Telegram, and it will be clear. Anything we do, the community knows. When the DAO
                      takes over, we'll maintain high standards by creating a constitution.
                    </li>
                    <li>
                      The DAO is already rich:{" "}
                      <a
                        href="https://x.com/TrulyADog/status/1866198160252543321"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        https://x.com/TrulyADog/status/1866198160252543321
                      </a>
                    </li>
                    <li>
                      Open-source:{" "}
                      <a
                        href="https://github.com/bark-ruffalo"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        https://github.com/bark-ruffalo
                      </a>
                    </li>
                    <li>
                      All payments are accounted for, though we plan not to spend any $PAWSY until the market cap passes
                      $9 million.
                    </li>
                  </ol>
                </li>

                <li>
                  Not just dreams: our AI Agents are actually intelligent. Examples:
                  <ol className="list-[lower-alpha] pl-4 mt-4 space-y-2">
                    <li>
                      <a
                        href="https://x.com/TrulyADog/status/1867492287296811286"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        https://x.com/TrulyADog/status/1867492287296811286
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://x.com/TrulyADog/status/1864086810206310571"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-indigo-600 dark:text-indigo-400 hover:underline"
                      >
                        https://x.com/TrulyADog/status/1864086810206310571
                      </a>
                    </li>
                  </ol>
                </li>

                <li>
                  The team members have already been financially independent for more than 5 years. We know how to
                  succeed, which is more important in the long term than knowing the photo format for Instagram, which
                  is the main strength of our competition.
                </li>

                <li>
                  Token-gated channels and goodies for stakers. Those who also provide liquidity are highly valued.
                </li>

                <li>Not dependent on Virtuals Protocol for success. We're slowly moving away through $mPAWSY.</li>

                <li>Memes. Graphics. Laughs.</li>

                <li>
                  See our footprint 🐾 by checking out our Linktree:{" "}
                  <a
                    href="https://linktr.ee/TrulyADog"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    linktr.ee/TrulyADog
                  </a>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
