/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('/src/assets/BAck.webp')",
        'custom-bg2': "url('/src/assets/Back2.webp')",
      },
      fontFamily: {
        uncial: ['"Uncial Antiqua"', 'serif'],
      },
    },
  },
  plugins: [],
};
