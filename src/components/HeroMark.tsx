import React from 'react';
import { Cloud, Workflow, AppWindow, LifeBuoy, Database, Server, Smartphone, ShieldCheck, Cpu } from 'lucide-react';

type Tone = 'solid' | 'light' | 'ghost';

interface Tile {
  area: string;
  tone: Tone;
  icon: React.ElementType;
  label?: string;
}

const tones: Record<Tone, string> = {
  solid: 'bg-[#3767d6] text-white',
  light: 'bg-[#7fb0ff] text-[#0b0f17]',
  ghost: 'bg-white/[0.05] border border-white/15 text-white/80',
};

/** Block mosaic in the spirit of the Jejak mark: one tile per area of work, small tiles for the parts underneath. */
const tiles: Tile[] = [
  { area: 'col-start-1 col-span-3 row-start-1 row-span-2', tone: 'solid', icon: Cloud, label: 'Cloud' },
  { area: 'col-start-4 col-span-3 row-start-1', tone: 'light', icon: Workflow, label: 'Integrations' },
  { area: 'col-start-4 row-start-2', tone: 'ghost', icon: Database },
  { area: 'col-start-5 col-span-2 row-start-2', tone: 'ghost', icon: ShieldCheck },
  { area: 'col-start-1 row-start-3 row-span-2', tone: 'light', icon: Server },
  { area: 'col-start-2 col-span-3 row-start-3 row-span-2', tone: 'ghost', icon: AppWindow, label: 'Apps' },
  { area: 'col-start-5 row-start-3', tone: 'ghost', icon: Cpu },
  { area: 'col-start-6 row-start-3', tone: 'solid', icon: Smartphone },
  { area: 'col-start-5 col-span-2 row-start-4', tone: 'solid', icon: LifeBuoy, label: 'Ops' },
];

export const HeroMark: React.FC = () => (
  <div className="grid grid-cols-6 grid-rows-4 gap-3 xl:gap-4 aspect-[16/11]" aria-hidden="true">
    {tiles.map(({ area, tone, icon: Icon, label }) => (
      <div
        key={area}
        className={`${area} ${tones[tone]} rounded-[1.1rem] xl:rounded-[1.4rem] p-4 xl:p-5 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-0.5`}
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
