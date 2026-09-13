import React from 'react';
import { cn } from '../../utils/cn';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  dot?: boolean;
  removable?: boolean;
  onRemove?: () => void;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  dot = false,
  removable = false,
  onRemove,
  className,
  ...props
}) => {
  const baseClasses = 'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border';

  const variantClasses = {
    primary: 'bg-si-primary-glow text-si-primary border-si-primary-glow',
    success: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30',
    warning: 'bg-amber-500/10 text-amber-500 border-amber-500/30',
    danger: 'bg-rose-500/10 text-rose-500 border-rose-500/30',
    info: 'bg-sky-500/10 text-sky-500 border-sky-500/30',
    neutral: 'bg-si-surface-3 text-si-text-muted border-si-border-2',
  }[variant];

  const dotColorClasses = {
    primary: 'bg-si-primary',
    success: 'bg-emerald-500',
    warning: 'bg-amber-500',
    danger: 'bg-rose-500',
    info: 'bg-sky-500',
    neutral: 'bg-si-text-dim',
  }[variant];

  return (
    <span className={cn(baseClasses, variantClasses, className)} {...props}>
      {dot && <span className={cn('w-1.5 h-1.5 rounded-full shrink-0', dotColorClasses)} />}
      {children}
      {removable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove?.();
          }}
          className="ml-1 hover:opacity-75 focus:outline-none cursor-pointer"
        >
          ×
        </button>
      )}
    </span>
  );
};
