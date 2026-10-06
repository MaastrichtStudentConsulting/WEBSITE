import type { Config } from 'tailwindcss';

const config: Config = {
  // Hover styles only on devices with a real mouse (no 'stuck' hover colours after tapping on phones)
  future: { hoverOnlyWhenSupported: true },
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#242E57',
        orange: '#EE9643',
        'light-gray': '#F5F5F5',
        'medium-gray': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Avenir', 'Avenir Next', 'system-ui', 'sans-serif'],
      },
      animation: {
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
      },
      keyframes: {
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
