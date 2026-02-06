
import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { AboutSection } from './components/About';
import { BenefitsSection } from './components/Benefits';
import { SectorsSection } from './components/Sectors';
import { GallerySection } from './components/Gallery';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen selection:bg-emerald-500 selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <AboutSection />
        <SectorsSection />
        <BenefitsSection />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
