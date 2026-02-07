export interface Chapter {
  number: number;
  title: string;
  summary: string;
}

export interface Book {
  id: number;
  roman: string;
  title: string;
  subtitle: string;
  epigraph: { quote: string; author: string };
  description: string;
  chapters: Chapter[];
  color: string;
}

export const books: Book[] = [
  {
    id: 1,
    roman: "I",
    title: "The Foundation of Mastery",
    subtitle: "The Science and Psychology of Repetition",
    epigraph: {
      quote:
        "We are what we repeatedly do. Excellence, then, is not an act, but a habit.",
      author: "Aristotle",
    },
    description:
      "Discover the neuroscience behind why repetition works — how neural pathways form and strengthen, how myelin builds skill, how neuroplasticity ensures your brain never stops growing, and how deliberate practice, the spacing effect, sleep, and feedback loops accelerate the journey to mastery.",
    color: "#3b82f6",
    chapters: [
      { number: 1, title: "Why Repetition Is the Master Key", summary: "Debunks the talent myth and establishes repetition as the primary driver of mastery, supported by scientific evidence and real-world examples." },
      { number: 2, title: "The Neuroscience of Practice", summary: "Explains neural pathways, synaptic strengthening, Hebbian learning, and the role of attention in brain rewiring through repetition." },
      { number: 3, title: "Myelination — The Biology of Skill", summary: "Details how myelin enhances neural signal transmission and its role in the illusion of talent and the universality of skill development." },
      { number: 4, title: "Neuroplasticity — Your Brain's Infinite Capacity to Grow", summary: "Explains how the brain reorganizes itself through new neural connections, making mastery possible at any age." },
      { number: 5, title: "The Psychology of Persistence", summary: "Explores the psychological forces that lead people to abandon mastery and how to develop persistence as a skill." },
      { number: 6, title: "Deliberate Practice vs. Mindless Repetition", summary: "Details the four pillars of deliberate practice and contrasts it with ineffective mindless repetition." },
      { number: 7, title: "The Four Stages of Competence", summary: "Outlines the predictable path from unconscious ignorance to effortless mastery." },
      { number: 8, title: "The Spacing Effect", summary: "Explains how distributing practice over time leads to significantly better retention than cramming." },
      { number: 9, title: "The Role of Sleep in Consolidating Mastery", summary: "Details how sleep actively processes and strengthens neural patterns formed during practice." },
      { number: 10, title: "Feedback Loops — The Engine of Accelerated Growth", summary: "Explains how systematic feedback transforms repetition into a targeted, efficient path to mastery." },
    ],
  },
  {
    id: 2,
    roman: "II",
    title: "The Habit Engine",
    subtitle: "Building Habits and the Journey to Excellence",
    epigraph: {
      quote:
        "You do not rise to the level of your goals. You fall to the level of your systems.",
      author: "James Clear",
    },
    description:
      "Transform scientific understanding into daily action. Engineer the habit loop, embrace micro-habits, prove that consistency beats intensity, design your environment for success, and build discipline that doesn't depend on willpower.",
    color: "#10b981",
    chapters: [
      { number: 11, title: "The Habit Loop — Cue, Routine, Reward", summary: "The neurological cycle that drives all habitual behavior and how to engineer it for consistent practice." },
      { number: 12, title: "Starting Small — The Power of Micro-Habits", summary: "Why starting impossibly small creates unstoppable momentum that carries you far beyond the initial commitment." },
      { number: 13, title: "Consistency Over Intensity", summary: "Scientific proof that daily moderate effort produces dramatically better results than sporadic intense bursts." },
      { number: 14, title: "Environmental Design", summary: "How to restructure your surroundings so practice becomes the path of least resistance." },
      { number: 15, title: "Tracking Progress — The Compound Effect of Small Wins", summary: "How tracking incremental progress harnesses the extraordinary power of tiny daily improvements." },
      { number: 16, title: "Overcoming Plateaus", summary: "Proven strategies for identifying, understanding, and breaking through stagnation." },
      { number: 17, title: "The Growth Mindset", summary: "How to rewire your relationship with failure so setbacks become fuel for growth." },
      { number: 18, title: "Intrinsic vs. Extrinsic Motivation", summary: "The critical difference between motivation that burns out and motivation that sustains effort for a lifetime." },
      { number: 19, title: "Discipline Over Motivation", summary: "Why building systems beats relying on willpower for consistent practice." },
      { number: 20, title: "The Journey from Novice to Expert", summary: "A stage-by-stage map from your first awkward attempt to fluid, effortless expertise." },
    ],
  },
  {
    id: 3,
    roman: "III",
    title: "Mastery in Action",
    subtitle: "Sports, Arts, and Language",
    epigraph: {
      quote:
        "I fear not the man who has practiced 10,000 kicks once, but I fear the man who has practiced one kick 10,000 times.",
      author: "Bruce Lee",
    },
    description:
      "See the science and habits in action — inside the training rooms of elite athletes, the studios of master artists, and the classrooms of fluent linguists. Discover muscle memory, mental rehearsal, creative mastery, and the extraordinary principle of cross-domain transfer.",
    color: "#f59e0b",
    chapters: [
      { number: 21, title: "Repetition in Sports — Peak Performance", summary: "Inside the training regimens of the world's greatest athletes and how repetitive practice builds elite performance." },
      { number: 22, title: "Muscle Memory — The Body's Path to Automaticity", summary: "How thousands of repetitions encode complex motor programs so deeply they become effortless." },
      { number: 23, title: "Mental Rehearsal — The Power of Visualization", summary: "The discovery that your brain cannot fully distinguish between vivid mental practice and physical practice." },
      { number: 24, title: "Creative Mastery — How Repetition Fuels Artistic Genius", summary: "How the world's greatest artists achieved mastery through daily creative practice, not inspiration." },
      { number: 25, title: "Finding Your Artistic Voice", summary: "How thousands of creative repetitions accumulate into a unique perspective that belongs to you alone." },
      { number: 26, title: "Overcoming Creative Blocks", summary: "Why returning to repetitive fundamentals is the most reliable antidote to creative stagnation." },
      { number: 27, title: "Language Acquisition — How Repetition Builds Fluency", summary: "The science of how vocabulary, grammar, and pronunciation are built through systematic repetitive exposure." },
      { number: 28, title: "Spaced Repetition Systems", summary: "The technology that has revolutionized accelerated learning and made fluency achievable faster." },
      { number: 29, title: "Active vs. Passive Repetition", summary: "Why active engagement produces three times the results of passive exposure." },
      { number: 30, title: "Cross-Domain Mastery", summary: "The extraordinary principle that mastery in one domain accelerates mastery in every other domain." },
    ],
  },
  {
    id: 4,
    roman: "IV",
    title: "The Cognitive Edge",
    subtitle: "Memory, Learning, and Feedback",
    epigraph: {
      quote:
        "The right sort of practice carried out over a sufficient period of time leads to improvement. Nothing else.",
      author: "Anders Ericsson",
    },
    description:
      "Sharpen your learning with advanced cognitive techniques — active recall, interleaved practice, the teaching effect, and advanced feedback strategies. Practice hard, but more importantly, practice smart.",
    color: "#8b5cf6",
    chapters: [
      { number: 31, title: "Repetition and Memory — How the Brain Stores What Matters", summary: "The neuroscience of memory formation and the critical role repetition plays in what you remember." },
      { number: 32, title: "Encoding, Storage, and Retrieval", summary: "The three pillars of retention and how to optimize each stage for maximum learning efficiency." },
      { number: 33, title: "Active Recall", summary: "The single most powerful learning technique ever discovered, producing 2-3x more retention than rereading." },
      { number: 34, title: "Interleaved Practice", summary: "The counterintuitive discovery that mixing skills produces better long-term results than drilling one at a time." },
      { number: 35, title: "The Teaching Effect", summary: "Why explaining what you know to others forces deeper processing and accelerates your own mastery." },
      { number: 36, title: "The Role of Feedback", summary: "How systematic correction transforms effort into excellence with precision-guided practice." },
      { number: 37, title: "Self-Assessment — Becoming Your Own Best Coach", summary: "How to develop the skills to guide your own improvement without external coaching." },
      { number: 38, title: "The Repetitive Cycle in Education", summary: "How the principles of repetition apply from primary school through professional development." },
      { number: 39, title: "Overcoming Boredom", summary: "Proven strategies for staying engaged when repetitive practice feels monotonous." },
      { number: 40, title: "Gamification and Technology", summary: "How modern tools can supercharge the ancient principles of repetitive practice." },
    ],
  },
  {
    id: 5,
    roman: "V",
    title: "Living Mastery",
    subtitle: "Routines, Growth, and Legacy",
    epigraph: {
      quote: "The secret of your future is hidden in your daily routine.",
      author: "Mike Murdock",
    },
    description:
      "Integrate everything into a complete life. Apply mastery to business, build sustainable routines, develop resilience, maintain decades-long growth, create legacy, and discover the philosophy that transforms practice into a way of living.",
    color: "#ef4444",
    chapters: [
      { number: 41, title: "Repetition in Business and Entrepreneurship", summary: "How the principles of mastery apply to professional success, innovation, and leadership." },
      { number: 42, title: "Building Daily Routines for Mastery", summary: "How to design a sustainable daily schedule that integrates practice into every dimension of life." },
      { number: 43, title: "Repetition and Resilience — Building Mental Toughness", summary: "How sustained practice builds psychological resilience that transfers to every life challenge." },
      { number: 44, title: "Long-Term Growth — Maintaining Momentum Across Decades", summary: "Strategies for sustaining growth and avoiding stagnation across the decades-long mastery timeline." },
      { number: 45, title: "The Social Dimension of Mastery", summary: "How community, mentorship, and collaboration amplify the power of individual practice." },
      { number: 46, title: "Repetition and Personal Transformation", summary: "How daily practice transforms not just your skills but your character, identity, and life." },
      { number: 47, title: "Creating a Legacy of Mastery", summary: "How to pass on what you have learned and create impact that extends beyond your lifetime." },
      { number: 48, title: "The Philosophy of Mastery", summary: "The deeper meaning of the mastery journey and its connection to human fulfillment." },
      { number: 49, title: "Integrating Mind, Body, and Spirit", summary: "How physical practice, cognitive development, and personal growth unite into holistic mastery." },
      { number: 50, title: "The Final Repetition — A Synthesis and a Call to Action", summary: "A complete synthesis of the five-book series and a call to action for the rest of your life." },
    ],
  },
];
