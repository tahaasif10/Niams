"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Admissions", href: "/admissions" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
  className={`sticky top-0 z-50 w-full transition-all duration-300 ${
    isScrolled
      ? "border-b border-line bg-white/70 shadow-sm backdrop-blur-xl"
      : "border-b border-transparent bg-white/40 backdrop-blur-md"
  }`}
>
  <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-2">
    {/* Logo / school name */}
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.png"
        alt="NIAMS"
        width={80}
        height={80}
        className="h-20 w-20 object-contain"
        priority
      />
    </Link>

    {/* Desktop links */}
    <div className="hidden md:flex md:items-center md:gap-1">
      {NAV_LINKS.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="group relative px-3.5 py-2 text-sm font-medium text-gray-600 transition-colors hover:text-primary"
        >
          {link.label}
          <span className="pointer-events-none absolute inset-x-3.5 -bottom-0.5 h-px scale-x-0 bg-accent transition-transform duration-300 group-hover:scale-x-100" />
        </Link>
      ))}
    </div>

    {/* Desktop CTA */}
    <div className="hidden md:block">
      <Link
        href="/admissions"
        className="rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
      >
        Book a trial class
      </Link>
    </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center rounded-md p-2 text-primary transition-colors hover:bg-primary-soft md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-line bg-white/80 px-4 py-3 backdrop-blur-xl">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-primary-soft hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/admissions"
            onClick={() => setIsOpen(false)}
            className="mt-2 block rounded-md bg-primary px-4 py-2.5 text-center text-sm font-medium text-white transition-colors hover:bg-primary-hover"
          >
            Book a trial class
          </Link>
        </div>
      </div>
    </nav>
  );
}