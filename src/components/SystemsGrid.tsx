import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects, SystemProject } from '../data/projects';
import { SectionHeading } from './SectionHeading';

interface SystemsGridProps {
  onOpen: (project: SystemProject) => void;
}

export const SystemsGrid: React.FC<SystemsGridProps> = ({ onOpen }) => {
  const moreWork = projects.filter((p) => p.tier === 'more');

  return (
    <section id="more-work" className="py-20 md:py-28 bg-si-surface border-y border-si-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          eyebrow="More work"
          title="Integrations, tools, and apps"
          description="Smaller, focused systems. Open any row for the problem, approach, and stack."
        />

        <ul className="border-t border-si-border-2">
          {moreWork.map((project) => (
            <li key={project.id} className="border-b border-si-border">
              <button
                type="button"
                onClick={() => onOpen(project)}
                className="group w-full text-left grid grid-cols-1 md:grid-cols-12 gap-x-8 gap-y-2 py-6 items-start hover:bg-si-bg/70 transition-colors px-1 -mx-1"
              >
                <div className="md:col-span-4 space-y-1">
                  <h3 className="text-lg font-bold text-si-text group-hover:text-[#2B5C9E] transition-colors">
                    {project.name}
                  </h3>
                  <span className="text-xs text-si-text-dim">
                    {project.category} · {project.status}
                  </span>
                </div>
                <p className="md:col-span-5 text-sm text-si-text-muted leading-relaxed">{project.outcome}</p>
                <div className="md:col-span-3 flex items-start justify-between gap-3">
                  <div className="flex flex-wrap gap-1">
                    {project.techStack.slice(0, 3).map((tech) => (
                      <span key={tech} className="px-1.5 py-0.5 text-[11px] font-mono rounded bg-si-surface-2 text-si-text-muted">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <ArrowUpRight className="w-5 h-5 shrink-0 text-si-text-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2B5C9E]" />
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
