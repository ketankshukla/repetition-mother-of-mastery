"use client";

import {
  BookOpen,
  Clock,
  Quote,
  ArrowLeft,
  ArrowRight,
  ShoppingCart,
  Play,
} from "lucide-react";
import { books } from "@/data/books";
import Link from "next/link";

interface BookPageTemplateProps {
  bookIndex: number;
  romanNumeral: string;
  coverImage: string;
  elaborateDescription: string;
  prevBookHref?: string;
  nextBookHref?: string;
}

export function BookPageTemplate({
  bookIndex,
  romanNumeral,
  coverImage,
  elaborateDescription,
  prevBookHref,
  nextBookHref,
}: BookPageTemplateProps) {
  const book = books[bookIndex];

  return (
    <div className="min-h-screen bg-navy-dark text-foreground">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass-dark border-gold/20">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2 sm:gap-3 transition-all duration-300"
          >
            <ArrowLeft className="h-5 w-5 text-gold" />
            <div>
              <p className="font-serif text-xs tracking-[0.2em] uppercase text-gold sm:text-xs">
                Back to Series
              </p>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-20 px-4 sm:px-6 lg:px-8 pb-16">
        <div className="relative z-10 mx-auto max-w-4xl">
          {/* Book Header */}
          <div className="mb-8 sm:mb-12 text-center">
            <p className="font-serif text-sm tracking-[0.4em] uppercase text-gold/70 mb-3 sm:text-base">
              Book {romanNumeral}
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

          {/* Book Cover and Video — side by side on desktop, stacked on mobile */}
          <div className="mb-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center sm:items-stretch">
            {/* Book Cover */}
            <div className="w-full max-w-[240px] sm:max-w-[260px]">
              <div className="overflow-hidden rounded-xl border border-gold/30 shadow-gold-lg">
                <img
                  src={coverImage}
                  alt={`${book.title} - Book Cover`}
                  className="block w-full h-auto"
                />
              </div>
            </div>

            {/* Video Placeholder */}
            <div className="w-full max-w-[240px] sm:max-w-[260px]">
              <div className="h-full overflow-hidden rounded-xl border border-gold/20 bg-navy-light/30 flex flex-col items-center justify-center min-h-[360px]">
                <div className="relative">
                  <div className="h-14 w-14 rounded-full border-2 border-gold/40 bg-gold/10 flex items-center justify-center">
                    <Play className="h-5 w-5 text-gold ml-0.5" />
                  </div>
                </div>
                <div className="mt-4 text-center px-4">
                  <p className="font-serif text-sm font-semibold text-cream">
                    Video Coming Soon
                  </p>
                  <p className="mt-1 text-xs text-foreground/50">
                    About {book.title}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Amazon CTA */}
          <div className="mb-12 text-center">
            <a
              href="#"
              className="btn-amazon inline-flex items-center gap-2 text-sm sm:text-base"
            >
              <ShoppingCart className="h-4 w-4" />
              Buy on Amazon
            </a>
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
              {elaborateDescription}
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

          {/* Navigation */}
          <div className="flex justify-between items-center border-t border-gold/10 pt-6">
            {prevBookHref ? (
              <Link
                href={prevBookHref}
                className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Book
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Series
              </Link>
            )}
            {nextBookHref ? (
              <Link
                href={nextBookHref}
                className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors"
              >
                Next Book
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-sm text-gold/50 hover:text-gold transition-colors"
              >
                Back to Series
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
