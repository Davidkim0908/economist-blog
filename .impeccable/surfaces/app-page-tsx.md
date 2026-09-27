---
version: 1
slug: "app-page-tsx"
primary_target: "app/page.tsx"
related_targets: []
---

# Surface brief: 홈 (app/page.tsx)

Scope: 홈. 내비·타이포 체계는 사이트 전역에 공유. Visitor mode: Persuade (신뢰 → 구독 → 공유).
Audience/job: 교양 독자 눈높이. 첫 방문자가 한 장의 사진과 한 편의 글로 "이 사람의 관점"을 느끼고 글을 연다.
Proof/content: 실제 칼럼(posts/), On My Desk 해외 기사, 방송 영상, 서평. 사진은 글 frontmatter의 heroImage/heroCredit/heroAlt (현재 대표 글만 Unsplash 스톡 — 필자 사진으로 교체 예정).
Constraints: D. 마크·엔드 마크·Playfair 로고 서체 고정(PRODUCT.md). 뉴스레터·Join 숨김. 판정·추천사 발명 금지.
History: 빨간 펜 교정지(seed 36fbd174 pick) → 필자가 비교 후 Gates Notes 풍 선택, 교정지의 종이 바탕색만 혼합(2026-09-27).

## Direction contract
THESIS: 한 장의 사진, 한 편의 글. Gates Notes처럼 주제 사진 위에 대표 글 하나를 띄우고, 이하 여백 넓은 타일로 이어간다. 촘촘한 카드 그리드·우주 스톡 배경을 거부한다.
OWN-WORLD: 차가운 회백 종이 바탕(#E8E9E8)에 한 톤 밝은 시트(#F4F5F4) 카드, 모서리 16px. 한글은 Noto Sans KR 700 단정하게, 영문 섹션·페이지 이름은 Source Serif 4, 라벨은 작은 대문자 산세리프. 빨강은 D.와 링크 hover에만.
STORY: 사진과 제목으로 관점을 느끼고 → 최신 글 3편 → Meet David 문구로 사람을 알고 → On My Desk·Videos·Books로 신뢰를 넓힌다.
FIRST VIEWPORT: 전체 폭 사진(92vh), 내비는 사진 위 투명. 왼쪽 아래 반투명 시트 카드: 영문 카테고리 라벨, 한글 제목(type-display-ko), 요약 한 문장, "전문 읽기 →". 오른쪽 아래 사진 출처.
FORM: Gates Notes 풍 + 교정지 종이 바탕 (사용자 선택, seed key 36fbd174 라운드의 canon 계열 대안). 시그니처: 사진 위 투명 내비가 스크롤 시 종이 바탕으로 전환.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
