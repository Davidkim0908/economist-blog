import { getPostsByCategory } from "@/lib/posts";
import Link from "next/link";

export default function BooksPage() {
  const posts = getPostsByCategory('books');

  return (
    <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 py-16">
            <div className="text-center mb-16 max-w-2xl mx-auto">
                <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Library</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
                Book Reviews
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                    Books that have shaped my thinking on economics, society, and the future.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {posts.map((post) => (
                <div key={post.slug} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center group">
                    <Link href={`/posts/${post.category}/${post.slug}`} className="w-40 h-60 shadow-lg mb-6 transform group-hover:-translate-y-2 transition-transform duration-300">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
                    </Link>
                    
                    <Link href={`/posts/${post.category}/${post.slug}`}>
                        <h2 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h2>
                    </Link>
                    
                    {post.author && <p className="text-sm text-gray-500 mb-4">by {post.author}</p>}
                    
                    <div className="flex text-yellow-500 text-sm mb-4">
                        {'★'.repeat(Math.floor(post.rating || 0))}
                        {'☆'.repeat(5 - Math.floor(post.rating || 0))}
                    </div>
                    
                    <p className="text-gray-600 text-sm line-clamp-3 mb-6">
                        {post.excerpt}
                    </p>
                    
                    <Link href={`/posts/${post.category}/${post.slug}`} className="mt-auto text-primary font-bold text-sm border-b-2 border-transparent hover:border-primary transition-colors">
                        READ REVIEW
                    </Link>
                </div>
                ))}
            </div>
        </div>
    </div>
  );
}
