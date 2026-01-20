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
    <section className="relative mb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="flex items-center gap-2 mb-4">
             <span className="bg-primary text-white text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                Featured
             </span>
             <span className="bg-gray-100 text-gray-600 text-xs font-bold px-2 py-1 uppercase tracking-wider rounded-sm">
                {categoryName}
             </span>
             <span className="text-gray-500 text-sm ml-2">{post.date}</span>
          </div>
          
          <Link href={`/posts/${post.category}/${post.slug}`}>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold mb-4 leading-tight hover:text-gray-700 transition-colors tracking-tighter">
                {post.title}
            </h1>
          </Link>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed tracking-tight">
            {post.excerpt}
          </p>
          
          <Link 
            href={`/posts/${post.category}/${post.slug}`}
            className="inline-block border-b-2 border-primary text-primary font-bold pb-1 hover:text-red-800 hover:border-red-800 transition-colors"
          >
            READ THE STORY
          </Link>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
            <Link href={`/posts/${post.category}/${post.slug}`} className="block overflow-hidden rounded-xl shadow-xl w-full">
                 <div className={`relative w-full aspect-[4/3] flex items-center justify-center overflow-hidden ${post.category === 'books' ? 'bg-gray-100 p-8' : 'bg-gray-200'}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img 
                        src={post.coverImage || "/placeholder.jpg"} 
                        alt={post.title}
                        className={`transition-transform duration-700 hover:scale-105 ${
                            post.category === 'books' 
                            ? 'h-full w-auto object-contain shadow-2xl' 
                            : 'w-full h-full object-cover'
                        }`}
                    />
                 </div>
            </Link>
        </div>
      </div>
    </section>
  );
}
