
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
    cat: "Technical Support"
  },
  { 
    title: "5-Bedroom Foundation", 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ff34f1154599049.63455782555fb.jpg",
    cat: "Luxury Residential"
  },
  { 
    title: "Piling & Stabilization", 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/949947154599049.63455782711e1.jpg",
    cat: "Engineering"
  },
  { 
    title: "Structural Framework", 
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/dc39f6154599049.6345578266050.jpg",
    cat: "Civil Works"
  }
];

export const GallerySection: React.FC = () => {
  const [tab, setTab] = useState<'site' | 'designs'>('site');

  return (
    <section id="projects" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-xl">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Our Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight">
              Site Execution & <br/> Architectural Design.
            </h2>
          </div>
          
          <div className="flex p-1.5 bg-white/5 border border-white/10 rounded-xl">
            <button 
              onClick={() => setTab('site')}
              className={`px-8 py-3 text-[11px] font-bold uppercase tracking-widest transition-all rounded-lg ${tab === 'site' ? 'bg-emerald-600 text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              Site Works
            </button>
            <button 
              onClick={() => setTab('designs')}
              className={`px-8 py-3 text-[11px] font-bold uppercase tracking-widest transition-all rounded-lg ${tab === 'designs' ? 'bg-emerald-600 text-white' : 'text-zinc-500 hover:text-white'}`}
            >
              Design Renders
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {(tab === 'site' ? siteWorks : designPhotos.map(p => ({ img: p, title: "Modern Design Concept", cat: "Architectural" }))).map((item, idx) => (
            <div key={idx} className="group relative bg-zinc-900 overflow-hidden border border-white/5 rounded-2xl aspect-[4/5]">
              <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-80 group-hover:opacity-100" />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent p-8 flex flex-col justify-end">
                <span className="text-emerald-400 text-[9px] font-black uppercase tracking-widest mb-2">{item.cat}</span>
                <h3 className="text-white text-xl font-bold tracking-tight">{item.title}</h3>
                <div className="h-0 group-hover:h-8 transition-all duration-300 opacity-0 group-hover:opacity-100 mt-4 overflow-hidden">
                   <button className="text-emerald-500 text-[10px] font-black uppercase tracking-widest">View Details →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
