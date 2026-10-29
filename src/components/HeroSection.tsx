import React from 'react';
import { Button, Badge } from '@satuinti/ui';
import { ArrowRight, MapPin, Clock, Award } from 'lucide-react';
import { profile } from '../data/profile';

const initials = profile.name
  .split(' ')
  .map((part) => part[0])
  .join('');

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 border-b border-si-border bg-gradient-to-b from-si-surface via-[#f8fafc] to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <Badge variant="primary" className="bg-[#2B5C9E]/10 text-[#2B5C9E] border-[#2B5C9E]/30 text-xs">
              {profile.title} · Cloud, Integrations, Apps
            </Badge>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-si-text tracking-tight leading-[1.15]">
              I build and run the systems{' '}
              <span className="text-[#2B5C9E] underline decoration-[#6C3483]/30 decoration-2 underline-offset-4">
                small teams depend on.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-si-text-muted leading-relaxed max-w-2xl">{profile.subheadline}</p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#work">
                <Button
                  variant="primary"
                  size="md"
                  className="bg-[#2B5C9E] hover:bg-[#23508C] border-transparent"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  See my work
                </Button>
              </a>
              <a href="#contact">
                <Button variant="outline" size="md" className="border-si-border-2 hover:border-[#2B5C9E] hover:text-[#2B5C9E]">
                  Start a project
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="rounded-si-xl border border-si-border-2 bg-si-surface shadow-sm p-6 space-y-4">
              <div className="flex items-center gap-4">
                {profile.photo ? (
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-[#2B5C9E]/20"
                  />
                ) : (
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#2B5C9E] to-[#6C3483] text-white flex items-center justify-center text-xl font-bold">
                    {initials}
                  </div>
                )}
                <div>
                  <div className="font-bold text-si-text">{profile.name}</div>
                  <div className="text-sm text-si-text-muted">{profile.title}</div>
                </div>
              </div>
              <div className="space-y-2 text-sm text-si-text-muted">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-si-text-dim" />
                  {profile.location} · {profile.timezone} · Remote
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-si-text-dim" />
                  {profile.responseTime}
                </div>
              </div>
              <Badge variant="success" dot={true} className="py-1 px-3">
                {profile.availability}
              </Badge>
              <div className="pt-4 border-t border-si-border space-y-2">
                <span className="text-xs font-bold text-si-text-muted uppercase tracking-wider">Certified</span>
                <div className="flex flex-wrap gap-1.5">
                  {profile.certifications.map((cert) => {
                    const chip = (
                      <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded-si-sm border border-si-border bg-si-surface-2 text-xs font-medium text-si-text">
                        <Award className="w-3.5 h-3.5 text-[#6C3483]" />
                        {cert.name}
                      </span>
                    );
                    return cert.url ? (
                      <a key={cert.name} href={cert.url} target="_blank" rel="noreferrer" title={`Verify: ${cert.issuer}`}>
                        {chip}
                      </a>
                    ) : (
                      <span key={cert.name} title={cert.issuer}>
                        {chip}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-12 pt-8 border-t border-si-border">
          {profile.proof.map((item) => (
            <div key={item.label} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-mono font-bold text-[#2B5C9E] tracking-tight">{item.value}</div>
              <div className="text-sm font-semibold text-si-text">{item.label}</div>
              <p className="text-xs text-si-text-muted leading-snug">{item.note}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
