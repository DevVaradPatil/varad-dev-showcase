/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        screens: {
          'xs': {'max': '800px'},
        },// You can adjust the width as needed
    },
  },
  plugins: [],
}

