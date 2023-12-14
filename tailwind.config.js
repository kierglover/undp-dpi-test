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
        // 'sans': ['Proxima-Nova'],
        // 'bold': ['Proxima-Nova-Bold'],
      },
      colors:{
        'un': {'un-blue':'#006EB5', 'un-white':'#FFFFFF', 'gray-700': '#232E3D'},
        'header':{
          "bg-color":"#fafafa",
          "box-shadow":" 0 3px 6px rgba(0,0,0,.1)"
        }
      },
      opacity:{
        '99': '.99',
      }
    },
  },
  plugins: [],
}