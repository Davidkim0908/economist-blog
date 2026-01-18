import { getAllPosts } from "@/lib/posts";
import { NextResponse } from "next/server";

export async function GET() {
  const posts = getAllPosts();
  // Return a simplified version of posts for search indexing
  const searchData = posts.map(post => ({
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    slug: post.slug,
    date: post.date
  }));
  return NextResponse.json(searchData);
}
