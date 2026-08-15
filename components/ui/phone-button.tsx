import { Phone } from "lucide-react";
import { CONTACT } from "@/lib/data/site";
import { cn } from "@/lib/utils";

type Props = {
  /** desktop: 라벨까지 노출 / icon: 아이콘만 (모바일 헤더) */
  variant?: "icon" | "labeled";
  className?: string;
};

/**
 * 전화 버튼.
 * 번호는 lib/data/site.ts 의 CONTACT 상수만 사용한다.
 * 터치 타깃 48px 이상을 보장한다.
 */
export function PhoneButton({ variant = "icon", className }: Props) {
  return (
    <a
      href={CONTACT.phoneHref}
      aria-label="전화하기"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full",
        "border border-[#fc4040]/30 bg-[#fc4040]/10 text-[#fc4040]",
        "transition-colors duration-200 hover:bg-cy[#fc4040]an/20 active:bg-[#fc4040]/25",
        variant === "icon" ? "h-11 w-11" : "h-11 px-5 text-[14px] font-semibold",
        className
      )}
    >
      <Phone size={18} strokeWidth={2.2} aria-hidden />
      {variant === "labeled" && <span>Contact</span>}
    </a>
  );
}
