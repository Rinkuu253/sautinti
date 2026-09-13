import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { SystemsGrid } from './components/SystemsGrid';
import { ArchitectureLab } from './components/ArchitectureLab';
import { VisionRoadmap } from './components/VisionRoadmap';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8fafc] text-si-text flex flex-col selection:bg-[#2B5C9E]/15 selection:text-[#2B5C9E]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <SystemsGrid />
        <ArchitectureLab />
        <VisionRoadmap />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
