/** @type {import('tailwindcss').Config} */
import {nextui} from "@nextui-org/react";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        black: "#181823",
        pastal:"#537FE7",
        teal:"#C0EEF2",
        light:"#E9F8F9"
      }
    },
  },
  plugins: [nextui()],
}