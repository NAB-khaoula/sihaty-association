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
      },
    },
  },
  plugins: [],
}

