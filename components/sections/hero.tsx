import { ArrowDown } from "lucide-react";
import { SITE } from "@/lib/data/site";
import { Phone } from "lucide-react";

const KEYWORDS = ["AI Systems", "Product", "Robotics"];

/**
 * 모바일 100svh 안에서 WHO / WHAT / WHAT-TO-SEE 세 가지가 모두 전달되어야 한다.
 * 서버 컴포넌트로 유지 — 히어로에 클라이언트 JS를 넣지 않아 LCP를 지킨다.
 */
export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-center overflow-hidden pb-16 pt-20 md:pb-24 md:pt-28"
    >
      {/*
        Ambient glow — 배경 전체를 그라디언트로 칠하지 않고 한 점만 밝힌다.
        blur() 필터 대신 radial-gradient 를 쓴다. 큰 blur 레이어는 GPU 메모리를
        많이 쓰고 넓은 화면에서 합성 오류를 유발하므로 사용하지 않는다.
      */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-drift"
        style={{
          background:
            "radial-gradient(62% 46% at 46% 30%, rgba(36,214,255,0.20), transparent 70%), radial-gradient(48% 38% at 68% 58%, rgba(139,92,246,0.18), transparent 72%)",
        }}
      />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          {/* WHO */}
          <p className="text-[12px] font-semibold uppercase tracking-[0.24em] text-steel md:text-[13px]">
            {SITE.nameEn}
          </p>

          {/* WHAT */}
          <p className="mt-2 text-[13px] font-semibold uppercase tracking-[0.18em] text-cyan md:text-[15px]">
            AI Builder · Founder
          </p>

          {/* 핵심 메시지 — 화면 중심을 장악하는 한 문장 */}
          {/*
            네 줄 고정 — 가장 긴 줄("사람들과 나눕니다.")이
            390px 모바일부터 1440px 데스크톱까지 한 줄에 들어간다.
          */}
          <h1 className="mt-5 text-hero font-semibold text-white md:mt-7 md:text-hero-lg">
            기술을 연구하고,
            <br />
            세상에 구현하며,
            <br />
            <span className="bg-gradient-to-r from-cyan via-cyan-soft to-purple bg-clip-text text-transparent">
              배움을 다시
              <br />
              사람들과 나눕니다.
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-[15px] leading-[1.7] text-steel md:mt-7 md:text-[18px]">
            Robotics에서 AI Systems까지, 연구·개발·창업을 연결해
            <br /> 
            배움을 세상과 공유하고 있습니다.
          </p>

          {/* WHAT TO SEE */}
          <ul className="mt-6 flex flex-wrap items-center gap-2 md:mt-8">
            {KEYWORDS.map((keyword) => (
              <li
                key={keyword}
                className="rounded-full border border-hairline bg-panel/60 px-3.5 py-1.5 text-[12px] font-medium text-ink md:text-[13px]"
              >
                {keyword}
              </li>
            ))}
          </ul>

          {/* ACTION */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row md:mt-10">
            <a
              href="#work"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan px-7 text-[15px] font-semibold text-navy shadow-glow transition-transform duration-200 active:scale-[0.98] sm:w-auto"
            >
              View Work
              <ArrowDown size={17} aria-hidden />
            </a>
            <a
              href="#contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-purple px-7 text-[15px] font-semibold text-navy shadow-glow transition-transform duration-200 hover:bg-panel active:bg-panel-soft sm:w-auto"
            >
              <Phone size={17} aria-hidden />
              연락하기
            </a>
          </div>
        </div>
      </div>

      {/* 다음 섹션이 존재한다는 신호 */}
      <div
        aria-hidden
        className="container relative z-10 mt-10 hidden items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-steel/60 md:flex"
      >
        <span className="h-px w-10 bg-hairline" />
        Scroll
      </div>
    </section>
  );
}
