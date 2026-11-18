"use client";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { CONTACT } from "@/lib/data/site";

const items = [["Work","/#work"],["Education","/#teaching"],["About","/#about"],["Timeline","/#timeline"],["Contact","#contact"]];

export function Header(){
  const [open,setOpen] = useState(false);
  const [raised,setRaised] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    const update=()=>setRaised(window.scrollY>12);
    update();
    window.addEventListener("scroll",update,{passive:true});
    return ()=>window.removeEventListener("scroll",update);
  },[]);
  return <header className={"masthead"+(raised || open?" raised":"")} onKeyDown={e=>{
    if(e.key==="Escape" && open){setOpen(false);toggle.current?.focus();}
  }}>
    <div className="wrap mast-inner"><Link className="wordmark" href="/" onClick={()=>setOpen(false)}>KIM DONGYOUNG</Link>
    <nav id="site-nav" aria-label="주요 메뉴" className={open?"expanded":""}>{items.map(([name,href])=><Link key={name} href={href} onClick={()=>setOpen(false)}>{name}</Link>)}</nav>
    <a className="inquire" href={CONTACT.phoneHref}>전화</a>
    <button ref={toggle} className="menu-toggle" aria-controls="site-nav" aria-expanded={open} onClick={()=>setOpen(!open)}>{open?"닫기":"메뉴"}</button></div>
  </header>;
}
