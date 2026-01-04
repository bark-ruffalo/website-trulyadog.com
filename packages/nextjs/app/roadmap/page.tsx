import Link from "next/link";
import type { NextPage } from "next";

const Roadmap: NextPage = () => {
  return (
    <div className="flex items-center justify-center flex-col flex-grow pt-10">
      <div className="px-5 w-full max-w-4xl text-center">
        <h1 className="text-4xl font-bold mb-6">This project has been sunset.</h1>
        <Link href="/" className="text-blue-500 hover:text-blue-600 underline text-lg">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default Roadmap;
