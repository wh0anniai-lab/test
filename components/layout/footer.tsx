import { CONTACT,SITE } from "@/lib/data/site";
export function Footer(){return <footer><div><strong>DY<i /> KIM DONG YOUNG</strong><p>Research → Build → Teach</p></div><div><a href={`mailto:${CONTACT.email}`}>{CONTACT.email} ↗</a><p>© {new Date().getFullYear()} {SITE.name}</p></div></footer>}
