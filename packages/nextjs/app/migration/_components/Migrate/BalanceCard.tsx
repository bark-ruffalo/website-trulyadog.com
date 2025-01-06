import Image from "next/image";
import { Address } from "~~/components/scaffold-eth";

interface BalanceCardProps {
  title: string;
  balance: string;
  tokenAddress?: string;
  onAddToMetamask?: () => void;
}

const BalanceCard = ({ title, balance, tokenAddress, onAddToMetamask }: BalanceCardProps) => {
  return (
    <div className="flex-1 bg-black bg-opacity-25 rounded-lg p-4 sm:p-6 hover:bg-opacity-30 transition-all duration-200">
      <div className="flex flex-col gap-3 sm:gap-4">
        <h3 className="text-white text-base sm:text-lg font-medium">{title}</h3>
        <p className="text-2xl sm:text-3xl text-white font-bold">{balance}</p>

        {tokenAddress && (
          <>
            <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-gray-700">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 dark:text-gray-400">
                <span>Token:</span>
                <Address address={tokenAddress} />
              </div>
            </div>
            <div className="flex items-center justify-between mt-auto pt-3 sm:pt-4 border-gray-700">
              {onAddToMetamask && (
                <button
                  onClick={onAddToMetamask}
                  className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm bg-gradient-to-r from-[#1976d2] to-[#64b5f6] hover:from-[#1565c0] hover:to-[#42a5f5] text-white rounded-lg transition-all duration-200 flex items-center gap-2 shadow-lg"
                >
                  <Image src="/metamask-fox.svg" alt="MetaMask" width={20} height={20} className="w-5 sm:w-6" />
                  Add to MetaMask
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default BalanceCard;
