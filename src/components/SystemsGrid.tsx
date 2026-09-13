import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Badge, Button, Tabs } from '@satuinti/ui';
import { ArrowUpRight, FolderGit2, CheckCircle2 } from 'lucide-react';
import { projects, SystemProject } from '../data/projects';
import { ProjectModal } from './ProjectModal';

export const SystemsGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<SystemProject | null>(null);

  const filterTabs = [
    { id: 'all', label: 'All Case Studies (5)' },
    { id: 'Cloud & Infrastructure', label: 'Cloud & Infrastructure (2)' },
    { id: 'Automation & Integration', label: 'Automation & Integration (2)' },
    { id: 'Application Engineering', label: 'Application Engineering (1)' },
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="systems" className="py-16 border-b border-si-border bg-si-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold text-[#2B5C9E] tracking-wider">
                Case Studies
              </span>
              <span className="w-12 h-px bg-[#2B5C9E]/30" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-si-text tracking-tight">
              Operational Case Studies & Systems
            </h2>
            <p className="text-sm text-si-text-muted max-w-2xl">
              Concrete implementations solving cost efficiency, operational communication, self-hosted environments, and enterprise data synchronization. Click any card to inspect technical decisions.
            </p>
          </div>

          <div className="shrink-0">
            <Tabs
              tabs={filterTabs}
              active={activeCategory}
              onChange={(id) => setActiveCategory(id)}
              variant="pill"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              hoverable={true}
              className="flex flex-col border-si-border hover:border-si-border-2 bg-si-surface transition-all group"
            >
              <CardHeader
                title={
                  <div className="flex items-center gap-2">
                    <FolderGit2 className="w-4 h-4 text-[#2B5C9E]" />
                    <span className="font-bold text-base text-si-text">{project.name}</span>
                  </div>
                }
                action={
                  <Badge
                    variant={project.category === 'Cloud & Infrastructure' ? 'primary' : project.category === 'Automation & Integration' ? 'warning' : 'info'}
                    className="font-mono text-[11px]"
                  >
                    {project.category}
                  </Badge>
                }
                className="bg-si-surface"
              />

              <CardBody className="flex-1 space-y-4 p-5">
                {project.imageUrl && (
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer rounded-si overflow-hidden border border-si-border bg-white hover:border-[#2B5C9E] transition-all"
                  >
                    <img
                      src={project.imageUrl}
                      alt={project.name}
                      className="w-full h-44 object-cover object-top hover:scale-[1.02] transition-transform duration-300"
                    />
                  </div>
                )}

                <p className="text-sm text-si-text leading-relaxed">
                  {project.summary}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-si-border">
                  <span className="text-[11px] font-mono text-si-text-dim block uppercase">
                    Technical Approach & Delivery:
                  </span>
                  <ul className="space-y-1">
                    {project.architectureDetails.slice(0, 2).map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-si-text-muted">
                        <span className="text-[#2B5C9E] mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {project.metrics && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.metrics.map((m, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-si-sm bg-si-surface-2 text-[11px] font-mono text-si-text-muted border border-si-border"
                      >
                        <span className="text-si-text-dim">{m.label}:</span>
                        <strong className="text-si-text">{m.value}</strong>
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-si-surface-2 text-si-text-muted border border-si-border/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardBody>

              <CardFooter className="flex items-center justify-between p-3.5 bg-si-surface-2/60 border-t border-si-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setSelectedProject(project)}
                  className="text-xs border-si-border-2 hover:border-[#2B5C9E] hover:text-[#2B5C9E] bg-si-surface"
                  iconRight={<ArrowUpRight className="w-3.5 h-3.5" />}
                >
                  Inspect Case Study
                </Button>

                <span className="text-[11px] font-mono text-si-text-dim flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {project.status.toUpperCase()}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
