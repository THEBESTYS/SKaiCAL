
import React from 'react';
import { Sparkles, ShoppingBag, Music, Layout, ArrowUpRight, CheckCircle } from 'lucide-react';

const SLotteView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 pb-20">
      {/* Hero Header */}
      <header className="bg-zinc-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-rose-900/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-600 rounded-full text-[10px] font-bold uppercase tracking-widest mb-6">
            Tech Hub Strategy
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-6">
            Seoul Station Lotte
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-3xl leading-relaxed">
            KaiCA 에듀테크 안테나 숍: 롯데의 K-문화 교육 기술 허브 전략.<br />
            K-문화 콘텐츠를 에듀테크 기술로 접목하여 세계 최초의 "K-Culture EduTech" 선도기업으로 도약합니다.
          </p>
        </div>
      </header>

      {/* K-Beauty Edutech Zone */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-4xl font-bold tracking-tight text-zinc-900">
              K-Beauty × EdTech<br />
              <span className="text-rose-600">AR로 배우고, 면세점에서 만나다</span>
            </h2>
            <p className="text-lg text-zinc-500 font-light leading-relaxed">
              K-Beauty 에듀테크 존에서 AR 가상 메이크업을 체험하고, 학습을 완료하면 롯데 면세점 할인쿠폰을 받아보세요. 여행자를 위한 특별한 교육 패키지를 만나보세요.
            </p>
            
            <div className="space-y-4">
              {[
                { title: "K-Beauty 베이직", benefit: "15% 할인쿠폰", time: "30분" },
                { title: "스킨케어 마스터", benefit: "20% 할인쿠폰", time: "45분" },
                { title: "메이크업 프로", benefit: "30% 할인쿠폰", time: "60분" }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-6 border border-zinc-100 rounded-2xl hover:border-rose-200 hover:shadow-lg transition-all bg-white shadow-sm group">
                  <div>
                    <h4 className="font-bold text-zinc-900">{item.title}</h4>
                    <p className="text-sm text-zinc-400">{item.time} 소요</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-rose-600 font-bold">{item.benefit}</span>
                    <button className="p-2 bg-zinc-50 rounded-full group-hover:bg-rose-600 group-hover:text-white transition-all">
                      <ArrowUpRight size={20} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfac4033c8?q=80&w=2000&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-xl" alt="AR Makeup" />
              <div className="bg-rose-600 text-white p-8 rounded-3xl space-y-4 shadow-xl">
                <Layout size={32} />
                <h3 className="text-xl font-bold">AR 가상 메이크업 체험</h3>
                <p className="text-sm text-rose-100 font-light">최신 AR 기술로 50가지 이상의 립스틱 컬러를 가상으로 테스트해보세요.</p>
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="bg-zinc-100 p-8 rounded-3xl space-y-4 shadow-xl">
                <ShoppingBag size={32} className="text-rose-600" />
                <h3 className="text-xl font-bold">Rewards</h3>
                <ul className="text-sm space-y-2 text-zinc-500 font-medium">
                  <li>✨ 샘플 키트 증정</li>
                  <li>🎯 VIP 라운지 이용</li>
                  <li>💝 면세점 무료 배송</li>
                </ul>
              </div>
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop" className="rounded-3xl h-64 w-full object-cover shadow-xl" alt="Beauty Products" />
            </div>
          </div>
        </div>
      </section>

      {/* Lotte World x Edutech Section */}
      <section className="bg-zinc-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold tracking-tight text-zinc-900 mb-4">롯데월드 × 에듀테크 특별 제휴</h2>
            <p className="text-zinc-500 text-lg font-light">호텔 투숙과 함께 즐기는 프리미엄 K-문화 체험 패키지</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "미니 에듀테크 존", price: "₩89,000", desc: "호텔 내 전용 공간 K-문화 단기 교육" },
              { title: "교육 관광 베이직", price: "₩159,000", desc: "K-문화 교육 + 롯데월드 입장권 결합" },
              { title: "교육 관광 프리미엄", price: "₩349,000", desc: "1박 2일 숙박 + 완벽한 K-문화 체험" }
            ].map((pkg, i) => (
              <div key={i} className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-all border border-zinc-100">
                <h3 className="text-xl font-bold mb-2">{pkg.title}</h3>
                <div className="text-3xl font-bold text-rose-600 mb-6">{pkg.price}</div>
                <p className="text-zinc-500 mb-8 font-light leading-relaxed">{pkg.desc}</p>
                <button className="w-full py-4 border border-zinc-900 rounded-full hover:bg-zinc-900 hover:text-white transition-all font-medium">상담 신청하기</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Virtual Idol Training Section */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <div className="bg-zinc-900 rounded-[3rem] p-12 md:p-20 text-white flex flex-col lg:flex-row items-center gap-16 shadow-2xl overflow-hidden relative">
          <div className="absolute top-0 right-0 w-64 h-64 bg-rose-600 rounded-full filter blur-[100px] opacity-20 translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="lg:w-1/2 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 text-rose-400 text-sm font-bold uppercase tracking-widest">
              AI Training System
            </div>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tighter">
              가상 아이돌<br />트레이닝 시스템
            </h2>
            <p className="text-zinc-400 text-lg font-light leading-relaxed">
              AI 기반 보컬 코칭과 3D 모션 캡처 댄스 동작 분석으로 누구나 아이돌처럼 트레이닝할 수 있습니다. 실시간 피드백으로 꿈을 현실로 만드세요.
            </p>
            <ul className="space-y-4 text-sm font-medium">
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-rose-500" /> AI 보컬 코칭 (음정 분석 95% 정확도)</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-rose-500" /> 3D 모션 캡처 댄스 분석 (100+ 안무 패턴)</li>
              <li className="flex items-center gap-3"><CheckCircle size={18} className="text-rose-500" /> 개인 맞춤형 트레이닝 커리큘럼</li>
            </ul>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 relative z-10">
            <div className="space-y-4">
              <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10">
                <div className="text-3xl font-bold text-rose-500 mb-1">24/7</div>
                <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold">AI 보컬 코칭</div>
              </div>
              <img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2000&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover grayscale brightness-125" alt="Vocal Training" />
            </div>
            <div className="pt-12 space-y-4">
              <img src="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?q=80&w=2000&auto=format&fit=crop" className="rounded-2xl h-48 w-full object-cover" alt="Dance Training" />
              <div className="bg-rose-600 p-6 rounded-2xl">
                <Music size={32} className="mb-4" />
                <div className="text-xl font-bold">10K+</div>
                <div className="text-xs text-rose-100 uppercase tracking-widest font-bold">챌린지 참여자</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SLotteView;
