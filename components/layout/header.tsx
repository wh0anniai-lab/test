"use client";
import { useState } from "react";
import { CONTACT } from "@/lib/data/site";
const links = [["작업","#work"],["시스템","#systems"],["여정","#journey"],["아카이브","#archive"]];
export function Header(){const[open,setOpen]=useState(false);return <header className="site-header"><a className="brand" href="#top" aria-label="홈"><span>DY</span><i /></a><nav className={open?"open":""}>{links.map(([l,h])=><a key={h} href={h} onClick={()=>setOpen(false)}>{l}</a>)}<a className="header-cta" href={`mailto:${CONTACT.email}`}>프로젝트 문의 →</a></nav><button onClick={()=>setOpen(!open)} aria-label="메뉴" aria-expanded={open}>{open?"×":"≡"}</button></header>}
