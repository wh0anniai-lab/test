"use client";
import { useState } from "react";

const steps = [
  { key:"01", label:"Research", title:"원리를 파고듭니다", body:"Robotics · SLAM · Sensor Fusion", result:"논문과 실험" },
  { key:"02", label:"Build", title:"손에 잡히게 만듭니다", body:"ROS · App · Embedded · AI", result:"작동하는 시스템" },
  { key:"03", label:"Launch", title:"사용자에게 내보냅니다", body:"Product · Platform · Operation", result:"운영되는 제품" },
  { key:"04", label:"Teach", title:"경험을 다시 나눕니다", body:"LLM · Agentic AI · DX & AX", result:"사람의 변화" },
];
export function IdentityMap(){const[active,setActive]=useState(0);const s=steps[active];return <div className="identity-map"><div className="map-top"><span>LIVE IDENTITY MAP</span><b>SYS.DY / ONLINE</b></div><div className="map-diagram"><svg viewBox="0 0 480 220" aria-hidden><path d="M38 112 C120 20 170 202 240 110 S365 20 442 110"/><path d="M38 112 C125 210 176 18 240 110 S360 205 442 110"/></svg><div className="map-center"><small>{s.key} / 04</small><strong>{s.label}</strong><span>{s.result}</span></div>{steps.map((x,i)=><button key={x.key} className={i===active?"active":""} onClick={()=>setActive(i)} style={{"--i":i} as React.CSSProperties}><span>{x.key}</span>{x.label}</button>)}</div><div className="map-readout"><span>NOW EXPLORING</span><strong>{s.title}</strong><p>{s.body}</p></div><p className="map-hint">단계를 선택해 김동영의 만드는 방식을 살펴보세요.</p></div>}
