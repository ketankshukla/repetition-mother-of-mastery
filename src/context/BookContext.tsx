"use client";

import { createContext, useContext, useState, useCallback } from "react";

interface BookContextType {
  selectedBookIndex: number | null;
  openBook: (index: number) => void;
  closeBook: () => void;
  goToNextBook: () => void;
  goToPrevBook: () => void;
}

const BookContext = createContext<BookContextType | null>(null);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [selectedBookIndex, setSelectedBookIndex] = useState<number | null>(null);

  const openBook = useCallback((index: number) => {
    setSelectedBookIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeBook = useCallback(() => {
    setSelectedBookIndex(null);
    document.body.style.overflow = "";
  }, []);

  const goToNextBook = useCallback(() => {
    setSelectedBookIndex((prev) => (prev !== null && prev < 4 ? prev + 1 : prev));
  }, []);

  const goToPrevBook = useCallback(() => {
    setSelectedBookIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : prev));
  }, []);

  return (
    <BookContext.Provider value={{ selectedBookIndex, openBook, closeBook, goToNextBook, goToPrevBook }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBook must be used within BookProvider");
  return context;
}
