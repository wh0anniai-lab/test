import Link from "next/link";
import { CONTACT } from "@/lib/data/site";

export function Header() {
  return (
    <header className="masthead">
      <div className="wrap mast-inner">
        <Link href="/" aria-label="김동영 홈" className="wordmark">dy<span>.</span></Link>
        <nav aria-label="주요 메뉴">
          <Link href="/#work">개발</Link>
          <Link href="/#teaching">강의</Link>
          <Link href="/#business">사업</Link>
          <Link href="/reviews">실강 후기</Link>
        </nav>
        <a className="inquire" href={CONTACT.kakaoOpenChat} target="_blank" rel="noreferrer">문의 ↗</a>
      </div>
    </header>
  );
}
