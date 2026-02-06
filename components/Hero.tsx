
import React from 'react';

export const Hero: React.FC = () => {
  const whatsappNumber = "2347033968785";
  const whatsappText = encodeURIComponent("Hello Smart 3T Construction, I'd like to discuss an infrastructure/road project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <section className="relative h-screen w-full flex items-center bg-zinc-950 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/e4f74c243681857.698653864cac9.jpeg" 
          className="w-full h-full object-cover opacity-60"
          alt="Major Road Infrastructure"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 via-zinc-950/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 pt-20">
        <div className="max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-12 bg-emerald-500"></div>
            <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-emerald-400">Road Networks • Foundations • Structures</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[9rem] font-black text-white leading-[0.85] tracking-tighter mb-10">
            Precision <br/>
            <span className="text-emerald-500 italic">Infrastructure.</span>
          </h1>

          <p className="text-xl md:text-2xl text-zinc-400 font-light leading-relaxed mb-12 max-w-2xl">
            Smart 3T Construction Limited specializes in heavy-duty road networks, industrial corridors, and luxury structural engineering. We build the backbone of modern Nigeria.
          </p>

          <div className="flex flex-wrap gap-6">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}
              className="px-10 py-5 bg-emerald-600 hover:bg-emerald-500 text-white font-bold uppercase tracking-widest text-[11px] transition-all rounded-sm shadow-2xl shadow-emerald-900/20"
            >
              Corporate Profile
            </button>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 border border-white/20 text-white hover:bg-white hover:text-zinc-950 font-bold uppercase tracking-widest text-[11px] transition-all rounded-sm flex items-center gap-3"
            >
              Direct Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
