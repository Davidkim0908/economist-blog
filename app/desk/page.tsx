import { getPostsByCategory } from "@/lib/posts";
import PostCard from "@/components/PostCard";
import { Mic2 } from "lucide-react";

export default function DeskPage() {
  const posts = getPostsByCategory('desk');

  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
            {/* Premium Header */}
            <div className="max-w-4xl mx-auto text-center mb-24">
                <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="h-[1px] w-12 bg-gray-200" />
                    <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">On My Desk</span>
                    <div className="h-[1px] w-12 bg-gray-200" />
                </div>
                <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 text-gray-900 tracking-tighter">
                    Workspace
                </h1>
                <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto break-keep">
                    매일 아침 책상 위에 놓이는 글로벌 리포트와 뉴스레터, <br/>
                    그 속에 숨겨진 날 선 통찰을 기록하고 공유합니다.
                </p>
            </div>

            {posts.length > 0 ? (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {posts.map((post) => (
                    <PostCard key={post.slug} post={post} />
                ))}
                </div>
            ) : (
                <div className="text-center py-40 bg-white rounded-[3rem] border border-dashed border-gray-200">
                    <Mic2 size={48} className="mx-auto text-gray-200 mb-6" />
                    <p className="text-gray-400 font-serif italic text-xl tracking-tight">The desk is currently clear. <br/>Check back for new research soon.</p>
                </div>
            )}
        </div>
    </div>
  );
}
