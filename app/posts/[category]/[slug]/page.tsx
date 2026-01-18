import { getPostBySlug, getAllPosts } from "@/lib/posts";
import { MDXRemote } from "next-mdx-remote/rsc";
import Link from "next/link";
import { notFound } from "next/navigation";

// Define custom components for MDX (optional)
const components = {
  h1: (props: any) => <h1 className="text-3xl font-serif font-bold mt-8 mb-4" {...props} />,
  h2: (props: any) => <h2 className="text-2xl font-serif font-bold mt-8 mb-4 border-b pb-2" {...props} />,
  h3: (props: any) => <h3 className="text-xl font-serif font-bold mt-6 mb-3" {...props} />,
  p: (props: any) => <p className="mb-6 leading-relaxed text-gray-700 text-lg" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-6 pl-4" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-6 pl-4" {...props} />,
  li: (props: any) => <li className="mb-2" {...props} />,
  strong: (props: any) => <strong className="font-bold text-gray-900" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-primary pl-4 italic my-6 text-gray-600 bg-gray-50 py-4 pr-4 rounded-r-lg" {...props} />
  ),
};

interface Props {
  params: Promise<{
    category: string;
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    category: post.category,
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: Props) {
  const { category, slug } = await params;
  const post = getPostBySlug(category, slug);

  if (!post) {
    notFound();
  }

  // Format category label
  const categoryLabel = category === 'digital-transformation' ? 'AI Transformation' :
                        category === 'mobility' ? 'Mobility Transformation' :
                        category === 'history' ? 'Growth Trajectory' :
                        category === 'books' ? 'Book Reviews' : 
                        category === 'desk' ? 'On My Desk' :
                        category;

  return (
    <article className="container mx-auto px-4 py-16 max-w-[720px]">
      {/* Header Section */}
      <div className="mb-10 text-left">
        <div className="text-xs font-bold tracking-widest uppercase mb-4 text-gray-900">
          {categoryLabel}
        </div>
        
        <h1 className="text-5xl md:text-6xl font-serif font-black mb-6 leading-[1.1] text-gray-900 tracking-tight">
          {post.title}
        </h1>
        
        <p className="text-xl text-gray-600 mb-8 leading-relaxed font-sans">
           {post.excerpt}
        </p>

        {/* Author Block */}
        <div className="flex items-center gap-4 py-6 border-t border-b border-gray-200">
             {/* Profile Image */}
             <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 shrink-0">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src="/images/david.jpg" 
                    alt="David Kim" 
                    className="w-full h-full object-cover"
                />
             </div>
             
             <div>
                <div className="font-bold text-gray-900 text-base">
                    By <span className="underline decoration-2 decoration-primary/30">David Kim</span>
                </div>
                <div className="text-sm text-gray-500 mt-0.5 mb-3">
                    Published on {post.date}
                </div>
                <Link 
                  href="/"
                  className="inline-block border border-gray-400 text-gray-700 text-sm font-medium px-3 py-1 rounded hover:bg-gray-100 transition-colors"
                >
                  Home
                </Link>
             </div>
        </div>
      </div>

      {/* Featured Image (Optional, fitting the flow) */}
      <div className="mb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img 
            src={post.coverImage} 
            alt={post.title} 
            className="w-full h-auto rounded-lg object-cover"
        />
      </div>

      {/* Main Content with Drop Cap */}
      <div className="prose prose-lg prose-gray max-w-none 
           prose-p:font-serif prose-p:leading-loose prose-p:text-gray-800
           prose-headings:font-sans prose-headings:font-bold prose-headings:text-gray-900
           drop-cap-content">
        <MDXRemote source={post.content} components={components} />
      </div>
      
      <div className="mt-16 pt-8 border-t border-gray-200">
        <h3 className="font-bold text-base uppercase tracking-wide mb-4">Share this thought</h3>
        <div className="flex gap-4">
             <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-medium text-sm transition-colors">Twitter</button>
             <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-medium text-sm transition-colors">Facebook</button>
             <button className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded font-medium text-sm transition-colors">LinkedIn</button>
        </div>
      </div>
    </article>
  );
}
