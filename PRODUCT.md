# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

독자층은 넓고, 노출 비중 순서는 다음과 같다(2026-09-27 필자 확인):

1. **정책·공공 부문 실무자** — 부처·연구원·지자체 담당자. 정책 논거와 해석을 찾는다.
2. **업계·기업 실무자** — AI·모빌리티 산업의 동향과 전략적 해석을 찾는다.
3. **언론·방송 관계자** — 섭외·인터뷰·기고 의뢰 전에 필자의 전문성과 관점을 확인한다.
4. **일반 교양 독자** — 경제·기술 칼럼과 책 리뷰를 읽는다.

디자인과 문장의 난이도 기준은 **일반 교양 독자**에 맞춘다. 전문가도 불편하지 않고, 교양 독자도 막히지 않는 수준.

## Product Purpose

경제학자 김동영(David Kim)의 개인 블로그 "David's Notes". 기술(AI·모빌리티)이라는 '엔진'에 경제사라는 '맥락의 지도'를 더하는 칼럼·기고·방송·큐레이션을 싣는다.

성공의 단계:

1. 글을 읽고 **필자를 신뢰**하게 된다.
2. **구독자로 남는다.**
3. 글과 큐레이션을 **외부로 공유(바이럴)** 한다.

장기 목표: 블로그가 필자의 생각과 비즈니스를 알리는 채널이 되고, **신뢰할 수 있는 콘텐츠를 큐레이션하는 공간**이 된다. 블로그에 언급된 기사·영상·보고서·책은 "믿고 볼 수 있다"는 보증이 된다. 그러면 언급되기를 원하는 콘텐츠 생산자가 늘고, 이들이 소비자를 불러온다. 이렇게 생긴 락인 효과를 필자의 생각과 비즈니스 의도를 전달하는 데 쓰고, 궁극적으로 **필자의 사회적 영향력**을 높이는 수단이 된다.

## Positioning

"가장 빠른 미래(자율주행·AI)"와 "한국 경제의 치열한 역사"를 동시에 딛는 경제학자의 관점. 트렌드 요약이 아니라, 역사적 맥락으로 기술 변화를 해석하고 정책적 함의까지 잇는다. 큐레이션(On My Desk, In the News, Books)에는 필자의 판단이 보증으로 붙는다.

## Operating Context

- 글 형식: MDX 칼럼·기고(`posts/`), 신문 기고 재게재, 방송 출연 영상(`lib/videos.ts`), 언론 보도(`lib/news.ts`), 책 리뷰, 외부 기사 큐레이션(On My Desk).
- 콘텐츠 규모(2026-09 기준): AI Transformation 138편, Mobility 12편, Desk 11편, Books 10편, Growth Trajectory(history) 1편.
- 헤드라인은 신문 톤의 한국어. 본문은 한국어, 큐레이션 대상은 영문 기사가 많다.

## Capabilities and Constraints

- Next.js 16 App Router + Tailwind v4 + next-mdx-remote, Vercel 배포.
- 뉴스레터·회원가입(Join)은 **아직 없다**. `lib/site.ts`의 `SHOW_NEWSLETTER`, `SHOW_JOIN` 플래그로 숨겨 둠. 발송 서비스·OAuth 키가 생기면 켠다.
- 관리자 영역은 `proxy.ts` + `ADMIN_PASSWORD` 서버 게이트.
- SNS 계정은 LinkedIn만 있다(`lib/site.ts`의 `socialLinks`).

## Brand Commitments

다음 요소는 **변경 전에 반드시 필자와 먼저 상의하고 검토한 뒤 진행**한다:

- "D." 로고 마크와 글 끝 빨간 마침표(엔드 마크) 체계
- 빨간색 포인트 컬러 `#B91C1C` (`--color-primary`)
- 카테고리 체계: Focus 3축(AT·MT·GT) + Books + On My Desk
- 영문 섹션 명칭(Meet David, On My Desk, In the News 등)

보이스: "미래의 길을 설계하는 경제학자". 핵심 문구 "기술이라는 '엔진'에, 맥락이라는 '지도'를 더합니다."

## Evidence on Hand

- 필자 사진·일러스트: `public/images/david.jpg`, `public/reading-book-clean.jpg`
- 방송 출연(SBS Biz, KBS 1라디오 등)과 언론 보도 목록: `lib/videos.ts`, `lib/news.ts`
- 소개 원문: `Meet David_About.txt`, `app/about/page.tsx`
- 구독자 수, 추천사, 수상 경력 등은 **없다**. 만들어 넣지 않는다.

## Product Principles

1. **신뢰가 먼저다.** 모든 화면은 "이 사람의 판단을 믿을 수 있는가"에 답해야 한다. 출처와 날짜를 분명히 한다.
2. **큐레이션은 보증이다.** 언급되는 외부 콘텐츠는 출처·필자 코멘트와 함께, 선별되었다는 인상을 준다.
3. **교양 독자 눈높이.** 전문성은 내용에서, 쉬움은 구조와 조판에서.
4. **공유될 만하게.** 각 글은 제목과 요약만으로도 밖에서 읽히고 인용될 수 있어야 한다.
5. **없는 기능은 보여주지 않는다.** 동작하지 않는 구독·가입·SNS는 숨긴다.

## Accessibility & Inclusion

WCAG 2.2 AA를 목표로 한다. 12px 미만 글자 금지, 본문·메타 텍스트 대비 4.5:1 이상, 키보드 조작 가능, prefers-reduced-motion 존중. 한글 `word-break: keep-all` 유지.
