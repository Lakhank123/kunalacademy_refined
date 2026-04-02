import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import MobileStickyBar from "@/components/MobileStickyBar";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Kunal Academy — #1 Science Coaching in Ulhasnagar | IIT-JEE, NEET, MH-CET",
  description:
    "Best science coaching institute in Ulhasnagar since 2018. IIT-JEE, NEET, MH-CET, Class 8–12. 1000+ successful students, 100% JEE & NEET qualification rate. Book a free demo lecture today.",
  keywords:
    "coaching in Ulhasnagar, NEET coaching Ulhasnagar, IIT-JEE coaching Kalyan Ambernath, science classes Ulhasnagar, Kunal Academy",
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="bg-white text-[#0D1760] font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <FloatingWhatsApp />
        <MobileStickyBar />
      </body>
    </html>
  );
}

