/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: {
          50: '#E8FDE8',
          100: '#D0FBD1',
          200: '#A2F6A3',
          300: '#73F275',
          400: '#44EE47',
          500: '#11BA14', // Main brand color
          600: '#15EA19',
          700: '#0D8C0F',
          800: '#095D0A',
          900: '#042F05',
        }
      }
    },
  },
  plugins: [],
};
