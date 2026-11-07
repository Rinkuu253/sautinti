import React from 'react';
import { Cloud, Workflow, AppWindow, LifeBuoy, Database, Server, Smartphone, ShieldCheck, Cpu } from 'lucide-react';

type Tone = 'blue' | 'purple' | 'light' | 'ghost';

interface Tile {
  area: string;
  tone: Tone;
  icon: React.ElementType;
  label?: string;
}

const tones: Record<Tone, string> = {
  blue: 'bg-[#2B5C9E] text-white',
  purple: 'bg-[#6C3483] text-white',
  light: 'bg-[#2B5C9E]/15 text-[#23508C]',
  ghost: 'bg-si-surface border border-si-border-2 text-si-text-muted',
};

/** Block mosaic in SATU INTI blue and purple: one tile per area of work, small tiles for the parts underneath. */
const tiles: Tile[] = [
  { area: 'col-start-1 col-span-3 row-start-1 row-span-2', tone: 'blue', icon: Cloud, label: 'Cloud' },
  { area: 'col-start-4 col-span-3 row-start-1', tone: 'light', icon: Workflow, label: 'Integrations' },
  { area: 'col-start-4 row-start-2', tone: 'ghost', icon: Database },
  { area: 'col-start-5 col-span-2 row-start-2', tone: 'ghost', icon: ShieldCheck },
  { area: 'col-start-1 row-start-3 row-span-2', tone: 'light', icon: Server },
  { area: 'col-start-2 col-span-3 row-start-3 row-span-2', tone: 'ghost', icon: AppWindow, label: 'Apps' },
  { area: 'col-start-5 row-start-3', tone: 'ghost', icon: Cpu },
  { area: 'col-start-6 row-start-3', tone: 'blue', icon: Smartphone },
  { area: 'col-start-5 col-span-2 row-start-4', tone: 'purple', icon: LifeBuoy, label: 'Ops' },
];

export const HeroMark: React.FC = () => (
  <div className="grid grid-cols-6 grid-rows-4 gap-3 xl:gap-4 aspect-[16/11]" aria-hidden="true">
    {tiles.map(({ area, tone, icon: Icon, label }) => (
      <div
        key={area}
        className={`${area} ${tones[tone]} rounded-[1.1rem] xl:rounded-[1.4rem] p-4 xl:p-5 flex flex-col justify-between shadow-[0_10px_30px_-20px_rgba(13,17,23,0.4)] transition-transform duration-300 hover:-translate-y-0.5`}
      >
        <Icon
          className={`shrink-0 ${label ? 'w-5 h-5 xl:w-7 xl:h-7' : 'w-5 h-5 xl:w-6 xl:h-6 m-auto'}`}
          strokeWidth={1.75}
        />
        {label && <span className="text-lg xl:text-2xl font-bold tracking-tight">{label}</span>}
      </div>
    ))}
  </div>
);
