
import React from 'react';
import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/About.tsx';
import { BenefitsSection } from './components/Benefits.tsx';
import { SectorsSection } from './components/Sectors.tsx';
import { GallerySection } from './components/Gallery.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  // Ensure phone number has NO spaces or special characters for wa.me
  const whatsappNumber = "2347033968785";
  const whatsappText = encodeURIComponent("Hello Smart 3T Construction, I am interested in your services. Can we discuss my project?");
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <SectorsSection />
        <BenefitsSection />
        <GallerySection />
      </main>
      <Footer />

      {/* Global Floating WhatsApp Action Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-[200] w-16 h-16 bg-[#25D366] text-white rounded-full shadow-2xl flex items-center justify-center transition-all hover:scale-110 active:scale-95 animate-pulse-whatsapp group"
        aria-label="Chat on WhatsApp"
      >
        <svg 
          viewBox="0 0 24 24" 
          className="w-8 h-8 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.414 0 0 5.415 0 12.05c0 2.12.554 4.189 1.607 6.01L0 24l6.135-1.61a11.81 11.81 0 005.91 1.586h.005c6.634 0 12.05-5.415 12.05-12.05a11.852 11.852 0 00-3.537-8.513z"/>
        </svg>
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold">1</span>
        </span>
      </a>
    </div>
  );
};

export default App;
