/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{jsx,tsx}'],
  plugins: [],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FFE16D',
          50: '#FFFDF7',
          100: '#FFFAE7',
          200: '#FFF4C9',
          300: '#FFEEAA',
          400: '#FFE78C',
          500: '#FFE16D',
          600: '#FFD535',
          700: '#FCC800',
          800: '#C49B00',
          900: '#8C6F00',
          950: '#705900',
        },
      },
    },
  },
};
