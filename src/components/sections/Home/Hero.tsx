"use client";

import { useEffect, useState } from "react";
import { Image as ImageIcon } from "lucide-react";

const SLIDES = [
  { id: 1, alt: "Classroom session" },
  { id: 2, alt: "Students studying" },
  { id: 3, alt: "Faculty teaching" },
  { id: 4, alt: "Campus facility" },
];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-[#fafafa] px-4 py-16">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-3xl font-bold text-[#0B1D3A] sm:text-4xl">
          Forge your future with clear,
          <br />
          hard thinking
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm text-gray-500">
          We teach the craft of learning. Small classes, sharp focus, and the
          discipline to master any subject.
        </p>

        <div className="mt-6 flex items-center justify-center gap-3">
          <button className="rounded-md bg-[#0B1D3A] px-5 py-2 text-sm font-medium text-white hover:bg-[#132a4f]">
            Book trial
          </button>
          <button className="rounded-md border border-gray-300 px-5 py-2 text-sm font-medium text-[#0B1D3A] hover:border-[#0B1D3A]">
            Courses
          </button>
        </div>
      </div>

      {/* Carousel */}
      <div className="mx-auto mt-10 max-w-4xl">
        <div className="relative overflow-hidden rounded-xl border border-gray-200 bg-gray-100">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeSlide * 100}%)` }}
          >
            {SLIDES.map((slide) => (
              <div
                key={slide.id}
                className="flex h-72 w-full flex-shrink-0 items-center justify-center sm:h-96"
              >
                <ImageIcon className="h-16 w-16 text-gray-300" />
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
            {SLIDES.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => setActiveSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2 w-2 rounded-full transition-colors ${
                  index === activeSlide ? "bg-[#0B1D3A]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}