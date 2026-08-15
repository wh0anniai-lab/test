"use client";

import { TECH } from "@/lib/data/capabilities";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

/** 로고 벽 대신 카테고리별 텍스트 그룹으로 정리한다. */
export function TechStack() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-navy py-20 md:py-28">
      <div ref={ref} className="container">
        <SectionHeader index="09" eyebrow="Tech" title="사용하는 기술" />

        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:grid-cols-3 md:gap-10">
          {TECH.map((group, i) => (
            <div
              key={group.title}
              data-reveal
              data-reveal-delay={String(i * 80)}
              className="reveal"
            >
              <h3 className="border-b border-hairline pb-3 text-[12px] font-semibold uppercase tracking-[0.16em] text-cyan">
                {group.title}
              </h3>
              <ul className="mt-4 space-y-2.5">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="flex gap-2.5 text-[14px] leading-relaxed text-steel"
                  >
                    <span
                      aria-hidden
                      className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-steel/40"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
