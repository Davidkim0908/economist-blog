import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import SeriesCover from "@/components/SeriesCover";
import { getAllPosts } from "@/lib/posts";
import { newsItems } from "@/lib/news";
import { formatDate } from "@/lib/desk";
import { categoryLabelEn, socialLinks } from "@/lib/site";
import {
  ADVISORY_CURRENT,
  BIO_LONG,
  CAREER,
  CONTACT_EMAIL,
  EDUCATION,
  LECTURES,
  PROFILE_TITLE,
  PROJECTS,
  TEACHING,
} from "@/lib/profile";

// 프로필 두 번째 안: 연구 성과를 목록으로 보여 주는 학자형 포트폴리오 구성(Erik Brynjolfsson 사이트 구조 참고).
// 비교용이라 메뉴·사이트맵에 넣지 않고 검색 엔진에서도 제외한다.
export const metadata: Metadata = {
  title: "프로필(안 2) | David's Notes",
  robots: { index: false, follow: false },
};

const NAV = [
  { id: "research", label: "Research" },
  { id: "columns", label: "Columns" },
  { id: "series", label: "Series" },
  { id: "news", label: "In the News" },
  { id: "speaking", label: "Speaking" },
  { id: "contact", label: "Contact" },
];

const SERIES = [
  { name: "에이징 & 모빌리티", href: "/topics/mobility", outlet: "미래에셋투자와연금센터", period: "2025 ~ 연재 중" },
  { name: "디지털 이코노미", href: "/topics/digital-transformation", outlet: "한국경제신문", period: "2021 ~ 2023" },
  { name: "4차 산업혁명 이야기", href: "/topics/digital-transformation", outlet: "한국경제신문", period: "2017 ~ 2021" },
];

