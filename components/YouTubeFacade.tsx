'use client';

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

// Shows the YouTube thumbnail and only loads the player iframe after a click.
// youtubeId may carry a query string (e.g. "abc123?start=2078").
export default function YouTubeFacade({ youtubeId, title }: { youtubeId: string; title: string }) {
  const [active, setActive] = useState(false);
  const [id, query = ""] = youtubeId.split("?");

  if (active) {
    const params = new URLSearchParams(query);
    params.set("autoplay", "1");
    return (
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube-nocookie.com/embed/${id}?${params.toString()}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="absolute inset-0 w-full h-full group/play"
      aria-label={`영상 재생: ${title}`}
    >
      <Image
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        fill
        sizes="(min-width: 768px) 33vw, 100vw"
        className="object-cover"
      />
      <span className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover/play:bg-black/35">
        <span className="w-16 h-16 rounded-full bg-white/95 text-gray-900 flex items-center justify-center shadow-lg">
          <Play size={22} fill="currentColor" className="ml-1" />
        </span>
      </span>
    </button>
  );
}
