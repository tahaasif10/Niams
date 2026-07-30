"use client";

import { useEffect, useState } from "react";
import {
  ArrowRight,
  Image as ImageIcon,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const SLIDES = [
  { id: 1, alt: "Classroom session" },
  { id: 2, alt: "Students studying" },
  { id: 3, alt: "Faculty teaching" },
  { id: 4, alt: "Campus facility" },
];

const STATS = [
  { value: "500+", label: "Students taught" },
  { value: "38%", label: "Avg. grade lift" },
  { value: "98%", label: "Would recommend" },
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
    <section className="relative overflow-hidden bg-white px-4 py-20 sm:py-24">
      {/* Ambient light glows — premium light-mode depth */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,_var(--accent-soft),_transparent)] opacity-70"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[radial-gradient(closest-side,_var(--primary-soft),_transparent)] opacity-80"
      />

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
        {/* Text column */}
        <div>
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-1.5 shadow-sm">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            <span className="text-xs font-medium text-gray-600">
              Admissions open — new batches start monthly
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight text-primary sm:text-5xl">
            Forge your future with{" "}
            <span className="relative whitespace-nowrap bg-linear-to-r from-[#c9a875] via-[#ad8a54] to-[#8a6a3a] bg-[length:200%_auto] bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">
              clear, hard thinking
              <svg
                aria-hidden
                viewBox="0 0 200 12"
                className="absolute -bottom-1 left-0 h-2.5 w-full text-accent/50"
                preserveAspectRatio="none"
              >
                <path
                  d="M2 9C40 3 140 3 198 9"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </span>
          </h1>

          <p className="mt-5 max-w-md text-base text-gray-500">
            We teach the craft of learning. Small classes, sharp focus, and
            the discipline to master any subject — from core academics to
            AI and Computer Science.
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button className="group inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md">
              Book a trial class
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button className="rounded-md border border-line bg-white px-6 py-3 text-sm font-medium text-primary transition-colors hover:border-primary">
              Explore courses
            </button>
          </div>

          {/* Trust row */}
          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-line pt-6">
            {STATS.map((stat, index) => (
              <div
                key={stat.label}
                className={
                  index > 0
                    ? "border-l border-line pl-8 first:border-0 first:pl-0"
                    : ""
                }
              >
                <p className="text-2xl font-bold text-primary">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <div className="relative">
          {/* Soft accent ring behind the panel */}
          <div
            aria-hidden
            className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br from-primary-soft via-white to-accent-soft opacity-80"
          />

          <div className="relative overflow-hidden rounded-2xl border border-line bg-gray-100 shadow-xl shadow-primary/5">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {SLIDES.map((slide) => (
                <div
                  key={slide.id}
                  className="flex h-80 w-full flex-shrink-0 items-center justify-center sm:h-[26rem]"
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
                  className={`h-1.5 rounded-full transition-all ${
                    index === activeSlide
                      ? "w-6 bg-white"
                      : "w-1.5 bg-white/60"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Floating card: response time */}
          <div className="absolute -bottom-6 -left-6 hidden items-center gap-3 rounded-xl border border-line bg-white p-4 shadow-lg sm:flex">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-accent-soft">
              <ShieldCheck className="h-5 w-5 text-accent-hover" />
            </div>
            <div>
              <p className="text-sm font-bold text-primary">48 hrs</p>
              <p className="text-xs text-gray-500">Avg. response time</p>
            </div>
          </div>

          {/* Floating card: rating */}
          <div className="absolute -top-5 -right-4 hidden items-center gap-2 rounded-xl border border-line bg-white px-4 py-3 shadow-lg sm:flex">
            <Star className="h-4 w-4 fill-accent text-accent" />
            <p className="text-xs font-semibold text-primary">
              4.9 <span className="font-normal text-gray-400">/ 5 rating</span>
            </p>
          </div>

          {/* Floating badge: sparkle accent */}
          <div className="absolute top-1/2 -right-3 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-line bg-white shadow-md md:flex">
            <Sparkles className="h-4 w-4 text-accent" />
          </div>
        </div>
      </div>
    </section>
  );
}