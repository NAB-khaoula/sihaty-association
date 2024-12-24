/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./modules/**/*.{html,ts}",
    "./src/**/*.{html,ts}"],
  theme: {
    variant: {
      extent: {
        padding: ['hover'],
      }
    },
    extend: {
      colors: {
        primary: '#1A4D2E',  // Forest Green
        secondary: '#4F6F52',  // Olive
        beige: '#E8DFCA',  // Beige
        ivory: '#F5EFE6',  // Ivory
        accent: '#F0BE86',  // Peach
        backgroundColor: '#faf9f9',
        textColor: '#b3b9ca'
      },
      keyframes: {
        "loop-scroll": {
          from: {transform: "translateX(0)"},
          to: {transform: "translateX(-100%)"}
        },
      },
      animation: {
        "loop-scroll": 'loop-scroll 10s linear infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}

