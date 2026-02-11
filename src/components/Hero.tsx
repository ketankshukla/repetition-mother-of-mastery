"use client";

import { ShoppingCart } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex flex-col overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-navy-light to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,168,67,0.08),transparent_60%)]" />

      <div className="relative z-10 pt-12 sm:pt-16 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          {/* Big centered logo */}
          <div className="flex justify-center mb-12 animate-fadeInUp">
            <img
              src="/images/series-logo-repetition-mother-of-mastery.png"
              alt="Repetition: Mother of Mastery"
              className="w-64 sm:w-80 md:w-96 lg:w-[28rem] h-auto object-contain drop-shadow-2xl"
            />
          </div>

          {/* Full-width complete series cover */}
          <div className="animate-fadeInUp mb-8">
            <img
              src="/images/complete-series-cover-landscape.png"
              alt="Repetition: Mother of Mastery — The Complete Series"
              className="w-full h-auto rounded-xl shadow-professional border border-white/10"
            />
          </div>

          {/* Buy Series button */}
          <div className="text-center mb-0">
            <a
              href="https://www.amazon.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-amazon inline-flex items-center justify-center gap-3 text-lg sm:text-xl px-8 sm:px-10 py-3 sm:py-4 whitespace-nowrap"
            >
              <ShoppingCart className="w-5 h-5 sm:w-6 sm:h-6" />
              Buy This Series on Amazon
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
