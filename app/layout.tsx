import type { Metadata } from "next";
import { Source_Sans_3, Playfair_Display, Noto_Serif_KR } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sourceSans = Source_Sans_3({ subsets: ["latin"], variable: "--font-source-sans" });
const playfair = Playfair_Display({ 
  subsets: ["latin"], 
  variable: "--font-playfair" 
});
const notoSerifKr = Noto_Serif_KR({
  weight: ['400', '700', '900'],
  subsets: ["latin"],
  variable: "--font-noto-serif",
});

export const metadata: Metadata = {
  title: "David's Notes",
  description: "Insights on Economics, Digital Transformation, Mobility, and Books.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body 
        className={`${sourceSans.variable} ${playfair.variable} ${notoSerifKr.variable} flex flex-col min-h-screen bg-white`}
        suppressHydrationWarning
      >
        <div className="flex-grow w-full max-w-[1440px] mx-auto bg-[#FBFBFA] shadow-[0_0_50px_rgba(0,0,0,0.02)] min-h-screen flex flex-col relative border-x border-gray-100/30">
            <Navbar />
            <main className="flex-grow">
            {children}
            </main>
            <Footer />
        </div>
      </body>
    </html>
  );
}