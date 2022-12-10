/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dancingscript: ["dancingscript"],
        noto: ["noto"]
      }
    },
  },
  plugins: [],
}
