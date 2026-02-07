"use client";

import { useState } from "react";
import { books } from "@/data/books";
import BookCard from "./BookCard";

export default function BooksSection() {
  const [activeBook, setActiveBook] = useState<number | null>(null);

  return (
    <section id="books" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="mb-16 text-center">
          <p className="mb-3 text-xs font-semibold tracking-[0.3em] uppercase text-gold/60">
            The Complete Series
          </p>
          <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">
            Five Books. Fifty Chapters.
          </h2>
          <p className="mx-auto max-w-2xl text-foreground/50">
            Each book builds on the last — a progressive journey from the science
            of repetition to the mastery of life. Click any book to explore its
            contents.
          </p>
        </div>

        <div className="space-y-4">
          {books.map((book) => (
            <BookCard
              key={book.id}
              book={book}
              isActive={activeBook === book.id}
              onToggle={() =>
                setActiveBook(activeBook === book.id ? null : book.id)
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
