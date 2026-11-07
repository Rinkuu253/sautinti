import React, { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react';
import { projects, SystemProject } from '../data/projects';
import { navigate, projectPath } from '../lib/router';
import { ProjectVisual, hasVisual } from './ProjectVisual';

interface ProjectPageProps {
  project: SystemProject;
}

const Block: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
  <section className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-10 py-10 border-t border-si-border-2">
    <h2 className="md:col-span-3 text-xs font-semibold uppercase tracking-[0.14em] text-[#2B5C9E] pt-1">{label}</h2>
    <div className="md:col-span-9 max-w-2xl">{children}</div>
  </section>
);

export const ProjectPage: React.FC<ProjectPageProps> = ({ project }) => {
  useEffect(() => {
    const previous = document.title;
    document.title = `${project.name} | Matthew Marvelino`;
    return () => {
      document.title = previous;
    };
  }, [project.name]);

  const index = projects.findIndex((p) => p.id === project.id);
  const next = projects[(index + 1) % projects.length];

  return (
    <article className="bg-si-bg">
      <header className="bg-[#2B5C9E]/[0.07] text-si-text border-b border-si-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 md:pb-20">
          <a
            href="/#work"
            className="inline-flex items-center gap-1.5 text-sm text-si-text-muted hover:text-[#2B5C9E] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> All projects
          </a>

          <div className="mt-10 space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#6C3483]">
              {project.role} · {project.status}
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] max-w-3xl">{project.name}</h1>
            <p className="text-lg sm:text-xl text-si-text-muted leading-relaxed max-w-2xl">{project.outcome}</p>
          </div>

          {project.metrics && project.metrics.length > 0 && (
            <dl className="mt-10 pt-6 border-t border-si-border-2 grid grid-cols-2 gap-6 max-w-xl">
              {project.metrics.map((m) => (
                <div key={m.label} className="space-y-1">
                  <dd className="text-xl sm:text-2xl font-mono font-semibold text-[#2B5C9E]">{m.value}</dd>
                  <dt className="text-xs text-si-text-muted">{m.label}</dt>
                </div>
              ))}
            </dl>
          )}
        </div>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {hasVisual(project) && (
          <div className="-mt-8 md:-mt-12 mb-6 relative">
            <ProjectVisual project={project} large={Boolean(project.imageUrl)} />
          </div>
        )}

        <div className="py-6">
          <Block label="Overview">
            <p className="text-lg text-si-text leading-relaxed">{project.summary}</p>
          </Block>

          <Block label="The problem">
            <p className="text-lg text-si-text leading-relaxed">{project.problem}</p>
          </Block>

          <Block label="What I built">
            <p className="text-lg text-si-text leading-relaxed">{project.solution}</p>
          </Block>

          {project.challenge && (
            <Block label="The hard part">
              <p className="text-lg text-si-text leading-relaxed border-l-2 border-[#2B5C9E] pl-5">
                {project.challenge}
              </p>
            </Block>
          )}

          <Block label="How it works">
            <ol className="space-y-5">
              {project.architectureDetails.map((detail, i) => (
                <li key={detail} className="flex gap-4">
                  <span className="font-mono text-sm text-si-text-dim pt-0.5 w-6 shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-base text-si-text leading-relaxed">{detail}</span>
                </li>
              ))}
            </ol>
          </Block>

          {project.gallery && project.gallery.length > 0 && (
            <section className="py-10 border-t border-si-border-2 space-y-6">
              <h2 className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2B5C9E]">In the app</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {project.gallery.map((src) => (
                  <div
                    key={src}
                    className="zoom-frame rounded-si-lg border border-si-border-2 bg-si-surface shadow-[0_18px_40px_-24px_rgba(13,17,23,0.35)]"
                  >
                    <img
                      src={src}
                      alt={`${project.name} screen`}
                      loading="lazy"
                      className="w-full aspect-[16/10] object-cover object-left-top bg-white"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          <Block label="Stack">
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 text-sm font-mono rounded bg-si-surface border border-si-border-2 text-si-text"
                >
                  {tech}
                </span>
              ))}
            </div>
            {project.links && project.links.length > 0 && (
              <div className="flex flex-wrap gap-4 mt-6">
                {project.links.map((link) => (
                  <a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#2B5C9E] hover:underline"
                  >
                    {link.label} <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ))}
              </div>
            )}
          </Block>
        </div>
      </div>

      <footer className="bg-si-surface border-t border-si-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-2 gap-8">
          <a
            href="/#contact"
            className="group flex items-center justify-between gap-4 p-6 rounded-si-lg bg-[#2B5C9E] text-white hover:bg-[#23508C] transition-colors"
          >
            <span className="text-lg font-semibold">Need something similar?</span>
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <button
            type="button"
            onClick={() => navigate(projectPath(next.id))}
            className="group text-left flex items-center justify-between gap-4 p-6 rounded-si-lg border border-si-border-2 hover:border-[#2B5C9E] transition-colors"
          >
            <span>
              <span className="block text-xs uppercase tracking-[0.14em] text-si-text-dim">Next project</span>
              <span className="block text-lg font-semibold text-si-text group-hover:text-[#2B5C9E] transition-colors">
                {next.name}
              </span>
            </span>
            <ArrowUpRight className="w-5 h-5 text-si-text-dim group-hover:text-[#2B5C9E]" />
          </button>
        </div>
      </footer>
    </article>
  );
};
