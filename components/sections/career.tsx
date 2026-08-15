"use client";

import { GraduationCap } from "lucide-react";
import { CAREER, EDUCATION, STATS } from "@/lib/data/career";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

export function Career() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="career" className="scroll-anchor bg-navy py-20 md:py-28">
      <div ref={ref} className="container">
        <SectionHeader
          index="06"
          eyebrow="Career"
          title="걸어온 길"
          description="연구원에서 창업가로, 그리고 다시 가르치는 사람으로."
        />

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,320px)] lg:gap-14">
          {/* 경력 타임라인 — 최신순 */}
          <ol className="relative">
            {CAREER.map((item, i) => (
              <li
                key={`${item.year}-${item.org}`}
                data-reveal
                data-reveal-delay={String(i * 55)}
                className="reveal relative grid grid-cols-[64px_minmax(0,1fr)] gap-x-4 border-l border-hairline pb-8 pl-6 last:pb-0 md:grid-cols-[92px_minmax(0,1fr)] md:gap-x-6"
              >
                <span
                  aria-hidden
                  className={`absolute -left-[4px] top-2 h-2 w-2 rounded-full ring-4 ring-navy ${
                    item.current ? "bg-cyan" : "bg-steel/40"
                  }`}
                />

                <span className="pt-0.5 text-[12px] font-semibold tabular-nums text-steel md:text-[13px]">
                  {item.year}
                </span>

                <div>
                  <h3 className="text-[16px] font-semibold leading-snug text-white md:text-[18px]">
                    {item.org}
                  </h3>
                  <p
                    className={`mt-1 text-[13px] font-medium md:text-[14px] ${
                      item.current ? "text-cyan" : "text-steel"
                    }`}
                  >
                    {item.role}
                  </p>
                  <p className="mt-1.5 text-[14px] leading-relaxed text-steel/85">
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>

          {/* 학력 + 지표 */}
          <div className="flex flex-col gap-4">
            <div data-reveal className="reveal surface p-6">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-purple/10 text-purple">
                <GraduationCap size={19} aria-hidden />
              </span>
              <h3 className="mt-4 text-[12px] font-semibold uppercase tracking-[0.16em] text-steel">
                Education
              </h3>
              <p className="mt-3 text-[12px] tabular-nums text-steel">
                {EDUCATION.period}
              </p>
              <p className="mt-1 text-[17px] font-semibold text-white">
                {EDUCATION.school}
              </p>
              <p className="mt-1 text-[14px] leading-relaxed text-steel">
                {EDUCATION.major}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {STATS.map((stat, i) => (
                <div
                  key={stat.label}
                  data-reveal
                  data-reveal-delay={String(60 + i * 60)}
                  className="reveal surface p-5"
                >
                  <p className="text-[26px] font-semibold tracking-tight text-cyan">
                    {stat.value}
                  </p>
                  <p className="mt-1.5 text-[13px] font-semibold leading-snug text-white">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-[11px] leading-relaxed text-steel/80">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
