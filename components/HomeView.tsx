
import React from 'react';
import { ViewType } from '../types';
import { ArrowRight, Sparkles } from 'lucide-react';

interface HomeViewProps {
  onNavigate: (view: ViewType) => void;
}

const HomeView: React.FC<HomeViewProps> = ({ onNavigate }) => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=2837&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="K-Culture Aesthetic"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 text-rose-600 rounded-full text-xs font-bold uppercase tracking-widest border border-rose-100">
              <Sparkles size={14} />
              The Future of K-Culture
            </div>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter leading-tight text-zinc-900">
              일상의 품격을<br />
              <span className="italic font-normal text-rose-600">AI</span>로 디자인하다
            </h1>
            <p className="text-xl text-zinc-600 font-light leading-relaxed max-w-lg">
              Kai Culture Academy는 한국의 미학에 현대 기술을 더했습니다. 
              S-Lotte의 기술 허브와 L-Sphere의 혁신 공간에서 미래를 경험하세요.
            </p>
            <div className="flex gap-4">
              <button 
                onClick={() => onNavigate(ViewType.S_LOTTE)}
                className="bg-zinc-900 text-white px-8 py-4 rounded-full font-medium flex items-center gap-2 hover:bg-zinc-800 transition-all shadow-xl"
              >
                S-Lotte 경험하기 <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => onNavigate(ViewType.L_SPHERE)}
                className="bg-white text-zinc-900 px-8 py-4 rounded-full font-medium border border-zinc-200 hover:bg-zinc-50 transition-all shadow-sm"
              >
                L-Sphere 투어
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-serif font-bold tracking-tight">AI 기반 퍼스널 큐레이션</h2>
            <p className="text-lg text-zinc-500 font-light leading-8">
              당신의 학습 패턴과 취향을 분석하여 최적의 클래스를 추천합니다. 
              K-Beauty부터 K-Pop 댄스 트레이닝까지, 오직 당신만을 위한 커리큘럼이 준비되어 있습니다.
            </p>
            <button className="text-rose-600 font-semibold flex items-center gap-1 group">
              자세히 알아보기 <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="aspect-square bg-zinc-100 rounded-3xl overflow-hidden shadow-2xl">
            <img src="https://images.unsplash.com/photo-1544967082-d9d25d867d66?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="AI Curation" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;
