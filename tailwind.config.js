
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: '#d6b25e',
        purple: '#7b4bc4',
        cream: '#faf7f2',
      },
      boxShadow: {
        card: '0 8px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
