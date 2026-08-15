import type { Config } from "tailwindcss";

/**
 * Design tokens — Deep Navy 기반 다크 UI.
 * 페이지의 80~90%는 navy/panel/text 로 구성하고
 * cyan / purple 은 CTA · glow · 강조에만 제한적으로 사용한다.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        md: "2rem",
      },
      screens: {
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        navy: {
          DEFAULT: "#07111F", // background
          deep: "#050C17", // footer / 더 어두운 층
        },
        panel: {
          DEFAULT: "#0B1E33", // card surface
          soft: "#0E2540", // hover / raised
        },
        cyan: {
          DEFAULT: "#24D6FF",
          soft: "#7FE7FF",
        },
        purple: {
          DEFAULT: "#8B5CF6",
        },
        ink: "#D8E1EA", // text primary
        steel: "#AAB7C4", // text secondary
        hairline: "rgba(216, 225, 234, 0.10)",
        signal: {
          green: "#3DFFB5",
          amber: "#FFB020",
          red: "#FF5C7A",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "sans-serif",
        ],
      },
      fontSize: {
        /*
         * Mobile-first 타이포 스케일.
         * 한글은 글자당 약 1em 폭을 차지하므로, 390px(콘텐츠 폭 350px)에서
         * 가장 긴 줄이 넘치지 않는 vw 값을 상한으로 잡았다.
         * 크기만 줄이지 않고 각 헤드라인의 줄바꿈도 함께 최적화한다.
         */
        hero: ["clamp(2rem, 9.2vw, 2.75rem)", { lineHeight: "1.12", letterSpacing: "-0.03em" }],
        "hero-lg": ["clamp(3.25rem, 5.6vw, 5rem)", { lineHeight: "1.06", letterSpacing: "-0.035em" }],
        display: ["clamp(1.75rem, 7.2vw, 3rem)", { lineHeight: "1.15", letterSpacing: "-0.03em" }],
        section: ["clamp(1.6rem, 6.2vw, 2.25rem)", { lineHeight: "1.18", letterSpacing: "-0.02em" }],
      },
      borderRadius: {
        xl: "24px",
        lg: "20px",
        md: "16px",
        sm: "10px",
      },
      boxShadow: {
        panel: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 12px 32px -16px rgba(0,0,0,0.7)",
        glow: "0 0 0 1px rgba(36,214,255,0.25), 0 8px 40px -12px rgba(36,214,255,0.35)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "50%": { transform: "translate3d(0,-16px,0) scale(1.06)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s cubic-bezier(0.16,1,0.3,1) forwards",
        drift: "drift 14s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
