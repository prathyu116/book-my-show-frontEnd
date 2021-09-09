// tailwind.config.js
module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
      extend: {
        colors:{
          pk:
          
{
  50: '#ffe2ec',
  100: '#ffb3c5',
  200: '#fc839f',
  300: '#f95278',
  400: '#f62252',
  500: '#dd0939',
  600: '#ad032c',
  700: '#7c001e',
  800: '#4d0012',
  900: '#200005',
},
NavCol :

{
  50: '#efeffd',
  100: '#d0d3e4',
  200: '#b2b5cd',
  300: '#9397b8',
  400: '#757aa3',
  500: '#5b6089',
  600: '#464b6b',
  700: '#32354d',
  800: '#1d2030',
  900: '#070b16',
},
Button:
{
  50: '#ffe3eb',
  100: '#ffb3c2',
  200: '#fb8399',
  300: '#f95370',
  400: '#f62448',
  500: '#dc0d2f',
  600: '#ac0624',
  700: '#7c031a',
  800: '#4c000e',
  900: '#1f0003',
}

          
        }
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }