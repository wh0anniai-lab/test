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
    id: "drone-ai",
    title: "Drone AI System",
    subtitle: "OZO · AI Developer",
    category: "AI Systems",
    period: "2022.01 – 2022.06 (6개월)",
    summary:
      "드론이 스스로 위치를 추정하고 비행 경로를 판단하는 자율 시스템. 연구용 알고리즘에서 끝내지 않고 제어 앱까지 함께 만들었습니다.",
    role: "드론 AI 자율 시스템 개발",
    result: "드론 제어 앱 개발 및 SLAM을 활용한 자율 비행 시스템 구축",
    tags: ["AI", "SLAM", "DJI SDK", "Android"],
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
    id: "gati",
    title: "가티 (Gati)",
    subtitle: "공동대표 · CTO",
    category: "EdTech · Founder",
    period: "2020 – 2022",
    summary:
      "게이밍과 에듀케이션을 결합한 플랫폼. 공동창업자이자 CTO로서 기술 전반을 설계하고 조직을 이끌었습니다.",
    role: "게이밍 에듀케이션 플랫폼 기술 총괄 (CTO)",
    result: "게이밍과 에듀케이션을 결합한 플랫폼 서비스",
    tags: ["EdTech", "Platform", "CTO", "Service"],
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
