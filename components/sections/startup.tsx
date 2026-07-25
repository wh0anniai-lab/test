"use client";

import { useReveal } from "@/hooks/use-reveal";
import { Card, CardContent } from "@/components/ui/card";

type Company = {
  name: string;
  role: string;
  period: string;
  category: string;
  description: string;
};

const COMPANIES: Company[] = [
  {
    name: "맘잇 (Momit)",
    role: "CEO & CTO",
    period: "2018 – 2026 | 개인사업자",
    category: "플랫폼 서비스",
    description: "플랫폼 서비스를 직접 기획, 개발, 운영한 개인 창업",
  },
  {
    name: "가티 (Gati)",
    role: "공동대표 & CTO",
    period: "2020 – 2022 | 게이밍 에듀케이션 플랫폼",
    category: "에듀테크",
    description: "게이밍과 에듀케이션을 결합한 플랫폼 서비스",
  },
];

const STATS = [
  { value: "8+", label: "년 이상의 경력", description: "연구부터 창업까지 다양한 환경에서 쌓은 실무 경험" },
  { value: "5", label: "주요 프로젝트", description: "로봇, AI, 드론 등 다양한 분야의 기술 프로젝트 수행" },
  { value: "2", label: "창업 경험", description: "플랫폼 서비스 직접 구축 및 운영 경험" },
  { value: "2", label: "국내 논문, IEEE 논문 게재", description: "국내, 국제 학술지에 연구 성과 발표" },
];

export function Startup() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="startup" className="scroll-mt-14 bg-paper py-24 md:py-32">
      <div ref={ref} className="container">
        {/* 창업 경험 */}
        <div className="text-center">
          <span data-reveal className="reveal text-[13px] font-medium uppercase tracking-[0.2em] text-signal">
            Start-up
          </span>
          <h2
            data-reveal
            data-reveal-delay="60"
            className="reveal mt-4 text-3xl md:text-[44px] font-semibold tracking-tight text-ink"
          >
            창업 경험
          </h2>
          <p data-reveal data-reveal-delay="140" className="reveal mx-auto mt-5 max-w-2xl text-[17px] leading-relaxed text-ink/80">
            기술 연구자에서 벗어나 실제 서비스와 비즈니스를 직접 구축하고 운영한 창업가의 경험도 보유하고 있습니다.
          </p>
        </div>

        <div data-reveal data-reveal-delay="220" className="reveal mt-14 grid grid-cols-1 md:grid-cols-2 gap-5">
          {COMPANIES.map((company) => (
            <Card key={company.name} className="bg-mist border-hairline/60">
              <CardContent className="p-7">
                <span className="inline-block rounded-full bg-signal/10 px-3 py-1 text-[12px] font-medium text-signal">
                  {company.category}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-ink">
                  {company.name}
                  <span className="ml-2 text-[14px] font-medium text-steel">— {company.role}</span>
                </h3>
                <p className="mt-1 text-[13px] text-steel">{company.period}</p>
                <p className="mt-4 text-[15px] leading-relaxed text-ink/80">{company.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 통계 */}
        <div data-reveal data-reveal-delay="300" className="reveal mt-16 grid grid-cols-2 lg:grid-cols-4 gap-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="rounded-lg border border-hairline/70 bg-paper p-6 text-center">
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-signal">{stat.value}</p>
              <p className="mt-2 text-[14px] font-semibold text-ink">{stat.label}</p>
              <p className="mt-1 text-[12px] leading-relaxed text-steel">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* AI 기술 강연 */}
        <div id="lecture" className="mt-24 md:mt-32 scroll-mt-20">
          <div className="text-center">
            <span data-reveal className="reveal text-[13px] font-medium uppercase tracking-[0.2em] text-signal">
              Lecture
            </span>
            <h2
              data-reveal
              data-reveal-delay="60"
              className="reveal mt-4 text-3xl md:text-[40px] font-semibold tracking-tight text-ink"
            >
              AI 기술 강연
            </h2>
            <p data-reveal data-reveal-delay="140" className="reveal mt-4 text-[17px] leading-relaxed text-ink/80">
              AI 시대에 맞춰 교육을 이수하고, 대학교 기술 강연을 진행하고 있습니다.
            </p>
          </div>

          <div
            data-reveal
            data-reveal-delay="220"
            className="reveal mt-10 mx-auto max-w-4xl overflow-hidden rounded-lg border border-hairline"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/lecture.jpg"
              alt="대학교에서 AI 기술 강연을 진행하는 모습"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
