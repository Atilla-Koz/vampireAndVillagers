/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/BAck.webp')",
      },
      fontFamily: {
        uncial: ['"Uncial Antiqua"', 'serif'],
      },
    },
  },
  plugins: [],
};
