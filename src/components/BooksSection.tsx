"use client";

import { books } from "@/data/books";
import Link from "next/link";

const coverImages = [
  "/book-covers/book1-cover.png",
  "/book-covers/book2-cover.png",
  "/book-covers/book3-cover.png",
  "/book-covers/book4-cover.png",
  "/book-covers/book5-cover.png",
];

export default function BooksSection() {
  return (
    <section
      id="books"
      className="relative px-4 py-20 sm:py-28 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <p className="font-serif text-sm tracking-[0.4em] uppercase text-gold/70 mb-4 sm:text-base">
            The Complete Series
          </p>
          <h2 className="font-serif text-3xl font-bold text-cream sm:text-4xl lg:text-5xl mb-4">
            Five Books. Fifty Chapters.
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-12 sm:w-20 bg-gradient-to-r from-transparent to-gold/50" />
            <span className="text-gold/50 text-sm">&#10022;</span>
            <div className="h-px w-12 sm:w-20 bg-gradient-to-l from-transparent to-gold/50" />
          </div>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-foreground/60 sm:text-lg">
            Each book builds on the last — a progressive journey from the
            science of repetition to the mastery of life.
          </p>
        </div>

        {/* Books Grid — Cover + Info Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {books.map((book, index) => (
            <Link
              key={book.id}
              href={`/book-${book.id}`}
              className="group flex flex-col overflow-hidden rounded-xl border border-gold/20 bg-navy-light/40 transition-all duration-300 hover:border-gold/50 hover:shadow-gold-lg hover:scale-[1.03]"
            >
              {/* Cover Image */}
              <div className="relative aspect-[2/3] overflow-hidden">
                <img
                  src={coverImages[index]}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Card Info */}
              <div className="flex flex-col flex-1 p-4">
                <p className="font-serif text-xs tracking-[0.25em] uppercase text-gold/60 mb-1">
                  Book {book.roman}
                </p>
                <h3 className="font-serif text-base font-bold text-cream group-hover:text-gold transition-colors mb-1">
                  {book.title}
                </h3>
                <p className="text-xs text-foreground/50 italic leading-relaxed">
                  {book.subtitle}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
