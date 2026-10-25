import { cn } from "@/lib/utils";

type Props = {
  /** 01, 02 … 섹션 번호 */
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  /** 오른쪽 끝의 개수 표시 (쿼카 모션랩의 '40종') */
  count?: string;
  className?: string;
};

/**
 * 쿼카 모션랩의 패널 머리(pane-top):
 *   02 · SELECTED WORK
 *   제목                                 3건
 *   한 줄 설명
 */
export function SectionHeader({ index, eyebrow, title, description, count, className }: Props) {
  return (
    <div data-reveal className={cn("reveal flex items-end justify-between gap-4 pb-5", className)}>
      <div className="min-w-0">
        <p className="flex items-center gap-2">
          <span className="font-mono text-[11px] font-medium tabular-nums text-muted">{index}</span>
          <span className="text-muted/50" aria-hidden>
            ·
          </span>
          <span className="eyebrow">{eyebrow}</span>
        </p>
        <h2 className="mt-1.5 text-pane font-semibold">{title}</h2>
        {description && <p className="mt-1.5 text-[13px] leading-relaxed text-muted">{description}</p>}
      </div>
      {count && <span className="shrink-0 pb-0.5 text-[12.5px] text-muted">{count}</span>}
    </div>
  );
}
