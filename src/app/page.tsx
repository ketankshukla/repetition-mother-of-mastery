import Hero from "@/components/Hero";
import BooksSection from "@/components/BooksSection";
import AuthorSection from "@/components/AuthorSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-navy-dark text-foreground">
      <main className="relative">
        <Hero />
        <BooksSection />
        <AuthorSection />
      </main>
      <Footer />
    </div>
  );
}
