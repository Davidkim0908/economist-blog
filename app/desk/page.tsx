import Link from "next/link";
import { getPostsByCategory, Post } from "@/lib/posts";
import { ExternalLink } from "lucide-react";

export default function DeskPage() {
  const posts = getPostsByCategory('desk');

  // Helper to get source info and branding
  const getSourceInfo = (slug: string) => {
    if (slug.includes('bloomberg') || slug.includes('trump-tariffs')) {
      return { name: "Bloomberg", color: "#000000" };
    }
    // Default to The Economist
    return { name: "The Economist", color: "#E3120B" };
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Workspace</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
          On My Desk
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Fragments of thought, ongoing research, and things that catch my eye.
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => {
            const source = getSourceInfo(post.slug);
            return (
              <div key={post.slug} className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col">
                <Link href={`/posts/${post.category}/${post.slug}`} className="block relative aspect-[16/9] overflow-hidden">
                    {/* Source Badge */}
                    <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur px-3 py-1.5 rounded-full shadow-sm flex items-center gap-2">
                        <div 
                          className="w-4 h-4 rounded-sm" 
                          style={{ backgroundColor: source.color }} 
                        />
                        <span className="text-xs font-bold text-gray-900 uppercase tracking-tight">{source.name}</span>
                    </div>
                    
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={post.coverImage} 
                        alt={post.title} 
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105" 
                    />
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
                        <span>{post.date}</span>
                        <span className="uppercase tracking-wider text-[10px] font-bold text-primary">Analysis</span>
                    </div>
                    
                    <Link href={`/posts/${post.category}/${post.slug}`} className="block mb-3">
                        <h3 className="text-xl font-serif font-bold leading-tight group-hover:text-primary transition-colors">
                            {post.title}
                        </h3>
                    </Link>
                    
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                        {post.excerpt}
                    </p>
                    
                    <Link 
                        href={`/posts/${post.category}/${post.slug}`} 
                        className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-primary transition-colors mt-auto"
                    >
                        Read Insight <ExternalLink size={14} className="ml-1" />
                    </Link>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p>No items on the desk yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
