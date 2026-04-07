import { getAllVideos } from "@/lib/videos";
import VideoCard from "@/components/VideoCard";

// 영상 데이터 실시간 반영을 위한 설정
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default function VideosPage() {
  const videos = getAllVideos();

  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Premium Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gray-200" />
                <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Visual Insights</span>
                <div className="h-[1px] w-12 bg-gray-200" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 text-gray-900 tracking-tighter">
                Meet David
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto break-keep">
                복잡한 경제 현안과 미래 기술의 맥락을 <br/>
                생생한 영상과 목소리로 직접 전해드립니다.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
            {videos.map((video) => (
                <VideoCard key={video.id} {...video} />
            ))}
        </div>
      </div>
    </div>
  );
}
