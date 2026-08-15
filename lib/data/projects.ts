/**
 * 프로젝트 / 창업 데이터.
 *
 * 기존 홈페이지의 프로젝트 정보는 하나도 삭제하지 않았다.
 * 다만 포트폴리오 관점에서 비중을 나눈다.
 *   - FEATURED : 최근 AI · 제품 · 창업 작업 (Selected Work)
 *   - ARCHIVE  : 초기 로보틱스 연구/개발 (Engineering Archive)
 */

export type Featured = {
  id: string;
  title: string;
  subtitle?: string;
  category: string;
  period: string;
  summary: string;
  role: string;
  result: string;
  tags: string[];
  /** 카드 시각적 강조 계열 */
  accent: "cyan" | "purple" | "green";
};

export const FEATURED: Featured[] = [
  {
    id: "kist",
    title: "한국과학기술연구원(KIST)",
    subtitle: "연구원",
    category: "Robotics",
    period: "2016 – 2018",
    summary:
      "Modular Gripper, Spherical Robot, Micro Push 등 Physical AI와 로봇과의 결합하여 제어 시스템을 앱으로 만들었습니다.",
    role: "ROS, APP, ROBOT 통합 관리 시스템 개발",
    result: "국내 저널 2, 국외 저널 1, Physical AI",
    tags: ["AI", "ROS", "ROBOTICS", "Physical AI"],
    accent: "cyan",
  },
  {
    id: "momit",
    title: "맘잇 (Momit)",
    subtitle: "개인사업자 · CEO & CTO",
    category: "Platform · Founder",
    period: "2018 – 현재",
    summary:
      "기획부터 개발, 운영까지 혼자서 끝까지 책임진 온라인 플랫폼 서비스. 기술을 실제 비즈니스로 굴려본 경험입니다.",
    role: "플랫폼 서비스 기획 · 개발 · 운영 전 과정 총괄",
    result: "플랫폼 서비스를 직접 기획, 개발, 운영한 개인 창업",
    tags: ["Platform", "Product", "Founder", "Operation"],
    accent: "purple",
  },
  {
    id: "educator",
    title: "AI 디지털 튜터",
    subtitle: "온,오프라인 강사",
    category: "Educator, Digital Tutor",
    period: "2026 – 현재",
    summary:
      "AI 시대에 맞춰 교육을 이수하고, 기관·학교·기업에서 강의를 통해 개발과 창업의 경험을 이제 가르침으로 연결하고 있습니다.",
    role: "LLM, Agentic AI, DX & AX",
    result:
      "AI 강사 자격증, AI 서초 칼리지 with KAIST, 26년 디지털튜터 양성교육과정",
    tags: ["교육", "ChatGPT", "Claude", "Gemini"],
    accent: "green",
  },
];

export type ArchiveItem = {
  title: string;
  titleKo?: string;
  period: string;
  role: string;
  result: string;
};

/** 로보틱스 연구/개발 이력 — 삭제하지 않고 아카이브로 보존 */
export const ARCHIVE: ArchiveItem[] = [
  {
    title: "무인 경비 로봇",
    titleKo: "Unmanned Security Robot",
    period: "2014.11 – 2015.11 (12개월)",
    role: "무인 경비 로봇의 전체 시스템 개발 및 제어 알고리즘 구현",
    result: "자율 주행 및 장애물 감지를 위한 센서 융합 시스템 개발",
  },
  {
    title: "Modular Gripper",
    period: "2016.06 – 2016.10 (5개월)",
    role: "모듈러 그리퍼 하드웨어/소프트웨어 설계 및 제어 개발",
    result: "다양한 물체를 안정적으로 파지할 수 있는 모듈형 그리퍼 개발",
  },
  {
    title: "Micro Push",
    period: "2016.10 – 2017.02 (5개월)",
    role: "소형 푸시 시스템 개발 (Micro Push mechanism)",
    result: "정밀한 힘 제어 기반의 Micro Push 메커니즘 구현",
  },
  {
    title: "Spherical Robot",
    period: "2017.02 – 2017.06 (5개월)",
    role: "구형 로봇(Spherical robot) 설계 및 제어 시스템 개발",
    result: "구형 구조를 활용한 전방향 이동 로봇 제어 알고리즘 개발",
  },
];
