"use client";

import { Pen, BookOpen, Target } from "lucide-react";

export default function AuthorSection() {
  return (
    <section id="author" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-gold/60">
            The Author
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Ketan Shukla
          </h2>
        </div>

        <div className="rounded-2xl border border-white/5 bg-navy/40 p-8 sm:p-12">
          <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start">
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10">
              <Pen className="h-10 w-10 text-gold" />
            </div>
            <div>
              <p className="mb-4 leading-relaxed text-foreground/70">
                Ketan Shukla is a writer, thinker, and lifelong practitioner who
                believes that mastery is not a gift reserved for the few but a
                process available to everyone. His work bridges the gap between
                scientific research and practical application, translating
                complex neuroscience and psychology into actionable strategies
                that anyone can use to transform their abilities and their lives.
              </p>
              <p className="mb-6 leading-relaxed text-foreground/70">
                The <em>Repetition: Mother of Mastery</em> series is the
                culmination of years of research, practice, and personal
                experience — a comprehensive guide to the science, habits,
                techniques, and philosophy of mastery through repetition.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-navy-dark/50 px-4 py-2">
                  <BookOpen className="h-4 w-4 text-gold/60" />
                  <span className="text-sm text-foreground/60">
                    5 Books Published
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-navy-dark/50 px-4 py-2">
                  <Target className="h-4 w-4 text-gold/60" />
                  <span className="text-sm text-foreground/60">
                    50 Chapters
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-sm text-foreground/40">
            Dedicated with love to{" "}
            <span className="text-gold/60">Nimisha Acharya</span>
          </p>
        </div>
      </div>
    </section>
  );
}
