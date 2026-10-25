"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";
import { CREDENTIALS } from "@/lib/data/career";
import lectureImage from "@/public/images/lecture.jpg";

export function Lecture() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="lecture" className="pane scroll-anchor">
      <SectionHeader
        index="08"
        eyebrow="Lecture"
        title="만들고, 나누고, 가르칩니다"
        description="AI 시대에 맞춰 교육을 이수하고, 대학원에서 AI와 Python을 가르치고 있습니다."
        count={`${CREDENTIALS.length}건`}
      />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:items-start">
        <figure data-reveal className="reveal card overflow-hidden">
          <Image
            src={lectureImage}
            alt="대학교에서 AI 기술 강연을 진행하는 모습"
            placeholder="blur"
            sizes="(min-width: 1024px) 560px, 100vw"
            className="h-auto w-full object-cover"
          />
          <figcaption className="px-5 py-3 text-[12.5px] text-muted">대학교 AI 기술 강연 현장</figcaption>
        </figure>

        <ul className="card divide-y divide-line">
          {CREDENTIALS.map((item, i) => (
            <li key={item.title} data-reveal data-reveal-delay={String(i * 60)} className="reveal flex gap-3.5 p-5">
              <span className="font-mono text-[11px] tabular-nums text-muted">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="text-[15px] font-bold leading-snug">{item.title}</p>
                <p className="mt-1 text-[13px] leading-relaxed text-muted">{item.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
