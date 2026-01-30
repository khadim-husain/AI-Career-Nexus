/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          blue: '#00D9FF',
          purple: '#B026FF',
          pink: '#FF006B',
          green: '#00FFB9',
          yellow: '#FFD600',
        },
        dark: {
          900: '#0A0A0F',
          800: '#13131A',
          700: '#1C1C26',
          600: '#252533',
          500: '#2E2E40',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'neon-gradient': 'linear-gradient(135deg, #00D9FF 0%, #B026FF 50%, #FF006B 100%)',
        'skill-gradient': 'linear-gradient(135deg, #00FFB9 0%, #00D9FF 100%)',
        'ai-gradient': 'linear-gradient(135deg, #B026FF 0%, #FF006B 100%)',
      },
      boxShadow: {
        'neon-blue': '0 0 20px rgba(0, 217, 255, 0.5), 0 0 40px rgba(0, 217, 255, 0.3)',
        'neon-purple': '0 0 20px rgba(176, 38, 255, 0.5), 0 0 40px rgba(176, 38, 255, 0.3)',
        'neon-pink': '0 0 20px rgba(255, 0, 107, 0.5), 0 0 40px rgba(255, 0, 107, 0.3)',
        'glow': '0 0 30px rgba(0, 217, 255, 0.4)',
        'float': '0 10px 40px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.5 },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        }
      }
    },
  },
  plugins: [],
}
