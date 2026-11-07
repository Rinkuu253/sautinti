import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedWork } from './components/FeaturedWork';
import { SystemsGrid } from './components/SystemsGrid';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { SystemProject } from './data/projects';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<SystemProject | null>(null);

  return (
    <div className="min-h-screen bg-si-bg text-si-text flex flex-col selection:bg-[#2B5C9E]/15 selection:text-[#2B5C9E]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedWork onOpen={setSelectedProject} />
        <SystemsGrid onOpen={setSelectedProject} />
        <Services onOpen={setSelectedProject} />
        <Process />
        <About onOpen={setSelectedProject} />
        <ContactSection />
      </main>
      <Footer />
      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
};

export default App;
