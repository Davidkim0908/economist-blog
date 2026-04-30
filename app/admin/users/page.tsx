'use client';

import { useState } from "react";
import { 
  Users, 
  UserCheck, 
  UserPlus, 
  Search, 
  Filter, 
  MoreHorizontal, 
  Mail, 
  MapPin,
  ShieldCheck,
  Download,
  CreditCard
} from "lucide-react";
import Link from "next/link";

// Mock User Data
const initialUsers = [
  { id: 1, name: "이강민", email: "kangmin.lee@example.com", date: "2026-04-30", gender: "Male", location: "Seoul, Korea", status: "Premium", payment: "₩12,000", interests: ["AI", "Mobility"] },
  { id: 2, name: "박지수", email: "jisoo.park@gmail.com", date: "2026-04-29", gender: "Female", location: "Busan, Korea", status: "Free", payment: "-", interests: ["History", "Books"] },
  { id: 3, name: "James Wilson", email: "james.w@tech-insights.com", date: "2026-04-28", gender: "Male", location: "London, UK", status: "Premium", payment: "$9.99", interests: ["AI", "Economy"] },
  { id: 4, name: "최유진", email: "ujin_choi@naver.com", date: "2026-04-25", gender: "Female", location: "Incheon, Korea", status: "Free", payment: "-", interests: ["Mobility"] },
  { id: 5, name: "김도윤", email: "doyun.kim@daum.net", date: "2026-04-20", gender: "Male", location: "Gwangju, Korea", status: "Free", payment: "-", interests: ["AI", "History"] },
];

