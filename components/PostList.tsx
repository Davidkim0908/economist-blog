'use client';

import { useState } from 'react';
import PostCard from "@/components/PostCard";
import { Post } from "@/lib/posts";

interface PostListProps {
  posts: Post[];
  category: string;
}

type Group = { key: string; title: string; subtitle?: string; posts: Post[] };

// 연재는 일반 글과 섞지 않는다: 칼럼(최신순) → 연재별 묶음(최근 연재 먼저, 회차 오름차순)
function groupPosts(posts: Post[]): Group[] {
  const columns = posts
    .filter((p) => !p.series)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const bySeries = new Map<string, Post[]>();
  for (const p of posts) {
    if (!p.series) continue;
    bySeries.set(p.series, [...(bySeries.get(p.series) ?? []), p]);
  }
  const latest = (list: Post[]) => Math.max(...list.map((p) => new Date(p.date).getTime()));
  const series = [...bySeries.entries()]
    .sort((a, b) => latest(b[1]) - latest(a[1]))
    .map(([name, list]) => ({
      key: name,
      title: name,
      subtitle: `연재 · ${list.length}편`,
      posts: [...list].sort((a, b) => (a.seriesOrder ?? 0) - (b.seriesOrder ?? 0)),
    }));

  return [
    ...(columns.length ? [{ key: "columns", title: "칼럼", subtitle: "최신순", posts: columns }] : []),
    ...series,
  ];
}

export default function PostList({ posts }: PostListProps) {
  const groups = groupPosts(posts);
  const [active, setActive] = useState<string>('all');
  const shown = active === 'all' ? groups : groups.filter((g) => g.key === active);
  const tabs = [{ key: 'all', label: '전체' }, ...groups.map((g) => ({ key: g.key, label: g.title }))];

  return (
    <div>
      {groups.length > 1 && (
        <div className="flex flex-wrap gap-x-8 gap-y-2 mb-12 border-b border-gray-200" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={active === t.key}
              onClick={() => setActive(t.key)}
              className={`pb-3 -mb-px text-[0.95rem] font-semibold transition-colors ${
                active === t.key ? 'text-gray-900 border-b-2 border-gray-900' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      )}

      {shown.length === 0 && (
        <div className="text-center py-20 text-gray-600">
          <p>아직 글이 없습니다.</p>
        </div>
      )}

      <div className="space-y-20">
        {shown.map((g) => (
          <section key={g.key} aria-labelledby={`group-${g.key}`}>
            {groups.length > 1 && (
              <div className="flex items-baseline gap-4 mb-8 border-b border-gray-200 pb-4">
                <h2 id={`group-${g.key}`} className="type-display-ko text-[1.75rem] text-gray-900">{g.title}</h2>
                {g.subtitle && <span className="type-sub-ko text-gray-600">{g.subtitle}</span>}
              </div>
            )}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {g.posts.map((post) => (
                <PostCard key={post.slug} post={post} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
