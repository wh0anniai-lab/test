"use client";

import { Bot, Cpu, Rocket, Presentation, type LucideIcon } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const NAME = "김동영";
const TAGLINE = "변화하는 중심에 함께하고 싶은 개발자";
const MY_PROFILE =
  "로봇공학 연구에서 AI 시스템 개발, 그리고 플랫폼 서비스 창업까지 — 기술의 이론과 실무를 두루 경험하며 끊임없이 성장해온 개발자입니다.";

const CORE_SKILLS = ["C / C++", "Python", "Java", "ROS", "SLAM"];

type Highlight = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const HIGHLIGHTS: Highlight[] = [
  { icon: Bot, title: "Robotics", description: "로봇 시스템 연구 · 개발" },
  { icon: Cpu, title: "AI Systems", description: "드론 AI 시스템 개발" },
  { icon: Rocket, title: "Start-up", description: "온라인 플랫폼 서비스 운영" },
  { icon: Presentation, title: "AI Tech. Lecture", description: "AI 기술 강의 및 컴퓨터 언어 강의" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="about" className="scroll-mt-14 bg-mist py-24 md:py-32">
      <div ref={ref} className="container">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] gap-14 lg:gap-20 items-start">
          {/* 프로필 카드 */}
          <div data-reveal className="reveal lg:sticky lg:top-28">
            <Card className="bg-paper">
              <CardContent className="p-8">
                <Badge variant="accent">PROFILE</Badge>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-ink">
                  {NAME}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-steel">{TAGLINE}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {CORE_SKILLS.map((skill) => (
                    <Badge key={skill}>{skill}</Badge>
                  ))}
                </div>

                {/* 실제 프로필 사진으로 교체하려면 아래 div를 <img src="/images/profile.jpg" ... /> 로 바꾸세요 */}
                {/* <div className="mt-8 aspect-[4/3] w-full rounded-md bg-gradient-to-br from-signal/15 to-[#7B61FF]/15 border border-hairline flex items-center justify-center">
                  <span className="text-steel text-sm">프로필 사진 영역</span>
                </div> */}
                <img src="/images/profile.jpg" 
                />
              </CardContent>
            </Card>
          </div>

          {/* 텍스트 콘텐츠 */}
          <div className="max-w-2xl">
            <span
              data-reveal
              className="reveal text-[13px] font-medium uppercase tracking-[0.2em] text-signal"
            >
              My Profile
            </span>
            <h2
              data-reveal
              data-reveal-delay="60"
              className="reveal mt-4 text-3xl md:text-[44px] font-semibold tracking-tight text-ink leading-[1.15]"
            >
              만드는 사람의 이야기
            </h2>

            <p
              data-reveal
              data-reveal-delay="140"
              className="reveal mt-6 text-lg leading-[1.7] text-ink/80"
            >
              {MY_PROFILE}
            </p>

            {/* 하이라이트 카드 */}
            <div
              data-reveal
              data-reveal-delay="220"
              className="reveal mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {HIGHLIGHTS.map(({ icon: Icon, title, description }) => (
                <Card key={title} className="bg-paper">
                  <CardHeader className="flex-row items-center gap-3 p-5 pb-2 space-y-0">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-signal/10 text-signal">
                      <Icon size={17} />
                    </span>
                    <CardTitle className="text-base">{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-5 pt-0">
                    <CardDescription>{description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
