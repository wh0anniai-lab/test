"use client";

import { useEffect, useRef, useState } from "react";
import { reviews } from "@/lib/data/reviews";

export function ReviewWall() {
  const wall = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const [reading, setReading] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const media = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (!wall.current || paused || reading || reduced) return;
    const rows = Array.from(wall.current.querySelectorAll<HTMLElement>(".note-row"));
    const positions = rows.map(row => row.scrollLeft);
    const directions = [1, -1];
    let frame = 0, last = 0;
    function move(time: number) {
      const step = Math.min(time - (last || time), 64) * 0.023;
      rows.forEach((row, i) => {
        const limit = row.scrollWidth - row.clientWidth;
        positions[i] = Math.max(0, Math.min(limit, positions[i] + directions[i] * step));
        if (positions[i] <= 0) directions[i] = 1;
        if (positions[i] >= limit) directions[i] = -1;
        row.scrollLeft = positions[i];
      });
      last = time;
      frame = requestAnimationFrame(move);
    }
    frame = requestAnimationFrame(move);
    return () => cancelAnimationFrame(frame);
  }, [paused, reading, reduced]);
  useEffect(() => {
    const second = wall.current?.querySelectorAll<HTMLElement>(".note-row")[1];
    if (second) second.scrollLeft = second.scrollWidth - second.clientWidth;
  }, []);
  return <>
    <div className="wrap wall-tools"><span>수강생 후기 · 12편</span>
      {!reduced && <button onClick={() => setPaused(!paused)}>{paused ? "움직임 재생 ▷" : "움직임 멈추기 Ⅱ"}</button>}
    </div>
    <div ref={wall} onMouseEnter={() => setReading(true)} onMouseLeave={() => setReading(false)}
      onFocus={() => setReading(true)} onBlur={e => {if (!e.currentTarget.contains(e.relatedTarget)) setReading(false);}}
      onPointerDown={() => setPaused(true)} onWheel={() => setPaused(true)}>
      {[reviews.slice(0, 6), reviews.slice(6)].map((row, i) => <div className="note-row" key={i} tabIndex={0} role="region" aria-label={`후기 ${i + 1}번째 줄, 좌우로 넘기기`}>
        {row.map(note => <blockquote key={note}>{note}</blockquote>)}
      </div>)}
    </div>
  </>;
}
