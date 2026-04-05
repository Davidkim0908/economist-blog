import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Premium Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gray-200" />
                <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">The Author</span>
                <div className="h-[1px] w-12 bg-gray-200" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 text-gray-900 tracking-tighter">
                Meet David
            </h1>
        </div>

        <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-start max-w-6xl mx-auto">
          {/* Left: Sticky Image Card */}
          <div className="md:w-2/5 shrink-0 sticky top-32">
            <div className="aspect-[3/4] rounded-[3rem] overflow-hidden shadow-2xl bg-gray-200 group relative">
               {/* eslint-disable-next-line @next/next/no-img-element */}
               <img 
                  src="/reading-book-clean.jpg" 
                  alt="David Kim" 
                  className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-110"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
               <div className="absolute bottom-8 left-8">
                  <span className="text-white text-[10px] font-black uppercase tracking-[0.3em] bg-primary px-4 py-2 rounded-full">Scholar & Strategist</span>
               </div>
            </div>
          </div>
          
          {/* Right: Content */}
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-5xl font-serif font-black mb-10 text-gray-900 leading-[1.1] tracking-tight break-keep">
              기술이라는 &apos;엔진&apos;에,<br/>
              맥락이라는 &apos;지도&apos;를 더합니다.
            </h2>
            
            <div className="relative mb-16">
              <div className="absolute -left-8 top-0 bottom-0 w-1 bg-primary rounded-full"></div>
              <blockquote className="text-2xl text-primary font-serif italic pl-4 leading-relaxed tracking-tight">
                &quot;가장 혁신적인 미래는, 가장 단단한 경험 위에 세워집니다.&quot;
              </blockquote>
            </div>
            
            <div className="prose prose-lg text-gray-700 space-y-10 font-sans leading-relaxed">
              <p className="text-xl md:text-2xl font-light text-gray-600 leading-relaxed break-keep">
                안녕하세요. <strong>미래의 길을 설계하는 경제학자, 김동영</strong>입니다.
              </p>
              
              <div className="space-y-6">
                <p className="break-keep">
                  저는 조금 독특한 양극단의 지점을 연구합니다. 한쪽 발은 자율주행과 AI가 지배할 &apos;가장 빠른 미래&apos;에, 
                  다른 한쪽 발은 한국 경제가 숨 가쁘게 달려온 &apos;치열한 역사&apos;에 딛고 있습니다.
                </p>
                <p className="break-keep">
                  사람들은 저에게 묻습니다. <br/>
                  <em className="font-serif text-gray-400">&quot;첨단 모빌리티 정책을 만드는 사람이 왜 지난 경제사(史)를 파고드나요?&quot;</em>
                </p>
                <p className="break-keep">
                  자율주행차가 도로를 달리기 위해서는 정밀한 센서도 필요하지만, 무엇보다 그 기술이 우리 삶에 안착할 수 있는 
                  &apos;사회적 합의&apos;와 &apos;제도적 토양&apos;이 필요하기 때문입니다.
                </p>
              </div>
              
              <div className="pt-12 border-t border-gray-100">
                <h3 className="text-2xl font-serif font-black text-gray-900 mb-6 tracking-tight">
                  미래는 과거의 경험 위에 세워질 때 가장 단단합니다
                </h3>
                <p className="break-keep">
                  저는 교과서 속 이론이 아닌, 한국 경제가 숱한 위기를 돌파하며 쌓아온 <strong>성공과 실패의 데이터</strong>에서 미래를 위한 해법을 찾습니다. 
                  저에게 역사는 단순히 흘러간 과거가 아니라, 불확실한 미래를 비추는 가장 확실한 &apos;빅데이터&apos;입니다.
                </p>
                <p className="break-keep">
                  이곳에서 저는 &apos;전략 내비게이터&apos;로서 여러분과 만납니다. 화려한 기술의 속도에 가려진 경제의 맥락(Context)을 읽어내고, 
                  우리 사회가 시행착오를 줄여 더 나은 선택을 할 수 있도록 돕는 <strong>이정표</strong>를 제시하고자 합니다.
                </p>
              </div>

              {/* Navigation Guide Card */}
              <div className="bg-white p-10 md:p-12 rounded-[3rem] border border-gray-100 shadow-xl shadow-gray-200/50 mt-16">
                <h4 className="font-serif font-black text-2xl mb-8 text-gray-900 tracking-tight">David&apos;s Notes 가이드</h4>
                <div className="grid gap-8">
                  <div className="group">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Meet David</span>
                    <p className="text-sm text-gray-500 leading-relaxed break-keep group-hover:text-gray-900 transition-colors">경제학자로서의 이력뿐만 아니라, 방송과 강연 영상을 통해 글보다 생생한 저의 목소리와 관점을 직접 만나실 수 있습니다.</p>
                  </div>
                  <div className="group">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">Focus</span>
                    <p className="text-sm text-gray-500 leading-relaxed break-keep group-hover:text-gray-900 transition-colors">한국 경제가 달려온 성장의 궤적(<strong>GT</strong>)을 연료 삼아, 인공지능(<strong>AT</strong>)과 모빌리티(<strong>MT</strong>)라는 낯선 미래로 질주하는 여정을 기록합니다.</p>
                  </div>
                  <div className="group">
                    <span className="text-primary text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">On My Desk</span>
                    <p className="text-sm text-gray-500 leading-relaxed break-keep group-hover:text-gray-900 transition-colors">이코노미스트와 블룸버그 등 세계의 흐름을 읽을 수 있는 공신력 있는 지식을 엄선해 공유합니다.</p>
                  </div>
                </div>
              </div>

              <div className="pt-20 text-center">
                <p className="text-2xl font-serif font-black text-gray-900 mb-4 tracking-tight leading-snug break-keep">
                  속도보다 중요한 것은 방향입니다. 
                </p>
                <p className="text-gray-500 text-lg font-light break-keep">
                  이곳에 차곡차곡 쌓일 기록들이 여러분의 &apos;더 나은 선택&apos;을 돕는 든든한 가이드가 되기를 바랍니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
