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
    <footer className="wrap">
      <div><span className="kicker">Contact</span><h2>함께할 일을 이야기해요.</h2></div>
      <ContactActions />
      <div className="footer-line"><span>김동영 · Kim Dong Young</span><a href={CONTACT.phoneHref}>{CONTACT.phoneDisplay}</a><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></div>
    </footer>
  );
}
