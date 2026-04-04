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
    <section className="relative mb-24 mt-8">
      <div className="grid md:grid-cols-12 gap-12 items-center">
        {/* Text Content: Spans 7 columns on desktop */}
        <div className="md:col-span-7 order-2 md:order-1">
          <div className="flex items-center gap-3 mb-6">
             <span className="text-primary text-xs font-black uppercase tracking-[0.2em] border-b-2 border-primary pb-0.5">
                Featured
             </span>
             <span className="text-gray-400 text-xs font-medium uppercase tracking-widest">
                {categoryName}
             </span>
             <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
             <span className="text-gray-400 text-xs tracking-wider">{post.date}</span>
          </div>
          
          <Link href={`/posts/${post.category}/${post.slug}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black mb-8 leading-[1.1] hover:text-primary transition-colors tracking-tight text-gray-900">
                {post.title}
            </h1>
          </Link>
          
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-xl font-light">
            {post.excerpt}
          </p>
          
          <Link 
            href={`/posts/${post.category}/${post.slug}`}
            className="inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-sm hover:bg-primary transition-all duration-300 shadow-lg hover:shadow-primary/20"
          >
            READ THE STORY
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8H15M15 8L8 1M15 8L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
        
        {/* Image Content: Spans 5 columns on desktop */}
        <div className="md:col-span-5 order-1 md:order-2">
            <Link href={`/posts/${post.category}/${post.slug}`} className="group block relative">
                 <div className="relative overflow-hidden rounded-2xl shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                    <div className={`relative w-full aspect-[4/5] flex items-center justify-center overflow-hidden ${post.category === 'books' ? 'bg-gray-50 p-12' : 'bg-gray-200'}`}>
                        {/* Subtle Overlay for non-book images */}
                        {post.category !== 'books' && <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors z-10"></div>}
                        
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                            src={post.coverImage || "/placeholder.jpg"} 
                            alt={post.title}
                            className={`transition-transform duration-1000 group-hover:scale-110 w-full h-full object-cover`}
                        />
                    </div>
                 </div>
                 {/* Decorative background element */}
                 <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-gray-100 -z-10 rounded-2xl group-hover:border-primary/20 transition-colors"></div>
            </Link>
        </div>
      </div>
    </section>
  );
}

