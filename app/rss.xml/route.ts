import { getAllPosts } from "@/lib/posts";
import { categoryLabelEn, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/site";

// 새 글 RSS 피드 — RSS 구독기와, 나중에 뉴스레터 '새 글 알림' 자동 발송에 쓴다
export const dynamic = "force-static";
export const revalidate = 3600;

const MAX_ITEMS = 50;

const escapeXml = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;");

// 글의 날짜(YYYY-MM-DD)는 한국 시간 오전 9시 게재로 본다
const pubDate = (date: string) => {
  const d = new Date(`${date}T09:00:00+09:00`);
  return Number.isNaN(d.getTime()) ? new Date(0).toUTCString() : d.toUTCString();
};

export function GET() {
  const posts = getAllPosts().slice(0, MAX_ITEMS);
  const items = posts
    .map((p) => {
      const url = `${SITE_URL}/posts/${p.category}/${p.slug}`;
      return [
        "    <item>",
        `      <title>${escapeXml(p.title)}</title>`,
        `      <link>${url}</link>`,
        `      <guid isPermaLink="true">${url}</guid>`,
        `      <pubDate>${pubDate(p.date)}</pubDate>`,
        `      <category>${escapeXml(categoryLabelEn(p.category))}</category>`,
        p.series ? `      <category>${escapeXml(p.series)}</category>` : "",
        `      <description>${escapeXml(p.excerpt)}</description>`,
        "    </item>",
      ]
        .filter(Boolean)
        .join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_NAME)}</title>
    <link>${SITE_URL}</link>
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>ko</language>
    <lastBuildDate>${posts[0] ? pubDate(posts[0].date) : new Date(0).toUTCString()}</lastBuildDate>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
