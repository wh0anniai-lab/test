import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        // Apple.com 참조 팔레트
        paper: "#FFFFFF",
        mist: "#F5F5F7",
        ink: "#1D1D1F",
        steel: "#86868B",
        hairline: "#D2D2D7",
        signal: {
          DEFAULT: "#0071E3",
          dark: "#0058B0",
        },
        border: "#D2D2D7",
        input: "#D2D2D7",
        ring: "#0071E3",
        background: "#FFFFFF",
        foreground: "#1D1D1F",
        primary: {
          DEFAULT: "#1D1D1F",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#F5F5F7",
          foreground: "#1D1D1F",
        },
        muted: {
          DEFAULT: "#F5F5F7",
          foreground: "#86868B",
        },
        accent: {
          DEFAULT: "#0071E3",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "#FFFFFF",
          foreground: "#1D1D1F",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "SF Pro Display",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        "hero-sm": ["44px", { lineHeight: "1.07", letterSpacing: "-0.02em" }],
        "hero-lg": ["88px", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
      },
      borderRadius: {
        lg: "18px",
        md: "14px",
        sm: "10px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "drift": {
          "0%, 100%": { transform: "translate(0px, 0px) scale(1)" },
          "50%": { transform: "translate(30px, -20px) scale(1.05)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "fade-in": "fade-in 1s ease forwards",
        "drift": "drift 12s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
