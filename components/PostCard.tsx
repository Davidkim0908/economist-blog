import Link from "next/link";
import { Post } from "@/lib/posts";
import { cn } from "@/lib/utils";

interface PostCardProps {
  post: Post;
  className?: string;
}

export default function PostCard({ post, className }: PostCardProps) {
  return (
    <div className={cn("group flex flex-col h-full", className)}>
      <Link href={`/posts/${post.category}/${post.slug}`} className="block overflow-hidden rounded-lg mb-4 aspect-video bg-gray-100">
        {post.coverImage ? (
           // eslint-disable-next-line @next/next/no-img-element
          <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
            No Image
          </div>
        )}
      </Link>
      
      <div className="flex-1 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-bold tracking-wider uppercase text-primary">
            {post.category === 'digital-transformation' ? 'AI Transformation' : 
             post.category === 'history' ? 'Growth Trajectory' : 
             post.category === 'mobility' ? 'Mobility Transformation' :
             post.category === 'books' ? 'Books' :
             post.category === 'desk' ? 'On My Desk' :
             post.category}
            </span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-xs text-gray-500">{post.date}</span>
        </div>
        
        <Link href={`/posts/${post.category}/${post.slug}`}>
            <h3 className="text-base font-serif font-bold mb-2 group-hover:text-primary transition-colors leading-snug tracking-tighter">
            {post.title}
            </h3>
        </Link>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3 mb-4 flex-grow">
          {post.excerpt}
        </p>

        {post.category === 'books' && post.rating && (
            <div className="flex text-yellow-500 text-sm">
                {'★'.repeat(Math.floor(post.rating))}
                {'☆'.repeat(5 - Math.floor(post.rating))}
            </div>
        )}
      </div>
    </div>
  );
}
