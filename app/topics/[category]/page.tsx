import PostCard from "@/components/PostCard";
import { getPostsByCategory, getAllPosts } from "@/lib/posts";
import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    category: string;
  }>;
}

export async function generateStaticParams() {
    const posts = getAllPosts();
    // Get unique categories
    const categories = Array.from(new Set(posts.map(post => post.category)));
    return categories.map(category => ({ category }));
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    notFound();
  }

  const categoryTitle = category === 'digital-transformation' ? 'AI Transformation' :
                        category === 'mobility' ? 'Mobility Transformation' :
                        category === 'history' ? 'Growth Trajectory' :
                        category === 'books' ? 'Books' : 
                        category;

  const categoryDesc = category === 'digital-transformation' ? 'AI, Big Data, and the changing landscape of our economy.' :
                       category === 'mobility' ? 'From EVs to Autonomous Driving, exploring how we move.' :
                       category === 'history' ? 'Lessons from the Miracle on the Han River and beyond.' :
                       'Insights and thoughts.';

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16 max-w-2xl mx-auto">
        <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Topic</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900 capitalize">
          {categoryTitle}
        </h1>
        <p className="text-xl text-gray-600 leading-relaxed">
            {categoryDesc}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <PostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
