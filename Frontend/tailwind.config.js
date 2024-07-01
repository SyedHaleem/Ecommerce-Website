/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'custom-slate': '0px 0px 5px 5px rgba(50, 150, 150, 0.5)',
      }
    }
  },
  plugins: [
    require('daisyui'),
  ],
}