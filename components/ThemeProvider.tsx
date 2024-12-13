"use client";

import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider forcedTheme="dark" attribute="class">
      {children}
    </NextThemesProvider>
  );
}
