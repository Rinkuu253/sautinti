import React, { useState } from 'react';
import { Badge, Button } from '@satuinti/ui';
import { Menu, X, ArrowRight } from 'lucide-react';
import { profile } from '../data/profile';

export const navItems = [
  { href: '/#work', label: 'Work' },
  { href: '/#services', label: 'Services' },
  { href: '/#process', label: 'Process' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full bg-si-surface/95 backdrop-blur-md border-b border-si-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="/" className="flex items-center gap-3 group focus:outline-none">
          <img
            src="/logo.png"
            alt="Satu Inti Logo"
            className="w-9 h-9 object-contain rounded-si-sm transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-base tracking-tight text-[#2B5C9E]">SATU</span>
              <span className="font-bold text-base tracking-tight text-si-text">INTI</span>
            </div>
            <span className="text-[11px] text-si-text-muted leading-none">{profile.name}</span>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 text-sm font-medium text-si-text-muted hover:text-si-text hover:bg-si-surface-2 rounded-si transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Badge variant="success" dot={true} className="py-1 px-3">
            Available · {profile.timezone}
          </Badge>
          <a href="/#contact" className="inline-flex">
            <Button
              variant="primary"
              size="sm"
              className="bg-[#2B5C9E] hover:bg-[#23508C] border-transparent"
              iconRight={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Start a project
            </Button>
          </a>
        </div>

        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-si-text-muted hover:text-si-text rounded-si focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden border-b border-si-border bg-si-surface px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm font-medium text-si-text hover:bg-si-surface-2 rounded-si"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-2 border-t border-si-border flex items-center justify-between">
            <Badge variant="success" dot={true}>
              Available · {profile.timezone}
            </Badge>
            <a
              href="/#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-[#2B5C9E] flex items-center gap-1"
            >
              Start a project <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
