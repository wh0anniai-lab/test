import { CONTACT, SITE } from "@/lib/data/site";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="container flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-[10px] bg-ink text-[12px] font-bold text-white">
            DY
          </span>
          <p className="text-[13px] leading-relaxed text-muted">
            &ldquo;변화하는 중심에 함께하고 싶은 개발자 — 바로 저 {SITE.name}입니다.&rdquo;
          </p>
        </div>

        <div className="flex flex-col gap-1.5 text-[13px] text-muted md:items-end">
          <a href={`mailto:${CONTACT.email}`} className="transition-colors hover:text-ink">
            {CONTACT.email}
          </a>
          <a href={CONTACT.phoneHref} className="transition-colors hover:text-ink">
            {CONTACT.phoneDisplay}
          </a>
          <p className="mt-1 text-muted/70">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
