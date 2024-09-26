/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        maize:'#FFF248',
        citrine: '#E0D43F'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui:{
    themes: ["cyberpunk"]
  }
}

