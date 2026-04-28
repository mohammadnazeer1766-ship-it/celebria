/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#E63946", // PartyOne Red
        secondary: "#FFD700", // Gold
        accent: "#1D3557", // Dark Blue
        dark: "#0f172a", // Navy Dark
        light: "#f8fafc", // Slate Light
        celebration: {
          red: "#E63946",
          blue: "#457B9D",
          green: "#2A9D8F",
          yellow: "#E9C46A",
          orange: "#F4A261",
          purple: "#8338EC",
          pink: "#FF006E",
        },
        midnight: {

          light: "#1e293b",
          DEFAULT: "#0f172a",
          dark: "#020617",
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
