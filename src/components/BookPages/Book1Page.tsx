import { BookPageTemplate } from "./BookPageTemplate";

const description =
  "What if everything you believed about talent was wrong? In this groundbreaking first volume, we journey deep into the neuroscience of mastery — exploring how neural pathways form and strengthen with each repetition, how myelin physically wraps your nerve fibers to build speed and skill, and how neuroplasticity ensures your brain never stops growing. From Hebbian learning to the spacing effect, from the role of sleep in consolidating practice to the power of feedback loops, this book dismantles the myth of innate talent and reveals the extraordinary biological machinery that transforms ordinary repetition into extraordinary ability. You will discover why deliberate practice outperforms mindless repetition by orders of magnitude, how the four stages of competence map your journey from novice to master, and why the science of persistence is the most undervalued skill in human achievement.";

export function Book1Page() {
  return (
    <BookPageTemplate
      bookIndex={0}
      romanNumeral="I"
      coverImage="/book-covers/book1-cover.png"
      elaborateDescription={description}
      nextBookHref="/book-2"
    />
  );
}
