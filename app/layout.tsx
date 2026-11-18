import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { SITE } from "@/lib/data/site";
import "./globals.css";
import "./fonts/pretendard/pretendardvariable-dynamic-subset.css";
import "./editorial.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "김동영 픽셀 캐릭터와 AI 개발자·강사·사업 대표 소개" }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#F4EFE8",
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ko">
      <head>
        <link rel="preload" as="font" type="font/woff2" href="/fonts/inter/inter-latin-wght-normal.woff2" crossOrigin="anonymous" />
      </head>
      <body className="font-sans">
        {/* JS 없이도 콘텐츠가 보이도록 보장 */}
        <noscript>
          <style>{`.reveal { opacity: 1 !important; }`}</style>
        </noscript>
        <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:bg-white focus:px-4 focus:py-2">
          본문으로 건너뛰기
        </a>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
