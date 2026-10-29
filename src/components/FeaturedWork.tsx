import React from 'react';
import { Button } from '@satuinti/ui';
import { ArrowUpRight, Wrench } from 'lucide-react';
import { projects, SystemProject } from '../data/projects';
import { SectionHeading } from './SectionHeading';
import { ProjectVisual } from './ProjectVisual';

interface FeaturedWorkProps {
  onOpen: (project: SystemProject) => void;
}

export const FeaturedWork: React.FC<FeaturedWorkProps> = ({ onOpen }) => {
  const featured = projects.filter((p) => p.tier === 'featured');

  return (
    <section id="work" className="py-16 md:py-20 border-b border-si-border bg-si-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        <SectionHeading
          eyebrow="Selected work"
          title="Things I built that people use every day"
          description="Three projects that show the range: a multi-app product with real users, software that talks to medical hardware, and a production cloud bill cut almost in half."
        />

        {featured.map((project, idx) => (
          <article key={project.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="block w-full text-left transition-transform hover:-translate-y-0.5"
                aria-label={`Open ${project.name} case study`}
              >
                <ProjectVisual project={project} />
              </button>
            </div>

            <div className="space-y-5">
              <div className="space-y-2">
                <span className="text-xs font-semibold text-[#6C3483] uppercase tracking-wider">{project.role}</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-si-text tracking-tight">{project.name}</h3>
                <p className="text-base sm:text-lg text-si-text leading-relaxed">{project.outcome}</p>
              </div>

              {project.challenge && (
                <div className="p-4 rounded-si border-l-2 border-[#2B5C9E] bg-[#2B5C9E]/5 space-y-1">
                  <span className="flex items-center gap-1.5 text-xs font-bold text-[#2B5C9E]">
                    <Wrench className="w-3.5 h-3.5" />
                    The hard part
                  </span>
                  <p className="text-sm text-si-text-muted leading-relaxed">{project.challenge}</p>
                </div>
              )}

              <ul className="space-y-1.5">
                {project.architectureDetails.slice(0, 3).map((detail) => (
                  <li key={detail} className="flex items-start gap-2 text-sm text-si-text-muted">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2B5C9E] mt-2 shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 text-[11px] font-mono rounded bg-si-surface-2 text-si-text-muted border border-si-border"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={() => onOpen(project)}
                className="border-si-border-2 hover:border-[#2B5C9E] hover:text-[#2B5C9E]"
                iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
              >
                Read case study
              </Button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
