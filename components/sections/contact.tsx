"use client";

import { useState, type FormEvent } from "react";
import { Mail, Phone, MapPin, Code2 } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";

const EMAIL = "dysoul20t@gmail.com";
const PHONE_DISPLAY = "+82 010-7369-1351";
const PHONE_HREF = "tel:+821073691351";

const CONTACT_LINKS = [
  {
    label: "이메일",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    icon: Mail,
  },
  {
    label: "전화",
    value: PHONE_DISPLAY,
    href: PHONE_HREF,
    icon: Phone,
  },
  {
    label: "위치",
    value: "대한민국 (South Korea)",
    href: undefined,
    icon: MapPin,
  },
  {
    label: "전문 분야",
    value: "로봇공학 · AI 시스템 · 플랫폼 개발 · C / JAVA / PYTHON",
    href: undefined,
    icon: Code2,
  },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // 백엔드가 연결되기 전까지는 메일 클라이언트로 전달합니다.
    const subject = encodeURIComponent(`포트폴리오 문의 - ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n보낸 사람: ${form.name} (${form.email})`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="scroll-mt-14 bg-paper py-24 md:py-32">
      <div ref={ref} className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span data-reveal className="reveal text-[13px] font-medium uppercase tracking-[0.2em] text-signal">
            Contact
          </span>
          <h2
            data-reveal
            data-reveal-delay="60"
            className="reveal mt-4 text-3xl md:text-[44px] font-semibold tracking-tight text-ink leading-[1.15]"
          >
            함께 이야기 나눠요
          </h2>
          <p data-reveal data-reveal-delay="140" className="reveal mt-5 text-lg leading-relaxed text-steel">
            새로운 기회, 협업 제안, 혹은 가벼운 안부까지 — 언제든 편하게 연락 주세요.
          </p>
        </div>

        {/* 연락 채널 카드 */}
        <div
          data-reveal
          data-reveal-delay="220"
          className="reveal mx-auto mt-14 grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {CONTACT_LINKS.map(({ label, value, href, icon: Icon }) => {
            const content = (
              <Card className="h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)]">
                <CardContent className="flex items-center gap-4 p-6">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-signal/10 text-signal">
                    <Icon size={20} />
                  </span>
                  <div className="text-left">
                    <p className="text-sm font-medium text-ink">{label}</p>
                    <p className="mt-0.5 text-[13px] text-steel">{value}</p>
                  </div>
                </CardContent>
              </Card>
            );
            return href ? (
              <a key={label} href={href}>
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </div>

        {/* 인용구 */}
        <p
          data-reveal
          data-reveal-delay="260"
          className="reveal mx-auto mt-10 max-w-xl border-l-2 border-signal/40 pl-5 text-left text-[16px] italic leading-relaxed text-ink/80"
        >
          &ldquo;변화하는 중심에 함께하고 싶은 개발자 — 바로 저 김동영입니다.&rdquo;
        </p>

        {/* 문의 폼 */}
        <form
          onSubmit={handleSubmit}
          data-reveal
          data-reveal-delay="300"
          className="reveal mx-auto mt-16 max-w-xl space-y-4"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input
              required
              placeholder="이름"
              aria-label="이름"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
            <Input
              required
              type="email"
              placeholder="이메일"
              aria-label="이메일"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
          </div>
          <Textarea
            required
            placeholder="전달하고 싶은 내용을 적어주세요."
            aria-label="메시지"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <div className="flex flex-col items-center gap-3 pt-2">
            <Button type="submit" size="lg" className="w-full sm:w-auto">
              메시지 보내기
            </Button>
            {submitted && (
              <p className="text-sm text-steel" role="status">
                메일 앱이 열리지 않는다면 위 이메일 주소로 직접 보내주세요.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
