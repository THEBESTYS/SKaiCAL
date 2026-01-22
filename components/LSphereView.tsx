
import React from 'react';
import { Bot, Monitor, Globe, BarChart3, Lightbulb, Users, ArrowRight, Zap } from 'lucide-react';

const LSphereView: React.FC = () => {
  const experiences = [
    {
      icon: <Bot size={32} className="text-rose-600" />,
      title: "AI 맞춤 학습 체험존",
      desc: "얼굴인식 기반 학습 스타일 분석으로 당신에게 최적화된 K-문화 코스를 실시간으로 추천합니다.",
      tag: "AI Analysis"
    },
    {
      icon: <Monitor size={32} className="text-rose-600" />,
      title: "XR 몰입형 교육룸",
      desc: "VR K-POP 댄스 트레이닝부터 AR 전통 문화 체험까지, 시공간을 초월한 학습 환경을 제공합니다.",
      tag: "XR Immersive"
    },
    {
      icon: <Globe size={32} className="text-rose-600" />,
      title: "실시간 협업 스튜디오",
      desc: "한국과 전 세계의 학습자를 실시간으로 연결하여 교류하고 함께 성장하는 글로벌 스튜디오입니다.",
      tag: "Global Live"
    },
    {
      icon: <BarChart3 size={32} className="text-rose-600" />,
      title: "데이터 시각화 월",
      desc: "학습자의 성취도와 글로벌 교육 트렌드를 거대한 데이터 아트로 시각화하여 전시합니다.",
      tag: "Data Visualization"
    },
    {
      icon: <Lightbulb size={32} className="text-rose-600" />,
      title: "솔루션 쇼케이스",
      desc: "롯데-연세대-에듀포레가 공동 개발한 최첨단 에듀테크 솔루션의 미래를 직접 확인하세요.",
      tag: "Tech Showcase"
    },
    {
      icon: <Users size={32} className="text-rose-600" />,
      title: "기업 교육 컨설팅",
      desc: "기업과 기관의 특성에 맞춘 차세대 교육 인프라 및 에듀테크 통합 솔루션을 제안합니다.",
      tag: "B2B Consulting"
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-32 pt-20">
      {/* Visual Header */}
      <section className="py-32 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-10 text-zinc-500">
          Innovation Playground
        </div>
        <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter text-zinc-950 mb-8">
          L-Sphere
        </h1>
        <div className="flex items-center justify-center gap-3 mb-10">
            <div className="h-px w-12 bg-rose-300"></div>
            <p className="text-2xl md:text-3xl text-rose-600 font-bold tracking-tight">미래형 에듀테크 스페이스</p>
            <div className="h-px w-12 bg-rose-300"></div>
        </div>
        <p className="text-xl md:text-2xl text-zinc-500 font-light max-w-3xl mx-auto leading-relaxed">
          롯데의 최첨단 기술력이 집약된 <span className="text-zinc-900 font-medium">혁신적 학습 공간.</span><br />
          당신의 상상력이 현실이 되는 미래 교육의 중심지를 체험하세요.
        </p>
      </section>

      {/* Grid of Experiences */}
      <section className="bg-zinc-950 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-zinc-900 p-12 rounded-[2.5rem] hover:bg-zinc-800 transition-all border border-zinc-800 group relative overflow-hidden">
                <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                    <Zap size={100} />
                </div>
                <div className="mb-10 p-5 bg-rose-500/10 w-fit rounded-[1.5rem] group-hover:scale-110 transition-transform">
                  {exp.icon}
                </div>
                <div className="text-[10px] font-bold text-rose-500 uppercase tracking-widest mb-3">
                  {exp.tag}
                </div>
                <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">{exp.title}</h3>
                <p className="text-zinc-400 font-light leading-relaxed mb-10 text-lg">{exp.desc}</p>
                <button className="flex items-center gap-3 text-white font-bold text-sm hover:text-rose-500 transition-colors group/btn">
                  Explore More <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Futuristic Showcase */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="bg-zinc-50 rounded-[3.5rem] p-16 md:p-24 flex flex-col lg:flex-row items-center gap-20 shadow-sm border border-zinc-100">
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-rose-200/40 rounded-full blur-[100px] -z-10 animate-pulse"></div>
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" className="rounded-[3rem] shadow-2xl ai-glow transform -rotate-2 hover:rotate-0 transition-transform duration-700" alt="Futuristic Tech" />
          </div>
          <div className="lg:w-1/2 space-y-10">
            <h2 className="text-5xl font-bold tracking-tight leading-tight">지능형 학습 <br /><span className="text-rose-600 font-serif">Data Visualization Wall</span></h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              L-Sphere의 중앙 홀을 장식하는 거대 디스플레이는 전 세계 학습자들의 데이터를 예술적 패턴으로 변환합니다. 
              우리는 교육을 숫자와 텍스트를 넘어 하나의 감각적인 예술 작품으로 승화시킵니다.
            </p>
            <div className="flex gap-10">
              <div className="space-y-1">
                <div className="text-4xl font-serif font-bold text-zinc-950">98%</div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Efficiency</div>
              </div>
              <div className="space-y-1">
                <div className="text-4xl font-serif font-bold text-zinc-950">Real-time</div>
                <div className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">Connectivity</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LSphereView;
