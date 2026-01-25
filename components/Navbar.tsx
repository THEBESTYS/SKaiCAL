
import React, { useState } from 'react';
import { ViewType } from '../types.ts';
import { Search, User, ExternalLink, Sparkles, Award, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: ViewType) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'S-Lotte', view: ViewType.S_LOTTE },
    { label: 'L-Sphere', view: ViewType.L_SPHERE },
    { label: 'Certificates', view: ViewType.CERTIFICATES, icon: <Award size={14} /> },
  ];

  const handleNavigate = (view: ViewType) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full z-50 glass-effect border-b border-zinc-100">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <button 
          onClick={() => handleNavigate(ViewType.HOME)}
          className="text-2xl font-serif font-bold tracking-tighter flex items-center gap-2 group relative z-[60]"
        >
          <span className="text-rose-600 transition-transform group-hover:scale-110">Kai</span>
          <span className={`${isMenuOpen ? 'text-white md:text-zinc-900' : 'text-zinc-900'}`}>Culture Academy</span>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => onNavigate(item.view)}
              className={`text-sm font-medium tracking-wide transition-all flex items-center gap-1.5 ${currentView === item.view ? 'text-rose-600 font-bold' : 'text-zinc-500 hover:text-rose-600'}`}
            >
              {item.icon && React.cloneElement(item.icon as React.ReactElement, { 
                className: currentView === item.view ? 'text-rose-600' : 'text-zinc-400' 
              })}
              {item.label}
            </button>
          ))}
          
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
        <div className="flex items-center gap-4 md:gap-6 relative z-[60]">
          <button className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Search size={20} />
          </button>
          <button className="hidden sm:flex items-center gap-2 bg-zinc-900 text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-zinc-800 transition-all shadow-lg hover:shadow-zinc-200">
            <User size={14} />
            로그인
          </button>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden p-2 rounded-xl transition-all ${isMenuOpen ? 'text-white' : 'text-zinc-900 bg-zinc-50'}`}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 bg-zinc-950 z-50 transition-all duration-500 md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div className="flex flex-col h-full pt-32 pb-12 px-10">
          <nav className="flex flex-col gap-8">
            {navItems.map((item, i) => (
              <button
                key={item.label}
                onClick={() => handleNavigate(item.view)}
                className={`flex items-center justify-between group transition-all duration-500 delay-[${i * 100}ms] ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
              >
                <div className="flex items-center gap-4">
                    <span className={`text-4xl font-serif font-bold ${currentView === item.view ? 'text-rose-500' : 'text-white'}`}>
                        {item.label}
                    </span>
                </div>
                <ChevronRight size={24} className="text-zinc-700 group-hover:text-rose-500 transition-colors" />
              </button>
            ))}

            <a 
              href="https://www.youtube.com/imagineyourkorea" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`flex items-center justify-between group transition-all duration-500 delay-300 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}
            >
              <div className="flex items-center gap-4">
                <span className="text-4xl font-serif font-bold text-white">Imagine K</span>
                <Sparkles size={20} className="text-rose-500" />
              </div>
              <ExternalLink size={24} className="text-zinc-700" />
            </a>

            <button className={`text-left text-xl font-medium text-zinc-500 mt-4 transition-all duration-500 delay-400 ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              지점 안내
            </button>
          </nav>

          <div className={`mt-auto space-y-6 transition-all duration-500 delay-500 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button className="w-full bg-white text-zinc-950 py-5 rounded-2xl font-bold flex items-center justify-center gap-3 shadow-xl">
              <User size={20} />
              로그인하기
            </button>
            <div className="flex justify-center gap-8 text-zinc-500 text-xs font-bold uppercase tracking-widest">
              <span>Privacy</span>
              <span>Terms</span>
              <span>Support</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
