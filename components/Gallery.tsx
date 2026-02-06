
import React, { useState } from 'react';

const designLinks = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_632_webp/f698e2154599049.67a6591e50300.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/f03540154599049.67a6591e4fd9b.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/5a0259154599049.634557825904c.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/405e12154599049.634557825e3f3.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/435016154599049.634557825b1c7.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/531c49154599049.634557826b2cf.jpg"
];

const siteWorkLinks = [
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f6a66a243681857.69865576dd1a3.jpeg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5e386b243681857.69865576de811.jpeg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/97bea9243681857.69865576dc29c.jpeg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/288260243681857.69865576de1c0.jpeg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/949947154599049.63455782711e1.jpg",
  "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5d84de243681857.69865576df1bd.jpeg"
];

export const GallerySection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'designs' | 'site'>('designs');
  const currentImages = activeTab === 'designs' ? designLinks : siteWorkLinks;

  return (
    <section id="projects" className="py-32 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-12">
          <div className="max-w-2xl">
            <span className="text-emerald-500 font-bold uppercase tracking-[0.4em] text-[10px] mb-6 block">Visual Archive</span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-none">
              Built To <br/> <span className="text-emerald-500 italic">Specification.</span>
            </h2>
          </div>
          
          <div className="flex p-1.5 bg-white/5 border border-white/10 rounded-sm">
            <button 
              onClick={() => setActiveTab('designs')}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'designs' ? 'bg-emerald-600 text-white shadow-xl' : 'text-zinc-500 hover:text-white'}`}
            >
              Architectural Visions
            </button>
            <button 
              onClick={() => setActiveTab('site')}
              className={`px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] transition-all ${activeTab === 'site' ? 'bg-emerald-600 text-white shadow-xl' : 'text-zinc-500 hover:text-white'}`}
            >
              Field Engineering
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentImages.map((link, idx) => (
            <div key={idx} className="aspect-square bg-zinc-900 overflow-hidden rounded-sm group relative">
              <img 
                src={link} 
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-all duration-1000 group-hover:scale-105" 
                alt={`Smart 3T Technical Asset ${idx + 1}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-8 flex flex-col justify-end">
                 <p className="text-white text-xs font-black uppercase tracking-widest">{activeTab === 'designs' ? 'Conceptual Framework' : 'Industrial Execution'}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 pt-16 border-t border-white/5 flex flex-wrap items-center justify-between gap-12 opacity-10 grayscale select-none">
           {['CATERPILLAR', 'LIUGONG', 'MERCEDES-BENZ', 'JCB', 'HITACHI', 'WIRTGEN'].map(brand => (
             <span key={brand} className="text-2xl font-black tracking-tighter text-white uppercase italic">{brand}</span>
           ))}
        </div>
      </div>
    </section>
  );
};
