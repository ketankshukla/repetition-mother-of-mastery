import { BookPageTemplate } from "./BookPageTemplate";

const description =
  "Understanding the science is only the beginning — now it's time to engineer the systems that make mastery inevitable. This second volume transforms neuroscience into daily action, revealing the hidden mechanics of the habit loop and showing you exactly how to harness cue, routine, and reward to build unbreakable practice habits. You'll discover why starting impossibly small creates unstoppable momentum, why consistency demolishes intensity every time, and how to design your environment so that practice becomes the path of least resistance. From tracking the compound effect of small wins to breaking through plateaus, from cultivating a growth mindset to building discipline that doesn't depend on the fleeting fire of motivation — this book is your blueprint for constructing an engine of excellence that runs on autopilot.";

export function Book2Page() {
  return (
    <BookPageTemplate
      bookIndex={1}
      romanNumeral="II"
      coverImage="/images/book2-cover.png"
      elaborateDescription={description}
      prevBookHref="/book-1"
      nextBookHref="/book-3"
    />
  );
}
