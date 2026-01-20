import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import DeskCarousel from "@/components/DeskCarousel";
import { getAllPosts, getFeaturedPost } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  
  // Filter out the featured post
  const otherPosts = allPosts.filter(post => post.slug !== featuredPost?.slug);
  
  // Slicing for layout
  const batch1 = otherPosts.slice(0, 6);
  const batch2 = otherPosts.slice(6, 12);
  const remaining = otherPosts.slice(12);

  // Get specific highlights
  const deskPosts = allPosts.filter(p => p.category === 'desk').slice(0, 3);
  const bookReviews = allPosts.filter(p => p.category === 'books').slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 1. Hero Section */}
      {featuredPost && <Hero post={featuredPost} />}
      
      {/* 2. Latest Stories - Batch 1 */}
      <section className="mb-20">
        <div className="flex items-center justify-between mb-8 border-b border-gray-200 pb-4">
            <h2 className="text-2xl font-serif font-bold tracking-tighter">Latest Stories</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {batch1.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* 3. Interleaved Section: On My Desk Highlight */}
      <section className="bg-gray-900 text-white -mx-4 px-4 py-16 mb-20 rounded-sm">
         <div className="container mx-auto text-center">
            <h2 className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-2">From My Desk</h2>
            <h3 className="text-3xl font-serif font-bold mb-8">Research & Insights</h3>
            
            <DeskCarousel posts={deskPosts} />

            <div className="mt-8">
                <Link href="/desk" className="inline-block border border-white text-white px-6 py-2 rounded hover:bg-white hover:text-gray-900 transition-colors text-sm font-bold tracking-widest uppercase">
                    View All Desktop Items
                </Link>
            </div>
         </div>
      </section>

      {/* 4. Latest Stories - Batch 2 */}
      {batch2.length > 0 && (
        <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-8">
            {batch2.map((post) => (
                <PostCard key={post.slug} post={post} />
            ))}
            </div>
        </section>
      )}

      {/* 5. Interleaved Section: Books */}
      <section className="bg-gray-50 -mx-4 px-4 py-16 mb-20">
         <div className="container mx-auto">
            <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-serif font-bold tracking-tighter">Books I&apos;m Reading</h2>
                <Link href="/books" className="text-primary font-bold text-sm hover:underline">VIEW LIBRARY</Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                {bookReviews.map(post => (
                    <div key={post.slug} className="flex gap-6 bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <div className="shrink-0 w-32 h-48 bg-gray-100 shadow-md flex items-center justify-center overflow-hidden p-1">
                             {/* eslint-disable-next-line @next/next/no-img-element */}
                             <img src={post.coverImage} className="max-w-full max-h-full object-contain" alt={post.title} />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-xs font-bold tracking-wider uppercase text-primary mb-2">Book Review</span>
                            <Link href={`/posts/${post.category}/${post.slug}`}>
                                <h3 className="text-xl font-serif font-bold mb-2 hover:text-primary transition-colors tracking-tighter">{post.title}</h3>
                            </Link>
                            {post.author && <p className="text-sm text-gray-500 mb-2">by {post.author}</p>}
                            <div className="flex text-yellow-500 text-sm mb-4">
                                {'★'.repeat(Math.floor(post.rating || 0))}
                                {'☆'.repeat(5 - Math.floor(post.rating || 0))}
                            </div>
                            <Link href={`/posts/${post.category}/${post.slug}`} className="text-sm font-bold text-gray-900 underline">
                                Read Review
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 6. Remaining Stories */}
      {remaining.length > 0 && (
        <section className="mb-20">
            <div className="grid md:grid-cols-3 gap-8">
            {remaining.map((post) => (
                <PostCard key={post.slug} post={post} />
            ))}
            </div>
        </section>
      )}
      
      {/* 7. Newsletter */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-16 border-t border-gray-200 pt-16">
        <div>
            <h2 className="text-3xl font-serif font-bold mb-4">About David</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
                기술이라는 &apos;엔진&apos;에 맥락이라는 &apos;지도&apos;를 더합니다. <br/>
                미래의 길을 설계하는 경제학자, 김동영입니다.
            </p>
            <Link href="/about" className="inline-block bg-primary text-white font-bold py-3 px-6 rounded-full hover:bg-red-800 transition-colors">
                MEET DAVID
            </Link>
        </div>
        <div className="bg-gray-100 p-8 rounded-xl text-center">
            <h3 className="text-xl font-bold mb-2">Subscribe to the Newsletter</h3>
            <p className="text-gray-600 mb-6 text-sm">Get the latest insights delivered to your inbox.</p>
            <div className="flex gap-2">
                <input type="email" placeholder="Email address" className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-primary" />
                <button className="bg-black text-white px-6 py-2 rounded-md font-bold hover:bg-gray-800">
                    JOIN
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}