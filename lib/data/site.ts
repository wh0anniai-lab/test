/**
 * 사이트 전역 정보 — 이름 / 연락처 / 네비게이션.
 * 전화번호는 반드시 이 파일의 상수만 사용한다. (컴포넌트 하드코딩 금지)
 */

export const SITE = {
  name: "김동영",
  nameEn: "Kim Dong Young",
  initials: "DY.",
  role: "AI Builder · Founder",
  title: "김동영 — AI Builder & Founder",
  description:
    "AI Systems, Product, Robotics를 연결해 실제 작동하는 제품을 만드는 AI Builder & Founder 김동영의 포트폴리오.",
  url: "https://test-gilt-five-wjfw6hbp9q.vercel.app",
} as const;

/** 기존 홈페이지에서 확인한 실제 연락처 값 */
export const CONTACT = {
  email: "dysoul20t@gmail.com",
  /** 화면 표기용 */
  phoneDisplay: "010-7369-1351",
  /** tel: 링크용 (E.164) */
  phoneHref: "tel:+821073691351",
  location: "대한민국 (South Korea)",
  expertise: "로봇공학 · AI 시스템 · 플랫폼 개발 · C / JAVA / PYTHON",
} as const;

export type NavItem = {
  label: string;
  href: string;
};

export const NAV: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Capabilities", href: "#capabilities" },
  { label: "Story", href: "#story" },
  { label: "Career", href: "#career" },
  { label: "Lecture", href: "#lecture" },
  { label: "Contact", href: "#contact" },
];
