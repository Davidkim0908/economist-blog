export type Video = {
  id: string;
  title: string;
  date: string;
  description: string;
  youtubeId: string;
};

export const videos: Video[] = [
  {
    id: "kb-radio-260114",
    title: "[성기영의 경제쇼] 4700p 뚫은 코스피와 환율 전망 (26.01.14)",
    date: "2026-01-14",
    description: "KBS 1라디오 경제쇼 출연분. 급변하는 증시와 환율 시장에 대한 심층 분석.",
    youtubeId: "19nfIagMu48"
  }
];

export function getAllVideos(): Video[] {
  return videos.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}
