"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider forcedTheme="dark" attribute="class">
      {children}
    </NextThemesProvider>
  );
}
