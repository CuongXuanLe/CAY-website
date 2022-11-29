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
  },
  plugins: [],
}