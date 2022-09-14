/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    colors: {
      "body-bg":"#0f0f0f",
      "main-color":"#ff0000",
      "text-color":"#fff",
    },
    height: {
      "header":"8rem",
      "header_shrink":"6rem",
    },
    screens: {
      "tablet":{'max':'1024px'},
      "mobile":{'max':'660px'},
      "laptop":{'min':'1025px','max':'1300px'},
      "desktop":'1301px'
    }
  },
  plugins: [],
}
