"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Toaster } from "react-hot-toast";
import { Footer } from "~~/components/Footer";
import { Header } from "~~/components/Header";

/**
 * Simplified app wrapper for sunset project (no wallet providers needed)
 */
export const ScaffoldEthAppWithProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <ProgressBar height="3px" color="#2299dd" />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="relative flex flex-col flex-1">{children}</main>
        <Footer />
      </div>
      <Toaster />
    </>
  );
};
