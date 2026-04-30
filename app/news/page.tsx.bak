'use client';

import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp, Newspaper } from "lucide-react";
import { useState } from "react";

export default function NewsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  const newsItems = [
    {
      date: "2026.02.09",
      media: "조선비즈",
      title: "[단독] 서울서 용인 갔던 ‘카카오T 벤티·블랙’ 인천행 호출 받는다… 택시호출 시장 독점 심화 우려도",
      coreSummary: "카카오모빌리티의 대형·고급 택시가 수도권 전역에서 통합 운영될 수 있는 실증 특례 승인을 받았으나, 시장 독점 심화 우려로 인해 승인 규모가 당초 신청보다 대폭 축소되었습니다.",
      fullSummary: "국토교통부가 카카오모빌리티의 '대형·고급형 택시 사업구역 광역권 통합 운영' 실증 특례를 최종 승인함에 따라, 카카오T 벤티와 블랙 등은 서울·경기·인천을 하나의 권역으로 묶어 자유롭게 영업할 수 있게 되었습니다. 이를 통해 공차율 감소와 배차 효율 개선이 기대되지만, 국토부는 독점 우려와 타 플랫폼과의 형평성을 고려해 신청 물량(8000대)의 8분의 1 수준인 1000대만 승인했습니다. 중소 플랫폼 업계는 대형 사업자의 시장 잠식을 우려하고 있으며, 전문가들은 향후 제도화 과정에서 불균형한 시장 구조를 반영한 보완책이 필요하다고 지적합니다.",
      quote: '"실증 특례는 아직 효과가 입증되지 않은 제도나 서비스를 제한된 범위에서 시험해보기 위한 장치로, 자원 효율성을 높이기 위한 실험 자체의 필요성은 분명하다. 특히 고급 택시는 일반 택시에 비해 이해관계 충돌이 상대적으로 적은 영역이어서 실증 대상으로 선택된 측면이 있다. 문제는 유사·동일 과제가 들어올 경우 시장 구조나 산업 환경에 대한 충분한 고려 없이 실증 특례가 반복 적용되는 구조다. 실증 이후 제도화 단계로 넘어갈 때에는 이미 기울어진 시장 구조와 경쟁 여건을 보다 입체적으로 반영할 필요가 있다."',
      link: "https://biz.chosun.com/it-science/ict/2026/02/09/2IPFVT7J2JCY7ASYE7EQ557EMY/?utm_source=naver&utm_medium=original&utm_campaign=biz"},
    {
      date: "2026.01.27",
      media: "아주경제",
      title: "'독과점' 벽에 막힌 '공룡 렌터카'…어피니티·롯데 '플랜B' 고심",
      coreSummary: "공정거래위원회가 국내 렌터카 업계 1위인 롯데렌탈과 2위 SK렌터카(어피니티 소유)의 기업결합을 독과점 우려로 불허함에 따라, 양측의 중장기 사업 전략 수정이 불가피해졌습니다.",
      fullSummary: "공정위는 어피니티에쿼티파트너스가 롯데렌탈 지분 63.5%를 취득하려던 계획에 대해 불허 결정을 내렸습니다. 양사의 합산 점유율은 약 36% 수준이지만, 공정위는 이들이 자금력, 브랜드 인지도, 전국 영업망 등에서 타 업체들을 압도하고 있어 결합 시 요금 인상이 불가피하다고 판단했습니다. 이에 롯데그룹은 추가 조건 제출 등 대응 방안을 검토하는 한편, 부동산 자산 매각을 통한 자금 조달 가능성도 열어두고 있습니다. 시장에서는 어피니티가 SK렌터카를 재매각하고 1위인 롯데렌탈 인수를 다시 추진하는 '플랜B' 시나리오도 제기되고 있습니다.",
      quote: '"어피니티는 렌터카를 안정적인 사업으로 보고 시장 점유율 확대를 통한 수익성 향상을 기대했을 것... 공정위가 (양사 결합을) 요금 인상 우려로 본 이유"',
      link: "https://www.ajunews.com/view/20260127150316010"},
    {
      date: "2026.01.21",
      media: "뉴스1",
      title: "상호관세 장고 美 대법원…기류 변화 속 韓 파장 '촉각'",
      coreSummary: "미국 연방대법원이 트럼프 행정부의 상호관세 적법성 판결을 예상보다 늦추며 장고에 들어갔습니다. 이에 따라 위헌을 기대하던 시장의 기류가 변하고 있으며, 한국 산업계는 판결 결과가 국내 수출에 미칠 영향에 집중하고 있습니다.",
      fullSummary: "미 연방대법원이 상호관세 판결을 미루면서 정치적 고려가 작용하고 있다는 분석이 나옵니다. 1·2심의 위헌 판결과 달리 대법원이 합헌 결정을 내릴 가능성도 제기되며, 이는 미국 정부의 관세 환급 부담과도 직결됩니다. 전문가들은 결과와 상관없이 트럼프 행정부가 다른 법적 수단을 동원해 관세 압박을 지속할 것으로 보고 있으며, 반도체 등 핵심 품목에 대한 현지 투자 압박은 더욱 거세질 전망입니다.",
      quote: '"상호관세는 미국이 자국우선주의를 천명한 매우 정치적 개념에 가깝다. 트럼프 대통령이 관세 정책에 대한 의지를 꺾지 않는 이상, 합헌 여부를 따지는 것은 시선 돌리기에 불과할 뿐 큰 틀은 변화가 없다."',
      link: "https://www.news1.kr/industry/company/6046174"},
    {
      date: "2026.01.20",
      media: "뉴스1",
      title: "美에 치이고 韓에 발목…'끼인 새우' K-반도체, 실기론 '엄습'",
      coreSummary: "미국 정부의 100% 관세 부과를 통한 자국 내 투자 압박과 국내의 '새만금 이전론' 등 정책적 불확실성 사이에서 한국 반도체 산업이 위기를 맞고 있다는 내용입니다.",
      fullSummary: "한국 반도체 산업이 대외적으로는 미국의 강력한 관세 정책으로 인한 투자 압박을 받고, 대내적으로는 기존 용인 반도체 클러스터 계획 대신 새만금으로 이전해야 한다는 주장이 제기되며 혼란을 겪고 있습니다. 업계에서는 기업들의 투자 체력이 이미 바닥난 상태이며 이전론의 현실성도 낮다고 지적합니다. 이로 인해 반도체 산업의 경쟁력을 확보할 수 있는 '골든타임'을 놓칠 수 있다는 우려가 깊어지고 있습니다.",
      quote: '"투자체력 바닥, 현실성도 낮아…골든타임 전전긍긍"',
      link: "https://www.news1.kr/industry/electronics/6045107"},
    {
      date: "2026.01.16",
      media: "뉴스1",
      title: "트럼프, 또 '반도체 관세' 예고…K-반도체, 추가 투자 압박 우려",
      coreSummary: "트럼프 행정부의 반도체 관세 정책과 대만의 대미 투자 확대가 한국 반도체 산업에 미칠 영향을 분석했습니다. 한국 기업들에 대한 추가 투자 압박 우려 속에서도, 글로벌 공급망 내 한국의 위상은 여전히 강력한 협상 카드가 될 수 있음을 시사합니다.",
      fullSummary: "트럼프 전 대통령의 '반도체 관세' 예고와 미국-대만 간의 무역 합의로 인해 삼성전자와 SK하이닉스 등 한국 기업들이 추가적인 대미 투자 압박을 받을 수 있다는 우려가 커지고 있습니다. 그러나 HBM 등 첨단 메모리 분야에서 한국이 가진 독보적인 위상은 미국에게도 대체 불가능한 요소입니다.",
      quote: '"반도체는 트럼프 대통령의 주요 공약 중 하나인 \'리쇼어링\'이 먹혀든 거의 유일한 분야이고, 한국은 미국의 반도체 공급망에서 매우 한정적인 축입니다. 한국이라는 공급망을 놓치고 자국 반도체 전략을 세우는 것이 사실상 불가능하기 때문에 (반도체 관세 협상이) 우리에게 예상보다 불리하지 않게 전개될 가능성이 높습니다."',
      link: "https://www.news1.kr/industry/electronics/6041689"},
    {
      date: "2025.12.24",
      media: "아주경제",
      title: "[인더스트리리포트] 수소·AI·로봇 힘주는 현대차…지역 균형발전도 앞장",
      coreSummary: "현대차그룹이 수소, AI, 로봇 등 미래 신사업 분야에 대한 대규모 투자를 통해 기술 혁신과 지역 균형 발전이라는 두 마리 토끼를 잡고 있습니다.",
      fullSummary: "현대자동차그룹이 미래 모빌리티의 핵심 축인 수소 에너지, 인공지능(AI), 로보틱스 분야에 역량을 집중하고 있습니다. 특히 이러한 대규모 투자를 국내 주요 거점을 중심으로 집행함으로써, 수도권에 집중된 산업 지형을 다변화하고 지역 경제 활성화에 기여하는 '균형 발전' 모델을 제시하고 있다는 평가입니다.",
      quote: '"기존 제조와 신규 디지털 인프라 간의 협업이 AI 전환의 핵심인 상황에서 현대차그룹의 지역 거점형 투자는 지역 균형발전과 완성차 분야 버티컬 AI의 가속화를 달성하는 전략이 될 수 있을 것"',
      link: "https://www.ajunews.com/view/20251223143625983"},
    {
      date: "2025.12.20",
      media: "산업일보",
      title: "[21세기 척화비, 규제②] 자율주행 주권, 기술 성숙도에 발맞춘 규제 개선 필요",
      coreSummary: "자율주행 산업의 경쟁력 확보를 위해 기술 성숙도에 맞춘 합리적 규제 개선과 데이터 수집의 자율성 보장이 필요하다는 지적이 제기되었습니다.",
      fullSummary: "AI 기술의 급격한 발전에도 불구하고 기존의 규제가 신산업의 성장을 가로막는 '21세기 척화비'가 되어서는 안 된다는 우려가 커지고 있습니다. 특히 자율주행 분야에서 데이터 수집의 자유를 보장하고, 혁신적인 서비스가 시장에 안착할 수 있도록 사익과 공익을 조화시키는 산업 전략이 절실한 시점입니다.",
      quote: '"자율주행 서비스의 지속가능성을 위해, 사익과 공익을 일치시키는 모빌리티 산업 전략이 필요하다"',
      link: "https://kidd.co.kr/news/244379"},
    {
      date: "2025.12.19",
      media: "바이라인네트워크",
      title: "“AI 시대, 산업별 규제 해법을 찾자”",
      coreSummary: "AI 서비스의 산업별 확산을 위해 현행 규제의 걸림돌을 분석하고 합리적인 개선 방안을 모색하는 정책 토론회가 열렸습니다.",
      fullSummary: "리걸테크, 자율주행, 드론 등 AI 기술이 접목된 신산업 분야에서 발생하는 규제 갈등을 해소하기 위해 전문가들이 머리를 맞댔습니다. 특히 자율주행 분야에서는 기술 검증 중심의 현행 제도가 실제 서비스를 운영하는 사업자의 현실을 반영하지 못하고 있다는 지적과 함께, 서비스 중심의 제도 개선이 필요하다는 의견이 제시되었습니다.",
      quote: '"현재의 법규와 제도가 차량 제조사 중심의 기술 검증과 안전 기준에 맞춰져 있어, 실제 여객·물류 서비스를 제공하는 주체인 \'서비스 사업자\'에 대한 고려가 부족하다."',
      link: "https://byline.network/2025/12/19-562/"},
    {
      date: "2025.12.19",
      media: "뉴시스",
      title: "스타트업 혁신하려면 '가이드라인'과 '면책권 보장' 필요",
      coreSummary: "AI 스타트업들의 과감한 도전을 위해 포지티브 규제에서 벗어나 '리스크 기반 관리' 체계로의 전환과 면책권 보장이 필요하다는 목소리가 커지고 있습니다.",
      fullSummary: "국회에서 열린 정책 토론회에서 전문가들은 스타트업 혁신을 가로막는 규제 장벽을 집중 조명했습니다. 특히 모든 시도를 사전에 허가받아야 하는 기존의 경직된 규제 체계를 비판하며, 유럽의 선진 사례와 같이 발생 가능한 리스크를 중심으로 유연하게 관리하고 혁신 과정에서의 실수를 포용하는 제도의 필요성을 강조했습니다.",
      quote: '"모든 것을 사전에 허가받아야 하는 포지티브 규제에서 벗어나 유럽항공안전청 사례처럼 \'리스크 기반 관리\' 체계로 전환해야 합니다."',
      link: "https://www.newsis.com/view/NISX20251219_0003448175"},
    {
      date: "2025.12.19",
      media: "뉴스웍스",
      title: '"법무부가 직무 유기 수준"···AI 규제 개선 촉구 목소리 \'봇물\'',
      coreSummary: "한국의 낮은 택시 요금 체계와 경직된 규제가 신규 모빌리티 서비스의 진입을 어렵게 만들고 있다는 분석이 제기되었습니다.",
      fullSummary: "AI 규제 개선을 위한 국회 토론회에서 리걸테크, 자율주행 등 신산업 분야의 규제 지체 현상에 대한 강도 높은 비판이 이어졌습니다. 특히 모빌리티 분야에서는 한국 특유의 저렴한 택시 요금 정책이 우버와 같은 혁신 서비스의 도입을 가로막는 경제적 장벽으로 작용하고 있으며, 안정적인 보편 서비스 제공과 신기술 도입 사이의 균형점을 찾기 위한 고민이 필요하다는 지적입니다.",
      quote: '"우리나라 택시 요금은 전 세계적으로 유례없이 낮은 수준입니다. 한국 시장은 모든 국민에 대한 안정적인 서비스와 새로운 도입에 대한 저울질이 있었던 국가입니다."',
      link: "https://www.newsworks.co.kr/news/articleView.html?idxno=823820"},
    {
      date: "2025.12.18",
      media: "뉴스티앤티",
      title: "서울시의회 교통위원회, 자율주행택시 시대 대비 '서울택시 공존 방안' 토론",
      coreSummary: "다가오는 자율주행 택시 시대를 맞아 기존 택시 산업과의 상생 및 공존 방안을 모색하는 정책 토론회가 서울시의회에서 개최되었습니다.",
      fullSummary: "서울시의회 교통위원회가 주최한 이번 토론회에서는 자율주행 기술 도입에 따른 택시 산업의 변화와 갈등 최소화 방안이 집중 논의되었습니다. 전문가들은 기존 택시 면허 체계를 활용한 로보택시 도입 모델 등 구체적인 제도화 방안을 제안하며, 기술 발전과 기존 산업 보호 사이의 균형점을 찾기 위한 다양한 의견을 제시했습니다.",
      quote: '"로보택시는 단순한 신기술의 도입을 넘어 택시 산업의 구조적 한계를 극복하는 계기가 될 수 있다."',
      link: "http://www.newstnt.com/news/articleView.html?idxno=326941"},
    {
      date: "2025.04.14",
      media: "세계일보",
      title: "자율주행 택시 국내 첫 시동... 서울 상암 일대 유상운송 시작",
      coreSummary: "서울 상암동 일대에서 자율주행 택시 유상 운송 서비스가 국내 최초로 시작되었습니다. 이는 자율주행 상용화 시대를 여는 중요한 이정표가 될 전망입니다.",
      fullSummary: "서울시는 상암 자율주행 시범운행지구에서 시민들이 앱으로 자율주행차를 호출해 이용할 수 있는 유상 운송 서비스를 본격 시작했습니다. 초기에는 정해진 노선을 운행하는 셔틀 형태지만, 점차 구역형 서비스로 확대될 계획입니다. 전문가들은 이번 서비스 시작이 기술 실증을 넘어 실제 비즈니스 모델의 가능성을 타진하는 계기가 될 것으로 보고 있습니다.",
      quote: '"기술이 생활 속 서비스로 안착하기 위해서는 이용자의 신뢰와 함께 지속 가능한 운영 수익 모델 확보가 필수적"',
      link: "https://www.segye.com/newsView/20250414510000"}
  ];

  return (
    <div className="bg-[#FBFBFA] min-h-screen pt-32 pb-24">
      <div className="container mx-auto px-4">
        {/* Premium Header */}
        <div className="max-w-4xl mx-auto text-center mb-24">
            <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-[1px] w-12 bg-gray-200" />
                <span className="text-primary font-black tracking-[0.3em] uppercase text-[10px]">Media & Coverage</span>
                <div className="h-[1px] w-12 bg-gray-200" />
            </div>
            <h1 className="text-5xl md:text-7xl font-serif font-black mb-8 text-gray-900 tracking-tighter">
                In the News
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 leading-relaxed font-light max-w-2xl mx-auto break-keep">
                언론을 통해 전해진 경제학자 김동영의 분석과 전망, <br/>
                주요 산업 이슈에 대한 전문적인 코멘터리를 모았습니다.
            </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {newsItems.map((item, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-[2rem] border border-gray-100 shadow-sm transition-all duration-500 hover:shadow-xl overflow-hidden ${expandedId === index ? 'ring-1 ring-primary/20' : ''}`}
            >
              {/* Item Header (Always Visible) */}
              <div 
                className="p-8 md:p-10 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-6"
                onClick={() => toggleExpand(index)}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="bg-gray-900 text-white text-[9px] font-black uppercase tracking-widest px-3 py-1 rounded-sm">{item.media}</span>
                    <span className="text-gray-300 text-[10px]">•</span>
                    <span className="text-gray-400 text-[10px] font-bold uppercase tracking-widest">{item.date}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-black text-gray-900 leading-tight group-hover:text-primary transition-colors tracking-tight break-keep">
                    {item.title}
                  </h3>
                </div>
                
                <div className="flex items-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-300">
                        {expandedId === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </button>
                </div>
              </div>

              {/* Core Summary (Always Visible or part of transition) */}
              <div className="px-8 md:px-10 pb-8 border-t border-gray-50 pt-8 bg-gray-50/30">
                 <p className="text-gray-600 leading-relaxed font-light break-keep">
                    {item.coreSummary}
                 </p>
              </div>

              {/* Expandable Content */}
              {expandedId === index && (
                <div className="px-8 md:px-10 pb-10 space-y-8 animate-in fade-in slide-in-from-top-4 duration-500">
                  <div className="pt-8 border-t border-gray-100">
                    <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Full Analysis</h4>
                    <p className="text-gray-700 leading-[1.8] font-light break-keep">
                        {item.fullSummary}
                    </p>
                  </div>
                  
                  {item.quote && (
                    <div className="relative p-8 bg-gray-50 rounded-[2rem] italic">
                        <div className="absolute top-6 left-6 text-primary/20 opacity-50">
                             <Newspaper size={40} />
                        </div>
                        <p className="relative z-10 text-lg font-serif text-gray-600 leading-relaxed break-keep">
                            {item.quote}
                        </p>
                    </div>
                  )}

                  <div className="flex justify-end pt-4">
                    <Link 
                      href={item.link} 
                      target="_blank" 
                      className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-900 border-b-2 border-gray-900 pb-1 hover:text-primary hover:border-primary transition-all"
                    >
                      Read Original Article <ArrowUpRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
