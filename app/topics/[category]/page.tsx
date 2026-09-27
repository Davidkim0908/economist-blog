import { categoryLabelEn } from "@/lib/site";
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
    'books': '서평',
    'desk': 'On My Desk'
  };

  const title = categoryNames[category] || category.replace(/-/g, ' ').toUpperCase();
  const titleEn = categoryLabelEn(category);

  const descriptions: Record<string, string> = {
    'digital-transformation': 'AI와 디지털 기술이 산업과 노동, 사회를 어떻게 바꾸는지 탐구합니다.',
    'mobility': '전기차부터 자율주행, MaaS까지 이동의 미래와 그 경제적 파급을 분석합니다.',
    'history': '한국과 세계의 경제사를 통해 성장의 비밀을 읽어냅니다.',
    'books': '세상을 이해하는 방식을 바꾸는 책들을 깊이 읽습니다.',
    'desk': '주요 경제 매체의 리서치와 보고서를 골라 읽고 한 줄을 남깁니다.'
  };

  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
            {/* Premium Header */}
            <div className="max-w-4xl mx-auto text-center mb-24">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-gray-200" />
                    <span className="type-sub-ko text-primary">{category === "books" ? "서평" : category === "desk" ? "필자가 골라 읽은 기사" : "Focus"}</span>
                    <div className="h-[1px] w-12 bg-gray-200" />
                </div>
                <h1 className="type-page-en mb-8 text-gray-900">
                    {titleEn}
                </h1>
                <p className="text-lg md:text-[1.1875rem] text-gray-600 leading-relaxed max-w-2xl mx-auto break-keep">
                    {descriptions[category] || `Insights and analysis on ${title}.`}
                </p>
            </div>

            <PostList posts={posts} category={category} />
        </div>
    </div>
  );
}
