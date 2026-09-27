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
