"use client";

import { ArrowUpRight } from "lucide-react";
import { FEATURED } from "@/lib/data/projects";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

export function SelectedWork() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="work" className="pane scroll-anchor">
      <SectionHeader
        index="02"
        eyebrow="Selected Work"
        title="만들고, 경험하고, 창업하고, 공유한 것들"
        description="연구에서 그치지 않고, 창업해서 제품을 출시해보고, 경험하고 배운 것을 공유하고 가르치고 있습니다."
        count={`${FEATURED.length}건`}
      />

      {/* 모바일은 1열 스택이 기본, 넓은 화면에서만 확장 */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-3">
        {FEATURED.map((project, i) => (
          <article
            key={project.id}
            id={`work-${project.id}`}
            data-reveal
            data-reveal-delay={String(i * 80)}
            className="reveal card group scroll-anchor flex flex-col p-5 transition-shadow duration-300 hover:shadow-lift"
          >
            <div className="flex items-center justify-between">
              <span className="eyebrow">{project.category}</span>
              <span className="font-mono text-[11px] tabular-nums text-muted">
                {String(i + 1).padStart(3, "0")}
              </span>
            </div>

            <h3 className="mt-3 text-[19px] font-bold tracking-tight">{project.title}</h3>
            {project.subtitle && <p className="mt-0.5 text-[13px] text-muted">{project.subtitle}</p>}

            <p className="mt-3 text-[14px] leading-[1.65] text-ink/85">{project.summary}</p>

            <dl className="mt-4 space-y-2.5 rounded-sm bg-panel p-3.5">
              <div>
                <dt className="text-[11.5px] font-semibold text-muted">주요 역할</dt>
                <dd className="mt-0.5 text-[13.5px] leading-relaxed">{project.role}</dd>
              </div>
              <div>
                <dt className="text-[11.5px] font-semibold text-muted">성과</dt>
                <dd className="mt-0.5 text-[13.5px] leading-relaxed">{project.result}</dd>
              </div>
            </dl>

            <ul className="mt-4 flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li key={tag} className="chip h-7 px-3 text-[11.5px]">
                  {tag}
                </li>
              ))}
            </ul>

            <p className="mt-auto flex items-center gap-1.5 pt-4 font-mono text-[11.5px] tabular-nums text-muted">
              {project.period}
              <ArrowUpRight
                size={15}
                aria-hidden
                className="ml-auto text-accent transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
