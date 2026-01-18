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
    id: "tesla-optimus-mijangwon",
    title: "[테슬라] 춤추는 테슬라 옵티머스, 핵심은 '발가락' (EP.2) | 강정수 | 김동영 | 미장원",
    date: "2024-10-21",
    description: "휴머노이드 로봇 옵티머스의 진화와 테슬라의 AI 로보틱스 비전에 대한 심층 토론. '미장원' 출연분.",
    youtubeId: "jrF3F5UrLYk"
  },
  {
    id: "tesla-optimus-mijangwon-ep1",
    title: "[테슬라] 춤추는 테슬라 옵티머스, 핵심은 '발가락' (EP.1) | 강정수 | 김동영 | 미장원",
    date: "2024-10-21",
    description: "테슬라 로봇 옵티머스의 기술적 진보와 휴머노이드 로봇 시장의 미래에 대한 토론 1부.",
    youtubeId: "kT1W8470dQQ"
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
