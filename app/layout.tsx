import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arbab Mustafa - Social Media Hub",
  description:
    "Connect with Arbab Mustafa, Software Engineer & FullStack Developer from Islamabad, Pakistan. Follow my journey on YouTube, Instagram, Facebook, TikTok, Twitter/X, and LinkedIn.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
