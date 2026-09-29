import type { MetadataRoute } from "next";
import { getAllPosts } from "@/lib/posts";
import { SITE_URL } from "@/lib/site";

// 검색 엔진용 사이트맵 — 공개 페이지와 모든 글. 관리자·구독(미공개) 화면은 넣지 않는다.
export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts();
  const latest = posts[0]?.date;
  const staticPages = ["", "/about", "/books", "/desk", "/videos", "/news"].map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified: latest,
    changeFrequency: "weekly" as const,
    priority: path === "" ? 1 : 0.7,
  }));
  const categories = [...new Set(posts.map((p) => p.category))];
  const topics = categories.map((c) => ({
    url: `${SITE_URL}/topics/${c}`,
    lastModified: posts.find((p) => p.category === c)?.date,
    changeFrequency: "weekly" as const,
    priority: 0.6,
  }));
  const articles = posts.map((p) => ({
    url: `${SITE_URL}/posts/${p.category}/${p.slug}`,
    lastModified: p.date,
    changeFrequency: "monthly" as const,
    priority: p.series ? 0.4 : 0.5,
  }));
  return [...staticPages, ...topics, ...articles];
}
