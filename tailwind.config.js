/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#decfb9",
        secondary: "#f0f0f0",
        tertiary: "#b8b8b8",
      },
    },
  },
  plugins: [],
};
