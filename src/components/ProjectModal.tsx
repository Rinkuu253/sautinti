import React from 'react';
import { Modal, Badge, Button } from '@satuinti/ui';
import { CheckCircle2, AlertCircle, Layers, Wrench, ExternalLink, ArrowRight } from 'lucide-react';
import { SystemProject } from '../data/projects';
import { ProjectVisual, hasVisual } from './ProjectVisual';

interface ProjectModalProps {
  project: SystemProject | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <Modal
      open={Boolean(project)}
      onClose={onClose}
      title={
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[#2B5C9E]" />
          <span className="font-bold text-si-text">{project.name}</span>
        </div>
      }
      size="lg"
      footer={
        <div className="flex items-center justify-between w-full">
          <Badge variant="success" dot={true}>
            {project.status}
          </Badge>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={onClose}>
              Close
            </Button>
            <a href="#contact" onClick={onClose}>
              <Button
                variant="primary"
                size="sm"
                className="bg-[#2B5C9E] hover:bg-[#23508C]"
                iconRight={<ArrowRight className="w-3.5 h-3.5" />}
              >
                Need something similar?
              </Button>
            </a>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        <p className="text-base font-medium text-si-text leading-relaxed">{project.outcome}</p>

        {hasVisual(project) && <ProjectVisual project={project} />}

        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-si-text-muted">
          <span>
            <span className="text-si-text-dim">Role:</span> <strong className="text-si-text">{project.role}</strong>
          </span>
          <span>
            <span className="text-si-text-dim">Area:</span> <strong className="text-si-text">{project.category}</strong>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-si border border-rose-500/20 bg-rose-500/5 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-rose-700">
              <AlertCircle className="w-3.5 h-3.5" />
              The problem
            </div>
            <p className="text-sm text-si-text leading-relaxed">{project.problem}</p>
          </div>
          <div className="p-4 rounded-si border border-emerald-500/20 bg-emerald-500/5 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              What I built
            </div>
            <p className="text-sm text-si-text leading-relaxed">{project.solution}</p>
          </div>
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

        <div className="space-y-3">
          <h4 className="text-xs font-bold text-si-text uppercase tracking-wider">How it works</h4>
          <ul className="space-y-2">
            {project.architectureDetails.map((detail) => (
              <li key={detail} className="flex items-start gap-2.5 text-sm text-si-text-muted leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2B5C9E] mt-2 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>

        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3">
            {project.metrics.map((m) => (
              <div key={m.label} className="p-3 bg-si-surface-2 rounded-si border border-si-border">
                <span className="text-[11px] text-si-text-muted block">{m.label}</span>
                <span className="text-sm font-mono font-bold text-[#2B5C9E]">{m.value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="space-y-2 pt-2 border-t border-si-border">
          <span className="text-[11px] text-si-text-dim block uppercase">Stack</span>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2 py-0.5 text-xs font-mono bg-si-surface-3 text-si-text rounded border border-si-border-2"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.links && project.links.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2B5C9E] hover:underline"
              >
                {link.label} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        )}
      </div>
    </Modal>
  );
};
