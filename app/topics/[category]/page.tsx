import { getPostsByCategory, getAllPosts } from "@/lib/posts";
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

  // Map category slug to display name
  const categoryNames: Record<string, string> = {
    'digital-transformation': 'AI Transformation',
    'mobility': 'Mobility Transformation',
    'history': 'Growth Trajectory',
    'books': 'Book Reviews',
    'desk': 'On My Desk'
  };

  const title = categoryNames[category] || category.replace(/-/g, ' ').toUpperCase();

  const descriptions: Record<string, string> = {
    'digital-transformation': 'Exploring how AI and digital technologies are reshaping industries, labor, and society.',
    'mobility': 'Analyzing the future of transportation, from EVs to autonomous driving and MaaS.',
    'history': 'Decoding the secrets of economic growth through the lens of Korean and world history.',
    'books': 'Deep dives into literature that shapes our understanding of the world.',
    'desk': 'Daily research, insights, and global reports curated from top economic sources.'
  };

  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
            {/* Premium Header */}
            <div className="max-w-4xl mx-auto text-center mb-24">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-gray-200" />
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Topic Focus</span>
                    <div className="h-[1px] w-12 bg-gray-200" />
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 text-gray-900 tracking-tighter">
                    {title}
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto break-keep">
                    {descriptions[category] || `Insights and analysis on ${title}.`}
                </p>
            </div>

            <PostList posts={posts} category={category} />
        </div>
    </div>
  );
}
