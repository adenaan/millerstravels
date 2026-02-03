
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto'],
        display: ['Playfair Display', 'serif']
      },
      colors: {
        gold: '#d6b25e',
        purple: '#7b4bc4',
        cream: '#faf7f2'
      },
      boxShadow: {
        card: '0 12px 30px rgba(0,0,0,0.08)'
      }
    },
  },
  plugins: [],
}
