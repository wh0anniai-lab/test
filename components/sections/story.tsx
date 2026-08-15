"use client";

import Image from "next/image";
import { STORY } from "@/lib/data/capabilities";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";
import profileImage from "@/public/images/profile.jpg";

export function Story() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="story" className="scroll-anchor bg-navy py-20 md:py-28">
      <div ref={ref} className="container">
        <SectionHeader
          index="05"
          eyebrow="Story"
          title="로봇에서 시작해 제품으로"
          description="연도를 나열하는 대신, 어떤 방향으로 움직여 왔는지를 보여드립니다."
        />

        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 lg:grid-cols-[minmax(0,320px)_minmax(0,1fr)] lg:gap-14">
          {/* 프로필 */}
          <div data-reveal className="reveal lg:sticky lg:top-24 lg:self-start">
            <div className="surface overflow-hidden">
              {/* 원본이 2:3 세로 사진이라 모바일에서 화면을 독점한다. 비율을 고정한다. */}
              <div className="relative aspect-[4/5] w-full sm:aspect-[16/10] lg:aspect-[4/5]">
                <Image
                  src={profileImage}
                  alt="김동영 프로필 사진"
                  placeholder="blur"
                  fill
                  sizes="(min-width: 1024px) 320px, 100vw"
                  className="object-cover object-top"
                />
              </div>
              <div className="p-5">
                <p className="text-[18px] font-semibold text-white">김동영</p>
                <p className="mt-1 text-[14px] leading-relaxed text-steel">
                  변화하는 중심에 함께하고 싶은 개발자
                </p>
                <ul className="mt-4 flex flex-wrap gap-1.5">
                  {["C / C++", "Python", "Java", "ROS", "SLAM"].map((skill) => (
                    <li
                      key={skill}
                      className="rounded-full border border-hairline bg-navy/40 px-2.5 py-1 text-[11px] text-ink/85"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* 성장 단계 */}
          <ol className="relative">
            {STORY.map((step, i) => (
              <li
                key={step.stage}
                data-reveal
                data-reveal-delay={String(i * 70)}
                className="reveal relative border-l border-hairline pb-9 pl-7 last:pb-0"
              >
                {/* 단계 마커 */}
                <span
                  aria-hidden
                  className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rounded-full bg-cyan ring-4 ring-navy"
                />

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                  <h3 className="text-[13px] font-semibold uppercase tracking-[0.16em] text-cyan">
                    {step.stage}
                  </h3>
                  <span className="text-[12px] tabular-nums text-steel/60">
                    {step.period}
                  </span>
                </div>

                <p className="mt-2 text-[18px] font-semibold leading-snug text-white md:text-[20px]">
                  {step.title}
                </p>
                <p className="mt-2 max-w-xl text-[15px] leading-[1.7] text-steel">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
