"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MessageCircle, ArrowRight, type LucideIcon } from "lucide-react";
import { CONTACT, CONTACT_CHANNELS, type ContactChannel } from "@/lib/data/site";
import { SectionHeader } from "@/components/ui/section-header";
import { useReveal } from "@/hooks/use-reveal";

const CHANNEL_ICON: Record<ContactChannel["kind"], LucideIcon> = {
  phone: Phone,
  kakao: MessageCircle,
  email: Mail,
};

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 백엔드가 없으므로 메일 클라이언트로 전달한다.
    const subject = encodeURIComponent(`포트폴리오 문의 - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n보낸 사람: ${form.name} (${form.email})`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const inputClass =
    "h-12 w-full rounded-sm bg-track px-4 text-[14.5px] text-ink placeholder:text-muted/70 transition-shadow duration-200 focus:outline-none focus:ring-2 focus:ring-accent/40";

  return (
    <section ref={ref} id="contact" className="pane scroll-anchor">
      <SectionHeader index="10" eyebrow="Contact" title="함께 만들어요" count={`${CONTACT_CHANNELS.length}가지 방법`} />

      <div data-reveal data-reveal-delay="60" className="reveal card p-6 md:p-8">
        <h3 className="text-[clamp(1.5rem,6vw,2.25rem)] font-semibold leading-[1.18] tracking-[-0.035em]">
          아이디어를,
          <br />
          <span className="text-accent">세상에 태어나게 하는데</span>
          <br />
          함께 하겠습니다.
        </h3>
        <p className="mt-4 max-w-xl text-[14.5px] leading-[1.7] text-muted">
          새로운 기회, 협업 제안, 혹은 가벼운 안부까지 — 언제든 편하게 연락 주세요.
        </p>

        {/* 주 CTA — 전화 · 오픈카톡 · 메일 */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:flex-wrap">
          <a href={CONTACT.phoneHref} className="btn-primary h-12">
            <Phone size={16} aria-hidden />
            전화하기
          </a>
          <a href={CONTACT.kakaoOpenChat} target="_blank" rel="noopener noreferrer" className="btn-soft h-12">
            <MessageCircle size={16} aria-hidden />
            오픈카톡 입장
          </a>
          <a href={`mailto:${CONTACT.email}`} className="btn-soft h-12">
            <Mail size={16} aria-hidden />
            메일 보내기
          </a>
        </div>

        {/* 연락 채널 */}
        <ul className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {CONTACT_CHANNELS.map(({ kind, label, value, href, external }) => {
            const Icon = CHANNEL_ICON[kind];
            return (
              <li key={label}>
                <a
                  href={href}
                  className="flex h-full items-center gap-3.5 rounded-md bg-panel p-3.5 transition-colors duration-200 hover:bg-track"
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[14px] bg-accent text-white">
                    <Icon size={18} aria-hidden />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11.5px] font-medium text-muted">{label}</span>
                    <span className="mt-0.5 block break-words text-[13.5px] font-semibold">{value}</span>
                  </span>
                </a>
              </li>
            );
          })}
        </ul>

        {/* 문의 폼 — 기존 홈페이지 기능 유지 */}
        <form onSubmit={handleSubmit} className="mt-8 max-w-xl border-t border-line pt-6">
          <p className="eyebrow">Message</p>
          <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
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
            className={`${inputClass} mt-2.5 h-auto py-3.5 leading-relaxed`}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button type="submit" className="btn-primary mt-3 w-full sm:w-auto">
            메시지 보내기
            <ArrowRight size={16} aria-hidden />
          </button>
          {submitted && (
            <p className="mt-3 text-[13px] text-muted" role="status">
              메일 앱이 열리지 않는다면 {CONTACT.email} 로 직접 보내주세요.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
