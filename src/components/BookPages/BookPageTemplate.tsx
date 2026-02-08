"use client";

import { BookOpen, Clock, Quote, ArrowLeft, ArrowRight, Sparkles, Play } from "lucide-react";
import { books } from "@/data/books";
import Link from "next/link";

interface BookPageTemplateProps {
  bookIndex: number;
  romanNumeral: string;
  coverImage?: string;
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
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <ArrowLeft className="h-6 w-6 text-gold transition-all duration-300 group-hover:text-gold-light" />
              <div className="absolute -inset-1 animate-pulse rounded-full bg-gold/20 blur-sm" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold transition-colors group-hover:text-gold-light">
                Back to Series
              </p>
              <p className="text-sm text-foreground/70 transition-colors group-hover:text-foreground">
                The Repetition Series
              </p>
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative pt-24 px-4 sm:px-6 lg:px-8 pb-16">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 gradient-navy" />
          <div className="absolute top-1/3 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float" />
          <div
            className="absolute bottom-1/3 right-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-5xl">
          {/* Book Header */}
          <div className="mb-12 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-4 py-2 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="text-sm font-semibold tracking-[0.35em] uppercase text-gold">
                Book {romanNumeral}
              </span>
              <Sparkles className="h-4 w-4 text-gold" />
            </div>

            <h1 className="mb-4 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl heading-gradient">
              {book.title}
            </h1>

            <p className="text-lg font-light tracking-[0.2em] uppercase text-gold sm:text-xl lg:text-2xl">
              {book.subtitle}
            </p>
          </div>

          {/* Book Cover and Video Section */}
          <div className="mb-16 flex flex-col items-center gap-8 lg:flex-row lg:justify-center lg:items-stretch">
            {/* Book Cover */}
            <div className="w-full max-w-xs">
              <div className="h-full overflow-hidden rounded-2xl border border-gold/30 shadow-gold-lg">
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt={`${book.title} - Book Cover`}
                    className="block w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center bg-navy-light/30 p-8" style={{ aspectRatio: "3/4" }}>
                    <div className="relative mb-4">
                      <div
                        className="flex h-20 w-20 items-center justify-center rounded-2xl text-3xl font-bold"
                        style={{ backgroundColor: book.color + "20", color: book.color }}
                      >
                        {book.roman}
                      </div>
                      <div className="absolute -inset-2 rounded-2xl animate-pulse" style={{ backgroundColor: book.color + "10" }} />
                    </div>
                    <p className="text-lg font-bold text-foreground text-center">{book.title}</p>
                    <p className="mt-1 text-sm text-foreground/50 text-center">{book.subtitle}</p>
                    <div className="mt-4 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
                      <p className="text-xs font-medium text-gold">Cover Coming Soon</p>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* YouTube Video Placeholder */}
            <div className="w-full max-w-xs">
              <div className="h-full overflow-hidden rounded-2xl border border-gold/30 shadow-gold-lg bg-navy-light/30">
                <div className="flex flex-col items-center justify-center h-full min-h-[400px]" style={{ aspectRatio: "3/4" }}>
                  <div className="relative">
                    <div className="h-16 w-16 rounded-full border-4 border-gold/50 bg-gold/10 flex items-center justify-center">
                      <Play className="h-6 w-6 text-gold ml-1" />
                    </div>
                    <div className="absolute -inset-3 rounded-full bg-gold/10 blur-xl animate-pulse" />
                  </div>
                  <div className="mt-6 text-center px-4">
                    <p className="text-base font-semibold text-foreground">
                      Video Coming Soon
                    </p>
                    <p className="mt-2 text-sm text-foreground/60">
                      Portrait mode video about
                      <br />
                      {book.title}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Elegant Divider */}
          <div className="flex items-center justify-center gap-4 mb-16">
            <div className="h-px flex-1 max-w-24 bg-gradient-to-r from-transparent to-gold/40" />
            <Sparkles className="h-4 w-4 text-gold/40" />
            <div className="h-px flex-1 max-w-24 bg-gradient-to-l from-transparent to-gold/40" />
          </div>

          {/* Epigraph */}
          <div className="mb-12 mx-auto max-w-3xl">
            <div className="rounded-2xl border border-gold/20 glass-dark p-8 sm:p-10">
              <div className="flex flex-col items-center text-center">
                <Quote className="h-8 w-8 text-gold/30 mb-4" />
                <p className="text-lg sm:text-xl font-medium leading-relaxed text-foreground/80 italic">
                  &ldquo;{book.epigraph.quote}&rdquo;
                </p>
                <div className="mt-4 h-px w-16 bg-gold/30" />
                <p className="mt-4 text-sm tracking-wider uppercase text-gold/60">
                  — {book.epigraph.author}
                </p>
              </div>
            </div>
          </div>

          {/* About This Book */}
          <div className="mb-16 mx-auto max-w-3xl">
            <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl text-center">
              About This Book
            </h2>
            <div className="h-px w-24 mx-auto mb-8 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
            <p className="text-lg leading-relaxed text-foreground/75 text-center sm:text-left">
              {elaborateDescription}
            </p>
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-foreground/50">
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

          {/* Chapters Section */}
          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-foreground sm:text-3xl text-center">
              Chapters
            </h2>
            <div className="h-px w-24 mx-auto mb-10 bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

            <div className="grid grid-cols-1 gap-4 sm:gap-5">
              {book.chapters.map((chapter) => (
                <div
                  key={chapter.number}
                  className="group rounded-xl border border-white/5 glass p-5 sm:p-6 transition-all duration-300 hover:border-gold/20 hover:shadow-gold"
                >
                  <div className="flex items-start gap-4 sm:gap-5">
                    <span
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sm font-bold"
                      style={{
                        backgroundColor: book.color + "15",
                        color: book.color,
                      }}
                    >
                      {chapter.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base font-semibold text-foreground group-hover:text-gold transition-colors">
                        {chapter.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/50">
                        {chapter.summary}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center border-t border-white/5 pt-8">
            {prevBookHref ? (
              <Link
                href={prevBookHref}
                className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Previous Book
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Series
              </Link>
            )}
            {nextBookHref ? (
              <Link
                href={nextBookHref}
                className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors"
              >
                Next Book
                <ArrowRight className="h-4 w-4" />
              </Link>
            ) : (
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-gold/60 hover:text-gold transition-colors"
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