function SectionHead({ id, en, ko, more }: { id: string; en: string; ko: string; more?: { href: string; label: string } }) {
  return (
    <div className="flex items-end justify-between gap-6 mb-8 border-b-2 border-gray-900 pb-3">
      <h2 id={`${id}-title`} className="flex items-baseline gap-3 flex-wrap">
        <span className="type-section-en text-gray-900">{en}</span>
        <span className="type-sub-ko text-gray-500">{ko}</span>
      </h2>
      {more && (
        <Link href={more.href} className="shrink-0 inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900 hover:underline underline-offset-4">
          {more.label} <ArrowRight size={15} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}

export default function ProfileV2Page() {
  const posts = getAllPosts();
  const columns = posts.filter((p) => !p.series && ["digital-transformation", "mobility", "history"].includes(p.category)).slice(0, 10);
  const seriesCount = (name: string) => posts.filter((p) => p.series === name).length;
  const projects = [...PROJECTS].sort((a, b) => b.year - a.year);
  const news = newsItems.slice(0, 8);
  const linkedin = socialLinks.find((s) => s.label === "LinkedIn");
  const kdiNow = CAREER[0];

  return (
    <div className="bg-white text-gray-900 -mb-20 pb-24">
      {/* 머리: 왼쪽 사진, 오른쪽 직위와 4~5문장 약력 */}
      <header className="container mx-auto px-4 lg:px-8 max-w-[1080px] pt-28 md:pt-36 pb-12 grid grid-cols-1 md:grid-cols-[260px_minmax(0,1fr)] gap-8 md:gap-12 items-start">
        <div className="relative aspect-[4/5] w-full max-w-[260px] rounded-lg overflow-hidden bg-[#9a7a5c]">
          <Image src="/images/david-profile.jpg" alt="김동영 박사 프로필 사진" fill priority sizes="260px" className="object-cover" style={{ objectPosition: "50% 18%" }} />
        </div>
        <div className="min-w-0">
          <h1 className="type-article-ko leading-tight">김동영 <span className="type-title-en text-gray-500 text-[1.25rem] align-middle ml-1">Kim Dongyoung, Ph.D.</span></h1>
          <p className="type-sub-ko text-gray-900 mt-3">{PROFILE_TITLE}</p>
          <ul className="mt-5 space-y-1 text-[1rem] text-gray-800">
            <li>{kdiNow.org} {kdiNow.title}</li>
            <li>중앙대학교 겸임교수</li>
            <li>국토교통부 로보택시 사회적협의체 위원 · 모빌리티혁신위원</li>
            <li>한국공학한림원 자율주행위원회 위원</li>
          </ul>
          <p className="mt-6 text-[1.0625rem] leading-[1.85] text-gray-700 max-w-[42rem]">{BIO_LONG}</p>
          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-1.5 font-semibold text-gray-900 hover:underline underline-offset-4">
              <Mail size={15} aria-hidden="true" /> {CONTACT_EMAIL}
            </a>
            {linkedin && (
              <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-600 hover:text-gray-900">
                LinkedIn <ArrowUpRight size={14} aria-hidden="true" />
              </a>
            )}
            <Link href="/profile" className="text-gray-600 hover:text-gray-900 underline underline-offset-4">상세 프로필(안 1)</Link>
          </div>
        </div>
      </header>

      {/* 구역 바로가기 */}
      <nav aria-label="프로필 구역" className="sticky top-20 z-30 bg-white/95 backdrop-blur border-y border-gray-200">
        <ul className="container mx-auto px-4 lg:px-8 max-w-[1080px] flex gap-6 overflow-x-auto py-3 text-sm font-semibold">
          {NAV.map((n) => (
            <li key={n.id} className="shrink-0">
              <a href={`#${n.id}`} className="text-gray-600 hover:text-gray-900">{n.label}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="container mx-auto px-4 lg:px-8 max-w-[1080px] space-y-20 pt-14">
        {/* 연구: 번호 매긴 목록, 최신순 */}
        <section id="research" aria-labelledby="research-title" className="scroll-mt-36">
          <SectionHead id="research" en="Research" ko="연구 과제" />
          <ol className="space-y-4">
            {projects.map((p, i) => (
              <li key={p.title} className="grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 text-[1rem] leading-relaxed">
                <span className="text-gray-400 tabular-nums text-right">{projects.length - i}.</span>
                <span className="text-gray-700">
                  {p.authors ?? "김동영"}, <span className="text-gray-900 font-medium">『{p.title}』</span>
                  {p.client ? `, ${p.client}` : ""}, {p.year}.
                </span>
              </li>
            ))}
          </ol>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="type-title-ko text-[1.0625rem] mb-3">학력</h3>
              <ul className="space-y-2 text-[0.975rem] text-gray-700">
                {EDUCATION.map((e) => (
                  <li key={e.title}>{e.org} {e.title}{e.note ? <span className="block text-sm text-gray-500">{e.note}</span> : null}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="type-title-ko text-[1.0625rem] mb-3">경력</h3>
              <ul className="space-y-2 text-[0.975rem] text-gray-700">
                {CAREER.map((c) => (
                  <li key={`${c.org}-${c.title}`} className="flex justify-between gap-4">
                    <span>{c.org} {c.title}</span>
                    <span className="text-sm text-gray-500 tabular-nums whitespace-nowrap">{c.period}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="type-title-ko text-[1.0625rem] mb-3">현재 위원·이사</h3>
            <p className="text-[0.975rem] leading-relaxed text-gray-700">
              {ADVISORY_CURRENT.map((a) => `${a.org} ${a.title}`).join(" · ")}
            </p>
          </div>
        </section>

        {/* 최근 칼럼 */}
        <section id="columns" aria-labelledby="columns-title" className="scroll-mt-36">
          <SectionHead id="columns" en="Recent Columns" ko="최근 칼럼" more={{ href: "/topics/digital-transformation", label: "모든 칼럼" }} />
          <ul className="divide-y divide-gray-200 border-b border-gray-200">
            {columns.map((c) => (
              <li key={c.slug} className="py-4 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1">
                <Link href={`/posts/${c.category}/${c.slug}`} className="type-title-ko text-[1.0625rem] text-gray-900 hover:underline underline-offset-4">
                  {c.title}
                </Link>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  <span className="type-label-en mr-2">{categoryLabelEn(c.category)}</span>
                  {formatDate(c.date)}
                </span>
              </li>
            ))}
          </ul>
        </section>

        {/* 연재: 책 표지처럼 */}
        <section id="series" aria-labelledby="series-title" className="scroll-mt-36">
          <SectionHead id="series" en="Series" ko="연재" />
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {SERIES.map((s) => (
              <li key={s.name}>
                <Link href={s.href} className="group block">
                  <div className="relative aspect-[3/4] rounded-md overflow-hidden bg-[#F4F5F4] shadow-[0_12px_30px_-14px_rgba(0,0,0,0.35)]" aria-hidden="true">
                    <SeriesCover series={s.name} order={seriesCount(s.name)} />
                  </div>
                  <p className="type-title-ko text-[1.0625rem] mt-4 group-hover:underline underline-offset-4">{s.name}</p>
                  <p className="text-sm text-gray-600 mt-1">{s.outlet} · {seriesCount(s.name)}편 · {s.period}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* 언론 보도 */}
        <section id="news" aria-labelledby="news-title" className="scroll-mt-36">
          <SectionHead id="news" en="In the News" ko="언론 보도" more={{ href: "/news", label: "더 많은 보도" }} />
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
            {news.map((n) => (
              <li key={n.link} className="py-4 border-b border-gray-200">
                <a href={n.link} target="_blank" rel="noopener noreferrer" className="block group">
                  <p className="font-semibold text-gray-900 leading-snug group-hover:underline underline-offset-4">{n.title}</p>
                  <p className="text-sm text-gray-500 mt-1"><span className="font-semibold text-gray-700">{n.media}</span> · {n.date}</p>
                </a>
              </li>
            ))}
          </ul>
        </section>

        {/* 강연 */}
        <section id="speaking" aria-labelledby="speaking-title" className="scroll-mt-36">
          <SectionHead id="speaking" en="Speaking" ko="강연·방송" more={{ href: "/videos", label: "방송·강연 영상" }} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="type-title-ko text-[1.0625rem] mb-3">기업 강연·교육</h3>
              <ul className="space-y-2 text-[0.975rem] text-gray-700">
                {LECTURES.map((l) => (
                  <li key={l.org} className="flex justify-between gap-4"><span>{l.org} · {l.title}</span><span className="text-sm text-gray-500 tabular-nums whitespace-nowrap">{l.period}</span></li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="type-title-ko text-[1.0625rem] mb-3">방송·강의</h3>
              <ul className="space-y-2 text-[0.975rem] text-gray-700">
                <li className="flex justify-between gap-4"><span>KBS 1라디오 경제쇼 고정 출연</span><span className="text-sm text-gray-500 whitespace-nowrap">2023.11 ~</span></li>
                <li className="flex justify-between gap-4"><span>아리랑TV 「BizTech Korea」 진행</span><span className="text-sm text-gray-500 whitespace-nowrap">2020 ~ 2022.8</span></li>
                {TEACHING.map((t) => (
                  <li key={t.org} className="flex justify-between gap-4"><span>{t.org} {t.title}</span><span className="text-sm text-gray-500 tabular-nums whitespace-nowrap">{t.period}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 문의 */}
        <section id="contact" aria-labelledby="contact-title" className="scroll-mt-36">
          <SectionHead id="contact" en="Contact" ko="문의" />
          <p className="text-[1.0625rem] text-gray-700 mb-5">강연, 자문, 인터뷰, 기고 요청은 이메일로 보내 주세요.</p>
          <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition-colors">
            <Mail size={17} aria-hidden="true" /> {CONTACT_EMAIL}
          </a>
        </section>
      </div>
    </div>
  );
}
