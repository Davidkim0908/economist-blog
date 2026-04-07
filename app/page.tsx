import Hero from "@/components/Hero";
import PostCard from "@/components/PostCard";
import VideoCard from "@/components/VideoCard";
import { getAllPosts, getFeaturedPost } from "@/lib/posts";
import { getAllVideos } from "@/lib/videos";
import Link from "next/link";
import { ArrowRight, BookOpen, Mic2, Newspaper, Video } from "lucide-react";

// 새로고침 시 무작위 책 추천을 위해 동적 렌더링 활성화
export const dynamic = 'force-dynamic';

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPost = getFeaturedPost();
  const allVideos = getAllVideos().slice(0, 3);
  
  // 1. Data Filtering
  const focusCategories = ['digital-transformation', 'mobility', 'history'];
  const otherPosts = allPosts.filter(post => post.slug !== featuredPost?.slug);
  const allBookReviews = allPosts.filter(p => p.category === 'books');
  
  // [Section A] Lead Analysis & Random Books
  const leadPost = otherPosts.find(p => focusCategories.includes(p.category));
  // 상단에 보일 랜덤 책 2권
  const randomBooks = [...allBookReviews].sort(() => Math.random() - 0.5).slice(0, 2);
  
  // [Section B] AI & Mobility Shift Strip
  const transformationPosts = otherPosts.filter(p => 
    (p.category === 'digital-transformation' || p.category === 'mobility') && 
    p.slug !== leadPost?.slug
  ).slice(0, 4);

  // [Section C] Sidebar Layout
  const mainFeed = otherPosts.filter(p => 
    !transformationPosts.includes(p) && 
    p.slug !== leadPost?.slug && 
    p.category !== 'books' && 
    p.category !== 'desk'
  ).slice(0, 4);
  
  const deskNotes = allPosts.filter(p => p.category === 'desk').slice(0, 5);
  
  // [Section D] Fixed Bookshelf (최신순 3권)
  const latestBooks = allBookReviews
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* 1. Hero Section */}
      {featuredPost && <Hero post={featuredPost} />}
      
      {/* 2. [Section A] Lead Analysis & Recommended Reading (Random) */}
      <section className="mb-24">
        <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-2">
                <Newspaper className="text-primary" size={20} />
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">Lead Analysis & Recommendations</h2>
            </div>
        </div>
        <div className="grid md:grid-cols-12 gap-12">
          {/* Left: Big Lead Post */}
          <div className="md:col-span-8">
            {leadPost && <PostCard post={leadPost} variant="horizontal" className="h-full" />}
          </div>
          
          {/* Right: 2 Random Books */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <div className="bg-gray-50 p-6 rounded-[2rem] border border-gray-100 h-full">
                <div className="flex items-center gap-2 mb-6 border-b border-gray-200 pb-3">
                    <BookOpen size={16} className="text-primary" />
                    <h3 className="text-[10px] font-black uppercase tracking-widest text-gray-500">From the Library</h3>
                </div>
                <div className="space-y-8">
                    {randomBooks.map(book => (
                        <div key={book.slug} className="group flex gap-4 items-start">
                            <div className="shrink-0 w-16 h-24 bg-white shadow-md rounded-sm overflow-hidden border border-gray-100">
                                <img src={book.coverImage} alt={book.title} className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <Link href={`/posts/${book.category}/${book.slug}`}>
                                    <h4 className="text-base font-serif font-bold group-hover:text-primary transition-colors leading-tight mb-1">{book.title}</h4>
                                </Link>
                                <p className="text-[10px] text-gray-400 font-medium mb-2 uppercase tracking-tighter">by {book.author}</p>
                                <div className="text-yellow-500 text-[10px]">{'★'.repeat(Math.floor(book.rating || 0))}</div>
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-[9px] text-gray-400 mt-8 italic text-center">Refresh for more recommendations</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. [Section B] AI & Mobility Shift (Highlighted Strip) */}
      <section className="bg-gray-900 text-white -mx-4 px-4 py-20 mb-24 rounded-[3rem] overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent"></div>
        <div className="container mx-auto relative z-10">
            <div className="flex justify-between items-end mb-12 px-4 md:px-12 lg:px-20">
                <div>
                    <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-3">Industry Focus</h2>
                    <h3 className="text-4xl font-serif font-black tracking-tight text-white">AI & Mobility Shift</h3>
                </div>
                <Link href="/topics/digital-transformation" className="text-xs font-black tracking-widest uppercase flex items-center gap-2 hover:text-primary transition-colors text-white">
                    Explore All <ArrowRight size={14} />
                </Link>
            </div>
            <div className="grid md:grid-cols-4 gap-6 px-4 md:px-12 lg:px-20">
                {transformationPosts.map(post => (
                    <PostCard key={post.slug} post={post} variant="overlay" className="aspect-[3/4]" />
                ))}
            </div>
        </div>
      </section>

      {/* 4. [Section C] Insights & Sidebar */}
      <section className="mb-24 grid md:grid-cols-12 gap-16">
        <div className="md:col-span-8">
            <div className="flex items-center gap-2 mb-10 pb-4 border-b border-gray-100">
                <Mic2 className="text-primary" size={20} />
                <h2 className="text-xs font-black uppercase tracking-[0.3em] text-gray-900">More Stories</h2>
            </div>
            <div className="space-y-12">
                {mainFeed.map(post => (
                    <PostCard key={post.slug} post={post} variant="horizontal" />
                ))}
            </div>
        </div>

        <div className="md:col-span-4">
            <div className="sticky top-24 bg-gray-50 rounded-[2rem] p-8 border border-gray-100">
                <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-6 border-b border-gray-200 pb-4">On My Desk</h2>
                <div className="space-y-8">
                    {deskNotes.map(post => (
                        <div key={post.slug} className="group">
                            <Link href={`/posts/${post.category}/${post.slug}`}>
                                <h4 className="text-lg font-serif font-bold group-hover:text-primary transition-colors leading-snug mb-2">{post.title}</h4>
                            </Link>
                            <div className="flex items-center justify-between text-[10px] text-gray-400 font-bold uppercase tracking-widest">
                                <span>{post.source || 'ECONOMIST'}</span>
                                <span>{post.date}</span>
                            </div>
                        </div>
                    ))}
                </div>
                <Link href="/desk" className="mt-10 block text-center bg-gray-900 text-white py-4 rounded-full text-[10px] font-black tracking-widest uppercase hover:bg-primary transition-all shadow-lg">
                    Full Research Archive
                </Link>
            </div>
        </div>
      </section>

      {/* 5. [Section E] Videos & Broadcast */}
      <section className="mb-24">
        <div className="flex justify-between items-end mb-12">
            <div>
                <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-3">Broadcast & Media</h2>
                <h3 className="text-4xl font-serif font-black tracking-tight text-gray-900">Visual Insights</h3>
            </div>
            <Link href="/videos" className="text-xs font-black tracking-widest uppercase flex items-center gap-2 hover:text-primary transition-colors text-gray-900">
                View All Videos <ArrowRight size={14} />
            </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
            {allVideos.map((video) => (
                <VideoCard key={video.id} {...video} />
            ))}
        </div>
      </section>

      {/* 6. [Section D] The Library (Fixed 3 Bookshelf) */}
      <section className="bg-[#F4F4F2] -mx-4 px-4 py-24 mb-24 rounded-[3rem]">
         <div className="container mx-auto">
            <div className="flex items-center justify-center flex-col mb-16">
                <BookOpen className="text-primary mb-4" size={32} />
                <h2 className="text-[10px] font-black tracking-[0.4em] uppercase text-primary mb-2">The Reading List</h2>
                <h3 className="text-5xl font-serif font-black tracking-tighter text-gray-900">Bookshelf</h3>
            </div>
            
            <div className="grid md:grid-cols-3 gap-10">
                {latestBooks.map(post => (
                    <div key={post.slug} className="flex flex-col items-center text-center group">
                        <div className="w-48 h-72 bg-white shadow-2xl rounded-sm mb-8 overflow-hidden relative transition-transform duration-500 group-hover:-translate-y-4 group-hover:rotate-2">
                             <img 
                                src={post.coverImage} 
                                className="absolute inset-0 w-full h-full object-cover" 
                                alt={post.title} 
                             />
                             <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                        </div>
                        <h4 className="text-xl font-serif font-bold mb-2 group-hover:text-primary transition-colors">{post.title}</h4>
                        <p className="text-sm text-gray-500 italic mb-4">by {post.author}</p>
                        <div className="flex text-yellow-500 text-xs gap-1 mb-6">
                            {'★'.repeat(Math.floor(post.rating || 0))}
                        </div>
                        <Link href={`/posts/${post.category}/${post.slug}`} className="text-[10px] font-black uppercase tracking-widest border-b-2 border-gray-900 pb-1 hover:text-primary hover:border-primary transition-all">
                            Read Summary
                        </Link>
                    </div>
                ))}
            </div>
         </div>
      </section>

      {/* 7. Author & Newsletter Footer */}
      <section className="grid md:grid-cols-2 gap-16 items-stretch mb-16 border-t border-gray-200 pt-24">
        <div className="flex flex-col md:flex-row gap-8 items-center bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="w-full md:w-2/5 aspect-[3/4] overflow-hidden rounded-2xl shadow-lg">
                <img 
                    src="/reading-book-clean.jpg" 
                    alt="David Kim" 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
            </div>
            <div className="w-full md:w-3/5">
                <h2 className="text-[10px] font-black tracking-[0.3em] uppercase text-primary mb-4">The Author</h2>
                <h3 className="text-4xl font-serif font-black mb-6 tracking-tighter text-gray-900">Meet David</h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed font-light">
                    기술이라는 &apos;엔진&apos;에 맥락이라는 &apos;지도&apos;를 더합니다. <br/>
                    미래의 길을 설계하는 경제학자, 김동영입니다.
                </p>
                <Link href="/about" className="inline-block bg-primary text-white font-black py-3 px-8 rounded-full hover:bg-red-800 transition-all duration-300 shadow-lg hover:shadow-primary/30 text-[10px] tracking-widest uppercase">
                    READ FULL BIO
                </Link>
            </div>
        </div>

        <div className="bg-dark p-12 rounded-[2rem] text-center text-white relative overflow-hidden group flex flex-col justify-center">
            <div className="absolute inset-0 bg-primary opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>
            <h3 className="text-2xl font-serif font-black mb-4 tracking-tight text-white">Subscribe to the Newsletter</h3>
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
