import React from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturedWork } from './components/FeaturedWork';
import { SystemsGrid } from './components/SystemsGrid';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { About } from './components/About';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectPage } from './components/ProjectPage';
import { projects, SystemProject } from './data/projects';
import { navigate, projectPath, usePath } from './lib/router';

export const App: React.FC = () => {
  const path = usePath();
  const openProject = (project: SystemProject) => navigate(projectPath(project.id));

  const match = path.match(/^\/projects\/([^/]+)\/?$/);
  const project = match ? projects.find((p) => p.id === match[1]) : undefined;

  return (
    <div className="min-h-screen bg-si-bg text-si-text flex flex-col selection:bg-[#2B5C9E]/15 selection:text-[#2B5C9E]">
      <Header />
      <main className="flex-1">
        {project ? (
          <ProjectPage project={project} />
        ) : (
          <>
            <HeroSection />
            <FeaturedWork onOpen={openProject} />
            <SystemsGrid onOpen={openProject} />
            <Services onOpen={openProject} />
            <Process />
            <About onOpen={openProject} />
            <ContactSection />
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
