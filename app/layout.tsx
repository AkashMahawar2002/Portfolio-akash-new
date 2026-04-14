import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import type { PropsWithChildren } from "react";

import { siteConfig } from "@/config";
import { CursorGradient } from "@/components/ui/cursor-gradient";

import { ThemeProvider } from "./provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["600", "700", "800"],
});

export const viewport: Viewport = {
  themeColor: "#000319",
  colorScheme: "dark",
};

export const metadata: Metadata = siteConfig;

const RootLayout = ({ children }: Readonly<PropsWithChildren>) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="dark" forcedTheme="dark">
          <CursorGradient />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
