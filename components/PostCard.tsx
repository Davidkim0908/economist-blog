import Link from "next/link";
import { Post } from "@/lib/posts";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  className?: string;
  variant?: 'default' | 'horizontal' | 'overlay';
}

export default function PostCard({ post, className, variant = 'default' }: PostCardProps) {
  const categoryLabel = post.category === 'digital-transformation' ? 'AI Transformation' : 
                        post.category === 'history' ? 'Growth Trajectory' : 
                        post.category === 'mobility' ? 'Mobility Transformation' :
                        post.category === 'books' ? 'Books' :
                        post.category === 'desk' ? 'On My Desk' :
                        post.category;

  // Helper to determine source and symbol
  const getSourceInfo = (content: string, title: string, excerpt: string) => {
    const combinedText = `${title} ${excerpt} ${content}`.toUpperCase();
    
    if (combinedText.includes('WIRED')) {
      return { symbol: 'W', color: 'bg-black', font: 'font-sans font-black tracking-tighter' };
    }
    if (combinedText.includes('BLOOMBERG')) {
      return { symbol: 'B', color: 'bg-black', font: 'font-sans font-bold' };
    }
    if (combinedText.includes('ECONOMIST')) {
      return { symbol: 'E', color: 'bg-[#E3120B]', font: 'font-serif font-bold italic' };
    }
    return null;
  };

  const sourceInfo = post.category === 'desk' ? getSourceInfo(post.content, post.title, post.excerpt) : null;

  if (variant === 'horizontal') {
    return (
      <Link href={`/posts/${post.category}/${post.slug}`} className={cn("group block", className)}>
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-6 md:p-8 rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-500 hover:bg-primary hover:text-white hover:shadow-xl hover:border-primary/10 hover:-translate-y-1 h-full">
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl aspect-[4/3] bg-gray-50 shadow-inner relative">
            {sourceInfo && (
              <div className={cn("absolute top-4 left-4 z-20 w-10 h-10 flex items-center justify-center text-white text-xl rounded shadow-lg", sourceInfo.color, sourceInfo.font)}>
                {sourceInfo.symbol}
              </div>
            )}
            <img 
              src={post.coverImage || "/placeholder.jpg"} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-black tracking-widest uppercase text-primary group-hover:text-white transition-colors">{categoryLabel}</span>
              <span className="text-gray-300 text-xs">•</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-white/80 transition-colors">{post.date}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-serif font-black mb-4 group-hover:text-white transition-colors leading-tight tracking-tighter text-gray-900">
              {post.title}
            </h3>
            <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-6 font-light group-hover:text-white/90 transition-colors">
              {post.excerpt}
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-900 border-b-2 border-gray-900 self-start pb-1 group-hover:text-white group-hover:border-white transition-colors">
              Read Story
            </span>
          </div>
        </div>
      </Link>
    );
  }

  if (variant === 'overlay') {
    return (
      <Link href={`/posts/${post.category}/${post.slug}`} className={cn("group relative block overflow-hidden rounded-[2rem] aspect-[4/5] shadow-xl", className)}>
        {sourceInfo && (
          <div className={cn("absolute top-6 left-6 z-20 w-10 h-10 flex items-center justify-center text-white text-xl rounded shadow-2xl", sourceInfo.color, sourceInfo.font)}>
            {sourceInfo.symbol}
          </div>
        )}
        <img 
          src={post.coverImage || "/placeholder.jpg"} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        
        <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="bg-white/80 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/20 text-gray-900 transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase mb-2 block text-primary">{categoryLabel}</span>
            <h3 className="text-xl font-serif font-black leading-tight tracking-tighter mb-2">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 opacity-60">
              <span className="text-[10px] uppercase tracking-widest font-bold">{post.date}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // Default Vertical Variant
  return (
    <Link href={`/posts/${post.category}/${post.slug}`} className={cn("group block h-full", className)}>
      <div className="flex flex-col h-full bg-white p-5 rounded-[2rem] border border-transparent transition-all duration-500 hover:bg-primary hover:text-white hover:shadow-lg hover:-translate-y-1">
        <div className="overflow-hidden rounded-2xl mb-6 aspect-[3/2] bg-gray-50 shadow-sm relative">
          {sourceInfo && (
            <div className={cn("absolute top-3 left-3 z-20 w-8 h-8 flex items-center justify-center text-white text-lg rounded shadow-md transition-transform group-hover:scale-110", sourceInfo.color, sourceInfo.font)}>
              {sourceInfo.symbol}
            </div>
          )}
          <img 
            src={post.coverImage || "/placeholder.jpg"} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
          />
        </div>
        <div className="flex items-center gap-2 mb-3 px-1">
          <span className="text-[10px] font-black tracking-widest uppercase text-primary group-hover:text-white transition-colors">{categoryLabel}</span>
          <span className="text-gray-300 text-xs">•</span>
          <span className="text-[10px] text-gray-500 uppercase tracking-widest group-hover:text-white/80 transition-colors">{post.date}</span>
        </div>
        <h3 className="text-xl font-serif font-black mb-3 group-hover:text-white transition-colors leading-tight tracking-tighter text-gray-900 px-1">
          {post.title}
        </h3>
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 font-light px-1 group-hover:text-white/90 transition-colors">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
