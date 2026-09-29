'use server';

import { isNewsletterConfigured, normalizeEmail, pickTopics } from "@/lib/newsletter";

export type SubscribeState =
  | { status: "idle" }
  | { status: "error"; field: "email" | "consent" | "server"; message: string }
  | { status: "done"; preview: boolean };

export async function subscribe(_prev: SubscribeState, formData: FormData): Promise<SubscribeState> {
  // 사람에게는 보이지 않는 입력칸 — 값이 있으면 봇. 사람과 같은 결과 화면을 보여 주고 저장하지 않는다.
  if (String(formData.get("website") ?? "").trim() !== "") return { status: "done", preview: false };

  const email = normalizeEmail(String(formData.get("email") ?? ""));
  if (!email) return { status: "error", field: "email", message: "이메일 주소를 확인해 주세요." };
  if (formData.get("consent") !== "on") {
    return { status: "error", field: "consent", message: "개인정보 수집·이용에 동의해 주셔야 구독할 수 있습니다." };
  }
  const topics = pickTopics(formData.getAll("topics").map(String));

  if (!isNewsletterConfigured()) {
    // 발송 서비스 연결 전: 개발 화면에서는 흐름만 미리 보여 주고 아무것도 저장하지 않는다
    if (process.env.NODE_ENV !== "production") return { status: "done", preview: true };
    return { status: "error", field: "server", message: "구독 신청을 받을 준비 중입니다. 잠시 후 다시 시도해 주세요." };
  }

  // TODO(발송 서비스 연결): email·topics를 서비스 API로 전달하고, 확인 메일(더블 옵트인)을 보내게 한다.
  void email;
  void topics;
  return { status: "error", field: "server", message: "구독 신청을 받을 준비 중입니다. 잠시 후 다시 시도해 주세요." };
}
