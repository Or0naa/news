/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#ceede8",
          100: "#b5e4dd",
          200: "#84d2c6",
          300: "#067362",
          400: "#056254",
          500: "#045246",
          600: "#034238",
          700: "#02312a",
          800: "#02211c",
          900: "#01100e",
          DEFAULT: "#08a48c",
        },
        secondary: "#3e08a4",
        accent: "#a40820",
        neutral: "#6ea408",
      }
    },

    plugins: [],

  }
}
