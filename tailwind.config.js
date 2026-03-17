/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["var(--font-nunito)", "sans-serif"],
      },
      colors: {
        "bg-screen": "#F2F0EC",
        "bg-card": "#FFFFFF",
        "dark-hero": "#1F1D1B",
        "dark-secondary": "#3A3632",
        "text-primary": "#1A1A18",
        "text-muted": "#888780",
        "text-label": "#B8B4AE",
        "border": "#E8E6E1",
        "btn-primary": "#1F1D1B",
        "status-red": "#E5484D",
        "status-red-light": "#FEF0F0",
        "status-yellow": "#D4A017",
        "status-yellow-light": "#FEF9EC",
        "status-green": "#2A7A4A",
        "status-green-light": "#F0F7F3",
      },
    },
  },
  plugins: [],
};
