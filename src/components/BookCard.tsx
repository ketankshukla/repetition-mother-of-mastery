"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, BookOpen, Clock, Quote } from "lucide-react";
import type { Book } from "@/data/books";

interface BookCardProps {
  book: Book;
  isActive: boolean;
  onToggle: () => void;
}

export default function BookCard({ book, isActive, onToggle }: BookCardProps) {
  const [showChapters, setShowChapters] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-500 hover-lift ${
        isActive
          ? "border-gold/40 glass shadow-gold-lg"
          : "border-white/5 glass hover:border-gold/20"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Background Effect */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-gold/5 to-transparent transition-all duration-500 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div className="relative">
        <button
          onClick={onToggle}
          className="flex w-full items-start gap-4 p-6 text-left transition-all duration-300 sm:gap-6 sm:p-8 hover:bg-gold/5"
        >
          {/* Enhanced Book Number */}
          <div className="relative">
            <div
              className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl text-lg font-bold text-white transition-all duration-300 sm:h-16 sm:w-16 sm:text-xl"
              style={{ backgroundColor: book.color + "20", color: book.color }}
            >
              {book.roman}
            </div>
            {isHovered && (
              <div
                className="absolute -inset-2 rounded-xl animate-pulse"
                style={{ backgroundColor: book.color + "10" }}
              />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gold/60">
                Book {book.roman}
              </span>
              {isHovered && (
                <div className="h-px flex-1 bg-gradient-to-r from-gold/50 to-transparent animate-shimmer" />
              )}
            </div>
            <h3 className="mb-2 text-xl font-bold text-foreground transition-colors sm:text-2xl group-hover:text-gold">
              {book.title}
            </h3>
            <p className="text-sm text-foreground/50 transition-colors group-hover:text-foreground/70">
              {book.subtitle}
            </p>
          </div>

          {/* Enhanced Toggle Icon */}
          <div className="shrink-0 pt-2">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-gold/20 text-gold"
                  : "bg-navy/50 text-foreground/30 group-hover:bg-gold/10 group-hover:text-gold/60"
              }`}
            >
              {isActive ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </div>
          </div>
        </button>

        {/* Enhanced Expanded Content */}
        {isActive && (
          <div className="border-t border-white/5 px-6 pb-8 sm:px-8 animate-fadeInScale">
            {/* Enhanced Epigraph */}
            <div className="mt-6 rounded-xl border border-gold/10 glass-dark p-6">
              <div className="flex items-start gap-3">
                <Quote className="h-5 w-5 text-gold/50 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <p className="mb-2 text-sm font-medium leading-relaxed text-foreground/80 italic">
                    &ldquo;{book.epigraph.quote}&rdquo;
                  </p>
                  <p className="text-xs text-foreground/40">
                    — {book.epigraph.author}
                  </p>
                </div>
              </div>
            </div>

            {/* Enhanced Description */}
            <div className="mt-6 space-y-4">
              <p className="leading-relaxed text-foreground/70">
                {book.description}
              </p>

              {/* Book Stats */}
              <div className="flex items-center gap-6 text-sm text-foreground/50">
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4 text-gold/50" />
                  <span>{book.chapters.length} Chapters</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-gold/50" />
                  <span>Progressive Learning</span>
                </div>
              </div>
            </div>

            {/* Enhanced Chapters Toggle */}
            <button
              onClick={() => setShowChapters(!showChapters)}
              className="mt-6 inline-flex items-center gap-3 rounded-full border border-gold/20 bg-gold/5 px-6 py-3 text-sm font-medium text-gold transition-all duration-300 hover:border-gold/40 hover:bg-gold/10 hover:shadow-gold"
            >
              <BookOpen className="h-4 w-4" />
              {showChapters ? "Hide" : "View"} All {book.chapters.length}{" "}
              Chapters
              {showChapters ? (
                <ChevronUp className="h-3 w-3" />
              ) : (
                <ChevronDown className="h-3 w-3" />
              )}
            </button>

            {/* Enhanced Chapters List */}
            {showChapters && (
              <div className="mt-6 space-y-3 animate-fadeInScale">
                {book.chapters.map((chapter, index) => (
                  <div
                    key={chapter.number}
                    className="group/chapter rounded-xl border border-white/5 glass p-4 transition-all duration-300 hover:border-gold/10 hover:shadow-gold"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative">
                        <span
                          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold transition-all duration-300 group/chapter-hover:scale-110"
                          style={{
                            backgroundColor: book.color + "15",
                            color: book.color,
                          }}
                        >
                          {chapter.number}
                        </span>
                        {isHovered && (
                          <div
                            className="absolute -inset-1 rounded-lg animate-pulse"
                            style={{ backgroundColor: book.color + "05" }}
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-semibold text-foreground transition-colors group/chapter-hover:text-gold">
                          {chapter.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-foreground/50">
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
    </div>
  );
}
