import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getFeaturedPost, type Post } from "@/lib/posts";
import { getAllVideos } from "@/lib/videos";
import { formatDate, firstSentence } from "@/lib/desk";
import YouTubeFacade from "@/components/YouTubeFacade";
import { ArrowRight } from "lucide-react";

// 비교용 시안: Gates Notes 풍 홈. 선택되지 않으면 삭제한다.
export const metadata: Metadata = {
  title: "시안 · Gates Notes 풍 | David's Notes",
  robots: { index: false, follow: false },
};

export const revalidate = 3600;

// 시안용 스톡 사진 (Unsplash License). 실제 적용 시 필자가 고른 사진으로 교체.
const HERO_PHOTO = "https://images.unsplash.com/photo-1546874177-9e664107314e?w=2400&q=80&fm=jpg";
const HERO_CREDIT = "Photo: Yohan Cho / Unsplash";

const categoryLabels: Record<string, string> = {
  "digital-transformation": "AI Transformation",
  mobility: "Mobility Transformation",
  history: "Growth Trajectory",
  books: "Books",
  desk: "On My Desk",
};

const href = (post: Post) => `/posts/${post.category}/${post.slug}`;

function Kicker({ children }: { children: React.ReactNode }) {
  return <p className="text-sm font-bold tracking-wide uppercase text-gray-900 mb-3">{children}</p>;
}

