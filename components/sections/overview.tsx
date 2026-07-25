"use client";

import { FileText, Bot, Wrench, Rocket, Presentation, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";

type OverviewItem = {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
};

const ITEMS: OverviewItem[] = [
  {
    icon: FileText,
    title: "이력서 & 경력",
    description: "학력 · 경력 · 기술 스택 요약",
    href: "#career",
  },
  {
    icon: Bot,
    title: "자율주행 로봇",
    description: "Depth 카메라 · IMU · ROS 기반",
    href: "#projects",
  },
  {
    icon: Wrench,
    title: "로봇 하드웨어",
    description: "모듈형 그리퍼 · 미세 조작 · 구형 로봇",
    href: "#projects",
  },
  {
    icon: Rocket,
    title: "창업",
    description: "온라인 플랫폼 서비스 운영",
    href: "#startup",
  },
  {
    icon: Presentation,
    title: "강연",
    description: "AI 기술 강연 & 컴퓨터 언어 강연",
    href: "#lecture",
  },
];

export function Overview() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-paper py-20 md:py-28">
      <div ref={ref} className="container">
        <div className="text-center">
          <span data-reveal className="reveal text-[13px] font-medium uppercase tracking-[0.2em] text-signal">
            Overview
          </span>
          <h2
            data-reveal
            data-reveal-delay="60"
            className="reveal mt-4 text-3xl md:text-[40px] font-semibold tracking-tight text-ink"
          >
            포트폴리오 구성
          </h2>
        </div>

        <div
          data-reveal
          data-reveal-delay="140"
          className="reveal mt-14 grid grid-cols-2 md:grid-cols-5 gap-3 md:gap-4"
        >
          {ITEMS.map(({ icon: Icon, title, description, href }) => (
            <a
              key={title}
              href={href}
              className="group flex flex-col items-center gap-3 rounded-lg border border-hairline/70 bg-paper px-4 py-7 text-center transition-all duration-300 hover:-translate-y-1 hover:border-signal/40 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-mist text-ink transition-colors duration-300 group-hover:bg-signal group-hover:text-white">
                <Icon size={20} />
              </span>
              <span className="text-[14px] font-semibold text-ink">{title}</span>
              <span className="text-[12px] leading-snug text-steel">{description}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
