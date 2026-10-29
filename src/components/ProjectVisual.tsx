import React from 'react';
import { ChevronRight } from 'lucide-react';
import { SystemProject } from '../data/projects';

interface ProjectVisualProps {
  project: SystemProject;
  /** compact = card thumbnail, full = featured row / modal */
  size?: 'compact' | 'full';
}

/** Screenshot in a browser frame, or a drawn system sketch when no screenshot exists yet. */
export const ProjectVisual: React.FC<ProjectVisualProps> = ({ project, size = 'full' }) => {
  const imageHeight = size === 'compact' ? 'h-40' : 'h-64 sm:h-80';

  return (
    <div className="rounded-si-lg overflow-hidden border border-si-border-2 bg-si-surface shadow-sm">
      <div className="flex items-center gap-1.5 px-3 py-2 border-b border-si-border bg-si-surface-2">
        <span className="w-2.5 h-2.5 rounded-full bg-rose-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-300" />
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-300" />
        <span className="ml-2 text-[11px] font-mono text-si-text-dim truncate">{project.id}</span>
      </div>

      {project.imageUrl ? (
        <img
          src={project.imageUrl}
          alt={`${project.name} screenshot`}
          loading="lazy"
          className={`w-full ${imageHeight} object-cover object-top bg-white`}
        />
      ) : project.sketch ? (
        <div className={`${imageHeight} flex items-center bg-gradient-to-br from-[#2B5C9E]/5 via-si-surface to-[#6C3483]/5 p-4 sm:p-6`}>
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
                        idx === 1 ? 'border-[#2B5C9E]/40' : 'border-si-border'
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
