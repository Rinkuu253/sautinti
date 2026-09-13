import React, { useState } from 'react';
import { Card, CardBody, Badge } from '@satuinti/ui';
import { Cloud, Server, Network, Database, Check, Workflow } from 'lucide-react';
import { capabilities } from '../data/capabilities';

export const ArchitectureLab: React.FC = () => {
  const [activeDomainId, setActiveDomainId] = useState<string>('infra-cloud');

  const activeDomain = capabilities.find((c) => c.id === activeDomainId) || capabilities[0];

  return (
    <section id="capabilities" className="py-16 border-b border-si-border bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#6C3483] tracking-wider">
              Capabilities & Architecture
            </span>
            <span className="w-12 h-px bg-[#6C3483]/30" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-si-text tracking-tight">
            Connecting Infra, Application, and Automation
          </h2>
          <p className="text-sm text-si-text-muted max-w-3xl">
            Practical competencies spanning operational cloud infrastructure, automated service integration, and full-stack engineering.
          </p>
        </div>

        <Card hoverable={false} className="border-si-border-2 bg-si-surface shadow-sm">
          <div className="px-5 py-3 border-b border-si-border bg-si-surface-2/60 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <Workflow className="w-4 h-4 text-[#2B5C9E]" />
              <span className="text-xs font-mono font-bold text-si-text tracking-wider">
                System Topology: Cloud, Automation, and Applications
              </span>
            </div>
          </div>

          <CardBody className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-si border border-si-border bg-si-surface-2/70 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-si-text flex items-center gap-1.5">
                    <Network className="w-3.5 h-3.5 text-[#2B5C9E]" />
                    1. INGESTION & CHANNELS
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#2B5C9E]/10 text-[#2B5C9E]">
                    INGRESS
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-si-surface rounded border border-si-border font-mono text-[11px] text-si-text">
                    • WhatsApp Wablas API
                  </div>
                  <div className="p-2 bg-si-surface rounded border border-si-border font-mono text-[11px] text-si-text">
                    • Qiscus Omnichannel
                  </div>
                  <div className="p-2 bg-si-surface rounded border border-si-border font-mono text-[11px] text-si-text">
                    • Webhooks & Client QR
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-si border border-[#2B5C9E]/30 bg-[#2B5C9E]/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#2B5C9E] flex items-center gap-1.5">
                    <Server className="w-3.5 h-3.5" />
                    2. AUTOMATION PIPELINE
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-700">
                    IDEMPOTENT
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-si-surface rounded border border-[#2B5C9E]/20 font-mono text-[11px] text-si-text">
                    • n8n Normalizer Workflows
                  </div>
                  <div className="p-2 bg-si-surface rounded border border-[#2B5C9E]/20 font-mono text-[11px] text-si-text">
                    • AI Response Triage (Aura)
                  </div>
                  <div className="p-2 bg-si-surface rounded border border-[#2B5C9E]/20 font-mono text-[11px] text-si-text">
                    • Teams Human Review Gate
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-si border border-[#6C3483]/30 bg-[#6C3483]/5 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#6C3483] flex items-center gap-1.5">
                    <Cloud className="w-3.5 h-3.5" />
                    3. CLOUD & INFRASTRUCTURE
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-[#6C3483]/10 text-[#6C3483]">
                    PRODUCTION
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-si-surface rounded border border-[#6C3483]/20 font-mono text-[11px] text-si-text">
                    • AWS ECS & EC2 Workloads
                  </div>
                  <div className="p-2 bg-si-surface rounded border border-[#6C3483]/20 font-mono text-[11px] text-si-text">
                    • ALB Routing & CloudFront CDN
                  </div>
                  <div className="p-2 bg-si-surface rounded border border-[#6C3483]/20 font-mono text-[11px] text-si-text">
                    • Self-Hosted Lab (Docker)
                  </div>
                </div>
              </div>
              <div className="p-4 rounded-si border border-si-border bg-si-surface-2/70 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-si-text flex items-center gap-1.5">
                    <Database className="w-3.5 h-3.5 text-[#2B5C9E]" />
                    4. APPLICATION & DATA
                  </span>
                  <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-700">
                    PERSISTENCE
                  </span>
                </div>
                <div className="space-y-2 text-xs">
                  <div className="p-2 bg-si-surface rounded border border-si-border font-mono text-[11px] text-si-text">
                    • RDS PostgreSQL + Local DB
                  </div>
                  <div className="p-2 bg-si-surface rounded border border-si-border font-mono text-[11px] text-si-text">
                    • MS Graph API & SharePoint
                  </div>
                  <div className="p-2 bg-si-surface rounded border border-si-border font-mono text-[11px] text-si-text">
                    • SatuInti UI Components
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 p-3 bg-si-surface-2 rounded-si border border-si-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-si-text-muted">
              <span>Operational infrastructure linked directly to workflow automation.</span>
              <span className="text-[#2B5C9E] font-medium font-mono">Measured by cost reduction and reliability.</span>
            </div>
          </CardBody>
        </Card>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {capabilities.map((domain) => {
              const isActive = activeDomainId === domain.id;
              return (
                <button
                  key={domain.id}
                  type="button"
                  onClick={() => setActiveDomainId(domain.id)}
                  className={`px-4 py-2 rounded-si text-xs font-bold font-mono transition-all border ${
                    isActive
                      ? 'bg-[#2B5C9E] text-white border-[#2B5C9E] shadow-sm'
                      : 'bg-si-surface text-si-text-muted border-si-border hover:border-si-border-2 hover:text-si-text'
                  }`}
                >
                  {domain.title}
                </button>
              );
            })}
          </div>
          <Card hoverable={false} className="border-si-border bg-si-surface">
            <CardBody className="p-6 space-y-6">
              <div>
                <h3 className="text-lg font-bold text-si-text">{activeDomain.title}</h3>
                <p className="text-xs sm:text-sm text-si-text-muted mt-1 leading-relaxed">
                  {activeDomain.description}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                {activeDomain.competencies.map((comp, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-si border border-si-border bg-si-surface-2/40 space-y-3"
                  >
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <h4 className="text-xs font-bold text-si-text leading-tight">{comp.name}</h4>
                    </div>

                    <p className="text-xs text-si-text-muted leading-relaxed">
                      {comp.description}
                    </p>

                    <div className="flex flex-wrap gap-1 pt-2 border-t border-si-border/60">
                      {comp.technologies.map((t) => (
                        <span
                          key={t}
                          className="px-1.5 py-0.5 text-[10px] font-mono rounded bg-si-surface text-si-text-muted border border-si-border"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </section>
  );
};
