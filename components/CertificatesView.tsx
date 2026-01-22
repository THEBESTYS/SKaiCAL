
import React, { useState } from 'react';
import { 
  Award, 
  CheckCircle, 
  Cpu, 
  Music, 
  Compass, 
  Palette, 
  Briefcase, 
  Building, 
  GraduationCap, 
  BookOpen, 
  ArrowRight,
  X,
  Clock,
  Layers,
  MapPin,
  Calendar,
  Tool,
  Wrench,
  Trophy,
  Target,
  Users,
  CreditCard,
  Gift,
  // Added missing Sparkles icon
  Sparkles
} from 'lucide-react';

interface CertDetail {
  title: string;
  desc: string;
  overview: {
    institution: string;
    level: string;
    duration: string;
    format: string;
    validity: string;
  };
  curriculum: {
    title: string;
    items: string[];
  }[];
  tools: string[];
  requirements: string[];
  careers: string[];
  effects: string[];
  benefits: string[];
  eligibility: string[];
  cost: {
    base: string;
    discount: string;
    scholarship: string;
  };
}

const CertificatesView: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<CertDetail | null>(null);

  const certs: (CertDetail & { badges: string[], icon: React.ReactNode, color: string })[] = [
    {
      title: "K-Culture EduTech 전문가",
      desc: "AI 기반 K-문화 교육 콘텐츠 설계, VR/AR 학습 환경 구축, 데이터 기반 학습 분석 등 에듀테크 기술을 활용한 전문가 인증.",
      badges: ["LOTTE", "W-KPOP"],
      icon: <Award className="text-rose-600" />,
      color: "from-rose-500 to-pink-500",
      overview: {
        institution: "롯데 그룹, 월드케이팝센터, 연세대학교 미래교육원",
        level: "전문가",
        duration: "12주",
        format: "하이브리드 (온라인 이론 + 오프라인 실습)",
        validity: "3년"
      },
      curriculum: [
        {
          title: "AI 기반 교육 콘텐츠 설계",
          items: ["GPT-4 활용 맞춤형 콘텐츠 생성", "학습자 프로파일링 및 경로 설계", "적응형 평가 시스템 구축"]
        },
        {
          title: "XR 기반 몰입형 학습 환경",
          items: ["Unity 이용 VR 체험 콘텐츠 제작", "AR 기반 전통문화 프로그램 개발", "3D 가상 스튜디오 설계"]
        },
        {
          title: "데이터 기반 학습 분석",
          items: ["학습자 행동 데이터 수집 및 분석", "교육 효과성 측정 지표 개발", "AI 예측 모델 성과 최적화"]
        }
      ],
      tools: ["Google AI Studio", "Meta Quest 3", "Unity 3D", "KaiCA LMS"],
      requirements: ["모든 모듈 수료(80% 이상)", "AI 교육 콘텐츠 프로젝트 제출", "최종 실기 평가 70점 이상", "포트폴리오 심사 통과"],
      careers: ["에듀테크 기획자", "K-문화 교육 설계사", "디지털 러닝 전문가", "문화 AI 개발자"],
      effects: ["K-문화 교육 시장 경쟁력 확보", "AI 융합 전문가 전문성 인정", "글로벌 교육 협업 기회 확대"],
      benefits: ["롯데 면세점 10% 할인권", "W-KPOP 공연 초대권", "연세대 평생교육원 할인"],
      eligibility: ["4년제 대학 졸업자", "기본적 IT 활용 능력 보유", "K-문화에 대한 깊은 이해"],
      cost: {
        base: "2,400,000원",
        discount: "롯데 임직원 20% 할인",
        scholarship: "우수 수강생 장학금 3명 선발"
      }
    },
    {
      title: "W-KPOP 공식 댄스 교육사",
      desc: "월드케이팝센터(W-KPOP) 공식 라이선스를 획득한 댄스 전문가. VR 댄스 스튜디오 및 AI 피드백 시스템 활용 방법론.",
      badges: ["LICENSE", "K-POP"],
      icon: <Music className="text-purple-600" />,
      color: "from-purple-500 to-violet-500",
      overview: {
        institution: "월드케이팝센터 (W-KPOP)",
        level: "전문가",
        duration: "8주",
        format: "오프라인 집중 교육",
        validity: "2년"
      },
      curriculum: [
        {
          title: "K-POP 댄스 퍼포먼스 분석",
          items: ["최신 아이돌 안무 구조 분석", "장르별 댄스 테크닉 마스터", "무대 연출 및 동선 설계"]
        },
        {
          title: "에듀테크 댄스 티칭법",
          items: ["AI 동작 분석 솔루션 활용법", "VR 댄스 스튜디오 운영 가이드", "실시간 피드백 시스템 적용"]
        },
        {
          title: "글로벌 아카데미 경영",
          items: ["글로벌 수강생 관리 전략", "K-POP 브랜드 마케팅", "커리큘럼 표준화 및 현지화"]
        }
      ],
      tools: ["W-KPOP AI Motion Tracker", "VR Dance Hub", "Mirror Play System"],
      requirements: ["안무 마스터 클래스 이수", "티칭 시연 평가 통과", "동작 분석 솔루션 활용 시험"],
      careers: ["K-POP 댄스 트레이너", "글로벌 아카데미 강사", "엔터테인먼트 퍼포먼스 디렉터"],
      effects: ["공식 라이선스 기반 공신력 확보", "최첨단 티칭 테크놀로지 습득", "해외 지점 파견 우선권"],
      benefits: ["W-KPOP 공식 교육사 명패", "글로벌 오디션 심사위원 자격", "연습실 무료 대관"],
      eligibility: ["댄스 관련 전공자 혹은 경력자", "기본적인 영어 커뮤니케이션 가능자"],
      cost: {
        base: "1,850,000원",
        discount: "얼리버드 10% 할인",
        scholarship: "최우수 실기자 전액 장학금"
      }
    },
    {
      title: "AI 기반 학습 설계사",
      desc: "연세대학교 미래교육원과 공동 개발한 AI 학습 경로 최적화 기술을 활용한 맞춤형 교육 설계 전문가 인증.",
      badges: ["LOTTE", "YONSEI"],
      icon: <Cpu className="text-blue-600" />,
      color: "from-blue-500 to-cyan-500",
      overview: {
        institution: "연세대학교 미래교육원, 롯데 그룹",
        level: "고급",
        duration: "10주",
        format: "온라인 라이브 세션",
        validity: "5년"
      },
      curriculum: [
        {
          title: "데이터 기반 커리큘럼 설계",
          items: ["학습 빅데이터 시각화 기법", "개인화된 학습 여정 지도(LX)", "역량 중심 교육과정 설계"]
        },
        {
          title: "AI 튜터 시스템 구축",
          items: ["LLM 기반 대화형 튜터 설계", "지능형 피드백 알고리즘", "자동 평가 및 성적 분석 도구"]
        },
        {
          title: "미래 교육 인프라 전략",
          items: ["스마트 캠퍼스 솔루션 설계", "에듀테크 거버넌스 및 윤리", "글로벌 교육 표준 연동"]
        }
      ],
      tools: ["TensorFlow", "KaiCA AI Analytics", "Tableau", "Python"],
      requirements: ["알고리즘 설계 프로젝트 제출", "기말 이론 시험 통과", "현업 적용 사례 발표"],
      careers: ["교육공학 전문가", "L&D 컨설턴트", "AI 교육 서비스 기획자"],
      effects: ["데이터 사이언스 기반 교육 전문성", "연세대 공식 공동 수료증 취득", "HRD 시장 내 독보적 커리어"],
      benefits: ["연세대학교 도서관 이용권", "학술 데이터베이스 접근 권한", "롯데 HR 컨퍼런스 초대"],
      eligibility: ["교육 업계 3년 이상 경력자", "데이터 분석 기초 지식 보유자"],
      cost: {
        base: "2,100,000원",
        discount: "기업 단체 수강 15% 할인",
        scholarship: "연구 과제 우수자 시상"
      }
    },
    {
      title: "K-문화 관광 코디네이터",
      desc: "롯데 면세점·호텔 연계 K-문화 체험형 관광 프로그램을 기획하고 운영할 수 있는 전문 코디네이터 인증.",
      badges: ["LOTTE", "TOURISM"],
      icon: <Compass className="text-amber-600" />,
      color: "from-amber-500 to-orange-500",
      overview: {
        institution: "롯데 호텔 & 리조트, 롯데 면세점",
        level: "중급",
        duration: "6주",
        format: "하이브리드 (현장 실습 위주)",
        validity: "3년"
      },
      curriculum: [
        {
          title: "K-라이프스타일 큐레이션",
          items: ["최신 K-컬처 트렌드 분석", "테마별 관광 코스 개발", "VIP 의전 및 서비스 매너"]
        },
        {
          title: "쇼핑 & 문화 연계 전략",
          items: ["면세점 혜택 활용 투어 설계", "전통 시장 및 로컬 체험 기획", "AR 기반 관광 가이드 운영"]
        },
        {
          title: "글로벌 마케팅 & CS",
          items: ["외국인 고객 심리 분석", "글로벌 SNS 홍보 전략", "위기 대응 및 안전 관리"]
        }
      ],
      tools: ["Lotte Smart Guide App", "AI Translation Tools", "Reservation System"],
      requirements: ["코스 기획 제안서 제출", "현장 실무 평가(롯데호텔)", "외국어 회화 테스트"],
      careers: ["관광 상품 기획자", "VIP 의전 코디네이터", "문화 관광 가이드 전문가"],
      effects: ["롯데 그룹 관광 계열사 채용 우대", "글로벌 관광 네트워크 확장", "K-콘텐츠 비즈니스 역량 강화"],
      benefits: ["롯데호텔 객실 할인권", "면세점 골드 등급 업그레이드", "전용 유니폼 지급"],
      eligibility: ["관광 관련 전공자 우대", "외국어(영/중/일) 1종 이상 능통자"],
      cost: {
        base: "1,200,000원",
        discount: "관광 전공 학생 20% 할인",
        scholarship: "롯데 관광 아이디어 공모전 상금"
      }
    },
    {
      title: "K-Beauty & AR 메이크업 교육사",
      desc: "AR 가상 메이크업 기술을 활용한 K-Beauty 전문가. 아이돌 메이크업 스타일링 노하우를 포함한 공식 프로그램.",
      badges: ["W-KPOP", "BEAUTY"],
      icon: <Palette className="text-pink-600" />,
      color: "from-pink-500 to-rose-500",
      overview: {
        institution: "월드케이팝센터, 롯데 면세점(뷰티 섹션)",
        level: "중급",
        duration: "8주",
        format: "하이브리드 (실기 세션 포함)",
        validity: "2년"
      },
      curriculum: [
        {
          title: "아이돌 스타일링 미학",
          items: ["K-POP 컨셉별 메이크업 분석", "무대 조명과 메이크업 상관관계", "퍼스널 컬러 진단 기법"]
        },
        {
          title: "AR 뷰티 테크놀로지",
          items: ["가상 메이크업 필터 개발 원리", "디지털 페이스 분석 기술", "스마트 미러 운영 및 교육"]
        },
        {
          title: "뷰티 커머스 & 코칭",
          items: ["화장품 성분 및 트렌드 교육", "고객 맞춤형 제품 큐레이션", "온라인 뷰티 클래스 운영"]
        }
      ],
      tools: ["Beauty AR Studio", "Personal Color Sensor", "4K Mirror Cam"],
      requirements: ["컨셉 메이크업 포트폴리오", "AR 장비 활용 실기 평가", "뷰티 카운슬링 시뮬레이션"],
      careers: ["뷰티 에듀케이터", "디지털 뷰티 컨설턴트", "K-Beauty 브랜드 엠버서더"],
      effects: ["디지털 뷰티 전문가로서의 희소성", "글로벌 뷰티 브랜드 협업 기회", "온라인 뷰티 창업 역량 확보"],
      benefits: ["롯데 면세점 뷰티 샘플 박스", "유명 아티스트 마스터클래스", "브랜드 런칭 행사 초대"],
      eligibility: ["뷰티 관련 자격증 소지자 우대", "디지털 기기 활용 능숙자"],
      cost: {
        base: "1,500,000원",
        discount: "파트너사 추천 15% 할인",
        scholarship: "베스트 아티스트상 상품권"
      }
    },
    {
      title: "기업 맞춤형 K-문화 컨설턴트",
      desc: "기업 대상 K-문화 교육 솔루션 설계 및 컨설팅 능력을 인증. 외국인 직원 적응 및 팀 빌딩 프로그램 설계.",
      badges: ["B2B", "CORPORATE"],
      icon: <Briefcase className="text-emerald-600" />,
      color: "from-emerald-500 to-green-500",
      overview: {
        institution: "KaiCA 기업 협력 팀, 롯데 지주",
        level: "전문가",
        duration: "12주",
        format: "온라인 라이브 + 기업 실무 프로젝트",
        validity: "5년"
      },
      curriculum: [
        {
          title: "B2B 교육 니즈 분석",
          items: ["조직 문화 진단 기법", "글로벌 임직원 대상 문화 역량(CQ) 분석", "기업 목표 연계 교육 설계"]
        },
        {
          title: "K-컬처 솔루션 아키텍처",
          items: ["맞춤형 K-문화 연수 기획", "에듀테크 라이선싱 비즈니스 모델", "조직 활성화 프로그램(GWP) 설계"]
        },
        {
          title: "교육 성과 관리 및 ROI",
          items: ["교육 효과성 정량 분석", "비용 대비 성과 산출 모델", "컨설팅 제안서 및 리포팅 기법"]
        }
      ],
      tools: ["CQ Analytics Tool", "Project Management System", "Financial Modeling"],
      requirements: ["실제 기업 제안서 프로젝트", "컨설팅 시뮬레이션 합격", "ROI 분석 과제 통과"],
      careers: ["기업 교육(L&D) 컨설턴트", "글로벌 HR 전문가", "B2B 전략 기획자"],
      effects: ["고수익 컨설팅 비즈니스 가능", "대기업 네트워크 형성 및 협업", "글로벌 비즈니스 매너 리더십"],
      benefits: ["롯데 그룹 B2B 파트너 등록", "비즈니스 라운지 무상 이용", "연간 컨설턴트 세미나 지원"],
      eligibility: ["기업 교육/HR 5년 이상 경력자", "컨설팅 실무 경험자 우대"],
      cost: {
        base: "2,800,000원",
        discount: "협력 기관 20% 할인",
        scholarship: "프로젝트 우수자 비즈니스 지원금"
      }
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-32 pt-20 relative">
      {/* Hero Header */}
      <section className="bg-zinc-50 py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-200/40 rounded-full blur-[120px] -z-10 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100/30 rounded-full blur-[150px] -z-10"></div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white border border-rose-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-rose-600 shadow-sm">
            <Award size={14} /> Premium Certification
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter text-zinc-950 mb-8 leading-tight">
            예술적 역량을<br />
            <span className="text-rose-600 italic font-normal">Official Certification</span>으로
          </h1>
          <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
            당신은 KaiCA-Lotte 인증 프로그램의 전문 컨설턴트입니다. 
            단순한 자격증이 아닌, 예술적 감각과 기술적 전문성이 결합된 프리미엄 인증 시스템을 경험하세요.
          </p>
          
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            <span className="px-4 py-2 bg-rose-600 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-rose-200">롯데 그룹 공식 인증</span>
            <span className="px-4 py-2 bg-blue-600 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-blue-200">월드케이팝센터 라이선스</span>
            <span className="px-4 py-2 bg-zinc-900 text-white rounded-full text-xs font-bold uppercase tracking-widest shadow-lg shadow-zinc-200">연세대학교 미래교육원 협력</span>
          </div>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20 space-y-6">
          <h2 className="text-5xl font-serif font-bold tracking-tight text-zinc-900">인증 프로그램 목록</h2>
          <div className="w-20 h-1 bg-rose-600 mx-auto"></div>
          <p className="text-zinc-500 text-xl font-light">K-문화 교육과 에듀테크 기술의 예술적 융합을 담은 6가지 프리미엄 인증 프로그램</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certs.map((cert, i) => (
            <div key={i} className="group relative bg-white p-10 rounded-[2.5rem] border border-zinc-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-zinc-50 rounded-full -mr-16 -mt-16 group-hover:bg-rose-50 transition-colors"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="flex gap-2">
                  {cert.badges.map((b, idx) => (
                    <span key={idx} className="px-3 py-1 bg-zinc-100 rounded-full text-[9px] font-bold text-zinc-600 tracking-tighter group-hover:bg-rose-100 group-hover:text-rose-600 transition-colors">
                      {b}
                    </span>
                  ))}
                </div>
                <div className="p-4 bg-zinc-50 rounded-2xl group-hover:scale-110 transition-transform">
                  {cert.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-zinc-950 mb-4 tracking-tight leading-tight group-hover:text-rose-600 transition-colors">
                {cert.title}
              </h3>
              <p className="text-zinc-500 font-light leading-relaxed mb-8 text-sm flex-grow">
                {cert.desc}
              </p>

              <button 
                onClick={() => setSelectedCert(cert)}
                className={`w-full py-4 bg-zinc-950 text-white rounded-full font-bold text-sm tracking-wide transition-all group-hover:bg-rose-600 flex items-center justify-center gap-2`}
              >
                상세 정보 보기 <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Modal / Detailed Info View */}
      {selectedCert && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10 animate-in fade-in duration-300">
          <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-md" onClick={() => setSelectedCert(null)}></div>
          
          <div className="relative bg-white w-full max-w-5xl max-h-[90vh] rounded-[3rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in-95 duration-300">
            {/* Modal Header */}
            <div className="bg-zinc-950 text-white p-8 md:p-12 relative">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="absolute top-8 right-8 p-2 bg-white/10 hover:bg-rose-600 rounded-full transition-all"
                >
                  <X size={24} />
                </button>
                <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600 rounded-full text-[10px] font-bold uppercase tracking-widest">
                        Professional Consulting
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">{selectedCert.title}</h2>
                    <p className="text-zinc-400 text-lg max-w-2xl font-light leading-relaxed">
                        선택하신 인증 프로그램에 대해 전문 컨설턴트로서 상세한 가이드를 제공해 드립니다.
                    </p>
                </div>
            </div>

            {/* Modal Content - Scrollable */}
            <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-16">
                {/* 1. Overview */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                    {[
                        { icon: <Building size={18} />, label: "인증 기관", value: selectedCert.overview.institution },
                        { icon: <Layers size={18} />, label: "수준", value: selectedCert.overview.level },
                        { icon: <Clock size={18} />, label: "소요 시간", value: selectedCert.overview.duration },
                        { icon: <MapPin size={18} />, label: "교육 형태", value: selectedCert.overview.format },
                        { icon: <Calendar size={18} />, label: "유효 기간", value: selectedCert.overview.validity },
                    ].map((item, i) => (
                        <div key={i} className="p-6 bg-zinc-50 rounded-3xl space-y-3">
                            <div className="text-rose-600">{item.icon}</div>
                            <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">{item.label}</div>
                            <div className="text-sm font-bold text-zinc-900 leading-snug">{item.value}</div>
                        </div>
                    ))}
                </div>

                {/* 2. Curriculum */}
                <div className="space-y-8">
                    <h3 className="text-2xl font-bold flex items-center gap-3">
                        <BookOpen className="text-rose-600" /> 커리큘럼 모듈
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {selectedCert.curriculum.map((module, i) => (
                            <div key={i} className="space-y-5">
                                <div className="text-sm font-bold text-rose-600 uppercase tracking-widest">모듈 0{i+1}</div>
                                <h4 className="text-xl font-bold">{module.title}</h4>
                                <ul className="space-y-3">
                                    {module.items.map((item, idx) => (
                                        <li key={idx} className="text-sm text-zinc-500 flex items-start gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-rose-600 mt-1.5 shrink-0"></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3. Tools & Requirements */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Wrench className="text-rose-600" /> 학습 도구 및 플랫폼
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {selectedCert.tools.map((tool, i) => (
                                <span key={i} className="px-4 py-2 bg-zinc-100 rounded-xl text-xs font-bold text-zinc-700">
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Trophy className="text-rose-600" /> 인증 획득 조건
                        </h3>
                        <div className="space-y-3">
                            {selectedCert.requirements.map((req, i) => (
                                <div key={i} className="flex items-center gap-3 text-sm text-zinc-600 font-medium">
                                    <CheckCircle size={16} className="text-emerald-500" />
                                    {req}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Career & Effects */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Target className="text-rose-600" /> 취업 및 활동 분야
                        </h3>
                        <div className="grid grid-cols-2 gap-4">
                            {selectedCert.careers.map((career, i) => (
                                <div key={i} className="p-4 border border-zinc-100 rounded-2xl text-sm font-bold text-zinc-700 hover:border-rose-200 transition-colors">
                                    {career}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Sparkles className="text-rose-600" /> 기대 효과
                        </h3>
                        <ul className="space-y-4">
                            {selectedCert.effects.map((effect, i) => (
                                <li key={i} className="text-sm text-zinc-500 leading-relaxed">
                                    • {effect}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 5. Benefits & Eligibility */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Gift className="text-rose-600" /> 파트너십 혜택
                        </h3>
                        <div className="flex flex-wrap gap-3">
                            {selectedCert.benefits.map((benefit, i) => (
                                <span key={i} className="px-4 py-2 bg-rose-50 text-rose-600 rounded-xl text-xs font-bold">
                                    {benefit}
                                </span>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-8">
                        <h3 className="text-2xl font-bold flex items-center gap-3">
                            <Users className="text-rose-600" /> 지원 자격
                        </h3>
                        <ul className="space-y-3">
                            {selectedCert.eligibility.map((el, i) => (
                                <li key={i} className="text-sm text-zinc-600">• {el}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* 6. Cost */}
                <div className="p-10 bg-zinc-950 text-white rounded-[2.5rem] flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="space-y-2">
                        <div className="text-xs font-bold text-rose-500 uppercase tracking-widest">Investment</div>
                        <h3 className="text-3xl font-bold">비용 및 지원 혜택</h3>
                    </div>
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                        <div className="text-center md:text-right">
                            <div className="text-sm text-zinc-400">교육 비용</div>
                            <div className="text-2xl font-bold text-rose-500">{selectedCert.cost.base}</div>
                        </div>
                        <div className="w-px h-12 bg-white/10 hidden md:block"></div>
                        <div className="text-center md:text-right">
                            <div className="text-sm text-zinc-400">할인 및 장학</div>
                            <div className="text-sm font-bold">{selectedCert.cost.discount}</div>
                            <div className="text-[10px] text-zinc-500">{selectedCert.cost.scholarship}</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Footer */}
            <div className="p-8 md:p-10 border-t border-zinc-100 flex justify-between items-center">
                <button 
                  onClick={() => setSelectedCert(null)}
                  className="text-zinc-400 hover:text-zinc-900 font-bold text-sm transition-colors"
                >
                  취소하기
                </button>
                <button className="px-10 py-4 bg-rose-600 text-white rounded-full font-bold shadow-xl shadow-rose-200 hover:scale-105 transition-all">
                  지금 바로 지원하기
                </button>
            </div>
          </div>
        </div>
      )}

      {/* Partnership Section (Copied from bottom of page) */}
      <section className="bg-zinc-950 py-32 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-24 space-y-4">
            <h3 className="text-4xl font-serif font-bold tracking-tight">공식 파트너십</h3>
            <p className="text-zinc-500 text-lg font-light">세계적인 파트너들과의 협력으로 탄생한 신뢰와 혁신의 인증 프로그램</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 hover:border-rose-500/30 transition-all group">
              <div className="w-20 h-20 mx-auto mb-8 bg-rose-600/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Building size={40} className="text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold mb-4">롯데 그룹</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">에듀테크 기반 K-문화 교육의<br />전략적 파트너</p>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 group-hover:text-rose-500 transition-colors">공식 인증 기관</div>
            </div>

            <div className="text-center p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 hover:border-blue-500/30 transition-all group">
              <div className="w-20 h-20 mx-auto mb-8 bg-blue-600/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap size={40} className="text-blue-600" />
              </div>
              <h4 className="text-2xl font-bold mb-4">월드케이팝센터</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">공식 라이선스 파트너<br />K-POP 교육 인증 기관</p>
              <a href="https://w-kpop.com" target="_blank" className="inline-flex items-center gap-2 text-blue-500 font-bold text-xs hover:text-blue-400 transition-colors">
                라이선스 정보 보기 <ArrowRight size={14} />
              </a>
            </div>

            <div className="text-center p-12 bg-white/5 backdrop-blur-md rounded-[3rem] border border-white/10 hover:border-purple-500/30 transition-all group">
              <div className="w-20 h-20 mx-auto mb-8 bg-purple-600/10 rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookOpen size={40} className="text-purple-600" />
              </div>
              <h4 className="text-2xl font-bold mb-4">연세대학교</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">미래교육원 AI 교육 기술 연구<br />공동 개발 파트너</p>
              <div className="text-[10px] uppercase font-bold tracking-[0.2em] text-zinc-600 group-hover:text-purple-500 transition-colors">학술 연구 협력</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="bg-rose-600 rounded-[3.5rem] p-16 md:p-24 text-white text-center relative overflow-hidden shadow-2xl">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -mr-32 -mt-32 blur-[80px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full -ml-20 -mb-20 blur-[60px]"></div>
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-10">
            <h2 className="text-5xl md:text-6xl font-serif font-bold tracking-tight">당신의 역량을 <br />세계적 인증으로 증명하세요</h2>
            <p className="text-xl md:text-2xl opacity-90 font-light leading-relaxed">
              KaiCA-Lotte 인증 프로그램은 당신의 예술적 감각과 기술적 전문성을 공식적으로 인정받을 수 있는 프리미엄 기회입니다. 
            </p>
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <button className="px-12 py-5 bg-white text-rose-600 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">
                무료 상담 신청하기
              </button>
              <button className="px-12 py-5 bg-transparent border border-white/30 text-white rounded-full font-bold text-lg hover:bg-white/10 transition-all">
                인증서 샘플 보기
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CertificatesView;
