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
  
  // Slicing for the dynamic grid
  const row1_large = otherPosts[0];
  const row1_small = otherPosts[1];
  
  const row2_set = otherPosts.slice(2, 5);
  
  const row3_small = otherPosts[5];
  const row3_large = otherPosts[6];

  const remaining = otherPosts.slice(7);

  // Get specific highlights
  const deskPosts = allPosts.filter(p => p.category === 'desk').slice(0, 3);
  const bookReviews = allPosts
    .filter(p => p.category === 'books')
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 2);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 1. Hero Section (Full Bleed GatesNotes Style) */}
      {featuredPost && <Hero post={featuredPost} />}
      
      {/* 2. Dynamic Grid Section 1 */}
      <section className="mb-24">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Row 1: 2/3 Wide Horizontal + 1/3 Vertical */}
          {row1_large && (
            <div className="md:col-span-2">
              <PostCard post={row1_large} variant="horizontal" />
            </div>
          )}
          {row1_small && (
            <div className="md:col-span-1">
              <PostCard post={row1_small} variant="default" />
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Row 2: Three standard cards */}
          {row2_set.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </section>

      {/* 3. Interleaved Section: On My Desk Highlight */}
      <section className="bg-dark text-white -mx-4 px-4 py-24 mb-24 rounded-[2rem] overflow-hidden relative group">
         <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?q=80&w=2070&auto=format&fit=crop')] opacity-10 grayscale group-hover:scale-105 transition-transform duration-[5000ms]"></div>
         <div className="container mx-auto text-center relative z-10">
            <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-4">From My Desk</h2>
            <h3 className="text-4xl md:text-5xl font-serif font-black mb-12 tracking-tight">Research & Insights</h3>
            
            <DeskCarousel posts={deskPosts} />

            <div className="mt-12">
                <Link href="/desk" className="inline-block bg-white text-dark px-10 py-4 rounded-full hover:bg-primary hover:text-white transition-all duration-300 text-xs font-black tracking-[0.2em] uppercase shadow-xl">
                    View All Desktop Items
                </Link>
            </div>
         </div>
      </section>

      {/* 4. Dynamic Grid Section 2 */}
      <section className="mb-24">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Row 3: 1/3 Vertical + 2/3 Wide Horizontal */}
          {row3_small && (
            <div className="md:col-span-1">
              <PostCard post={row3_small} variant="default" />
            </div>
          )}
          {row3_large && (
            <div className="md:col-span-2">
              <PostCard post={row3_large} variant="horizontal" />
            </div>
          )}
        </div>
      </section>

      {/* 5. Interleaved Section: Books */}
      <section className="bg-gray-50 -mx-4 px-4 py-24 mb-24 rounded-[2rem]">
         <div className="container mx-auto">
            <div className="flex items-end justify-between mb-12 px-4">
                <div>
                    <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-2">Reading List</h2>
                    <h3 className="text-4xl font-serif font-black tracking-tight text-gray-900">Books I&apos;m Reading</h3>
                </div>
                <Link href="/books" className="text-xs font-black tracking-widest uppercase border-b-2 border-primary pb-1 hover:text-primary transition-colors">VIEW LIBRARY</Link>
            </div>
            
            <div className="grid md:grid-cols-2 gap-10">
                {bookReviews.map(post => (
                    <div key={post.slug} className="flex gap-8 bg-white p-8 rounded-[1.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group">
                        <div className="shrink-0 w-36 h-52 bg-gray-50 flex items-center justify-center overflow-hidden rounded-xl shadow-lg group-hover:shadow-xl transition-all border border-gray-100 relative">
                             {/* eslint-disable-next-line @next/next/no-img-element */}
                             <img 
                                src={post.coverImage} 
                                className="absolute inset-0 w-full h-full object-contain p-3 transition-transform duration-500 group-hover:scale-105" 
                                alt={post.title} 
                             />
                        </div>
                        <div className="flex flex-col justify-center py-2">
                            <span className="text-[10px] font-black tracking-[0.2em] uppercase text-primary mb-3">Book Review</span>
                            <Link href={`/posts/${post.category}/${post.slug}`}>
                                <h3 className="text-2xl font-serif font-bold mb-3 hover:text-primary transition-colors tracking-tighter text-gray-900 leading-tight">{post.title}</h3>
                            </Link>
                            {post.author && <p className="text-base text-gray-500 mb-4 font-medium italic">by {post.author}</p>}
                            <div className="flex text-yellow-400 text-sm mb-6">
                                {'★'.repeat(Math.floor(post.rating || 0))}
                                {'☆'.repeat(5 - Math.floor(post.rating || 0))}
                            </div>
                            <Link href={`/posts/${post.category}/${post.slug}`} className="text-[10px] font-black text-gray-900 uppercase tracking-[0.2em] border-b-2 border-gray-900 self-start pb-1 hover:text-primary hover:border-primary transition-colors">
                                Read Review
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 6. Final Mixed Section */}
      <section className="mb-24">
        <div className="grid md:grid-cols-4 gap-8">
            {remaining.slice(0, 4).map((post) => (
                <PostCard key={post.slug} post={post} variant="overlay" />
            ))}
        </div>
      </section>
      
      {/* 7. Newsletter & About Footer */}
      <section className="grid md:grid-cols-2 gap-16 items-center mb-16 border-t border-gray-200 pt-24">
        <div>
            <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-4">The Author</h2>
            <h3 className="text-5xl font-serif font-black mb-8 tracking-tighter text-gray-900">About David</h3>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed font-light">
                기술이라는 &apos;엔진&apos;에 맥락이라는 &apos;지도&apos;를 더합니다. <br/>
                미래의 길을 설계하는 경제학자, 김동영입니다.
            </p>
            <Link href="/about" className="inline-block bg-primary text-white font-black py-4 px-10 rounded-full hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-primary/30 text-xs tracking-widest uppercase">
                MEET DAVID
            </Link>
        </div>
        <div className="bg-dark p-12 rounded-[2rem] text-center text-white relative overflow-hidden group">
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-serif font-black mb-4 tracking-tight">Subscribe to the Newsletter</h3>
            <p className="text-gray-400 mb-8 text-base font-light">Get the latest insights delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-3">
                <input type="email" placeholder="Email address" className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full focus:outline-none focus:border-primary text-white" />
                <button className="bg-white text-dark px-8 py-4 rounded-full font-black text-xs tracking-widest uppercase hover:bg-primary hover:text-white transition-all duration-300">
                    JOIN
                </button>
            </div>
        </div>
      </section>
    </div>
  );
}
