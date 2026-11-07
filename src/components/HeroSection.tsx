import React from 'react';
import { ArrowRight, MapPin, Award } from 'lucide-react';
import { profile } from '../data/profile';
import { HeroMark } from './HeroMark';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-[#0b0f17] text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10 md:pt-14 md:pb-12 xl:pt-24 xl:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6 space-y-7">
            <div className="inline-flex items-center gap-2 text-xs font-medium text-white/70">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              {profile.availability} · {profile.timezone}
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.05]">
              I build and run the systems <span className="text-[#7fb0ff]">small teams depend on.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/70 leading-relaxed max-w-xl">{profile.subheadline}</p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#work"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-si bg-white text-[#0b0f17] text-sm font-semibold hover:bg-white/90 active:scale-[0.98] transition"
              >
                See my work <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-si border border-white/25 text-sm font-semibold text-white hover:bg-white/10 active:scale-[0.98] transition"
              >
                Start a project
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-white/60 pt-1">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                {profile.location} · Remote
              </span>
              {profile.certifications.map((cert) => (
                <span key={cert.name} className="inline-flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5" />
                  {cert.name}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-6">
            <HeroMark />
          </div>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-6 mt-10 pt-6 xl:mt-14 xl:pt-8 border-t border-white/15">
          {profile.proof.map((item) => (
            <div key={item.label} className="space-y-1">
              <dt className="sr-only">{item.label}</dt>
              <dd className="text-2xl sm:text-3xl font-mono font-semibold text-white tracking-tight">{item.value}</dd>
              <p className="text-sm font-semibold text-white/90">{item.label}</p>
              <p className="hidden sm:block text-xs text-white/60 leading-snug">{item.note}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};
