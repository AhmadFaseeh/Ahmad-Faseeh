/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sand-light': '#F5EFEB',
        'sand-medium': '#EDE5DC',
        'sand-card': '#FFFFFF',
        'sand-card-soft': '#FAF7F2',
        'sand-badge': '#EADBCC',
        'sand-border': '#DECFC0',
        'sand-border-dark': '#B89F88',
        'espresso-dark': '#231709',
        'espresso-body': '#4A3525',
        'espresso-muted': '#7D634E',
        'bronze': '#A75D2B',
        'bronze-hover': '#8C4B1F',
        'caramel': '#C67D43',
      },
      fontFamily: {
        display: ['Oswald', 'system-ui', 'sans-serif'],
        body: ['Raleway', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'JetBrains Mono', 'monospace'],
      },
      letterSpacing: {
        'widest-plus': '0.15em',
        'ultra-wide': '0.25em',
        'cyber': '0.35em',
      },
      animation: {
        'marquee': 'marquee 30s linear infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      },
      boxShadow: {
        'warm-sm': '0 2px 8px -2px rgba(35, 23, 9, 0.05)',
        'warm-md': '0 10px 25px -5px rgba(35, 23, 9, 0.08), 0 1px 3px rgba(0, 0, 0, 0.03)',
        'warm-lg': '0 20px 40px -10px rgba(167, 93, 43, 0.16), 0 4px 12px rgba(35, 23, 9, 0.05)',
      }
    },
  },
  plugins: [],
}
