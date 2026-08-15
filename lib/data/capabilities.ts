/**
 * Capability / Now / Story / Tech 데이터.
 * 기존 홈페이지에 실재하는 기술과 활동만 사용한다. (새로운 기술을 지어내지 않음)
 */

export type Capability = {
  title: string;
  caption: string;
  items: string[];
  accent: "cyan" | "purple" | "green" | "amber";
};

export const CAPABILITIES: Capability[] = [
  {
    title: "AI Systems",
    caption: "자율 판단이 필요한 시스템을 만듭니다",
    items: ["Drone AI", "SLAM", "센서 융합", "자율 주행"],
    accent: "cyan",
  },
  {
    title: "Product",
    caption: "서비스를 기획하고 실제로 운영합니다",
    items: ["Android App", "플랫폼 서비스", "기획 · 개발 · 운영"],
    accent: "purple",
  },
  {
    title: "Robotics",
    caption: "하드웨어와 제어를 직접 다룹니다",
    items: ["ROS", "제어 알고리즘", "Embedded", "Arduino"],
    accent: "green",
  },
  {
    title: "Teaching",
    caption: "만든 것을 나누고 가르칩니다",
    items: ["AI 기술 강의", "Python", "대학원 강의"],
    accent: "amber",
  },
];

export type NowItem = {
  label: string;
  value: string;
  detail: string;
};

/** 과거 이력만 있는 포트폴리오로 보이지 않기 위한 현재 활동 */
export const NOW: NowItem[] = [
  {
    label: "Building",
    value: "맘잇 (Momit) 플랫폼 서비스",
    detail: "2018년부터 직접 기획·개발·운영 중",
  },
  {
    label: "Teaching",
    value: "AI & Python 기술 강의",
    detail: "경상대학교 대학원 강의 강사",
  },
  {
    label: "Learning",
    value: "AI 서초칼리지 with KAIST",
    detail: "AI 최신 연구 동향 및 실무 교육 이수 완료",
  },
];

export type StoryStep = {
  stage: string;
  period: string;
  title: string;
  description: string;
};

/** 연도 나열이 아니라 성장의 방향성을 보여준다 */
export const STORY: StoryStep[] = [
  {
    stage: "Robotics",
    period: "2014 – 2017",
    title: "직접 움직이는 것을 만들었습니다",
    description:
      "무인 경비 로봇, 그리퍼, 구형 로봇. KIST에서 로봇 시스템을 연구하며 제어와 센서를 손으로 다뤘습니다.",
  },
  {
    stage: "AI Systems",
    period: "2022",
    title: "기계에 판단을 넣었습니다",
    description:
      "드론이 스스로 위치를 추정하고 비행하도록 만들면서, 하드웨어 위에 AI를 얹는 방법을 배웠습니다.",
  },
  {
    stage: "Product",
    period: "2018 – 현재",
    title: "기술을 서비스로 바꿨습니다",
    description:
      "연구실 밖에서 사용자가 실제로 쓰는 플랫폼을 만들고 운영하며, 만드는 것과 팔리는 것의 차이를 겪었습니다.",
  },
  {
    stage: "Founder",
    period: "2018 – 2022",
    title: "회사를 직접 세웠습니다",
    description:
      "맘잇의 CEO & CTO, 가티의 공동대표 & CTO. 기술 결정과 사업 결정을 같은 책상에서 내렸습니다.",
  },
  {
    stage: "AI Builder",
    period: "2026 –",
    title: "만들고, 나눕니다",
    description:
      "AI 서초칼리지 with KAIST 이수를 마치고, 대학원에서 AI와 Python을 가르치며 다음 제품을 준비하고 있습니다.",
  },
];

export type TechGroup = {
  title: string;
  items: string[];
};

export const TECH: TechGroup[] = [
  {
    title: "Language",
    items: [
      "C / C++ (임베디드, 로봇 제어)",
      "Python (알고리즘, ROS, 데이터 처리)",
      "Java (Android 앱 개발)",
    ],
  },
  {
    title: "Platform",
    items: ["Android Mobile App 개발", "Embedded System (Arduino + 센서 융합)"],
  },
  {
    title: "Robotics · Drone",
    items: [
      "ROS (Robot Operating System)",
      "SLAM (동시적 위치추정 및 지도작성)",
      "IMU · Force Sensor · Depth Camera",
      "Arduino Board",
      "DJI Drone SDK",
      "BLE (Bluetooth Low Energy)",
      "Omni-directional / Spherical Robot 제어",
    ],
  },
];
