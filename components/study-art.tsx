import Image from "next/image";
import type { CaseStudy } from "@/lib/data/work";

function Flower() {
  return <>
    <g transform="translate(45 39) rotate(-8 91 102)">
      <rect width="180" height="210" rx="4" fill="#fff7e8"/>
      <rect x="11" y="11" width="158" height="167" fill="#d5cfab"/>
      <path d="M65 171l27-67 27 67M91 114v58" fill="none" stroke="#696c4d" strokeWidth="4"/>
      {Array.from({length: 60}, (_, i) => {
        const angle = i * 2.39996;
        const radius = Math.sqrt(i) * 7.2;
        const x = 90 + Math.cos(angle) * radius;
        const y = 90 + Math.sin(angle) * radius * .85;
        return <g key={i} transform={`translate(${x} ${y})`}><circle r={8} fill={["#fcf1d9","#eee5cf","#9caa85","#dcb798"][i % 4]}/><circle r="2" fill="#978d64"/></g>;
      })}
      <path d="M66 67l-13 84 15-8 7 7 8-81m17-2 8 83 10-9 11 4-12-81" fill="#efd1ae" stroke="#b99970"/>
      <path d="M58 90v-8h8m12 0h7v8m-27 28v8h8m11 0h8v-8" stroke="#ae492d" fill="none" strokeWidth="2.5"/>
      <text x="13" y="199">PHOTO / OCR</text>
    </g>
    <path d="M200 148h34q10 0 10-10V96h46" className="thread"/>
    <g transform="translate(281 59)"><rect width="144" height="73" rx="5" fill="#fcf7eb"/><text x="15" y="25">RIBBON MATCH</text><path d="M15 43h82m-82 10h62" stroke="#b9aa98" strokeWidth="3"/><circle cx="120" cy="46" r="10" fill="#bec6a7"/><path d="m115 46 4 4 7-9" stroke="#47503d" fill="none"/></g>
    <path d="M354 132v33" className="thread"/>
    <g transform="translate(274 166)">{[4,3,2,1,0].map(i=><rect key={i} x={i*6} y={i*5} width="126" height="57" rx="3" fill="#f3e1ca" stroke="#ae9275"/>)}
    <text x="14" y="22">5 SITES</text><text x="14" y="44">UPLOAD ✓</text></g>
  </>;
}

function Inventory() {
  return <g transform="translate(41 40)">
    <rect x="9" y="12" width="312" height="180" rx="7" fill="#8e9b81"/>
    <rect width="312" height="180" rx="7" fill="#fbf7ea"/>
    <text x="19" y="30">INVENTORY / SHELF VIEW</text>
    {Array.from({length: 18},(_,i)=><g key={i} transform={`translate(${20+i%6*46} ${49+Math.floor(i/6)*39})`}><rect width="39" height="31" rx="2" fill={i===8?"#efb49c":"#e4e7d6"}/><path d="M8 11h17m-17 8h10" stroke="#939680" strokeWidth="2"/></g>)}
    <g transform="translate(231 124) rotate(4)"><rect width="138" height="81" rx="4" fill="#e9c5a5"/><text x="12" y="26">DOUBLE CHECK</text><path d="M13 42h90" stroke="#b38a6b"/><text x="12" y="64">A  ↔  B</text></g>
  </g>;
}

function Evidence() {
  return <g transform="translate(66 43)">
    {[0,1,2].map(i=><rect key={i} x={i*9} y={14-i*7} width="185" height="185" rx="2" fill="#fff7e7" stroke="#bfac97"/>)}
    <text x="36" y="34">SOURCE [1]</text>
    {[0,1,2,3,4,5].map(i=><path key={i} d={`M36 ${55+16*i}h${i%2?117:138}`} stroke={i===2?"#db8a68":"#d6c7b4"} strokeWidth={i===2?9:3}/>)}
    <path d="M155 87h44q24 0 24 25v15q0 12 15 12h30" className="thread"/>
    <rect x="248" y="106" width="99" height="75" rx="3" fill="#eee3ca"/><text x="260" y="135">FACT [1]</text><text x="260" y="158">LINKED ✓</text>
  </g>;
}

function PathStudy() {
  return <g>
    {Array.from({length:10},(_,i)=><path key={i} d={`M${40+i*43} 42v173`} stroke="#c9cbba" />)}
    {Array.from({length:5},(_,i)=><path key={i} d={`M40 ${42+i*43}h387`} stroke="#c9cbba"/>)}
    <path d="M72 180h73q25 0 25-25v-42q0-25 25-25h72q20 0 36 20l40 42" stroke="#ad583d" strokeWidth="3" fill="none" strokeDasharray="6 4"/>
    <circle cx="72" cy="180" r="7" fill="#a75740"/><g transform="translate(345 152) rotate(32)"><rect x="-17" y="-22" width="34" height="44" rx="8" fill="#666f5b"/><circle r="6" fill="#fff4d8"/>{[28,44,60].map(r=><path key={r} d={`M${-r} -19 Q0 ${-r*1.9} ${r} -19`} stroke="#8c987d" fill="none"/>)}</g>
    <text x="38" y="245">SENSE → ESTIMATE → MOVE</text>
  </g>;
}

export function StudyArt({study}: {study: CaseStudy}) {
  if (study.image) return <figure className="case-art screen-art">
    <Image src={study.image} width={1280} height={800} sizes="(max-width: 720px) 92vw, 48vw" alt={study.title + " 공개 서비스 첫 화면"}/>
    {study.slug==="four-season" && <figcaption className="axis">입력 시각 ── ◉ 절기 경계 ── 다음 구간</figcaption>}
  </figure>;
  const plates: Record<string, React.ReactNode> = {
    "flower-uploader": <Flower/>, "fatima-pharmacy": <Inventory/>, nanogen: <Evidence/>, robotics: <PathStudy/>,
  };
  return <figure className={`case-art plate plate-${study.slug}`}>
    <svg viewBox="0 0 460 276" role="img" aria-label={study.title + " 개념도. " + study.flow.join(", ")}>{plates[study.slug]}</svg>
    <figcaption>작동 원리 도해</figcaption>
  </figure>;
}
