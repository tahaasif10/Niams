"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "They didn't just teach me the material. They taught me how to attack a problem and not quit until it broke.",
    name: "Aisha Khan",
    role: "Medical student, Cambridge",
  },
  {
    quote:
      "My son stopped fearing exams. He walked in quiet and ready. The change was absolute.",
    name: "Robert Miller",
    role: "Parent of student",
  },
  {
    quote: "The small class meant no hiding. I had to be good. And then I was.",
    name: "David Chen",
    role: "Engineering student, Imperial",
  },
];

const AUTOPLAY_MS = 5000;

export default function Testimonials() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [index, setIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const dragStartX = useRef<number>(0);
  const dragCurrentX = useRef<number>(0);
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const count = TESTIMONIALS.length;

  useEffect(() => {
    const updateVisible = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateVisible();
    window.addEventListener("resize", updateVisible);
    return () => window.removeEventListener("resize", updateVisible);
  }, []);

  const slideWidthPct = 100 / visibleCount;

  const goTo = useCallback((newIndex: number) => {
    setIndex(newIndex);
  }, []);

  const next = useCallback(() => setIndex((i) => i + 1), []);
  const prev = useCallback(() => setIndex((i) => i - 1), []);

  useEffect(() => {
    if (isPaused || isDragging) return;
    autoplayRef.current = setInterval(() => {
      setIndex((i) => i + 1);
    }, AUTOPLAY_MS);
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [isPaused, isDragging]);

  const activeDot = ((index % count) + count) % count;

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    dragStartX.current = clientX;
    dragCurrentX.current = clientX;
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    dragCurrentX.current = clientX;
    setDragOffset(clientX - dragStartX.current);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    const delta = dragCurrentX.current - dragStartX.current;
    const threshold = 60;
    if (delta > threshold) prev();
    else if (delta < -threshold) next();
    setIsDragging(false);
    setDragOffset(0);
  };

  const extended = [];
  for (let i = -visibleCount; i < count + visibleCount; i++) {
    const t = TESTIMONIALS[((i % count) + count) % count];
    extended.push({ ...t, key: `${i}-${t.name}` });
  }
  const baseOffset = visibleCount;
  const translatePct =
    -(baseOffset + index) * slideWidthPct +
    (dragOffset / (trackRef.current?.offsetWidth || 1)) * 100;

  return (
    <section className="bg-[#F8FAFC] px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <div className="text-center">
          <span className="text-xs font-bold uppercase tracking-wider text-[#0052C2]">
            Proven Success
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-[#1A2552] md:text-4xl">
            The work speaks through those who did it
          </h2>
        </div>

        <div
          className="relative mt-12"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleDragEnd();
          }}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex select-none"
              style={{
                transform: `translateX(${translatePct}%)`,
                transition: isDragging ? "none" : "transform 500ms ease",
                cursor: isDragging ? "grabbing" : "grab",
              }}
              onMouseDown={(e) => handleDragStart(e.clientX)}
              onMouseMove={(e) => handleDragMove(e.clientX)}
              onMouseUp={handleDragEnd}
              onTouchStart={(e) => handleDragStart(e.touches[0].clientX)}
              onTouchMove={(e) => handleDragMove(e.touches[0].clientX)}
              onTouchEnd={handleDragEnd}
            >
              {extended.map((testimonial) => (
                <div
                  key={testimonial.key}
                  className="shrink-0 px-3"
                  style={{ width: `${slideWidthPct}%` }}
                >
                  <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-8 shadow-sm md:p-10">
                    <Quote
                      className="pointer-events-none absolute -right-3 -top-3 h-24 w-24 text-[#0052C2]/10"
                      strokeWidth={1.5}
                    />
                    <div className="absolute left-0 top-0 h-1 w-full bg-[#F2994A]" />

                    <div className="relative">
                      <div className="flex gap-1">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[#F2994A] text-[#F2994A]"
                          />
                        ))}
                      </div>
                      <p className="mt-5 text-base italic leading-relaxed text-[#334155] md:text-lg">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                    </div>

                    <div className="relative mt-8">
                      <p className="text-base font-bold text-[#1A2552]">
                        {testimonial.name}
                      </p>
                      <p className="text-xs font-medium text-[#0052C2]">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4 md:absolute md:-right-2 md:top-1/2 md:mt-0 md:-translate-y-1/2 md:flex-col md:justify-start md:gap-3">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#1A2552] shadow-sm transition-colors hover:bg-[#1A2552] hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#1A2552] shadow-sm transition-colors hover:bg-[#1A2552] hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2">
          {TESTIMONIALS.map((t, i) => (
            <button
              key={t.name}
              type="button"
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => goTo(i)}
              className={
                i === activeDot
                  ? "h-2 w-8 rounded-full bg-[#0052C2] transition-all"
                  : "h-2 w-2 rounded-full bg-gray-300 transition-all"
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}