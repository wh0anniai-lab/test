/**
 * 사이트 전역 정보 — 이름 / 연락처 / 네비게이션.
 * 전화번호는 반드시 이 파일의 상수만 사용한다. (컴포넌트 하드코딩 금지)
 */

export const SITE = {
  name: "김동영",
  nameEn: "Kim Dong Young",
  initials: "DY.",
  role: "AI Builder · Founder",
  title: "김동영 | AI 개발자 · 강사 · 사업 대표",
  description:
    "AI 웹서비스를 만들고 운영하며, 학교와 성인 온라인 강의에서 그 경험을 나누는 김동영입니다. 개발 협업과 강의 문의를 환영합니다.",
  url: "https://test-gilt-five-wjfw6hbp9q.vercel.app",
} as const;

/** 기존 홈페이지에서 확인한 실제 연락처 값 */
export const CONTACT = {
  email: "dysoul20t@gmail.com",
  /** 화면 표기용 */
  phoneDisplay: "010-7369-1351",
  /** tel: 링크용 (E.164) */
  phoneHref: "tel:+821073691351",
  kakaoOpenChat: "https://open.kakao.com/o/gBOK6VIi",
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
