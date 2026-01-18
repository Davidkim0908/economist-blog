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
    id: "kb-radio-platform",
    title: "[성기영의 경제쇼] 의사와 플랫폼, 그리고 알고리즘",
    date: "2024-03-15",
    description: "디지털 시대, 플랫폼 경제가 전문직 시장(의료 등)에 미치는 영향과 알고리즘의 공정성에 대한 심도 있는 논의.",
    youtubeId: "placeholder_id_1" // User to replace
  },
  {
    id: "maeil-goodmorning",
    title: "[Talk&theCity] 굿모닝 월가월부: 디지털 자산과 미래 금융",
    date: "2024-02-10",
    description: "매일경제TV 출연. 월가와 한국 금융 시장의 디지털 자산 트렌드 분석.",
    youtubeId: "placeholder_id_2" // User to replace
  },
  {
    id: "kdi-seminar-mobility",
    title: "디지털 전환에 따른 모빌리티 산업의 현황과 미래전략",
    date: "2023-11-20",
    description: "KDI 정책 세미나. 자율주행과 MaaS(Mobility as a Service)가 가져올 산업 지형의 변화.",
    youtubeId: "placeholder_id_3" // User to replace
  }
];

export function getAllVideos(): Video[] {
  return videos.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}
