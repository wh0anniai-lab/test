"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { StudyArt } from "./study-art";
import { studies } from "@/lib/data/work";

export function ProjectSlider() {
  const [index, setIndex] = useState(0);
  const start = useRef<{x:number;y:number} | null>(null);
  const study = studies[index];
  function move(delta: number) { setIndex(i => (i + delta + studies.length) % studies.length); }
  return <div className="project-slider" role="region" aria-label="대표 프로젝트 슬라이드" tabIndex={0}
    onKeyDown={e => {if(e.key==="ArrowRight" || e.key==="ArrowLeft"){e.preventDefault();move(e.key==="ArrowRight"?1:-1);}}}
    onPointerDown={e=>{start.current={x:e.clientX,y:e.clientY};}}
    onPointerCancel={()=>{start.current=null;}}
    onPointerUp={e=>{if(start.current){const dx=start.current.x-e.clientX,dy=start.current.y-e.clientY;if(Math.abs(dx)>50 && Math.abs(dx)>Math.abs(dy))move(dx>0?1:-1);}start.current=null;}}
    onDragStart={e=>e.preventDefault()}>
    <div className="slider-controls"><button onClick={()=>move(-1)} aria-label="이전 프로젝트">←</button><span aria-live="polite">{index+1} / {studies.length}</span><button onClick={()=>move(1)} aria-label="다음 프로젝트">다음 →</button><small>좌우로 넘겨보세요</small></div>
    <article className="slider-content" key={study.slug}><div><p className="kicker">{study.discipline}</p><h3>{study.title}</h3><p>{study.summary}</p>
    {index===0 && <p className="case-stat"><strong>8시간 → 8분</strong><br/>OCR을 활용한 업무 자동화</p>}
    <Link className="text-link" href={"/work/"+study.slug}>자세히 →</Link></div><StudyArt study={study} detail/></article>
  </div>;
}
