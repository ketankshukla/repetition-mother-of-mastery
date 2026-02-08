import { BookPageTemplate } from "./BookPageTemplate";

const description =
  "The final volume weaves everything together into a complete philosophy of living. Here, mastery transcends skill and becomes a way of life — integrated into your business, your relationships, your daily routines, and your deepest sense of purpose. You'll learn how the principles of repetition drive entrepreneurial success and innovation, how to design sustainable daily schedules that nurture practice across every dimension of life, and how sustained practice builds psychological resilience that transfers to every challenge you face. This book confronts the long game: how to maintain momentum across decades, how community and mentorship amplify individual practice, and how daily repetition transforms not just your skills but your character and identity. The journey culminates in the philosophy of mastery itself — the creation of a legacy that extends beyond your lifetime, and a final call to action for the rest of your life.";

export function Book5Page() {
  return (
    <BookPageTemplate
      bookIndex={4}
      romanNumeral="V"
      coverImage="/book-covers/book5-cover.png"
      elaborateDescription={description}
      prevBookHref="/book-4"
    />
  );
}
