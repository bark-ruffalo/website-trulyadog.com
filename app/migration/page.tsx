"use client";

import { Migrate } from "./_components/Migrate";
import type { NextPage } from "next";

const Staking: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <div className="flex-grow bg-gray-800 w-full px-8 py-12">
          <div className="flex w-full justify-center items-center gap-12 flex-col sm:flex-row mt-10">
            <Migrate />
          </div>
        </div>
      </div>
    </>
  );
};

export default Staking;
