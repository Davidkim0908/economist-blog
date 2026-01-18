'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Post } from '@/lib/posts';

interface DeskCarouselProps {
  posts: Post[];
}

export default function DeskCarousel({ posts }: DeskCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % posts.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + posts.length) % posts.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (posts.length === 0) return null;

  return (
    <div className="relative group">
      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg overflow-hidden shadow-2xl relative min-h-[400px]">
        {/* Slides */}
        <div className="relative w-full h-full flex flex-col md:flex-row transition-opacity duration-500 ease-in-out">
            {/* Image Side */}
            <div className="md:w-1/2 h-64 md:h-auto md:min-h-[400px] relative">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src={posts[currentIndex].coverImage} 
                    className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
                    alt={posts[currentIndex].title} 
                />
            </div>
            
            {/* Content Side */}
            <div className="md:w-1/2 p-8 md:p-12 text-left flex flex-col justify-center bg-white relative z-10">
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-3">On My Desk</div>
                <h4 className="text-2xl md:text-3xl font-serif font-bold mb-6 leading-tight">
                    {posts[currentIndex].title}
                </h4>
                <p className="text-gray-600 mb-8 line-clamp-3 leading-relaxed">
                    {posts[currentIndex].excerpt}
                </p>
                <Link 
                    href={`/posts/${posts[currentIndex].category}/${posts[currentIndex].slug}`} 
                    className="text-primary font-bold hover:underline inline-flex items-center gap-1 uppercase text-sm tracking-wide"
                >
                    Read More
                </Link>
            </div>
        </div>

        {/* Navigation Buttons (Visible on Hover/Focus) */}
        <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 z-20"
            aria-label="Previous slide"
        >
            <ChevronLeft size={24} />
        </button>
        <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 focus:opacity-100 z-20"
            aria-label="Next slide"
        >
            <ChevronRight size={24} />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-3 mt-6">
        {posts.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
