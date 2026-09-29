// 사이트 기본 정보 (RSS·사이트맵·공유 이미지의 절대 주소에 쓴다)
export const SITE_URL = "https://www.davidsnote.com";
export const SITE_NAME = "David's Notes";
export const SITE_DESCRIPTION = "경제학자 김동영의 블로그 — AI 전환, 모빌리티, 경제사, 그리고 책.";

// Site-wide switches. Flip to true once a real newsletter provider is wired up.
export const SHOW_NEWSLETTER = false;

// Only accounts that actually exist. Add Twitter/Facebook/YouTube here when ready.
export const socialLinks: { label: string; href: string }[] = [
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kim-dongyoung-23a84493/" },
];

// 카테고리 표시 이름 (한 곳에서 관리)
export const categoryLabels: Record<string, string> = {
  "digital-transformation": "AI Transformation",
  mobility: "Mobility Transformation",
  history: "Growth Trajectory",
  books: "Books",
  desk: "On My Desk",
};

export const categoryLabel = (category: string) => categoryLabels[category] ?? category;

// 영문 라벨 (작은 대문자 라벨·페이지 이름용)
export const categoryLabelsEn: Record<string, string> = {
  "digital-transformation": "AI Transformation",
  mobility: "Mobility Transformation",
  history: "Growth Trajectory",
  books: "Books",
  desk: "On My Desk",
};

export const categoryLabelEn = (category: string) => categoryLabelsEn[category] ?? category;

// 제목이 대부분 로마자이면 영문 서체로 조판
export const isLatinTitle = (text: string) => !/[가-힣]/.test(text);

// 연재 번호 표지 스타일 (ongoing: 연재 중이면 true, 아니면 연재 완료로 표시) (연재마다 바탕색으로 구분). bg는 반투명이라 아래 종이가 비친다.
export type SeriesStyle = { key: string; bg: string; ogBg: string; label: string; number: string; en: string; ongoing?: boolean };
const seriesStyles: Record<string, SeriesStyle> = {
  "4차 산업혁명 이야기": { key: "4ir", bg: "rgba(148,153,160,0.32)", ogBg: "#D2D4D6", label: "#4B5563", number: "#1F2937", en: "The Fourth Industrial Revolution" },
  "디지털 이코노미": { key: "de", bg: "rgba(96,125,160,0.26)", ogBg: "#CDD6E0", label: "#3E516A", number: "#1E2F45", en: "Digital Economy" },
  "에이징 & 모빌리티": { key: "am", bg: "rgba(120,140,118,0.28)", ogBg: "#D3DBD1", label: "#465644", number: "#243223", en: "Aging & Mobility", ongoing: true },
};
export const seriesStyle = (series: string): SeriesStyle => seriesStyles[series] ?? seriesStyles["4차 산업혁명 이야기"];
export const seriesStyleByKey = (key: string): SeriesStyle =>
  Object.values(seriesStyles).find((s) => s.key === key) ?? seriesStyles["4차 산업혁명 이야기"];
