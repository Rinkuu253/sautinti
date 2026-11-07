import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, SystemProject } from '../data/projects';
import { SectionHeading } from './SectionHeading';
import { ProjectVisual } from './ProjectVisual';

interface FeaturedWorkProps {
  onOpen: (project: SystemProject) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpen }) => {
  const featured = projects.filter((p) => p.tier === 'featured');

  return (
    <section id="work" className="py-20 md:py-28 bg-si-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I built that people use every day"
          description="A multi-app product with real users, software that reads results from medical hardware, and a production cloud bill cut by up to 30% without losing availability."
        />

        {featured.map((project, idx) => (
          <article key={project.id} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
            <button
              type="button"
              onClick={() => onOpen(project)}
              className={`zoom-target lift lg:col-span-7 block w-full text-left ${idx % 2 === 1 ? 'lg:order-2' : ''}`}
              aria-label={`Open ${project.name} case study`}
            >
              <ProjectVisual project={project} large />
            </button>

            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-semibold text-[#2B5C9E] uppercase tracking-[0.14em]">{project.role}</span>
              <h3 className="text-2xl sm:text-3xl font-bold text-si-text leading-tight">{project.name}</h3>
              <p className="text-base sm:text-lg text-si-text leading-relaxed">{project.outcome}</p>

              {project.challenge && (
                <p className="text-sm text-si-text-muted leading-relaxed border-l-2 border-[#2B5C9E] pl-4">
                  <strong className="text-si-text">The hard part. </strong>
                  {project.challenge}
                </p>
              )}

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.slice(0, 6).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-si-surface-2 text-si-text-muted border border-si-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <button
                type="button"
                onClick={() => onOpen(project)}
                className="group inline-flex items-center gap-1.5 text-sm font-semibold text-si-text border-b border-si-text pb-0.5 hover:text-[#2B5C9E] hover:border-[#2B5C9E] transition-colors"
              >
                Read case study
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
