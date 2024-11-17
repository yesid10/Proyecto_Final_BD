const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#436850',
        secondary_color: '#FDFCF6',
        colo_text: '#557153',
        titles_color: "#1A3636"
      },
    },
    keyframes:{
      slideInFromRight:{
        '0%': {transform: 'translateX(100%)', opacity: '0'},
        '100%': {transform: 'translateX(0)', opacity: '1'}
      }
    },
    animation:{
      'slide-in-right':'slideInFromRight .7s ease-out',
    }
  },
  plugins: [],
});