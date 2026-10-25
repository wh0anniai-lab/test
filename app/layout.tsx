import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { JetBrains_Mono } from "next/font/google";
import { SITE } from "@/lib/data/site";
import "./globals.css";

/** 번호 · 기간 같은 작은 라벨용 고정폭 글꼴 (쿼카 모션랩의 --mono) */
const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: SITE.title,
  description: SITE.description,
  keywords: [
    "김동영",
    "AI Builder",
    "Founder",
    "포트폴리오",
    "AI Systems",
    "Robotics",
    "SLAM",
    "ROS",
    "Drone AI",
  ],
  authors: [{ name: SITE.name }],
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: SITE.url,
    siteName: SITE.title,
    title: SITE.title,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#FFFFFF",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        {/*
          Pretendard 는 Google Fonts 에 없어 next/font 로 처리할 수 없다.
          CSS @import 는 렌더 블로킹이 크므로 preconnect + link 로 로드한다.
          dynamic-subset 버전이라 한글 필요 글리프만 내려받는다.
        */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
      </head>
      <body className={`${mono.variable} font-sans`}>
        {/* JS 없이도 콘텐츠가 보이도록 보장 */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        <a
          href="#work"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          본문으로 건너뛰기
        </a>
        {children}
      </body>
    </html>
  );
}
