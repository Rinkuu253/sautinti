import React from 'react';
import { ArrowRight, MapPin, Award } from 'lucide-react';
import { profile } from '../data/profile';
import { HeroMark } from './HeroMark';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-si-bg overflow-hidden border-b border-si-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-14 md:pb-12 xl:pt-24 xl:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-si-text-muted">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              {profile.availability} · {profile.timezone}
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.05] text-si-text">
              I build and run the systems <span className="text-[#2B5C9E]">small teams depend on.</span>
            </h1>

            <p className="text-base sm:text-lg text-si-text-muted leading-relaxed max-w-xl">{profile.subheadline}</p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-si bg-[#2B5C9E] text-white text-sm font-semibold hover:bg-[#23508C] active:scale-[0.98] transition"
              >
                See my work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-si border border-si-border-2 bg-si-surface text-sm font-semibold text-si-text hover:border-[#2B5C9E] hover:text-[#2B5C9E] active:scale-[0.98] transition"
              >
                Start a project
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-si-text-muted pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {profile.location} · Remote
              </span>
              {profile.certifications.map((cert) => (
                <span key={cert.name} className="inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-[#6C3483]" />
                  {cert.name}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6">
            <HeroMark />
          </div>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-10 pt-6 xl:mt-14 xl:pt-8 border-t border-si-border-2">
          {profile.proof.map((item) => (
            <div key={item.label} className="space-y-1">
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-2xl sm:text-3xl font-mono font-semibold text-[#2B5C9E] tracking-tight">{item.value}</dd>
              <p className="text-sm font-semibold text-si-text">{item.label}</p>
              <p className="hidden sm:block text-xs text-si-text-muted leading-snug">{item.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
