import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mail, Rss } from "lucide-react";
import YouTubeFacade from "@/components/YouTubeFacade";
import { socialLinks } from "@/lib/site";
import { CONTACT_EMAIL, PROFILE_TITLE } from "@/lib/profile";

// 프로필 세 번째 안: 목록 대신 짧은 서술형 글로 경력을 풀어 쓰는 구성(Kate Raworth 소개 페이지 구조 참고).
// 비교용이라 메뉴·사이트맵에 넣지 않고 검색 엔진에서도 제외한다. 문단은 이력서(2026.6.30.)의 사실만으로 썼다.
export const metadata: Metadata = {
  title: "프로필(안 3) | David's Notes",
  robots: { index: false, follow: false },
};

const PARAGRAPHS = [
  "건국대학교에서 택시 호출 플랫폼이 택시시장에 미친 영향을 주제로 경제학 박사 학위를 받았다. 2011년 한국개발연구원(KDI)에 합류한 뒤 산업서비스경제연구부와 디지털경제연구실, 연구부원장실을 거쳐 지금은 글로벌지식협력센터 연구팀장을 맡고 있다. 국토교통부와 서울연구원, 국회입법조사처 등과 함께 수행한 연구는 택시 총량제와 요금, 교통약자를 위한 이동수단, 온라인 플랫폼 거래의 공정화, 개인정보 규제까지 이어져 있다.",
  "연구는 정책 현장으로 이어졌다. 대통령직속 정책기획위원회(2020~2022)와 국무총리실 규제혁신추진단(2022~2024)에서 전문위원으로 일했고, 지금은 국토교통부 로보택시 사회적협의체와 모빌리티혁신위원회, 택시산업발전 TF, 서울시 택시정책위원회, 한국공학한림원 자율주행위원회 등에서 자율주행과 택시·모빌리티 제도를 자문하고 있다. 한국무역학회 부회장도 맡고 있다.",
  "연구를 대중의 언어로 옮기는 일도 오래 해 왔다. 한국경제신문에 「4차 산업혁명 이야기」(2017~2021)와 「디지털 이코노미」(2021~2023)를 매주 연재해 모두 248편을 썼고, 지금은 미래에셋투자와연금센터에 「에이징 & 모빌리티」를 연재하고 있다. 매일경제와 아주경제, 전자신문, 동아비즈니스리뷰(DBR) 등에 칼럼을 기고하고 있다. 2023년 11월부터 2026년 3월까지는 KBS 1라디오 「성기영의 경제쇼」에 고정 출연했다. 아리랑TV 「BizTech Korea」를 진행했고(2020~2022), 삼성인력개발원과 삼성종합기술원, 현대자동차, CJ그룹 등에서 디지털 전환과 기술 트렌드를 주제로 강연했다.",
  "건국대학교에서 응용통계학을 전공했고 같은 대학에서 경제학 석사 학위를 받았다. 중앙대학교와 한양대학교, 건국대학교에서 산업조직론과 미시·거시경제학, 경영전략을 가르쳤으며, 2016년 기획재정부 장관 표창을 받았다.",
];

export default function ProfileV3Page() {
  const linkedin = socialLinks.find((s) => s.label === "LinkedIn");

  return (
    <div className="bg-paper text-gray-900 -mb-20 pb-24">
      <article className="container mx-auto px-4 lg:px-8 max-w-[760px] pt-28 md:pt-36">
        <header className="grid grid-cols-[96px_minmax(0,1fr)] sm:grid-cols-[180px_minmax(0,1fr)] gap-5 sm:gap-8 items-start mb-10">
          <div className="relative aspect-[4/5] rounded-lg overflow-hidden bg-[#9a7a5c]">
            <Image src="/images/david-profile.jpg" alt="김동영 박사 프로필 사진" fill priority sizes="180px" className="object-cover" style={{ objectPosition: "50% 18%" }} />
          </div>
          <div className="min-w-0">
            <p className="type-label-en text-gray-500 mb-3">About</p>
            <h1 className="type-article-ko">김동영</h1>
            <p className="type-sub-ko text-gray-600 mt-2">{PROFILE_TITLE}</p>
          </div>
        </header>

        {/* 도입 문단은 크게 */}
        <p className="type-display-ko text-[1.375rem] md:text-[1.625rem] leading-[1.6] text-gray-900 mb-8 text-pretty">
          김동영은 기술이 경제와 제도를 어떻게 바꾸는지 연구하는 경제학자다. 한국개발연구원(KDI) 글로벌지식협력센터 연구팀장이자 중앙대학교 겸임교수로, 산업조직과 디지털 전환, 플랫폼 비즈니스, 모빌리티를 연구한다.
        </p>

        <div className="space-y-6">
          {PARAGRAPHS.map((p, i) => (
            <p key={i} className="text-[1.125rem] leading-[1.95] text-gray-700">{p}</p>
          ))}
        </div>

        {/* 대표 영상 하나로 글을 끊어 준다 */}
        <figure className="my-14">
          <div className="relative aspect-video rounded-xl overflow-hidden bg-gray-900">
            <YouTubeFacade youtubeId="rTfH-SMPcng" title="경제학자가 삼전·하이닉스·현대차를 냉정하게 봤더니 | CBS 경제적본능" />
          </div>
          <figcaption className="text-sm text-gray-600 mt-3">
            CBS 경제연구실 [경제적본능] 인터뷰 풀버전(2026.5). 더 많은 방송·강연은 <Link href="/videos" className="underline underline-offset-4 hover:text-gray-900">Videos</Link>에서 볼 수 있습니다.
          </figcaption>
        </figure>

        {/* 연락과 이어지는 곳 */}
        <footer className="border-t border-[#D4D5D2] pt-8 space-y-6">
          <p className="text-[1.0625rem] text-gray-700">강연, 자문, 인터뷰, 기고 요청은 이메일로 보내 주세요.</p>
          <ul className="flex flex-wrap gap-3">
            <li>
              <a href={`mailto:${CONTACT_EMAIL}`} className="inline-flex items-center gap-2 min-h-11 px-5 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition-colors">
                <Mail size={16} aria-hidden="true" /> {CONTACT_EMAIL}
              </a>
            </li>
            {linkedin && (
              <li>
                <a href={linkedin.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 min-h-11 px-5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-900 transition-colors">
                  LinkedIn <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              </li>
            )}
            <li>
              <a href="/rss.xml" className="inline-flex items-center gap-1.5 min-h-11 px-5 rounded-full border border-gray-300 text-gray-800 hover:border-gray-900 transition-colors">
                <Rss size={15} aria-hidden="true" /> RSS
              </a>
            </li>
          </ul>
          <p className="text-sm text-gray-600">
            경력과 연구 과제 전체 목록은 <Link href="/profile" className="underline underline-offset-4 hover:text-gray-900">상세 프로필</Link>에, 언론 보도는 <Link href="/news" className="underline underline-offset-4 hover:text-gray-900">In the News</Link>에 정리해 두었습니다.
          </p>
        </footer>
      </article>
    </div>
  );
}
