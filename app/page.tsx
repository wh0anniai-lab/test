import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
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

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-navy">
        <Hero />
        <SelectedWork />
        <Capabilities />
        <Now />
        <Story />
        <Career />
        <EngineeringArchive />
        <Lecture />
        <TechStack />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
