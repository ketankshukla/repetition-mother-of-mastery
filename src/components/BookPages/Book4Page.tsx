import { BookPageTemplate } from "./BookPageTemplate";

const description =
  "Practice hard, but more importantly, practice smart. This fourth volume arms you with the advanced cognitive techniques that separate good learners from extraordinary ones. You'll master active recall — the single most powerful learning technique ever discovered, producing two to three times more retention than passive review. You'll learn the counterintuitive science of interleaved practice, where mixing skills produces dramatically better long-term results than isolated drilling. Discover the teaching effect — why explaining what you know to others forces deeper processing and accelerates your own mastery — and learn how to build sophisticated feedback systems that transform blind effort into precision-guided improvement. From becoming your own best coach to gamifying the ancient principles of repetitive practice, this book sharpens every tool in your cognitive arsenal.";

export function Book4Page() {
  return (
    <BookPageTemplate
      bookIndex={3}
      romanNumeral="IV"
      coverImage="/book-covers/book4-cover.png"
      elaborateDescription={description}
      prevBookHref="/book-3"
      nextBookHref="/book-5"
    />
  );
}
