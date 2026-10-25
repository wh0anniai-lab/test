"use client";

import { useEffect, useRef, useState } from "react";
import { Mail, MessageCircle, Phone } from "lucide-react";
import { CONTACT, SECTIONS } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type Props = {
  /** 섹션 id → 항목 수 */
  counts: Record<string, number>;
};

const QUICK = [
  { label: "전화", href: CONTACT.phoneHref, icon: Phone },
  { label: "오픈카톡", href: CONTACT.kakaoOpenChat, icon: MessageCircle, external: true },
  { label: "메일", href: `mailto:${CONTACT.email}`, icon: Mail },
];

/**
 * 쿼카 모션랩의 왼쪽 레일.
 * 데스크톱: 화면에 붙어 따라오는 세로 목차(이름 + 개수) + '바로 연락'
 * 모바일: 상단 바 아래에 붙는 가로 알약 줄 (지금 보고 있는 섹션이 검은 알약)
 */
export function Rail({ counts }: Props) {
  const [active, setActive] = useState(SECTIONS[0].id);
  const chipsRef = useRef<HTMLUListElement>(null);

  // 지금 화면 위쪽에 걸린 섹션을 목차에 표시한다. 스크롤 이벤트 대신 IntersectionObserver 하나로 처리.
  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (els.length === 0 || typeof IntersectionObserver === "undefined") return;

    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        const first = SECTIONS.find((s) => visible.has(s.id));
        if (first) setActive(first.id);
      },
      { rootMargin: "-30% 0px -60% 0px" }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 모바일 알약 줄에서 지금 섹션이 보이도록 가로로 따라 움직인다.
  useEffect(() => {
    const chip = chipsRef.current?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    chip?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, [active]);

  return (
    <>
      {/* 모바일 · 태블릿: 가로 알약 줄 */}
      <nav
        aria-label="섹션 목차"
        className="sticky top-[64px] z-30 -mx-4 bg-paper/90 px-4 pb-2.5 pt-2 backdrop-blur-xl lg:hidden"
      >
        <ul ref={chipsRef} className="no-scrollbar flex gap-1.5 overflow-x-auto">
          {SECTIONS.map((s) => (
            <li key={s.id} data-id={s.id}>
              <a
                href={`#${s.id}`}
                aria-current={active === s.id ? "true" : undefined}
                className={cn(
                  "inline-flex h-8 items-center gap-1.5 whitespace-nowrap rounded-full px-3.5 text-[12.5px] font-medium transition-colors",
                  active === s.id ? "bg-ink text-white" : "bg-track text-ink"
                )}
              >
                {s.label}
                <span className={cn("text-[11px]", active === s.id ? "text-white/60" : "text-muted")}>
                  {counts[s.id]}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* 데스크톱: 세로 레일 */}
      <aside className="hidden lg:block">
        <div className="sticky top-24">
          <p className="px-3 pb-1.5 text-[11px] font-medium text-muted">목차</p>
          <ul className="flex flex-col gap-0.5">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  aria-current={active === s.id ? "true" : undefined}
                  className={cn(
                    "flex h-10 items-center justify-between rounded-sm px-3 text-[14.5px] transition-colors",
                    active === s.id ? "bg-track font-medium text-ink" : "text-muted hover:bg-panel hover:text-ink"
                  )}
                >
                  {s.label}
                  <span className="text-[11.5px] font-medium tabular-nums text-muted">{counts[s.id]}</span>
                </a>
              </li>
            ))}
          </ul>

          <p className="mt-6 px-3 pb-1.5 text-[11px] font-medium text-muted">바로 연락</p>
          <ul className="flex flex-col gap-0.5">
            {QUICK.map(({ label, href, icon: Icon, external }) => (
              <li key={label}>
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex h-10 items-center gap-2.5 rounded-sm px-3 text-[14.5px] text-muted transition-colors hover:bg-panel hover:text-ink"
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-[8px] bg-track text-ink">
                    <Icon size={13} aria-hidden />
                  </span>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </aside>
    </>
  );
}
