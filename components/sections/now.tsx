"use client";

import { NOW } from "@/lib/data/capabilities";
import { useReveal } from "@/hooks/use-reveal";

/**
 * 지금 하고 있는 일.
 * 과거 이력만 나열된 포트폴리오로 보이지 않게 하는 것이 목적이다.
 */
export function Now() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section className="bg-navy py-16 md:py-20">
      <div ref={ref} className="container">
        <div
          data-reveal
          className="reveal surface relative overflow-hidden p-6 md:p-10"
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(40% 70% at 92% 0%, rgba(36,214,255,0.12), transparent 70%)",
            }}
          />

          <div className="relative flex items-center gap-2.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-signal-green opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-green" />
            </span>
            <span className="eyebrow text-signal-green">Now</span>
          </div>

          <dl className="relative mt-7 grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {NOW.map((item, i) => (
              <div
                key={item.label}
                data-reveal
                data-reveal-delay={String(80 + i * 80)}
                className="reveal border-t border-hairline pt-4 md:border-t-0 md:border-l md:pl-6 md:pt-0"
              >
                <dt className="text-[12px] font-semibold uppercase tracking-[0.16em] text-steel">
                  {item.label}
                </dt>
                <dd className="mt-2 text-[17px] font-semibold leading-snug text-white">
                  {item.value}
                </dd>
                <dd className="mt-1.5 text-[13px] leading-relaxed text-steel">
                  {item.detail}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
