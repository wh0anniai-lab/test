"use client";

import { ARCHIVE } from "@/lib/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

/**
 * 초기 로보틱스 연구/개발 이력.
 * 삭제하지 않고 보존하되, 최근 AI 작업보다 시각적 우선순위는 낮춘다.
 */
export function EngineeringArchive() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-navy py-20 md:py-28">
      <div ref={ref} className="container">
        <SectionHeader
          index="07"
          eyebrow="Engineering Archive"
          title="손으로 만들던 시절"
          description="AI 이전에 하드웨어와 제어를 직접 다뤘던 연구·개발 기록입니다. 지금의 작업을 떠받치는 기반이기도 합니다."
        />

        <ul className="mt-10 divide-y divide-hairline border-y border-hairline md:mt-12">
          {ARCHIVE.map((item, i) => (
            <li
              key={item.title}
              data-reveal
              data-reveal-delay={String(i * 60)}
              className="reveal group grid grid-cols-1 gap-2 py-6 transition-colors duration-300 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-8 md:py-7"
            >
              <div>
                <div className="flex items-baseline gap-3">
                  <span className="text-[11px] tabular-nums text-steel/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-[17px] font-semibold text-ink transition-colors duration-300 group-hover:text-white md:text-[18px]">
                    {item.title}
                  </h3>
                </div>
                {item.titleKo && (
                  <p className="mt-1 pl-[26px] text-[13px] text-steel/70">
                    {item.titleKo}
                  </p>
                )}
                <p className="mt-1.5 pl-[26px] text-[12px] tabular-nums text-steel/60">
                  {item.period}
                </p>
              </div>

              <div className="pl-[26px] md:pl-0">
                <p className="text-[14px] leading-relaxed text-steel">
                  {item.role}
                </p>
                <p className="mt-2 flex gap-2 text-[14px] leading-relaxed text-ink/75">
                  <span aria-hidden className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-cyan/60" />
                  {item.result}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
