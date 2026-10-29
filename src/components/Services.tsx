import React from 'react';
import { Cloud, Workflow, AppWindow, LifeBuoy, Check, Clock } from 'lucide-react';
import { services } from '../data/services';
import { projects, SystemProject } from '../data/projects';
import { SectionHeading } from './SectionHeading';

const icons: Record<string, React.ElementType> = {
  'cloud-audit': Cloud,
  integrations: Workflow,
  'custom-apps': AppWindow,
  'ops-retainer': LifeBuoy,
};

interface ServicesProps {
  onOpen: (project: SystemProject) => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpen }) => {
  return (
    <section id="services" className="py-16 md:py-20 border-b border-si-border bg-si-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          eyebrow="Services"
          title="What I can do for you"
          description="Four kinds of engagements, each backed by work on this page. Not sure which fits? Describe the problem and I will tell you honestly whether I am the right person."
          accent="purple"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => {
            const Icon = icons[service.id] ?? Workflow;
            const related = projects.filter((p) => service.relatedProjectIds.includes(p.id));

            return (
              <div
                key={service.id}
                className="flex flex-col rounded-si-lg border border-si-border bg-si-surface p-6 space-y-5 hover:border-[#2B5C9E]/40 hover:shadow-md transition-all"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-si bg-[#2B5C9E]/10 text-[#2B5C9E] flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-si-text">{service.title}</h3>
                  </div>
                  <span className="flex items-center gap-1 text-xs font-mono text-si-text-muted whitespace-nowrap pt-1">
                    <Clock className="w-3.5 h-3.5" />
                    {service.timeline}
                  </span>
                </div>

                <p className="text-sm text-si-text leading-relaxed">{service.pitch}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 flex-1">
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-si-text-muted uppercase tracking-wider">Good fit if</span>
                    <ul className="space-y-1.5">
                      {service.goodFitIf.map((item) => (
                        <li key={item} className="text-sm text-si-text-muted leading-snug">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs font-bold text-si-text-muted uppercase tracking-wider">You get</span>
                    <ul className="space-y-1.5">
                      {service.youGet.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-sm text-si-text leading-snug">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-2 pt-4 border-t border-si-border">
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-si-text-dim">
                    <span>Proof:</span>
                    {related.map((p) => (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => onOpen(p)}
                        className="px-2 py-0.5 rounded bg-si-surface-2 border border-si-border text-si-text-muted hover:text-[#2B5C9E] hover:border-[#2B5C9E]/40 transition-colors"
                      >
                        {p.name}
                      </button>
                    ))}
                  </div>
                  {service.price && <span className="text-sm font-mono font-bold text-[#2B5C9E]">{service.price}</span>}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
