'use client';

import Link from "next/link";
import { ArrowUpRight, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export default function NewsPage() {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  const newsItems = [
    {
      date: "2026.01.16",
      media: "뉴스1",
      title: "트럼프, 또 '반도체 관세' 예고…K-반도체, 추가 투자 압박 우려",
      coreSummary: "트럼프 행정부의 반도체 관세 정책과 대만의 대미 투자 확대가 한국 반도체 산업에 미칠 영향을 분석했습니다. 한국 기업들에 대한 추가 투자 압박 우려 속에서도, 글로벌 공급망 내 한국의 위상은 여전히 강력한 협상 카드가 될 수 있음을 시사합니다.",
      fullSummary: "트럼프 전 대통령의 '반도체 관세' 예고와 미국-대만 간의 무역 합의로 인해 삼성전자와 SK하이닉스 등 한국 기업들이 추가적인 대미 투자 압박을 받을 수 있다는 우려가 커지고 있습니다. 그러나 HBM 등 첨단 메모리 분야에서 한국이 가진 독보적인 위상은 미국에게도 대체 불가능한 요소입니다.",
      quote: "\"반도체는 트럼프 대통령의 주요 공약 중 하나인 '리쇼어링'이 먹혀든 거의 유일한 분야이고, 한국은 미국의 반도체 공급망에서 매우 한정적인 축입니다. 한국이라는 공급망을 놓치고 자국 반도체 전략을 세우는 것이 사실상 불가능하기 때문에 (반도체 관세 협상이) 우리에게 예상보다 불리하지 않게 전개될 가능성이 높습니다.\"",
      link: "https://www.news1.kr/industry/electronics/6041689"
    },
    {
      date: "2025.12.24",
      media: "아주경제",
      title: "[인더스트리리포트] 수소·AI·로봇 힘주는 현대차…지역 균형발전도 앞장",
      coreSummary: "현대차그룹이 수소, AI, 로봇 등 미래 신사업 분야에 대한 대규모 투자를 통해 기술 혁신과 지역 균형 발전이라는 두 마리 토끼를 잡고 있습니다.",
      fullSummary: "현대자동차그룹이 미래 모빌리티의 핵심 축인 수소 에너지, 인공지능(AI), 로보틱스 분야에 역량을 집중하고 있습니다. 특히 이러한 대규모 투자를 국내 주요 거점을 중심으로 집행함으로써, 수도권에 집중된 산업 지형을 다변화하고 지역 경제 활성화에 기여하는 '균형 발전' 모델을 제시하고 있다는 평가입니다.",
      quote: "\"기존 제조와 신규 디지털 인프라 간의 협업이 AI 전환의 핵심인 상황에서 현대차그룹의 지역 거점형 투자는 지역 균형발전과 완성차 분야 버티컬 AI의 가속화를 달성하는 전략이 될 수 있을 것\"",
      link: "https://www.ajunews.com/view/20251223143625983"
    },
    {
      date: "2025.12.20",
      media: "산업일보",
      title: "[21세기 척화비, 규제②] 자율주행 주권, 기술 성숙도에 발맞춘 규제 개선 필요",
      coreSummary: "자율주행 산업의 경쟁력 확보를 위해 기술 성숙도에 맞춘 합리적 규제 개선과 데이터 수집의 자율성 보장이 필요하다는 지적이 제기되었습니다.",
      fullSummary: "AI 기술의 급격한 발전에도 불구하고 기존의 규제가 신산업의 성장을 가로막는 '21세기 척화비'가 되어서는 안 된다는 우려가 커지고 있습니다. 특히 자율주행 분야에서 데이터 수집의 자유를 보장하고, 혁신적인 서비스가 시장에 안착할 수 있도록 사익과 공익을 조화시키는 산업 전략이 절실한 시점입니다.",
      quote: "\"자율주행 서비스의 지속가능성을 위해, 사익과 공익을 일치시키는 모빌리티 산업 전략이 필요하다\"",
      link: "https://kidd.co.kr/news/244379"
    },
    {
      date: "2025.12.18",
      media: "뉴스티앤티",
      title: "서울시의회 교통위원회, 자율주행택시 시대 대비 '서울택시 공존 방안' 토론",
      coreSummary: "다가오는 자율주행 택시 시대를 맞아 기존 택시 산업과의 상생 및 공존 방안을 모색하는 정책 토론회가 서울시의회에서 개최되었습니다.",
      fullSummary: "서울시의회 교통위원회가 주최한 이번 토론회에서는 자율주행 기술 도입에 따른 택시 산업의 변화와 갈등 최소화 방안이 집중 논의되었습니다. 전문가들은 기존 택시 면허 체계를 활용한 로보택시 도입 모델 등 구체적인 제도화 방안을 제안하며, 기술 발전과 기존 산업 보호 사이의 균형점을 찾기 위한 다양한 의견을 제시했습니다.",
      quote: "\"기존 택시 면허 체계 기반의 자율주행 서비스 모델과 함께, 공익과 산업 발전을 아우르는 자율주행 생태계 조성이 중요하다\"",
      link: "https://www.newstnt.com/news/articleView.html?idxno=568268"
    },
    {
      date: "2025.12.08",
      media: "아주경제",
      title: "'BMW·벤츠' 양강 넘보는 테슬라… 국산 브랜드도 위협",
      coreSummary: "테슬라가 저렴한 모델Y를 앞세워 국내 수입차 시장에서 BMW와 벤츠를 맹추격하며 전기차 시장의 주도권을 강화하고 있습니다.",
      fullSummary: "테슬라의 국내 판매량이 전년 대비 95% 이상 급증하며 수입차 시장의 판도를 흔들고 있습니다. 특히 가격 경쟁력을 갖춘 모델Y의 인기가 기아와 현대차 등 국산 브랜드의 전기차 점유율까지 위협하는 상황입니다. 충전 인프라의 확충과 자율주행 기술(FSD)에 대한 기대감이 이러한 성장의 주요 동력으로 분석됩니다.",
      quote: "\"과거와 다르게 충전 인프라가 발전하면서 테슬라가 전기차 수요를 견인하고 있다. 자율주행(FSD)에 대한 소비자 기대감이 커진 것도 주효했다.\"",
      link: "https://www.ajunews.com/view/20251208142737010"
    },
    {
      date: "2025.11.18",
      media: "아주경제",
      title: "대중화 흐름 탄 유럽 EV… 韓·美·中·獨 주도권 전쟁 본격",
      coreSummary: "유럽 전기차 시장의 본격적인 대중화를 앞두고 한국, 미국, 중국, 독일 등 글로벌 완성차 기업들의 주도권 경쟁이 심화되고 있습니다.",
      fullSummary: "유럽 전기차 시장을 선점하기 위한 각국 기업들의 전략이 치열합니다. 현대차는 시장 점유율 확보에 우선순위를 두고 있으며, 중국 기업들은 관세 장벽을 피하기 위해 현지 생산 거점을 구축하고 있습니다. 독일 기업들 또한 보급형 전기차 모델을 앞세워 경쟁에 뛰어들며, 유럽 시장이 글로벌 전기차 패권 전쟁의 격전지로 떠오르고 있습니다.",
      quote: "\"전기차도 인공지능(AI)처럼 결국 주도권 싸움이다. 당장 손해가 발생하더라도 전기차 전환 시점에서 주도권을 놓치게 되면 입지가 후순위로 밀리기 때문에 치열한 경쟁을 펼치고 있는 상황이다.\"",
      link: "https://www.ajunews.com/view/20251118153734901"
    },
    {
      date: "2025.10.21",
      media: "아주경제",
      title: "기아, 카자흐 공장 준공… 현대차그룹 '글로벌 CKD 전략' 가속화",
      coreSummary: "기아가 카자흐스탄에 신규 생산 공장을 준공하며, 관세 장벽 우회와 신흥 시장 선점을 위한 현대차그룹의 글로벌 CKD(반조립 생산) 전략이 속도를 내고 있습니다.",
      fullSummary: "기아가 카자흐스탄 코스타나이주에 연산 7만 대 규모의 CKD 공장을 준공했습니다. 이는 러시아-우크라이나 전쟁 이후 위축된 러시아 시장을 대체하고 중앙아시아 시장을 교두보로 삼기 위한 전략적 결정입니다. CKD 방식은 완성차 수출에 비해 관세를 절감하고 현지 정부의 지원을 받을 수 있어, 불확실한 무역 환경 속에서 효과적인 해외 진출 방안으로 주목받고 있습니다.",
      quote: "\"CKD는 완성차에 붙는 관세를 회피하거나 법인세, 보조금 혜택을 받으면서 해외 시장을 확장할 수 있다. 현대차그룹의 CKD 공장 확대는 러·우 전쟁으로 인한 글로벌 공급망 제약, 관세 리스크 회피 전략의 일환으로 보인다.\"",
      link: "https://www.ajunews.com/view/20251021152559915"
    },
    {
      date: "2025.09.25",
      media: "조선비즈",
      title: "택시 월급제 '주 40시간' 지역별 차등 적용되나… 수입별 차등 목소리도",
      coreSummary: "택시 월급제의 일률적인 '주 40시간 근로 간주' 규정을 지역별, 수입별로 유연하게 적용하는 방안이 검토되고 있습니다.",
      fullSummary: "정부가 택시 업계의 현실을 반영하여 '주 40시간 근로 간주' 규정을 완화하는 방안을 논의 중입니다. 서울을 제외한 지방의 경우 승객 감소와 매출 하락으로 인해 현행 월급제 유지가 어렵다는 지적이 계속되어 왔습니다. 이에 따라 지역별 특성과 기사들의 수입 수준을 고려한 차등 적용이 대안으로 떠오르고 있습니다.",
      quote: "\"사업주와 기사 모두가 납득할 수 있는 임금체계가 마련돼야 한다. 임금제도가 현실화돼야 비용이 아닌 투자로 받아들여질 수 있고, 최저임금을 보장하는 범위 내에서 지역과 산업의 특성을 고려한 유연한 월급제 설계가 필요하다.\"",
      link: "https://biz.chosun.com/policy/policy_sub/2025/09/25/RQRYS3RNEZAAVCZUFIR7UEKZ7Y/"
    },
    {
      date: "2025.09.05",
      media: "동아일보",
      title: "[단독]길거리 방치 전동킥보드, 서울서만 年9만대… 수거비 35억 들어",
      coreSummary: "서울시의 고질적인 문제인 길거리 방치 전동 킥보드 수거에 매년 수십억 원의 예산이 소요되고 있어, 단속 위주가 아닌 수요 중심의 새로운 관리 대책이 필요하다는 지적이 나옵니다.",
      fullSummary: "서울시 내 무단 방치된 개인형 이동장치(PM) 수거량이 급증하며 행정적 부담이 커지고 있습니다. 지난해에만 9만 대 가까운 킥보드가 수거되었으며, 이에 따른 비용만 35억 원에 달합니다. 지자체와 기업 간의 수거 책임 공방을 넘어, 정확한 수요 분석을 통해 킥보드 주차 공간을 확보하고 효율적으로 관리하는 지능형 모빌리티 정책이 필요한 시점입니다.",
      quote: "\"단속 자체를 목표로 하기보다는 수요 예측을 바탕으로 관리 방안을 수립해야 한다.\"",
      link: "https://www.donga.com/news/Society/article/all/20250904/132325591/2"
    },
    {
      date: "2025.07.29",
      media: "아주경제",
      title: "관세 직격탄에 생산지 전환 나선 GM… 사그라들지 않는 韓 철수설",
      coreSummary: "관세 비용 부담으로 인해 GM이 한국 등 해외 생산 차량의 생산지를 미국으로 옮기는 방안을 검토하면서, 한국 GM의 철수 우려가 다시 수면 위로 떠오르고 있습니다.",
      fullSummary: "트럼프 행정부의 관세 정책 여파로 GM의 순이익이 급감함에 따라, 수익성 개선을 위한 글로벌 생산 거점 재편이 가시화되고 있습니다. 특히 한국 생산 물량에 대한 관세 부담이 가중될 경우 한국 GM 공장의 가동률 저하나 철수 가능성까지 제기되는 상황입니다. 다만 미국의 제조 인력 확보 문제와 한·미 관세 협상 결과가 향후 결정의 변수가 될 전망입니다.",
      quote: "\"미국은 자동차를 제대로 만들 인력이 부족하기 때문에 GM이 (한국 생산라인을) 옮기기는 쉽지 않을 것입니다. 다만 한·미 관세 협상이 원활히 이뤄지지 않는다면 (이전 가능성에) 영향을 줄 수 있습니다.\"",
      link: "https://www.ajunews.com/view/20250728153437297"
    },
    {
      date: "2025.06.26",
      media: "파이낸셜뉴스",
      title: "부산 택시산업, 경쟁력 높이려면?…부산상의서 정책토론회",
      coreSummary: "위기에 처한 부산 택시 산업의 경쟁력을 강화하고 지속 가능한 성장 동력을 마련하기 위한 대규모 정책 토론회가 개최되었습니다.",
      fullSummary: "운수종사자 이탈과 낮은 임금 문제로 어려움을 겪고 있는 부산 택시 산업의 해법을 찾기 위해 전문가들이 모였습니다. 이번 토론회에서는 서비스 품질 향상과 더불어 기존 택시 면허 체계의 효율성을 높이고 신산업과의 조화를 꾀하는 다양한 전략적 대안들이 제시되었습니다.",
      quote: "\"기존 택시 면허 중심의 시장 성장 전략을 통해 산업의 지속 가능성을 확보하는 것이 중요합니다.\"",
      link: "https://www.fnnews.com/news/202506261004578707"
    },
    {
      date: "2025.05.04",
      media: "조선비즈",
      title: "日 택시회사들 “앱미터기 배우러 왔다”… 韓 모빌리티 '러브콜' 사연은",
      coreSummary: "일본의 주요 택시 기업들이 한국의 선진적인 앱미터기 기술과 모빌리티 디지털 전환 사례를 벤치마킹하기 위해 한국 시장을 주목하고 있습니다.",
      fullSummary: "디지털 전환 속도가 상대적으로 느린 일본 택시 업계가 한국의 IT 기반 택시 서비스 운영 노하우를 배우기 위해 러브콜을 보내고 있습니다. 특히 앱미터기 도입을 통한 효율적인 요금 체계 관리와 데이터 기반의 차량 배차 시스템이 핵심 벤치마킹 대상으로 꼽히며, 양국 모빌리티 산업의 기술 교류가 활발해지고 있습니다.",
      quote: "\"혁신은 시장 확장의 관점에서 접근해야 합니다. 택시 면허를 활용한 승차 공유 및 자율주행 택시 제도 설계로 시장 중심의 산업 성장을 추진해야 합니다.\"",
      link: "https://biz.chosun.com/policy/policy_sub/2025/05/04/CMIF2NFLTJAVFKOPKNPO3IUDUY/"
    },
    {
      date: "2025.04.29",
      media: "프레시안",
      title: "김정재 의원, 지속가능한 택시산업 발전 위한 정책 토론회 개최",
      coreSummary: "택시 산업의 구인난 해결과 서비스 품질 향상을 위해 근로 형태 유연화를 논의하는 국회 정책 토론회가 개최되었습니다.",
      fullSummary: "법인택시 업계의 경영 위기와 기사 부족 문제를 해결하기 위해 전문가들이 국회에 모였습니다. 이번 토론회에서는 경직된 택시 근로 체계를 개선하여 다양한 시간제 근로를 허용하는 '근로 형태 유연화' 방안이 집중 논의되었으며, 이를 통해 젊은 층 유입과 산업 활력을 되찾아야 한다는 제언이 잇따랐습니다.",
      quote: "\"택시 산업의 고령화와 인력 부족을 해결하기 위해 근로 형태 유연화는 필수적인 과제입니다. 다양한 수요에 대응할 수 있는 제도적 기반 마련이 시급합니다.\"",
      link: "https://www.pressian.com/pages/articles/2025042914432873593"
    },
    {
      date: "2025.04.23",
      media: "강원일보",
      title: "제5시 무실재 아카데미 상반기 두 번째 강의 - 로봇, AI 전환의 중심에 서다",
      coreSummary: "급변하는 AI 시대, 한국의 R&D 역량을 극대화하기 위해서는 디지털 트윈 기반의 기술 발전과 과거의 성장 방식에서 벗어난 제도적 혁신이 필요하다는 제언이 나왔습니다.",
      fullSummary: "무실재 아카데미에서 열린 '로봇, AI 전환의 중심에 서다' 강연에서 김동영 KDI 전문연구원은 인공지능과 로봇 기술의 융합이 가져올 미래상을 제시했습니다. 특히 한국이 보유한 세계 최고 수준의 R&D 잠재력을 실질적인 성과로 연결하기 위해서는, 파편화된 연구 성과를 하나로 꿰어낼 수 있는 시스템 개선과 디지털 트윈 환경 구축이 시급하다고 강조했습니다.",
      quote: "\"우리나라의 R&D 역량은 세계 최고 수준이지만 구슬을 꿰지 못하고 있다. 과거의 성장 방식에 초점을 맞춘 현재의 제도를 개선해야 한다.\"",
      link: "https://www.kwnews.co.kr/page/view/2025042316514765740"
    },
    {
      date: "2025.03.19",
      media: "아주경제",
      title: "[말라가는 미래차 인재] \"지원은 긴 안목으로, 신기술 재교육 주기 당겨야\"",
      coreSummary: "미래차 산업의 핵심인 전문 인력 부족 현상이 심화되는 가운데, 전문가들은 규제 개선과 장기적인 교육 투자가 시급하다고 제언합니다.",
      fullSummary: "하드웨어와 소프트웨어를 아우르는 미래차 융합 인재가 턱없이 부족한 상황입니다. 전문가들은 대학 커리큘럼 개편과 기업의 재교육 강화뿐만 아니라, 자율주행 연구를 가로막는 데이터 규제 등의 제도적 걸림돌을 제거해야만 우수 인재를 유치하고 산업 경쟁력을 확보할 수 있다고 강조했습니다.",
      quote: "\"자율주행 관련 오픈소스 알고리즘이 대부분 해외에서 개발됐기 때문에 주행 데이터를 활용해 한국 실정에 맞게 알고리즘을 업데이트 해야 하지만 각종 규제로 쉽지 않습니다. 이런 제도적 결함이 인력 유치에 걸림돌로 작용하는 상황입니다.\"",
      link: "https://www.ajunews.com/view/20250318121727644"
    },
    {
      date: "2025.02.02",
      media: "중앙일보",
      title: "일본 운전 편한 이유가 있었네...운행효율과 안전 잡은 시스템",
      coreSummary: "일본의 선진적인 교통 시스템과 강력한 집행 체계가 어떻게 성숙한 운전 문화를 만들고 도시의 이동 효율성을 높였는지 분석했습니다.",
      fullSummary: "한국과 일본의 교통 규제 방식을 비교하며, 일본의 '예측 불가능한 단속'과 '엄격한 사후 처벌'이 갖는 실효성을 조명했습니다. 특히 차고지 증명제와 같은 차량 소유 정책과 실효성 있는 단속 시스템이 결합될 때, 단순한 규제를 넘어 사회적 의식 변화와 교통 안전이라는 두 마리 토끼를 잡을 수 있음을 시사합니다.",
      quote: "\"우리나라의 교통 행정은 사전 규제 성격이 강하지만, 예고성인 데다 이에 대한 처벌 규정이 강하지 않아 오히려 규정을 준수한다는 의식이 뿌리내리지 못하는 한계가 있습니다.\"",
      link: "https://www.joongang.co.kr/article/25311138"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">In the News</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
          주요 언론과 미디어에 소개된 David Kim의 코멘트와 인터뷰를 모았습니다.
          <br/>
          현장의 이슈를 경제학적 시선으로 해석합니다.
        </p>
      </div>

      <div className="space-y-8">
        {newsItems.length > 0 ? (
          newsItems.map((item, index) => (
            <article 
              key={index} 
              className={`flex flex-col md:flex-row gap-6 md:gap-10 items-start border border-gray-100 rounded-2xl p-8 transition-all duration-300 ${expandedId === index ? 'bg-gray-50 shadow-md ring-1 ring-gray-200' : 'bg-white hover:border-gray-200 hover:shadow-sm'}`}
            >
              <div className="md:w-1/4 shrink-0">
                <div className="text-sm font-bold text-primary mb-2 uppercase tracking-wide">
                  {item.media}
                </div>
                <div className="text-gray-500 font-serif">
                  {item.date}
                </div>
              </div>
              
              <div className="md:w-3/4 w-full">
                <div className="cursor-pointer" onClick={() => toggleExpand(index)}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-3 hover:text-primary transition-colors flex justify-between items-start gap-4">
                        <span>{item.title}</span>
                        {expandedId === index ? <ChevronUp className="shrink-0 mt-1 text-gray-400" /> : <ChevronDown className="shrink-0 mt-1 text-gray-400" />}
                    </h2>
                    <p className="text-gray-600 leading-relaxed mb-4 font-medium">
                        {item.coreSummary}
                    </p>
                </div>

                {/* Expanded Content */}
                <div className={`overflow-hidden transition-all duration-500 ease-in-out ${expandedId === index ? 'max-h-[1000px] opacity-100 mt-6' : 'max-h-0 opacity-0'}`}>
                  <div className="border-t border-gray-200 pt-6 space-y-6">
                    <div>
                        <h4 className="text-sm font-bold text-gray-900 mb-2 uppercase tracking-wide">Summary</h4>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {item.fullSummary}
                        </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
                         <h4 className="text-sm font-bold text-primary mb-3 uppercase tracking-wide flex items-center gap-2">
                            Commentary
                            <span className="text-xs font-normal text-gray-400 normal-case">by 김동영 KDI 전문연구원</span>
                         </h4>
                        <p className="text-gray-800 font-serif italic text-lg leading-relaxed">
                            {item.quote}
                        </p>
                    </div>

                    <div className="pt-2">
                        <Link 
                            href={item.link} 
                            target="_blank"
                            className="inline-flex items-center text-sm font-bold text-gray-900 hover:text-primary transition-colors group px-4 py-2 border border-gray-300 rounded-full hover:border-primary bg-white"
                        >
                            기사 원문 보러가기 
                            <ArrowUpRight size={16} className="ml-2 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
                        </Link>
                    </div>
                  </div>
                </div>
                
                {expandedId !== index && (
                    <button 
                        onClick={() => toggleExpand(index)}
                        className="text-sm text-gray-400 hover:text-primary mt-2 flex items-center gap-1 transition-colors"
                    >
                        자세히 보기 <ChevronDown size={14} />
                    </button>
                )}
              </div>
            </article>
          ))
        ) : (
          <div className="text-center py-20 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <p className="text-gray-400 font-serif italic">새로운 소식이 곧 업데이트될 예정입니다.</p>
          </div>
        )}
      </div>
    </div>
  );
}