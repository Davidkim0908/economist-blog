'use client';

import Link from "next/link";
import { ArrowRight, CheckCircle2, Mail, Lock, User, Sparkles, Search } from "lucide-react";
import { useState, useEffect } from "react";
import Script from "next/script";

declare global {
  interface Window {
    daum: any;
  }
}

export default function JoinPage() {
  const [interest, setInterest] = useState<string[]>([]);
  const [address, setAddress] = useState("");

  const toggleInterest = (topic: string) => {
    if (interest.includes(topic)) {
      setInterest(interest.filter(t => t !== topic));
    } else {
      setInterest([...interest, topic]);
    }
  };

  const handleAddressSearch = () => {
    if (!window.daum || !window.daum.Postcode) {
      alert("주소 서비스가 아직 준비되지 않았습니다. 잠시 후 다시 시도해 주세요.");
      return;
    }
    new window.daum.Postcode({
      oncomplete: function(data: any) {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
          if (data.bname !== "") extraAddress += data.bname;
          if (data.buildingName !== "") extraAddress += extraAddress !== "" ? `, ${data.buildingName}` : data.buildingName;
          fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }

        setAddress(fullAddress);
      },
    }).open();
  };

  const topics = [
    { id: 'at', label: 'AI Transformation', icon: '🤖' },
    { id: 'mt', label: 'Mobility Shift', icon: '🚗' },
    { id: 'gt', label: 'Growth Trajectory', icon: '📈' },
    { id: 'br', label: 'Book Reviews', icon: '📚' },
  ];

  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-[3rem] shadow-xl shadow-gray-200/50 overflow-hidden flex flex-col md:flex-row border border-gray-100">
          
          {/* Left Side: Brand & Promise */}
          <div className="md:w-5/12 bg-dark p-12 md:p-16 text-white flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/10 mix-blend-overlay"></div>
            <div className="relative z-10">
                <Link href="/" className="inline-block mb-12">
                    <div className="w-10 h-10 border-2 border-white flex items-center justify-center">
                        <span className="font-serif font-black text-xl leading-none">D</span>
                        <span className="text-primary font-black text-lg leading-none">.</span>
                    </div>
                </Link>
                <h2 className="text-4xl md:text-5xl font-serif font-black mb-8 leading-tight tracking-tighter">
                    Unlock <br/>
                    Premium <br/>
                    Insights.
                </h2>
                <div className="space-y-6">
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                        <p className="text-gray-300 text-sm font-light leading-relaxed">
                            매주 발행되는 <strong>심층 기술-경제 레포트</strong>를 누구보다 먼저 받아보세요.
                        </p>
                    </div>
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                        <p className="text-gray-300 text-sm font-light leading-relaxed">
                            오직 회원에게만 공개되는 <strong>유료 컨텐츠 및 비공개 데이터</strong>에 접근할 수 있습니다.
                        </p>
                    </div>
                    <div className="flex items-start gap-4">
                        <CheckCircle2 className="text-primary shrink-0 mt-1" size={18} />
                        <p className="text-gray-300 text-sm font-light leading-relaxed">
                            경제학자의 시각으로 큐레이션된 <strong>도서 요약 및 인사이트</strong>를 공유합니다.
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="relative z-10 mt-12 pt-8 border-t border-white/10">
                <p className="text-[10px] font-black uppercase tracking-[0.3em] text-primary mb-2">Member Benefit</p>
                <p className="text-sm text-gray-400 font-light italic">
                    "기술이라는 엔진에 맥락이라는 지도를 더하는 여정에 함께하세요."
                </p>
            </div>
          </div>

          {/* Right Side: Sign Up Form */}
          <div className="md:w-7/12 p-12 md:p-16 bg-white">
            <div className="mb-12">
                <h3 className="text-sm font-black uppercase tracking-[0.3em] text-primary mb-3">Get Started</h3>
                <h1 className="text-4xl font-serif font-black text-gray-900 tracking-tight">Create your account</h1>
                <p className="text-gray-500 mt-4 font-light">이미 계정이 있으신가요? <Link href="#" className="text-gray-900 font-bold border-b border-gray-900 hover:text-primary hover:border-primary transition-all">로그인하기</Link></p>
            </div>

            <form className="space-y-6">
                {/* Basic Info */}
                <div className="space-y-4">
                    <div className="relative">
                        <User className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                            type="text" 
                            placeholder="Full Name" 
                            className="w-full pl-8 py-3 border-b border-gray-200 focus:outline-none focus:border-primary transition-colors text-base font-light"
                        />
                    </div>
                    <div className="relative">
                        <Mail className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                            type="email" 
                            placeholder="Email address" 
                            className="w-full pl-8 py-3 border-b border-gray-200 focus:outline-none focus:border-primary transition-colors text-base font-light"
                        />
                    </div>
                    <div className="relative">
                        <Lock className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            className="w-full pl-8 py-3 border-b border-gray-200 focus:outline-none focus:border-primary transition-colors text-base font-light"
                        />
                    </div>
                </div>

                {/* Additional Info: Gender & Address */}
                <div className="grid grid-cols-2 gap-6 pt-2">
                    <Script src="//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js" strategy="lazyOnload" />
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3">Gender</p>
                        <div className="flex gap-2">
                            {['Male', 'Female', 'Other'].map((g) => (
                                <button key={g} type="button" className="flex-1 py-2 border border-gray-100 rounded-lg text-xs hover:border-primary hover:text-primary transition-all font-medium text-gray-500">
                                    {g}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-3">Address</p>
                        <div className="flex gap-2 relative">
                            <input 
                                type="text" 
                                placeholder="Search Address" 
                                value={address}
                                readOnly
                                onClick={handleAddressSearch}
                                className="w-full py-2 border-b border-gray-100 focus:outline-none focus:border-primary text-xs font-light cursor-pointer truncate pr-8"
                            />
                            <button 
                                type="button"
                                onClick={handleAddressSearch}
                                className="absolute right-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors"
                            >
                                <Search size={14} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Interest Topics */}
                <div className="pt-4">
                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 flex items-center gap-2">
                        <Sparkles size={10} className="text-primary" />
                        Select interests
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                        {topics.map(topic => (
                            <button
                                key={topic.id}
                                type="button"
                                onClick={() => toggleInterest(topic.id)}
                                className={`flex items-center gap-2 p-3 rounded-xl border text-xs font-medium transition-all duration-300 ${
                                    interest.includes(topic.id) 
                                    ? 'bg-primary border-primary text-white shadow-md' 
                                    : 'bg-white border-gray-50 text-gray-500 hover:border-gray-200'
                                }`}
                            >
                                <span>{topic.icon}</span>
                                {topic.label}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="pt-6">
                    <button className="w-full bg-dark text-white py-4 rounded-full font-black text-[10px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-primary transition-all shadow-lg">
                        Create Account <ArrowRight size={14} />
                    </button>
                </div>

                {/* Social Login Divider */}
                <div className="relative py-4 flex items-center justify-center">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-100"></div>
                    </div>
                    <span className="relative px-4 bg-white text-[9px] font-black text-gray-400 uppercase tracking-widest">Or join with</span>
                </div>

                {/* Social Buttons */}
                <div className="grid grid-cols-3 gap-3">
                    <button type="button" className="flex items-center justify-center py-3 border border-gray-100 rounded-xl hover:bg-gray-50 transition-all">
                        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-5 h-5" alt="Google" />
                    </button>
                    <button type="button" className="flex items-center justify-center py-3 border border-[#03C75A]/20 bg-[#03C75A]/5 rounded-xl hover:bg-[#03C75A]/10 transition-all">
                        <span className="text-[#03C75A] font-black text-xs">N</span>
                    </button>
                    <button type="button" className="flex items-center justify-center py-3 border border-[#FEE500]/50 bg-[#FEE500]/10 rounded-xl hover:bg-[#FEE500]/20 transition-all">
                        <span className="text-[#3C1E1E] font-black text-xs">K</span>
                    </button>
                </div>
                <p className="mt-8 text-[11px] text-gray-400 leading-relaxed text-center font-light">
                    By joining, you agree to our <Link href="/legal/terms" className="underline hover:text-gray-600">Terms of Service</Link> and <Link href="/legal/privacy" className="underline hover:text-gray-600">Privacy Policy</Link>.
                </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
