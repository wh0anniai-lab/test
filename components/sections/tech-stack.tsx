"use client";

import { TECH } from "@/lib/data/capabilities";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

/** 로고 벽 대신 카테고리별 텍스트 그룹으로 정리한다. */
export function TechStack() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="tech" className="pane scroll-anchor">
      <SectionHeader index="09" eyebrow="Tech" title="사용하는 기술" count={`${TECH.length}묶음`} />

      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {TECH.map((group, i) => (
          <div key={group.title} data-reveal data-reveal-delay={String(i * 70)} className="reveal card p-5">
            <h3 className="flex items-center justify-between border-b border-line pb-3">
              <span className="eyebrow">{group.title}</span>
              <span className="text-[11.5px] text-muted">{group.items.length}</span>
            </h3>
            <ul className="mt-3.5 space-y-2">
              {group.items.map((item) => (
                <li key={item} className="flex gap-2.5 text-[13.5px] leading-relaxed">
                  <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-muted/50" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
