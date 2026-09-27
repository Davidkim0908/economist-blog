import { ImageResponse } from "next/og";
import { seriesStyleByKey } from "@/lib/site";

// 연재 번호 표지의 공유 미리보기 이미지 (1200×630). 기본 폰트는 라틴 전용이라 영문만 쓴다.
export async function GET(req: Request, { params }: { params: Promise<{ order: string }> }) {
  const { order } = await params;
  const n = Number.parseInt(order, 10);
  if (!Number.isFinite(n) || n < 1 || n > 999) return new Response("Not found", { status: 404 });
  const num = String(n).padStart(2, "0");
  const st = seriesStyleByKey(new URL(req.url).searchParams.get("s") ?? "4ir");

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: st.ogBg, color: st.number, padding: "56px 64px" }}>
        <div style={{ display: "flex", fontSize: 30, color: st.label, letterSpacing: 1 }}>{st.en} · Series</div>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ display: "flex", fontSize: 240, fontWeight: 700, lineHeight: 0.85, letterSpacing: -12 }}>{num}</div>
          <div style={{ display: "flex", alignItems: "center", gap: 14, fontSize: 30, marginBottom: 18 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 44, height: 44, border: `2px solid ${st.number}`, fontSize: 24, fontWeight: 700 }}>
              <span style={{ display: "flex" }}>D</span>
              <span style={{ display: "flex", width: 6, height: 6, background: "#B91C1C", marginLeft: 2, marginTop: 14 }} />
            </div>
            David&apos;s Notes
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
