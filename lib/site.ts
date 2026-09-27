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
  "digital-transformation": "AI 전환",
  mobility: "모빌리티 전환",
  history: "성장의 궤적",
  books: "서재",
  desk: "데스크 노트",
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
