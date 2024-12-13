import Link from "next/link";

export default function Why() {
  return (
    <div className="min-h-screen from-gray-50 py-12 px-4 sm:px-6 lg:px-8 bg-base-100 dark:bg-base-300">
      <div className="max-w-7xl mx-auto">
        <div className="prose dark:prose-invert max-w-none mb-12">
          <h1 className="text-4xl font-bold text-center mb-12">Why $PAWSY?</h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">30%</h3>
              <p className="text-gray-600 dark:text-gray-300">DAO Allocation</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">$9M</h3>
              <p className="text-gray-600 dark:text-gray-300">Target Market Cap</p>
            </div>
            <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transform hover:scale-105 transition-transform duration-200">
              <h3 className="text-2xl font-semibold text-indigo-600 dark:text-indigo-400 mb-2">5+ Years</h3>
              <p className="text-gray-600 dark:text-gray-300">Team Experience</p>
            </div>
          </div>

          {/* Main content with enhanced styling */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
            <ol className="space-y-8 list-decimal pl-4 text-gray-800 dark:text-gray-200">
              <li>
                We are creating an ecosystem and a community focused on making money. Employing AI agents for this
                purpose will be a primary objective, but we will do it all! Bark Ruffalo will be their top 🐕. Never
                mention to him that he looks like a 🐕!
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
                succeed, which is more important in the long term than knowing the photo format for Instagram, which is
                the main strength of our competition.
              </li>

              <li>Token-gated channels and goodies for stakers. Those who also provide liquidity are highly valued.</li>

              <li>Not dependent on Virtuals Protocol for success. We're slowly moving away through $mPAWSY.</li>

              <li>Memes. Graphics. Laughs.</li>
            </ol>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <div className="bg-gradient-to-br from-purple-500 to-indigo-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Staking Rewards</h3>
              <p className="mb-4">Earn passive income by staking your $PAWSY tokens</p>
              <Link
                href="/staking"
                className="bg-white text-indigo-600 px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Start Staking
              </Link>
            </div>
            <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Liquidity Providers</h3>
              <p className="mb-4">Special benefits for LP token holders</p>
              <Link
                href="https://app.uniswap.org/explore/tokens/base/0x29e39327b5b1e500b87fc0fcae3856cd8f96ed2a"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-rose-600 px-4 py-2 rounded-lg font-semibold hover:bg-opacity-90 transition-colors"
              >
                Provide Liquidity
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
