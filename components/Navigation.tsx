
import React, { useState, useEffect } from 'react';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md border-b border-zinc-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div 
          className="flex items-center gap-2.5 cursor-pointer group"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-8 h-8 bg-zinc-950 flex items-center justify-center transition-transform group-hover:rotate-45">
            <div className="w-4 h-4 border border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className={`text-lg font-extrabold tracking-tighter transition-colors ${isScrolled ? 'text-zinc-950' : 'text-white'}`}>SMART 3T</span>
            <span className={`text-[8px] font-bold tracking-[0.4em] uppercase transition-colors ${isScrolled ? 'text-emerald-600' : 'text-emerald-400'}`}>Engineering</span>
          </div>
        </div>

        <div className={`hidden md:flex items-center gap-8 text-[10px] font-bold uppercase tracking-widest ${isScrolled ? 'text-zinc-600' : 'text-zinc-300'}`}>
          {['about', 'services', 'projects', 'contact'].map(item => (
            <button key={item} onClick={() => scrollTo(item)} className="hover:text-emerald-500 transition-colors">
              {item}
            </button>
          ))}
        </div>

        <button 
          onClick={() => scrollTo('contact')}
          className={`px-5 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all ${
            isScrolled 
            ? 'bg-zinc-950 text-white hover:bg-emerald-600' 
            : 'bg-white text-zinc-950 hover:bg-emerald-500 hover:text-white'
          }`}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};
