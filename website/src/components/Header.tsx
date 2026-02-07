"use client";

import { BookOpen } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gold/20 bg-navy-dark/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="flex items-center gap-3">
          <BookOpen className="h-6 w-6 text-gold" />
          <div>
            <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold">
              The Repetition Series
            </p>
            <p className="text-sm text-foreground/70">by Ketan Shukla</p>
          </div>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          <a
            href="#books"
            className="text-sm text-foreground/70 transition-colors hover:text-gold"
          >
            The Books
          </a>
          <a
            href="#about"
            className="text-sm text-foreground/70 transition-colors hover:text-gold"
          >
            About
          </a>
          <a
            href="#author"
            className="text-sm text-foreground/70 transition-colors hover:text-gold"
          >
            Author
          </a>
        </nav>
      </div>
    </header>
  );
}
