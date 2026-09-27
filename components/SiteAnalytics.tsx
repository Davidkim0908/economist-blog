'use client';

import { Analytics } from "@vercel/analytics/next";

// 방문자 집계 (Vercel Web Analytics, 쿠키 없음). 관리자 페이지 방문은 집계에서 뺀다.
export default function SiteAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => (new URL(event.url).pathname.startsWith("/admin") ? null : event)}
    />
  );
}
