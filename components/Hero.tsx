
import React from 'react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen w-full flex items-center bg-zinc-950 overflow-hidden">
      {/* Background with Professional Depth */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/2b6c17154599049.6345578266f8d.jpg" 
          className="w-full h-full object-cover object-[70%_center]"
          alt="Smart 3T Project"
        />
        <div className="absolute inset-0 hero-overlay"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12">
        <div className="max-w-2xl">
          <div className="flex items-center gap-4 mb-8">
            <span className="h-0.5 w-12 bg-emerald-500"></span>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-emerald-400">Engineering Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight mb-8">
            Advanced Foundations <br/> 
            <span className="text-emerald-500">& Structural Works.</span>
          </h1>

          <p className="text-lg md:text-xl text-zinc-300 font-normal leading-relaxed mb-12 max-w-lg opacity-90">
            Smart 3T provides high-precision civil engineering solutions across Victoria Island. Specialized in piling, retaining walls, and luxury residential structures.
          </p>

          <div className="flex flex-wrap gap-5">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-10 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest text-xs transition-all shadow-xl shadow-emerald-900/20"
            >
              Our Site Works
            </button>
            <button 
              onClick={() => scrollTo('about')}
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-xs transition-all"
            >
              The VI Standard
            </button>
          </div>
        </div>
      </div>

      {/* Corporate Indicator */}
      <div className="absolute bottom-12 left-6 lg:left-12 flex flex-col items-start gap-4">
        <div className="flex gap-10">
          <div className="flex flex-col">
            <span className="text-white font-black text-2xl tracking-tighter">VI-Lagos</span>
            <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest">Operating Region</span>
          </div>
          <div className="flex flex-col border-l border-white/10 pl-10">
            <span className="text-white font-black text-2xl tracking-tighter">ISO-9001</span>
            <span className="text-[10px] text-emerald-400 uppercase font-bold tracking-widest">Quality Standard</span>
          </div>
        </div>
      </div>
    </section>
  );
};
