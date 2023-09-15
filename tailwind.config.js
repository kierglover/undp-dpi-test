/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    colors: {
      'un-blue': '#006EB5',
      'white': '#FFFFFF',
      'gray-700': '#232E3D'
    },
    extend: {
      fontFamily: {
        'sans': ['Proxima Nova'],
      },
    },
  },
  plugins: [],
}