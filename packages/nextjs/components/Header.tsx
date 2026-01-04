"use client";

import Image from "next/image";
import Link from "next/link";

/**
 * Site header (Sunset version - minimal)
 */
export const Header = () => {
  return (
    <div className="sticky 2xl:static top-0 navbar bg-base-100 min-h-0 flex-shrink-0 justify-between z-20 shadow-md shadow-secondary px-0 sm:px-2">
      <div className="navbar-start w-auto 2xl:w-1/2">
        <Link href="/" passHref className="flex items-center gap-2 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="Bark Ruffalo logo" className="cursor-pointer" fill sizes="200px" src="/200x200-logo.jpg" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Bark Ruffalo</span>
            <span className="text-xs">(not a cat)</span>
          </div>
        </Link>
      </div>
      <div className="navbar-end flex-grow mr-4">{/* Wallet connect buttons removed - project sunset */}</div>
    </div>
  );
};
