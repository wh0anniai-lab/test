import { ArrowDown, Bot, GraduationCap, Phone, Rocket, type LucideIcon } from "lucide-react";
import { SITE } from "@/lib/data/site";
import { FEATURED } from "@/lib/data/projects";

const KEYWORDS = ["AI Systems", "Product", "Robotics"];

/** 바로가기 카드의 썸네일 — 쿼카 모션랩 STUDIO 카드의 작은 네모 그림 자리 */
const DOOR: Record<string, { icon: LucideIcon; tone: string }> = {
  kist: { icon: Bot, tone: "bg-accent" },
  momit: { icon: Rocket, tone: "bg-wine" },
  educator: { icon: GraduationCap, tone: "bg-ink" },
};

/**
 * 쿼카 모션랩 첫 화면 구성:
 *   왼쪽: 와인색 eyebrow + 큰 제목 / 오른쪽: 회색 설명 (모바일은 아래로)
 *   그 아래 회색 바로가기 카드 3개 (STUDIO 01·02·03 자리에 대표 경력 3개)
 * 서버 컴포넌트로 유지 — 히어로에 클라이언트 JS를 넣지 않아 LCP를 지킨다.
 */
export function Hero() {
  return (
    <section id="top" className="container pt-[92px] md:pt-[104px]">
      <div className="flex flex-col gap-5 px-1 md:flex-row md:items-end md:justify-between md:gap-8">
        <div>
          {/* WHO · WHAT */}
          <p className="eyebrow">
            {SITE.nameEn} · {SITE.role}
          </p>

          {/* 네 줄 고정 — 가장 긴 줄("사람들과 나눕니다.")이 390px에서도 한 줄에 들어간다 */}
          <h1 className="mt-2 text-hero font-semibold">
            기술을 연구하고,
            <br />
            세상에 구현하며,
            <br />
            <span className="text-accent">
              배움을 다시
              <br />
              사람들과 나눕니다.
            </span>
          </h1>
        </div>

        <div className="md:max-w-[300px] md:text-right">
          <p className="text-[14.5px] leading-[1.6] text-muted">
            <b className="font-semibold text-ink">Robotics</b>에서 <b className="font-semibold text-ink">AI Systems</b>
            까지, 연구·개발·창업을 연결해 배움을 세상과 공유하고 있습니다.
          </p>
          <ul className="mt-3 flex flex-wrap gap-1.5 md:justify-end">
            {KEYWORDS.map((keyword) => (
              <li key={keyword} className="chip">
                {keyword}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ACTION */}
      <div className="mt-6 flex flex-col gap-2 px-1 sm:flex-row">
        <a href="#work" className="btn-primary">
          View Work
          <ArrowDown size={16} aria-hidden />
        </a>
        <a href="#contact" className="btn-soft">
          <Phone size={16} aria-hidden />
          연락하기
        </a>
      </div>

      {/* 바로가기 카드 3개 */}
      <ul className="mt-7 grid grid-cols-1 gap-2.5 md:grid-cols-3 md:gap-3">
        {FEATURED.map((project, i) => {
          const door = DOOR[project.id] ?? DOOR.kist;
          const Icon = door.icon;
          return (
            <li key={project.id}>
              <a
                href={`#work-${project.id}`}
                className="group flex h-full items-center gap-4 rounded-md bg-panel py-3.5 pl-3.5 pr-[18px] transition-colors duration-200 hover:bg-track"
              >
                <span
                  className={`flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-[16px] text-white ${door.tone} transition-transform duration-300 group-hover:scale-[1.04] md:h-[72px] md:w-[72px]`}
                >
                  <Icon size={26} strokeWidth={1.8} aria-hidden />
                </span>
                <span className="min-w-0">
                  <i className="block text-[11px] font-semibold not-italic tracking-[0.12em] text-wine">
                    WORK {String(i + 1).padStart(2, "0")}
                  </i>
                  <b className="mt-0.5 block truncate text-[15.5px] font-bold">{project.title}</b>
                  <span className="mt-0.5 block text-[13px] leading-snug text-muted">
                    {project.subtitle} · {project.period}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
