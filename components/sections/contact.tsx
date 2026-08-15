"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Code2, ArrowRight } from "lucide-react";
import { CONTACT } from "@/lib/data/site";
import { useReveal } from "@/hooks/use-reveal";

const CHANNELS = [
  { label: "이메일", value: CONTACT.email, href: `mailto:${CONTACT.email}`, icon: Mail },
  { label: "전화", value: CONTACT.phoneDisplay, href: CONTACT.phoneHref, icon: Phone },
  { label: "위치", value: CONTACT.location, href: undefined, icon: MapPin },
  { label: "전문 분야", value: CONTACT.expertise, href: undefined, icon: Code2 },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 백엔드가 없으므로 메일 클라이언트로 전달한다.
    const subject = encodeURIComponent(`포트폴리오 문의 - ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\n보낸 사람: ${form.name} (${form.email})`
    );
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass =
    "h-12 w-full rounded-md border border-hairline bg-panel px-4 text-[15px] text-ink placeholder:text-steel/50 transition-colors duration-200 focus:border-cyan/50 focus:outline-none focus-visible:outline-none";

  return (
    <section id="contact" className="scroll-anchor relative overflow-hidden bg-navy py-20 md:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(55% 100% at 50% 0%, rgba(36,214,255,0.14), transparent 70%)",
        }}
      />

      <div ref={ref} className="container relative">
        <div className="max-w-2xl">
          <div data-reveal className="reveal flex items-center gap-3">
            <span className="text-[11px] font-semibold tabular-nums text-steel/60">10</span>
            <span className="h-px w-6 bg-hairline" aria-hidden />
            <span className="eyebrow">Contact</span>
          </div>

          <h2
            data-reveal
            data-reveal-delay="80"
            className="reveal mt-5 text-display font-semibold text-white"
          >
            아이디어가 있다면,
            <br />
            {/* 그라디언트가 한 줄을 온전히 덮도록 줄바꿈을 고정한다 */}
            <span className="bg-gradient-to-r from-cyan to-purple bg-clip-text text-transparent">
              실제로 작동하는 것으로
            </span>
            <br />
            만들어봅시다.
          </h2>

          <p
            data-reveal
            data-reveal-delay="140"
            className="reveal mt-5 text-[15px] leading-[1.7] text-steel md:text-[17px]"
          >
            새로운 기회, 협업 제안, 혹은 가벼운 안부까지 — 언제든 편하게 연락 주세요.
          </p>

          {/* 주 CTA — 전화와 메일을 가장 크게 */}
          <div data-reveal data-reveal-delay="200" className="reveal mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={CONTACT.phoneHref}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-cyan px-7 text-[15px] font-semibold text-navy shadow-glow transition-transform duration-200 active:scale-[0.98]"
            >
              <Phone size={17} aria-hidden />
              전화하기
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-hairline px-7 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-panel active:bg-panel-soft"
            >
              <Mail size={17} aria-hidden />
              메일 보내기
            </a>
          </div>
        </div>

        {/* 연락 채널 */}
        <dl
          data-reveal
          data-reveal-delay="260"
          className="reveal mt-14 grid grid-cols-1 gap-3 sm:grid-cols-2"
        >
          {CHANNELS.map(({ label, value, href, icon: Icon }) => {
            const inner = (
              <div className="surface flex h-full items-center gap-4 p-5 transition-colors duration-300 hover:bg-panel-soft">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-cyan/10 text-cyan">
                  <Icon size={18} aria-hidden />
                </span>
                <div className="min-w-0">
                  <dt className="text-[12px] font-medium text-steel">{label}</dt>
                  <dd className="mt-0.5 break-words text-[14px] font-medium text-ink">
                    {value}
                  </dd>
                </div>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block">
                {inner}
              </a>
            ) : (
              <div key={label}>{inner}</div>
            );
          })}
        </dl>

        {/* 문의 폼 — 기존 홈페이지 기능 유지 */}
        <form
          onSubmit={handleSubmit}
          data-reveal
          data-reveal-delay="300"
          className="reveal mt-12 max-w-xl"
        >
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <input
              required
              placeholder="이름"
              aria-label="이름"
              className={inputClass}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <input
              required
              type="email"
              placeholder="이메일"
              aria-label="이메일"
              className={inputClass}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <textarea
            required
            rows={4}
            placeholder="전달하고 싶은 내용을 적어주세요."
            aria-label="메시지"
            className={`${inputClass} mt-3 h-auto py-3.5 leading-relaxed`}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-cyan/40 bg-cyan/10 px-7 text-[15px] font-semibold text-cyan transition-colors duration-200 hover:bg-cyan/20 active:bg-cyan/25 sm:w-auto"
          >
            메시지 보내기
            <ArrowRight size={17} aria-hidden />
          </button>
          {submitted && (
            <p className="mt-3 text-[13px] text-steel" role="status">
              메일 앱이 열리지 않는다면 {CONTACT.email} 로 직접 보내주세요.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
