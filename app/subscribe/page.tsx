import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SHOW_NEWSLETTER } from "@/lib/site";
import SubscribeForm from "./SubscribeForm";

export const metadata: Metadata = {
  title: "구독하기 | David's Notes",
  description: "새 칼럼과 연재, 골라 읽은 해외 기사와 책 이야기를 메일로 받아 보세요.",
  robots: { index: false, follow: false },
};

// 구독: 왼쪽 필자 사진, 오른쪽 입력. 상단 메뉴·푸터 없이 한 가지 일에 집중한다 (Gates Notes 가입 화면 구성 참고).
// 발송 서비스를 연결하고 SHOW_NEWSLETTER를 켜기 전까지는 운영 사이트에서 열리지 않는다.
export default function SubscribePage() {
  if (!SHOW_NEWSLETTER && process.env.NODE_ENV === "production") notFound();

  return (
    <div className="w-screen ml-[calc(50%-50vw)] grid grid-cols-1 lg:grid-cols-2 min-h-screen bg-white text-gray-900">
      <div className="relative overflow-hidden h-[260px] sm:h-[360px] lg:h-auto lg:min-h-screen bg-[#23302b]">
        <Image
          src="/images/david-subscribe.jpg"
          alt="자료를 손에 들고 웃고 있는 김동영 박사"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
          style={{ objectPosition: "50% 22%" }}
        />
      </div>

      <div className="flex flex-col px-6 sm:px-10 pt-8 pb-16 lg:pt-12">
        <Link href="/" aria-label="David's Notes 홈으로" className="self-center inline-flex items-center gap-3 min-h-11">
          <span className="w-10 h-10 border-2 border-gray-900 flex items-center justify-center">
            <span className="flex items-baseline">
              <span className="font-serif font-black text-xl leading-none">D</span>
              <span className="text-primary font-black text-lg leading-none">.</span>
            </span>
          </span>
          <span className="font-serif font-black text-lg tracking-tight uppercase leading-none">David&apos;s Notes</span>
        </Link>

        <div className="w-full max-w-[30rem] mx-auto mt-[clamp(2.5rem,10vh,7rem)]">
          <p className="type-label-en text-gray-500 mb-4">Newsletter</p>
          <h1 className="type-display-ko text-[2rem] md:text-[2.375rem] mb-5">구독하기</h1>
          <p className="text-[1.0625rem] leading-relaxed text-gray-600 mb-10">
            새 칼럼과 연재, 제가 골라 읽은 해외 기사와 책 이야기를 메일로 보내드립니다. AI와 모빌리티가 바꾸는 경제, 그리고 그 변화를 읽는 맥락을 함께 나눕니다.
          </p>
          <SubscribeForm />
        </div>
      </div>
    </div>
  );
}
