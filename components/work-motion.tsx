"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

const scenes = [
  { name: "Nanogen", source: "연구 기록", concept: "근거 추출", lines: ["실험 노트를 검토했다.", "측정 간격은 ", "같은 조건으로 기록했다."], value: "10분", field: "측정 간격", next: "원문 연결", caption: "원문의 표현을 추출값과 함께 보관합니다." },
  { name: "돌보다", source: "시설 원자료", concept: "지표 변환", lines: ["시설 A의 운영 기록", "정원 40명 · ", "시설 B의 이용률 85%"], value: "현원 30명", field: "시설 A 이용률", next: "시설 B  85%", caption: "형식이 다른 원자료를 같은 기준으로 비교합니다." },
];

export function WorkMotion() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  useEffect(() => {
    const setting = matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduced(setting.matches);
    sync();
    setting.addEventListener("change", sync);
    return () => setting.removeEventListener("change", sync);
  }, []);
  useEffect(() => {
    if (paused || reduced) return;
    const timer = window.setInterval(() => setIndex(i => 1 - i), 7000);
    return () => window.clearInterval(timer);
  }, [paused, reduced]);
  const scene = scenes[index];
  return (
    <figure className={paused ? "work-motion paused" : "work-motion"}>
      <div className="motion-top"><span className="kicker">Process study</span><span>작동 원리 예시</span></div>
      <div className="apparatus" key={scene.name}>
        <div className="source-sheet">
          <span className="kicker">{scene.source}</span>
          <h3>{scene.name}<i>.</i></h3>
          <p>{scene.lines[0]}<br/>{scene.lines[1]}<mark>{scene.value}</mark><br/>{scene.lines[2]}</p>
          <div className="trace-lines" aria-hidden="true"><i/><i/><i/></div>
        </div>
        <span className="flying-value" aria-hidden="true">{scene.value}</span>
        <div className="result-slip">
          <span className="kicker">{scene.concept}</span>
          <small>{scene.field}</small><strong>{index === 0 ? "10 min" : "75%"}</strong>
          <span className="slip-foot">{scene.next} <b>✓</b></span>
        </div>
      </div>
      <figcaption>
        <div className="motion-controls">
          {scenes.map((s, i) => <button key={s.name} aria-pressed={index === i} onClick={() => {setIndex(i); setPaused(true);}}>{s.name}</button>)}
          {!reduced && <button className="pause" aria-label={paused ? "모션 재생" : "모션 멈추기"} onClick={() => setPaused(!paused)}>{paused ? <Play size={15}/> : <Pause size={15}/>}</button>}
        </div>
        <p>{scene.caption}</p>
      </figcaption>
    </figure>
  );
}
