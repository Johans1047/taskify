/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'geist-light': ['Geist-Light'],
      'geist-bold': ['Geist-Bold']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}


