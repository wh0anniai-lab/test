import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type Props = {
  /** labeled: 라벨까지 노출 (데스크톱 상단 바) / icon: 아이콘만 (모바일 상단 바) */
  variant?: "icon" | "labeled";
  className?: string;
};

/**
 * 전화 버튼 — 네이비 알약 (쿼카 모션랩의 주 버튼 색).
 * 번호는 lib/data/site.ts 의 CONTACT 상수만 사용한다.
 */
export function PhoneButton({ variant = "icon", className }: Props) {
  return (
    <a
      href={CONTACT.phoneHref}
      aria-label="전화하기"
      className={cn(
        "inline-flex items-center justify-center gap-1.5 rounded-full bg-accent text-white",
        "transition-colors duration-200 hover:bg-accent-hover active:scale-[0.97]",
        variant === "icon" ? "h-10 w-10" : "h-9 px-4 text-[13px] font-semibold",
        className
      )}
    >
      <Phone size={variant === "icon" ? 17 : 14} strokeWidth={2.2} aria-hidden />
      {variant === "labeled" && <span>전화하기</span>}
    </a>
  );
}
