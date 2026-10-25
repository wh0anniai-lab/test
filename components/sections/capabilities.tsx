"use client";

import { Cpu, Layers, Bot, Presentation, type LucideIcon } from "lucide-react";
import { CAPABILITIES } from "@/lib/data/capabilities";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

const ICONS: Record<string, LucideIcon> = {
  "AI Systems": Cpu,
  Product: Layers,
  Robotics: Bot,
  Teaching: Presentation,
};

export function Capabilities() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="capabilities" className="pane scroll-anchor">
      <SectionHeader
        index="03"
        eyebrow="What I Build"
        title="무엇을 만들 수 있는가"
        description="기술 목록이 아니라, 실제로 끝까지 만들어본 영역으로 정리했습니다."
        count={`${CAPABILITIES.length}분야`}
      />

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {CAPABILITIES.map((capability, i) => {
          const Icon = ICONS[capability.title] ?? Cpu;
          return (
            <div
              key={capability.title}
              data-reveal
              data-reveal-delay={String(i * 70)}
              className="reveal card p-5 transition-shadow duration-300 hover:shadow-lift"
            >
              {/* 쿼카 모션랩 썸네일처럼 회색 네모 안에 그림 하나 */}
              <span className="flex h-12 w-12 items-center justify-center rounded-[14px] bg-track text-accent">
                <Icon size={21} aria-hidden />
              </span>

              <h3 className="mt-4 text-[16px] font-bold">{capability.title}</h3>
              <p className="mt-1 text-[13px] leading-relaxed text-muted">{capability.caption}</p>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {capability.items.map((item) => (
                  <li key={item} className="chip h-7 px-3 text-[11.5px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
