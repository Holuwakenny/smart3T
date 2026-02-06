
import React from 'react';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:h-screen w-full flex items-center bg-zinc-950 overflow-hidden">
      {/* Background with Contrast Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/2b6c17154599049.6345578266f8d.jpg" 
          className="w-full h-full object-cover object-center"
          alt="Smart 3T Landmark"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="max-w-2xl lg:pt-20">
          <div className="flex items-center gap-3 mb-6">
            <span className="w-8 h-px bg-emerald-500"></span>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-400">Victoria Island, Lagos</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight tracking-tighter mb-6 text-balance">
            Building Infrastructure <br/> 
            <span className="text-emerald-500">With Precision.</span>
          </h1>

          <p className="text-base md:text-xl text-zinc-300 font-light leading-relaxed mb-10 max-w-lg">
            Specialized engineering solutions for luxury foundations, complex retaining walls, and civil infrastructure. We provide technical mastery where it matters most.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollTo('projects')}
              className="px-8 py-4 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest text-[11px] transition-all"
            >
              Our Site Works
            </button>
            <button 
              onClick={() => scrollTo('services')}
              className="px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold uppercase tracking-widest text-[11px] transition-all"
            >
              View Services
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar (Desktop Only) */}
      <div className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 hidden lg:block">
        <div className="max-w-7xl mx-auto px-6 py-8 flex gap-20">
          {[
            { label: "Completed Projects", value: "150+" },
            { label: "Years Experience", value: "12+" },
            { label: "Engineering Experts", value: "45" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-2xl font-bold text-white tracking-tighter">{stat.value}</span>
              <span className="text-[9px] font-bold uppercase tracking-widest text-zinc-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
