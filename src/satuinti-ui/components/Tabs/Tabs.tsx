import React from 'react';
import { cn } from '../../utils/cn';

export interface TabItem {
  id: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  tabs: TabItem[];
  active: string;
  onChange: (id: string) => void;
  variant?: 'line' | 'pill';
}

export const Tabs: React.FC<TabsProps> = ({
  tabs,
  active,
  onChange,
  variant = 'line',
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex items-center',
        variant === 'line' ? 'border-b border-si-border gap-2' : 'p-1 bg-si-surface-2 rounded-si gap-1',
        className
      )}
      {...props}
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id;

        if (variant === 'pill') {
          return (
            <button
              key={tab.id}
              type="button"
              disabled={tab.disabled}
              onClick={() => onChange(tab.id)}
              className={cn(
                'flex items-center gap-2 px-3 py-1.5 rounded-si-sm text-xs font-semibold transition-all disabled:opacity-40',
                isActive
                  ? 'bg-si-surface text-si-primary shadow-sm'
                  : 'text-si-text-muted hover:text-si-text'
              )}
            >
              {tab.icon && <span>{tab.icon}</span>}
              <span>{tab.label}</span>
              {tab.badge}
            </button>
          );
        }

        return (
          <button
            key={tab.id}
            type="button"
            disabled={tab.disabled}
            onClick={() => onChange(tab.id)}
            className={cn(
              'flex items-center gap-2 px-4 py-2.5 text-sm font-semibold border-b-2 -mb-px transition-all disabled:opacity-40',
              isActive
                ? 'border-si-primary text-si-primary'
                : 'border-transparent text-si-text-muted hover:text-si-text hover:border-si-border-2'
            )}
          >
            {tab.icon && <span>{tab.icon}</span>}
            <span>{tab.label}</span>
            {tab.badge}
          </button>
        );
      })}
    </div>
  );
};
