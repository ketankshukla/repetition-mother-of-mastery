"use client";

import { Pen, BookOpen, Target, Heart } from "lucide-react";

export default function AuthorSection() {
  return (
    <section className="relative px-4 py-20 sm:py-28 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <p className="font-serif text-sm tracking-[0.4em] uppercase text-gold/70 mb-4 sm:text-base">
            The Author
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl mb-4">
            Ketan Shukla
          </h2>
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold/50 text-sm">&#10022;</span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
        </div>

        {/* Author Card */}
        <div className="relative overflow-hidden rounded-2xl border border-gold/20 glass p-6 sm:p-10">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:gap-10">
            {/* Avatar */}
            <div className="relative shrink-0">
              <div className="flex h-24 w-24 sm:h-28 sm:w-28 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10">
                <Pen className="h-12 w-12 sm:h-14 sm:w-14 text-gold" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 text-center sm:text-left space-y-4">
              <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
                Ketan Shukla is a writer, thinker, and lifelong practitioner who
                believes that mastery is not a gift reserved for the few but a
                process available to everyone.
              </p>

              <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
                His work bridges the gap between scientific research and
                practical application, translating complex neuroscience and
                psychology into actionable strategies that anyone can use to
                transform their abilities and their lives.
              </p>

              <p className="text-base leading-relaxed text-foreground/75 sm:text-lg">
                The{" "}
                <em className="text-gold font-semibold font-serif">
                  Repetition: Mother of Mastery
                </em>{" "}
                series is the culmination of years of research, practice, and
                personal experience — a comprehensive guide to the science,
                habits, techniques, and philosophy of mastery through
                repetition.
              </p>

              {/* Stats */}
              <div className="flex flex-wrap justify-center gap-3 pt-2 sm:justify-start">
                <div className="flex items-center gap-2 rounded-lg border border-gold/20 bg-gold/5 px-4 py-2">
                  <BookOpen className="h-4 w-4 text-gold" />
                  <span className="text-xs font-medium text-foreground/70 sm:text-sm">
                    5 Books
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-gold/20 bg-gold/5 px-4 py-2">
                  <Target className="h-4 w-4 text-gold" />
                  <span className="text-xs font-medium text-foreground/70 sm:text-sm">
                    50 Chapters
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dedication */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-gold/20 glass px-6 py-3">
            <Heart className="h-4 w-4 text-gold" />
            <span className="font-serif text-sm text-foreground/60 italic">
              Dedicated with love to{" "}
              <span className="text-gold font-semibold">Nimisha Acharya</span>
            </span>
            <Heart className="h-4 w-4 text-gold" />
          </div>
        </div>
      </div>
    </section>
  );
}
