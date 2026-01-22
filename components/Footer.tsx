
import React from 'react';
import { ViewType } from '../types.ts';

interface FooterProps {
  onNavigate: (view: ViewType) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-zinc-950 text-zinc-500 py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="text-white font-serif text-3xl font-bold tracking-tighter">
              <span className="text-rose-600">Kai</span> Culture Academy
            </div>
            <p className="text-lg leading-relaxed max-w-md font-light">
              일상의 깊이를 더하는 예술적인 에듀테크.<br />
              카이 컬처 아카데미는 한국의 미와 미래 기술을 연결하여 당신의 삶을 더욱 가치 있게 디자인합니다.
            </p>
          </div>
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Platform</h4>
            <ul className="space-y-5 text-sm">
              <li><button onClick={() => onNavigate(ViewType.HOME)} className="hover:text-rose-500 transition-colors">Home Overview</button></li>
              <li><button onClick={() => onNavigate(ViewType.S_LOTTE)} className="hover:text-rose-500 transition-colors">S-Lotte Hub</button></li>
              <li><button onClick={() => onNavigate(ViewType.L_SPHERE)} className="hover:text-rose-500 transition-colors">L-Sphere Space</button></li>
              <li><a href="https://www.youtube.com/imagineyourkorea" target="_blank" rel="noreferrer" className="hover:text-rose-500 transition-colors">Imagine K</a></li>
            </ul>
          </div>
          <div className="space-y-8">
            <h4 className="text-white font-bold text-sm uppercase tracking-[0.2em]">Connect</h4>
            <ul className="space-y-5 text-sm">
              <li><button className="hover:text-rose-500 transition-colors">Global Network</button></li>
              <li><button className="hover:text-rose-500 transition-colors">B2B Solutions</button></li>
              <li><button className="hover:text-rose-500 transition-colors">Support Center</button></li>
            </ul>
          </div>
        </div>
        <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-xs font-light">© 2024 Kai Culture Academy. Designed for K-Culture AI.</div>
          <div className="flex gap-10 text-[10px] font-bold uppercase tracking-widest">
            <button className="hover:text-white transition-colors">Terms of Service</button>
            <button className="hover:text-white transition-colors text-rose-500">Privacy Policy</button>
            <button className="hover:text-white transition-colors">Cookie Settings</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
