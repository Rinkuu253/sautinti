import React from 'react';
import { Button } from '@satuinti/ui';
import { Mail, Linkedin, MessageSquare, Briefcase, ExternalLink, Globe2 } from 'lucide-react';
import { profile } from '../data/profile';
import { SectionHeading } from './SectionHeading';

const briefTemplate = [
  'Hi Matthew,',
  '',
  'What I need built or fixed:',
  '',
  'What we use today (cloud, tools, apps):',
  '',
  'Timeline:',
  '',
  'Budget range:',
  '',
].join('\n');

const mailtoHref = `mailto:${profile.links.email}?subject=${encodeURIComponent('Project inquiry')}&body=${encodeURIComponent(briefTemplate)}`;

export const ContactSection: React.FC = () => {
  const secondaryLinks = [
    profile.links.upwork && { href: profile.links.upwork, label: 'Hire me on Upwork', icon: Briefcase },
    { href: profile.links.linkedin, label: 'LinkedIn', icon: Linkedin },
    { href: profile.links.whatsapp, label: `WhatsApp ${profile.links.phoneFormatted}`, icon: MessageSquare },
  ].filter(Boolean) as { href: string; label: string; icon: React.ElementType }[];

  return (
    <section id="contact" className="py-16 md:py-20 border-b border-si-border bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6 space-y-6">
          <SectionHeading
            eyebrow="Contact"
            title="Tell me about your project"
            description="A few sentences are enough: what you need, what you use today, your timeline, and a rough budget. I will reply with honest next steps, even if that means pointing you to someone else."
            accent="purple"
          />
          <div className="flex items-center gap-2 text-sm text-si-text-muted">
            <Globe2 className="w-4 h-4 text-si-text-dim" />
            {profile.location} ({profile.timezone}). Overlaps with Asia-Pacific working hours and European mornings.
          </div>
        </div>

        <div className="lg:col-span-6 rounded-si-xl border border-si-border-2 bg-si-surface shadow-sm p-6 sm:p-8 space-y-6">
          <div className="space-y-2">
            <h3 className="text-lg font-bold text-si-text">Email is the fastest way</h3>
            <p className="text-sm text-si-text-muted">
              The button opens a short brief template. {profile.responseTime}.
            </p>
          </div>
          <a href={mailtoHref} className="block">
            <Button
              variant="primary"
              size="lg"
              className="w-full bg-[#2B5C9E] hover:bg-[#23508C] border-transparent"
              icon={<Mail className="w-4 h-4" />}
            >
              {profile.links.email}
            </Button>
          </a>

          <div className="pt-4 border-t border-si-border space-y-2">
            <span className="text-xs font-bold text-si-text-muted uppercase tracking-wider">Or reach me on</span>
            <div className="flex flex-wrap gap-2">
              {secondaryLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-2 rounded-si border border-si-border text-sm text-si-text hover:border-[#2B5C9E]/40 hover:text-[#2B5C9E] transition-colors"
                >
                  <Icon className="w-4 h-4" />
                  {label}
                  <ExternalLink className="w-3 h-3 text-si-text-dim" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
