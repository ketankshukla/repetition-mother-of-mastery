"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { books } from "@/data/books";
import { useBook } from "@/context/BookContext";

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { openBook } = useBook();

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="relative bg-black border-t border-gold/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/series-logo-repetition-mother-of-mastery.png"
                alt="Repetition: Mother of Mastery"
                className="w-8 h-8 object-contain"
              />
              <span className="text-lg font-bold gradient-text-gold">
                The Repetition Series
              </span>
            </div>
            <p className="text-cream/40 text-base leading-relaxed">
              A five-book journey from the science of repetition to the mastery
              of life.
            </p>
          </div>

          {/* Book links */}
          <div>
            <h4 className="text-cream font-medium text-base uppercase tracking-widest mb-4">
              The Books
            </h4>
            <div className="space-y-1">
              {books.map((book, index) => (
                <button
                  key={book.id}
                  onClick={() => openBook(index)}
                  className="text-left text-cream/40 hover:text-gold transition-colors text-sm py-1 block truncate w-full"
                >
                  {book.roman}. {book.title}
                </button>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cream font-medium text-base uppercase tracking-widest mb-4">
              Links
            </h4>
            <div className="space-y-2">
              <a
                href="https://www.amazon.com/dp/B0GNZ7B92N"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cream/40 hover:text-gold transition-colors text-base"
              >
                Buy on Amazon
              </a>
              <a
                href="#books"
                className="block text-cream/40 hover:text-gold transition-colors text-base"
              >
                Browse Books
              </a>
              <a
                href="#author"
                className="block text-cream/40 hover:text-gold transition-colors text-base"
              >
                About the Author
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gold/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/30 text-sm">
            &copy; {new Date().getFullYear()} Ketan Shukla. All rights reserved.
          </p>
          <p className="text-cream/20 text-sm italic font-serif">
            &ldquo;Repetition is the mother of mastery.&rdquo;
          </p>
        </div>
      </div>

      {/* Scroll to top */}
      {showScrollTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full glass shadow-gold flex items-center justify-center hover:bg-gold/10 transition-all animate-fadeInScale z-50"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5 text-gold" />
        </button>
      )}
    </footer>
  );
}
