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

  if (variant === 'horizontal') {
    return (
      <div className={cn("group flex flex-col md:flex-row gap-6 items-center", className)}>
        <Link href={`/posts/${post.category}/${post.slug}`} className="w-full md:w-1/2 overflow-hidden rounded-2xl aspect-[4/3] bg-gray-100">
          <img 
            src={post.coverImage || "/placeholder.jpg"} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        <div className="w-full md:w-1/2">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[10px] font-black tracking-widest uppercase text-primary">{categoryLabel}</span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-[10px] text-gray-500 uppercase tracking-widest">{post.date}</span>
          </div>
          <Link href={`/posts/${post.category}/${post.slug}`}>
            <h3 className="text-2xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight tracking-tighter">
              {post.title}
            </h3>
          </Link>
          <p className="text-gray-600 text-base leading-relaxed line-clamp-3 mb-4 font-light">
            {post.excerpt}
          </p>
        </div>
      </div>
    );
  }

  if (variant === 'overlay') {
    return (
      <Link href={`/posts/${post.category}/${post.slug}`} className={cn("group relative block overflow-hidden rounded-2xl aspect-[4/5] shadow-xl", className)}>
        <img 
          src={post.coverImage || "/placeholder.jpg"} 
          alt={post.title} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent"></div>
        <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
          <span className="text-[10px] font-black tracking-widest uppercase mb-2">{categoryLabel}</span>
          <h3 className="text-xl font-serif font-bold leading-tight tracking-tighter mb-2">
            {post.title}
          </h3>
          <span className="text-[10px] opacity-60 uppercase tracking-widest">{post.date}</span>
        </div>
      </Link>
    );
  }

  // Default Vertical Variant
  return (
    <div className={cn("group flex flex-col", className)}>
      <Link href={`/posts/${post.category}/${post.slug}`} className="block overflow-hidden rounded-2xl mb-5 aspect-[3/2] bg-gray-100 shadow-sm">
        <img 
          src={post.coverImage || "/placeholder.jpg"} 
          alt={post.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </Link>
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[10px] font-black tracking-widest uppercase text-primary">{categoryLabel}</span>
        <span className="text-gray-300 text-xs">•</span>
        <span className="text-[10px] text-gray-500 uppercase tracking-widest">{post.date}</span>
      </div>
      <Link href={`/posts/${post.category}/${post.slug}`}>
        <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors leading-tight tracking-tighter">
          {post.title}
        </h3>
      </Link>
      <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 font-light">
        {post.excerpt}
      </p>
    </div>
  );
}
