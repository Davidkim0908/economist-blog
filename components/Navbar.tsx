'use client';

import Image from "next/image";
import Link from "next/link";
import { Menu, Brain, CarFront, TrendingUp, X } from "lucide-react";
import Search from "@/components/Search";
import { SHOW_JOIN } from "@/lib/site";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<null | 'david' | 'focus'>(null);
  const menuButtons = useRef<Record<string, HTMLButtonElement | null>>({});
  const pathname = usePathname();
  const isHome = pathname === '/';

  // 페이지 이동 시 열린 메뉴 닫기
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpenMenu(null);
    setIsMobileMenuOpen(false);
  }

  // Escape: 열린 메가메뉴/모바일 메뉴 닫고 포커스를 트리거로 되돌림
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return;
      if (openMenu) {
        menuButtons.current[openMenu]?.focus();
        setOpenMenu(null);
      }
      setIsMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [openMenu]);

  // 메가메뉴 트리거/패널 공통 속성 (hover는 CSS, 클릭·키보드는 state)
  const trigger = (id: 'david' | 'focus') => ({
    ref: (el: HTMLButtonElement | null) => { menuButtons.current[id] = el; },
    type: 'button' as const,
    'aria-expanded': openMenu === id,
    'aria-controls': `mega-${id}`,
    onClick: () => setOpenMenu(openMenu === id ? null : id),
  });
  const panelClass = (id: 'david' | 'focus') =>
    `fixed left-0 top-[80px] md:top-[96px] w-full bg-white border-t border-gray-100 shadow-2xl py-12 transition-all duration-300 z-[60] text-gray-900 ${openMenu === id ? 'opacity-100 visible' : 'opacity-0 invisible group-hover:opacity-100 group-hover:visible'}`;
  const closeOnBlur = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpenMenu(null);
  };

  // 스크롤 감지 로직
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 메인 페이지일 때와 아닐 때의 스타일 구분
  // 홈은 교정지(paper) 바탕 위에 놓인다
  // 사진 히어로 위에 투명하게 뜨는 경로 (Gates Notes 풍 시안)
  const overHero = pathname === '/preview/gatesnotes' && !isScrolled;
  const navbarBgClass = overHero
    ? 'bg-transparent'
    : isHome
    ? `bg-[#E8E9E8] border-b border-[#BEBEB6] ${isScrolled ? 'shadow-sm' : ''}`
    : 'bg-[#FBFBFA] border-b border-gray-100';

  const textColorClass = overHero ? 'text-white' : 'text-gray-900';
  const logoColorClass = overHero ? 'border-white text-white' : 'border-gray-900 text-gray-900';

  return (
    <header className={`w-full fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${navbarBgClass}`}>
      <nav className="container mx-auto px-4 lg:px-8 max-w-[1440px]">
        <div className="flex items-center justify-between h-20 md:h-24">
          
          {/* Left: Brand / Logo */}
          <div className="flex items-center h-full z-50 relative">
            <Link href="/" className="flex items-center gap-4 group h-full">
              {/* Symbol */}
              <div className={`w-10 h-10 md:w-11 md:h-11 border-2 flex items-center justify-center transition-all duration-300 shadow-sm ${logoColorClass} group-hover:bg-primary group-hover:border-primary group-hover:text-white bg-transparent`}>
                <div className="flex items-baseline">
                    <span className="font-serif font-black text-xl leading-none">D</span>
                    <span className="text-primary font-black text-lg leading-none">.</span>
                </div>
              </div>
              
              {/* Text */}
              <div className="flex flex-col justify-center h-full py-4">
                <span className={`font-serif font-black text-base md:text-lg tracking-tight leading-none uppercase ${textColorClass}`}>
                  David&apos;s
                </span>
                <div className={`h-[1px] w-full my-0.5 group-hover:bg-primary transition-colors ${overHero ? 'bg-white/30' : 'bg-gray-200'}`} />
                <div className="flex items-baseline w-full">
                    <span className={`font-sans text-xs md:text-xs font-black uppercase tracking-[0.2em] leading-none flex-grow flex justify-between mr-0.5 ${overHero ? 'text-white/80' : 'text-gray-500'}`}>
                    <span>N</span><span>O</span><span>T</span><span>E</span><span>S</span>
                    </span>
                    <span className="text-primary font-black text-xs leading-none">.</span>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Center: Navigation Links (Expanded Pill Box) */}
          <div className="hidden lg:flex items-center justify-center flex-grow px-4">
            <div className={`w-full max-w-5xl py-2 px-10 flex items-center justify-center space-x-10 transition-all duration-500 text-white ${isHome ? 'bg-[#16161A]' : overHero ? 'bg-black/35 rounded-full' : 'bg-black rounded-full shadow-lg'}`}>
                
                {/* 1. Meet David Dropdown */}
                <div className="relative group flex items-center h-full" onBlur={closeOnBlur}>
                  <button {...trigger('david')} className={`text-sm font-bold tracking-tight hover:text-primary transition-colors flex items-center gap-1 py-1 text-white`}>
                    Meet David
                  </button>
                  {/* Mega Menu Panel */}
                  <div id="mega-david" className={panelClass('david')}>
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-12 gap-12">
                            <div className="col-span-3 border-r border-gray-100 pr-8">
                                <p className="font-serif font-black text-3xl mb-4 text-gray-900">Meet David</p>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                                    경제학자의 시선으로 기술과 사회의 접점을 탐구합니다.<br/>
                                    데이터 뒤에 숨겨진 맥락을 읽어내고, 더 나은 미래를 위한 이정표를 제시합니다.
                                </p>
                                <Link href="/about" className="text-primary font-bold text-sm hover:underline">
                                    View Full Profile &rarr;
                                </Link>
                            </div>
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
                            <div className="col-span-4 bg-gray-50 rounded-xl overflow-hidden relative h-64 group/card border border-gray-100 flex items-center justify-center">
                                <Image src="/reading-book-clean.jpg" alt="David Kim Reading" fill sizes="400px" className="object-contain transition-transform duration-700 group-hover/card:scale-105" />
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
                <div className="relative group flex items-center h-full" onBlur={closeOnBlur}>
                  <button {...trigger('focus')} className={`text-sm font-bold tracking-tight hover:text-primary transition-colors flex items-center gap-1 py-1 text-white`}>
                    Focus
                  </button>
                  <div id="mega-focus" className={panelClass('focus')}>
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="grid grid-cols-12 gap-8">
                            <div className="col-span-3 border-r border-gray-100 pr-8">
                                <p className="font-serif font-black text-3xl mb-4 text-gray-900">Key Topics</p>
                                <p className="text-gray-500 text-sm leading-relaxed">
                                    3가지 핵심 테마를 통해<br/>미래 경제의 지형도를 그려봅니다.
                                </p>
                            </div>
                            <div className="col-span-9 grid grid-cols-3 gap-8">
                                <Link href="/topics/digital-transformation" className="group/topic block">
                                    <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center group-hover/topic:bg-primary/5 transition-colors">
                                        <Brain className="w-12 h-12 text-gray-500 group-hover/topic:text-primary transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black text-primary tracking-widest uppercase">AT</span>
                                        <span className="font-bold text-lg text-gray-900 group-hover/topic:text-primary transition-colors">AI Transformation</span>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">인공지능이 바꾸는 산업의 구조와 노동의 미래를 분석합니다.</p>
                                </Link>
                                <Link href="/topics/mobility" className="group/topic block">
                                    <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center group-hover/topic:bg-primary/5 transition-colors">
                                        <CarFront className="w-12 h-12 text-gray-500 group-hover/topic:text-primary transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black text-primary tracking-widest uppercase">MT</span>
                                        <span className="font-bold text-lg text-gray-900 group-hover/topic:text-primary transition-colors">Mobility Transformation</span>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">자율주행과 전기차가 가져올 이동의 혁명과 경제적 파급효과.</p>
                                </Link>
                                <Link href="/topics/history" className="group/topic block">
                                    <div className="bg-gray-50 h-40 rounded-lg mb-4 flex items-center justify-center group-hover/topic:bg-primary/5 transition-colors">
                                        <TrendingUp className="w-12 h-12 text-gray-500 group-hover/topic:text-primary transition-colors" />
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-xs font-black text-primary tracking-widest uppercase">GT</span>
                                        <span className="font-bold text-lg text-gray-900 group-hover/topic:text-primary transition-colors">Growth Trajectory</span>
                                    </div>
                                    <p className="text-xs text-gray-500 leading-relaxed">과거의 성장 궤적에서 미래의 해법을 찾는 경제사 탐구.</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>

                <Link href="/books" className={`text-sm font-bold tracking-tight hover:text-primary transition-colors py-1 text-white`}>Books</Link>
                <Link href="/desk" className={`text-sm font-bold tracking-tight hover:text-primary transition-colors py-1 text-white`}>On My Desk</Link>
            </div>
          </div>

          {/* Right: Search & Join */}
          <div className={`flex items-center space-x-4 md:space-x-6 z-50 relative transition-colors ${textColorClass}`}>
            <div className="hidden sm:block hover:text-primary transition-colors cursor-pointer">
                <Search />
            </div>
            {SHOW_JOIN && <Link href="/join" className={`hidden md:block px-6 py-2 rounded-full border text-xs font-black uppercase tracking-widest transition-all duration-300 border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white`}>
                Join
            </Link>}
            <button 
                type="button"
                aria-label={isMobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
                aria-expanded={isMobileMenuOpen}
                aria-controls="mobile-menu"
                className={`lg:hidden p-2.5 rounded-full transition-colors hover:bg-gray-100 text-gray-900`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div id="mobile-menu" inert={!isMobileMenuOpen} className={`fixed inset-0 bg-white z-40 transition-transform duration-300 lg:hidden ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="container mx-auto px-6 py-32 flex flex-col space-y-8">
            <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Meet David</p>
                <Link href="/about" className="block text-2xl font-serif font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                <Link href="/videos" className="block text-2xl font-serif font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Videos</Link>
                <Link href="/news" className="block text-2xl font-serif font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>In the News</Link>
            </div>
            <div className="border-b border-gray-100 pb-4">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Focus</p>
                <Link href="/topics/digital-transformation" className="block text-xl font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>AI Transformation</Link>
                <Link href="/topics/mobility" className="block text-xl font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Mobility Transformation</Link>
                <Link href="/topics/history" className="block text-xl font-bold text-gray-900 mb-2 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Growth Trajectory</Link>
            </div>
            <div className="flex flex-col space-y-4">
                <Link href="/books" className="text-2xl font-serif font-bold text-gray-900 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>Books</Link>
                <Link href="/desk" className="text-2xl font-serif font-bold text-gray-900 hover:text-primary" onClick={() => setIsMobileMenuOpen(false)}>On My Desk</Link>
                {SHOW_JOIN && <Link href="/join" className="text-2xl font-serif font-bold text-primary hover:text-red-800 pt-4" onClick={() => setIsMobileMenuOpen(false)}>Join the Community</Link>}
            </div>
        </div>
      </div>
    </header>
  );
}
