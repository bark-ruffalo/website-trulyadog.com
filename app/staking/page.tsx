"use client";

import { Statistics } from "./_components/Statistics/Statistics";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <>
      <div className="flex items-center flex-col flex-grow">
        <div className="flex-grow bg-base-300 w-full px-8 py-12">
          <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
            <Statistics />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
