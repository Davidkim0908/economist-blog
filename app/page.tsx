import Image from "next/image";
import Link from "next/link";
import { getAllPosts, getFeaturedPost, type Post } from "@/lib/posts";
import { getAllVideos } from "@/lib/videos";
import { newsItems } from "@/lib/news";
import { deskNote, conclusion, firstSentence, formatDate, dateline } from "@/lib/desk";
import Drawn from "@/components/home/Drawn";
import YouTubeFacade from "@/components/YouTubeFacade";
import { ArrowRight } from "lucide-react";

// 정적 렌더링 + 1시간마다 재생성 (날짜줄이 시간 단위로 갱신됨)
export const revalidate = 3600;

const categoryLabels: Record<string, string> = {
  "digital-transformation": "AI Transformation",
  mobility: "Mobility Transformation",
  history: "Growth Trajectory",
  books: "Books",
  desk: "On My Desk",
};

const postHref = (post: Post) => `/posts/${post.category}/${post.slug}`;

// 헤드라인의 앞 구절(…, —, : 앞)에 빨간 펜 밑줄. 구분자가 없으면 전체.
function splitHeadline(title: string): [string, string] {
  const m = title.match(/^(.+?)(\s*(?:…|—|:)\s*.*)$/);
  return m ? [m[1], m[2]] : [title, ""];
}

// 교정지 모서리의 재단 표시
function RegMarks() {
  const mark = (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M7 0v14M0 7h14" />
      <circle cx="7" cy="7" r="3.5" />
    </svg>
  );
  return (
    <>
      <span className="reg-mark -top-[7px] -left-[7px]">{mark}</span>
      <span className="reg-mark -top-[7px] -right-[7px]">{mark}</span>
      <span className="reg-mark -bottom-[7px] -left-[7px]">{mark}</span>
      <span className="reg-mark -bottom-[7px] -right-[7px]">{mark}</span>
    </>
  );
}

function ReviewStamp() {
  return (
    <span className="review-stamp" aria-label="D. 검토 완료">
      <span className="font-serif font-black text-lg" aria-hidden="true">D.</span>
      <span className="text-[0.75rem] font-bold tracking-widest" aria-hidden="true">검토</span>
    </span>
  );
}

// 교정지 여백의 검토 도장 — 빨간 펜으로 원을 그려 표시
function DrawnStamp() {
  return (
    <Drawn className="pen-ring">
      <svg viewBox="0 0 72 72" aria-hidden="true">
        <path className="pen-ring__stroke" pathLength={1} d="M40 5 C 58 7, 69 22, 67 39 C 65 57, 49 68, 33 67 C 15 65, 4 51, 5 34 C 6 18, 19 6, 36 5 C 41 5, 45 6, 48 8" />
      </svg>
      <span className="font-serif font-black text-xl" aria-hidden="true">D.</span>
      <span className="text-[0.75rem] font-bold tracking-widest" aria-hidden="true">검토</span>
      <span className="sr-only">D. 검토 완료</span>
    </Drawn>
  );
}

// 여백 메모에서 헤드라인 쪽을 가리키는 빨간 펜 화살표
function PenArrow() {
  return (
    <svg viewBox="0 0 90 40" className="hidden md:block w-20 h-9 text-primary -ml-2 mb-2" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M86 30 C 64 36, 34 34, 8 14" />
      <path d="M8 14 L 22 14 M8 14 L 13 27" />
    </svg>
  );
}

