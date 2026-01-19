'use client';

import { useState } from 'react';
import PostCard from "@/components/PostCard";
import { Post } from "@/lib/posts";

interface PostListProps {
  posts: Post[];
  category: string;
}

export default function PostList({ posts, category }: PostListProps) {
  const [activeTab, setActiveTab] = useState('all');

  // Check if there are any posts with the specific series
  const seriesName = "4차 산업혁명 이야기";
  const hasSeriesPosts = posts.some(post => post.series === seriesName);

  const filteredPosts = activeTab === 'all' 
    ? posts 
    : posts.filter(post => post.series === seriesName).sort((a, b) => (a.seriesOrder || 0) - (b.seriesOrder || 0));

  return (
    <div>
      {hasSeriesPosts && (
        <div className="flex gap-6 mb-10 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('all')}
            className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${
              activeTab === 'all' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            All Stories
          </button>
          <button
            onClick={() => setActiveTab('series')}
            className={`pb-3 text-sm font-bold uppercase tracking-widest transition-colors ${
              activeTab === 'series' 
                ? 'text-primary border-b-2 border-primary' 
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            Series: 4차 산업혁명 이야기
          </button>
        </div>
      )}

      {filteredPosts.length > 0 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 text-gray-400">
          <p>No posts found in this section yet.</p>
        </div>
      )}
    </div>
  );
}
