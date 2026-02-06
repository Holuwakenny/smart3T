
import React from 'react';

export const AboutSection: React.FC = () => {
  return (
    <section className="py-32 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1">
            <div className="inline-block px-4 py-1.5 bg-zinc-950 text-white rounded-sm mb-8">
              <span className="text-[9px] font-black uppercase tracking-[0.4em]">Company Profile</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-zinc-950 tracking-tighter leading-none mb-10">
              Technical Authority in <br/>
              <span className="text-emerald-600">Civil Infrastructure.</span>
            </h2>
            <div className="space-y-6 text-zinc-600 text-lg leading-relaxed font-light">
              <p>
                Smart 3T Construction Limited stands at the forefront of Nigerian civil engineering, delivering complex infrastructure projects with unmatched precision. From the heart of Victoria Island to the industrial zones of Lekki, we define high-performance construction.
              </p>
              <p>
                Our core mastery includes full-scale road network development, advanced asphalt technology, and deep-soil stabilization. By owning our entire logistics chain and heavy machinery fleet, we provide a level of reliability and project control that is the benchmark for the industry.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-2 gap-10 border-t border-zinc-100 pt-12">
              <div>
                <p className="text-4xl font-black text-zinc-950 tracking-tighter">25km+</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mt-2">Road Networks Built</p>
              </div>
              <div>
                <p className="text-4xl font-black text-zinc-950 tracking-tighter">100%</p>
                <p className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 mt-2">In-House Fleet</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden rounded-sm shadow-3xl bg-zinc-100">
              <img 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f94716243681857.69865576dc9ed.jpeg" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" 
                alt="Asphalt Paving Technology"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
