// 프로필 페이지 데이터 — 필자 이력서(CV, 2026.6.30.)에서 옮김. 개인정보(생년월일·전화·주소)는 넣지 않는다.

export const PROFILE_TITLE = "경제학자 · 정책연구자 · 모빌리티 및 규제 전문가";

export const CURRENT_ROLES = ["한국개발연구원(KDI) 글로벌지식협력센터 연구팀장", "중앙대학교 겸임교수"];

export const RESEARCH_INTERESTS = ["산업조직", "디지털 전환", "플랫폼 비즈니스", "모빌리티"];

// 행사·방송 담당자가 그대로 가져다 쓰도록 3인칭으로 쓴 약력
export const BIO_SHORT =
  "김동영은 한국개발연구원(KDI) 글로벌지식협력센터 연구팀장이자 중앙대학교 겸임교수다. 산업조직과 디지털 전환, 플랫폼 비즈니스, 모빌리티를 연구하며, 국토교통부 로보택시 사회적협의체와 한국공학한림원 자율주행위원회 등에서 정책 자문을 맡고 있다.";

export const BIO_LONG =
  "김동영은 택시 호출 플랫폼이 택시시장에 미친 영향을 연구해 경제학 박사 학위를 받았다. 2011년부터 한국개발연구원(KDI)에서 산업과 디지털 경제를 연구해 왔으며, 현재 글로벌지식협력센터 연구팀장을 맡고 있다. KDI에서 파견되어 대통령직속 정책기획위원회(2020~2022)와 국무총리실 규제혁신추진단(2022~2024)에서 4년여간 전문위원으로 일했고, 지금은 국토교통부 로보택시 사회적협의체와 모빌리티혁신위원회, 한국공학한림원 자율주행위원회, 서울시 택시정책위원회 등에서 활동하고 있다. 한국경제신문에 「4차 산업혁명 이야기」와 「디지털 이코노미」를 2017년부터 2023년까지 연재했고, 2023년 11월부터 2026년 3월까지 KBS 1라디오 「성기영의 경제쇼」에 고정 출연했다. 2016년 기획재정부 장관 표창을 받았다.";

export type Item = { title: string; org?: string; period?: string; note?: string; href?: string };

export const EDUCATION: Item[] = [
  { title: "경제학 박사", org: "건국대학교", note: "학위논문 「택시 호출 플랫폼 등장이 택시시장에 미치는 영향」 (지도교수 권남훈)" },
  { title: "경제학 석사", org: "건국대학교" },
  { title: "응용통계학 학사", org: "건국대학교" },
];

export const CAREER: Item[] = [
  { title: "글로벌지식협력센터 연구팀장", org: "한국개발연구원(KDI)", period: "2024.8 ~ 현재" },
  { title: "규제혁신추진단 전문위원", org: "국무총리실", period: "2022.7 ~ 2024.8", note: "KDI에서 파견" },
  { title: "정책기획위원회 전문위원", org: "대통령직속", period: "2020.4 ~ 2022.6", note: "KDI에서 파견" },
  { title: "연구부원장실 전문연구원", org: "한국개발연구원(KDI)", period: "2020 ~ 2024.8" },
  { title: "디지털경제연구실 전문연구원", org: "한국개발연구원(KDI)", period: "2016 ~ 2020" },
  { title: "부원장실 전문연구원", org: "한국개발연구원(KDI)", period: "2015 ~ 2016" },
  { title: "산업서비스경제연구부 전문연구원", org: "한국개발연구원(KDI)", period: "2011 ~ 2015" },
];

export const ADVISORY_CURRENT: Item[] = [
  { title: "자율주행위원회 위원", org: "한국공학한림원", period: "2026.3 ~" },
  { title: "로보택시 사회적협의체 위원", org: "국토교통부", period: "2026.1 ~" },
  { title: "택시정책위원회 위원", org: "서울특별시", period: "2025.1 ~" },
  { title: "지방재정보조금관리위원회 위원", org: "서울특별시", period: "2025 ~" },
  { title: "택시산업발전 TF 위원", org: "국토교통부", period: "2024.8 ~" },
  { title: "국토교통규제혁신위원", org: "국토교통부", period: "2024.7 ~" },
  { title: "모빌리티혁신위원", org: "국토교통부", period: "2024.2 ~" },
  { title: "부회장", org: "(사)한국무역학회", period: "2024.1 ~" },
  { title: "이사", org: "(재)택시감차재원보상관리기관", period: "2023.1 ~" },
  { title: "「위대한 수업(Great Minds)」 경제부문 자문위원", org: "EBS", period: "2021 ~" },
];

export const ADVISORY_PAST: Item[] = [
  { title: "모빌리티혁신 포럼 위원", org: "국토교통부", period: "2023.2 ~ 2025.2" },
  { title: "모빌리티 혁신 위원", org: "전국렌터카공제조합", period: "2023" },
  { title: "모빌리티 분과 자문위원", org: "대통령직속 4차 산업혁명위원회", period: "2020 ~ 2021" },
  { title: "경영자문위원(디지털 전환)", org: "LX하우시스", period: "2020 ~ 2021" },
  { title: "다큐프라임 「4차 산업혁명과 교육」 기획·자문위원", org: "EBS", period: "2018" },
];

