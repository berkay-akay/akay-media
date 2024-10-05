/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ], // ?? 
  theme: {
    extend: {
      colors: {
        primary: "#1778f2"
      }
    },
  },
  plugins: [
    require("daisyui"),
    require("flowbite/plugin")
  ],
}

