
import React from 'react';

const siteLogs = [
  {
    title: "Asphalt Finishing Phase",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b267cb243681857.69865576db8a1.jpeg",
    location: "Main Industrial Corridor",
    desc: "Final surface laying using high-precision paver technology for industrial load endurance."
  },
  {
    title: "Drainage & Sub-Base Work",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/50681b243681857.69865576dd86b.jpeg",
    location: "Lekki Extension",
    desc: "Critical sub-surface drainage installation ensuring long-term road lifecycle integrity."
  },
  {
    title: "Heavy-Duty Soil Compaction",
    img: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/8c4f92243681857.69865576db381.jpeg",
    location: "Commercial Hub Access",
    desc: "Multi-layered vibratory compaction to achieve specified soil bearing capacity."
  }
];

export const SiteUpdates: React.FC = () => {
  return (
    <section className="py-32 bg-zinc-50" id="updates">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] text-emerald-600 mb-4 block">Active Projects</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-950 tracking-tighter">Field Intelligence Logs.</h2>
          </div>
          <p className="text-zinc-500 text-sm font-light uppercase tracking-widest border-l border-zinc-200 pl-8">
            Live Site Execution Data <br/> Updated 16/01/2026
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteLogs.map((log, i) => (
            <div key={i} className="bg-white border border-zinc-200 rounded-sm overflow-hidden group hover:shadow-2xl transition-all duration-500">
              <div className="aspect-[4/3] overflow-hidden relative">
                <img src={log.img} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt={log.title} />
                <div className="absolute inset-0 bg-zinc-950/20 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-white px-2 py-1 text-[8px] font-black uppercase tracking-widest text-zinc-950 shadow-sm">{log.location}</span>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-xl font-bold text-zinc-900 mb-4 tracking-tight">{log.title}</h3>
                <p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">{log.desc}</p>
                <div className="flex items-center justify-between pt-6 border-t border-zinc-50">
                   <div className="flex items-center gap-2">
                     <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></div>
                     <span className="text-[9px] font-bold text-emerald-600 uppercase tracking-widest">Active Execution</span>
                   </div>
                   <button className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-emerald-600 transition-colors">Project Log →</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
