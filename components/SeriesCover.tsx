import { seriesStyle } from "@/lib/site";

// 연재 전용 타이포 표지: 연재별 반투명 바탕(아래 종이가 비침) + 연재명 + 큰 회차 번호.
// 사진 대신 쓰며, 컨테이너 폭(cqw)에 맞춰 목록 카드부터 글 페이지 상단까지 같은 비례로 커진다.
export default function SeriesCover({ series, order, summary, className = "" }: { series: string; order: number; summary?: string; className?: string }) {
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
      {summary && (
        // 목록 카드에서만: 연재명 아래에 요약문, 큰 번호와 겹치지 않도록 3줄까지
        <p
          className="absolute left-[6cqw] right-[6cqw] top-[13cqw] line-clamp-3 leading-[1.55]"
          style={{ fontSize: "max(12.5px, 3.9cqw)", color: style.number }}
        >
          {summary}
        </p>
      )}
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
