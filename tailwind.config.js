/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'],
      },
      colors: {
        debugger: {
          bg: '#0f1419',
          panel: '#1a1f29',
          border: '#2d3748',
          text: '#e2e8f0',
          muted: '#94a3b8',
          accent: '#38bdf8',
          success: '#10b981',
          warning: '#f59e0b',
          error: '#ef4444',
          exec: '#8b5cf6',
          read: '#06b6d4',
          write: '#f97316',
        }
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flicker': 'flicker 2s linear infinite',
      },
      keyframes: {
        flicker: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.8 },
        }
      }
    },
  },
  plugins: [],
};