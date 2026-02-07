"use client";

import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 text-center"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--color-gold)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-4xl">
        <p className="mb-2 text-sm font-semibold tracking-[0.35em] uppercase text-gold/80">
          A Five-Book Series
        </p>
        <h1 className="mb-4 text-5xl font-bold tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Repetition
        </h1>
        <div className="mx-auto mb-6 h-px w-32 bg-gradient-to-r from-transparent via-gold to-transparent" />
        <p className="mb-2 text-lg font-light tracking-[0.2em] uppercase text-gold sm:text-xl">
          Mother of Mastery
        </p>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
          From the neuroscience of repetition to the mastery of life. Five books.
          Fifty chapters. One transformative journey that will change how you
          practice, how you learn, and how you live.
        </p>
        <p className="mt-6 text-sm tracking-widest text-gold/60 uppercase">
          by Ketan Shukla
        </p>

        <a
          href="#books"
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-8 py-3 text-sm font-medium tracking-wider text-gold uppercase transition-all hover:border-gold/60 hover:bg-gold/20"
        >
          Explore the Series
          <ChevronDown className="h-4 w-4" />
        </a>
      </div>

      <div className="absolute bottom-8 animate-bounce">
        <ChevronDown className="h-6 w-6 text-gold/40" />
      </div>
    </section>
  );
}
