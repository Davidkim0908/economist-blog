interface VideoCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  youtubeId: string;
}

export default function VideoCard({ title, date, description, youtubeId }: VideoCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <div className="aspect-video w-full bg-black relative group">
        <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-bold tracking-wider uppercase text-red-600">
                Video
            </span>
            <span className="text-gray-300 text-xs">•</span>
            <span className="text-xs text-gray-500">{date}</span>
        </div>
        
        <h3 className="text-xl font-serif font-bold mb-3 leading-tight text-gray-900">
            {title}
        </h3>
        
        <p className="text-gray-600 text-sm line-clamp-3">
          {description}
        </p>
      </div>
    </div>
  );
}
