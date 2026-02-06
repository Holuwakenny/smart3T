
import React from 'react';
import { Navigation } from './components/Navigation.tsx';
import { Hero } from './components/Hero.tsx';
import { AboutSection } from './components/About.tsx';
import { BenefitsSection } from './components/Benefits.tsx';
import { SectorsSection } from './components/Sectors.tsx';
import { GallerySection } from './components/Gallery.tsx';
import { Footer } from './components/Footer.tsx';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
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
