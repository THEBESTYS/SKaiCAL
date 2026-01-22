
import React from 'react';
import { 
  Award, 
  CheckCircle, 
  Cpu, 
  Globe, 
  Music, 
  Compass, 
  Palette, 
  Briefcase, 
  Building, 
  GraduationCap, 
  BookOpen, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

const CertificatesView: React.FC = () => {
  const certs = [
    {
      title: "K-Culture EduTech 전문가",
      desc: "AI 기반 K-문화 교육 콘텐츠 설계, VR/AR 학습 환경 구축, 데이터 기반 학습 분석 등 에듀테크 기술을 활용한 전문가 인증.",
      badges: ["LOTTE", "W-KPOP"],
      points: ["AI 맞춤 학습 엔진 활용 능력", "XR 기반 K-문화 콘텐츠 제작", "W-KPOP 공식 커리큘럼"],
      icon: <Award className="text-rose-600" />,
      color: "from-rose-500 to-pink-500"
    },
    {
      title: "W-KPOP 공식 댄스 교육사",
      desc: "월드케이팝센터(W-KPOP) 공식 라이선스를 획득한 댄스 전문가. VR 댄스 스튜디오 및 AI 피드백 시스템 활용 방법론.",
      badges: ["LICENSE", "K-POP"],
      points: ["W-KPOP 공식 라이선스 인증", "VR K-POP 댄스 트레이닝", "글로벌 K-POP 교육 커리큘럼"],
      icon: <Music className="text-purple-600" />,
      color: "from-purple-500 to-violet-500"
    },
    {
      title: "AI 기반 학습 설계사",
      desc: "연세대학교 미래교육원과 공동 개발한 AI 학습 경로 최적화 기술을 활용한 맞춤형 교육 설계 전문가 인증.",
      badges: ["LOTTE", "YONSEI"],
      points: ["AI 학습 알고리즘 설계 능력", "실시간 성과 분석 대시보드", "데이터 기반 교육 효과 측정"],
      icon: <Cpu className="text-blue-600" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "K-문화 관광 코디네이터",
      desc: "롯데 면세점·호텔 연계 K-문화 체험형 관광 프로그램을 기획하고 운영할 수 있는 전문 코디네이터 인증.",
      badges: ["LOTTE", "TOURISM"],
      points: ["체험형 교육 관광 패키지 설계", "면세점 연계 문화 교육", "XR 기반 문화 체험관 기획"],
      icon: <Compass className="text-amber-600" />,
      color: "from-amber-500 to-orange-500"
    },
    {
      title: "K-Beauty & AR 메이크업 교육사",
      desc: "AR 가상 메이크업 기술을 활용한 K-Beauty 전문가. 아이돌 메이크업 스타일링 노하우를 포함한 공식 프로그램.",
      badges: ["W-KPOP", "BEAUTY"],
      points: ["AR 가상 메이크업 체험 기술", "K-POP 아이돌 스타일링", "화장품 판매 연계 교육"],
      icon: <Palette className="text-pink-600" />,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "기업 맞춤형 K-문화 컨설턴트",
      desc: "기업 대상 K-문화 교육 솔루션 설계 및 컨설팅 능력을 인증. 외국인 직원 적응 및 팀 빌딩 프로그램 설계.",
      badges: ["B2B", "CORPORATE"],
      points: ["기업 맞춤형 교육 솔루션", "에듀테크 기술 라이선싱", "교육 효과성 및 ROI 측정"],
      icon: <Briefcase className="text-emerald-600" />,
      color: "from-emerald-500 to-green-500"
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-32 pt-20">
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
            KaiCA-Lotte 인증 프로그램은 단순한 자격증이 아닌, 예술적 감각과 기술적 전문성이 결합된 프리미엄 인증 시스템입니다. 
            세계적 파트너십과 AI 기술의 융합으로 탄생한 차별화된 미래 역량을 확인하세요.
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
          <h2 className="text-5xl font-serif font-bold tracking-tight text-zinc-900">인증서 컬렉션</h2>
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

              <ul className="space-y-3 mb-10 relative z-10">
                {cert.points.map((p, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-zinc-700 font-medium">
                    <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 bg-zinc-950 text-white rounded-full font-bold text-sm tracking-wide transition-all group-hover:bg-rose-600 flex items-center justify-center gap-2`}>
                상세 정보 보기 <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Section */}
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
