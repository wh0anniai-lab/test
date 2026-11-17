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
    "김동영의 로봇 R&D, OCR 배송사진 등록 자동화, 병원 약제부 재고조사 웹앱, 근거 기반 AI 개발과 교육 사례를 소개합니다. 개발 협업과 강의 문의를 환영합니다.",
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
