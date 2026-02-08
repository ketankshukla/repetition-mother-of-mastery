"use client";

import { useState, useEffect, useRef } from "react";
import { books } from "@/data/books";
import BookCard from "./BookCard";
import { BookOpen, Sparkles } from "lucide-react";

export default function BooksSection() {
  const [activeBook, setActiveBook] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const bookRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const handleBookToggle = (bookId: number) => {
    // Store current scroll position and temporarily disable smooth scrolling
    const currentScrollY = window.scrollY;
    const originalScrollBehavior = (document.documentElement as HTMLElement)
      .style.scrollBehavior;
    (document.documentElement as HTMLElement).style.scrollBehavior = "auto";

    // Toggle the book
    const newActiveBook = activeBook === bookId ? null : bookId;
    setActiveBook(newActiveBook);

    // Restore scroll position and re-enable smooth scrolling
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.scrollTo({ top: currentScrollY, behavior: "auto" });
        // Re-enable smooth scrolling after a brief delay
        setTimeout(() => {
          (document.documentElement as HTMLElement).style.scrollBehavior =
            originalScrollBehavior || "smooth";
        }, 100);
      });
    });
  };

  return (
    <section
      ref={sectionRef}
      id="books"
      className="relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float" />
        <div
          className="absolute top-1/2 right-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Enhanced Header */}
        <div
          className={`mb-20 text-center transition-all duration-1000 ${
            isVisible
              ? "animate-fadeInUp opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-gold" />
            <span className="text-sm font-semibold tracking-[0.3em] uppercase text-gold">
              The Complete Series
            </span>
            <Sparkles className="h-4 w-4 text-gold" />
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl heading-gradient">
            Five Books. Fifty Chapters.
          </h2>

          <div className="mx-auto max-w-3xl space-y-4">
            <p className="text-lg leading-relaxed text-foreground/70 sm:text-xl">
              Each book builds on the last — a progressive journey from the
              science of repetition to the mastery of life.
            </p>
            <p className="text-base leading-relaxed text-foreground/50">
              Click any book to explore its contents and discover the
              transformative power of deliberate practice.
            </p>
          </div>
        </div>

        {/* Enhanced Books Grid */}
        <div className="space-y-6">
          {books.map((book, index) => (
            <div
              key={book.id}
              ref={(el) => (bookRefs.current[book.id] = el)}
              className={`transition-all duration-700 ${
                isVisible
                  ? "animate-fadeInUp opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ animationDelay: `${0.2 + index * 0.15}s` }}
            >
              <BookCard
                book={book}
                isActive={activeBook === book.id}
                onToggle={() => handleBookToggle(book.id)}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Footer */}
        <div
          className={`mt-20 text-center transition-all duration-1000 ${
            isVisible
              ? "animate-fadeInScale opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
          style={{ animationDelay: "1.2s" }}
        >
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 bg-navy/50 px-6 py-3 backdrop-blur-sm">
            <BookOpen className="h-5 w-5 text-gold" />
            <span className="text-sm font-medium text-foreground/70">
              Begin your journey to mastery
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
