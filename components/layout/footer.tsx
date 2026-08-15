import { CONTACT, SITE } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-hairline bg-navy-deep py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[17px] font-bold tracking-tight text-white">
            DY<span className="text-cyan">.</span>
          </p>
          <p className="mt-1.5 text-[13px] leading-relaxed text-steel">
            &ldquo;변화하는 중심에 함께하고 싶은 개발자 — 바로 저 {SITE.name}입니다.&rdquo;
          </p>
        </div>

        <div className="flex flex-col gap-1.5 text-[13px] text-steel md:items-end">
          <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-ink">
            {CONTACT.email}
          </a>
          <a href={CONTACT.phoneHref} className="transition-colors hover:text-ink">
            {CONTACT.phoneDisplay}
          </a>
          <p className="mt-1 text-steel/60">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
