/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'customFam': ['Caveat', 'cursive'],
      },
      colors: {
        'customRed': '#D21312',
        'customBlue': '#070A52',
      },
    },
  },
  plugins: [],
}

