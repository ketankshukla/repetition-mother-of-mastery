"use client";

import { useEffect } from "react";
import Hero from "@/components/Hero";
import BooksSection from "@/components/BooksSection";
import AuthorSection from "@/components/AuthorSection";
import Footer from "@/components/Footer";
import BookModal from "@/components/BookModal";
import { BookProvider } from "@/context/BookContext";

export default function Home() {
  // Prevent pinch-zoom globally on all touch devices
  useEffect(() => {
    const preventZoom = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.preventDefault();
      }
    };
    const preventGesture = (e: Event) => {
      e.preventDefault();
    };
    document.addEventListener("touchmove", preventZoom, { passive: false });
    document.addEventListener("gesturestart", preventGesture);
    document.addEventListener("gesturechange", preventGesture);
    document.addEventListener("gestureend", preventGesture);
    return () => {
      document.removeEventListener("touchmove", preventZoom);
      document.removeEventListener("gesturestart", preventGesture);
      document.removeEventListener("gesturechange", preventGesture);
      document.removeEventListener("gestureend", preventGesture);
    };
  }, []);

  return (
    <BookProvider>
      <div className="min-h-screen bg-black text-foreground">
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
