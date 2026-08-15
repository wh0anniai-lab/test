"use client";

import { ArrowUpRight } from "lucide-react";
import { FEATURED } from "@/lib/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

/**
 * accent 별 클래스는 정적 문자열로 둔다.
 * (Tailwind 는 소스를 문자열로 스캔하므로 동적 조합 클래스는 생성되지 않는다)
 */
const ACCENT: Record<string, { text: string; glow: string; border: string }> = {
  cyan: {
    text: "text-cyan",
    glow: "from-cyan/25",
    border: "group-hover:border-cyan/35",
  },
  purple: {
    text: "text-purple",
    glow: "from-purple/25",
    border: "group-hover:border-purple/35",
  },
  green: {
    text: "text-signal-green",
    glow: "from-signal-green/20",
    border: "group-hover:border-signal-green/35",
  },
};

export function SelectedWork() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="work" className="scroll-anchor bg-navy py-20 md:py-28">
      <div ref={ref} className="container">
        <SectionHeader
          index="02"
          eyebrow="Selected Work"
          title="만들고, 경험하고, 창업하고, 공유한 것들"
          description="연구에서 그치지 않고, 창업해서 제품을 출시해보고, 경험하고 배운 것을 공유하고 가르치고 있습니다."
        />

        {/* 모바일은 1열 스택이 기본, 데스크톱에서만 확장 */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2 lg:grid-cols-3">
          {FEATURED.map((project, i) => {
            const accent = ACCENT[project.accent];
            return (
              <article
                key={project.id}
                data-reveal
                data-reveal-delay={String(i * 90)}
                className={`reveal group surface relative flex flex-col overflow-hidden p-6 transition-colors duration-300 hover:bg-panel-soft ${accent.border}`}
              >
                {/* 카드 상단 미세 글로우 — 모든 카드에 강한 네온을 주지 않는다 */}
                <div
                  aria-hidden
                  className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b ${accent.glow} to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                />

                <div className="relative flex items-center justify-between">
                  <span className={`text-[11px] font-semibold uppercase tracking-[0.16em] ${accent.text}`}>
                    {project.category}
                  </span>
                  <span className="text-[11px] tabular-nums text-steel/50">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="relative mt-4 text-[22px] font-semibold tracking-tight text-white md:text-[24px]">
                  {project.title}
                </h3>
                {project.subtitle && (
                  <p className="relative mt-1 text-[13px] text-steel">
                    {project.subtitle}
                  </p>
                )}

                <p className="relative mt-4 text-[15px] leading-[1.65] text-ink/85">
                  {project.summary}
                </p>

                <dl className="relative mt-5 space-y-3 border-t border-hairline pt-5">
                  <div>
                    <dt className="text-[12px] font-semibold text-steel">주요 역할</dt>
                    <dd className="mt-1 text-[14px] leading-relaxed text-ink/80">
                      {project.role}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-[12px] font-semibold text-steel">성과</dt>
                    <dd className="mt-1 text-[14px] leading-relaxed text-ink/80">
                      {project.result}
                    </dd>
                  </div>
                </dl>

                <div className="relative mt-5 flex flex-wrap items-center gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-hairline px-2.5 py-1 text-[11px] font-medium text-steel"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="relative mt-5 flex items-center gap-1.5 text-[12px] tabular-nums text-steel/70">
                  {project.period}
                  <ArrowUpRight
                    size={14}
                    aria-hidden
                    className={`ml-auto transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${accent.text}`}
                  />
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
