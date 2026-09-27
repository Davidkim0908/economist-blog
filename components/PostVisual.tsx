import Image from "next/image";
import type { Post } from "@/lib/posts";
import { postImage, isSeriesCover } from "@/lib/post-image";
import SeriesCover from "@/components/SeriesCover";

// 글의 대표 이미지를 그린다: 연재(사진 없음)는 번호 표지, 그 외는 사진/대표 이미지.
// 부모는 position:relative 이고 크기(aspect)를 정해 둔다.
export default function PostVisual({
  post,
  sizes,
  priority,
  className = "object-cover",
  alt = "",
  summary,
}: {
  post: Pick<Post, "heroImage" | "coverImage" | "heroFocus" | "series" | "seriesOrder">;
  sizes: string;
  priority?: boolean;
  className?: string;
  alt?: string;
  summary?: string;
}) {
  if (isSeriesCover(post)) return <SeriesCover series={post.series!} order={post.seriesOrder!} summary={summary} />;
  const src = postImage(post);
  if (!src) return null;
  return (
    <Image
      src={src}
      alt={alt}
      fill
      priority={priority}
      sizes={sizes}
      className={className}
      style={post.heroImage && post.heroFocus ? { objectPosition: post.heroFocus } : undefined}
    />
  );
}
