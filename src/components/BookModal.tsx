"use client";

import { useEffect, useRef } from "react";
import {
  BookOpen,
  Clock,
  Quote,
  X,
  ArrowLeft,
  ArrowRight,
  Tablet,
  BookMarked,
} from "lucide-react";
import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";

export default function BookModal() {
  const { selectedBookIndex, closeBook, goToNextBook, goToPrevBook } =
    useBook();
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (selectedBookIndex !== null && scrollRef.current) {
      scrollRef.current.scrollTop = 0;
    }
  }, [selectedBookIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedBookIndex === null) return;
      if (e.key === "Escape") closeBook();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBookIndex, closeBook]);

  if (selectedBookIndex === null) return null;

  const book = books[selectedBookIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={closeBook}
      />

      {/* Modal Content */}
      <div
        ref={scrollRef}
        className="relative z-10 w-full h-full overflow-y-auto bg-black"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 glass-dark border-b border-gold/20">
          <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
            <button
              onClick={closeBook}
              className="group flex items-center gap-2 transition-all duration-300"
            >
              <ArrowLeft className="h-5 w-5 text-gold" />
              <span className="font-serif text-xs tracking-[0.2em] uppercase text-gold sm:text-xs">
                Back to Series
              </span>
            </button>
            <button
              onClick={closeBook}
              className="flex h-8 w-8 items-center justify-center rounded-full border border-gold/20 text-gold/60 hover:text-gold hover:border-gold/40 transition-colors"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16 pt-8">
          <div className="mx-auto max-w-4xl">
            {/* Book Header */}
            <div className="mb-8 sm:mb-12 text-center">
              <p className="font-serif text-sm tracking-[0.4em] uppercase text-gold/70 mb-3 sm:text-base">
                Book {book.roman}
              </p>

              <h1 className="mb-3 font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl">
                {book.title}
              </h1>

              <div className="flex items-center justify-center gap-3 mb-3">
                <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/50" />
                <span className="text-gold/50 text-sm">&#10022;</span>
                <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/50" />
              </div>

              <p className="font-serif text-base tracking-[0.15em] uppercase text-gold/80 italic sm:text-lg">
                {book.subtitle}
              </p>
            </div>

            {/* Book Cover */}
            <div className="mb-12 mx-auto max-w-2xl">
              <div className="overflow-hidden rounded-xl border border-gold/30 shadow-gold-lg">
                <img
                  src={book.coverImage}
                  alt={`${book.title} - Book Cover`}
                  className="block w-full h-auto"
                />
              </div>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-12">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-gold/40" />
              <span className="text-gold/40 text-xs">&#10022;</span>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-gold/40" />
            </div>

            {/* Epigraph */}
            <div className="mb-10 mx-auto max-w-2xl">
              <div className="rounded-xl border border-gold/15 glass-dark p-6 sm:p-8">
                <div className="flex flex-col items-center text-center">
                  <Quote className="h-6 w-6 text-gold/25 mb-3" />
                  <p className="font-serif text-base sm:text-lg leading-relaxed text-foreground/75 italic">
                    &ldquo;{book.epigraph.quote}&rdquo;
                  </p>
                  <div className="mt-3 h-px w-12 bg-gold/25" />
                  <p className="mt-3 font-serif text-xs tracking-[0.2em] uppercase text-gold/50">
                    — {book.epigraph.author}
                  </p>
                </div>
              </div>
            </div>

            {/* About This Book */}
            <div className="mb-12 mx-auto max-w-2xl">
              <h2 className="font-serif text-xl font-bold text-cream sm:text-2xl text-center mb-4">
                About This Book
              </h2>
              <div className="h-px w-20 mx-auto mb-6 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <p className="text-base leading-relaxed text-foreground/65 sm:text-left text-center">
                {book.elaborateDescription}
              </p>
              <div className="mt-6 flex items-center justify-center gap-6 text-sm text-foreground/45">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gold/40" />
                  <span>{book.chapters.length} Chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold/40" />
                  <span>Progressive Learning</span>
                </div>
              </div>
            </div>

            {/* Chapters Section */}
            <div className="mb-12">
              <h2 className="font-serif text-xl font-bold text-cream sm:text-2xl text-center mb-4">
                Chapters
              </h2>
              <div className="h-px w-20 mx-auto mb-8 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              <div className="space-y-3">
                {book.chapters.map((chapter) => (
                  <div
                    key={chapter.number}
                    className="group rounded-lg border border-gold/10 bg-navy-light/30 p-4 sm:p-5 transition-all duration-200 hover:border-gold/25"
                  >
                    <div className="flex items-start gap-3 sm:gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-gold/10 text-xs font-bold text-gold">
                        {chapter.number}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-semibold text-cream group-hover:text-gold transition-colors sm:text-base">
                          {chapter.title}
                        </h3>
                        <p className="mt-1 text-xs leading-relaxed text-foreground/45 sm:text-sm">
                          {chapter.summary}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Buy Buttons */}
            <div className="border-t border-gold/10 pt-8">
              <p className="text-center font-serif text-xs tracking-[0.25em] uppercase text-gold/50 mb-4">
                Available on Amazon
              </p>
              <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
                <a
                  href={book.kindleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg bg-[#FF9900] px-6 py-3 text-sm font-bold tracking-wide text-black transition-all duration-200 hover:bg-[#e68a00] hover:shadow-lg hover:shadow-[#FF9900]/20 active:scale-95"
                >
                  <Tablet className="h-4 w-4 shrink-0" />
                  Buy Kindle
                </a>
                <a
                  href={book.paperbackUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-lg border border-gold/40 bg-gold/10 px-6 py-3 text-sm font-bold tracking-wide text-gold transition-all duration-200 hover:bg-gold/20 hover:border-gold/60 hover:shadow-lg hover:shadow-gold/10 active:scale-95"
                >
                  <BookMarked className="h-4 w-4 shrink-0" />
                  Buy Paperback
                </a>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center pt-6">
              {selectedBookIndex > 0 ? (
                <button
                  onClick={goToPrevBook}
                  className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous Book
                </button>
              ) : (
                <button
                  onClick={closeBook}
                  className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Series
                </button>
              )}
              {selectedBookIndex < 4 ? (
                <button
                  onClick={goToNextBook}
                  className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors"
                >
                  Next Book
                  <ArrowRight className="h-4 w-4" />
                </button>
              ) : (
                <button
                  onClick={closeBook}
                  className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors"
                >
                  Back to Series
                  <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
