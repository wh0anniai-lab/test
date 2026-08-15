"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { NAV, SITE } from "@/lib/data/site";
import { PhoneButton } from "@/components/ui/phone-button";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { cn } from "@/lib/utils";

/**
 * 얇은 sticky 헤더.
 * 모바일: DY.            ☎  ☰
 * 데스크톱: DY.  [nav]   ☎ Contact
 */
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
          scrolled
            ? "border-b border-hairline bg-navy/80 backdrop-blur-xl"
            : "border-b border-transparent"
        )}
      >
        <div className="container flex h-14 items-center justify-between md:h-16">
          <a
            href="#top"
            className="text-[17px] font-bold tracking-tight text-white"
            aria-label={`${SITE.name} 홈으로`}
          >
            DY<span className="text-cyan">.</span>
          </a>

          {/* 데스크톱 네비게이션 */}
          <nav className="hidden md:block" aria-label="주요 메뉴">
            <ul className="flex items-center gap-1">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="rounded-md px-3 py-2 text-[14px] text-steel transition-colors duration-200 hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            {/* 전화 버튼 — 스크롤과 무관하게 항상 접근 가능 */}
            <PhoneButton variant="icon" className="md:hidden" />
            <PhoneButton variant="labeled" className="hidden md:inline-flex" />

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="메뉴 열기"
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-200 hover:bg-panel active:bg-panel-soft md:hidden"
            >
              <Menu size={20} aria-hidden />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
