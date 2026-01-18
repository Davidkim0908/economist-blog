export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="flex flex-col md:flex-row gap-12 items-start">
        <div className="md:w-1/3 shrink-0">
          <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-xl bg-gray-200 sticky top-24">
             {/* Profile Image */}
             {/* eslint-disable-next-line @next/next/no-img-element */}
             <img 
                src="/images/david.jpg" 
                alt="David Kim" 
                className="w-full h-full object-cover"
             />
          </div>
        </div>
        
        <div className="md:w-2/3">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-gray-900 leading-tight">
            기술이라는 &apos;엔진&apos;에,<br/>
            맥락이라는 &apos;지도&apos;를 더합니다.
          </h1>
          
          <blockquote className="text-xl text-primary font-serif italic mb-10 border-l-4 border-primary pl-6 py-2 bg-gray-50 rounded-r-lg">
            &quot;가장 혁신적인 미래는, 가장 단단한 경험 위에 세워집니다.&quot;
          </blockquote>
          
          <div className="prose prose-lg text-gray-700 space-y-8 font-sans leading-relaxed">
            <p>
              안녕하세요. <strong>미래의 길을 설계하는 경제학자, 김동영</strong>입니다.
            </p>
            <p>
              저는 조금 독특한 양극단의 지점을 연구합니다. 한쪽 발은 자율주행과 AI가 지배할 &apos;가장 빠른 미래&apos;에, 
              다른 한쪽 발은 한국 경제가 숨 가쁘게 달려온 &apos;치열한 역사&apos;에 딛고 있습니다.
            </p>
            <p>
              사람들은 저에게 묻습니다. <br/>
              <em>&quot;첨단 모빌리티 정책을 만드는 사람이 왜 지난 경제사(史)를 파고드나요?&quot;</em>
            </p>
            <p>
              자율주행차가 도로를 달리기 위해서는 정밀한 센서도 필요하지만, 무엇보다 그 기술이 우리 삶에 안착할 수 있는 
              &apos;사회적 합의&apos;와 &apos;제도적 토양&apos;이 필요하기 때문입니다.
            </p>
            
            <h3 className="text-2xl font-serif font-bold text-gray-900 mt-12 pt-8 border-t border-gray-200">
              미래는 과거의 경험 위에 세워질 때 가장 단단합니다
            </h3>
            <p>
              저는 교과서 속 이론이 아닌, 한국 경제가 숱한 위기를 돌파하며 쌓아온 <strong>성공과 실패의 데이터</strong>에서 미래를 위한 해법을 찾습니다. 
              저에게 역사는 단순히 흘러간 과거가 아니라, 불확실한 미래를 비추는 가장 확실한 &apos;빅데이터&apos;입니다.
            </p>
            <p>
              이곳에서 저는 &apos;전략 내비게이터&apos;로서 여러분과 만납니다. 화려한 기술의 속도에 가려진 경제의 맥락(Context)을 읽어내고, 
              우리 사회가 시행착오를 줄여 더 나은 선택을 할 수 있도록 돕는 <strong>이정표</strong>를 제시하고자 합니다.
            </p>

            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 mt-10">
              <h4 className="font-bold text-lg mb-4 font-serif">David&apos;s Notes 가이드</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <strong className="text-primary uppercase tracking-wide">Meet David</strong><br/>
                  경제학자로서의 이력뿐만 아니라, 방송과 강연 영상을 통해 글보다 생생한 저의 목소리와 관점을 직접 만나실 수 있습니다.
                </li>
                <li>
                  <strong className="text-primary uppercase tracking-wide">Focus</strong><br/>
                  이 블로그의 핵심입니다. 한국 경제가 달려온 성장의 궤적(<strong>GT</strong>, Growth Trajectory)을 연료 삼아, 
                  인공지능(<strong>AT</strong>, AI Transformation)과 모빌리티(<strong>MT</strong>, Mobility Transformation)라는 
                  낯선 미래로 질주하는 여정을 기록합니다.
                </li>
                <li>
                  <strong className="text-primary uppercase tracking-wide">On My Desk</strong><br/>
                  제가 매일 접하는 이코노미스트와 블룸버그, 글로벌 국책 기관의 보고서 등 세계의 흐름을 읽을 수 있는 공신력 있는 지식을 엄선해 공유합니다.
                </li>
                <li>
                  <strong className="text-primary uppercase tracking-wide">Books</strong><br/>
                  복잡한 현상 속에서 생각의 깊이를 더해준 책들을 추천합니다.
                </li>
              </ul>
            </div>

            <p className="mt-16 text-lg font-medium text-gray-900 text-center">
              속도보다 중요한 것은 방향입니다. <br/>
              이곳에 차곡차곡 쌓일 기록들이 여러분의 &apos;더 나은 선택&apos;을 돕는 든든한 가이드가 되기를 바랍니다.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
