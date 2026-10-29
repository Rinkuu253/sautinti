import React from 'react';
import { HardDrive, Database, KeyRound, Container, Boxes, Workflow, ArrowUpRight } from 'lucide-react';
import { profile } from '../data/profile';
import { projects, SystemProject } from '../data/projects';
import { SectionHeading } from './SectionHeading';

const platform = [
  { icon: HardDrive, label: 'NAS storage' },
  { icon: Boxes, label: 'S3-compatible object storage' },
  { icon: KeyRound, label: 'Single sign-on' },
  { icon: Database, label: 'PostgreSQL databases' },
  { icon: Container, label: 'Docker + Coolify hosting' },
  { icon: Workflow, label: 'n8n automation' },
];

interface AboutProps {
  onOpen: (project: SystemProject) => void;
}

export const About: React.FC<AboutProps> = ({ onOpen }) => {
  const labProjects = projects.filter((p) => p.tier === 'lab');

  return (
    <section id="about" className="py-16 md:py-20 border-b border-si-border bg-si-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          <SectionHeading eyebrow="About" title="Operations by day, building by night" accent="purple" />
          <div className="space-y-4 text-base text-si-text-muted leading-relaxed">
            {profile.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <div className="rounded-si-lg border border-si-border-2 bg-gradient-to-br from-[#2B5C9E]/5 to-[#6C3483]/5 p-6 space-y-4">
            <h3 className="text-sm font-bold text-si-text">My own platform</h3>
            <p className="text-sm text-si-text-muted">
              Self-hosted and maintained by me. It is where client prototypes run before they move to the cloud.
            </p>
            <div className="grid grid-cols-2 gap-2">
              {platform.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-2 px-3 py-2 rounded-si bg-si-surface border border-si-border text-xs font-medium text-si-text"
                >
                  <Icon className="w-4 h-4 text-[#2B5C9E] shrink-0" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-xs font-bold text-si-text-muted uppercase tracking-wider">Tools I built for myself</h3>
            {labProjects.map((project) => (
              <button
                key={project.id}
                type="button"
                onClick={() => onOpen(project)}
                className="w-full text-left flex items-start justify-between gap-3 p-4 rounded-si border border-si-border hover:border-[#2B5C9E]/40 transition-colors"
              >
                <div>
                  <div className="text-sm font-bold text-si-text">{project.name}</div>
                  <div className="text-xs text-si-text-muted mt-0.5">{project.outcome}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-si-text-dim shrink-0" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