export const MEDIA: Item[] = [
  { title: "KBS 1라디오 「성기영의 경제쇼」 「디지털 이코노미」 고정 출연(주간)", period: "2023.11 ~ 2026.3", href: "/videos" },
  { title: "미래에셋투자와연금센터 「에이징 & 모빌리티」 연재", period: "2025 ~", href: "/topics/mobility" },
  { title: "아리랑TV 「BizTech Korea」 진행", period: "2020 ~ 2022.8" },
  { title: "한국경제신문 「디지털 이코노미」 연재(주간, 127편)", period: "2021.3 ~ 2023.12", href: "/topics/digital-transformation" },
  { title: "한국경제신문 「4차 산업혁명 이야기」 연재(주간, 121편)", period: "2017.11 ~ 2021.3", href: "/topics/digital-transformation" },
];

export const COLUMN_OUTLETS = ["매일경제", "아주경제", "전자신문", "한국경제", "동아비즈니스리뷰(DBR)", "헤럴드경제", "국민일보", "세계일보", "주간조선"];

export const LECTURES: Item[] = [
  { title: "디지털 기술과 미래 트렌드 특강", org: "삼성종합기술원", period: "2024" },
  { title: "디지털 전환 교육", org: "현대자동차", period: "2023 ~ 2024" },
  { title: "삼성그룹 임원후보자 교육(디지털 전환)", org: "삼성인력개발원", period: "2022 ~ 2023" },
  { title: "핵심인재 교육(디지털 전환)", org: "CJ그룹", period: "2022" },
];

export const TEACHING: Item[] = [
  { title: "겸임교수 (학부 미시·거시경제학, 경영전략)", org: "중앙대학교", period: "2022.3 ~ 현재" },
  { title: "강사 (학부 산업조직론)", org: "건국대학교", period: "2022.9 ~ 2023.2" },
  { title: "겸임교수 (학부 산업조직론)", org: "한양대학교", period: "2021.9 ~ 2022.8" },
];

export const AWARDS: Item[] = [{ title: "기획재정부 장관 표창", period: "2016" }];

// 연구 과제 — 발주처를 모두 밝힌다. authors는 공동연구일 때만 적는다.
export type Project = { year: number; title: string; client?: string; authors?: string };

export const PROJECTS: Project[] = [
  { year: 2026, title: "자율주행 택시 서비스 개념 정립 및 차별성 검토", client: "전국택시조합연합회" },
  { year: 2026, title: "로보택시와 렌터카 시장확장 연구", client: "전국렌터카연합회" },
  { year: 2026, title: "택시 감차보상제도의 실질적 형평성 제고 및 TIMS 데이터 기반 차등 보조금 산정 모형 개발", client: "(재)택시감차보상재원관리기관" },
  { year: 2026, title: "개인택시산업 자율주행 전환 모델 및 면허 자산화 기반 제도개선 연구", client: "전국개인택시운송사업조합연합회" },
  { year: 2025, title: "상생재단 사업전략 수립 및 상생사업 수요조사", client: "카카오모빌리티 상생재단" },
  { year: 2025, title: "택시 승차대 설치기준 연구", client: "국토교통부" },
  { year: 2025, title: "제5차 택시총량 검증 계획 수립 연구", client: "국토교통부" },
  { year: 2024, title: "제5차 택시 총량제 수립기준 및 제도개선에 관한 연구", client: "국토교통부" },
  { year: 2024, title: "교통약자를 위한 교통수단 다양화 방안 및 관련 안전기준 연구", client: "국토교통부" },
  { year: 2023, title: "택시산업 경영여건 개선방안 연구", client: "국토교통부", authors: "김동영·안기정·송제룡" },
  { year: 2022, title: "택시요금 인상이 물가에 미치는 영향에 관한 연구", client: "전국택시운송사업조합연합회" },
  { year: 2022, title: "물류산업의 디지털 전환과 국제경쟁력의 강화", client: "한국개발연구원", authors: "김주훈·김동영 외" },
  { year: 2022, title: "택시부제 운영평가 제도개선에 관한 연구", client: "전국개인택시운송사업조합연합회", authors: "김동영·안기정 외" },
  { year: 2022, title: "택시 대중교통체계 편입에 대한 법인택시 운수종사자 인식 조사", client: "전국택시노동조합연맹", authors: "김동영·안기정 외" },
  { year: 2022, title: "법인택시 월급제 도입 가능성 분석 연구용역", client: "전국택시운송사업조합연합회", authors: "김동영·안기정 외" },
  { year: 2021, title: "퍼스널 모빌리티의 효율적 규제방안 연구", client: "한국개발연구원", authors: "양용현·김동영 외" },
  { year: 2021, title: "메타버스의 개념과 경제의 변화: 이슈와 한계, 경제학적 해석을 중심으로" },
  { year: 2020, title: "플랫폼 비즈니스의 현황과 문제점: 주문·배달대행 플랫폼을 중심으로", client: "국회미래정책연구회" },
  { year: 2020, title: "온라인플랫폼 중개거래의 공정화를 위한 입법과제", client: "국회입법조사처", authors: "이정식·김동영·최자연" },
  { year: 2020, title: "인공지능의 윤리문제와 기업 및 학계의 대응현황", client: "국회미래정책연구회" },
  { year: 2020, title: "법인택시 유사노동 사례연구", client: "서울연구원" },
  { year: 2020, title: "전국 법인택시 현황 및 해외 리스제 사례조사", client: "서울연구원" },
  { year: 2018, title: "개인정보 규제에 관한 해외사례 연구", client: "한국개발연구원" },
  { year: 2018, title: "대한민국 중장기전략 주요과제: 4차 산업혁명편", client: "중장기전략위원회" },
  { year: 2018, title: "개인정보 제도의 해외사례와 시사점 (Research Brief No.24)", client: "경제인문사회연구회" },
];

export const CONTACT_EMAIL = "contact@economist-david.com";
