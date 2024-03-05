/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        black: '#020204',
        'dark-green': '#033525',
        silver: '#DEE2E6',
        'light-green': '#0ccf91',
      },
      fontFamily: {
        sans: ['Lexend', 'sans-serif'],
        serif: ['Zilla Slab', 'serif'],
      },
      borderRadius: {
        'many-big': '4rem',
      },
    },
  },
  plugins: [],
};
