/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bodyColor:'rgba(29,29,39,255)',
        btnColor:'rgb(81, 77, 87)',
        detailColor:'rgba(126, 125, 134)'
      },
      fontFamily:
      {
        'outfit': ['Outfit', 'sans-serif'],
      },
      backgroundColor:
      {

      }
    },
  },
  plugins: [],
}

