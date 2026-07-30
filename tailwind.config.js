/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#050505',
        surface: {
          50: '#0a0a0c',
          100: '#121216',
          200: '#1a1a22',
          300: '#242430',
          400: '#2e2e3e',
        },
        electric: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          glow: '#0066ff',
        },
        cyberpurple: {
          400: '#c084fc',
          500: '#a855f7',
          600: '#9333ea',
          glow: '#7c3aed',
        },
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'orbit': 'orbit 25s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        'gradient-y': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'center top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'center bottom'
          }
        },
        'gradient-x': {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          }
        },
        'gradient-xy': {
          '0%, 100%': {
            'background-size': '400% 400%',
            'background-position': 'left top'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right bottom'
          }
        },
        'pulse-glow': {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        'shimmer': {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      boxShadow: {
        'glow-blue': '0 0 35px -5px rgba(59, 130, 246, 0.4)',
        'glow-purple': '0 0 35px -5px rgba(168, 85, 247, 0.4)',
        'glow-combined': '0 0 50px -10px rgba(59, 130, 246, 0.3), 0 0 50px -10px rgba(168, 85, 247, 0.3)',
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
      backgroundImage: {
        'radial-gradient-hero': 'radial-gradient(circle at 50% 30%, rgba(59, 130, 246, 0.15), rgba(168, 85, 247, 0.1) 45%, transparent 70%)',
        'noise-pattern': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.03'/%3E%3C/svg%3E\")",
      }
    },
  },
  plugins: [],
}
