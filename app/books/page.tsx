import Image from "next/image";
import { getPostsByCategory } from "@/lib/posts";
import Link from "next/link";
import { BookOpen, Star } from "lucide-react";

export default function BooksPage() {
  const posts = getPostsByCategory('books');

  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
            {/* Premium Header */}
            <div className="max-w-4xl mx-auto text-center mb-24">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-gray-200" />
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-xs">서평</span>
                    <div className="h-[1px] w-12 bg-gray-200" />
                </div>
                <h1 className="text-5xl md:text-7xl font-display font-black mb-8 text-gray-900 tracking-tight">
                    Library
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto break-keep">
                    경제학자의 시선으로 엄선한 도서들입니다. <br/>
                    세상을 읽는 새로운 프레임을 제안하는 지적 여정의 기록입니다.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
                {posts.map((post) => (
                <div key={post.slug} className="group flex flex-col items-center text-center">
                    {/* Floating Book Cover */}
                    <Link href={`/posts/${post.category}/${post.slug}`} className="relative mb-10 w-56 h-80 group">
                        <div className="absolute inset-0 bg-gray-50 rounded-sm shadow-2xl transition-transform duration-500 group-hover:scale-[1.02] group-hover:-rotate-2 overflow-hidden">
                             {post.coverImage && (<Image 
                                src={post.coverImage} 
                                alt={post.title} 
                                fill
                                sizes="224px"
                                className="object-contain rounded-sm" 
                             />)}
                             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        {/* Shadow Effect */}
                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-4 bg-black/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </Link>
                    
                    <div className="flex flex-col items-center flex-grow max-w-xs">
                        <div className="flex items-center gap-2 mb-4">
                            <BookOpen size={14} className="text-primary" />
                            <span className="text-xs font-black uppercase tracking-widest text-gray-500">Review</span>
                        </div>

                        <Link href={`/posts/${post.category}/${post.slug}`}>
                            <h2 className="text-2xl font-display font-black mb-3 group-hover:text-primary transition-colors leading-tight tracking-tight text-gray-900">
                                {post.title}
                            </h2>
                        </Link>
                        
                        {post.author && (
                            <p className="text-xs text-gray-500 font-bold uppercase tracking-tight mb-4">
                                by {post.author}
                            </p>
                        )}
                        
                        <div className="flex text-amber-600 gap-1 mb-6">
                            {[...Array(5)].map((_, i) => (
                                <Star 
                                    key={i} 
                                    size={12} 
                                    fill={i < Math.floor(post.rating || 0) ? "currentColor" : "none"} 
                                    className={i < Math.floor(post.rating || 0) ? "text-amber-600" : "text-gray-200"}
                                />
                            ))}
                        </div>
                        
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 font-light line-clamp-3 break-keep">
                            {post.excerpt}
                        </p>
                        
                        <Link href={`/posts/${post.category}/${post.slug}`} className="mt-auto inline-block text-xs font-black uppercase tracking-widest border-b-2 border-gray-900 pb-1 hover:text-primary hover:border-primary transition-all">
                            서평 읽기
                        </Link>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}
