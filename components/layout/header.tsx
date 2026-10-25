"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { CONTACT, NAV, SITE } from "@/lib/data/site";
import { PhoneButton } from "@/components/ui/phone-button";
import { MobileMenu } from "@/components/layout/mobile-menu";

/**
 * 쿼카 모션랩처럼 화면 위에 떠 있는 유리 알약 바.
 * 모바일: [DY 김동영]            ☎  ☰
 * 데스크톱: [DY 김동영]  (Work · Capabilities …)   메일  [☎ 전화하기]
 */
export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 pt-3">
        {/* 모바일: 바 둘레로 아래 글자가 비치지 않게 흰색으로 흐려 덮는다 (바로 밑에 목차 알약 줄이 붙음) */}
        <div aria-hidden className="absolute inset-0 -z-10 bg-paper/90 backdrop-blur-xl lg:hidden" />
        <div className="container">
          <div className="flex h-[52px] items-center gap-3.5 rounded-[26px] bg-white/80 pl-2 pr-2 shadow-bar backdrop-blur-xl md:pl-3">
            <a href="#top" className="flex shrink-0 items-center gap-2" aria-label={`${SITE.name} 홈으로`}>
              <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-ink text-[12px] font-bold tracking-tight text-white">
                DY
              </span>
              <span className="text-[15px] font-bold tracking-tight">{SITE.name}</span>
            </a>

            {/* 데스크톱 네비게이션 — 회색 트랙 안의 알약 묶음 */}
            <nav className="ml-auto hidden md:block lg:ml-6" aria-label="주요 메뉴">
              <ul className="flex items-center rounded-full bg-track p-0.5">
                {NAV.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="inline-flex h-[30px] items-center rounded-full px-[11px] text-[13px] font-semibold text-ink transition-colors duration-200 hover:bg-white"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="ml-auto flex items-center gap-1.5">
              <a
                href={`mailto:${CONTACT.email}`}
                className="hidden h-9 items-center rounded-full px-3 text-[13.5px] text-muted transition-colors hover:text-ink lg:inline-flex"
              >
                메일
              </a>
              {/* 전화 버튼 — 스크롤과 무관하게 항상 접근 가능 */}
              <PhoneButton variant="icon" className="md:hidden" />
              <PhoneButton variant="labeled" className="hidden md:inline-flex" />

              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="메뉴 열기"
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-track text-ink transition-colors duration-200 hover:bg-hover md:hidden"
              >
                <Menu size={19} aria-hidden />
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
