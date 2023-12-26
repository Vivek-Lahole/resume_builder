/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colours: {
        txtPrinary: "#555",
        txtLight: "#999",
        txtDark: "#222",
        bgPrimary: "#flflfl",
      },
      fontFamily: {
        Poppins: ["Poppins, sans-serif"],
      },
    },
  },
  plugins: [],
};
