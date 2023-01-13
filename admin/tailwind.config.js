/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '105rem': '105rem',
      },
      backgroundImage: {
        'login' : "url('https://images.unsplash.com/photo-1617463874381-85b513b3e991')",
      },
      colors: {
        'blur': 'rgba(20,20,20, 0.4)',
        'transparent': 'rgba(255,255,255, 0)',
      },
      gridTemplateColumns: {
        "1/5": "1fr 5fr" 
      }
    },
    screens: {
      'sm':'320px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl': '1546px'
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}