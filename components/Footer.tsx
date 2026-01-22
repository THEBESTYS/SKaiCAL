
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-500 py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="text-white font-serif text-2xl font-bold mb-6">
              <span className="text-rose-600">Kai</span> Culture Academy
            </div>
            <p className="text-sm leading-relaxed max-w-sm font-light">
              카이 컬처 아카데미는 일상을 예술로 만드는 프리미엄 문화 공간입니다. 
              롯데ON의 큐레이션과 에듀테크 기술이 만나 당신의 라이프스타일을 완성합니다.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Experience</h4>
            <ul className="space-y-4 text-sm">
              <li><button className="hover:text-white transition-colors">S-Lotte Hub</button></li>
              <li><button className="hover:text-white transition-colors">L-Sphere Space</button></li>
              <li><button className="hover:text-white transition-colors">Imagine K</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-6 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-sm">
              <li><button className="hover:text-white transition-colors">지점 안내</button></li>
              <li><button className="hover:text-white transition-colors">기업 솔루션</button></li>
              <li><button className="hover:text-white transition-colors">문의하기</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs">© 2024 Kai Culture Academy. All rights reserved.</div>
          <div className="flex gap-8 text-xs">
            <button className="hover:text-white">이용약관</button>
            <button className="hover:text-white font-bold">개인정보처리방침</button>
            <button className="hover:text-white">쿠키 정책</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
