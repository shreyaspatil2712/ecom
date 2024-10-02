/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      fontFamily: {
        kumbh: ['"Kumbh Sans"', 'sans-serif'],
      },
      colors: {
        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        black: 'hsl(0, 0%, 0%)',
      },
      backdropBlur: {
        sm: '4px', // Adjust the blur amount as needed
      },
    },
  },
  variants: {
    backdropBlur: ['responsive', 'hover', 'focus'], // Ensure these utilities are enabled
  },
  plugins: [],
}

