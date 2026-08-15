"use client";

import Image from "next/image";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";
import lectureImage from "@/public/images/lecture.jpg";

const CREDENTIALS = [
  {
    title: "경상대학교 대학원 강의",
    detail: "AI & Python 기술 강의 강사",
  },
  {
    title: "AI 서초칼리지 with KAIST",
    detail: "AI 최신 연구 동향 및 실무 교육 이수 완료",
  },
  {
    title: "「2026 AI디지털튜터 양성 교육 사업」",
    detail: "이수 완료",
  },
  {
    title: "AI 글로벌 협회",
    detail: "AI 강사 자격증",
  },
];

export function Lecture() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="lecture" className="scroll-anchor bg-navy py-20 md:py-28">
      <div ref={ref} className="container">
        <SectionHeader
          index="08"
          eyebrow="Lecture"
          title="만들고, 나누고, 가르칩니다"
          description="AI 시대에 맞춰 교육을 이수하고, 대학원에서 AI와 Python을 가르치고 있습니다."
        />

        <div className="mt-12 grid grid-cols-1 gap-8 md:mt-16 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] lg:gap-12 lg:items-start">
          <figure
            data-reveal
            className="reveal overflow-hidden rounded-lg border border-hairline"
          >
            <Image
              src={lectureImage}
              alt="대학교에서 AI 기술 강연을 진행하는 모습"
              placeholder="blur"
              sizes="(min-width: 1024px) 620px, 100vw"
              className="h-auto w-full object-cover"
            />
            <figcaption className="bg-panel px-5 py-3 text-[13px] text-steel">
              대학교 AI 기술 강연 현장
            </figcaption>
          </figure>

          <ul className="flex flex-col gap-3">
            {CREDENTIALS.map((item, i) => (
              <li
                key={item.title}
                data-reveal
                data-reveal-delay={String(i * 70)}
                className="reveal surface p-5"
              >
                <p className="text-[15px] font-semibold leading-snug text-white md:text-[16px]">
                  {item.title}
                </p>
                <p className="mt-1.5 text-[13px] leading-relaxed text-steel">
                  {item.detail}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
