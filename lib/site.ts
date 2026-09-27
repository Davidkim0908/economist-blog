// Site-wide switches. Flip to true once a real newsletter provider is wired up.
export const SHOW_NEWSLETTER = false;

// Join/sign-up is hidden until OAuth keys and account storage exist. /join stays reachable by URL.
export const SHOW_JOIN = false;

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

// 연재 번호 표지 스타일 (연재마다 바탕색으로 구분). bg는 반투명이라 아래 종이가 비친다.
export type SeriesStyle = { key: string; bg: string; ogBg: string; label: string; number: string; en: string };
const seriesStyles: Record<string, SeriesStyle> = {
  "4차 산업혁명 이야기": { key: "4ir", bg: "rgba(148,153,160,0.32)", ogBg: "#D2D4D6", label: "#4B5563", number: "#1F2937", en: "The Fourth Industrial Revolution" },
  "디지털 이코노미": { key: "de", bg: "rgba(96,125,160,0.26)", ogBg: "#CDD6E0", label: "#3E516A", number: "#1E2F45", en: "Digital Economy" },
};
export const seriesStyle = (series: string): SeriesStyle => seriesStyles[series] ?? seriesStyles["4차 산업혁명 이야기"];
export const seriesStyleByKey = (key: string): SeriesStyle =>
  Object.values(seriesStyles).find((s) => s.key === key) ?? seriesStyles["4차 산업혁명 이야기"];
