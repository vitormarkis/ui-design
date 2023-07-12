/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        app: ["var(--font-app)", "sans-serif"],
      },
    },
  },
  plugins: [],
}
