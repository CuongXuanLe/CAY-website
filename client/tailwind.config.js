/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens: {
      'sm':'320px',
      'md':'768px',
      'lg':'1024px',
      'xl':'1280px',
      '2xl': '1546px'
    },
    extend: {
      spacing: {
        '1.5': '0.375rem',
        '104': '26rem',
        '128': '32rem',
        '232': '58rem'
      },
      colors: {
        'blur': 'rgba(20,20,20, 0.4)',
      },
      fontFamily: {
        'lato': 'Lato, sans-serif',
        'playfair': 'Playfair Display, serif'
      },
    },
  },
  plugins: [],
}