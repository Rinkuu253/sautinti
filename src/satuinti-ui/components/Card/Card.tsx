import React from 'react';
import { cn } from '../../utils/cn';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hoverable?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  hoverable = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'bg-si-surface border border-si-border rounded-si-lg shadow-sm transition-all duration-200 overflow-hidden',
        hoverable && 'hover:border-si-border-2 hover:shadow-md',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export interface CardHeaderProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'title'> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  action?: React.ReactNode;
}

export const CardHeader: React.FC<CardHeaderProps> = ({
  title,
  subtitle,
  action,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('p-4 border-b border-si-border flex items-center justify-between gap-2', className)}
      {...props}
    >
      <div>
        {title && <h3 className="text-sm font-bold text-si-text">{title}</h3>}
        {subtitle && <p className="text-xs text-si-text-muted mt-0.5">{subtitle}</p>}
        {children}
      </div>
      {action && <div>{action}</div>}
    </div>
  );
};

export interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardBody: React.FC<CardBodyProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn('p-4', className)} {...props}>
      {children}
    </div>
  );
};

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardFooter: React.FC<CardFooterProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('p-3 border-t border-si-border bg-si-surface-2/60', className)}
      {...props}
    >
      {children}
    </div>
  );
};
