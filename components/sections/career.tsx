"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Badge } from "@/components/ui/badge";

const EDUCATION = {
  period: "2009 – 2016",
  school: "경상대학교",
  major: "정보통신공학과 / 지능로봇공학과 복수전공",
};

type ExperienceItem = {
  period: string;
  org: string;
  role: string;
  description: string;
};

const EXPERIENCE: ExperienceItem[] = [
  {
    period: "2016 – 2017",
    org: "한국과학기술연구원 (KIST)",
    role: "연구원",
    description: "로봇 시스템 연구 및 개발",
  },
  {
    period: "2018 – 현재",
    org: "맘잇 (Momit)",
    role: "개인사업자 CEO & CTO",
    description: "플랫폼 서비스 운영",
  },
  {
    period: "2020 – 2022",
    org: "가티 (Gati)",
    role: "공동대표자 CTO",
    description: "게이밍 에듀케이션 플랫폼",
  },
  {
    period: "2022",
    org: "OZO",
    role: "AI Developer",
    description: "Drone AI System 개발",
  },
  {
    period: "2026",
    org: "경상대학교 대학원생 강의",
    role: "강사",
    description: "AI & Python 기술",
  },
  {
    period: "2026",
    org: "AI 서초칼리지 with KAIST",
    role: "이수중",
    description: "AI 최신 연구 동향 및 실무 교육 이수중",
  },
];

export function Career() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="career" className="scroll-mt-14 bg-paper py-24 md:py-32">
      <div ref={ref} className="container">
        <div className="text-center">
          <span data-reveal className="reveal text-[13px] font-medium uppercase tracking-[0.2em] text-signal">
            Career
          </span>
          <h2
            data-reveal
            data-reveal-delay="60"
            className="reveal mt-4 text-3xl md:text-[44px] font-semibold tracking-tight text-ink"
          >
            이력서
          </h2>
        </div>

        <div className="mx-auto mt-16 max-w-3xl grid grid-cols-1 gap-14">
          {/* 학력 */}
          <div data-reveal data-reveal-delay="100" className="reveal">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-steel">
              학력 (Education)
            </h3>
            <div className="mt-5 flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-l-2 border-signal/30 pl-5">
              <span className="text-[13px] font-medium text-signal shrink-0">
                {EDUCATION.period}
              </span>
              <div>
                <p className="text-[17px] font-semibold text-ink">{EDUCATION.school}</p>
                <p className="mt-0.5 text-[15px] text-steel">{EDUCATION.major}</p>
              </div>
            </div>
          </div>

          {/* 경력 타임라인 */}
          <div data-reveal data-reveal-delay="180" className="reveal">
            <h3 className="text-[13px] font-semibold uppercase tracking-[0.15em] text-steel">
              경력 (Experience)
            </h3>

            <ol className="mt-6 relative border-l-2 border-hairline pl-8">
              {EXPERIENCE.map((item, i) => (
                <li key={`${item.org}-${i}`} className="relative pb-10 last:pb-0">
                  <span className="absolute -left-[41px] top-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-signal text-[12px] font-semibold text-white ring-4 ring-paper">
                    {i + 1}
                  </span>
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge variant="outline">{item.period}</Badge>
                  </div>
                  <p className="mt-2 text-[17px] font-semibold text-ink">
                    {item.org}
                    <span className="ml-2 text-[14px] font-medium text-signal">{item.role}</span>
                  </p>
                  <p className="mt-1 text-[15px] leading-relaxed text-steel">— {item.description}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
