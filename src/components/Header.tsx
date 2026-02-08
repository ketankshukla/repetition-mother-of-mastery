"use client";

import { useState, useEffect } from "react";
import { BookOpen, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { href: "#books", label: "The Books" },
    { href: "#about", label: "About" },
    { href: "#author", label: "Author" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "glass-dark border-gold/20 shadow-gold"
            : "border-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className="group flex items-center gap-3 transition-all duration-300 hover:scale-105"
          >
            <div className="relative">
              <BookOpen className="h-6 w-6 text-gold transition-all duration-300 group-hover:text-gold-light group-hover:rotate-12" />
              <div className="absolute -inset-1 animate-pulse rounded-full bg-gold/20 blur-sm" />
            </div>
            <div className="hidden sm:block">
              <p className="text-xs font-semibold tracking-[0.25em] uppercase text-gold transition-colors group-hover:text-gold-light">
                The Repetition Series
              </p>
              <p className="text-sm text-foreground/70 transition-colors group-hover:text-foreground">
                by Ketan Shukla
              </p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-medium text-foreground/70 transition-all duration-300 hover:text-gold hover:scale-105"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-gold to-gold-light transition-all duration-300 hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="relative z-50 rounded-lg p-2 text-foreground/70 transition-all duration-300 hover:bg-gold/10 hover:text-gold md:hidden"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden ${
            isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden transition-all duration-300 ease-in-out`}
        >
          <nav className="glass-dark border-t border-gold/20">
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground/70 transition-all duration-300 hover:text-gold hover:translate-x-2"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
}
