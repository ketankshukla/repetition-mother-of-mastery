"use client";

import { useState, useEffect } from "react";
import { BookOpen, Sparkles, ArrowUp } from "lucide-react";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const footer = document.querySelector("footer");
    if (footer) {
      observer.observe(footer);
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (footer) {
        observer.unobserve(footer);
      }
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const bookTitles = [
    "The Foundation of Mastery",
    "The Habit Engine",
    "Mastery in Action",
    "The Cognitive Edge",
    "Living Mastery",
  ];

  return (
    <>
      {/* Enhanced Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-gold/30 glass transition-all duration-300 hover:border-gold hover:shadow-gold hover:scale-110 animate-fadeInScale"
        >
          <ArrowUp className="h-5 w-5 text-gold" />
        </button>
      )}

      <footer className="relative border-t border-gold/20 px-4 py-16 sm:px-6 lg:px-8 overflow-hidden">
        {/* Enhanced Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 gradient-navy opacity-50" />
          <div className="absolute top-1/2 left-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float" />
          <div
            className="absolute bottom-1/2 right-1/4 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl animate-float"
            style={{ animationDelay: "2s" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl">
          <div
            className={`flex flex-col items-center gap-8 text-center transition-all duration-1000 ${
              isVisible
                ? "animate-fadeInUp opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            {/* Enhanced Brand */}
            <div className="group relative">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <BookOpen className="h-6 w-6 text-gold transition-all duration-300 group-hover:text-gold-light group-hover:rotate-12" />
                  <div className="absolute -inset-1 rounded-full bg-gold/20 blur-sm animate-pulse" />
                </div>
                <p className="text-sm font-semibold tracking-[0.2em] uppercase text-gold transition-colors group-hover:text-gold-light">
                  The Repetition Series
                </p>
              </div>
            </div>

            {/* Enhanced Book List */}
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gold/10 to-transparent" />
              </div>
              <div className="relative flex flex-wrap justify-center gap-x-8 gap-y-3">
                {bookTitles.map((title, i) => (
                  <div
                    key={i}
                    className="group relative transition-all duration-300 hover:scale-105"
                  >
                    <span className="relative text-xs text-foreground/40 transition-colors group-hover:text-gold/60">
                      <span className="text-gold/50 font-medium">
                        Book {["I", "II", "III", "IV", "V"][i]}:
                      </span>{" "}
                      {title}
                    </span>
                    <div className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-gold to-transparent transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Divider */}
            <div className="relative flex items-center justify-center gap-4">
              <div className="h-px w-24 bg-gradient-to-r from-transparent via-gold/30 to-transparent animate-shimmer" />
              <Sparkles className="h-4 w-4 text-gold/50 animate-pulse" />
              <div className="h-px w-24 bg-gradient-to-r from-gold/30 to-transparent animate-shimmer" />
            </div>

            {/* Enhanced Copyright */}
            <div className="space-y-2">
              <p className="text-xs text-foreground/40 transition-colors hover:text-foreground/60">
                &copy; {new Date().getFullYear()} Ketan Shukla. All rights
                reserved.
              </p>
              <p className="text-xs text-foreground/30 italic max-w-md mx-auto leading-relaxed">
                A five-book journey from the science of repetition to the
                mastery of life.
              </p>
            </div>

            {/* Enhanced Footer Badge */}
            <div className="relative inline-flex items-center gap-2 rounded-full border border-gold/20 glass px-6 py-3">
              <div className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              <span className="text-xs font-medium text-foreground/60">
                Mastery Through Repetition
              </span>
              <div
                className="h-2 w-2 rounded-full bg-gold animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
