"use client";

import { Brain, Repeat, Target, Sparkles, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Brain,
    title: "The Science",
    description:
      "Neural pathways, myelination, neuroplasticity — the biological machinery that transforms repetition into mastery.",
    book: "Book I",
  },
  {
    icon: Repeat,
    title: "The System",
    description:
      "Habit loops, micro-habits, environmental design — the practical system that makes daily practice automatic.",
    book: "Book II",
  },
  {
    icon: Target,
    title: "The Proof",
    description:
      "Sports, arts, language — real-world domains where repetition has produced the most extraordinary results in human history.",
    book: "Book III",
  },
  {
    icon: Sparkles,
    title: "The Edge",
    description:
      "Active recall, interleaved practice, feedback — the cognitive techniques that accelerate mastery beyond practice alone.",
    book: "Book IV",
  },
  {
    icon: TrendingUp,
    title: "The Life",
    description:
      "Routines, resilience, legacy — integrating repetition into every dimension of life for lasting transformation.",
    book: "Book V",
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-dark via-navy to-navy-dark opacity-50" />
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-gold/60">
            The Journey
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            From Science to Mastery
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/50">
            Each book in the series addresses a critical dimension of the mastery
            journey, building progressively from scientific understanding to
            life-changing integration.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <div
                key={index}
                className="group rounded-xl border border-white/5 bg-navy/40 p-6 transition-all hover:border-gold/20 hover:bg-navy-light/40"
              >
                <div className="mb-4 flex items-center justify-between">
                  <Icon className="h-8 w-8 text-gold/70 transition-colors group-hover:text-gold" />
                  <span className="text-xs font-medium tracking-wider text-foreground/30">
                    {pillar.book}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-bold text-foreground">
                  {pillar.title}
                </h3>
                <p className="text-sm leading-relaxed text-foreground/50">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 rounded-2xl border border-gold/10 bg-navy-light/30 p-8 text-center sm:p-12">
          <p className="text-lg font-light leading-relaxed text-foreground/70 italic sm:text-xl">
            &ldquo;Repetition is the mother of mastery. Not talent. Not genius.
            Not luck. Purposeful, sustained, deliberate repetition — accumulated
            over days, weeks, months, years, and decades — is the force that
            transforms ordinary human beings into extraordinary performers.&rdquo;
          </p>
          <p className="mt-4 text-sm text-gold/60">— From the Series</p>
        </div>
      </div>
    </section>
  );
}
