import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        soft: {
          DEFAULT: "#E8EAF2",
          muted: "#DEE1EC",
        },
        cream: {
          DEFAULT: "#FFF2E0",
          dark: "#F5E8CC",
        },
        periwinkle: {
          100: "#E8EBF8",
          200: "#C0C9EE",
          300: "#A2AADB",
          400: "#6F70B5",
          500: "#5A5B9A",
          600: "#48497F",
        },
        ink: {
          900: "#12142A",
          700: "#1E2340",
          500: "#3A4060",
          300: "#6B7190",
        },
      },
      fontFamily: {
        mono: ["'JetBrains Mono'", "monospace"],
        sans: ["'Source Sans 3'", "sans-serif"],
        display: ["'Manrope'", "sans-serif"],
      },
      animation: {
        "gradient-x": "gradient-x 6s ease infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "scan": "scan 3s linear infinite",
        "blink": "blink 1s step-end infinite",
        "slide-up": "slide-up 0.6s ease-out",
        "fade-in": "fade-in 0.8s ease-out",
        "spin-slow": "spin 8s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.7", transform: "scale(1)" },
          "50%": { opacity: "1", transform: "scale(1.02)" },
        },
        "scan": {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "slide-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      backgroundImage: {
        "grid-pattern": "linear-gradient(rgba(137,138,196,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(137,138,196,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "soft": "0 4px 18px rgba(18,20,42,0.04), 0 1px 4px rgba(111,112,181,0.06)",
        "card": "0 2px 12px rgba(111,112,181,0.08)",
        "periwinkle": "0 0 24px rgba(111,112,181,0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
