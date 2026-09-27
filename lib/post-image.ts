import type { Post } from "@/lib/posts";

// 글의 대표 이미지: 사진(heroImage)이 있으면 사진, 없으면 coverImage.
// 홈·글 페이지·목록 카드·공유 미리보기가 모두 이 이미지를 쓴다. (fs 없는 모듈 — 클라이언트에서도 사용 가능)
export function postImage(post: Pick<Post, "heroImage" | "coverImage">): string | undefined {
  return post.heroImage || post.coverImage || undefined;
}
