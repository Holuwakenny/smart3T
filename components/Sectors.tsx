
import React from 'react';

const services = [
  { title: "Foundation Engineering", desc: "Technical piling, raft foundations, and deep earth stabilization." },
  { title: "Civil Infrastructure", desc: "Shore protection, retaining systems, and bridge sub-structures." },
  { title: "Luxury Residential", desc: "End-to-end execution of bespoke luxury duplexes and apartments." },
  { title: "Structural Integrity", desc: "Comprehensive structural audits, testing, and reinforcement." },
  { title: "Project Management", desc: "Budget control, timeline optimization, and on-site oversight." },
  { title: "Turnkey Development", desc: "From technical drawing to keys-in-hand delivery." },
];

export const SectorsSection: React.FC = () => {
  return (
    // Fixed: Removed the redundant id="services" attribute to resolve JSX attribute duplication error
    <section id="services" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <span className="text-emerald-600 font-bold uppercase tracking-[0.4em] text-[10px] mb-4 block">Core Competencies</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tighter leading-tight">
            Specialized Services.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1px bg-zinc-200 border border-zinc-200">
          {services.map((s, i) => (
            <div key={i} className="bg-white p-10 hover:bg-emerald-600 transition-colors duration-500 group">
              <span className="text-emerald-600 group-hover:text-emerald-300 font-bold text-xs mb-6 block tracking-widest">0{i+1}</span>
              <h3 className="text-xl font-bold text-zinc-950 mb-4 group-hover:text-white transition-colors tracking-tight">{s.title}</h3>
              <p className="text-zinc-500 group-hover:text-emerald-50 text-sm leading-relaxed transition-colors">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
