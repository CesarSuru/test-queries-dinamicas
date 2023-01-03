/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{js,jsx,ts,tsx}",
    "./src/common/**/*.{js,jsx,ts,tsx}",
    "./src/hooks/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        Jakarta: ["Days One", "sans-serif"],
        Monserrat: ["Montserrat", "sans-serif"],
        Conthrax: ["Conthrax", "sans-serif"]
      }
    }
  },
  core: {
    builder: "webpack5"
  },
  plugins: [
    require("tw-elements/dist/plugin")
  ]
};
