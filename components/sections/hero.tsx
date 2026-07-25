"use client";

import { useEffect, useRef } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * 실제 정보로 채워진 히어로 콘텐츠
 */
const HERO = {
  eyebrow: "김동영 포트폴리오",
  headline: "변화하는 중심과 함께하는 개발자",
  description:
    '로봇공학부터 AI 시스템, 플랫폼 서비스까지 — 기술의 최전선에서 문제를 해결하고 새로운 가치를 만들어 온 "김동영"의 여정을 소개합니다.',
  tags: ["ROBOTICS", "AI SYSTEMS", "PLATFORM SERVICES", "C / JAVA / PYTHON"],
};

export function Hero() {
  const orbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      const orb = orbRef.current;
      if (!orb) return;
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 40;
      const y = (e.clientY / innerHeight - 0.5) * 40;
      orb.style.transform = `translate(${x}px, ${y}px)`;
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden bg-paper pt-14"
    >
      {/* 배경 그라디언트 오브 — 시그니처 요소 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center"
      >
        <div
          ref={orbRef}
          className="h-[420px] w-[420px] md:h-[620px] md:w-[620px] rounded-full opacity-40 blur-[90px] animate-drift transition-transform duration-300 ease-out"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #0071E3, transparent 60%), radial-gradient(circle at 70% 70%, #7B61FF, transparent 55%)",
          }}
        />
      </div>

      <div className="container relative z-10 flex flex-col items-center text-center">
        <span
          data-reveal
          className="reveal mb-5 text-[13px] font-medium uppercase tracking-[0.2em] text-signal"
        >
          {HERO.eyebrow}
        </span>

        <h1
          data-reveal
          data-reveal-delay="80"
          className="reveal text-hero-sm md:text-hero-lg font-semibold text-ink"
        >
          {HERO.headline}
        </h1>

        <p
          data-reveal
          data-reveal-delay="180"
          className="reveal mt-6 max-w-xl text-lg md:text-xl leading-relaxed text-steel"
        >
          {HERO.description}
        </p>

        <div
          data-reveal
          data-reveal-delay="240"
          className="reveal mt-7 flex flex-wrap items-center justify-center gap-2"
        >
          {HERO.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-signal/30 bg-signal/5 px-4 py-1.5 text-[12px] font-medium tracking-wide text-signal"
            >
              {tag}
            </span>
          ))}
        </div>

        <div
          data-reveal
          data-reveal-delay="320"
          className="reveal mt-10 flex flex-col sm:flex-row items-center gap-3"
        >
          <Button size="lg" onClick={() => scrollTo("about")}>
            더 알아보기
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => scrollTo("contact")}
          >
            연락하기
          </Button>
        </div>
      </div>

      <button
        type="button"
        aria-label="다음 섹션으로 스크롤"
        onClick={() => scrollTo("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-steel animate-bounce focus-visible:outline-none"
      >
        <ArrowDown size={20} />
      </button>
    </section>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}
