import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description }) => (
  <div className="space-y-3">
    <span className="text-xs font-semibold tracking-[0.14em] uppercase text-[#2B5C9E]">{eyebrow}</span>
    <h2 className="text-3xl sm:text-4xl font-bold text-si-text leading-[1.1]">{title}</h2>
    {description && <p className="text-base sm:text-lg text-si-text-muted max-w-2xl leading-relaxed">{description}</p>}
  </div>
);
