import { Play } from "lucide-react";
import YouTubeFacade from "@/components/YouTubeFacade";

interface VideoCardProps {
  id: string;
  title: string;
  date: string;
  description: string;
  youtubeId: string;
}

export default function VideoCard({ title, date, description, youtubeId }: VideoCardProps) {
  return (
    <div className="flex flex-col h-full bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
      <div className="aspect-video w-full bg-black relative group overflow-hidden">
        <YouTubeFacade youtubeId={youtubeId} title={title} />
      </div>
      
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex items-center gap-3 mb-4">
            <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span className="text-xs font-black tracking-widest uppercase text-primary">
                    Broadcast
                </span>
            </div>
            <span className="text-gray-200 text-xs">•</span>
            <span className="text-xs text-gray-500 font-bold uppercase tracking-widest">{date}</span>
        </div>
        
        <h3 className="text-xl md:text-2xl font-serif font-black mb-4 leading-tight text-gray-900 tracking-tight break-keep">
            {title}
        </h3>
        
        <p className="text-gray-500 text-sm font-light leading-relaxed line-clamp-3 mb-6 break-keep">
          {description}
        </p>
        
        <div className="mt-auto pt-4 flex items-center gap-2 text-gray-900 group/btn">
            <div className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center transition-all duration-300 group-hover/btn:bg-primary group-hover/btn:text-white group-hover/btn:border-primary">
                <Play size={12} fill="currentColor" />
            </div>
            <span className="text-xs font-black uppercase tracking-widest">Watch Now</span>
        </div>
      </div>
    </div>
  );
}
