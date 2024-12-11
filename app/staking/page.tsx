"use client";

import { Purchase } from "./_components/Purchase";
import { Statistics } from "./_components/Statistics";
import type { NextPage } from "next";

const Staking: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <div className="flex-grow bg-base-300 w-full px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <Statistics />
          </div>
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row mt-10">
            <Purchase />
          </div>
        </div>
      </div>
    </>
  );
};

export default Staking;
