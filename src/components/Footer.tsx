"use client";

import { BookOpen } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center gap-6 text-center">
          <div className="flex items-center gap-3">
            <BookOpen className="h-5 w-5 text-gold/60" />
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold/60">
              The Repetition Series
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {[
              "The Foundation of Mastery",
              "The Habit Engine",
              "Mastery in Action",
              "The Cognitive Edge",
              "Living Mastery",
            ].map((title, i) => (
              <span key={i} className="text-xs text-foreground/30">
                Book {["I", "II", "III", "IV", "V"][i]}: {title}
              </span>
            ))}
          </div>
          <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
          <p className="text-xs text-foreground/30">
            &copy; {new Date().getFullYear()} Ketan Shukla. All rights reserved.
          </p>
          <p className="text-xs text-foreground/20 italic">
            A five-book journey from the science of repetition to the mastery of
            life.
          </p>
        </div>
      </div>
    </footer>
  );
}
