"use client";

import { useState, useEffect, useRef } from "react";
import { Pen, BookOpen, Target, Heart, Sparkles } from "lucide-react";

export default function AuthorSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  return (
    <section
      ref={sectionRef}
      id="author"
      className="relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-navy opacity-30" />
        <div className="absolute top-1/2 left-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/2 right-1/3 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float"
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
              The Author
            </span>
            <Sparkles className="h-4 w-4 text-gold" />
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl heading-gradient">
            Ketan Shukla
          </h2>
        </div>

        {/* Enhanced Author Card */}
        <div
          className={`relative overflow-hidden rounded-3xl border border-gold/20 glass p-8 sm:p-16 transition-all duration-1000 hover-lift ${
            isVisible
              ? "animate-fadeInScale opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
          style={{ animationDelay: "0.3s" }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float" />
            <div
              className="absolute bottom-1/4 right-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="relative z-10">
            <div className="flex flex-col items-center gap-8 sm:flex-row sm:items-start lg:gap-12">
              {/* Enhanced Avatar */}
              <div className="relative">
                <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-2 border-gold/30 bg-gold/10 transition-all duration-300 hover:scale-110 hover:shadow-gold">
                  <Pen className="h-16 w-16 text-gold" />
                </div>
                <div className="absolute -inset-2 rounded-full border border-gold/20 animate-pulse" />
              </div>

              {/* Enhanced Content */}
              <div className="flex-1 text-center sm:text-left">
                <div className="space-y-6">
                  <p className="text-lg leading-relaxed text-foreground/80 sm:text-xl">
                    Ketan Shukla is a writer, thinker, and lifelong practitioner
                    who believes that mastery is not a gift reserved for the few
                    but a process available to everyone.
                  </p>

                  <p className="text-lg leading-relaxed text-foreground/80 sm:text-xl">
                    His work bridges the gap between scientific research and
                    practical application, translating complex neuroscience and
                    psychology into actionable strategies that anyone can use to
                    transform their abilities and their lives.
                  </p>

                  <div className="relative">
                    <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-gold/10 to-transparent animate-shimmer" />
                    <p className="relative text-lg leading-relaxed text-foreground/80 sm:text-xl">
                      The{" "}
                      <em className="text-gold/80 font-semibold">
                        Repetition: Mother of Mastery
                      </em>{" "}
                      series is the culmination of years of research, practice,
                      and personal experience — a comprehensive guide to the
                      science, habits, techniques, and philosophy of mastery
                      through repetition.
                    </p>
                  </div>
                </div>

                {/* Enhanced Stats */}
                <div className="mt-8 flex flex-wrap justify-center gap-4 sm:justify-start">
                  <div className="group relative overflow-hidden rounded-xl border border-gold/20 glass px-6 py-3 transition-all duration-300 hover:border-gold/40 hover:shadow-gold">
                    <div className="relative z-10 flex items-center gap-3">
                      <BookOpen className="h-5 w-5 text-gold" />
                      <span className="text-sm font-medium text-foreground/80">
                        5 Books Published
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>

                  <div className="group relative overflow-hidden rounded-xl border border-gold/20 glass px-6 py-3 transition-all duration-300 hover:border-gold/40 hover:shadow-gold">
                    <div className="relative z-10 flex items-center gap-3">
                      <Target className="h-5 w-5 text-gold" />
                      <span className="text-sm font-medium text-foreground/80">
                        50 Chapters
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-gold/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Dedication */}
        <div
          className={`mt-20 text-center transition-all duration-1000 ${
            isVisible
              ? "animate-fadeInScale opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
          style={{ animationDelay: "0.6s" }}
        >
          <div className="relative inline-flex items-center gap-3 rounded-full border border-gold/20 glass px-8 py-4">
            <Heart className="h-5 w-5 text-gold animate-pulse" />
            <span className="text-sm font-medium text-foreground/70">
              Dedicated with love to{" "}
              <span className="text-gold font-semibold"> Nimisha Acharya</span>
            </span>
            <Heart className="h-5 w-5 text-gold animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
