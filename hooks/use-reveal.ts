"use client";

import { useEffect, useRef } from "react";

/**
 * 요소가 뷰포트에 들어오면 .is-visible 클래스를 붙여
 * globals.css의 .reveal 애니메이션을 트리거하는 훅.
 * Apple 웹사이트 특유의 절제된 스크롤 등장 효과를 재현한다.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const items = el.querySelectorAll<HTMLElement>("[data-reveal]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            const delay = target.dataset.revealDelay || "0";
            target.style.animationDelay = `${delay}ms`;
            target.classList.add("is-visible");
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -80px 0px" }
    );

    items.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return ref;
}
