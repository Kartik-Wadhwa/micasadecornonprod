/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        sand: '#f4f0eb',
        stone: '#d6c6b2',
        espresso: '#16110d',
        taupe: '#5f564f',
        accent: '#8d755b',
      },
      boxShadow: {
        glass: '0 24px 60px rgba(28, 22, 17, 0.12)',
        card: '0 30px 70px rgba(22, 17, 13, 0.14)',
      },
      fontFamily: {
        body: ['Manrope', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      letterSpacing: {
        luxe: '0.18em',
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
