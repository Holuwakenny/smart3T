
import React, { useState } from 'react';

const designPhotos = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/f698e2154599049.67a6591e50300.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/405e12154599049.634557825e3f3.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/435016154599049.634557825b1c7.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/531c49154599049.634557826b2cf.jpg"
];

const siteWorks = [
  { 
    title: "Retaining Wall Systems", 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd_webp/98a6f7154599049.6345578257224.jpg",
    cat: "Civil Works"
  },
  { 
    title: "5-Bedroom Foundation", 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ff34f1154599049.63455782555fb.jpg",
    cat: "Residential"
  },
  { 
    title: "Pile Foundation Phase", 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/949947154599049.63455782711e1.jpg",
    cat: "Engineering"
  },
  { 
    title: "Main Structural Frame", 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/dc39f6154599049.6345578266050.jpg",
    cat: "Infrastructure"
  }
];

export const GallerySection: React.FC = () => {
  const [tab, setTab] = useState<'site' | 'designs'>('site');

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tighter leading-tight">
              Executing Visions <br/> Into Reality.
            </h2>
          </div>
          
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-lg">
            {['site', 'designs'].map((t) => (
              <button 
                key={t}
                onClick={() => setTab(t as any)}
                className={`px-6 py-2.5 text-[10px] font-bold uppercase tracking-widest transition-all rounded-md ${tab === t ? 'bg-emerald-600 text-white shadow-lg' : 'text-zinc-500 hover:text-white'}`}
              >
                {t === 'site' ? 'Site Execution' : 'Project Designs'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {(tab === 'site' ? siteWorks : designPhotos.map(p => ({ img: p, title: "Architectural Concept", cat: "Design" }))).map((item, idx) => (
            <div key={idx} className="group relative aspect-[3/4] overflow-hidden bg-zinc-900 border border-white/5">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 group-hover:opacity-80 transition-opacity flex flex-col justify-end p-6">
                <span className="text-emerald-500 text-[9px] font-black uppercase tracking-widest mb-1">{item.cat}</span>
                <h3 className="text-white text-lg font-bold tracking-tight">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="text-zinc-400 hover:text-white transition-colors text-xs font-bold uppercase tracking-widest border-b border-zinc-800 pb-1">
            View Complete Archive
          </button>
        </div>
      </div>
    </section>
  );
};
