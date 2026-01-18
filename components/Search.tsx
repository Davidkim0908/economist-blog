"use client";

import { useState, useEffect, useRef } from 'react';
import { Search as SearchIcon, X, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { createPortal } from 'react-dom';

type SearchResult = {
  title: string;
  excerpt: string;
  category: string;
  slug: string;
  date: string;
};

export default function Search() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [posts, setPosts] = useState<SearchResult[]>([]);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Fetch posts only once when the component mounts or when search opens for the first time
  useEffect(() => {
    const fetchPosts = async () => {
      setIsLoading(true);
      try {
        const res = await fetch('/api/search');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        console.error("Failed to fetch search data", error);
      } finally {
        setIsLoading(false);
      }
    };

    if (isOpen && posts.length === 0) {
      fetchPosts();
    }
  }, [isOpen, posts.length]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      // Prevent body scroll
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  // Handle Search Logic
  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const lowerQuery = query.toLowerCase();
      const filtered = posts.filter(post => 
        post.title.toLowerCase().includes(lowerQuery) || 
        post.excerpt.toLowerCase().includes(lowerQuery)
      );
      setResults(filtered);
    }
  }, [query, posts]);

  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)} 
        className="text-gray-900 hover:text-primary transition-colors p-2"
        aria-label="Search"
      >
        <SearchIcon size={20} />
      </button>

      {isOpen && createPortal(
        <div className="fixed inset-0 z-[100] bg-white/95 backdrop-blur-sm flex flex-col animate-in fade-in duration-200">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-end mb-8">
              <button onClick={closeSearch} className="p-2 text-gray-500 hover:text-gray-900 transition-colors">
                <X size={32} />
              </button>
            </div>
            
            <div className="max-w-3xl mx-auto w-full">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search David's Notes..."
                className="w-full text-4xl md:text-5xl font-serif font-bold bg-transparent border-b-2 border-gray-200 py-4 focus:outline-none focus:border-primary placeholder-gray-300 text-gray-900"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              
              <div className="mt-12 space-y-8 overflow-y-auto max-h-[60vh] pr-4 custom-scrollbar">
                {isLoading && (
                  <div className="flex justify-center py-8 text-gray-400">
                    <Loader2 className="animate-spin" size={32} />
                  </div>
                )}
                
                {!isLoading && query !== '' && results.length === 0 && (
                   <p className="text-center text-gray-500 text-lg">No results found for &quot;{query}&quot;</p>
                )}

                {results.map((post) => (
                  <Link 
                    key={post.slug} 
                    href={`/posts/${post.category}/${post.slug}`}
                    onClick={closeSearch}
                    className="block group border-b border-gray-100 pb-8 last:border-0"
                  >
                    <span className="text-xs font-bold tracking-wider uppercase text-primary mb-2 block">
                       {post.category === 'digital-transformation' ? 'Digital Transformation' : 
                        post.category === 'history' ? 'History' : 
                        post.category}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 line-clamp-2">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
