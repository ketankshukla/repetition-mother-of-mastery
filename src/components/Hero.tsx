"use client";

import { useState, useEffect, useMemo } from "react";
import { ChevronDown, Sparkles, BookOpen, Target } from "lucide-react";
import Link from "next/link";
import { books } from "@/data/books";

// Generate deterministic particle positions based on a seed
const generateParticles = (count: number, seed: string) => {
  const particles = [];
  let hash = 0;

  // Simple hash function from string
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32-bit integer
  }

  // Use hash as seed for pseudo-random generator
  const random = () => {
    hash = ((hash << 1103515245) + 12345) & 0x7fffffff;
    return hash / 0x7fffffff;
  };

  for (let i = 0; i < count; i++) {
    particles.push({
      left: `${random() * 100}%`,
      top: `${random() * 100}%`,
      animationDelay: `${random() * 5}s`,
      animationDuration: `${3 + random() * 4}s`,
    });
  }

  return particles;
};

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    setIsClient(true);
  }, []);

  // Generate particles with a fixed seed to ensure SSR/client consistency
  const particles = useMemo(() => {
    return generateParticles(20, "repetition-series-hero-particles");
  }, []);

  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-navy" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_50%)] opacity-10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 h-96 w-96 animate-float rounded-full bg-gold/5 blur-3xl" />
          <div
            className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float rounded-full bg-gold/5 blur-3xl"
            style={{ animationDelay: "1.5s" }}
          />
        </div>
      </div>

      {/* Animated Particles - Only render on client */}
      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {particles.map((particle, i) => (
            <div
              key={`particle-${i}`}
              className="absolute h-px w-px animate-pulse rounded-full bg-gold/30"
              style={{
                left: particle.left,
                top: particle.top,
                animationDelay: particle.animationDelay,
                animationDuration: particle.animationDuration,
              }}
            />
          ))}
        </div>
      )}

      <div
        className={`relative z-10 max-w-5xl transition-all duration-1000 ${
          isVisible
            ? "animate-fadeInUp opacity-100 translate-y-0"
            : "opacity-0 translate-y-10"
        }`}
      >
        {/* Series Badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 backdrop-blur-sm">
          <Sparkles className="h-4 w-4 text-gold" />
          <span className="text-sm font-semibold tracking-[0.35em] uppercase text-gold">
            A Five-Book Series
          </span>
          <Sparkles className="h-4 w-4 text-gold" />
        </div>

        {/* Main Title */}
        <h1 className="mb-6 font-bold tracking-tight">
          <span className="block text-5xl sm:text-7xl lg:text-8xl heading-gradient">
            Repetition
          </span>
        </h1>

        {/* Enhanced Divider */}
        <div className="relative mb-8 flex items-center justify-center">
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" />
          <div className="absolute mx-4">
            <BookOpen className="h-6 w-6 text-gold animate-float" />
          </div>
          <div className="h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" />
        </div>

        {/* Subtitle */}
        <h2
          className="mb-8 text-lg font-light tracking-[0.2em] uppercase text-gold sm:text-xl lg:text-2xl animate-fadeInScale"
          style={{ animationDelay: "0.3s" }}
        >
          Mother of Mastery
        </h2>

        {/* Enhanced Description */}
        <div
          className="mb-12 space-y-4 animate-fadeInScale"
          style={{ animationDelay: "0.6s" }}
        >
          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/80 sm:text-xl lg:text-2xl">
            From the neuroscience of repetition to the mastery of life.
          </p>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-foreground/60 sm:text-lg">
            <span className="font-semibold text-gold">Five books.</span> Fifty
            chapters.
            <span className="font-semibold text-gold">
              {" "}
              One transformative journey
            </span>{" "}
            that will change how you practice, how you learn, and how you live.
          </p>
        </div>

        {/* Author Badge */}
        <div
          className="mb-12 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-navy/50 px-6 py-3 backdrop-blur-sm animate-fadeInScale"
          style={{ animationDelay: "0.9s" }}
        >
          <Target className="h-5 w-5 text-gold" />
          <span className="text-sm font-medium tracking-widest uppercase text-gold/80">
            by Ketan Shukla
          </span>
        </div>

        {/* Book Tabs */}
        <div
          className="mb-12 animate-fadeInScale"
          style={{ animationDelay: "1.2s" }}
        >
          <div className="flex flex-wrap justify-center gap-4">
            {books.map((book, index) => (
              <Link
                key={book.id}
                href={`/book-${book.id}`}
                className="group relative overflow-hidden rounded-full border border-gold/30 bg-gold/10 px-6 py-3 text-sm font-medium tracking-wider text-gold uppercase transition-all duration-300 hover:border-gold hover:bg-gold/20 hover:shadow-gold hover:scale-105"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="text-gold/80 font-medium">
                    Book {book.roman}
                  </span>
                  <span className="hidden sm:inline">{book.title}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </Link>
            ))}
          </div>
        </div>

        {/* Enhanced CTA Button */}
        <a
          href="#about"
          className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full border border-gold/30 bg-gradient-to-r from-gold/10 to-gold/5 px-8 py-4 text-sm font-medium tracking-wider text-gold uppercase transition-all duration-300 hover:border-gold hover:from-gold/20 hover:to-gold/10 hover:shadow-gold hover:scale-105 animate-fadeInScale"
          style={{ animationDelay: "1.5s" }}
        >
          <span className="relative z-10">Learn About The Journey</span>
          <ChevronDown className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          <div className="absolute inset-0 bg-gradient-to-r from-gold/20 to-gold/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </a>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce">
        <div className="relative">
          <ChevronDown className="h-6 w-6 text-gold/40" />
          <div className="absolute -inset-2 rounded-full bg-gold/10 blur-md" />
        </div>
      </div>
    </section>
  );
}
