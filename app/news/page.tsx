'use client';

import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp, Newspaper } from "lucide-react";
import { useState } from "react";
import { newsItems } from "@/lib/news";

export default function NewsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Premium Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gray-200" />
                <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Media & Coverage</span>
                <div className="h-[1px] w-12 bg-gray-200" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 text-gray-900 tracking-tighter">
                In the News
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto break-keep">
                언론을 통해 전해진 경제학자 김동영의 분석과 전망, <br/>
                주요 산업 이슈에 대한 전문적인 코멘터리를 모았습니다.
            </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl overflow-hidden ${expandedId === index ? 'ring-1 ring-primary/20' : ''}`}
            >
              {/* Item Header (Always Visible) */}
              <div 
                className="p-8 md:p-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">{item.media}</span>
                    <span className="text-gray-300 text-[10px]">•</span>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-black text-gray-900 leading-tight group-hover:text-primary transition-colors tracking-tight break-keep">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                        {expandedId === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>
              </div>

              {/* Core Summary (Always Visible or part of transition) */}
              <div className="px-8 md:px-10 pb-8 border-t border-gray-50 pt-8 bg-gray-50/30">
                 <p className="text-gray-600 leading-relaxed font-light break-keep">
                    {item.coreSummary}
                 </p>
              </div>

              {/* Expandable Content */}
              {expandedId === index && (
                <div className="px-8 md:px-10 pb-10 space-y-10 animate-in fade-in slide-in-from-top-4 duration-500">
                  {item.quote && (
                    <div className="pt-8 border-t border-gray-100">
                        <div className="flex items-center gap-4 mb-8">
                            <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-xl ring-2 ring-primary/20">
                                <img src="/reading-book-clean.jpg" alt="David Kim" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <h4 className="text-xs font-black uppercase tracking-widest text-gray-900 leading-none">David Kim&apos;s Perspective</h4>
                            </div>
                        </div>
                        <div className="relative p-10 md:p-14 bg-primary/[0.02] rounded-[3rem] border border-primary/5 italic shadow-inner">
                            <div className="absolute top-8 left-8 text-primary/5">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="currentColor"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 7.34315 11.3601 6 13.017 6H19.017C20.6738 6 22.017 7.34315 22.017 9V15C22.017 16.6569 20.6738 18 19.017 18H17.017C16.4647 18 16.017 18.4477 16.017 19V21H14.017ZM5.017 21L5.017 18C5.017 16.8954 5.91243 16 7.017 16H10.017C10.5693 16 11.017 15.5523 11.017 15V9C11.017 8.44772 10.5693 8 10.017 8H6.017C5.46472 8 5.017 8.44772 5.017 9V12C5.017 12.5523 4.56929 13 4.017 13H2.017C1.46472 13 1.017 12.5523 1.017 12V9C1.017 7.34315 2.36015 6 4.017 6H10.017C11.6738 6 13.017 7.34315 13.017 9V15C13.017 16.6569 11.6738 18 10.017 18H8.017C7.46472 18 7.017 18.4477 7.017 19V21H5.017Z" /></svg>
                            </div>
                            <div className="relative z-10 text-xl md:text-3xl font-serif text-gray-800 leading-[1.6] break-keep">
                                {item.quote}
                                <div className="inline-flex items-baseline ml-3 translate-y-0.5">
                                    <div className="w-5 h-5 border border-gray-900 flex items-center justify-center bg-white shadow-sm ring-1 ring-gray-900/5">
                                        <span className="font-serif font-black text-[10px] leading-none text-gray-900">D</span>
                                        <span className="text-primary font-black text-[10px] leading-none">.</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-10 pt-8 border-t border-primary/10 flex justify-end">
                                <p className="font-serif font-black text-xl text-gray-900 tracking-tighter italic">David Kim</p>
                            </div>
                        </div>
                    </div>
                  )}

                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Context & Summary</h4>
                    <p className="text-gray-600 leading-[1.8] font-light break-keep">
                        {item.fullSummary}
                    </p>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-primary hover:border-primary transition-all"
                    >
                      Read Original Article <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
