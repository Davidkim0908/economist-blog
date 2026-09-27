import { seriesStyle } from "@/lib/site";

// 연재 전용 타이포 표지: 연재별 반투명 바탕(아래 종이가 비침) + 연재명 + 큰 회차 번호.
// 사진 대신 쓰며, 컨테이너 폭(cqw)에 맞춰 목록 카드부터 글 페이지 상단까지 같은 비례로 커진다.
export default function SeriesCover({ series, order, className = "" }: { series: string; order: number; className?: string }) {
  const num = String(order).padStart(2, "0");
  const style = seriesStyle(series);
  return (
    <div
      role="img"
      aria-label={`${series} ${order}회`}
      className={`@container absolute inset-0 ring-1 ring-inset ring-white/40 overflow-hidden ${className}`}
      style={{ background: style.bg, color: style.number }}
    >
      <span className="absolute left-[6cqw] top-[5.5cqw] font-medium" style={{ fontSize: "max(12px, 4cqw)", color: style.label }}>
        {series}
      </span>
      <span
        className="absolute left-[5cqw] bottom-[3cqw] font-semibold leading-none"
        style={{ fontFamily: "var(--font-latin-serif), Georgia, serif", fontSize: "min(27.2cqw, 12rem)", letterSpacing: "-0.035em" }}
        aria-hidden="true"
      >
        {num}
      </span>
    </div>
  );
}
