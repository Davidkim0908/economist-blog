// 연재 전용 타이포 표지: 먹색 바탕 + 연재명 + 큰 회차 번호.
// 사진 대신 쓰며, 컨테이너 폭(cqw)에 맞춰 목록 카드부터 글 페이지 상단까지 같은 비례로 커진다.
export default function SeriesCover({ series, order, className = "" }: { series: string; order: number; className?: string }) {
  const num = String(order).padStart(2, "0");
  return (
    <div
      role="img"
      aria-label={`${series} ${order}회`}
      className={`@container absolute inset-0 bg-[#16161A] text-[#F4F5F4] overflow-hidden ${className}`}
    >
      <span className="absolute left-[6cqw] top-[5.5cqw] text-[#9CA3AF] font-medium" style={{ fontSize: "max(12px, 4cqw)" }}>
        {series}
      </span>
      <span
        className="absolute left-[5cqw] bottom-[3cqw] font-semibold leading-none"
        style={{ fontFamily: "var(--font-latin-serif), Georgia, serif", fontSize: "min(34cqw, 15rem)", letterSpacing: "-0.035em" }}
        aria-hidden="true"
      >
        {num}
      </span>
    </div>
  );
}
