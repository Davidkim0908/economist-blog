import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Mail, Rss } from "lucide-react";
import CopyButton from "@/components/CopyButton";
import SeriesCover from "@/components/SeriesCover";
import YouTubeFacade from "@/components/YouTubeFacade";
import { getAllPosts } from "@/lib/posts";
import { newsItems } from "@/lib/news";
import { formatDate } from "@/lib/desk";
import { categoryLabelEn, socialLinks } from "@/lib/site";
import {
  ADVISORY_CURRENT,
  ADVISORY_PAST,
  AWARDS,
  BIO_LONG,
  BIO_SHORT,
  CAREER,
  COLUMN_OUTLETS,
  CONTACT_EMAIL,
  CURRENT_ROLES,
  EDUCATION,
  LECTURES,
  MEDIA,
  PROFILE_TITLE,
  PROJECTS,
  RESEARCH_INTERESTS,
  TEACHING,
  type Item,
} from "@/lib/profile";

export const metadata: Metadata = {
  title: "프로필 | David's Notes",
  description: `김동영, ${PROFILE_TITLE}. 경력, 정책 자문, 방송·연재, 연구 과제와 미디어 자료.`,
};

// 프로필: 이야기는 About, 경력은 여기. 세 가지 역할(연구자·정책 자문가·커뮤니케이터)로 묶는다.
const KDI = CAREER.filter((c) => c.org?.includes("KDI"));
const GOV = CAREER.filter((c) => !c.org?.includes("KDI"));
const projectYears = [...new Set(PROJECTS.map((p) => p.year))].sort((a, b) => b - a);
const BROADCAST = MEDIA.filter((m) => !m.title.includes("연재"));

const JUMP = [
  { id: "bio", label: "약력" },
  { id: "research", label: "연구" },
  { id: "policy", label: "정책 자문" },
  { id: "communicator", label: "방송·연재" },
  { id: "projects", label: "연구 과제" },
  { id: "press", label: "미디어 자료" },
  { id: "contact", label: "문의" },
];

const SERIES = [
  { name: "에이징 & 모빌리티", href: "/topics/mobility", outlet: "미래에셋투자와연금센터", period: "2025 ~ 연재 중" },
  { name: "디지털 이코노미", href: "/topics/digital-transformation", outlet: "한국경제신문", period: "2021.3 ~ 2023.12" },
  { name: "4차 산업혁명 이야기", href: "/topics/digital-transformation", outlet: "한국경제신문", period: "2017.11 ~ 2021.3" },
];

// 세 가지 역할과 방송을 하나씩 대표하는 숫자. 근거가 분명한 기간·횟수만 쓰고, 무엇을 셌는지 아래에 적는다.
const STATS = [
  { value: "15년", label: "KDI 연구", sub: "2011 ~ 현재" },
  { value: "4년", label: "정부 파견", sub: "대통령직속 정책기획위원회, 국무총리실 규제혁신추진단" },
  { value: "248편", label: "신문 연재", sub: "한국경제신문, 2017 ~ 2023" },
  { value: "100회+", label: "KBS 주간 고정 출연", sub: "「성기영의 경제쇼」, 2023.11 ~ 2026.3" },
];

function Rows({ items }: { items: Item[] }) {
  return (
    <ul className="divide-y divide-[#D4D5D2] border-y border-[#D4D5D2]">
      {items.map((it) => (
        <li key={`${it.org}-${it.title}-${it.period}`} className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1 py-3.5">
          <div className="min-w-0">
            <p className="text-[1rem] text-gray-900 leading-snug">
              {it.href ? (
                <Link href={it.href} className="hover:underline underline-offset-4">{it.title}</Link>
              ) : (
                it.title
              )}
            </p>
            {(it.org || it.note) && (
              <p className="text-sm text-gray-600 mt-0.5">{[it.org, it.note].filter(Boolean).join(" · ")}</p>
            )}
          </div>
          {it.period && <p className="text-sm text-gray-500 tabular-nums whitespace-nowrap text-right">{it.period}</p>}
        </li>
      ))}
    </ul>
  );
}

