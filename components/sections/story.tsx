"use client";

import Image from "next/image";
import { STORY } from "@/lib/data/capabilities";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";
import profileImage from "@/public/images/profile.jpg";

export function Story() {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} id="story" className="pane scroll-anchor">
      <SectionHeader
        index="05"
        eyebrow="Story"
        title="로봇에서 시작해 제품으로"
        description="연도를 나열하는 대신, 어떤 방향으로 움직여 왔는지를 보여드립니다."
        count={`${STORY.length}단계`}
      />

      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,280px)_minmax(0,1fr)]">
        {/* 프로필 */}
        <div data-reveal className="reveal card self-start overflow-hidden lg:sticky lg:top-24">
          {/* 원본이 2:3 세로 사진이라 모바일에서 화면을 독점한다. 비율을 고정한다. */}
          <div className="relative aspect-[4/5] w-full bg-track sm:aspect-[16/10] lg:aspect-[4/5]">
            <Image
              src={profileImage}
              alt="김동영 프로필 사진"
              placeholder="blur"
              fill
              sizes="(min-width: 1024px) 280px, 100vw"
              className="object-cover object-top"
            />
          </div>
          <div className="p-5">
            <p className="text-[17px] font-bold">김동영</p>
            <p className="mt-1 text-[13px] leading-relaxed text-muted">변화하는 중심에 함께하고 싶은 개발자</p>
            <ul className="mt-4 flex flex-wrap gap-1.5">
              {["C / C++", "Python", "Java", "ROS", "SLAM"].map((skill) => (
                <li key={skill} className="chip h-7 px-3 text-[11.5px]">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 성장 단계 */}
        <ol className="card divide-y divide-line">
          {STORY.map((step, i) => (
            <li
              key={step.stage}
              data-reveal
              data-reveal-delay={String(i * 60)}
              className="reveal grid grid-cols-[32px_minmax(0,1fr)] gap-x-3 p-5"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-track font-mono text-[11px] font-semibold text-accent">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <div className="flex flex-wrap items-baseline gap-x-2.5 gap-y-0.5">
                  <h3 className="eyebrow">{step.stage}</h3>
                  <span className="font-mono text-[11.5px] tabular-nums text-muted">{step.period}</span>
                </div>
                <p className="mt-1.5 text-[16.5px] font-bold leading-snug">{step.title}</p>
                <p className="mt-1.5 text-[14px] leading-[1.7] text-muted">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
