import React from 'react';
import { Card, CardBody, Button, Badge } from '@satuinti/ui';
import { Mail, ExternalLink, Linkedin, Phone, MessageSquare } from 'lucide-react';
import { profile } from '../data/profile';

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-16 border-b border-si-border bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#6C3483] tracking-wider">
              Contact & Inquiries
            </span>
            <span className="w-12 h-px bg-[#6C3483]/30" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-si-text tracking-tight">
            Get in Touch
          </h2>
          <p className="text-sm text-si-text-muted max-w-2xl">
            Available for Cloud Infrastructure, AWS FinOps optimization, and automation integration engineering opportunities. Reach out via LinkedIn, email, or telephone.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card hoverable={true} className="border-si-border bg-si-surface">
            <CardBody className="p-6 space-y-4">
              <div className="w-10 h-10 rounded-si-sm bg-[#2B5C9E]/10 text-[#2B5C9E] flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-si-text">Professional Network (LinkedIn)</h3>
                <p className="text-xs text-si-text-muted mt-1">
                  Connect for official career history, recommendations, and professional messaging.
                </p>
              </div>
              <div className="pt-2">
                <a
                  href={profile.links.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button
                    variant="primary"
                    size="sm"
                    className="w-full bg-[#2B5C9E] hover:bg-[#23508C] text-xs font-mono"
                    icon={<Linkedin className="w-3.5 h-3.5" />}
                    iconRight={<ExternalLink className="w-3.5 h-3.5" />}
                  >
                    View LinkedIn Profile
                  </Button>
                </a>
              </div>
            </CardBody>
          </Card>
          <Card hoverable={true} className="border-si-border bg-si-surface">
            <CardBody className="p-6 space-y-4">
              <div className="w-10 h-10 rounded-si-sm bg-[#6C3483]/10 text-[#6C3483] flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-si-text">Direct Electronic Mail</h3>
                <p className="text-xs text-si-text-muted mt-1">
                  Primary inbox for role proposals, technical scope, and engineering consultation.
                </p>
              </div>
              <div className="pt-2">
                <a href={`mailto:${profile.links.email}`} className="block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-si-border-2 hover:border-[#6C3483] hover:text-[#6C3483] text-xs font-mono"
                    icon={<Mail className="w-3.5 h-3.5" />}
                  >
                    {profile.links.email}
                  </Button>
                </a>
              </div>
            </CardBody>
          </Card>
          <Card hoverable={true} className="border-si-border bg-si-surface">
            <CardBody className="p-6 space-y-4">
              <div className="w-10 h-10 rounded-si-sm bg-emerald-500/10 text-emerald-600 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base font-bold text-si-text">Direct Telephone / WhatsApp</h3>
                <p className="text-xs text-si-text-muted mt-1">
                  Direct mobile contact for immediate communications and technical calls.
                </p>
              </div>
              <div className="pt-2 space-y-2">
                <a href={`tel:${profile.links.phone}`} className="block">
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full border-si-border-2 hover:border-emerald-500 hover:text-emerald-600 text-xs font-mono"
                    icon={<Phone className="w-3.5 h-3.5" />}
                  >
                    Call: {profile.links.phoneFormatted}
                  </Button>
                </a>
                <a
                  href={`https://wa.me/6287880324362`}
                  target="_blank"
                  rel="noreferrer"
                  className="block"
                >
                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-xs font-mono text-emerald-700 hover:bg-emerald-500/10"
                    icon={<MessageSquare className="w-3.5 h-3.5" />}
                    iconRight={<ExternalLink className="w-3 h-3" />}
                  >
                    Chat on WhatsApp
                  </Button>
                </a>
              </div>
            </CardBody>
          </Card>
        </div>

        <div className="p-4 rounded-si border border-si-border bg-si-surface flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-si-text-muted">
          <span>Based in Indonesia. Open to remote and hybrid opportunities.</span>
          <span className="text-si-text-dim font-mono">Response typically within 24 hours.</span>
        </div>
      </div>
    </section>
  );
};
