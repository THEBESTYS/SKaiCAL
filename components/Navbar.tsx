
import React from 'react';
import { ViewType } from '../types';
import { Languages, Search, User, ExternalLink } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-zinc-100 transition-all duration-300">
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
            className={`text-sm font-medium transition-colors ${currentView === ViewType.S_LOTTE ? 'text-rose-600' : 'text-zinc-500 hover:text-rose-600'}`}
          >
            S-Lotte
          </button>
          <button 
            onClick={() => onNavigate(ViewType.L_SPHERE)}
            className={`text-sm font-medium transition-colors ${currentView === ViewType.L_SPHERE ? 'text-rose-600' : 'text-zinc-500 hover:text-rose-600'}`}
          >
            L-Sphere
          </button>
          
          {/* Imagine K Link */}
          <a 
            href="https://www.youtube.com/imagineyourkorea" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-zinc-500 hover:text-rose-600 flex items-center gap-1 transition-colors"
          >
            Imagine K
            <ExternalLink size={14} />
          </a>
          
          <button className="text-sm font-medium text-zinc-500 hover:text-rose-600 transition-colors">
            지점 안내
          </button>
        </nav>

        {/* Action Icons */}
        <div className="flex items-center gap-6">
          <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Search size={20} strokeWidth={2} />
          </button>
          <button className="hidden sm:flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-zinc-200">
            <User size={14} />
            로그인
          </button>
          {/* Mobile Menu Placeholder */}
          <button className="md:hidden text-zinc-900">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
