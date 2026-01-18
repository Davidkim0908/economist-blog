import { getAllVideos } from "@/lib/videos";
import VideoCard from "@/components/VideoCard";

export default function VideosPage() {
  const videos = getAllVideos();

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16 max-w-2xl mx-auto">
            <span className="text-primary font-bold tracking-wider uppercase text-sm mb-4 block">Watch</span>
            <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-gray-900">
            Meet David
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
                Interviews, seminars, and discussions on the future of our economy.
            </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video) => (
                <VideoCard key={video.id} {...video} />
            ))}
        </div>
      </div>
    </div>
  );
}
