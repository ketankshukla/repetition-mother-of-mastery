"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { books } from "@/data/books";

const coverImages = [
  "/images/book1-cover.png",
  "/images/book2-cover.png",
  "/images/book3-cover.png",
  "/images/book4-cover.png",
  "/images/book5-cover.png",
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % 5);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + 5) % 5);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_60%)] opacity-[0.07]" />
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        {/* Series Title — large and prominent */}
        <h1 className="mb-2 font-serif font-bold tracking-[0.15em] uppercase text-gold">
          <span className="block text-2xl sm:text-4xl lg:text-5xl">
            The Repetition Series
          </span>
        </h1>

        <p className="font-serif text-xl tracking-[0.3em] uppercase text-gold/70 mb-10 sm:text-3xl lg:text-4xl">
          by Ketan Shukla
        </p>

        {/* Book Cover Carousel — image only, clickable to book page */}
        <div
          className="relative mb-12 mx-auto max-w-sm sm:max-w-md"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="relative overflow-hidden rounded-2xl border border-gold/30 shadow-gold-lg aspect-[2/3]">
            {coverImages.map((src, i) => (
              <Link
                key={i}
                href={`/book-${i + 1}`}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === currentSlide
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0 pointer-events-none"
                }`}
              >
                <img
                  src={src}
                  alt={`${books[i].title} — Book Cover`}
                  className="w-full h-full object-cover"
                />
              </Link>
            ))}

            {/* Nav Arrows */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevSlide();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-gold/80 backdrop-blur-sm transition hover:bg-black/70 hover:text-gold sm:h-10 sm:w-10"
              aria-label="Previous cover"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextSlide();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-black/50 text-gold/80 backdrop-blur-sm transition hover:bg-black/70 hover:text-gold sm:h-10 sm:w-10"
              aria-label="Next cover"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Buy the Series CTA */}
        <a
          href="#"
          className="btn-amazon inline-flex items-center gap-3 text-sm sm:text-base tracking-wide"
        >
          <ShoppingCart className="h-4 w-4 sm:h-5 sm:w-5" />
          Buy This Series on Amazon
        </a>
      </div>
    </section>
  );
}
