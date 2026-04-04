import Link from "next/link";
import { Post } from "@/lib/posts";

export default function Hero({ post }: { post: Post }) {
  const categoryNames:Record<string, string> = {
    'digital-transformation': 'AI Transformation',
    'mobility': 'Mobility Transformation',
    'history': 'Decoding Growth',
    'desk': 'On My Desk',
    'books': 'Book Review'
  };

  const categoryName = categoryNames[post.category] || post.category.replace(/-/g, ' ').toUpperCase();

  // "무한한 가능성" 테마의 고화질 우주 배경 이미지 (Unsplash 라이브러리 활용)
  const universalBg = "https://images.unsplash.com/photo-1464802686167-b939a6910659?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="relative w-full mb-16 -mt-4 group overflow-hidden rounded-[2rem] shadow-2xl bg-gray-900">
      <Link href={`/posts/${post.category}/${post.slug}`} className="block relative w-full min-h-[540px] md:min-h-[630px] flex flex-col justify-center">
        
        {/* Universal Deep Space Background */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={universalBg} 
            alt="Infinite Possibilities"
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110 opacity-70"
          />
          {/* Enhanced multi-layered overlay for all resolutions */}
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
        </div>

        {/* Content Overlay - Compact padding and dynamic height */}
        <div className="relative z-10 w-full p-8 md:p-12 lg:p-16 flex flex-col justify-center">
          <div className="max-w-4xl">
            {/* Top Label System */}
            <div className="flex items-center gap-4 mb-6">
               <span className="bg-white text-black text-[10px] md:text-xs font-black uppercase tracking-[0.25em] px-4 py-1.5 rounded-full shadow-lg">
                  Featured Article
               </span>
               <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] border-l border-white/30 pl-4">
                  {categoryName}
               </span>
            </div>

            {/* Massive GatesNotes-style Title - Responsive sizing */}
            <h1 className="text-3xl md:text-5xl lg:text-7xl font-serif font-black text-white mb-8 leading-[1.1] tracking-tight drop-shadow-2xl break-keep">
                {post.title}
            </h1>

            {/* Refined Excerpt - No line clamping to prevent data loss */}
            <p className="text-lg md:text-2xl text-white/90 mb-10 leading-relaxed font-light max-w-3xl tracking-tight drop-shadow-md break-keep">
              {post.excerpt}
            </p>

            {/* Bottom Meta & Action */}
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 border-t border-white/20 pt-8">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/40 shadow-xl">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src="/images/david.jpg" alt="David Kim" className="w-full h-full object-cover" />
                    </div>
                    <div className="text-sm">
                        <div className="font-bold tracking-wide text-white">David Kim</div>
                        <div className="text-white/60 text-xs uppercase tracking-widest">{post.date}</div>
                    </div>
                </div>

                <div className="inline-flex items-center gap-3 text-white font-black text-sm uppercase tracking-[0.2em] group/btn">
                  <span className="drop-shadow-md">Read the Story</span>
                  <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-white group-hover/btn:text-black shadow-lg">
                    <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
