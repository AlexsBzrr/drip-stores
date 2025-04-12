/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      colors: {
        primary: "#c92071",
        secondary: "#b5b6f2",
        tertiary: "#991956",
        error: "#ee4266",
        success: "#52ca76",
        warning: "#f6aa1c",
        info: "#2196f3",
        white: "#ffffff",
        "dark-gray": "#1f1f1f",
        "dark-gray-2": "#474747",
        "dark-gray-3": "#666666",
        "light-gray": "#8f8f8f",
        "light-gray-2": "#cccccc",
        "light-gray-3": "#f5f5f5",
      },
    },
  },
  plugins: [],
};
