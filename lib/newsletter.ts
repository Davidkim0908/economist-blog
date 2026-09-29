// 뉴스레터 구독: 관심 분야, 입력 검사, 발송 서비스 연결 상태.
// 발송 서비스(스티비 등)를 연결하기 전까지는 신청을 저장하지 않는다.

export const NEWSLETTER_TOPICS = [
  { key: "digital-transformation", label: "AI Transformation" },
  { key: "mobility", label: "Mobility Transformation" },
  { key: "history", label: "Growth Trajectory" },
  { key: "books", label: "Books" },
  { key: "desk", label: "On My Desk" },
] as const;

export type TopicKey = (typeof NEWSLETTER_TOPICS)[number]["key"];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(raw: string): string | null {
  const email = raw.trim().toLowerCase();
  return EMAIL_RE.test(email) && email.length <= 254 ? email : null;
}

export function pickTopics(raw: string[]): TopicKey[] {
  const allowed = new Set<string>(NEWSLETTER_TOPICS.map((t) => t.key));
  return [...new Set(raw.filter((t) => allowed.has(t)))] as TopicKey[];
}

/** 발송 서비스가 연결되어 있는지 — 연결 전에는 구독 화면을 운영 사이트에 노출하지 않는다 */
export function isNewsletterConfigured(): boolean {
  return Boolean(process.env.NEWSLETTER_PROVIDER);
}
