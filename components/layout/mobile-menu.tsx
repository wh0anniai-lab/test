"use client";

import { useEffect, useRef } from "react";
import { X, Mail, Phone, MessageCircle } from "lucide-react";
import { CONTACT, NAV, SITE } from "@/lib/data/site";
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
        "fixed inset-0 z-[60] bg-paper/95 backdrop-blur-xl md:hidden",
        "transition-opacity duration-200",
        open ? "opacity-100" : "pointer-events-none opacity-0"
      )}
    >
      <div className="container pt-3">
        <div className="flex h-[52px] items-center justify-between rounded-[26px] bg-panel pl-2 pr-2">
          <span className="flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-ink text-[12px] font-bold text-white">
              DY
            </span>
            <span className="text-[15px] font-bold tracking-tight">{SITE.name}</span>
          </span>
          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="메뉴 닫기"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-track text-ink transition-colors duration-200 active:bg-hover"
          >
            <X size={19} aria-hidden />
          </button>
        </div>
      </div>

      <nav className="container mt-6" aria-label="모바일 메뉴">
        <ul className="flex flex-col">
          {NAV.map((item, i) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={onClose}
                className="flex items-baseline gap-4 border-b border-line py-5 text-[24px] font-semibold tracking-tight text-ink transition-colors duration-200 active:text-accent"
              >
                <span className="font-mono text-[11px] font-medium tabular-nums text-muted">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-col gap-2.5">
          <a href={CONTACT.phoneHref} className="btn-primary h-12">
            <Phone size={17} aria-hidden />
            {CONTACT.phoneDisplay}
          </a>
          <a href={CONTACT.kakaoOpenChat} target="_blank" rel="noopener noreferrer" className="btn-soft h-12">
            <MessageCircle size={17} aria-hidden />
            오픈카톡
          </a>
          <a href={`mailto:${CONTACT.email}`} className="btn-soft h-12 font-medium">
            <Mail size={17} aria-hidden />
            {CONTACT.email}
          </a>
        </div>
      </nav>
    </div>
  );
}
