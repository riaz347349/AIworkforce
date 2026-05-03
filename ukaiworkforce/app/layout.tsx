import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-dm-sans",
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
    <html lang="en" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
