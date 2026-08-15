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

    // IntersectionObserver 미지원 환경에서는 애니메이션 없이 그대로 보여준다.
    if (typeof IntersectionObserver === "undefined") {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    // observer 가 살아 있는지 판단하는 플래그.
    // IntersectionObserver 는 observe 직후 교차 여부와 무관하게 최초 콜백을 준다.
    let delivered = false;

    const observer = new IntersectionObserver(
      (entries) => {
        delivered = true;
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

    /*
     * 안전장치: reveal 요소는 기본값이 opacity 0 이라
     * observer 가 동작하지 않으면 콘텐츠가 영영 보이지 않는다.
     * 최초 콜백조차 오지 않았다면 observer 를 신뢰할 수 없다고 보고
     * 전체를 그대로 드러낸다. (애니메이션보다 콘텐츠 노출이 우선)
     */
    const failsafe = window.setTimeout(() => {
      if (delivered) return;
      observer.disconnect();
      targets.forEach((el) => el.classList.add("is-visible"));
    }, 1500);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, []);

  return ref;
}
