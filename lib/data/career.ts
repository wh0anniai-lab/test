/**
 * 학력 / 경력 데이터.
 * 기존 홈페이지의 경력 정보를 그대로 보존하며, 2026년 항목이 최신 상태로 갱신되어 있다.
 */

export type Education = {
  period: string;
  school: string;
  major: string;
};

export const EDUCATION: Education = {
  period: "2009 – 2016",
  school: "경상대학교",
  major: "정보통신공학과 / 지능로봇공학과 복수전공",
};

export type CareerItem = {
  year: string;
  org: string;
  role: string;
  description: string;
  /** 타임라인 강조용 — 현재 진행 중이거나 최신 활동 */
  current?: boolean;
};

/** 최신순 정렬 — 포트폴리오는 최근 활동이 먼저 보여야 한다 */
export const CAREER: CareerItem[] = [
  {
    year: "2026",
    org: "AI 글로벌 협회",
    role: "AI 강사 자격증",
    description: "AI 강사 자격 취득",
    current: true,
  },
  {
    year: "2026",
    org: "「2026 AI디지털튜터 양성 교육 사업」",
    role: "이수 완료",
    description: "AI 디지털튜터 양성 과정 이수 완료",
    current: true,
  },
  {
    year: "2026",
    org: "AI 서초칼리지 with KAIST",
    role: "이수 완료",
    description: "AI 최신 연구 동향 및 실무 교육 이수 완료",
    current: true,
  },
  {
    year: "2026",
    org: "경상대학교 대학원",
    role: "강의 강사",
    description: "AI & Python 기술 강의",
    current: true,
  },
  {
    year: "2022",
    org: "OZO",
    role: "AI Developer",
    description: "Drone AI System 개발",
  },
  {
    year: "2020 – 2022",
    org: "가티 (Gati)",
    role: "공동대표자 · CTO",
    description: "게이밍 에듀케이션 플랫폼",
  },
  {
    year: "2018 – 현재",
    org: "맘잇 (Momit)",
    role: "개인사업자 CEO & CTO",
    description: "플랫폼 서비스 운영",
    current: true,
  },
  {
    year: "2016 – 2017",
    org: "한국과학기술연구원 (KIST)",
    role: "연구원",
    description: "로봇 시스템 연구 및 개발",
  },
];

export type Stat = {
  value: string;
  label: string;
  description: string;
};

export const STATS: Stat[] = [
  {
    value: "8+",
    label: "년 이상의 경력",
    description: "연구부터 창업까지 다양한 환경에서 쌓은 실무 경험",
  },
  {
    value: "5",
    label: "주요 프로젝트",
    description: "로봇, AI, 드론 등 다양한 분야의 기술 프로젝트 수행",
  },
  {
    value: "2",
    label: "창업 경험",
    description: "플랫폼 서비스 직접 구축 및 운영 경험",
  },
  {
    value: "2",
    label: "국내 · IEEE 논문 게재",
    description: "국내, 국제 학술지에 연구 성과 발표",
  },
];
