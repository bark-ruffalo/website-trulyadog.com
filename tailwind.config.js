/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: "class",
  daisyui: {
    themes: [
      {
        dark: {
          // Metallic dark base inspired by the robot dog's surface
          primary: "#1a1a1a",
          "primary-content": "#ffffff",

          // Cyber blue accents matching the glowing elements
          secondary: "#00a8ff",
          "secondary-content": "#ffffff",

          // Subtle metallic highlight color
          accent: "#2d3436",
          "accent-content": "#ffffff",

          // Background hierarchy
          "base-100": "#2d3436",
          "base-200": "#2d3436",
          "base-300": "#121212",
          "base-content": "#ffffff",

          // Neutral tones for text and subtle elements
          neutral: "#ffffff",
          "neutral-content": "#1a1a1a",

          // Status colors with a tech feel
          info: "#00a8ff", // Matching the cyber blue
          success: "#00ff9d", // Neon green
          warning: "#ffd700", // Bright yellow
          error: "#ff3e3e", // Bright red

          // Rounded elements matching the circular frame
          "--rounded-btn": "9999rem",

          // Enhanced tooltip styling
          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },

          // Link styling
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
