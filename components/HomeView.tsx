
import React from 'react';
import { ViewType } from '../types.ts';
import { ArrowRight, Sparkles, Play } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-1000">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2837&auto=format&fit=crop" 
            className="w-full h-full object-cover scale-105 animate-pulse-slow" 
            style={{ animationDuration: '20s' }}
            alt="K-Culture Aesthetic"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl space-y-10">
            <div className="inline-flex items-center gap-2 px-5 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-bold uppercase tracking-[0.2em] border border-rose-100">
              <Sparkles size={14} className="animate-spin-slow" />
              Revolutionizing K-Culture via AI
            </div>
            <h1 className="text-7xl md:text-9xl font-serif font-bold tracking-tighter leading-tight text-zinc-900">
              미학의 정점,<br />
              <span className="italic font-normal text-rose-600">AI</span>로 피어나다
            </h1>
            <p className="text-xl md:text-2xl text-zinc-600 font-light leading-relaxed max-w-xl">
              한국의 정서적 깊이와 현대 인공지능이 만났습니다.<br />
              새로운 차원의 K-Culture 에듀테크 허브, Kai를 만나보세요.
            </p>
            <div className="flex flex-wrap gap-5">
              <button 
                onClick={() => onNavigate(ViewType.S_LOTTE)}
                className="bg-zinc-900 text-white px-10 py-5 rounded-full font-medium flex items-center gap-3 hover:bg-rose-600 hover:-translate-y-1 transition-all shadow-2xl"
              >
                S-Lotte Hub <ArrowRight size={20} />
              </button>
              <button 
                onClick={() => onNavigate(ViewType.L_SPHERE)}
                className="bg-white/50 backdrop-blur-md text-zinc-900 px-10 py-5 rounded-full font-medium border border-zinc-200 hover:bg-white hover:-translate-y-1 transition-all shadow-sm"
              >
                L-Sphere Tour
              </button>
            </div>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-30">
          <div className="w-px h-16 bg-gradient-to-b from-rose-600 to-transparent"></div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-rose-500/10 rounded-[3rem] blur-2xl group-hover:bg-rose-500/20 transition-all"></div>
            <div className="aspect-[4/5] bg-zinc-100 rounded-[2.5rem] overflow-hidden shadow-2xl relative z-10">
              <img src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover grayscale-0 group-hover:scale-110 transition-transform duration-1000" alt="AI Curation" />
              <div className="absolute bottom-10 left-10 text-white">
                <div className="p-4 bg-black/30 backdrop-blur-xl rounded-2xl border border-white/20">
                  <Play fill="white" size={24} />
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-8">
            <h2 className="text-5xl font-serif font-bold tracking-tight leading-snug">지능적인 감성,<br />AI 퍼스널 큐레이션</h2>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              우리는 단순한 정보를 전달하는 것을 넘어, 당신의 취향과 학습 패턴을 정교하게 분석합니다. K-Beauty, Dance, Art를 AI로 재해석하여 오직 당신만을 위한 커리큘럼을 설계합니다.
            </p>
            <div className="pt-4 grid grid-cols-2 gap-8 border-t border-zinc-100">
              <div>
                <div className="text-3xl font-serif font-bold text-rose-600 mb-1">99.8%</div>
                <div className="text-xs uppercase tracking-widest font-bold text-zinc-400">Analysis Precision</div>
              </div>
              <div>
                <div className="text-3xl font-serif font-bold text-rose-600 mb-1">2,400+</div>
                <div className="text-xs uppercase tracking-widest font-bold text-zinc-400">Exclusive Content</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
