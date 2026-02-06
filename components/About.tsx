
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <img 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/f03540154599049.67a6591e4fd9b.jpg" 
                className="w-full aspect-[3/4] object-cover rounded-sm shadow-sm"
                alt="Architecture"
              />
              <img 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/ff34f1154599049.63455782555fb.jpg" 
                className="w-full aspect-square object-cover rounded-sm shadow-sm"
                alt="Foundation"
              />
            </div>
            <div className="pt-12 space-y-4">
              <img 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/949947154599049.63455782711e1.jpg" 
                className="w-full aspect-square object-cover rounded-sm shadow-sm"
                alt="Process"
              />
              <img 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/fs_webp/5a0259154599049.634557825904c.jpg" 
                className="w-full aspect-[3/4] object-cover rounded-sm shadow-sm"
                alt="Design"
              />
            </div>
          </div>
          
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-px bg-emerald-600"></span>
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-emerald-600">Established 2012</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-950 tracking-tighter leading-tight mb-8">
              A Legacy Built on <br/> Structural Integrity.
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-normal">
              <p>
                Smart 3T Construction Limited is a premier engineering firm based in Victoria Island, Lagos. We specialize in the "hidden" engineering that keeps Lagos standing—from technical piling to structural shore protection.
              </p>
              <p className="text-base text-zinc-500">
                Our team combines decades of on-site experience with advanced structural analysis to deliver foundations for everything from luxury duplexes to complex commercial frameworks.
              </p>
            </div>
            
            <div className="mt-10 p-6 bg-zinc-50 border border-zinc-100 flex items-center gap-6">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold italic text-xl">S3T</div>
              <div>
                <p className="text-sm font-bold text-zinc-950">Project Management Excellence</p>
                <p className="text-xs text-zinc-500">We manage every lifecycle phase with precision.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
