import AboutHero from "@/src/components/sections/About/AboutHero";
import Story from "@/src/components/sections/About/Story";
import MissionVision from "@/src/components/sections/About/MissionVision";
import Programs from "@/src/components/sections/About/Programs";
import Faculty from "@/src/components/sections/About/Faculty";
import Milestones from "@/src/components/sections/About/Milestones";
import CTA from "@/src/components/sections/Home/Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Niams",
  description:
    "Learn about Niams Coaching Center, our mission, faculty, and our courses in Artificial Intelligence, Computer Science, and core academics.",
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <AboutHero />
      <Story />
      <MissionVision />
      <Programs />
      <Faculty />
      <Milestones />
      <CTA />
    </main>
  );
}
