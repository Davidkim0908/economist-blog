import type { Post } from "@/lib/posts";

type ImageFields = Pick<Post, "heroImage" | "coverImage" | "series" | "seriesOrder">;

// 사진이 없는 연재 글은 번호 표지(SeriesCover)를 쓴다 — 옛 연재 이미지는 쓰지 않는다.
export function isSeriesCover(post: Partial<ImageFields>): boolean {
  return Boolean(post.series && post.seriesOrder && !post.heroImage);
}

// 글의 대표 이미지: 사진(heroImage)이 있으면 사진, 없으면 coverImage. 연재 번호 표지 글은 없음.
// 홈·글 페이지·목록 카드·공유 미리보기가 모두 이 규칙을 쓴다. (fs 없는 모듈 — 클라이언트에서도 사용 가능)
export function postImage(post: Partial<ImageFields>): string | undefined {
  if (isSeriesCover(post)) return undefined;
  return post.heroImage || post.coverImage || undefined;
}