function Section({ id, en, ko, lead, children }: { id: string; en: string; ko: string; lead?: string; children: React.ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-40 grid grid-cols-1 lg:grid-cols-[minmax(0,4fr)_minmax(0,8fr)] gap-x-12 gap-y-6 py-14 border-t border-[#D4D5D2]">
      <div>
        <p className="type-label-en text-gray-500 mb-3">{en}</p>
        <h2 id={`${id}-title`} className="type-display-ko text-[1.75rem] md:text-[2rem] text-balance">{ko}</h2>
        {lead && <p className="text-[0.975rem] leading-relaxed text-gray-600 mt-4 max-w-[26rem]">{lead}</p>}
      </div>
      <div className="min-w-0 space-y-10">{children}</div>
    </section>
  );
}

function Sub({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="type-title-ko text-[1.0625rem] mb-3">{title}</h3>
      {children}
    </div>
  );
}

export default function ProfilePage() {
  const posts = getAllPosts();
  const columns = posts.filter((p) => !p.series && ["digital-transformation", "mobility", "history"].includes(p.category)).slice(0, 5);
  const seriesCount = (name: string) => posts.filter((p) => p.series === name).length;
  const news = newsItems.slice(0, 4);
  const linkedin = socialLinks.find((x) => x.label === "LinkedIn");
  return (
    <div className="bg-paper text-gray-900 -mb-20 pb-24">
      <div className="container mx-auto px-4 lg:px-8 max-w-[1180px]">
        {/* 머리 */}
        <header className="grid grid-cols-1 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-10 lg:gap-16 items-center pt-28 md:pt-36 pb-16">
          <div className="relative aspect-[5/7] w-full max-w-[420px] mx-auto md:mx-0 rounded-2xl overflow-hidden bg-[#9a7a5c] shadow-[0_24px_60px_-28px_rgba(0,0,0,0.45)]">
            <Image src="/images/david-profile.jpg" alt="김동영 박사 프로필 사진" fill priority sizes="(min-width: 768px) 420px, 90vw" className="object-cover" style={{ objectPosition: "50% 20%" }} />
          </div>
          <div className="min-w-0">
            <p className="type-label-en text-gray-500 mb-4">Profile</p>
            <h1 className="type-article-ko mb-2">김동영</h1>
            <p className="type-title-en text-gray-500 text-[1.125rem] mb-6">Kim Dongyoung, Ph.D.</p>
            <p className="type-sub-ko text-[1.0625rem] text-gray-900 mb-5">{PROFILE_TITLE}</p>
            <p className="type-display-ko text-[1.25rem] md:text-[1.4375rem] leading-[1.55] text-gray-900 mb-6 text-pretty">
              기술이 경제와 제도를 어떻게 바꾸는지 연구하는 경제학자입니다.
            </p>
            <ul className="space-y-1.5 text-[1.0625rem] text-gray-700 mb-6">
              {CURRENT_ROLES.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mb-8">
              <span className="type-label-en mr-2">Research</span>
              {RESEARCH_INTERESTS.join(" · ")}
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent("[강연·자문 문의]")}`} className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition-colors">
                <Mail size={17} aria-hidden="true" /> 강연·자문 문의
              </a>
              <a href="#press" className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full border border-gray-900 text-gray-900 font-semibold hover:bg-gray-900 hover:text-white transition-colors">
                미디어 자료 <ArrowRight size={17} aria-hidden="true" />
              </a>
            </div>
          </div>
        </header>

        {/* 숫자로 보는 활동 — 이력서와 블로그에서 직접 셀 수 있는 사실만 */}
        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#D4D5D2] border border-[#D4D5D2] rounded-2xl overflow-hidden mb-6">
          {STATS.map((s) => (
            <div key={s.label} className="bg-sheet px-5 py-6">
              <dt className="text-sm text-gray-600">{s.label}</dt>
              <dd className="type-display-ko text-[1.75rem] md:text-[2rem] tabular-nums mt-1">{s.value}</dd>
              <dd className="text-xs text-gray-500 mt-1">{s.sub}</dd>
            </div>
          ))}
        </dl>

        {/* 구역 바로가기 — 페이지가 길어 위에 붙여 둔다 */}
        <nav aria-label="프로필 구역" className="sticky top-20 z-30 -mx-4 px-4 lg:-mx-8 lg:px-8 bg-paper/95 backdrop-blur border-b border-[#D4D5D2]">
          <ul className="flex gap-5 overflow-x-auto py-3 text-sm font-semibold">
            {JUMP.map((j) => (
              <li key={j.id} className="shrink-0">
                <a href={`#${j.id}`} className="text-gray-600 hover:text-gray-900">{j.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {/* 약력 */}
        <Section id="bio" en="Biography" ko="약력" lead="행사·방송 소개에 그대로 쓰실 수 있도록 3인칭으로 정리했습니다.">
          <div className="bg-sheet rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="type-title-ko text-[1.0625rem]">짧은 약력</h3>
              <CopyButton text={BIO_SHORT} targetId="bio-short" />
            </div>
            <p id="bio-short" className="text-[1.0625rem] leading-[1.85] text-gray-700">{BIO_SHORT}</p>
          </div>
          <div className="bg-sheet rounded-2xl p-6 md:p-8">
            <div className="flex items-start justify-between gap-4 mb-3">
              <h3 className="type-title-ko text-[1.0625rem]">긴 약력</h3>
              <CopyButton text={BIO_LONG} targetId="bio-long" />
            </div>
            <p id="bio-long" className="text-[1.0625rem] leading-[1.85] text-gray-700">{BIO_LONG}</p>
          </div>
        </Section>

        {/* 세 가지 역할 */}
        <Section id="research" en="Researcher" ko="연구자" lead="2011년부터 한국개발연구원(KDI)에서 산업과 디지털 경제, 모빌리티를 연구하고 있습니다.">
          <Sub title="한국개발연구원(KDI)"><Rows items={KDI} /></Sub>
          <Sub title="학력"><Rows items={EDUCATION} /></Sub>
        </Section>

        <Section id="policy" en="Policy Advisor" ko="정책 자문가" lead="대통령직속 위원회와 국무총리실에서 규제혁신을 다뤘고, 지금은 로보택시와 택시·모빌리티 정책의 현장에서 자문하고 있습니다.">
          <Sub title="정부 근무"><Rows items={GOV} /></Sub>
          <Sub title="현재 맡은 위원·이사"><Rows items={ADVISORY_CURRENT} /></Sub>
          <Sub title="지난 자문 활동"><Rows items={ADVISORY_PAST} /></Sub>
        </Section>

        <Section id="communicator" en="Communicator" ko="커뮤니케이터" lead="연구를 신문 연재와 방송, 강연으로 풀어 독자와 시청자, 기업 현장에 전합니다.">
          <Sub title="대표 영상">
            <figure>
              <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
                <YouTubeFacade youtubeId="rTfH-SMPcng" title="경제학자가 삼전·하이닉스·현대차를 냉정하게 봤더니 | CBS 경제적본능" />
              </div>
              <figcaption className="text-sm text-gray-600 mt-3">
                CBS 경제연구실 [경제적본능] 인터뷰 풀버전(2026.5). 더 많은 방송·강연은 <Link href="/videos" className="underline underline-offset-4 hover:text-gray-900">Videos</Link>에서 볼 수 있습니다.
              </figcaption>
            </figure>
          </Sub>
          <Sub title="방송"><Rows items={BROADCAST} /></Sub>
          <Sub title="연재">
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {SERIES.map((x) => (
                <li key={x.name}>
                  <Link href={x.href} className="group block">
                    <div className="relative aspect-[3/4] rounded-lg overflow-hidden bg-sheet shadow-[0_12px_30px_-16px_rgba(0,0,0,0.35)]" aria-hidden="true">
                      <SeriesCover series={x.name} order={seriesCount(x.name)} />
                    </div>
                    <p className="type-title-ko text-[1rem] mt-3 group-hover:underline underline-offset-4">{x.name}</p>
                    <p className="text-sm text-gray-600 mt-0.5">{x.outlet} · {seriesCount(x.name)}편</p>
                    <p className="text-xs text-gray-500 tabular-nums">{x.period}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </Sub>
          <Sub title="최근 칼럼">
            <ul className="divide-y divide-[#D4D5D2] border-y border-[#D4D5D2]">
              {columns.map((c) => (
                <li key={c.slug} className="py-3.5 grid grid-cols-1 sm:grid-cols-[minmax(0,1fr)_auto] gap-x-6 gap-y-1">
                  <Link href={`/posts/${c.category}/${c.slug}`} className="text-[1rem] text-gray-900 leading-snug hover:underline underline-offset-4">{c.title}</Link>
                  <span className="text-sm text-gray-500 whitespace-nowrap">{categoryLabelEn(c.category)} · {formatDate(c.date)}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-600 mt-3">기고 매체: {COLUMN_OUTLETS.join(" · ")}</p>
          </Sub>
          <Sub title="최근 언론 보도">
            <ul className="divide-y divide-[#D4D5D2] border-y border-[#D4D5D2]">
              {news.map((n) => (
                <li key={n.link} className="py-3.5">
                  <a href={n.link} target="_blank" rel="noopener noreferrer" className="text-[1rem] text-gray-900 leading-snug hover:underline underline-offset-4">{n.title}</a>
                  <p className="text-sm text-gray-500 mt-0.5"><span className="text-gray-700">{n.media}</span> · {n.date}</p>
                </li>
              ))}
            </ul>
            <Link href="/news" className="inline-flex items-center gap-1.5 mt-3 text-sm font-semibold text-gray-900 hover:underline underline-offset-4">
              언론 보도 모두 보기 <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </Sub>
          <Sub title="기업 강연·교육"><Rows items={LECTURES} /></Sub>
          <Sub title="대학 강의"><Rows items={TEACHING} /></Sub>
        </Section>

        {/* 연구 과제 전체 */}
        <Section id="projects" en="Research Projects" ko="주요 연구 과제" lead="주요 연구 과제와 발주처를 공개합니다. 공동연구는 연구진을 함께 적었습니다.">
          {projectYears.map((y) => (
            <div key={y} className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-x-4">
              <p className="type-title-en text-[1.0625rem] text-gray-500 tabular-nums pt-3.5">{y}</p>
              <ul className="divide-y divide-[#D4D5D2] border-y border-[#D4D5D2]">
                {PROJECTS.filter((p) => p.year === y).map((p) => (
                  <li key={p.title} className="py-3.5">
                    <p className="text-[1rem] text-gray-900 leading-snug">『{p.title}』</p>
                    {(p.client || p.authors) && (
                      <p className="text-sm text-gray-600 mt-0.5">{[p.client, p.authors].filter(Boolean).join(" · ")}</p>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Section>

        <Section id="awards" en="Awards" ko="수상">
          <Rows items={AWARDS} />
        </Section>

        {/* 미디어 자료 */}
        <Section id="press" en="Press Kit" ko="미디어 자료" lead="방송·행사·기사에 쓰실 수 있는 공식 사진입니다. 사진과 함께 위의 약력을 쓰시면 됩니다.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              { src: "/press/kim-dongyoung-portrait.jpg", alt: "김동영 박사 정면 프로필 사진", label: "정면 사진" },
              { src: "/press/kim-dongyoung-reading.jpg", alt: "자료를 손에 든 김동영 박사 사진", label: "자료를 든 사진" },
            ].map((ph) => (
              <figure key={ph.src} className="bg-sheet rounded-2xl p-4">
                <div className="relative aspect-[5/7] rounded-xl overflow-hidden bg-gray-200">
                  <Image src={ph.src} alt={ph.alt} fill sizes="(min-width: 640px) 360px, 90vw" className="object-cover" style={{ objectPosition: "50% 20%" }} />
                </div>
                <figcaption className="flex items-center justify-between gap-3 mt-4">
                  <span className="text-[0.975rem] text-gray-900">{ph.label} <span className="text-sm text-gray-500 tabular-nums">1500×2100</span></span>
                  <a href={ph.src} download className="inline-flex items-center gap-1.5 min-h-9 px-3 rounded-full border border-gray-300 text-sm text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors">
                    <Download size={15} aria-hidden="true" /> 내려받기
                  </a>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>

        {/* 문의 */}
        <Section id="contact" en="Contact" ko="문의" lead="강연, 자문, 인터뷰, 기고 요청은 이메일로 보내 주세요.">
          <div className="bg-sheet rounded-2xl p-6 md:p-8 flex flex-wrap items-center justify-between gap-4">
            <p className="type-title-en text-[1.25rem] select-all break-all">{CONTACT_EMAIL}</p>
            <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 min-h-12 px-6 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition-colors">
              <Mail size={17} aria-hidden="true" /> 메일 보내기
            </a>
          </div>
          <ul className="flex flex-wrap gap-3">
            {linkedin && (
              <li>
                <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 min-h-11 px-5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-900 transition-colors">
                  LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </li>
            )}
            <li>
              <a href="/rss.xml" className="inline-flex items-center gap-1.5 min-h-11 px-5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-900 transition-colors">
                <Rss size={15} aria-hidden="true" /> RSS로 새 글 받기
              </a>
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            필자의 생각과 글쓰기의 배경은 <Link href="/about" className="underline underline-offset-4 hover:text-gray-900">소개(Meet David)</Link>에서 읽으실 수 있습니다.
          </p>
        </Section>
      </div>
    </div>
  );
}
