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

  // Dark Theme Styles
  const cardBg = "bg-[#1a1a1a]"; // Premium dark gray/black
  const cardHoverBg = "hover:bg-primary";
  const textColor = "text-white";
  const subTextColor = "text-white/60";

  if (variant === 'horizontal') {
    return (
      <Link href={`/posts/${post.category}/${post.slug}`} className={cn("group block", className)}>
        <div className={cn("flex flex-col md:flex-row gap-8 items-center p-6 md:p-8 rounded-[2rem] border border-white/5 shadow-2xl transition-all duration-500 hover:shadow-primary/20 hover:-translate-y-1 h-full", cardBg, cardHoverBg)}>
          <div className="w-full md:w-1/2 overflow-hidden rounded-2xl aspect-[4/3] bg-black/20 shadow-inner">
            <img 
              src={post.coverImage || "/placeholder.jpg"} 
              alt={post.title} 
              className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
            />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-black tracking-widest uppercase text-primary group-hover:text-white transition-colors">{categoryLabel}</span>
              <span className="text-white/20 text-xs">•</span>
              <span className={cn("text-[10px] uppercase tracking-widest transition-colors", subTextColor, "group-hover:text-white/80")}>{post.date}</span>
            </div>
            <h3 className={cn("text-2xl md:text-3xl font-serif font-black mb-4 transition-colors leading-tight tracking-tighter", textColor)}>
              {post.title}
            </h3>
            <p className={cn("text-base leading-relaxed line-clamp-3 mb-6 font-light transition-colors", subTextColor, "group-hover:text-white/90")}>
              {post.excerpt}
            </p>
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white border-b-2 border-white/30 self-start pb-1 group-hover:border-white transition-all">
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
        <img 
          src={post.coverImage || "/placeholder.jpg"} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
        />
        
        {/* Semi-transparent text container at the bottom */}
        <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="bg-black/80 backdrop-blur-md p-6 rounded-[1.5rem] border border-white/10 text-white transition-all duration-500 group-hover:bg-primary group-hover:border-primary/20">
            <span className="text-[10px] font-black tracking-[0.25em] uppercase mb-2 block text-primary group-hover:text-white transition-colors">{categoryLabel}</span>
            <h3 className="text-xl font-serif font-black leading-tight tracking-tighter mb-2">
              {post.title}
            </h3>
            <div className="flex items-center gap-2 opacity-60 group-hover:opacity-100 transition-opacity">
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
      <div className={cn("flex flex-col h-full p-5 rounded-[2rem] border border-white/5 transition-all duration-500 shadow-xl hover:shadow-primary/20 hover:-translate-y-1", cardBg, cardHoverBg)}>
        <div className="overflow-hidden rounded-2xl mb-6 aspect-[3/2] bg-black/20 shadow-sm">
          <img 
            src={post.coverImage || "/placeholder.jpg"} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
          />
        </div>
        <div className="flex items-center gap-2 mb-3 px-1">
          <span className="text-[10px] font-black tracking-widest uppercase text-primary group-hover:text-white transition-colors">{categoryLabel}</span>
          <span className="text-white/20 text-xs">•</span>
          <span className={cn("text-[10px] uppercase tracking-widest transition-colors", subTextColor, "group-hover:text-white/80")}>{post.date}</span>
        </div>
        <h3 className={cn("text-xl font-serif font-black mb-3 transition-colors leading-tight tracking-tighter px-1", textColor)}>
          {post.title}
        </h3>
        <p className={cn("text-sm leading-relaxed line-clamp-3 font-light px-1 transition-colors", subTextColor, "group-hover:text-white/90")}>
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
