import React, { useState } from 'react';
import { Card, CardBody, CardFooter, Badge, Tabs } from '@satuinti/ui';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { projects, ProjectCategory, SystemProject } from '../data/projects';
import { SectionHeading } from './SectionHeading';
import { ProjectVisual } from './ProjectVisual';

const categories: ProjectCategory[] = ['Apps', 'Integrations & Automation', 'Cloud & Ops'];

const categoryBadge: Record<ProjectCategory, 'primary' | 'warning' | 'info'> = {
  'Cloud & Ops': 'primary',
  'Integrations & Automation': 'warning',
  Apps: 'info',
};

interface SystemsGridProps {
  onOpen: (project: SystemProject) => void;
}

export const SystemsGrid: React.FC<SystemsGridProps> = ({ onOpen }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const moreWork = projects.filter((p) => p.tier === 'more');
  const filterTabs = [
    { id: 'all', label: `All (${moreWork.length})` },
    ...categories
      .map((c) => ({ id: c, label: `${c} (${moreWork.filter((p) => p.category === c).length})` }))
      .filter((tab) => !tab.label.endsWith('(0)')),
  ];

  const filteredProjects = activeCategory === 'all' ? moreWork : moreWork.filter((p) => p.category === activeCategory);

  return (
    <section id="more-work" className="py-16 border-b border-si-border bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <SectionHeading
            eyebrow="More work"
            title="Integrations, tools, and apps"
            description="Smaller, focused systems. Click any card for the problem, approach, and stack."
          />
          <div className="shrink-0 max-w-full overflow-x-auto">
            <Tabs tabs={filterTabs} active={activeCategory} onChange={(id) => setActiveCategory(id)} variant="pill" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              hoverable={true}
              onClick={() => onOpen(project)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onOpen(project)}
              role="button"
              tabIndex={0}
              className="flex flex-col cursor-pointer border-si-border hover:border-[#2B5C9E]/50 bg-si-surface transition-all"
            >
              <CardBody className="flex-1 space-y-3 p-5">
                {project.imageUrl && <ProjectVisual project={project} size="compact" />}
                <Badge variant={categoryBadge[project.category]} className="text-[11px]">
                  {project.category}
                </Badge>
                <h3 className="font-bold text-base text-si-text">{project.name}</h3>
                <p className="text-sm text-si-text-muted leading-relaxed">{project.outcome}</p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {project.techStack.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 text-[11px] font-mono rounded bg-si-surface-2 text-si-text-muted border border-si-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardBody>

              <CardFooter className="flex items-center justify-between p-3.5 bg-si-surface-2/60 border-t border-si-border">
                <span className="text-xs font-semibold text-[#2B5C9E] flex items-center gap-1">
                  Case study <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
                <span className="text-[11px] text-si-text-dim flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  {project.status}
                </span>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
