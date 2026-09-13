import React from 'react';
import { Card, CardHeader, CardBody, Badge } from '@satuinti/ui';
import { Compass, AlertCircle, ArrowRight } from 'lucide-react';
import { roadmap } from '../data/roadmap';

export const VisionRoadmap: React.FC = () => {
  return (
    <section id="roadmap" className="py-16 border-b border-si-border bg-si-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#2B5C9E] tracking-wider">
              Forward Roadmap
            </span>
            <span className="w-12 h-px bg-[#2B5C9E]/30" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-si-text tracking-tight">
            Active Engineering Explorations
          </h2>
          <p className="text-sm text-si-text-muted max-w-3xl">
            Active architectural research directions and practical explorations focused on distributed peer state, private edge intelligence, and extreme data density.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {roadmap.map((item) => (
            <Card
              key={item.id}
              hoverable={true}
              className="border-si-border hover:border-si-border-2 bg-si-surface flex flex-col justify-between"
            >
              <CardHeader
                title={
                  <div className="flex items-center gap-2">
                    <Compass className="w-4 h-4 text-[#6C3483]" />
                    <span className="font-bold text-base text-si-text">{item.title}</span>
                  </div>
                }
                action={
                  <Badge
                    variant={
                      item.stage === 'Active R&D'
                        ? 'primary'
                        : item.stage === 'Planned Architecture'
                        ? 'info'
                        : 'warning'
                    }
                    className="font-mono text-[11px]"
                  >
                    {item.stage}
                  </Badge>
                }
                className="bg-si-surface"
              />

              <CardBody className="space-y-4 p-5">
                <div className="flex items-center gap-2 text-xs font-mono text-si-text-dim">
                  <span>DOMAIN:</span>
                  <span className="text-si-text font-bold">{item.focus}</span>
                </div>

                <p className="text-xs sm:text-sm text-si-text leading-relaxed">
                  {item.description}
                </p>
                <div className="p-3 rounded-si bg-amber-500/5 border border-amber-500/20 space-y-1">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-amber-800">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
                    Key Challenge
                  </div>
                  <p className="text-xs text-si-text-muted leading-relaxed">
                    {item.keyChallenge}
                  </p>
                </div>

                <div className="space-y-1.5 pt-2 border-t border-si-border">
                  <span className="text-[11px] font-mono text-si-text-dim block">
                    Target Stack:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {item.targetStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[11px] font-mono rounded bg-si-surface-2 text-si-text-muted border border-si-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </CardBody>

              <div className="p-3.5 bg-si-surface-2/50 border-t border-si-border flex items-center justify-between text-xs font-mono text-si-text-dim">
                <span>{item.stage}</span>
                <span className="flex items-center gap-1 text-[#2B5C9E] font-medium">
                  R&D Focus <ArrowRight className="w-3 h-3" />
                </span>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
