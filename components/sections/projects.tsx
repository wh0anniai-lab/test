"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const SUMMARY = [
  "로봇공학 및 모바일 시스템 개발 경험을 가진 개발자로, 임베디드 시스템, 로봇 제어, 센서 융합, SLAM, 무인 자율 시스템 등 다양한 프로젝트를 수행했습니다.",
  "C/C++, Python, Java를 주요 언어로 사용하며, 모바일 어플리케이션 · 로봇 · 드론 솔루션을 개발합니다.",
];

type Project = {
  title: string;
  titleKo?: string;
  period: string;
  role: string;
  result: string;
};

const PROJECTS: Project[] = [
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
  {
    title: "Drone AI System",
    period: "2022.01 – 2022.06 (6개월)",
    role: "드론 AI 자율 시스템 개발",
    result: "드론 제어 앱 개발 및 SLAM을 활용한 자율 비행 시스템 구축",
  },
];

const TECH_GROUPS = [
  {
    title: "프로그래밍 언어",
    items: ["C/C++ (임베디드, 로봇 제어)", "Python (알고리즘, ROS, 데이터 처리)", "Java (Android 앱 개발)"],
  },
  {
    title: "플랫폼",
    items: ["Android Mobile App 개발", "Embedded System (Arduino + 센서 융합)"],
  },
  {
    title: "로봇 / 드론 관련 기술",
    items: [
      "ROS (Robot Operating System)",
      "SLAM (동시적 위치추정 및 지도작성)",
      "IMU Sensor, Force Sensor, Depth Camera",
      "Arduino Board",
      "DJI Drone SDK",
      "BLE (Bluetooth Low Energy)",
      "Omni-directional / Spherical Robot 제어",
    ],
  },
];

export function Projects() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="projects" className="scroll-mt-14 bg-mist py-24 md:py-32">
      <div ref={ref} className="container">
        <div className="text-center">
          <span data-reveal className="reveal text-[13px] font-medium uppercase tracking-[0.2em] text-signal">
            What I Do · Project
          </span>
          <h2
            data-reveal
            data-reveal-delay="60"
            className="reveal mt-4 text-3xl md:text-[44px] font-semibold tracking-tight text-ink"
          >
            프로젝트
          </h2>
          <div data-reveal data-reveal-delay="140" className="reveal mx-auto mt-6 max-w-2xl space-y-3">
            {SUMMARY.map((line, i) => (
              <p key={i} className="text-[17px] leading-relaxed text-ink/80">
                {line}
              </p>
            ))}
          </div>
        </div>

        {/* 프로젝트 카드 그리드 */}
        <div
          data-reveal
          data-reveal-delay="220"
          className="reveal mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {PROJECTS.map((project, i) => (
            <Card key={project.title} className="bg-paper flex flex-col">
              <CardHeader className="p-6 pb-3">
                <span className="text-[12px] font-semibold text-signal">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <CardTitle className="mt-1 text-[19px]">{project.title}</CardTitle>
                {project.titleKo && (
                  <p className="text-[13px] text-steel">{project.titleKo}</p>
                )}
              </CardHeader>
              <CardContent className="p-6 pt-0 flex flex-col gap-3 flex-1">
                <Badge variant="outline" className="w-fit">
                  {project.period}
                </Badge>
                <div>
                  <p className="text-[13px] font-semibold text-ink">주요 역할</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-steel">{project.role}</p>
                </div>
                <div>
                  <p className="text-[13px] font-semibold text-ink">성과</p>
                  <p className="mt-1 text-[14px] leading-relaxed text-steel">{project.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 기술 스택 */}
        <div data-reveal data-reveal-delay="300" className="reveal mt-20">
          <h3 className="text-center text-[13px] font-semibold uppercase tracking-[0.15em] text-steel">
            Tech.
          </h3>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            {TECH_GROUPS.map((group) => (
              <div key={group.title}>
                <p className="text-[15px] font-semibold text-ink">{group.title}</p>
                <ul className="mt-3 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] leading-relaxed text-steel">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