export default function AdminUsersPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === "david1234") { // 임시 관리자 비밀번호
      setIsAuthenticated(true);
      setError(false);
    } else {
      setError(true);
      alert("관리자 비밀번호가 일치하지 않습니다.");
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-dark flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white rounded-[3rem] p-12 shadow-2xl text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
                <ShieldCheck size={32} />
            </div>
            <h1 className="text-2xl font-serif font-black text-gray-900 mb-2">Admin Access</h1>
            <p className="text-gray-500 text-sm mb-8 font-light">관리자 계정으로 로그인이 필요합니다.</p>
            
            <form onSubmit={handleLogin} className="space-y-4">
                <input 
                    type="password" 
                    placeholder="Enter Admin Password" 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`w-full px-6 py-4 bg-gray-50 border ${error ? 'border-primary' : 'border-gray-100'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary/20 text-center text-lg`}
                />
                <button type="submit" className="w-full bg-dark text-white py-4 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-lg">
                    Authorize
                </button>
            </form>
            <Link href="/" className="inline-block mt-8 text-xs font-bold text-gray-400 hover:text-gray-600 transition-colors">
                &larr; Back to Home
            </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Page Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
            <div>
                <div className="flex items-center gap-2 mb-2 text-primary">
                    <ShieldCheck size={16} />
                    <span className="text-[10px] font-black uppercase tracking-[0.3em]">Administrator</span>
                </div>
                <h1 className="text-4xl font-serif font-black text-gray-900 tracking-tight">User Management</h1>
            </div>
            <div className="flex gap-3">
                <button className="flex items-center gap-2 bg-white border border-gray-200 px-4 py-2.5 rounded-xl text-xs font-bold text-gray-600 hover:bg-gray-50 transition-all">
                    <Download size={14} /> Export CSV
                </button>
                <button className="flex items-center gap-2 bg-dark text-white px-6 py-2.5 rounded-xl text-xs font-bold hover:bg-primary transition-all shadow-lg shadow-gray-200">
                    <UserPlus size={14} /> Add New User
                </button>
            </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
            {[
                { label: "Total Members", value: "1,248", icon: Users, color: "text-blue-600", bg: "bg-blue-50" },
                { label: "Premium Subscribers", value: "432", icon: UserCheck, color: "text-primary", bg: "bg-red-50" },
                { label: "Monthly Revenue", value: "₩5,184,000", icon: CreditCard, color: "text-amber-600", bg: "bg-amber-50" },
                { label: "New this Month", value: "+84", icon: UserPlus, color: "text-green-600", bg: "bg-green-50" },
            ].map((stat, i) => (
                <div key={i} className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex items-center justify-between">
                    <div>
                        <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">{stat.label}</p>
                        <p className="text-3xl font-serif font-black text-gray-900">{stat.value}</p>
                    </div>
                    <div className={`${stat.bg} ${stat.color} p-4 rounded-2xl`}>
                        <stat.icon size={24} />
                    </div>
                </div>
            ))}
        </div>

        {/* Table Controls */}
        <div className="bg-white rounded-[2rem] border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50 flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                    <input 
                        type="text" 
                        placeholder="Search by name, email or location..." 
                        className="w-full pl-12 pr-4 py-3 bg-gray-50 border-none rounded-2xl text-sm focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    />
                </div>
                <div className="flex gap-2 w-full md:w-auto">
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-3 border border-gray-100 rounded-2xl text-xs font-bold text-gray-600 hover:bg-gray-50">
                        <Filter size={14} /> Filters
                    </button>
                </div>
            </div>

            {/* User Table */}
            <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                    <thead>
                        <tr className="bg-gray-50/50">
                            <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">User</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">Status</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">Monthly Fee</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">Location</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">Join Date</th>
                            <th className="px-6 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50">Interests</th>
                            <th className="px-8 py-4 text-[10px] font-black uppercase tracking-widest text-gray-400 border-b border-gray-50 text-right">Actions</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-50">
                        {initialUsers.map((user) => (
                            <tr key={user.id} className="hover:bg-gray-50/30 transition-colors">
                                <td className="px-8 py-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-10 h-10 rounded-full bg-dark text-white flex items-center justify-center font-black text-xs">
                                            {user.name.charAt(0)}
                                        </div>
                                        <div>
                                            <p className="font-bold text-gray-900 text-sm">{user.name}</p>
                                            <div className="flex items-center gap-1 text-gray-400 text-[11px]">
                                                <Mail size={10} />
                                                {user.email}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-6">
                                    <span className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-tighter ${
                                        user.status === 'Premium' 
                                        ? 'bg-primary/10 text-primary border border-primary/20' 
                                        : 'bg-gray-100 text-gray-500 border border-gray-200'
                                    }`}>
                                        {user.status}
                                    </span>
                                </td>
                                <td className="px-6 py-6 text-sm font-bold text-gray-900">
                                    {user.payment}
                                </td>
                                <td className="px-6 py-6 text-sm text-gray-600 font-medium">
                                    <div className="flex items-center gap-1">
                                        <MapPin size={12} className="text-gray-300" />
                                        {user.location}
                                    </div>
                                </td>
                                <td className="px-6 py-6 text-sm text-gray-500 font-medium">{user.date}</td>
                                <td className="px-6 py-6">
                                    <div className="flex flex-wrap gap-1">
                                        {user.interests.map(interest => (
                                            <span key={interest} className="bg-gray-50 text-gray-400 px-2 py-0.5 rounded text-[9px] font-bold uppercase tracking-tight">
                                                {interest}
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-8 py-6 text-right">
                                    <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors text-gray-400">
                                        <MoreHorizontal size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination Placeholder */}
            <div className="p-6 bg-gray-50/30 border-t border-gray-50 flex items-center justify-between text-xs font-bold text-gray-400 uppercase tracking-widest">
                <span>Showing 1 to 5 of 1,248 users</span>
                <div className="flex gap-2">
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-white disabled:opacity-50" disabled>Prev</button>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-white bg-white shadow-sm text-primary">1</button>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-white">2</button>
                    <button className="px-4 py-2 border border-gray-200 rounded-lg hover:bg-white">Next</button>
                </div>
            </div>
        </div>

        <div className="mt-8 p-6 bg-primary/5 rounded-[2rem] border border-primary/10 flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                <ShieldCheck size={20} />
            </div>
            <div>
                <p className="text-sm font-bold text-gray-900">Admin Security Tip</p>
                <p className="text-xs text-gray-500 leading-relaxed">회원 정보는 민감한 개인정보입니다. 작업 완료 후에는 반드시 로그아웃해 주시고, 엑셀 다운로드 파일 관리에 유의해 주세요.</p>
            </div>
        </div>
      </div>
    </div>
  );
}
