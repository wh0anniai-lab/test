"use client";

import { GraduationCap } from "lucide-react";
import { CAREER, EDUCATION, STATS } from "@/lib/data/career";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

export function Career() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="career" className="pane scroll-anchor">
      <SectionHeader
        index="06"
        eyebrow="Career"
        title="걸어온 길"
        description="연구원에서 창업가로, 그리고 다시 가르치는 사람으로."
        count={`${CAREER.length}곳`}
      />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1fr)_minmax(0,300px)]">
        {/* 경력 목록 — 최신순 */}
        <ol className="card divide-y divide-line">
          {CAREER.map((item, i) => (
            <li
              key={`${item.year}-${item.org}`}
              data-reveal
              data-reveal-delay={String(i * 45)}
              className="reveal grid grid-cols-[84px_minmax(0,1fr)] gap-x-4 px-5 py-4 md:grid-cols-[104px_minmax(0,1fr)]"
            >
              <span className="pt-0.5 font-mono text-[11.5px] font-medium tabular-nums text-muted">{item.year}</span>
              <div>
                <h3 className="text-[15px] font-bold leading-snug">{item.org}</h3>
                <p className={cn("mt-0.5 text-[13px] font-medium", item.current ? "text-accent" : "text-muted")}>
                  {item.role}
                  {item.current && (
                    <span className="ml-2 inline-flex h-5 items-center rounded-full bg-accent/10 px-2 text-[10.5px] font-semibold text-accent">
                      진행
                    </span>
                  )}
                </p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{item.description}</p>
              </div>
            </li>
          ))}
        </ol>

        {/* 학력 + 지표 */}
        <div className="flex flex-col gap-3">
          <div data-reveal className="reveal card p-5">
            <span className="flex h-11 w-11 items-center justify-center rounded-[14px] bg-track text-wine">
              <GraduationCap size={19} aria-hidden />
            </span>
            <h3 className="eyebrow mt-4">Education</h3>
            <p className="mt-2 font-mono text-[11.5px] tabular-nums text-muted">{EDUCATION.period}</p>
            <p className="mt-0.5 text-[16px] font-bold">{EDUCATION.school}</p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">{EDUCATION.major}</p>
          </div>

          <div className="grid grid-cols-2 gap-3">
            {STATS.map((stat, i) => (
              <div key={stat.label} data-reveal data-reveal-delay={String(60 + i * 60)} className="reveal card p-4">
                <p className="text-[26px] font-bold tracking-tight text-accent">{stat.value}</p>
                <p className="mt-1 text-[13px] font-semibold leading-snug">{stat.label}</p>
                <p className="mt-1 text-[11.5px] leading-relaxed text-muted">{stat.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
