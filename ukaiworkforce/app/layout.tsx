import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "UKAIWorkforce — Your AI Workforce, Built for Business",
  description:
    "UK-based AI agency building custom AI agents and applications for small businesses. Save time, cut costs, make more money. From £50/month.",
  openGraph: {
    title: "UKAIWorkforce — Your AI Workforce, Built for Business",
    description:
      "We build AI agents and custom applications that automate your business. Bolton-based, UK-focused.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
