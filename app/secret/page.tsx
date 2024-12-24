"use client";
import { useAccount } from "wagmi";
import { useActiveStakedBalance } from "~~/hooks/useActiveStakedBalance";

const SecretPage = () => {
  const { address } = useAccount();
  const { activeStakedBalance } = useActiveStakedBalance(address); 


  if (activeStakedBalance >= 5000) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <h1 className="text-3xl font-bold">You found the secret page!</h1>
        <p className="mt-4 text-lg">
          Head over to <a href="https://guild.xyz/bark-ruffalo" target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">https://guild.xyz/bark-ruffalo</a> to get your staking-gated access, and any other goodies might be available.
        </p>
        <p className="mt-4 text-lg">
          If you have trouble with the process, contact the Guild team (the live chat form is at the bottom right).
        </p>
      </div>
    );
  }


};

export default SecretPage;
