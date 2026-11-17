import { CONTACT } from "@/lib/data/site";

export function ContactActions() {
  return (
    <div className="contact-actions">
      <a className="pill" href={CONTACT.kakaoOpenChat} target="_blank" rel="noreferrer">카카오톡으로 문의 ↗</a>
      <a className="pill phone-link" href={CONTACT.phoneHref}>전화하기</a>
      <a className="plain" href={`mailto:${CONTACT.email}`}>이메일 ↗</a>
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contact"><div className="wrap">
      <div><span className="kicker">Contact</span><h2>기술이 실제 현장에서<br/>작동하도록 만듭니다.</h2></div>
      <ContactActions />
      <div className="footer-line"><span>김동영 · Kim Dong Young</span><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
    </div></footer>
  );
}
