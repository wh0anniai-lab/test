"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "소개", href: "#hero" },
  { label: "프로필", href: "#about" },
  { label: "경력", href: "#career" },
  { label: "프로젝트", href: "#projects" },
  { label: "창업·강연", href: "#startup" },
  { label: "Contact", href: "#contact" },
];

/** 사용자 이름 — 여기를 실제 이름으로 바꾸세요 */
const SITE_NAME = "김동영";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = () => setOpen(false);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-paper/70 backdrop-blur-xl border-b border-hairline/70"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <nav className="container flex h-14 items-center justify-between">
        <a
          href="#hero"
          className="text-[15px] font-semibold tracking-tight text-ink"
        >
          {SITE_NAME}
        </a>

        {/* 데스크톱 메뉴 */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-[13px] text-ink/80 hover:text-ink transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* 모바일 토글 버튼 */}
        <button
          type="button"
          aria-label={open ? "메뉴 닫기" : "메뉴 열기"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* 모바일 드롭다운 메뉴 */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out bg-paper/95 backdrop-blur-xl border-b border-hairline/70",
          open ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="container flex flex-col gap-1 py-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={handleNavClick}
                className="block py-2.5 text-[15px] text-ink"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
