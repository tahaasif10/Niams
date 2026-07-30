import AcademicsHero from "@/src/components/sections/Academics/AcademicsHero";
import Subjects from "@/src/components/sections/Academics/Subjects";
import Curriculum from "@/src/components/sections/Academics/Curriculum";
import ClassFormat from "@/src/components/sections/Academics/ClassFormat";
import CTA from "@/src/components/sections/Home/Cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Academics | Niams",
  description:
    "Explore Niams' academic programs: Math, Science, English, Artificial Intelligence, and Computer Science, taught with the same rigor across every subject.",
};

export default function AcademicsPage() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <AcademicsHero />
      <Subjects />
      <Curriculum />
      <ClassFormat />
      <CTA />
    </main>
  );
}
