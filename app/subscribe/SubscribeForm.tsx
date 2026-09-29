'use client';

import { useActionState, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { NEWSLETTER_TOPICS } from "@/lib/newsletter";
import { subscribe, type SubscribeState } from "./actions";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const inputClass =
  "w-full bg-transparent border-0 border-b border-gray-900 rounded-none py-2.5 text-lg text-gray-900 placeholder:text-gray-400 outline-none focus-visible:border-b-2";
const buttonClass =
  "w-full min-h-14 rounded bg-[#26282c] text-white text-[1.0625rem] font-semibold hover:bg-black transition-colors disabled:opacity-60";

// 두 단계: ① 이메일 → ② 관심 분야·개인정보 동의. 이메일은 주소창에 남기지 않고 화면 상태로만 넘긴다.
export default function SubscribeForm() {
  const [state, formAction, pending] = useActionState<SubscribeState, FormData>(subscribe, { status: "idle" });
  const [step, setStep] = useState<1 | 2>(1);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const stepHeading = useRef<HTMLLegendElement>(null);

  // 서버가 이메일 오류를 돌려주면 첫 단계로 돌아가고, 사용자가 다시 '다음'을 누르면 그 오류는 확인한 것으로 본다
  const [seenError, setSeenError] = useState<SubscribeState | null>(null);
  const serverError = state.status === "error" && state !== seenError ? state : null;
  const shownStep = serverError?.field === "email" ? 1 : step;

  useEffect(() => {
    if (step === 2) stepHeading.current?.focus();
  }, [step]);

  if (state.status === "done") {
    return (
      <div role="status" className="space-y-5">
        <h2 className="type-title-ko text-[1.375rem]">구독 신청이 접수되었습니다</h2>
        <p className="text-[1.0625rem] leading-relaxed text-gray-600">
          보내드린 확인 메일의 링크를 누르시면 구독이 완료됩니다. 메일이 보이지 않으면 스팸함도 확인해 주세요.
        </p>
        {state.preview && (
          <p className="text-sm text-gray-500 border border-dashed border-gray-300 px-3 py-2">
            미리보기 화면입니다. 발송 서비스를 연결하기 전이라 신청 내용은 저장되지 않았습니다.
          </p>
        )}
        <Link href="/" className="inline-block text-gray-900 underline underline-offset-4 decoration-1 hover:decoration-2">
          홈으로 돌아가기
        </Link>
      </div>
    );
  }

  function goNext() {
    if (!EMAIL_RE.test(email.trim())) {
      setEmailError("이메일 주소를 확인해 주세요.");
      return;
    }
    setEmailError("");
    setSeenError(state);
    setStep(2);
  }

  const emailMessage = emailError || (serverError?.field === "email" ? serverError.message : "");

  return (
    <form action={formAction} noValidate>
      {/* 사람에게는 보이지 않는 칸 — 봇 방지 */}
      <div aria-hidden="true" className="absolute -left-[10000px] w-px h-px overflow-hidden">
        <label htmlFor="website">웹사이트</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>
      <input type="hidden" name="email" value={email.trim()} />

      {shownStep === 1 ? (
        <div>
          <label htmlFor="email-input" className="block text-[0.8125rem] text-gray-500 mb-1">
            이메일
          </label>
          <input
            id="email-input"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="이메일 주소"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                goNext();
              }
            }}
            aria-invalid={Boolean(emailMessage)}
            aria-describedby={emailMessage ? "email-error" : undefined}
            className={inputClass}
          />
          <p id="email-error" role="alert" className="min-h-6 mt-2 text-sm text-primary">
            {emailMessage}
          </p>
          <button type="button" onClick={goNext} className={`${buttonClass} mt-8`}>
            다음
          </button>
        </div>
      ) : (
        <div>
          <p className="text-[0.8125rem] text-gray-500 mb-1">이메일</p>
          <p className="flex items-baseline justify-between gap-4 border-b border-gray-200 pb-2.5 mb-8">
            <span className="text-lg break-all">{email.trim()}</span>
            <button type="button" onClick={() => setStep(1)} className="shrink-0 text-sm text-gray-600 underline underline-offset-4 hover:text-gray-900">
              변경
            </button>
          </p>

          <fieldset>
            <legend ref={stepHeading} tabIndex={-1} className="type-title-ko text-[1.0625rem] mb-1 outline-none">
              관심 분야
            </legend>
            <p className="text-sm text-gray-500 mb-4">고르지 않으시면 모든 새 글 소식을 보내드립니다.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
              {NEWSLETTER_TOPICS.map((t) => (
                <label key={t.key} className="flex items-center gap-3 min-h-11 cursor-pointer">
                  <input type="checkbox" name="topics" value={t.key} className="w-5 h-5 accent-gray-900" />
                  <span className="type-title-en text-[1rem] font-medium">{t.label}</span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 border-t border-gray-200 pt-6">
            <label className="flex items-start gap-3 cursor-pointer">
              <input type="checkbox" name="consent" className="w-5 h-5 mt-0.5 accent-gray-900" aria-describedby="consent-detail" />
              <span className="text-[0.9375rem] text-gray-900">[필수] 개인정보 수집·이용에 동의합니다.</span>
            </label>
            <p id="consent-detail" className="mt-2 ml-8 text-sm leading-relaxed text-gray-500">
              수집 항목: 이메일 주소, 관심 분야 · 이용 목적: 뉴스레터 발송 · 보유 기간: 구독 해지 시까지. 동의하지 않으시면 구독할 수 없습니다. 자세한 내용은{" "}
              <Link href="/legal/privacy" className="underline underline-offset-2 hover:text-gray-900">
                개인정보처리방침
              </Link>
              을 확인해 주세요.
            </p>
          </div>

          <p role="alert" className="min-h-6 mt-4 text-sm text-primary">
            {serverError && serverError.field !== "email" ? serverError.message : ""}
          </p>
          <button type="submit" disabled={pending} className={`${buttonClass} mt-4`}>
            {pending ? "신청하는 중…" : "구독 신청"}
          </button>
        </div>
      )}
    </form>
  );
}
