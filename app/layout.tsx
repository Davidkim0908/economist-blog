import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display, Noto_Sans_KR, Nanum_Pen_Script } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});
// 제목·본문 서체 (한글). Playfair는 로고 "D."·워드마크 전용
const notoSansKr = Noto_Sans_KR({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-noto-sans",
});

// Red-pen handwriting — used only for the author's marks on the home proof sheet
const penScript = Nanum_Pen_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-pen-script",
  preload: false,
});

export const metadata: Metadata = {
  title: "David's Notes",
  description: "경제학자 김동영의 블로그 — AI 전환, 모빌리티, 경제사, 그리고 책.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${sourceSans.variable} ${playfair.variable} ${notoSansKr.variable} ${penScript.variable}`} suppressHydrationWarning>
      <body
        className={`flex flex-col min-h-screen bg-white`}
        suppressHydrationWarning
      >
        <div className="flex-grow w-full max-w-[1440px] mx-auto bg-[#FBFBFA] shadow-[0_0_50px_rgba(0,0,0,0.02)] min-h-screen flex flex-col relative border-x border-gray-100/30">
            <a href="#main" className="skip-link">본문으로 건너뛰기</a>
            <Navbar />
            <main id="main" tabIndex={-1} className="flex-grow outline-none">
            {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}