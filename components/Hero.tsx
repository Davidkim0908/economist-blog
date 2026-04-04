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

  return (
    <section className="relative w-full mb-20 group">
      <Link href={`/posts/${post.category}/${post.slug}`} className="block relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden rounded-3xl shadow-2xl">
        {/* Background Image */}
        <div className="absolute inset-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            src={post.coverImage || "/placeholder.jpg"} 
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />
          {/* Dark Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
        </div>

        {/* Text Content Overlay */}
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 lg:p-20">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
               <span className="bg-primary text-white text-[10px] md:text-xs font-black uppercase tracking-[0.2em] px-3 py-1 rounded-full">
                  Featured
               </span>
               <span className="text-white/80 text-[10px] md:text-xs font-bold uppercase tracking-widest">
                  {categoryName}
               </span>
               <span className="text-white/60 text-xs hidden md:inline">•</span>
               <span className="text-white/60 text-xs hidden md:inline tracking-wider">{post.date}</span>
            </div>
            
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black text-white mb-6 leading-[1.1] tracking-tight drop-shadow-sm">
                {post.title}
            </h1>
            
            <p className="text-base md:text-xl text-white/90 mb-8 leading-relaxed font-light max-w-2xl line-clamp-2 md:line-clamp-none">
              {post.excerpt}
            </p>
            
            <div className="inline-flex items-center gap-2 text-white font-bold text-sm uppercase tracking-widest border-b-2 border-white pb-1 group-hover:text-primary group-hover:border-primary transition-all duration-300">
              Read the Story
              <svg width="18" height="18" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover:translate-x-1">
                  <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </section>
  );
}
