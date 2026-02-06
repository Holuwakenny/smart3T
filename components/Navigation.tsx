
import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 w-[95%] max-w-6xl ${
      isScrolled 
      ? 'bg-white/80 backdrop-blur-xl border border-zinc-200/50 py-3 shadow-lg rounded-2xl' 
      : 'bg-transparent py-4'
    }`}>
      <div className="px-8 flex justify-between items-center">
        <div 
          className="flex items-center gap-3 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-10 h-10 bg-zinc-950 flex items-center justify-center rounded-xl transition-all group-hover:bg-emerald-600 group-hover:rotate-[15deg]">
            <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
          </div>
          <div className="flex flex-col">
            <span className={`text-xl font-black tracking-tighter transition-colors ${isScrolled ? 'text-zinc-950' : 'text-white'}`}>SMART 3T</span>
            <span className={`text-[8px] font-bold tracking-[0.4em] uppercase transition-colors ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`}>Engineering</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-10 text-[10px] font-black uppercase tracking-[0.2em] ${isScrolled ? 'text-zinc-600' : 'text-zinc-300'}`}>
          {['about', 'services', 'projects', 'contact'].map(item => (
            <button key={item} onClick={() => scrollTo(item)} className="hover:text-emerald-500 transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-emerald-500 transition-all group-hover:w-full"></span>
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className={`px-6 py-3 text-[10px] font-black uppercase tracking-widest transition-all rounded-xl ${
            isScrolled 
            ? 'bg-zinc-950 text-white hover:bg-emerald-600 shadow-xl shadow-zinc-900/10' 
            : 'bg-white text-zinc-950 hover:bg-emerald-500 hover:text-white'
          }`}
        >
          Get Quote
        </button>
      </div>
    </nav>
  );
};
