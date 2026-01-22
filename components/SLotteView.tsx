
import React from 'react';
// Added Sparkles to the imported icons
import { ShoppingBag, Music, Layout, ArrowUpRight, CheckCircle, Smartphone, Sparkles } from 'lucide-react';

const SLotteView: React.FC = () => {
  return (
    <div className="animate-in fade-in slide-in-from-bottom-6 duration-1000 pb-32 pt-20">
      {/* Premium Header */}
      <header className="bg-zinc-950 text-white py-32 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full lg:w-2/3 h-full opacity-30">
            <img src="https://images.unsplash.com/photo-1578916171728-46686eac8d58?q=80&w=2000&auto=format&fit=crop" className="w-full h-full object-cover" alt="Seoul Lotte" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/80 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-rose-600 rounded-full text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            Strategic Tech Hub
          </div>
          <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-8 leading-tight">
            Seoul Station <br /><span className="text-rose-600">Lotte Hub</span>
          </h1>
          <p className="text-2xl md:text-3xl text-zinc-400 font-light max-w-4xl leading-relaxed">
            <span className="text-white font-medium">KaiCA 에듀테크 안테나 숍:</span> 롯데의 K-문화 교육 기술 허브 전략.<br />
            에듀테크 기술을 접목하여 세계 최초의 <span className="text-rose-500">"K-Culture EduTech"</span> 선도기업으로 도약합니다.
          </p>
        </div>
      </header>

      {/* K-Beauty Edutech Zone */}
      <section className="py-32 max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-10">
            <div className="space-y-4">
                <h2 className="text-5xl font-bold tracking-tight text-zinc-900 leading-tight">
                    K-Beauty × EdTech<br />
                    <span className="text-rose-600 font-serif italic font-normal">AR로 배우는 내일의 아름다움</span>
                </h2>
                <div className="w-20 h-1 bg-rose-600"></div>
            </div>
            <p className="text-xl text-zinc-500 font-light leading-relaxed">
              K-Beauty 에듀테크 존에서 AR 가상 메이크업을 체험하고, 학습을 완료하면 롯데 면세점 할인쿠폰을 받아보세요. 여행과 교육이 만나는 새로운 경험을 제공합니다.
            </p>
            
            <div className="grid gap-4">
              {[
                { title: "K-Beauty 베이직", benefit: "15% 할인쿠폰", icon: <Smartphone className="text-rose-500" /> },
                { title: "스킨케어 마스터", benefit: "20% 할인쿠폰", icon: <CheckCircle className="text-rose-500" /> },
                { title: "메이크업 프로", benefit: "30% 할인쿠폰", icon: <Sparkles className="text-rose-500" /> }
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-7 border border-zinc-100 rounded-3xl hover:border-rose-200 hover:shadow-2xl transition-all bg-white group cursor-pointer">
                  <div className="flex items-center gap-5">
                    <div className="p-3 bg-rose-50 rounded-2xl group-hover:bg-rose-600 group-hover:text-white transition-all">
                        {item.icon}
                    </div>
                    <h4 className="text-lg font-bold text-zinc-900">{item.title}</h4>
                  </div>
                  <div className="text-rose-600 font-bold tracking-tighter">{item.benefit}</div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-2 gap-6 relative">
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-rose-200 filter blur-[100px] opacity-30"></div>
            <div className="space-y-6 pt-12">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfac4033c8?q=80&w=2000&auto=format&fit=crop" className="rounded-[2rem] h-80 w-full object-cover shadow-2xl ai-glow" alt="AR Makeup" />
              <div className="bg-zinc-900 text-white p-8 rounded-[2rem] shadow-xl">
                <Layout size={32} className="text-rose-600 mb-4" />
                <h3 className="text-xl font-bold mb-2">AR 가상 체험</h3>
                <p className="text-sm text-zinc-400 font-light leading-relaxed">최신 AR 기술로 50가지 이상의 뷰티 컬러를 실시간으로 테스트합니다.</p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-rose-600 text-white p-8 rounded-[2rem] shadow-xl">
                <ShoppingBag size={32} className="mb-4" />
                <h3 className="text-xl font-bold mb-2">Rewards</h3>
                <ul className="text-sm space-y-2 opacity-90 font-light">
                  <li>• 전용 샘플 키트</li>
                  <li>• VIP 라운지 패스</li>
                  <li>• 무료 배송 서비스</li>
                </ul>
              </div>
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=2000&auto=format&fit=crop" className="rounded-[2rem] h-80 w-full object-cover shadow-2xl" alt="Beauty Products" />
            </div>
          </div>
        </div>
      </section>

      {/* Lotte World x Edutech Section */}
      <section className="bg-zinc-50 py-32 border-y border-zinc-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
            <h2 className="text-5xl font-serif font-bold tracking-tight text-zinc-900">Lotte World × Edutech</h2>
            <p className="text-zinc-500 text-xl font-light leading-relaxed">
              호텔 투숙과 함께 즐기는 프리미엄 K-문화 체험 패키지.<br />
              놀이와 학습의 경계를 허무는 롯데만의 독창적인 교육 관광 모델입니다.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { title: "미니 에듀테크 존", price: "₩89,000", desc: "호텔 내 전용 공간에서 즐기는 K-문화 단기 교육 클래스" },
              { title: "교육 관광 베이직", price: "₩159,000", desc: "K-문화 맞춤 교육 프로그램 + 롯데월드 어드벤처 입장권" },
              { title: "교육 관광 프리미엄", price: "₩349,000", desc: "1박 2일 호텔 숙박 + 심화 교육 코스 + VIP 서비스" }
            ].map((pkg, i) => (
              <div key={i} className="bg-white p-12 rounded-[2.5rem] shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all border border-zinc-100 flex flex-col group">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-rose-600 transition-colors">{pkg.title}</h3>
                <div className="text-4xl font-serif font-bold text-zinc-900 mb-6">{pkg.price}</div>
                <p className="text-zinc-500 mb-10 font-light leading-relaxed flex-grow">{pkg.desc}</p>
                <button className="w-full py-5 bg-zinc-950 text-white rounded-full hover:bg-rose-600 transition-all font-bold tracking-wide">예약하기</button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SLotteView;
