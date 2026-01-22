
import React from 'react';
import { Bot, Monitor, Globe, BarChart3, Lightbulb, Users, ArrowRight } from 'lucide-react';

const LSphereView: React.FC = () => {
  const experiences = [
    {
      icon: <Bot size={32} className="text-rose-600" />,
      title: "AI 맞춤 학습 체험존",
      desc: "얼굴인식 기반 학습 스타일 분석으로 맞춤형 K-문화 코스를 추천합니다",
      tag: "AI 분석"
    },
    {
      icon: <Monitor size={32} className="text-rose-600" />,
      title: "XR 몰입형 교육룸",
      desc: "VR K-POP 댄스 트레이닝과 AR 전통문화 체험을 제공합니다",
      tag: "VR/AR"
    },
    {
      icon: <Globe size={32} className="text-rose-600" />,
      title: "실시간 협업 학습 스튜디오",
      desc: "한국과 동남아 학습자를 실시간으로 연결하는 수업 체험 공간입니다",
      tag: "글로벌 협업"
    },
    {
      icon: <BarChart3 size={32} className="text-rose-600" />,
      title: "교육 데이터 시각화 벽",
      desc: "학습자의 진행 상황과 효과를 실시간으로 시각화한 데이터 아트를 전시합니다",
      tag: "데이터 아트"
    },
    {
      icon: <Lightbulb size={32} className="text-rose-600" />,
      title: "에듀테크 솔루션 쇼케이스",
      desc: "롯데-연세대-에듀포레 공동 개발 기술을 전시하는 공간입니다",
      tag: "기술 전시"
    },
    {
      icon: <Users size={32} className="text-rose-600" />,
      title: "기업 맞춤형 교육 컨설팅",
      desc: "기업별 필요에 맞춘 에듀테크 솔루션을 제안합니다",
      tag: "맞춤 컨설팅"
    }
  ];

  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Intro Header */}
      <section className="py-24 max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
          Futuristic Learning Space
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter text-zinc-900 mb-6">
          L-Sphere
        </h1>
        <p className="text-2xl text-rose-600 font-bold mb-4">에듀테크 스페이스</p>
        <p className="text-xl text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
          미래 교육을 체험하는 혁신적인 학습 공간.<br />
          최신 기술이 집약된 이곳에서 당신의 잠재력을 발견하세요.
        </p>
      </section>

      {/* Grid of Experiences */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((exp, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-2xl transition-all border border-zinc-100 group">
                <div className="mb-8 p-4 bg-rose-50 w-fit rounded-2xl group-hover:scale-110 transition-transform">
                  {exp.icon}
                </div>
                <div className="text-[10px] font-bold text-rose-600 uppercase tracking-widest mb-2">
                  {exp.tag}
                </div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4 tracking-tight">{exp.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed mb-8">{exp.desc}</p>
                <div className="flex items-center gap-2 text-zinc-900 font-bold text-sm cursor-pointer group-hover:text-rose-600 transition-colors">
                  체험하기 <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Showcase Section */}
      <section className="py-24 max-w-7xl mx-auto px-6 overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2000&auto=format&fit=crop" className="rounded-3xl shadow-2xl ai-glow" alt="Futuristic Tech" />
          </div>
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold tracking-tight">지능형 학습 데이터 월</h2>
            <p className="text-lg text-zinc-500 font-light leading-relaxed">
              L-Sphere의 중앙 벽면은 실시간으로 생성되는 학습 데이터를 예술적으로 시각화합니다. 
              수천 명의 학습자가 동시에 만들어내는 지식의 흐름을 거대한 데이터 아트로 감상할 수 있습니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 bg-zinc-900 text-white rounded-2xl">
                <div className="text-3xl font-bold mb-1">98%</div>
                <div className="text-xs text-zinc-400 font-bold uppercase tracking-widest">분석 정밀도</div>
              </div>
              <div className="p-6 bg-rose-600 text-white rounded-2xl">
                <div className="text-3xl font-bold mb-1">Real-time</div>
                <div className="text-xs text-rose-100 font-bold uppercase tracking-widest">데이터 피드</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LSphereView;
