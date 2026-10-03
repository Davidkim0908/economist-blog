import Image from "next/image";
import { Download, ExternalLink } from "lucide-react";

// 서평 글 안의 강의 자료 카드: 표지 미리보기 + 보기(새 탭) / 내려받기(파일명 지정) 버튼
interface LectureDownloadProps {
  href: string;          // public 아래 PDF 경로
  cover: string;         // 표지 이미지 경로 (16:9)
  title: string;
  fileName: string;      // 내려받을 때 저장되는 파일 이름 — 출처가 남도록 저자명을 넣는다
  pages: string;         // MDX에서 {숫자} 표현식이 막혀 있어 문자열로 받는다
  size: string;          // 예: "1.6MB"
}

export default function LectureDownload({ href, cover, title, fileName, pages, size }: LectureDownloadProps) {
  return (
    <figure className="not-prose my-12 bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm">
      <a href={href} target="_blank" rel="noopener noreferrer" className="block relative aspect-video bg-gray-100" aria-label={`${title} PDF 새 탭에서 보기`}>
        <Image src={cover} alt={`${title} 표지`} fill sizes="(min-width: 768px) 720px, 100vw" className="object-cover" />
      </a>
      <figcaption className="p-6 md:p-8">
        <p className="text-xs font-black tracking-widest uppercase text-gray-500 mb-3">Lecture Notes · PDF</p>
        <p className="text-xl md:text-2xl font-display font-black text-gray-900 tracking-tight break-keep">{title}</p>
        <p className="text-sm text-gray-500 mt-2">{pages}쪽 · {size} · CC BY-NC 4.0</p>
        <div className="flex flex-wrap gap-3 mt-6">
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 min-h-11 px-5 rounded-full border border-gray-300 text-gray-800 font-semibold hover:border-gray-900 transition-colors">
            <ExternalLink size={16} aria-hidden="true" /> 보기
          </a>
          <a href={href} download={fileName} className="inline-flex items-center gap-2 min-h-11 px-5 rounded-full bg-gray-900 text-white font-semibold hover:bg-black transition-colors">
            <Download size={16} aria-hidden="true" /> 내려받기
          </a>
        </div>
      </figcaption>
    </figure>
  );
}
