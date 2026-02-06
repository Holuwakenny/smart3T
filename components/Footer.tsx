
import React from 'react';

export const Footer: React.FC = () => {
  const whatsappNumber = "2347033968785";
  const whatsappText = encodeURIComponent("Hello Smart 3T Construction, I'd like to talk about a project.");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

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
               {['LinkedIn', 'Facebook', 'Twitter', 'Instagram'].map(s => (
                 <div key={s} className="w-12 h-12 rounded-sm border border-white/10 flex items-center justify-center hover:bg-emerald-500 hover:border-emerald-500 transition-all cursor-pointer font-black text-[10px] text-white/50 hover:text-white uppercase tracking-tighter">{s.substring(0,2)}</div>
               ))}
            </div>
          </div>

          <div className="lg:col-span-3">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8">Navigation</h4>
             <ul className="space-y-4 text-sm font-bold text-white/70 uppercase tracking-widest">
               <li><button onClick={() => window.scrollTo({top:0, behavior:'smooth'})} className="hover:text-emerald-400 transition-colors text-left">Home</button></li>
               <li><button onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})} className="hover:text-emerald-400 transition-colors text-left">Profile</button></li>
               <li><button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior:'smooth'})} className="hover:text-emerald-400 transition-colors text-left">Site Works</button></li>
               <li><button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="hover:text-emerald-400 transition-colors text-left">Services</button></li>
             </ul>
          </div>

          <div className="lg:col-span-4">
             <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-emerald-500 mb-8">Headquarters</h4>
             <div className="space-y-8">
               <a 
                 href="https://www.google.com/maps/search/Victoria+Island+Lagos" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="flex gap-6 group"
               >
                 <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-emerald-500 transition-colors">📍</div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Office</p>
                    <p className="text-lg font-light group-hover:text-emerald-400 transition-colors">Victoria Island, Lagos, Nigeria</p>
                 </div>
               </a>
               <div className="flex gap-6 group">
                 <div className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center shrink-0 group-hover:border-emerald-500 transition-colors">📞</div>
                 <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-emerald-400 mb-1">Direct Line</p>
                    <div className="flex flex-col">
                      <a href={`tel:+${whatsappNumber}`} className="text-lg font-bold hover:text-emerald-400 transition-colors">+234 703 396 8785</a>
                      <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-xs text-emerald-500 font-bold uppercase tracking-widest mt-1 hover:underline">Chat on WhatsApp</a>
                    </div>
                 </div>
               </div>
             </div>
          </div>
        </div>

        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-emerald-100/20 text-[10px] font-black uppercase tracking-widest">
            © {new Date().getFullYear()} Smart 3T Construction Limited. All Rights Reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
            <p className="text-emerald-100/20 text-[10px] font-black uppercase tracking-widest">
              Available for site consultation
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
