"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  isActive: boolean;
  onToggle: () => void;
}

export default function BookCard({ book, isActive, onToggle }: BookCardProps) {
  const [showChapters, setShowChapters] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 ${
        isActive
          ? "border-gold/40 bg-navy-light/80 shadow-lg shadow-gold/5"
          : "border-white/5 bg-navy/50 hover:border-gold/20"
      }`}
    >
      <button
        onClick={onToggle}
        className="flex w-full items-start gap-4 p-6 text-left sm:gap-6 sm:p-8"
      >
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white sm:h-16 sm:w-16"
          style={{ backgroundColor: book.color + "20", color: book.color }}
        >
          {book.roman}
        </div>
        <div className="min-w-0 flex-1">
          <p className="mb-1 text-xs font-semibold tracking-[0.2em] uppercase text-gold/60">
            Book {book.roman}
          </p>
          <h3 className="mb-1 text-xl font-bold text-foreground sm:text-2xl">
            {book.title}
          </h3>
          <p className="text-sm text-foreground/50">{book.subtitle}</p>
        </div>
        <div className="shrink-0 pt-2">
          {isActive ? (
            <ChevronUp className="h-5 w-5 text-gold" />
          ) : (
            <ChevronDown className="h-5 w-5 text-foreground/30" />
          )}
        </div>
      </button>

      {isActive && (
        <div className="border-t border-white/5 px-6 pb-8 sm:px-8">
          <div className="mt-6 rounded-xl border border-gold/10 bg-navy-dark/50 p-5">
            <p className="mb-1 text-xs font-medium tracking-wider text-gold/50 uppercase italic">
              &ldquo;{book.epigraph.quote}&rdquo;
            </p>
            <p className="text-xs text-foreground/40">
              — {book.epigraph.author}
            </p>
          </div>

          <p className="mt-6 leading-relaxed text-foreground/70">
            {book.description}
          </p>

          <button
            onClick={() => setShowChapters(!showChapters)}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-gold transition-colors hover:text-gold-light"
          >
            <BookOpen className="h-4 w-4" />
            {showChapters ? "Hide" : "View"} All {book.chapters.length} Chapters
            {showChapters ? (
              <ChevronUp className="h-3 w-3" />
            ) : (
              <ChevronDown className="h-3 w-3" />
            )}
          </button>

          {showChapters && (
            <div className="mt-4 space-y-3">
              {book.chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="rounded-lg border border-white/5 bg-navy-dark/40 p-4 transition-colors hover:border-gold/10"
                >
                  <div className="flex items-start gap-3">
                    <span
                      className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-xs font-bold"
                      style={{
                        backgroundColor: book.color + "15",
                        color: book.color,
                      }}
                    >
                      {chapter.number}
                    </span>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">
                        {chapter.title}
                      </h4>
                      <p className="mt-1 text-xs leading-relaxed text-foreground/50">
                        {chapter.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
