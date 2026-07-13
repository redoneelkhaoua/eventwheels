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
        sand: {
          50: "#FDF8F3",
          100: "#F5EDE0",
          200: "#EAD9C0",
          300: "#D9BFA0",
        },
        terracotta: {
          300: "#E09070",
          400: "#D4785A",
          500: "#C06040",
          600: "#A8502E",
          700: "#8C3E20",
        },
        navy: {
          700: "#243356",
          800: "#1C2B4A",
          900: "#111827",
        },
        gold: {
          400: "#F0B429",
          500: "#D69E2E",
        },
      },
      fontFamily: {
        heading: ["var(--font-plus-jakarta)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
      },
      boxShadow: {
        soft: "0 2px 20px rgba(0,0,0,0.08)",
        card: "0 4px 30px rgba(0,0,0,0.10)",
        elevated: "0 8px 40px rgba(0,0,0,0.14)",
      },
      backgroundImage: {
        "terracotta-gradient":
          "linear-gradient(135deg, #C06040 0%, #A8502E 100%)",
        "sand-gradient": "linear-gradient(135deg, #FDF8F3 0%, #F5EDE0 100%)",
        "hero-gradient":
          "linear-gradient(to bottom, rgba(17,24,39,0.55) 0%, rgba(17,24,39,0.2) 60%, transparent 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.4s ease-out forwards",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