function SectionTitle({ title, moreHref, more }: { title: string; moreHref?: string; more?: string }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-10">
      <h2 className="font-serif font-black text-3xl md:text-[2.6rem] tracking-tight text-gray-900">{title}</h2>
      {moreHref && (
        <Link href={moreHref} className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 py-2 text-base font-semibold text-gray-900 hover:text-primary transition-colors">
          {more} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export default function GatesNotesPreview() {
  const all = getAllPosts();
  const featured = getFeaturedPost();
  const focus = ["digital-transformation", "mobility", "history"];
  const stories = all.filter((p) => focus.includes(p.category) && p.slug !== featured?.slug).slice(0, 3);
  const desk = all.filter((p) => p.category === "desk").slice(0, 3);
  const books = all.filter((p) => p.category === "books").slice(0, 4);
  const videos = getAllVideos().slice(0, 2);

  return (
    <div className="bg-white text-gray-900 pb-24">
      {/* Cinematic hero: one photo, one card */}
      {featured && (
        <section className="relative min-h-[640px] h-[92vh] max-h-[960px] overflow-hidden bg-black">
          <Image src={HERO_PHOTO} alt="새벽녘 서울 도심과 남산타워" fill priority sizes="100vw" className="object-cover object-[center_70%]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/40" aria-hidden="true" />
          <div className="relative h-full container mx-auto px-4 lg:px-8 max-w-[1240px] flex items-end pb-12 md:pb-20">
            <div className="w-full max-w-[34rem] bg-[#E9E9E7]/95 rounded-2xl px-7 py-8 md:px-10 md:py-10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
              <Kicker>{categoryLabels[featured.category]}</Kicker>
              <h1 className="font-serif font-black text-[2rem] leading-[1.15] md:text-[2.6rem] md:leading-[1.12] tracking-tight text-balance mb-5">
                <Link href={href(featured)} className="hover:underline decoration-2 underline-offset-[6px]">{featured.title}</Link>
              </h1>
              <p className="text-lg leading-relaxed text-gray-800 mb-6 text-pretty">{firstSentence(featured.excerpt)}</p>
              <Link href={href(featured)} className="inline-flex items-center gap-2 text-base font-bold text-gray-900 hover:text-primary transition-colors">
                Read the story <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
          </div>
          <p className="absolute right-4 bottom-3 text-xs text-white/80">{HERO_CREDIT}</p>
        </section>
      )}

      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        {/* Latest stories */}
        <section className="pt-20 md:pt-28 pb-20">
          <SectionTitle title="Latest from David" moreHref="/topics/digital-transformation" more="See all" />
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {stories.map((post) => (
              <article key={post.slug} className="group">
                <Link href={href(post)} className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-gray-100 mb-6" tabIndex={-1} aria-hidden="true">
                  {post.coverImage && <Image src={post.coverImage} alt="" fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover" />}
                </Link>
                <Kicker>{categoryLabels[post.category]}</Kicker>
                <h3 className="font-serif font-black text-2xl leading-snug tracking-tight text-balance mb-3">
                  <Link href={href(post)} className="hover:underline decoration-2 underline-offset-[5px]">{post.title}</Link>
                </h3>
                <p className="text-base leading-relaxed text-gray-700 line-clamp-3">{post.excerpt}</p>
              </article>
            ))}
          </div>
        </section>

        {/* Meet David band */}
        <section className="rounded-3xl bg-[#F1F0EC] overflow-hidden grid md:grid-cols-2 items-center mb-24">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]">
            <Image src="/reading-book-clean.jpg" alt="책을 읽는 김동영 일러스트" fill sizes="(min-width: 768px) 620px, 100vw" className="object-cover" />
          </div>
          <div className="px-7 py-10 md:px-14 md:py-16">
            <Kicker>Meet David</Kicker>
            <p className="font-serif font-black text-3xl md:text-[2.4rem] leading-[1.2] tracking-tight text-balance mb-6">
              기술이라는 &apos;엔진&apos;에, 맥락이라는 &apos;지도&apos;를 더합니다.
            </p>
            <p className="text-lg leading-relaxed text-gray-700 mb-8">
              한쪽 발은 자율주행과 AI가 지배할 &apos;가장 빠른 미래&apos;에, 다른 한쪽 발은 한국 경제가 숨 가쁘게 달려온 &apos;치열한 역사&apos;에 딛고 있습니다.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-7 py-3.5 text-base font-semibold hover:bg-primary transition-colors">
              About David <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* What I'm reading */}
        {desk.length > 0 && (
          <section className="mb-24">
            <SectionTitle title="On My Desk" moreHref="/desk" more="See all" />
            <div className="grid md:grid-cols-3 gap-8">
              {desk.map((post) => (
                <article key={post.slug} className="rounded-2xl bg-[#F1F0EC] p-7 flex flex-col">
                  <p className="text-sm font-bold tracking-wide uppercase text-gray-600 mb-4">{post.source || "ECONOMIST"}</p>
                  <h3 className="font-serif font-black text-xl leading-snug text-balance mb-4">
                    <Link href={href(post)} className="hover:underline decoration-2 underline-offset-[5px]">{post.title}</Link>
                  </h3>
                  <p className="text-base leading-relaxed text-gray-700 line-clamp-4 mb-5">{post.excerpt}</p>
                  <p className="mt-auto text-sm text-gray-600">{formatDate(post.date)}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Videos */}
        {videos.length > 0 && (
          <section className="mb-24">
            <SectionTitle title="Watch" moreHref="/videos" more="All videos" />
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <article key={video.id}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 mb-5">
                    <YouTubeFacade youtubeId={video.youtubeId} title={video.title} />
                  </div>
                  <h3 className="font-serif font-black text-xl leading-snug text-balance">{video.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{formatDate(video.date)}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Books */}
        {books.length > 0 && (
          <section>
            <SectionTitle title="Books" moreHref="/books" more="All reviews" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {books.map((book) => (
                <article key={book.slug}>
                  <Link href={href(book)} className="block relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100 mb-4 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]" tabIndex={-1} aria-hidden="true">
                    {book.coverImage && <Image src={book.coverImage} alt="" fill sizes="(min-width: 768px) 280px, 45vw" className="object-cover" />}
                  </Link>
                  <h3 className="font-serif font-bold text-lg leading-snug text-balance">
                    <Link href={href(book)} className="hover:underline decoration-2 underline-offset-[5px]">{book.title}</Link>
                  </h3>
                  {book.author && <p className="text-sm text-gray-600 mt-1">{book.author}</p>}
                </article>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
