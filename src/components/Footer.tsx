import React from 'react';
import { profile } from '../data/profile';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-si-surface border-t border-si-border text-si-text-muted text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Satu Inti Logo"
              className="w-7 h-7 object-contain rounded-si-sm"
            />
            <div>
              <div className="flex items-center gap-1 font-bold text-si-text">
                <span className="text-[#2B5C9E]">SATU</span>
                <span className="text-[#6C3483]">INTI</span>
                <span className="text-si-text-muted font-normal text-xs ml-1">
                  / {profile.title}
                </span>
              </div>
              <p className="text-[11px] text-si-text-dim">
                {profile.name}. Specializing in Cloud Operations, Automation, and Systems.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-si-text-dim">
            <a href="#systems" className="hover:text-si-text transition-colors">
              Case Studies
            </a>
            <span>/</span>
            <a href="#capabilities" className="hover:text-si-text transition-colors">
              Topology
            </a>
            <span>/</span>
            <a href="#roadmap" className="hover:text-si-text transition-colors">
              Roadmap
            </a>
            <span>/</span>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#2B5C9E] transition-colors"
            >
              LinkedIn
            </a>
            <span>/</span>
            <a
              href={`mailto:${profile.links.email}`}
              className="hover:text-[#2B5C9E] transition-colors"
            >
              Email
            </a>
          </div>
        </div>

        <div className="pt-6 border-t border-si-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-si-text-dim">
          <div>
            © {new Date().getFullYear()} Matthew Marvelino. All rights reserved.
          </div>
          <div className="font-mono text-[11px]">
            Built with React, Tailwind CSS, and SatuInti UI tokens.
          </div>
        </div>
      </div>
    </footer>
  );
};
