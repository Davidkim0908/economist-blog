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
  },
  {
    id: "kbs-chang-ev",
    title: "내가 이미 중국차를 타봤다고?…‘진격의 중국 전기차’ [창+]",
    date: "2024-07-07",
    description: "KBS [창]. 알게 모르게 우리 일상에 스며든 중국산 전기차. BYD와 샤오미 등 중국 기업들의 무서운 성장세와 글로벌 전기차 패권 경쟁을 심층 취재했습니다.",
    youtubeId: "gfzfDqZh3p4"
  }
];

export function getAllVideos(): Video[] {
  return videos.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}
