import Image from "next/image";
import Link from "next/link";
import { categoryLabelEn, isLatinTitle } from "@/lib/site";
import { getAllPosts, getFeaturedPost, type Post } from "@/lib/posts";
import { getAllVideos } from "@/lib/videos";
import { formatDate, firstSentence } from "@/lib/desk";
import YouTubeFacade from "@/components/YouTubeFacade";
import { ArrowRight } from "lucide-react";

// 홈: Gates Notes 풍 구성 + 교정지 종이 바탕(paper/sheet)
// 정적 렌더링 + 1시간마다 재생성
export const revalidate = 3600;

const href = (post: Post) => `/posts/${post.category}/${post.slug}`;
// 사진 필드(heroImage)가 있으면 사진, 없으면 대표 이미지
const photo = (post: Post) => post.heroImage || post.coverImage;

// 카테고리·출처는 제목 위 키커가 아니라 본문 아래 메타 줄로
function Meta({ label, date }: { label: string; date?: string }) {
  return (
    <p className="text-sm text-gray-600 flex items-center gap-2">
      <span className="type-label-en">{label}</span>
      {date && <><span aria-hidden="true">·</span><span>{date}</span></>}
    </p>
  );
}

function SectionTitle({ title, ko, moreHref, more }: { title: string; ko?: string; moreHref?: string; more?: string }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-10">
      <div className="flex items-baseline gap-4 flex-wrap">
        <h2 className="type-section-en text-gray-900">{title}</h2>
        {ko && <span className="type-sub-ko text-gray-600">{ko}</span>}
      </div>
      {moreHref && (
        <Link href={moreHref} className="shrink-0 whitespace-nowrap inline-flex items-center gap-1.5 py-2 text-base font-semibold text-gray-900 hover:text-primary transition-colors">
          {more} <ArrowRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const all = getAllPosts();
  const featured = getFeaturedPost();
  const focus = ["digital-transformation", "mobility", "history"];
  const stories = all.filter((p) => focus.includes(p.category) && p.slug !== featured?.slug).slice(0, 3);
  const desk = all.filter((p) => p.category === "desk").slice(0, 3);
  const books = all.filter((p) => p.category === "books").slice(0, 4);
  const videos = getAllVideos().slice(0, 2);

  return (
    <div className="bg-paper text-gray-900 pb-28 -mb-20">
      {/* Cinematic hero: one photo, one card */}
      {featured && (
        <section className="relative min-h-[560px] h-[88svh] md:h-[92vh] max-h-[960px] overflow-hidden bg-black">
          {photo(featured) && (
            <Image src={photo(featured)!} alt={featured.heroAlt ?? ""} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: featured.heroFocus ?? "center 70%" }} />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-black/40" aria-hidden="true" />
          <div className="relative h-full container mx-auto px-4 lg:px-8 max-w-[1240px] flex items-end pb-12 md:pb-20">
            <div className="hero-card w-full max-w-[34rem] bg-sheet/95 rounded-2xl px-5 py-6 md:px-10 md:py-10 shadow-[0_24px_60px_-20px_rgba(0,0,0,0.5)]">
              <h1 className="type-display-ko text-balance mb-4">
                <Link href={href(featured)} className="hover:underline decoration-2 underline-offset-[6px]">{featured.title}</Link>
              </h1>
              <p className="text-[0.95rem] sm:text-[1.0625rem] leading-relaxed text-gray-700 mb-5 sm:mb-6 line-clamp-2 sm:line-clamp-none text-pretty">{firstSentence(featured.excerpt)}</p>
              <div className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3">
                <Meta label={categoryLabelEn(featured.category)} date={formatDate(featured.date)} />
                <Link href={href(featured)} className="inline-flex items-center gap-2 py-2 text-base font-bold text-gray-900 hover:text-primary transition-colors">
                  전문 읽기 <ArrowRight size={18} aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>
          {featured.heroCredit && <p className="absolute right-4 bottom-3 text-xs text-white/80">{featured.heroCredit}</p>}
        </section>
      )}

      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        {/* Latest stories */}
        <section className="pt-20 md:pt-28 pb-20">
          <SectionTitle title="Latest" ko="최신 글" moreHref="/topics/digital-transformation" more="전체 보기" />
          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {stories.map((post) => (
              <article key={post.slug} className="group">
                <Link href={href(post)} className="block relative aspect-[4/3] rounded-2xl overflow-hidden bg-sheet mb-6" tabIndex={-1} aria-hidden="true">
                  {photo(post) && <Image src={photo(post)!} alt="" fill sizes="(min-width: 768px) 400px, 100vw" className="object-cover" />}
                </Link>
                <h3 className="type-title-ko text-[1.3125rem] text-balance mb-2.5">
                  <Link href={href(post)} className="hover:underline decoration-2 underline-offset-[5px]">{post.title}</Link>
                </h3>
                <p className="text-[0.95rem] leading-relaxed text-gray-600 line-clamp-3 mb-3">{post.excerpt}</p>
                <Meta label={categoryLabelEn(post.category)} date={formatDate(post.date)} />
              </article>
            ))}
          </div>
        </section>

        {/* 소개 band */}
        <section className="rounded-3xl bg-sheet overflow-hidden grid grid-cols-[minmax(0,1fr)] md:grid-cols-2 items-center mb-24">
          <div className="relative aspect-[4/3] md:aspect-auto md:h-full min-h-[320px]">
            <Image src="/reading-book-clean.jpg" alt="책을 읽는 김동영 일러스트" fill sizes="(min-width: 768px) 620px, 100vw" className="object-cover" />
          </div>
          <div className="min-w-0 px-5 py-9 sm:px-7 md:px-14 md:py-16">
            <h2 className="type-section-en text-gray-900 mb-5">Meet David</h2>
            <p className="type-display-ko text-[1.5rem] sm:text-[1.75rem] md:text-[2.25rem] text-balance mb-5">
              기술이라는 &apos;엔진&apos;에, 맥락이라는 &apos;지도&apos;를 더합니다.
            </p>
            <p className="text-[1.0625rem] leading-relaxed text-gray-600 mb-8">
              한쪽 발은 자율주행과 AI가 지배할 &apos;가장 빠른 미래&apos;에, 다른 한쪽 발은 한국 경제가 숨 가쁘게 달려온 &apos;치열한 역사&apos;에 딛고 있습니다.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 bg-gray-900 text-white rounded-full px-7 py-3.5 text-base font-semibold hover:bg-primary transition-colors">
              김동영 소개 <ArrowRight size={18} aria-hidden="true" />
            </Link>
          </div>
        </section>

        {/* What I'm reading */}
        {desk.length > 0 && (
          <section className="mb-24">
            <SectionTitle title="On My Desk" ko="필자가 골라 읽은 해외 기사" moreHref="/desk" more="전체 보기" />
            <div className="grid md:grid-cols-3 gap-8">
              {desk.map((post) => (
                <article key={post.slug} className="rounded-2xl bg-sheet p-7 flex flex-col">
                  <h3 className={`${isLatinTitle(post.title) ? "type-title-en" : "type-title-ko"} text-balance mb-3`}>
                    <Link href={href(post)} className="hover:underline decoration-2 underline-offset-[5px]">{post.title}</Link>
                  </h3>
                  <p className="text-[0.95rem] leading-relaxed text-gray-600 line-clamp-4 mb-5">{post.excerpt}</p>
                  <div className="mt-auto"><Meta label={post.source || "ECONOMIST"} date={formatDate(post.date)} /></div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Videos */}
        {videos.length > 0 && (
          <section className="mb-24">
            <SectionTitle title="Videos" ko="방송·강연" moreHref="/videos" more="전체 영상" />
            <div className="grid md:grid-cols-2 gap-8">
              {videos.map((video) => (
                <article key={video.id}>
                  <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 mb-5">
                    <YouTubeFacade youtubeId={video.youtubeId} title={video.title} />
                  </div>
                  <h3 className="type-title-ko text-balance">{video.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{formatDate(video.date)}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Books */}
        {books.length > 0 && (
          <section>
            <SectionTitle title="Books" ko="서평" moreHref="/books" more="전체 서평" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {books.map((book) => (
                <article key={book.slug}>
                  <Link href={href(book)} className="block relative aspect-[2/3] rounded-lg overflow-hidden bg-gray-100 mb-4 shadow-[0_12px_30px_-12px_rgba(0,0,0,0.35)]" tabIndex={-1} aria-hidden="true">
                    {book.coverImage && <Image src={book.coverImage} alt="" fill sizes="(min-width: 768px) 280px, 45vw" className="object-cover" />}
                  </Link>
                  <h3 className="type-title-ko text-[1.0625rem] text-balance">
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
