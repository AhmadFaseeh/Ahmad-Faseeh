/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#080808',
        'bg-secondary': '#111111',
        'bg-card': '#161616',
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        'text-warm': '#F5F0EB',
        'border-dim': '#2a2a2a',
        'dot-accent': '#FFFFFF',
      },
      fontFamily: {
        display: ['Oswald', 'sans-serif'],
        body: ['Raleway', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      letterSpacing: {
        'widest-plus': '0.15em',
        'ultra-wide': '0.2em',
      },
      animation: {
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        }
      }
    },
  },
  plugins: [],
}
