import Header from "@/components/Header";
import Hero from "@/components/Hero";
import BooksSection from "@/components/BooksSection";
import AboutSection from "@/components/AboutSection";
import AuthorSection from "@/components/AuthorSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BooksSection />
        <AboutSection />
        <AuthorSection />
      </main>
      <Footer />
    </>
  );
}
