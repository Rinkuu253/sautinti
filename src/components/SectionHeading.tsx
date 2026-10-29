import React from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
  accent?: 'brand' | 'purple';
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ eyebrow, title, description, accent = 'brand' }) => {
  const accentText = accent === 'brand' ? 'text-[#2B5C9E]' : 'text-[#6C3483]';
  const accentLine = accent === 'brand' ? 'bg-[#2B5C9E]/30' : 'bg-[#6C3483]/30';

  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <span className={`text-xs font-semibold tracking-wider uppercase ${accentText}`}>{eyebrow}</span>
        <span className={`w-12 h-px ${accentLine}`} />
      </div>
      <h2 className="text-2xl sm:text-3xl font-extrabold text-si-text tracking-tight">{title}</h2>
      {description && <p className="text-sm sm:text-base text-si-text-muted max-w-2xl leading-relaxed">{description}</p>}
    </div>
  );
};
