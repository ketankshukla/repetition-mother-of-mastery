"use client";

import { useEffect, useRef } from "react";
import { X, ChevronLeft, ChevronRight, BookOpen } from "lucide-react";
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
      if (e.key === "ArrowRight") goToNextBook();
      if (e.key === "ArrowLeft") goToPrevBook();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedBookIndex, closeBook, goToNextBook, goToPrevBook]);

  if (selectedBookIndex === null) return null;

  const book = books[selectedBookIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4"
      onClick={closeBook}
    >
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        className="relative z-10 w-full sm:max-w-4xl max-h-[100dvh] sm:max-h-[90vh] sm:rounded-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={closeBook}
          className="absolute top-3 right-3 z-20 w-10 h-10 rounded-full bg-black/70 border border-white/30 flex items-center justify-center hover:bg-black/90 transition-all"
          aria-label="Close"
        >
          <X className="w-5 h-5 text-white/80" />
        </button>

        {/* Prev arrow */}
        {selectedBookIndex > 0 && (
          <button
            onClick={goToPrevBook}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
            aria-label="Previous book"
          >
            <ChevronLeft
              className="w-5 h-5 sm:w-6 sm:h-6"
              style={{ color: book.color }}
            />
          </button>
        )}

        {/* Next arrow */}
        {selectedBookIndex < books.length - 1 && (
          <button
            onClick={goToNextBook}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-black/60 border border-white/20 flex items-center justify-center hover:bg-black/80 transition-all"
            aria-label="Next book"
          >
            <ChevronRight
              className="w-5 h-5 sm:w-6 sm:h-6"
              style={{ color: book.color }}
            />
          </button>
        )}

        {/* Scrollable content */}
        <div
          ref={scrollRef}
          className="overflow-y-auto max-h-[100dvh] sm:max-h-[90vh] bg-[#0d0d14] sm:rounded-2xl"
        >
          {/* Header with gradient */}
          <div
            className="relative p-5 sm:p-10 pb-4 sm:pb-6"
            style={{
              background: `linear-gradient(135deg, ${book.color}15, transparent, ${book.color}08)`,
            }}
          >
            <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 items-start pt-8 sm:pt-0">
              {/* Book cover */}
              <div className="w-28 sm:w-48 flex-shrink-0 mx-auto sm:mx-0">
                <img
                  src={book.coverImage}
                  alt={`Book ${book.roman}: ${book.title}`}
                  className="w-full h-auto rounded-lg shadow-2xl border border-white/10"
                />
              </div>

              {/* Book info */}
              <div className="flex-1 min-w-0">
                <h2 className="text-xl sm:text-3xl font-bold font-serif text-white mb-1 leading-tight">
                  Book {book.roman}: {book.title}
                </h2>
                <p className="text-white/50 italic text-sm sm:text-base mb-3">
                  {book.subtitle}
                </p>

                {/* Epigraph */}
                <blockquote
                  className="border-l-2 pl-4 mb-4"
                  style={{ borderColor: `${book.color}4d` }}
                >
                  <p className="text-white/60 italic font-serif text-sm sm:text-base">
                    &ldquo;{book.epigraph.quote}&rdquo;
                  </p>
                  <cite
                    className="text-sm mt-1 block not-italic"
                    style={{ color: `${book.color}99` }}
                  >
                    — {book.epigraph.author}
                  </cite>
                </blockquote>
              </div>
            </div>
          </div>

          {/* About This Book */}
          <div className="px-5 sm:px-10 py-5 border-t border-white/5">
            <h3 className="text-base sm:text-lg font-bold text-white mb-3 flex items-center gap-2">
              <BookOpen
                className="w-4 h-4 sm:w-5 sm:h-5"
                style={{ color: book.color }}
              />
              About This Book
            </h3>
            <p className="text-white/60 leading-relaxed text-sm sm:text-base">
              {book.elaborateDescription}
            </p>
          </div>

          {/* Chapters */}
          <div className="px-5 sm:px-10 py-5 border-t border-white/5">
            <h3 className="text-base sm:text-lg font-bold text-white mb-4">
              Chapters ({book.chapters.length})
            </h3>
            <div className="grid grid-cols-1 gap-2 sm:gap-3">
              {book.chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="flex items-start gap-3 py-2 px-3 rounded-lg hover:bg-white/5 transition-colors"
                >
                  <span
                    className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5"
                    style={{
                      backgroundColor: `${book.color}20`,
                      color: book.color,
                    }}
                  >
                    {chapter.number}
                  </span>
                  <div className="min-w-0">
                    <span className="text-white/70 text-sm sm:text-base font-medium">
                      {chapter.title}
                    </span>
                    <p className="text-white/40 text-xs sm:text-sm mt-0.5 leading-relaxed">
                      {chapter.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer nav */}
          <div className="px-5 sm:px-10 py-5 border-t border-white/5 flex items-center justify-between">
            <button
              onClick={goToPrevBook}
              disabled={selectedBookIndex === 0}
              className="text-sm text-white/40 hover:text-white/80 disabled:opacity-30 disabled:hover:text-white/40 transition-colors flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" />
              Previous Book
            </button>
            <span className="text-white/30 text-xs">
              Book {selectedBookIndex + 1} of {books.length}
            </span>
            <button
              onClick={goToNextBook}
              disabled={selectedBookIndex === books.length - 1}
              className="text-sm text-white/40 hover:text-white/80 disabled:opacity-30 disabled:hover:text-white/40 transition-colors flex items-center gap-1"
            >
              Next Book
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
