"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const bookTitles = [
  "The Foundation of Mastery",
  "The Habit Engine",
  "Mastery in Action",
  "The Cognitive Edge",
  "Living Mastery",
];
const romans = ["I", "II", "III", "IV", "V"];

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 bg-black/80 backdrop-blur-sm text-gold transition-all hover:border-gold hover:shadow-gold"
          aria-label="Scroll to top"
        >
          <ArrowUp className="h-4 w-4" />
        </button>
      )}

      <footer className="border-t border-gold/15 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center gap-6 text-center">
            {/* Brand */}
            <p className="font-serif text-sm tracking-[0.3em] uppercase text-gold/70">
              The Repetition Series
            </p>

            {/* Book Links */}
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              {bookTitles.map((title, i) => (
                <Link
                  key={i}
                  href={`/book-${i + 1}`}
                  className="text-xs text-foreground/40 hover:text-gold transition-colors"
                >
                  <span className="text-gold/50 font-medium">
                    Book {romans[i]}:
                  </span>{" "}
                  {title}
                </Link>
              ))}
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/30" />
              <span className="text-gold/40 text-xs">&#10022;</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/30" />
            </div>

            {/* Copyright */}
            <div className="space-y-1">
              <p className="text-xs text-foreground/35">
                &copy; {new Date().getFullYear()} Ketan Shukla. All rights
                reserved.
              </p>
              <p className="font-serif text-xs text-foreground/25 italic">
                A five-book journey from the science of repetition to the
                mastery of life.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
