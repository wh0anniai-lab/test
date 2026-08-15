import { cn } from "@/lib/utils";

type Props = {
  /** 01, 02 … 섹션 번호 */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeader({
  index,
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: Props) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <div
        data-reveal
        className={cn(
          "reveal flex items-center gap-3",
          align === "center" && "justify-center"
        )}
      >
        <span className="text-[11px] font-semibold tabular-nums text-steel/60">
          {index}
        </span>
        <span className="h-px w-6 bg-hairline" aria-hidden />
        <span className="eyebrow">{eyebrow}</span>
      </div>

      <h2
        data-reveal
        data-reveal-delay="80"
        className="reveal mt-4 text-section font-semibold text-white"
      >
        {title}
      </h2>

      {description && (
        <p
          data-reveal
          data-reveal-delay="140"
          className="reveal mt-4 text-[15px] leading-[1.7] text-steel md:text-[17px]"
        >
          {description}
        </p>
      )}
    </div>
  );
}
