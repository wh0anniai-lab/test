import type { Config } from "tailwindcss";

/**
 * Design tokens — 쿼카 모션랩(quoka-motion-lab) 스타일의 밝은 UI.
 * 흰 바탕 위에 회색 패널(panel)과 알약형 트랙(track)으로 층을 나누고,
 * 색은 네이비(accent · 주 버튼)와 와인(wine · 작은 라벨) 두 가지만 쓴다.
 */
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: "1.25rem",
      },
      screens: {
        "2xl": "1240px",
      },
    },
    extend: {
      colors: {
        paper: "#FFFFFF", // 페이지 바탕
        panel: "#F5F5F7", // 큰 영역 · 카드 바탕
        track: "#ECECF0", // 알약 버튼 · 입력칸 · 썸네일 바탕
        hover: "#E0E0E6",
        ink: "#1D1D1F", // 본문 글자
        muted: "#6E6E73", // 보조 글자
        line: "#E4E4E9", // 구분선 · 카드 테두리
        accent: {
          DEFAULT: "#1F3460", // 네이비 — 주 버튼 · 강조
          hover: "#18294D",
        },
        wine: "#6E1A2F", // 와인 — eyebrow · 작은 라벨
      },
      fontFamily: {
        sans: [
          "Pretendard Variable",
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "Apple SD Gothic Neo",
          "system-ui",
          "sans-serif",
        ],
        mono: ["var(--font-mono)", "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
      },
      fontSize: {
        /*
         * Mobile-first 타이포 스케일.
         * 한글은 글자당 약 1em 폭을 차지하므로, 390px(콘텐츠 폭 358px)에서
         * 가장 긴 줄("사람들과 나눕니다.")이 넘치지 않는 vw 값을 상한으로 잡았다.
         */
        hero: ["clamp(1.9rem, 8.4vw, 3.25rem)", { lineHeight: "1.12", letterSpacing: "-0.04em" }],
        pane: ["clamp(1.25rem, 5vw, 1.5rem)", { lineHeight: "1.25", letterSpacing: "-0.03em" }],
      },
      borderRadius: {
        xl: "28px",
        lg: "22px",
        md: "20px",
        sm: "12px",
      },
      boxShadow: {
        ring: "0 0 0 1px #E4E4E9",
        bar: "0 0 0 1px rgba(0,0,0,0.06), 0 8px 24px -12px rgba(0,0,0,0.14)",
        lift: "0 0 0 1px #E4E4E9, 0 10px 24px -14px rgba(0,0,0,0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
      },
    },
  },
  plugins: [],
};

export default config;
