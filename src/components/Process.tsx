import React from 'react';
import { processSteps } from '../data/process';
import { SectionHeading } from './SectionHeading';

export const Process: React.FC = () => {
  return (
    <section id="process" className="py-16 md:py-20 border-b border-si-border bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeading
          eyebrow="How I work"
          title="Clear scope, visible progress, a proper handover"
          description="Most freelance projects go wrong in communication, not code. This is how I keep that from happening."
        />

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step, idx) => (
            <li key={step.title} className="relative space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[#2B5C9E] text-white font-mono font-bold text-sm flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <span className="hidden lg:block flex-1 h-px bg-si-border-2" />
              </div>
              <h3 className="text-base font-bold text-si-text">{step.title}</h3>
              <p className="text-sm text-si-text-muted leading-relaxed">{step.description}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};
