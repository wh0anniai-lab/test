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
  kakaoOpenChat: "https://open.kakao.com/o/gBOK6VIi",
} as const;

/** 연락 채널 — 아이콘은 화면 쪽(contact.tsx)에서 kind 로 고른다 */
export type ContactChannel = {
  kind: "phone" | "kakao" | "email";
  label: string;
  value: string;
  href: string;
  /** 외부 사이트로 나가는 링크인지 */
  external?: boolean;
};

export const CONTACT_CHANNELS: ContactChannel[] = [
  { kind: "phone", label: "전화", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  {
    kind: "kakao",
    label: "오픈카톡",
    value: "오픈채팅방으로 바로 연결",
    href: CONTACT.kakaoOpenChat,
    external: true,
  },
  { kind: "email", label: "이메일", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
];

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

/** 왼쪽 목차(쿼카 모션랩의 레일)에 나오는 섹션 — id 는 각 섹션의 앵커와 같다 */
export type SectionItem = {
  id: string;
  label: string;
};

export const SECTIONS: SectionItem[] = [
  { id: "work", label: "Selected Work" },
  { id: "capabilities", label: "What I Build" },
  { id: "now", label: "Now" },
  { id: "story", label: "Story" },
  { id: "career", label: "Career" },
  { id: "archive", label: "Engineering Archive" },
  { id: "lecture", label: "Lecture" },
  { id: "tech", label: "Tech" },
  { id: "contact", label: "Contact" },
];
