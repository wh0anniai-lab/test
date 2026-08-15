"use client";

import { useEffect, useRef } from "react";
import { X, Mail, Phone } from "lucide-react";
import { CONTACT, NAV } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type Props = {
  open: boolean;
  onClose: () => void;
};

/**
 * 풀스크린 모바일 메뉴.
 * 각 항목은 충분한 터치 영역을 가지며, Esc / 닫기 버튼 / 항목 선택으로 닫힌다.
 */
export function MobileMenu({ open, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    // 열려 있는 동안 배경 스크롤을 막는다.
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);

    // 열리자마자 닫기 버튼으로 포커스를 옮겨 키보드 사용자가 갇히지 않게 한다.
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="사이트 메뉴"
      aria-hidden={!open}
      className={cn(
        "fixed inset-0 z-[60] bg-navy/95 backdrop-blur-xl md:hidden",
        "transition-opacity duration-200",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="container flex h-14 items-center justify-between">
        <span className="text-[17px] font-bold tracking-tight text-white">
          DY<span className="text-cyan">.</span>
        </span>
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="메뉴 닫기"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-ink transition-colors duration-200 active:bg-panel"
        >
          <X size={20} aria-hidden />
        </button>
      </div>

      <nav className="container mt-6" aria-label="모바일 메뉴">
        <ul className="flex flex-col">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-baseline gap-4 border-b border-hairline py-5 text-[26px] font-semibold tracking-tight text-white transition-colors duration-200 active:text-cyan"
              >
                <span className="text-[12px] font-medium tabular-nums text-steel/50">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href={CONTACT.phoneHref}
            className="flex h-12 items-center justify-center gap-2 rounded-full bg-cyan text-[15px] font-semibold text-navy"
          >
            <Phone size={18} aria-hidden />
            {CONTACT.phoneDisplay}
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex h-12 items-center justify-center gap-2 rounded-full border border-hairline text-[15px] font-medium text-ink"
          >
            <Mail size={18} aria-hidden />
            {CONTACT.email}
          </a>
        </div>
      </nav>
    </div>
  );
}
