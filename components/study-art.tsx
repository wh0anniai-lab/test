import Image from "next/image";
import type { CaseStudy } from "@/lib/data/work";

export function StudyArt({ study, detail = false }: { study: CaseStudy; detail?: boolean }) {
  return (
    <figure className={detail ? "case-art study-illustration full-art" : "case-art study-illustration"}>
      <Image
        src={`/images/illustrations/${study.slug}.webp`}
        alt={study.artDescription}
        width={1280}
        height={960}
        sizes="(max-width: 680px) 90vw, (max-width: 1400px) 46vw, 640px"
      />
    </figure>
  );
}
