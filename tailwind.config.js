import withMT from "@material-tailwind/react/utils/withMT";

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary_color: '#85c227',
        secondary_color: '#191919',
      },
    },
  },
  plugins: [
    // Asegúrate de incluir los plugins de Material Tailwind si es necesario
  ],
});
