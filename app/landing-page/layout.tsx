import { Inter } from "next/font/google";
import "../globals.css";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Free Aptitude Test — Kunal Academy",
  description: "Register for Kunal Academy's free aptitude test and discover your academic strengths.",
};

// Standalone layout for landing page — no Navbar, Footer, or floating CTAs
export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-[#0B0F2E] text-slate-300 antialiased">
        {children}
      </body>
    </html>
  );
}
