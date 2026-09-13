import React from 'react';
import { Modal, Badge, Button } from '@satuinti/ui';
import { CheckCircle2, AlertCircle, Layers, Linkedin } from 'lucide-react';
import { SystemProject } from '../data/projects';
import { profile } from '../data/profile';

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
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-si-text-dim">STATUS:</span>
            <Badge variant="success" dot={true}>
              {project.status}
            </Badge>
          </div>
          <div className="flex items-center gap-2">
            <a href={profile.links.linkedin} target="_blank" rel="noreferrer">
              <Button
                variant="outline"
                size="sm"
                icon={<Linkedin className="w-3.5 h-3.5 text-[#2B5C9E]" />}
              >
                Discuss Case Study
              </Button>
            </a>
            <Button variant="primary" size="sm" onClick={onClose} className="bg-[#2B5C9E] hover:bg-[#23508C]">
              Close
            </Button>
          </div>
        </div>
      }
    >
      <div className="space-y-6">
        {project.imageUrl && (
          <div className="rounded-si overflow-hidden border border-si-border bg-white shadow-xs">
            <img
              src={project.imageUrl}
              alt={`${project.name} Architecture Diagram`}
              className="w-full h-auto max-h-80 object-contain mx-auto"
            />
          </div>
        )}

        <div className="flex flex-wrap items-center justify-between gap-2 p-3 bg-si-surface-2 rounded-si border border-si-border">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-si-text-dim">Role:</span>
            <span className="text-xs font-bold text-si-text font-mono">{project.role}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-si-text-dim">Category:</span>
            <Badge variant="primary" className="bg-[#2B5C9E]/10 text-[#2B5C9E] border-[#2B5C9E]/30 font-mono">
              {project.category}
            </Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 rounded-si border border-rose-500/20 bg-rose-500/5 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-rose-700">
              <AlertCircle className="w-3.5 h-3.5" />
              Problem Context
            </div>
            <p className="text-xs text-si-text leading-relaxed">
              {project.problem}
            </p>
          </div>

          <div className="p-4 rounded-si border border-emerald-500/20 bg-emerald-500/5 space-y-2">
            <div className="flex items-center gap-1.5 text-xs font-bold font-mono text-emerald-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Implemented Solution
            </div>
            <p className="text-xs text-si-text leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <h4 className="text-xs font-mono font-bold text-si-text tracking-wider">
            Technical Details
          </h4>
          <ul className="space-y-2">
            {project.architectureDetails.map((detail, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-si-text-muted leading-relaxed">
                <span className="w-1.5 h-1.5 rounded-full bg-[#2B5C9E] mt-1.5 shrink-0" />
                <span>{detail}</span>
              </li>
            ))}
          </ul>
        </div>
        {project.metrics && project.metrics.length > 0 && (
          <div className="grid grid-cols-2 gap-3 pt-2">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="p-3 bg-si-surface-2 rounded-si border border-si-border">
                <span className="text-[11px] font-mono text-si-text-muted block">{m.label}</span>
                <span className="text-sm font-mono font-bold text-[#2B5C9E]">{m.value}</span>
              </div>
            ))}
          </div>
        )}
        <div className="space-y-2 pt-2 border-t border-si-border">
          <span className="text-[11px] font-mono text-si-text-dim block uppercase">
            Technologies & Tools
          </span>
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
      </div>
    </Modal>
  );
};
