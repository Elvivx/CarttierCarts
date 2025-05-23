/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        slowspin: "spin 5s linear infinite",
      },
    },
  },
  plugins: [],
}

