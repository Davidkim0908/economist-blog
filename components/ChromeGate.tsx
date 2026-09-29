'use client';

import { usePathname } from "next/navigation";

// 한 가지 일에 집중하는 화면(구독 등)에서는 상단 메뉴·푸터를 숨긴다
const FOCUS_ROUTES = ["/subscribe"];

export default function ChromeGate({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  if (FOCUS_ROUTES.some((r) => pathname === r || pathname.startsWith(`${r}/`))) return null;
  return <>{children}</>;
}
