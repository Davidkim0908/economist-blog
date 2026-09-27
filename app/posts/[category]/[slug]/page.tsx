import Image from "next/image";
import type { Metadata } from "next";
import { getPostBySlug, getAllPosts, postImage, isSeriesCover } from "@/lib/posts";
import PostVisual from "@/components/PostVisual";
import { seriesStyle } from "@/lib/site";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Share2, Facebook, Linkedin, Twitter } from "lucide-react";

// Define premium custom components for MDX
const components = {
  h2: (props: any) => (
    <h2 className="text-2xl md:text-3xl font-display font-black mt-16 mb-6 text-gray-900 leading-tight tracking-tight border-b border-gray-100 pb-4" {...props} />
  ),
  h3: (props: any) => (
    <h3 className="text-xl md:text-2xl font-display font-bold mt-12 mb-4 text-gray-900 tracking-tight" {...props} />
  ),
  p: (props: any) => (
    <p className="mb-8 leading-[1.8] text-gray-800 text-lg font-sans font-light break-keep" {...props} />
  ),
  ul: (props: any) => (
    <ul className="list-disc list-outside mb-8 pl-6 space-y-3 text-gray-800" {...props} />
  ),
  ol: (props: any) => (
    <ol className="list-decimal list-outside mb-8 pl-6 space-y-3 text-gray-800" {...props} />
  ),
  li: (props: any) => (
    <li className="text-lg font-sans font-light leading-relaxed" {...props} />
  ),
  strong: (props: any) => (
    <strong className="font-black text-gray-900" {...props} />
  ),
  blockquote: (props: any) => (
    <blockquote className="relative border-l-4 border-primary pl-8 my-12 text-2xl font-display text-gray-600 bg-gray-50/50 py-10 pr-8 rounded-r-[2rem]" {...props} />
  ),
  hr: () => <hr className="my-16 border-gray-100" />,
};

interface Props {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

// 공유 미리보기(OG)도 같은 대표 이미지
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);
  if (!post) return {};
  // 연재 번호 표지 글은 번호가 들어간 공유 이미지를 자동 생성
  const image = postImage(post) ?? (isSeriesCover(post) ? `/og/series/${post.seriesOrder}?s=${seriesStyle(post.series!).key}` : undefined);
  return {
    title: `${post.title} | David's Notes`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt, images: image ? [image] : undefined },
  };
}

