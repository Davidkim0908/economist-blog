'use client';

import Link from "next/link";
import { Menu, Search as SearchIcon, Brain, CarFront, TrendingUp, X } from "lucide-react";
import Search from "@/components/Search";
import { useState } from "react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-[#FBFBFA] sticky top-0 z-50">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left: Brand / Logo - Hybrid Style (Original Colors) */}
          <div className="flex items-center h-full z-50 relative">
            <Link href="/" className="flex items-center gap-4 group h-full">
              {/* Symbol */}
              <div className="w-11 h-11 border-2 border-gray-900 flex items-center justify-center group-hover:bg-gray-900 group-hover:text-white transition-all duration-300 shadow-sm bg-white">
                <div className="flex items-baseline">
                    <span className="font-serif font-black text-xl leading-none text-gray-900 group-hover:text-white transition-colors">D</span>
                    <span className="text-primary font-black text-lg leading-none">.</span>
                </div>
              </div>
              
              {/* Text */}
              <div className="flex flex-col justify-center h-full py-4">
                <span className="font-serif font-black text-lg tracking-tight text-gray-900 leading-none uppercase">
                  David&apos;s
                </span>
                <div className="h-[1px] w-full bg-gray-200 my-0.5 group-hover:bg-primary transition-colors" />
                <div className="flex items-baseline w-full">
                    <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 leading-none flex-grow flex justify-between mr-0.5">
                    <span>N</span><span>O</span><span>T</span><span>E</span><span>S</span>
                    </span>
                    <span className="text-primary font-black text-[10px] leading-none">.</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Center: Navigation Links (Expanded Black Pill Box) */}
          <div className="hidden lg:flex items-center justify-center flex-grow px-4">
            <div className="bg-black text-white w-full max-w-6xl py-2 px-10 rounded-full flex items-center justify-center space-x-10 shadow-lg">
                
                {/* 1. Meet David Dropdown */}
                <div className="relative group flex items-center h-full">
                  <button className="text-sm font-bold tracking-widest hover:text-primary transition-colors flex items-center gap-1 py-1">
                    Meet David
                  </button>
                  {/* Mega Menu Panel */}
                  <div className="fixed left-0 top-20 w-full bg-white border-t border-gray-100 shadow-2xl py-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] text-gray-900">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-12 gap-12">
                            {/* Column 1: Title & Intro */}
                            <div className="col-span-3 border-r border-gray-100 pr-8">
                                <h3 className="font-serif font-black text-3xl mb-4 text-gray-900">Meet David</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    경제학자의 시선으로 기술과 사회의 접점을 탐구합니다.<br/>
                                    데이터 뒤에 숨겨진 맥락을 읽어내고, 더 나은 미래를 위한 이정표를 제시합니다.
                                </p>
                                <Link href="/about" className="text-primary font-bold text-sm hover:underline">
                                    View Full Profile &rarr;
                                </Link>
                            </div>

                            {/* Column 2: Navigation Links */}
                            <div className="col-span-5 grid grid-cols-2 gap-6">
                                <Link href="/about" className="group/link block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="font-bold text-gray-900 mb-1 group-hover/link:text-primary">About David</div>
                                    <div className="text-xs text-gray-500">경제학자 김동영의 여정과 철학</div>
                                </Link>
                                <Link href="/videos" className="group/link block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="font-bold text-gray-900 mb-1 group-hover/link:text-primary">Videos</div>
                                    <div className="text-xs text-gray-500">방송 출연 및 강연 영상 아카이브</div>
                                </Link>
                                <Link href="/news" className="group/link block p-4 rounded-lg hover:bg-gray-50 transition-colors">
                                    <div className="font-bold text-gray-900 mb-1 group-hover/link:text-primary">In the News</div>
                                    <div className="text-xs text-gray-500">언론에 소개된 칼럼과 인터뷰</div>
                                </Link>
                            </div>

                            {/* Column 3: Featured Image / Highlight */}
                            <div className="col-span-4 bg-gray-50 rounded-xl overflow-hidden relative h-64 group/card border border-gray-100 flex items-center justify-center">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img 
                                    src="/images/reading-book.jpg" 
                                    alt="David Kim Reading" 
                                    className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover/card:scale-105"
                                />
                                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/60 via-black/10 to-transparent p-6">
                                    <div className="text-white font-serif font-bold text-lg">Deep Dive into Context</div>
                                    <div className="text-white/90 text-xs font-bold uppercase tracking-widest">Scholar & Strategist</div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                {/* 2. Focus Dropdown */}
                <div className="relative group flex items-center h-full">
                  <button className="text-sm font-bold tracking-widest hover:text-primary transition-colors flex items-center gap-1 py-1">
                    Focus
                  </button>
                  {/* Mega Menu Panel */}
                  <div className="fixed left-0 top-20 w-full bg-white border-t border-gray-100 shadow-2xl py-12 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[60] text-gray-900">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-12 gap-8">
                            {/* Header */}
                            <div className="col-span-3 border-r border-gray-100 pr-8">
                                <h3 className="font-serif font-black text-3xl mb-4 text-gray-900">Key Topics</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    3가지 핵심 테마를 통해<br/>미래 경제의 지형도를 그려봅니다.
                                </p>
                            </div>

                            {/* Topics */}
                            <div className="col-span-9 grid grid-cols-3 gap-8">
                                {/* AT */}
                                <Link href="/topics/digital-transformation" className="group/topic block">
                                    <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center group-hover/topic:bg-primary/5 transition-colors">
                                        <Brain className="w-12 h-12 text-gray-400 group-hover/topic:text-primary transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black text-primary tracking-widest uppercase">AT</span>
                                        <h4 className="font-bold text-lg text-gray-900 group-hover/topic:text-primary transition-colors">AI Transformation</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        인공지능이 바꾸는 산업의 구조와 노동의 미래를 분석합니다.
                                    </p>
                                </Link>

                                {/* MT */}
                                <Link href="/topics/mobility" className="group/topic block">
                                    <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center group-hover/topic:bg-primary/5 transition-colors">
                                        <CarFront className="w-12 h-12 text-gray-400 group-hover/topic:text-primary transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black text-primary tracking-widest uppercase">MT</span>
                                        <h4 className="font-bold text-lg text-gray-900 group-hover/topic:text-primary transition-colors">Mobility Transformation</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        자율주행과 전기차가 가져올 이동의 혁명과 경제적 파급효과.
                                    </p>
                                </Link>

                                {/* GT */}
                                <Link href="/topics/history" className="group/topic block">
                                    <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center group-hover/topic:bg-primary/5 transition-colors">
                                        <TrendingUp className="w-12 h-12 text-gray-400 group-hover/topic:text-primary transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black text-primary tracking-widest uppercase">GT</span>
                                        <h4 className="font-bold text-lg text-gray-900 group-hover/topic:text-primary transition-colors">Growth Trajectory</h4>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">
                                        과거의 성장 궤적에서 미래의 해법을 찾는 경제사 탐구.
                                    </p>
                                </Link>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                {/* 3. Books */}
                <Link href="/books" className="text-sm font-bold tracking-widest hover:text-primary transition-colors py-1">
                  Books
                </Link>

                {/* 4. On My Desk */}
                <Link href="/desk" className="text-sm font-bold tracking-widest hover:text-primary transition-colors py-1">
                  On My Desk
                </Link>
            </div>
          </div>

          {/* Right: Search & User Icons (Original Colors) */}
          <div className="flex items-center space-x-6 text-gray-900 z-50 relative">
            <div className="hidden sm:block hover:text-primary transition-colors cursor-pointer">
                <Search />
            </div>
            <button 
                className="lg:hidden p-2 hover:bg-gray-100 rounded-full transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-6 py-32 flex flex-col space-y-8">
            <div className="border-b border-gray-100 pb-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Meet David</h4>
                <Link href="/about" className="block text-2xl font-serif font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/videos" className="block text-2xl font-serif font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Videos</Link>
                <Link href="/news" className="block text-2xl font-serif font-bold text-gray-900 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>In the News</Link>
            </div>

            <div className="border-b border-gray-100 pb-4">
                <h4 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Focus</h4>
                <Link href="/topics/digital-transformation" className="block text-xl font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>AI Transformation</Link>
                <Link href="/topics/mobility" className="block text-xl font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Mobility Transformation</Link>
                <Link href="/topics/history" className="block text-xl font-bold text-gray-900 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Growth Trajectory</Link>
            </div>

            <div className="flex flex-col space-y-4">
                <Link href="/books" className="text-2xl font-serif font-bold text-gray-900 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Books</Link>
                <Link href="/desk" className="text-2xl font-serif font-bold text-gray-900 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>On My Desk</Link>
            </div>
        </div>
      </div>
    </header>
  );
}
