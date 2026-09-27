import Link from "next/link";
import { SHOW_NEWSLETTER, socialLinks } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-paper border-t border-[#D4D5D2] pt-16 pb-8 mt-20">
      <div className="container mx-auto px-4">
        <div className={`grid gap-12 mb-16 ${SHOW_NEWSLETTER ? "md:grid-cols-4" : "md:grid-cols-3"}`}>
          {/* 1. Brand & Description */}
          <div className="md:col-span-1">
            <h3 className="font-serif font-black text-2xl mb-6 tracking-tighter">David&apos;s Notes</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              경제학자 김동영의 블로그. AI와 모빌리티, 그리고 경제사가 만나는 지점을 탐구합니다.
            </p>
            <div className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} David Kim. <br/>All rights reserved.
            </div>
          </div>

          {/* 2. Vertical Navigation (Sitemap) */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">Explore</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About David</Link></li>
              <li><Link href="/videos" className="hover:text-primary transition-colors">Videos</Link></li>
              <li><Link href="/topics/digital-transformation" className="hover:text-primary transition-colors">AI Transformation</Link></li>
              <li><Link href="/topics/mobility" className="hover:text-primary transition-colors">Mobility Transformation</Link></li>
              <li><Link href="/topics/history" className="hover:text-primary transition-colors">Growth Trajectory</Link></li>
              <li><Link href="/books" className="hover:text-primary transition-colors">Books</Link></li>
              <li><Link href="/desk" className="hover:text-primary transition-colors">On My Desk</Link></li>
              <li><Link href="/news" className="hover:text-primary transition-colors">In the News</Link></li>
            </ul>
          </div>

          {/* 3. Social & Contact */}
          <div className="md:col-span-1">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-600 font-medium">
              {socialLinks.map(link => (
                <li key={link.href}><a href={link.href} target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">{link.label}</a></li>
              ))}
              <li className="pt-4"><a href="mailto:contact@economist-david.com" className="hover:text-primary transition-colors">contact@economist-david.com</a></li>
            </ul>
          </div>

          {/* 4. Newsletter (Mini) — hidden until a provider is connected */}
          {SHOW_NEWSLETTER && (
          <div className="md:col-span-1">
            <h4 className="font-bold text-sm uppercase tracking-widest mb-6 text-gray-900">Stay Updated</h4>
            <p className="text-gray-600 text-xs mb-4">
              Join the community and get the latest insights delivered to your inbox.
            </p>
            <div className="flex flex-col gap-2">
                <input type="email" placeholder="Email address" className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:border-primary" />
                <button className="bg-black text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
                    Subscribe
                </button>
            </div>
          </div>
          )}
        </div>
        
        {/* Bottom Legal Line */}
        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-600">
            <div className="flex space-x-6">
                <Link href="/legal/privacy" className="hover:text-gray-600">Privacy Policy</Link>
                <Link href="/legal/terms" className="hover:text-gray-600">Terms of Service</Link>
                <Link href="/legal/cookies" className="hover:text-gray-600">Cookie Policy</Link>
            </div>
            <div className="mt-4 md:mt-0 font-medium">
                &copy; David Kim
            </div>
        </div>
      </div>
    </footer>
  );
}
