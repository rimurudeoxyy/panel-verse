/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF6EE',
        cream: '#F3EDE0',
        ink: '#14120F',
        sun: '#FFB703',
        flame: '#FF6B2C',
        grape: '#6B4EFF',
      },
      fontFamily: {
        display: ['"Fraunces"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        comic: ['"Bangers"', 'Impact', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(20,18,15,0.18)',
        lift: '0 24px 60px -16px rgba(20,18,15,0.28)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
