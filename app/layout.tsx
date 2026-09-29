import type { Metadata } from "next";
import { Source_Sans_3, Source_Serif_4, Playfair_Display, Hahmlet, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SiteAnalytics from "@/components/SiteAnalytics";
import ChromeGate from "@/components/ChromeGate";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});

// 영문 디스플레이 (섹션명·페이지명·영문 기사 제목)
const sourceSerif = Source_Serif_4({
  weight: ["500", "600"],
  subsets: ["latin"],
  variable: "--font-latin-serif",
});

// 한글 제목: Noto Serif KR / 한글 본문: Hahmlet (Playfair는 로고 "D." 전용)
const notoSerif = Noto_Serif_KR({ subsets: ["latin"], variable: "--font-noto-serif" });
const hahmlet = Hahmlet({ subsets: ["latin"], variable: "--font-hahmlet" });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_NAME,
  description: SITE_DESCRIPTION,
  alternates: { types: { "application/rss+xml": [{ url: "/rss.xml", title: SITE_NAME }] } },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${sourceSans.variable} ${playfair.variable} ${sourceSerif.variable} ${hahmlet.variable} ${notoSerif.variable}`} suppressHydrationWarning>
      <body
        className={`flex flex-col min-h-screen bg-white`}
        suppressHydrationWarning
      >
        <div className="flex-grow w-full max-w-[1440px] mx-auto bg-[#FBFBFA] shadow-[0_0_50px_rgba(0,0,0,0.02)] min-h-screen flex flex-col relative border-x border-gray-100/30">
            <a href="#main" className="skip-link">본문으로 건너뛰기</a>
            <ChromeGate><Navbar /></ChromeGate>
            <main id="main" tabIndex={-1} className="flex-grow outline-none">
            {children}
            </main>
            <ChromeGate><Footer /></ChromeGate>
        </div>
        <SiteAnalytics />
      </body>
    </html>
  );
}