function SectionHead({ title, aside, href, linkLabel }: { title: string; aside?: string; href?: string; linkLabel?: string }) {
  return (
    <div className="flex items-end justify-between gap-6 border-t-2 border-[#16161A] pt-3 mb-8">
      <div className="flex items-baseline gap-4 flex-wrap">
        <h2 className="font-serif font-black text-3xl md:text-4xl text-[#16161A] tracking-tight">{title}</h2>
        {aside && <span className="text-sm text-[#4A4A50]">{aside}</span>}
      </div>
      {href && (
        <Link href={href} className="shrink-0 inline-flex items-center gap-1.5 py-2 text-sm font-bold text-[#16161A] hover:underline decoration-1 underline-offset-[5px]">
          {linkLabel} <ArrowRight size={14} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export default function Home() {
  const allPosts = getAllPosts();
  const featured = getFeaturedPost();
  const focus = ["digital-transformation", "mobility", "history"];
  const rest = allPosts.filter((p) => p.slug !== featured?.slug);

  const deskNotes = allPosts.filter((p) => p.category === "desk").slice(0, 3);
  const columns = rest.filter((p) => focus.includes(p.category));
  const lead = columns[0];
  const moreStories = columns.slice(1, 5);
  const shift = columns.slice(5, 9);
  const books = allPosts.filter((p) => p.category === "books").slice(0, 3);
  const videos = getAllVideos().slice(0, 3);
  const news = newsItems.slice(0, 3);

  const [underlined, remainder] = featured ? splitHeadline(featured.title) : ["", ""];

  return (
    <div className="bg-[#E8E9E8] text-[#16161A] pt-24 md:pt-28 pb-28 -mb-20">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1240px]">
        {/* Dateline */}
        <div className="flex items-center justify-between gap-4 border-b border-[#16161A] py-3 text-sm">
          <span className="font-bold">{dateline()}</span>
          <span className="hidden sm:inline text-[#4A4A50]">David&apos;s Notes · 데스크 교정지</span>
          <span className="text-[#4A4A50]">Economist David Kim</span>
        </div>
        <div className="border-b border-[#BEBEB6] mb-10 md:mb-14 h-1" aria-hidden="true" />

        {/* 1. Lead proof: featured column with the desk memo in the margin */}
        {featured && (
          <section aria-labelledby="lead-title" className="relative bg-[#F4F5F4] border border-[#BEBEB6] px-5 py-8 md:px-12 md:py-14 mb-20">
            <RegMarks />
            <div className="grid md:grid-cols-12 gap-10 md:gap-12">
              <div className="md:col-span-8">
                <p className="text-sm font-bold text-[#4A4A50] mb-5">
                  {categoryLabels[featured.category] ?? featured.category}
                  <span className="mx-2 text-[#BEBEB6]">|</span>
                  {formatDate(featured.date)}
                </p>
                <h1 id="lead-title" className="font-serif font-black text-[2.1rem] leading-[1.18] md:text-[3.4rem] md:leading-[1.14] tracking-tight text-balance mb-8">
                  <Link href={postHref(featured)} className="hover:underline decoration-1 underline-offset-[5px]">
                    <Drawn className="pen-underline">{underlined}</Drawn>
                    {remainder}
                  </Link>
                </h1>
                <p className="text-lg md:text-xl leading-relaxed text-[#2E2E33] max-w-[38rem] mb-10 text-pretty">
                  {featured.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-[#BEBEB6] pt-6">
                  <div className="flex items-center gap-3">
                    <Image src="/images/david.jpg" alt="" width={40} height={40} className="w-10 h-10 rounded-full object-cover grayscale" />
                    <div className="text-sm">
                      <div className="font-bold">김동영 David Kim</div>
                      <div className="text-[#4A4A50]">경제학자</div>
                    </div>
                  </div>
                  <Link href={postHref(featured)} className="inline-flex items-center gap-2 bg-[#16161A] text-white px-6 py-3.5 text-sm font-bold hover:bg-[#2E2E33] transition-colors">
                    전문 읽기 <ArrowRight size={16} aria-hidden="true" />
                  </Link>
                </div>
              </div>

              {/* Desk memo — the author's own summary, in red pen */}
              <aside className="md:col-span-4 md:border-l md:border-[#BEBEB6] md:pl-10 relative" aria-label="데스크 메모">
                <PenArrow />
                <p className="pen-note text-[1.9rem] md:text-[2.1rem] -rotate-1">
                  결론: {conclusion(featured)}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <DrawnStamp />
                  <p className="text-sm text-[#4A4A50] leading-relaxed">필자가 직접 쓰고,<br />직접 교정한 글입니다.</p>
                </div>
              </aside>
            </div>
          </section>
        )}

        {/* 2. On My Desk — clippings the author vouches for */}
        {deskNotes.length > 0 && (
          <section aria-labelledby="desk-title" className="mb-20">
            <div id="desk-title">
              <SectionHead title="On My Desk" aside="필자가 골라 읽고 한 줄을 남긴 해외 기사" href="/desk" linkLabel="Full Research Archive" />
            </div>
            <div className="grid md:grid-cols-3 gap-6 md:gap-8">
              {deskNotes.map((post) => (
                <article key={post.slug} className="relative bg-[#F4F5F4] border border-[#BEBEB6] p-6 flex flex-col">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <span className="text-xs font-black tracking-widest uppercase border border-[#16161A] px-2 py-1">{post.source || "ECONOMIST"}</span>
                    <ReviewStamp />
                  </div>
                  <h3 className="font-serif font-bold text-xl leading-snug mb-2">
                    <Link href={postHref(post)} className="hover:underline decoration-1 underline-offset-[5px] after:absolute after:inset-0">
                      {post.title}
                    </Link>
                  </h3>
                  <p className="text-sm text-[#4A4A50] mb-5">{formatDate(post.date)}</p>
                  <p className="pen-note text-[1.6rem] mt-auto border-t border-dashed border-[#BEBEB6] pt-4">
                    {deskNote(post)}
                  </p>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 3. Lead Analysis + More Stories | In the News */}
        <section className="grid lg:grid-cols-12 gap-12 lg:gap-14 mb-20">
          <div className="lg:col-span-8">
            <SectionHead title="Lead Analysis" aside="칼럼 · 기고" href="/topics/digital-transformation" linkLabel="전체 칼럼" />
            {lead && (
              <article className="grid sm:grid-cols-5 gap-6 pb-8 mb-2 border-b border-[#BEBEB6]">
                {lead.coverImage && (
                  <Link href={postHref(lead)} className="relative sm:col-span-2 aspect-[4/3] border border-[#BEBEB6] bg-[#F4F5F4] overflow-hidden" tabIndex={-1} aria-hidden="true">
                    <Image src={lead.coverImage} alt="" fill sizes="(min-width: 1024px) 300px, (min-width: 640px) 40vw, 100vw" className="object-cover" />
                  </Link>
                )}
                <div className={lead.coverImage ? "sm:col-span-3" : "sm:col-span-5"}>
                  <p className="text-sm font-bold text-[#4A4A50] mb-3">
                    {categoryLabels[lead.category]} <span className="mx-1.5 text-[#BEBEB6]">|</span> {formatDate(lead.date)}
                  </p>
                  <h3 className="font-serif font-black text-2xl md:text-[1.9rem] leading-snug mb-3 text-balance">
                    <Link href={postHref(lead)} className="hover:underline decoration-1 underline-offset-[5px]">{lead.title}</Link>
                  </h3>
                  <p className="text-base leading-relaxed text-[#2E2E33] line-clamp-3">{lead.excerpt}</p>
                </div>
              </article>
            )}
            <ol className="divide-y divide-[#BEBEB6]">
              {moreStories.map((post) => (
                <li key={post.slug} className="py-6 grid sm:grid-cols-[8.5rem_1fr] gap-2 sm:gap-6">
                  <p className="text-sm text-[#4A4A50] pt-1">
                    {formatDate(post.date)}
                    <span className="block font-bold">{categoryLabels[post.category]}</span>
                  </p>
                  <div>
                    <h3 className="font-serif font-bold text-xl leading-snug mb-2 text-balance">
                      <Link href={postHref(post)} className="hover:underline decoration-1 underline-offset-[5px]">{post.title}</Link>
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-[#4A4A50] line-clamp-2">{post.excerpt}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="lg:col-span-4">
            <SectionHead title="In the News" href="/news" linkLabel="전체 보도" />
            <ul className="space-y-8">
              {news.map((item) => (
                <li key={item.link} className="border-b border-[#BEBEB6] pb-7">
                  <p className="text-sm mb-2">
                    <span className="font-bold">{item.media}</span>
                    <span className="text-[#4A4A50] ml-2">{item.date}</span>
                  </p>
                  <h3 className="font-serif font-bold text-lg leading-snug mb-3 text-balance">
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="hover:underline decoration-1 underline-offset-[5px]">
                      {item.title}
                    </a>
                  </h3>
                  {item.quote && (
                    <blockquote className="relative pl-6 text-[0.95rem] leading-relaxed text-[#2E2E33]">
                      <span className="absolute left-0 -top-1 font-serif font-black text-3xl leading-none text-primary" aria-hidden="true">“</span>
                      {firstSentence(item.quote.replace(/^["“]|["”]$/g, ""))}
                      <footer className="text-sm text-[#4A4A50] mt-2">— 김동영</footer>
                    </blockquote>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 4. AI & Mobility Shift — a section front, columns divided by rules */}
        {shift.length > 0 && (
          <section className="mb-20">
            <SectionHead title="AI & Mobility Shift" aside="Industry Focus" href="/topics/mobility" linkLabel="Explore All" />
            <div className="grid sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-4 lg:gap-x-0 lg:-mx-6 lg:divide-x divide-[#BEBEB6]">
              {shift.map((post) => (
                <article key={post.slug} className="grid grid-cols-[6.5rem_1fr] gap-4 items-start sm:block py-4 border-b border-[#BEBEB6] sm:border-b-0 lg:py-0 lg:px-6">
                  {post.coverImage && (
                    <div className="relative aspect-square sm:aspect-[3/2] sm:mb-4 border border-[#BEBEB6] bg-[#F4F5F4] overflow-hidden">
                      <Image src={post.coverImage} alt="" fill sizes="(min-width: 1024px) 280px, (min-width: 640px) 45vw, 104px" className="object-cover" />
                    </div>
                  )}
                  <div>
                    <p className="text-sm font-bold text-[#4A4A50] mb-2">{categoryLabels[post.category]}</p>
                    <h3 className="font-serif font-bold text-lg leading-snug text-balance">
                      <Link href={postHref(post)} className="hover:underline decoration-1 underline-offset-[5px]">{post.title}</Link>
                    </h3>
                    <p className="text-sm text-[#4A4A50] mt-2">{formatDate(post.date)}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 5. Broadcast */}
        {videos.length > 0 && (
          <section className="mb-20">
            <SectionHead title="Visual Insights" aside="Broadcast & Media" href="/videos" linkLabel="View All Videos" />
            <div className="grid md:grid-cols-3 gap-8">
              {videos.map((video) => (
                <article key={video.id}>
                  <div className="relative aspect-video bg-[#16161A] border border-[#16161A] mb-4">
                    <YouTubeFacade youtubeId={video.youtubeId} title={video.title} />
                  </div>
                  <p className="text-sm text-[#4A4A50] mb-1.5">{formatDate(video.date)}</p>
                  <h3 className="font-serif font-bold text-lg leading-snug text-balance">{video.title}</h3>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 6. Bookshelf — the author's score in red pen */}
        {books.length > 0 && (
          <section className="mb-20">
            <SectionHead title="Bookshelf" aside="The Reading List" href="/books" linkLabel="전체 서평" />
            <div className="grid sm:grid-cols-3 gap-10">
              {books.map((book) => (
                <article key={book.slug} className="flex gap-5 items-start">
                  <div className="relative shrink-0 w-28 aspect-[2/3] border border-[#BEBEB6] bg-[#F4F5F4]">
                    {book.coverImage && <Image src={book.coverImage} alt="" fill sizes="112px" className="object-cover" />}
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-serif font-bold text-lg leading-snug mb-1 text-balance">
                      <Link href={postHref(book)} className="hover:underline decoration-1 underline-offset-[5px]">{book.title}</Link>
                    </h3>
                    {book.author && <p className="text-sm text-[#4A4A50] mb-3">{book.author}</p>}
                    {book.rating && (
                      <p className="pen-note text-[1.6rem] -rotate-2 inline-block" aria-label={`필자 평점 ${Math.floor(book.rating)}점 (5점 만점)`}>
                        {Math.floor(book.rating)}/5
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* 7. Meet David — the sign-off */}
        <section className="relative bg-[#F4F5F4] border border-[#BEBEB6] px-5 py-10 md:px-12 md:py-12">
          <RegMarks />
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-3">
              <div className="relative aspect-[3/4] max-w-[220px] border border-[#BEBEB6] overflow-hidden">
                <Image src="/reading-book-clean.jpg" alt="책을 읽는 김동영 일러스트" fill sizes="220px" className="object-cover" />
              </div>
            </div>
            <div className="md:col-span-9">
              <h2 className="font-serif font-black text-3xl md:text-4xl mb-5">Meet David</h2>
              <p className="font-serif text-2xl md:text-[2rem] leading-snug mb-6 text-balance">
                기술이라는 &apos;엔진&apos;에, 맥락이라는 &apos;지도&apos;를 더합니다.
              </p>
              <p className="text-lg text-[#2E2E33] mb-8">
                미래의 길을 설계하는 경제학자, 김동영입니다.
                <span className="inline-flex items-center justify-center w-5 h-5 ml-2 bg-primary text-white font-serif font-black text-[0.7rem] align-middle" aria-hidden="true">D.</span>
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 border-2 border-[#16161A] px-6 py-3 text-sm font-bold hover:bg-[#16161A] hover:text-white transition-colors">
                Read Full Bio <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
