import React, { forwardRef } from 'react';
import { cn } from '../../utils/cn';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  icon?: React.ReactNode;
  iconRight?: React.ReactNode;
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  loading = false,
  disabled,
  className,
  ...props
}, ref) => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-si transition-all duration-200 select-none whitespace-nowrap active:scale-[0.98] disabled:opacity-50 disabled:pointer-events-none disabled:active:scale-100 gap-2 border';

  const sizeClasses = {
    sm: 'text-xs px-2.5 py-1',
    md: 'text-sm px-4 py-2',
    lg: 'text-base px-5 py-2.5',
    xl: 'text-lg px-6 py-3.5',
  }[size];

  const variantClasses = {
    primary: 'bg-si-primary text-white border-transparent hover:bg-si-primary-hov shadow-sm hover:shadow-[0_0_12px_var(--si-primary-glow)]',
    secondary: 'bg-si-surface-2 text-si-text border-si-border-2 hover:bg-si-surface-3',
    outline: 'bg-transparent text-si-text border-si-border-2 hover:border-si-primary hover:text-si-primary hover:bg-si-primary-glow/20',
    ghost: 'bg-transparent text-si-text-muted border-transparent hover:bg-si-surface-2 hover:text-si-text',
    success: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/30 hover:bg-emerald-500 hover:text-white',
    warning: 'bg-amber-500/10 text-amber-500 border-amber-500/30 hover:bg-amber-500 hover:text-white',
    danger: 'bg-rose-500/10 text-rose-500 border-rose-500/30 hover:bg-rose-500 hover:text-white',
  }[variant];

  return (
    <button
      ref={ref}
      disabled={disabled || loading}
      className={cn(baseClasses, sizeClasses, variantClasses, className)}
      {...props}
    >
      {loading ? (
        <span className="inline-block w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-1" />
      ) : icon ? (
        <span className="shrink-0">{icon}</span>
      ) : null}
      {children}
      {!loading && iconRight && <span className="shrink-0">{iconRight}</span>}
    </button>
  );
});

Button.displayName = 'Button';
