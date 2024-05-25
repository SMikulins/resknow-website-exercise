/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './dist/*.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Outfit', 'sans-serif'],
    },
    container: {
      padding: {
        DEFAULT: '1.6rem',
        sm: '2rem',
        xl: '3rem'
      },
    },
    extend: {
      colors: {
        'primary': '#ed8a30',
        'primary-contrast': '#ffefe0'
      }
    },
  },
  plugins: [],
}