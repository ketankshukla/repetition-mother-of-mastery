"use client";

import Hero from "@/components/Hero";
import BooksSection from "@/components/BooksSection";
import AuthorSection from "@/components/AuthorSection";
import Footer from "@/components/Footer";
import BookModal from "@/components/BookModal";
import { BookProvider } from "@/context/BookContext";

export default function Home() {
  return (
    <BookProvider>
      <div className="min-h-screen bg-navy-dark text-foreground">
        <main className="relative">
          <Hero />
          <BooksSection />
          <AuthorSection />
        </main>
        <Footer />
      </div>
      <BookModal />
    </BookProvider>
  );
}
