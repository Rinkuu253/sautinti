/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../satuinti-ui/src/**/*.{js,ts,jsx,tsx}',
    '../satuinti-ui/dist/**/*.{js,mjs,cjs}',
  ],
  theme: {
    extend: {
      colors: {
        si: {
          bg: 'var(--si-bg)',
          surface: 'var(--si-surface)',
          'surface-2': 'var(--si-surface-2)',
          'surface-3': 'var(--si-surface-3)',
          border: 'var(--si-border)',
          'border-2': 'var(--si-border-2)',
          text: 'var(--si-text)',
          'text-muted': 'var(--si-text-muted)',
          'text-dim': 'var(--si-text-dim)',
          primary: 'var(--si-primary)',
          'primary-hov': 'var(--si-primary-hov)',
          'primary-glow': 'var(--si-primary-glow)',
          success: 'var(--si-success)',
          warning: 'var(--si-warning)',
          danger: 'var(--si-danger)',
          info: 'var(--si-info)',
          brand: '#2B5C9E',
          'brand-dark': '#23508C',
          purple: '#6C3483',
          'purple-dark': '#5B2C6F',
        },
      },
      borderRadius: {
        'si-sm': 'var(--si-radius-sm)',
        si: 'var(--si-radius)',
        'si-lg': 'var(--si-radius-lg)',
        'si-xl': 'var(--si-radius-xl)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
