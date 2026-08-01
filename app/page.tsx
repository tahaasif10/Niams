import Hero from "@/src/components/sections/Home/Hero";
import Method from "@/src/components/sections/Home/Method";
import Trust from "@/src/components/sections/Home/Trust";
import Courses from "@/src/components/sections/Home/Courses";
// import Testimonials from "@/src/components/sections/Home/Testimonials";
import CTA from "@/src/components/sections/Home/Cta";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col">
      <Hero />
      <Method />
      <Trust />
      <Courses />
      {/* <Testimonials /> */}
      <CTA/>
      {/* Add more sections below, e.g. <Features />, <Testimonials />, <CTA /> */}
    </main>
  );
}