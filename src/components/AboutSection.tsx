"use client";

import { useState, useEffect, useRef } from "react";
import {
  Brain,
  Repeat,
  Target,
  Sparkles,
  TrendingUp,
  Quote,
} from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "The Science",
    description:
      "Neural pathways, myelination, neuroplasticity — the biological machinery that transforms repetition into mastery.",
    book: "Book I",
    color: "#3b82f6",
  },
  {
    icon: Repeat,
    title: "The System",
    description:
      "Habit loops, micro-habits, environmental design — the practical system that makes daily practice automatic.",
    book: "Book II",
    color: "#10b981",
  },
  {
    icon: Target,
    title: "The Proof",
    description:
      "Sports, arts, language — real-world domains where repetition has produced the most extraordinary results in human history.",
    book: "Book III",
    color: "#f59e0b",
  },
  {
    icon: Sparkles,
    title: "The Edge",
    description:
      "Active recall, interleaved practice, feedback — the cognitive techniques that accelerate mastery beyond practice alone.",
    book: "Book IV",
    color: "#8b5cf6",
  },
  {
    icon: TrendingUp,
    title: "The Life",
    description:
      "Routines, resilience, legacy — integrating repetition into every dimension of life for lasting transformation.",
    book: "Book V",
    color: "#ef4444",
  },
];

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);
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
      id="about"
      className="relative px-4 py-32 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 gradient-navy opacity-50" />
        <div className="absolute top-1/3 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float" />
        <div
          className="absolute bottom-1/3 right-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float"
          style={{ animationDelay: "2.5s" }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
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
              The Journey
            </span>
            <Sparkles className="h-4 w-4 text-gold" />
          </div>

          <h2 className="mb-6 text-3xl font-bold text-foreground sm:text-4xl lg:text-5xl heading-gradient">
            From Science to Mastery
          </h2>

          <p className="mx-auto max-w-3xl text-lg leading-relaxed text-foreground/70 sm:text-xl">
            Each book in the series addresses a critical dimension of the
            mastery journey, building progressively from scientific
            understanding to life-changing integration.
          </p>
        </div>

        {/* Enhanced Pillars Grid */}
        <div className="mb-20">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className={`group relative transition-all duration-700 ${
                    isVisible
                      ? "animate-fadeInUp opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  } hover-lift`}
                  style={{ animationDelay: `${0.2 + index * 0.1}s` }}
                  onMouseEnter={() => setHoveredPillar(index)}
                  onMouseLeave={() => setHoveredPillar(null)}
                >
                  <div className="relative h-full rounded-2xl border border-white/5 glass p-6 transition-all duration-300 hover:border-gold/20">
                    {/* Animated Background */}
                    <div
                      className={`absolute inset-0 rounded-2xl transition-all duration-500 ${
                        hoveredPillar === index ? "opacity-100" : "opacity-0"
                      }`}
                      style={{ backgroundColor: pillar.color + "10" }}
                    />

                    <div className="relative z-10">
                      <div className="mb-6 flex items-start justify-between">
                        <div className="relative">
                          <div
                            className="flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                            style={{ backgroundColor: pillar.color + "20" }}
                          >
                            <Icon
                              className="h-6 w-6 transition-colors"
                              style={{ color: pillar.color }}
                            />
                          </div>
                          {hoveredPillar === index && (
                            <div
                              className="absolute -inset-2 rounded-xl animate-pulse"
                              style={{ backgroundColor: pillar.color + "10" }}
                            />
                          )}
                        </div>
                        <span className="text-xs font-medium tracking-wider text-foreground/30 uppercase">
                          {pillar.book}
                        </span>
                      </div>

                      <h3 className="mb-3 text-lg font-bold text-foreground transition-colors group-hover:text-gold">
                        {pillar.title}
                      </h3>

                      <p className="text-sm leading-relaxed text-foreground/60">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Quote Section */}
        <div
          className={`relative overflow-hidden rounded-3xl border border-gold/20 glass-dark p-8 text-center sm:p-16 transition-all duration-1000 ${
            isVisible
              ? "animate-fadeInScale opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
          style={{ animationDelay: "1s" }}
        >
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float" />
            <div
              className="absolute bottom-1/2 right-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float"
              style={{ animationDelay: "3s" }}
            />
          </div>

          <div className="relative z-10">
            <div className="mb-6 flex justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 bg-gold/10">
                <Quote className="h-6 w-6 text-gold" />
              </div>
            </div>

            <p className="mb-6 text-lg font-light leading-relaxed text-foreground/80 italic sm:text-xl lg:text-2xl">
              &ldquo;Repetition is the mother of mastery. Not talent. Not
              genius. Not luck. Purposeful, sustained, deliberate repetition —
              accumulated over days, weeks, months, years, and decades — is the
              force that transforms ordinary human beings into extraordinary
              performers.&rdquo;
            </p>

            <div className="flex items-center justify-center gap-2">
              <div className="h-px w-16 bg-gradient-to-r from-transparent via-gold to-transparent animate-shimmer" />
              <span className="text-sm font-medium text-gold/60">
                From the Series
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-gold to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
