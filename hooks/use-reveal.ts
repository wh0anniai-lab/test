"use client";

import { useEffect, useRef } from "react";

/**
 * 컨테이너 안의 [data-reveal] 요소를 뷰포트 진입 시 순차적으로 나타나게 한다.
 * IntersectionObserver 하나로 처리하므로 스크롤 이벤트를 쓰지 않는다.
 *
 * data-reveal-delay 속성(ms)으로 요소별 지연을 줄 수 있다.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const targets = Array.from(
      root.querySelectorAll<HTMLElement>("[data-reveal]")
    );
    if (targets.length === 0) return;

    // 모션 최소화 설정이면 애니메이션 없이 즉시 표시한다.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = Number(el.dataset.revealDelay ?? 0);
          el.style.animationDelay = `${delay}ms`;
          el.classList.add("is-visible");
          // 한 번 나타난 요소는 다시 관찰하지 않는다.
          observer.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return ref;
}