export default async function PostPage({ params }: Props) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  // Format category label
  const categoryLabel = category === 'digital-transformation' ? 'AI Transformation' :
                        category === 'mobility' ? 'Mobility Transformation' :
                        category === 'history' ? 'Growth Trajectory' :
                        category === 'books' ? 'Book Reviews' : 
                        category === 'desk' ? 'On My Desk' :
                        category;

  const sectionNav = [
    { key: "digital-transformation", label: "AI Transformation", href: "/topics/digital-transformation" },
    { key: "mobility", label: "Mobility Transformation", href: "/topics/mobility" },
    { key: "history", label: "Growth Trajectory", href: "/topics/history" },
    { key: "books", label: "Books", href: "/books" },
    { key: "desk", label: "On My Desk", href: "/desk" },
  ];
  // 연재 전체 회차 = 가장 큰 회차 번호 (빠진 회차가 있어도 "50 / 127"처럼 읽히게)
  const seriesCount = post.series ? Math.max(...getAllPosts().filter((p) => p.series === post.series).map((p) => p.seriesOrder ?? 0)) : 0;

  return (
    <article className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
      {/* 1. Header & Title Section */}
      <header className="container mx-auto px-4 max-w-4xl mb-16">
        <div className="flex flex-col items-center text-center">
            <Link 
                href={`/topics/${category}`}
                className="group inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-primary mb-10 border border-primary/20 px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300"
            >
                <ArrowLeft size={12} className="group-hover:-translate-x-1 transition-transform" />
                {categoryLabel}
            </Link>
            
            <h1 className="type-article-ko mb-10 text-gray-900 break-keep text-balance">
                {post.title}
            </h1>
            
            <div className="flex items-center gap-6 mb-12">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-lg shrink-0">
                        <Image src="/images/david.jpg" alt="David Kim" width={40} height={40} className="w-full h-full object-cover" />
                    </div>
                    <div className="text-left">
                        <div className="font-bold text-gray-900 text-sm">David Kim</div>
                        <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">{post.date}</div>
                    </div>
                </div>
                <div className="h-8 w-[1px] bg-gray-200" />
                <div className="flex items-center gap-2 text-gray-500">
                    <Clock size={14} />
                    <span className="text-xs font-bold uppercase tracking-widest">8 min read</span>
                </div>
            </div>

            <p className="text-lg md:text-[1.1875rem] text-gray-600 leading-relaxed max-w-3xl font-display">
                &quot;{post.excerpt}&quot;
            </p>
        </div>
      </header>

      {/* 2. Full Bleed Featured Image Container — 연재 번호 표지 글은 본문 위 이미지 없이 */}
      {!isSeriesCover(post) && (
      <div className="container mx-auto px-4 lg:px-8 mb-20">
        {category === 'books' ? (
          <div className="relative w-full min-h-[400px] md:min-h-[600px] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-900/5 flex items-center justify-center p-8 md:p-16">
            {/* Background Blur Effect */}
            <div 
              className="absolute inset-0 blur-3xl opacity-30 scale-110"
              style={{ 
                backgroundImage: `url(${post.coverImage || "/placeholder.jpg"})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            />
            {/* Full Book Cover */}
            <div className="relative z-10 w-full max-w-[400px] group">
              <Image 
                src={post.coverImage || "/placeholder.jpg"} 
                alt={post.title} 
                width={800}
                height={1200}
                priority
                sizes="400px"
                className="w-full h-auto shadow-[0_20px_50px_rgba(0,0,0,0.3)] rounded-sm transform transition-transform duration-700 group-hover:scale-[1.02]"
              />
              {/* Subtle Overlay */}
              <div className="absolute inset-0 bg-black/5 rounded-sm"></div>
            </div>
            {/* Bottom Gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>
        ) : (
          <figure>
            <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl">
                <PostVisual post={post} alt={post.heroAlt ?? post.title} priority sizes="(min-width: 1440px) 1100px, 100vw" />
            </div>
            {post.heroCredit && <figcaption className="mt-3 text-right text-xs text-gray-600">{post.heroCredit}</figcaption>}
          </figure>
        )}
      </div>
      )}

      {/* 3. Main Content Grid */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
            
            {/* Left Sidebar: Social & Meta */}
            <aside className="hidden md:block md:col-span-1">
                <div className="sticky top-32 flex flex-col items-center gap-8">
                    <span className="text-xs font-black uppercase tracking-[0.2em] text-gray-500 vertical-text rotate-180">SHARE</span>
                    <div className="flex flex-col gap-4">
                        <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                            <Twitter size={16} />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                            <Facebook size={16} />
                        </button>
                        <a href="https://www.linkedin.com/in/kim-dongyoung-23a84493/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 shadow-sm">
                            <Linkedin size={16} />
                        </a>
                    </div>
                </div>
            </aside>

            {/* Center Content */}
            <div className="md:col-span-8 lg:col-span-7 md:col-start-2 lg:col-start-3">
                <div className="prose prose-gray max-w-none">
                    <MDXRemote source={post.content} components={components} />
                </div>

                {/* 사진을 대표로 쓰는 글은 기존 인포그래픽을 본문 끝 요약 도해로 */}
                {post.heroImage && post.coverImage && (
                  <figure className="mt-16">
                    <p className="type-label-en text-gray-600 mb-4">At a Glance · 한눈에 보기</p>
                    <Image
                      src={post.coverImage}
                      alt={`${post.title} 요약 도해`}
                      width={1600}
                      height={900}
                      sizes="(min-width: 1024px) 720px, 100vw"
                      className="w-full h-auto rounded-2xl border border-gray-200"
                    />
                  </figure>
                )}
                
                {/* Footer Section */}
                <footer className="mt-24 pt-12 border-t border-gray-100">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
                        <div className="flex items-center gap-4">
                            <Share2 size={20} className="text-gray-500" />
                            <span className="text-sm font-black uppercase tracking-widest text-gray-900">Enjoyed this story? Share it.</span>
                        </div>
                        <div className="flex gap-4">
                             <button className="bg-gray-900 text-white px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase hover:bg-primary transition-colors shadow-lg shadow-gray-200">
                                Copy Link
                             </button>
                        </div>
                    </div>
                </footer>
            </div>

            {/* Right Sidebar: Context/Related */}
            <aside className="hidden lg:block lg:col-span-3">
                <div className="sticky top-32 space-y-12">
                    <div className="bg-white p-8 rounded-[2rem] border border-gray-50 shadow-sm">
                        <h4 className="text-xs font-black uppercase tracking-[0.2em] text-primary mb-6 border-b border-gray-100 pb-4">On My Desk</h4>
                        <p className="text-xs text-gray-500 leading-relaxed font-light mb-6">이 포스팅과 연결된 더 깊은 데이터와 보고서들은 &apos;On My Desk&apos; 섹션에서 확인하실 수 있습니다.</p>
                        <Link href="/desk" className="text-xs font-black uppercase tracking-widest border-b-2 border-gray-900 pb-1 hover:text-primary hover:border-primary transition-all">Explore Research</Link>
                    </div>
                    
                    {/* 지금 읽는 글의 위치: 현재 섹션 강조 + 연재면 회차 */}
                    <nav className="px-4" aria-label="현재 위치">
                        <p className="type-label-en text-gray-600 mb-5">You are reading</p>
                        <ul className="space-y-1">
                            {sectionNav.map((s) => {
                                const current = s.key === category;
                                return (
                                    <li key={s.key}>
                                        <Link
                                            href={s.href}
                                            aria-current={current ? "page" : undefined}
                                            className={`block border-l-2 pl-3 py-1.5 type-title-en text-[1rem] transition-colors ${
                                                current ? "border-gray-900 text-gray-900" : "border-transparent text-gray-500 hover:text-gray-900"
                                            }`}
                                        >
                                            {s.label}
                                        </Link>
                                        {current && post.series && (
                                            <Link
                                                href={s.href}
                                                className="block border-l-2 border-gray-900 pl-3 pb-2 text-sm text-gray-600 hover:text-gray-900"
                                            >
                                                <span className="font-medium text-gray-900">{post.series}</span>
                                                <span className="mx-1.5">·</span>
                                                <span className="tabular-nums">{post.seriesOrder}회 / {seriesCount}회</span>
                                            </Link>
                                        )}
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </div>
            </aside>
        </div>
      </div>
    </article>
  );
}
