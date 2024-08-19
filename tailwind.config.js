/** @type {import('tailwindcss').Config} */
// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-custom': 'linear-gradient(to right, #EAFF6A, #1A8CB0)',
      },
      fontFamily: {
        sans: ['Montserrat', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Roboto Slab', 'serif'],
        display: ['Outfit', 'sans-serif'],
        body: ['Cormorant Garamond', 'serif'],
      },
    },
  },
  plugins: [],
};
