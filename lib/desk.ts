import type { Post } from "@/lib/posts";

function sentences(text: string): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.match(/[^.?!]+[.?!]+["”']?/g)?.map((t) => t.trim()) ?? [clean];
}

function firstSentence(text: string): string {
  return sentences(text)[0];
}

// The punchline: last sentence of a summary (used as the red-pen "핵심" mark)
export function lastSentence(text: string): string {
  const all = sentences(text);
  return all[all.length - 1];
}

// Shorten to one pen line: cut at a word boundary before `max` characters.
function clip(text: string, max: number): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  const at = Math.max(cut.lastIndexOf(" "), cut.lastIndexOf(","));
  return `${cut.slice(0, at > max * 0.6 ? at : max).replace(/[,\s]+$/, "")}…`;
}

// The author's own takeaway for a desk clipping, as one pen line:
// first sentence of the first "시사점" bullet, else the excerpt's first sentence.
export function deskNote(post: Post): string {
  const m = post.content.match(/시사점[^\n]*\n+(?:\s*\n)*\s*[*-]\s+(.+)/);
  const raw = (m ? m[1] : post.excerpt).replace(/\*\*/g, "");
  return clip(firstSentence(raw), 46);
}

// The author's conclusion: first sentence of the body's last prose paragraph
// (skips headings, lists, bylines in brackets). Falls back to the excerpt's last sentence.
export function conclusion(post: Post): string {
  const paras = post.content
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .filter((p) => p.length > 40 && !/^(#|[*-]\s|\[|>|!\[|<)/.test(p));
  const last = paras[paras.length - 1];
  const line = last ? firstSentence(last) : lastSentence(post.excerpt);
  return clip(line.replace(/\*\*/g, ""), 60);
}

export { firstSentence };

// "2026-04-16" → "2026. 4. 16."
export function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

// Today's dateline in Korean, e.g. "2026년 9월 27일 토요일"
export function dateline(): string {
  return new Intl.DateTimeFormat("ko-KR", {
    timeZone: "Asia/Seoul",
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
  }).format(new Date());
}
