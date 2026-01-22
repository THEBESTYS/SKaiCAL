
import React from 'react';
import { ViewType } from '../types.ts';
import { Search, User, ExternalLink, Sparkles, Award } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => onNavigate(ViewType.HOME)}
          className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2 group"
        >
          <span className="text-rose-600 transition-transform group-hover:scale-110">Kai</span>
          <span className="text-zinc-900">Culture Academy</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          <button 
            onClick={() => onNavigate(ViewType.S_LOTTE)}
            className={`text-sm font-medium tracking-wide transition-all ${currentView === ViewType.S_LOTTE ? 'text-rose-600 font-bold' : 'text-zinc-500 hover:text-rose-600'}`}
          >
            S-Lotte
          </button>
          <button 
            onClick={() => onNavigate(ViewType.L_SPHERE)}
            className={`text-sm font-medium tracking-wide transition-all ${currentView === ViewType.L_SPHERE ? 'text-rose-600 font-bold' : 'text-zinc-500 hover:text-rose-600'}`}
          >
            L-Sphere
          </button>
          <button 
            onClick={() => onNavigate(ViewType.CERTIFICATES)}
            className={`text-sm font-medium tracking-wide transition-all flex items-center gap-1.5 ${currentView === ViewType.CERTIFICATES ? 'text-rose-600 font-bold' : 'text-zinc-500 hover:text-rose-600'}`}
          >
            <Award size={14} className={currentView === ViewType.CERTIFICATES ? 'text-rose-600' : 'text-zinc-400'} />
            Certificates
          </button>
          
          {/* Imagine K Link */}
          <a 
            href="https://www.youtube.com/imagineyourkorea" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-500 hover:text-rose-600 flex items-center gap-1.5 transition-colors group"
          >
            <Sparkles size={14} className="text-rose-500 group-hover:animate-pulse" />
            Imagine K
            <ExternalLink size={12} className="opacity-50" />
          </a>
          
          <button className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors">
            지점 안내
          </button>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden sm:flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-zinc-200">
            <User size={14} />
            로그인
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
