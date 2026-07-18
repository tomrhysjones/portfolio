/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0A0F1A',
          900: '#0D1420',
          850: '#111827',
          800: '#151E2E',
          700: '#1D2839',
          600: '#293347',
        },
        parchment: {
          50: '#F4F1EA',
          100: '#EDE8DD',
          200: '#D8D1C2',
          300: '#B7AE9C',
          400: '#8F8676',
        },
        accent: {
          50: '#EEF4FF',
          100: '#DDE9FF',
          200: '#B7CEFB',
          300: '#8FB0F0',
          400: '#6D93E3',
          500: '#5178D4',
          600: '#3F60B8',
          700: '#334C93',
        },
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'sans-serif',
        ],
        display: [
          'Fraunces',
          'Georgia',
          'Cambria',
          '"Times New Roman"',
          'serif',
        ],
        mono: [
          'JetBrains Mono',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'monospace',
        ],
      },
      spacing: {
        4.5: '1.125rem',
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      boxShadow: {
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 40px -24px rgba(0,0,0,0.6)',
        soft: '0 10px 30px -20px rgba(0,0,0,0.7)',
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(81,120,212,0.15), transparent 60%)',
        'grid-lines':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(8px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
