import React from 'react';
import { Button, Card, CardBody, Badge } from '@satuinti/ui';
import { ArrowRight, Cloud, Workflow, Code2, CheckCircle2 } from 'lucide-react';
import { profile } from '../data/profile';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden py-14 md:py-20 border-b border-si-border bg-gradient-to-b from-si-surface via-[#f8fafc] to-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2 mb-6">
          <Badge variant="primary" className="bg-[#2B5C9E]/10 text-[#2B5C9E] border-[#2B5C9E]/30 font-mono text-xs">
            {profile.title}
          </Badge>
          <span className="text-xs font-mono text-si-text-dim">
            {profile.focus}
          </span>
          <span className="text-xs font-mono text-si-text-dim">
            {profile.location}
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-si-text tracking-tight leading-[1.15]">
              Turning ideas into{' '}
              <span className="text-[#2B5C9E] underline decoration-[#2B5C9E]/30 decoration-2 underline-offset-4">
                working systems.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-si-text-muted leading-relaxed max-w-3xl">
              I build infrastructure, applications, and automations that solve everyday problems. Focused on AWS cloud operations, practical cost reduction, and automated service integration.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="#systems">
                <Button
                  variant="primary"
                  size="md"
                  className="bg-[#2B5C9E] hover:bg-[#23508C] border-transparent"
                  iconRight={<ArrowRight className="w-4 h-4" />}
                >
                  Review Case Studies
                </Button>
              </a>

              <a href="#capabilities">
                <Button
                  variant="outline"
                  size="md"
                  className="border-si-border-2 hover:border-[#2B5C9E] hover:text-[#2B5C9E]"
                  icon={<Cloud className="w-4 h-4 text-[#2B5C9E]" />}
                >
                  Capabilities & Topology
                </Button>
              </a>

              <a href="#contact">
                <Button
                  variant="ghost"
                  size="md"
                  className="text-si-text-muted hover:text-si-text"
                >
                  Direct Dialogue
                </Button>
              </a>
            </div>
          </div>

          <div className="lg:col-span-4">
            <Card hoverable={false} className="border-si-border-2 bg-si-surface shadow-sm">
              <div className="px-4 py-3 border-b border-si-border bg-si-surface-2/70 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-si-text flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#2B5C9E]" />
                  Key Highlights
                </span>
              </div>
              <CardBody className="p-4 space-y-4">
                {profile.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1 pb-3 border-b border-si-border/60 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono text-si-text-muted">{m.label}</span>
                      <span className="text-xs font-mono font-bold text-si-text">{m.value}</span>
                    </div>
                    <p className="text-[11px] text-si-text-dim leading-snug">{m.note}</p>
                  </div>
                ))}
              </CardBody>
            </Card>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-12 pt-8 border-t border-si-border">
          <Card hoverable={true} className="border-si-border bg-si-surface">
            <CardBody className="p-5 space-y-2">
              <div className="w-8 h-8 rounded-si-sm bg-[#2B5C9E]/10 text-[#2B5C9E] flex items-center justify-center font-bold">
                <Cloud className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-si-text">Cloud & Infrastructure</h2>
              <p className="text-xs text-si-text-muted leading-relaxed">
                AWS deployment (ECS, EC2, ALB, RDS, S3, CloudFront), container configurations, network routing, and cost right-sizing.
              </p>
            </CardBody>
          </Card>

          <Card hoverable={true} className="border-si-border bg-si-surface">
            <CardBody className="p-5 space-y-2">
              <div className="w-8 h-8 rounded-si-sm bg-[#6C3483]/10 text-[#6C3483] flex items-center justify-center font-bold">
                <Workflow className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-si-text">Automation & Integration</h2>
              <p className="text-xs text-si-text-muted leading-relaxed">
                Multi-channel pipelines, n8n orchestration, WhatsApp AI helpdesk with human-in-the-loop review, and Microsoft Graph APIs.
              </p>
            </CardBody>
          </Card>

          <Card hoverable={true} className="border-si-border bg-si-surface">
            <CardBody className="p-5 space-y-2">
              <div className="w-8 h-8 rounded-si-sm bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold">
                <Code2 className="w-4 h-4" />
              </div>
              <h2 className="text-base font-bold text-si-text">Application Engineering</h2>
              <p className="text-xs text-si-text-muted leading-relaxed">
                Full-stack coding (React, NestJS, PostgreSQL, SatuInti UI) supporting operational tools, security models (RLS), and edge clients.
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
