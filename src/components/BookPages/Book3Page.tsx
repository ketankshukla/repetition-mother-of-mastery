import { BookPageTemplate } from "./BookPageTemplate";

const description =
  "Theory meets reality in this electrifying third volume, where the science and systems of the first two books come alive inside the training rooms of elite athletes, the studios of master artists, and the classrooms of fluent linguists. Witness how ten thousand repetitions encode muscle memory so deeply it becomes effortless, how mental rehearsal activates the same neural circuits as physical practice, and how the world's greatest creative minds achieved mastery not through inspiration but through relentless daily practice. You'll explore the fascinating science of finding your artistic voice through accumulated repetitions, learn proven methods for overcoming creative blocks, and discover the revolutionary spaced repetition systems that have transformed language acquisition. The crowning insight: mastery in one domain accelerates mastery in every other — the extraordinary principle of cross-domain transfer.";

export function Book3Page() {
  return (
    <BookPageTemplate
      bookIndex={2}
      romanNumeral="III"
      elaborateDescription={description}
      prevBookHref="/book-2"
      nextBookHref="/book-4"
    />
  );
}
