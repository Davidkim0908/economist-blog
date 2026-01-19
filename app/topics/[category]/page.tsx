import { getPostsByCategory, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";
import PostList from "@/components/PostList";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  // Get unique categories
  const categories = Array.from(new Set(posts.map((post) => post.category)));
  return categories.map((category) => ({
    category,
  }));
}

export default async function TopicPage({ params }: Props) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    // Alternatively, you could just render an empty list instead of 404
    // notFound(); 
  }

  // Map category slug to display name
  const categoryNames: Record<string, string> = {
    'digital-transformation': 'AI Transformation',
    'mobility': 'Mobility Transformation',
    'history': 'Growth Trajectory',
  };

  const title = categoryNames[category] || category.replace(/-/g, ' ').toUpperCase();

  const descriptions: Record<string, string> = {
    'digital-transformation': 'Exploring how AI and digital technologies are reshaping industries, labor, and society.',
    'mobility': 'Analyzing the future of transportation, from EVs to autonomous driving and MaaS.',
    'history': 'Decoding the secrets of economic growth through the lens of Korean and world history.',
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Topic</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
          {title}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          {descriptions[category] || `Insights and analysis on ${title}.`}
        </p>
      </div>

      <PostList posts={posts} category={category} />
    </div>
  );
}
