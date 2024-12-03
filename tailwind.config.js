/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    colors: {
      'bg-register': '#3A4144',
      'white': '#FFFFFF',
      'input-color': '#B0C0D4',
      'btn-register': '#4E11DB',
      'bg-login': '#272A2F',
      'input-login': '#ACABAB',
      'register': '#D136E9',
      'bg-progress': '#e5e7eb',
      'progress': '#3b82f6',
      'bg-home': '#18181b',
      'nav-home': 'rgb(255, 255, 255, 0.8)',
      'input-home': 'rgb(255,255, 255, 0.24)',
      'btn-home': '#00AC1C'
      
    },
    fontFamily:{
      'sans': ['Inter', 'sans-serif']
   },
    extend: {},
  },
  plugins: [],
}

