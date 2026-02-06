
import React from 'react';

export const Hero: React.FC = () => {
  const whatsappNumber = "2347033968785";
  const whatsappText = encodeURIComponent("Hello Smart 3T, I'd like to discuss a project and get a quote.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

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
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white font-bold uppercase tracking-widest text-xs transition-all flex items-center gap-2"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-emerald-400" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.05c0 2.12.554 4.189 1.607 6.01L0 24l6.135-1.61a11.81 11.81 0 005.91 1.586h.005c6.634 0 12.05-5.415 12.05-12.05a11.852 11.852 0 00-3.537-8.513z"/>
              </svg>
              Quick Chat
            </a>
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
