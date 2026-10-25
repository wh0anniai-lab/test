import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Rail } from "@/components/layout/rail";
import { Hero } from "@/components/sections/hero";
import { SelectedWork } from "@/components/sections/selected-work";
import { Capabilities } from "@/components/sections/capabilities";
import { Now } from "@/components/sections/now";
import { Story } from "@/components/sections/story";
import { Career } from "@/components/sections/career";
import { EngineeringArchive } from "@/components/sections/engineering-archive";
import { Lecture } from "@/components/sections/lecture";
import { TechStack } from "@/components/sections/tech-stack";
import { Contact } from "@/components/sections/contact";
import { FEATURED, ARCHIVE } from "@/lib/data/projects";
import { CAPABILITIES, NOW, STORY, TECH } from "@/lib/data/capabilities";
import { CAREER, CREDENTIALS } from "@/lib/data/career";
import { CONTACT_CHANNELS } from "@/lib/data/site";

/** 목차에 붙는 개수 — 쿼카 모션랩의 '카드 쇼케이스 40' 처럼 데이터 길이를 그대로 보여준다 */
const COUNTS: Record<string, number> = {
  work: FEATURED.length,
  capabilities: CAPABILITIES.length,
  now: NOW.length,
  story: STORY.length,
  career: CAREER.length,
  archive: ARCHIVE.length,
  lecture: CREDENTIALS.length,
  tech: TECH.length,
  contact: CONTACT_CHANNELS.length,
};

/**
 * 쿼카 모션랩 레이아웃:
 *   떠 있는 상단 바 → 히어로(제목 + 오른쪽 설명 + 바로가기 카드 3개)
 *   → 왼쪽 목차 레일 + 오른쪽 회색 패널 안에 섹션들을 선으로만 나눠 쌓는다.
 * 모바일에서는 레일이 상단 바 아래의 가로 알약 줄로 바뀐다.
 */
export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-paper">
        <Hero />

        <div className="container mt-8 pb-16 md:mt-10 lg:grid lg:grid-cols-[212px_minmax(0,1fr)] lg:gap-8 lg:pb-24">
          <Rail counts={COUNTS} />

          <div className="mt-3 rounded-xl bg-panel p-4 sm:p-6 lg:mt-0 lg:p-8">
            <SelectedWork />
            <Capabilities />
            <Now />
            <Story />
            <Career />
            <EngineeringArchive />
            <Lecture />
            <TechStack />
            <Contact />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
