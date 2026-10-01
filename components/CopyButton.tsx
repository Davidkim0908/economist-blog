'use client';

import { useState } from "react";

// 약력처럼 담당자가 그대로 가져다 쓸 글을 복사한다. 복사가 막힌 환경에서는 글을 선택해 둔다.
export default function CopyButton({ text, targetId, label = "복사" }: { text: string; targetId?: string; label?: string }) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 2000);
    } catch {
      const el = targetId ? document.getElementById(targetId) : null;
      if (el) {
        const range = document.createRange();
        range.selectNodeContents(el);
        const sel = window.getSelection();
        sel?.removeAllRanges();
        sel?.addRange(range);
      }
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="shrink-0 inline-flex items-center min-h-9 px-3 rounded-full border border-gray-300 text-sm text-gray-700 hover:border-gray-900 hover:text-gray-900 transition-colors"
      aria-live="polite"
    >
      {done ? "복사했습니다" : label}
    </button>
  );
}
