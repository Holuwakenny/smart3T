
import React from 'react';
import { Benefit } from '../types';

const benefits: Benefit[] = [
  {
    title: "Cost Savings",
    description: "We help you reduce project costs through accurate planning, budgeting, and efficient execution.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  },
  {
    title: "Risk Management",
    description: "We identify, assess, and mitigate project risks to ensure smooth delivery & compliance.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    title: "Expert Advice",
    description: "Our team provides professional guidance backed by industry knowledge and hands-on experience.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.674a1 1 0 00.995-.858l.637-4.309a3 3 0 012.183-2.583 2 2 0 00.669-3.419 8.035 8.035 0 00-11.264 0 2 2 0 00.669 3.419 3 3 0 012.183 2.583l.637 4.309a1 1 0 00.995.858z" />
      </svg>
    )
  }
];

export const BenefitsSection: React.FC = () => {
  return (
    <section id="benefits" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-emerald-600 tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-4xl font-extrabold text-emerald-950 sm:text-5xl">
            Benefits of Hiring Smart 3T
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, idx) => (
            <div 
              key={idx} 
              className="group p-8 bg-emerald-50 rounded-3xl border border-emerald-100 hover:bg-emerald-600 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="w-16 h-16 bg-white text-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                {benefit.icon}
              </div>
              <h3 className="text-2xl font-bold text-emerald-950 mb-4 group-hover:text-white transition-colors">
                {benefit.title}
              </h3>
              <p className="text-emerald-800 leading-relaxed group-hover:text-emerald-50 transition-colors">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
