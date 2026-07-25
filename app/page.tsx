import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Overview } from "@/components/sections/overview";
import { About } from "@/components/sections/about";
import { Career } from "@/components/sections/career";
import { Projects } from "@/components/sections/projects";
import { Startup } from "@/components/sections/startup";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-paper">
      <Navbar />
      <Hero />
      <Overview />
      <About />
      <Career />
      <Projects />
      <Startup />
      <Contact />
      <Footer />
    </main>
  );
}
