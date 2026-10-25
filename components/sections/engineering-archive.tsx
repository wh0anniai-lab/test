"use client";

import { ARCHIVE } from "@/lib/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

/**
 * 초기 로보틱스 연구/개발 이력.
 * 삭제하지 않고 보존하되, 최근 AI 작업보다 시각적 우선순위는 낮춘다.
 */
export function EngineeringArchive() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="archive" className="pane scroll-anchor">
      <SectionHeader
        index="07"
        eyebrow="Engineering Archive"
        title="손으로 만들던 시절"
        description="AI 이전에 하드웨어와 제어를 직접 다뤘던 연구·개발 기록입니다. 지금의 작업을 떠받치는 기반이기도 합니다."
        count={`${ARCHIVE.length}건`}
      />

      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {ARCHIVE.map((item, i) => (
          <li
            key={item.title}
            data-reveal
            data-reveal-delay={String(i * 60)}
            className="reveal card flex flex-col p-5 transition-shadow duration-300 hover:shadow-lift"
          >
            <span className="font-mono text-[11px] tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="mt-2 text-[15.5px] font-bold leading-snug">{item.title}</h3>
            {item.titleKo && <p className="mt-0.5 text-[12.5px] text-muted">{item.titleKo}</p>}
            <p className="mt-1.5 font-mono text-[11px] tabular-nums text-muted">{item.period}</p>

            <div className="mt-4 border-t border-line pt-3.5">
              <p className="text-[13px] leading-relaxed text-muted">{item.role}</p>
              <p className="mt-2 flex gap-2 text-[13px] leading-relaxed">
                <span aria-hidden className="mt-[8px] h-1 w-1 shrink-0 rounded-full bg-accent" />
                {item.result}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
