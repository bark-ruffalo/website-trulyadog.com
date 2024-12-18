"use client";

import { Migrate } from "./_components/Migrate";
import type { NextPage } from "next";

const Migration: NextPage = () => {
  return (
    <div className="flex items-center flex-col flex-grow">
      <div className="flex-grow bg-base-100 dark:bg-base-300 w-full px-2 sm:px-8 py-6 sm:py-12">
        <div className="flex w-full justify-center items-center gap-6 sm:gap-12 flex-col">
          <div className="w-full max-w-[95%] sm:max-w-[75%] relative">
            <h1 className="text-3xl sm:text-4xl font-bold text-center mb-6 sm:mb-8 text-base-content dark:text-white">
              Migrate to $mPAWSY!
            </h1>

            <Migrate />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Migration;
