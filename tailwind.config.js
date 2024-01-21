/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      orange: {
        lighest: "#fff4e6",
        light: "#ffe8cc",
        medium: "#ffa94d",
      },
      gray: {
        light: "#495057",
        dark: "#343a40",
      },
      green: "#66a80f",
      red: "#e03131",
    },
  },
  plugins: [],
};
