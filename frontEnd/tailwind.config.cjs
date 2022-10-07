/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{html,js,jsx,ts,tsx}',
    './src/pages/**/*.{html,js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {},
    colors: {
      primary: '#256D85',
    },
  },
  plugins: [],
}
