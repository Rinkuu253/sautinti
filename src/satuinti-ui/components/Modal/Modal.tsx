import React, { useEffect } from 'react';
import { cn } from '../../utils/cn';

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: React.ReactNode;
  children: React.ReactNode;
  footer?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  closeOnOverlay?: boolean;
  className?: string;
}

export const Modal: React.FC<ModalProps> = ({
  open,
  onClose,
  title,
  children,
  footer,
  size = 'md',
  closeOnOverlay = true,
  className,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  const sizeClasses = {
    sm: 'max-w-sm',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
  }[size];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeOnOverlay ? onClose : undefined}
      />

      {/* Modal Box */}
      <div
        className={cn(
          'relative z-10 w-full bg-si-surface border border-si-border rounded-si-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200',
          sizeClasses,
          className
        )}
      >
        {/* Header */}
        {title && (
          <div className="px-6 py-4 border-b border-si-border flex items-center justify-between">
            <h3 className="text-base font-bold text-si-text">{title}</h3>
            <button
              type="button"
              onClick={onClose}
              className="text-si-text-dim hover:text-si-text p-1 rounded-md transition-colors"
            >
              ✕
            </button>
          </div>
        )}

        {/* Content */}
        <div className="p-6 text-sm text-si-text leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-3.5 border-t border-si-border bg-si-surface-2/40 flex items-center justify-end gap-2">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
};
