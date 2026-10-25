"use client";

import { NOW } from "@/lib/data/capabilities";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

/**
 * 지금 하고 있는 일.
 * 과거 이력만 나열된 포트폴리오로 보이지 않게 하는 것이 목적이다.
 */
export function Now() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="now" className="pane scroll-anchor">
      <SectionHeader index="04" eyebrow="Now" title="지금 하고 있는 일" count={`${NOW.length}가지`} />

      <dl data-reveal data-reveal-delay="80" className="reveal card grid grid-cols-1 md:grid-cols-3">
        {NOW.map((item) => (
          <div
            key={item.label}
            className="border-t border-line p-5 first:border-t-0 md:border-l md:border-t-0 md:first:border-l-0"
          >
            <dt className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-muted">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/40" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
              </span>
              {item.label}
            </dt>
            <dd className="mt-2 text-[16px] font-bold leading-snug">{item.value}</dd>
            <dd className="mt-1 text-[13px] leading-relaxed text-muted">{item.detail}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
