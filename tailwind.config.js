/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ 'index.html',
  './src/**/*.{html,js}',],
  theme: {
    colors:{
      DarkBlue: 'hsl(234, 12%, 34%)',
 GrayishBlue: 'hsl(229, 6%, 66%)',
 LightGray: 'hsl(0, 0%, 98%)',
 Red: 'hsl(0, 78%, 62%)',
 Cyan: 'hsl(180, 62%, 55%)',
  Orange: 'hsl(34, 97%, 64%)',
  Blue: 'hsl(212, 86%, 64%)',

  Dark_Violet1: 'hsl(270, 9%, 17%)',
  Grayish_Violet: 'hsl(273, 4%, 51%)',
  Light_Gray: 'hsl(0, 0%, 98%)',
  Dark_Violet: 'hsl(256, 26%, 20%)',
  Grayish_Blue: 'hsl(216, 30%, 68%)',
  
    } ,
    fontFamily:{
      'Poppins': 'Poppins, sans-serif',
    },
  },
   
  extend: {
    
  },
  plugins: [],
}
