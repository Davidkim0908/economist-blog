// 텍스트 도우미: 문장 나누기, 날짜 표기
function sentences(text: string): string[] {
  const clean = text.replace(/\s+/g, " ").trim();
  return clean.match(/[^.?!]+[.?!]+["”']?/g)?.map((t) => t.trim()) ?? [clean];
}

function firstSentence(text: string): string {
  return sentences(text)[0];
}

export { firstSentence };

// "2026-04-16" → "2026. 4. 16."
export function formatDate(date: string): string {
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return `${d.getFullYear()}. ${d.getMonth() + 1}. ${d.getDate()}.`;
}

