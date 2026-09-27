import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { categoryLabels } from "@/lib/site";
import { getAllPosts, getFeaturedPost, type Post } from "@/lib/posts";
import { getAllVideos } from "@/lib/videos";
import { newsItems } from "@/lib/news";
import { formatDate, firstSentence } from "@/lib/desk";
import YouTubeFacade from "@/components/YouTubeFacade";
import { ArrowRight } from "lucide-react";

// 비교용 시안: '정통 에디토리얼' 홈. 선택되지 않으면 삭제한다.
export const metadata: Metadata = {
  title: "시안 · 정통 에디토리얼 | David's Notes",
  robots: { index: false, follow: false },
};

export const revalidate = 3600;

const href = (post: Post) => `/posts/${post.category}/${post.slug}`;
const link = "hover:underline decoration-1 underline-offset-[5px]";

function SectionHead({ title, more, moreHref }: { title: string; more?: string; moreHref?: string }) {
  return (
    <div className="border-t-4 border-primary pt-3 mb-8 flex items-baseline justify-between gap-4">
      <h2 className="font-serif font-black text-2xl md:text-3xl text-gray-900 tracking-tight">{title}</h2>
      {moreHref && (
        <Link href={moreHref} className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 py-2 text-sm font-bold text-gray-900 hover:text-primary transition-colors">
          {more} <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export default function EditorialPreview() {
  const all = getAllPosts();
  const featured = getFeaturedPost();
  const focus = ["digital-transformation", "mobility", "history"];
  const rest = all.filter((p) => p.slug !== featured?.slug);
  const latest = rest.filter((p) => focus.includes(p.category)).slice(0, 5);
  const byTopic = (cat: string) => rest.filter((p) => p.category === cat && !latest.includes(p)).slice(0, 3);
  const topics = ["digital-transformation", "mobility", "history"].map((cat) => ({ cat, posts: byTopic(cat) }));
  const desk = all.filter((p) => p.category === "desk").slice(0, 4);
  const books = all.filter((p) => p.category === "books").slice(0, 4);
  const videos = getAllVideos().slice(0, 2);
  const news = newsItems.slice(0, 4);

  return (
    <div className="bg-white text-gray-900 pt-28 md:pt-32 pb-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        {/* Lead + Latest */}
        {featured && (
          <section className="grid lg:grid-cols-12 gap-10 lg:gap-12 pb-14 mb-14 border-b border-gray-200">
            <article className="lg:col-span-8">
              {featured.coverImage && (
                <Link href={href(featured)} className="relative block aspect-[16/9] mb-6 bg-gray-100 overflow-hidden" tabIndex={-1} aria-hidden="true">
                  <Image src={featured.coverImage} alt="" fill priority sizes="(min-width: 1024px) 800px, 100vw" className="object-cover" />
                </Link>
              )}
              <p className="text-sm font-bold text-primary mb-3">{categoryLabels[featured.category]}</p>
              <h1 className="font-serif font-black text-[2.1rem] leading-[1.18] md:text-[3.1rem] md:leading-[1.14] tracking-tight text-balance mb-5">
                <Link href={href(featured)} className={link}>{featured.title}</Link>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 max-w-[42rem] mb-6 text-pretty">{featured.excerpt}</p>
              <p className="text-sm text-gray-600">
                <span className="font-bold text-gray-900">김동영 David Kim</span>
                <span className="mx-2 text-gray-300">|</span>
                {formatDate(featured.date)}
              </p>
            </article>

            <aside className="lg:col-span-4">
              <h2 className="font-serif font-black text-xl border-b-2 border-gray-900 pb-2 mb-2">최신 글</h2>
              <ol className="divide-y divide-gray-200">
                {latest.map((post, i) => (
                  <li key={post.slug} className="py-5 grid grid-cols-[1.75rem_1fr] gap-3">
                    <span className="font-serif font-black text-2xl leading-none text-primary">{i + 1}</span>
                    <div>
                      <p className="text-sm text-gray-600 mb-1">{categoryLabels[post.category]}</p>
                      <h3 className="font-serif font-bold text-lg leading-snug text-balance">
                        <Link href={href(post)} className={link}>{post.title}</Link>
                      </h3>
                    </div>
                  </li>
                ))}
              </ol>
            </aside>
          </section>
        )}

        {/* Focus: three section fronts */}
        <section className="grid md:grid-cols-3 gap-10 mb-16">
          {topics.map(({ cat, posts }) => (
            <div key={cat}>
              <SectionHead title={categoryLabels[cat]} more="더 보기" moreHref={`/topics/${cat}`} />
              {posts.length === 0 && <p className="text-gray-600">곧 첫 글이 올라옵니다.</p>}
              <ul className="space-y-6">
                {posts.map((post, i) => (
                  <li key={post.slug} className={i > 0 ? "pt-6 border-t border-gray-200" : ""}>
                    {i === 0 && post.coverImage && (
                      <div className="relative aspect-[3/2] mb-4 bg-gray-100 overflow-hidden">
                        <Image src={post.coverImage} alt="" fill sizes="(min-width: 768px) 380px, 100vw" className="object-cover" />
                      </div>
                    )}
                    <h3 className={`font-serif font-bold leading-snug text-balance ${i === 0 ? "text-xl" : "text-lg"}`}>
                      <Link href={href(post)} className={link}>{post.title}</Link>
                    </h3>
                    <p className="text-sm text-gray-600 mt-1.5">{formatDate(post.date)}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* 데스크 노트 */}
        {desk.length > 0 && (
          <section className="mb-16">
            <SectionHead title="데스크 노트" more="전체 보기" moreHref="/desk" />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {desk.map((post) => (
                <article key={post.slug}>
                  <p className="text-sm font-black tracking-wide uppercase text-gray-900 mb-2">{post.source || "ECONOMIST"}</p>
                  <h3 className="font-serif font-bold text-lg leading-snug mb-2 text-balance">
                    <Link href={href(post)} className={link}>{post.title}</Link>
                  </h3>
                  <p className="text-[0.95rem] text-gray-700 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <p className="text-sm text-gray-600 mt-2">{formatDate(post.date)}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 언론 보도 + 방송·강연 */}
        <section className="grid lg:grid-cols-12 gap-12 mb-16">
          <div className="lg:col-span-5">
            <SectionHead title="언론 보도" more="전체 보도" moreHref="/news" />
            <ul className="divide-y divide-gray-200">
              {news.map((item) => (
                <li key={item.link} className="py-4 first:pt-0">
                  <p className="text-sm text-gray-600 mb-1"><span className="font-bold text-gray-900">{item.media}</span> · {item.date}</p>
                  <h3 className="font-serif font-bold text-lg leading-snug text-balance">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className={link}>{item.title}</a>
                  </h3>
                  {item.quote && <p className="text-[0.95rem] text-gray-700 mt-1.5">“{firstSentence(item.quote.replace(/^["“]|["”]$/g, ""))}”</p>}
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-7">
            <SectionHead title="방송·강연" more="전체 영상" moreHref="/videos" />
            <div className="grid sm:grid-cols-2 gap-6">
              {videos.map((video) => (
                <article key={video.id}>
                  <div className="relative aspect-video bg-gray-900 mb-3">
                    <YouTubeFacade youtubeId={video.youtubeId} title={video.title} />
                  </div>
                  <h3 className="font-serif font-bold text-lg leading-snug text-balance">{video.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{formatDate(video.date)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* 서재 */}
        {books.length > 0 && (
          <section className="mb-16">
            <SectionHead title="서재" more="전체 서평" moreHref="/books" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {books.map((book) => (
                <article key={book.slug}>
                  <div className="relative aspect-[2/3] mb-4 bg-gray-100 border border-gray-200">
                    {book.coverImage && <Image src={book.coverImage} alt="" fill sizes="(min-width: 768px) 260px, 45vw" className="object-cover" />}
                  </div>
                  <h3 className="font-serif font-bold text-base leading-snug text-balance">
                    <Link href={href(book)} className={link}>{book.title}</Link>
                  </h3>
                  {book.author && <p className="text-sm text-gray-600 mt-1">{book.author}</p>}
                  {book.rating && <p className="text-sm font-bold text-gray-900 mt-1">필자 평점 {Math.floor(book.rating)}/5</p>}
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 소개 */}
        <section className="border-t-4 border-primary pt-10 grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-3">
            <div className="relative aspect-[3/4] max-w-[220px] bg-gray-100">
              <Image src="/reading-book-clean.jpg" alt="책을 읽는 김동영 일러스트" fill sizes="220px" className="object-cover" />
            </div>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-serif font-black text-3xl md:text-4xl mb-4">소개</h2>
            <p className="font-serif text-2xl md:text-[2rem] leading-snug mb-4 text-balance">기술이라는 &apos;엔진&apos;에, 맥락이라는 &apos;지도&apos;를 더합니다.</p>
            <p className="text-lg text-gray-700 mb-8">미래의 길을 설계하는 경제학자, 김동영입니다.</p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-gray-900 text-white px-6 py-3.5 text-sm font-bold hover:bg-primary transition-colors">
              소개 전문 <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
