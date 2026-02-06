
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-emerald-950 text-white pt-32 pb-12 relative overflow-hidden">
      {/* Abstract Grid Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', backgroundSize: '50px 50px' }}></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-24 border-b border-white/10">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-10">
              <div className="w-12 h-12 bg-emerald-500 rounded-sm flex items-center justify-center">
                 <div className="w-6 h-6 border-2 border-white"></div>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-black tracking-tighter">SMART 3T</span>
                <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-emerald-400">Construction</span>
              </div>
            </div>
            <p className="text-emerald-100/60 text-lg font-light leading-relaxed max-w-sm mb-12">
              The gold standard for civil engineering and luxury developments in Victoria Island, Lagos.
            </p>
            
            <div className="flex gap-4">
               {['LN', 'FB', 'TW', 'IG'].map(s => (
                 <div key={s} className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all cursor-pointer font-black text-xs text-white/50 hover:text-white">{s}</div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-3">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8">Navigation</h4>
             <ul className="space-y-4 text-sm font-bold text-white/70 uppercase tracking-widest">
               <li><button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-emerald-400 transition-colors">Home</button></li>
               <li><button onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} className="hover:text-emerald-400 transition-colors">Profile</button></li>
               <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})} className="hover:text-emerald-400 transition-colors">Site Works</button></li>
               <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-emerald-400 transition-colors">Services</button></li>
             </ul>
          </div>

          <div className="lg:col-span-4">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8">Headquarters</h4>
             <div className="space-y-8">
               <div className="flex gap-6">
                 <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center shrink-0">📍</div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Office</p>
                    <p className="text-lg font-light">Victoria Island, Lagos, Nigeria</p>
                 </div>
               </div>
               <div className="flex gap-6">
                 <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center shrink-0">📞</div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Direct Line</p>
                    <p className="text-lg font-bold">+234 703 396 8785</p>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/20 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Smart 3T Construction Limited. All Rights Reserved.
          </p>
          <p className="text-emerald-100/20 text-[10px] font-black uppercase tracking-widest">
            Excellence Built on Integrity
          </p>
        </div>
      </div>
      
      {/* Floating CTA for Mobile/Global */}
      <button 
        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
        className="fixed bottom-8 right-8 z-[90] w-16 h-16 bg-emerald-600 text-white rounded-sm shadow-2xl flex items-center justify-center hover:bg-emerald-500 transition-all hover:-translate-y-2 group"
      >
        <span className="text-xl group-hover:scale-125 transition-transform">✉️</span>
      </button>
    </footer>
  );
};
