import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SystemProject } from '../data/projects';

interface ProjectVisualProps {
  project: SystemProject;
  /** Taller frame for the featured rows. */
  large?: boolean;
}

/** Real screenshot when one exists, else a drawn system sketch. */
export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, large }) => {
  const height = large ? 'h-72 sm:h-96 lg:h-[26rem]' : 'h-64 sm:h-80';

  return (
    <div className="zoom-frame rounded-si-lg border border-si-border-2 bg-si-surface shadow-[0_18px_40px_-24px_rgba(13,17,23,0.35)]">
      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className={`w-full ${height} object-cover object-top bg-white`}
        />
      ) : project.sketch ? (
        <div className={`${large ? height : ''} flex items-center bg-si-surface-2 p-4 sm:p-6`}>
          <div className="w-full grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)_auto_minmax(0,1fr)] items-center gap-1.5 sm:gap-2">
            {project.sketch.map((layer, idx) => (
              <React.Fragment key={layer.label}>
                {idx > 0 && <ChevronRight className="w-4 h-4 text-si-text-dim" />}
                <div className="space-y-1.5 min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-wider text-si-text-dim">
                    {layer.label}
                  </span>
                  {layer.items.map((item) => (
                    <div
                      key={item}
                      className={`px-1.5 sm:px-2 py-1.5 rounded-si-sm border bg-si-surface text-[10px] sm:text-xs break-words font-medium text-si-text ${
                        idx === 1 ? 'border-[#2B5C9E]/50' : 'border-si-border'
                      }`}
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export const hasVisual = (project: SystemProject) => Boolean(project.imageUrl || project.sketch);
