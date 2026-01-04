import { DM_Sans } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { ScaffoldEthAppWithProviders } from "~~/components/ScaffoldEthAppWithProviders";
import { ThemeProvider } from "~~/components/ThemeProvider";
import "~~/styles/globals.css";
import { getMetadata } from "~~/utils/scaffold-eth/getMetadata";

export const metadata = getMetadata({
  title: "Bark Raffalo's trulyadog.com",
  description: "Definitely not a cat, and definitely not an AI agent.",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "700"],
  variable: "--font-dm-sans",
});

const ScaffoldEthApp = ({ children }: { children: React.ReactNode }) => {
  return (
    <html suppressHydrationWarning className={dmSans.className}>
      <body>
        <ThemeProvider>
          <ScaffoldEthAppWithProviders>{children}</ScaffoldEthAppWithProviders>
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default ScaffoldEthApp;
