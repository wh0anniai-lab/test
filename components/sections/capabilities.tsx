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

const ACCENT: Record<string, string> = {
  cyan: "bg-cyan/10 text-cyan",
  purple: "bg-purple/10 text-purple",
  green: "bg-signal-green/10 text-signal-green",
  amber: "bg-signal-amber/10 text-signal-amber",
};

export function Capabilities() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="capabilities" className="scroll-anchor bg-navy py-20 md:py-28">
      <div ref={ref} className="container">
        <SectionHeader
          index="03"
          eyebrow="What I Build"
          title="무엇을 만들 수 있는가"
          description="기술 목록이 아니라, 실제로 끝까지 만들어본 영역으로 정리했습니다."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
          {CAPABILITIES.map((capability, i) => {
            const Icon = ICONS[capability.title] ?? Cpu;
            return (
              <div
                key={capability.title}
                data-reveal
                data-reveal-delay={String(i * 80)}
                className="reveal surface p-6 transition-colors duration-300 hover:bg-panel-soft"
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-md ${ACCENT[capability.accent]}`}
                >
                  <Icon size={20} aria-hidden />
                </span>

                <h3 className="mt-4 text-[19px] font-semibold text-white">
                  {capability.title}
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-steel">
                  {capability.caption}
                </p>

                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {capability.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-hairline bg-navy/40 px-3 py-1 text-[12px] text-ink/85"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
