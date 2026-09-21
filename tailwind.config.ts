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
          DEFAULT: "#07090F",
          muted: "#0E111A",
        },
        cream: {
          DEFAULT: "#1A1520",
          dark: "#12101A",
        },
        periwinkle: {
          100: "#141828",
          200: "#2A3050",
          300: "#8B90C8",
          400: "#A8ADE0",
          500: "#C0C5F0",
          600: "#D4D7F5",
        },
        ink: {
          900: "#F0F2FA",
          700: "#C8CDDF",
          500: "#9096B0",
          300: "#6A7088",
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
        "grid-pattern": "linear-gradient(rgba(168,173,224,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(168,173,224,0.05) 1px, transparent 1px)",
      },
      backgroundSize: {
        "grid": "60px 60px",
      },
      boxShadow: {
        "soft": "0 8px 32px rgba(0,0,0,0.35), 0 1px 0 rgba(168,173,224,0.06)",
        "card": "0 4px 20px rgba(0,0,0,0.35)",
        "periwinkle": "0 0 28px rgba(168,173,224,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
