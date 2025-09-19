import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Arbab Mustafa - Social Media Hub",
  description:
    "Connect with Arbab Mustafa, Software Engineer & FullStack Developer from Islamabad, Pakistan. Follow my journey on YouTube, Instagram, Facebook, TikTok, Twitter/X, and LinkedIn.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon.svg", sizes: "any", type: "image/svg+xml" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/site.webmanifest",
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
