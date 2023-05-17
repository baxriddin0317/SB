module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          main: "#5651e5",
          gray: {
            DEFAULT: "#ecf0f3"
          }
        }
      }
    },
  },
  plugins: [],
}
