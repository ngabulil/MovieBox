/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('/src/assets/bg-header.jpg')",
      },
      screens: {
        'max-1350': { 'max': '1350px' },
        'max-1200': { 'max': '1200px' },
        'max-1100': { 'max': '1100px' },
        'max-950': { 'max': '950px' },
        'max-850': { 'max': '850px' },
        'max-780': { 'max': '780px' },
        'max-700': { 'max': '700px' },
        'max-650': { 'max': '650px' },
        'max-600': { 'max': '600px' },
        'max-550': { 'max': '550px' },
        'max-500': { 'max': '500px' },
        'max-450': { 'max': '450px' },
        'max-400': { 'max': '400px' },
        'max-350': { 'max': '350px' },
        'max-300': { 'max': '300px' },
      }
    },
  },
  plugins: [],
}