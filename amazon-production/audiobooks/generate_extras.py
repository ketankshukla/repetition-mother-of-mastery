"""
Generate opening credits, closing credits, and retail sample audio files for all books.
Voice: en-US-AvaNeural
"""
import asyncio
import edge_tts
import os
import re

VOICE = "en-US-AvaNeural"

BOOKS = [
    {
        "name": "Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition",
        "source": r"E:\repetition-mother-of-mastery\book-series\Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition",
        "output": r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition"
    },
    {
        "name": "Repetition Mother of Mastery Book 2 - Building Habits and the Journey to Excellence",
        "source": r"E:\repetition-mother-of-mastery\book-series\Repetition Mother of Mastery Book 2 - Building Habits and the Journey to Excellence",
        "output": r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 2 - Building Habits and the Journey to Excellence"
    },
    {
        "name": "Repetition Mother of Mastery Book 3 - Mastery in Action — Sports, Arts, and Language",
        "source": r"E:\repetition-mother-of-mastery\book-series\Repetition Mother of Mastery Book 3 - Mastery in Action — Sports, Arts, and Language",
        "output": r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 3 - Mastery in Action — Sports, Arts, and Language"
    },
    {
        "name": "Repetition Mother of Mastery Book 4 - The Cognitive Edge — Memory, Learning, and Feedback",
        "source": r"E:\repetition-mother-of-mastery\book-series\Repetition Mother of Mastery Book 4 - The Cognitive Edge — Memory, Learning, and Feedback",
        "output": r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 4 - The Cognitive Edge — Memory, Learning, and Feedback"
    },
    {
        "name": "Repetition Mother of Mastery Book 5 - Living Mastery — Routines, Growth, and Legacy",
        "source": r"E:\repetition-mother-of-mastery\book-series\Repetition Mother of Mastery Book 5 - Living Mastery — Routines, Growth, and Legacy",
        "output": r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 5 - Living Mastery — Routines, Growth, and Legacy"
    }
]


def clean_markdown(text):
    """Remove markdown formatting for TTS."""
    text = re.sub(r'^#+\s*', '', text, flags=re.MULTILINE)
    text = re.sub(r'\*\*([^*]+)\*\*', r'\1', text)
    text = re.sub(r'\*([^*]+)\*', r'\1', text)
    text = re.sub(r'_([^_]+)_', r'\1', text)
    text = re.sub(r'\[([^\]]+)\]\([^)]+\)', r'\1', text)
    text = re.sub(r'^[-*]\s+', '', text, flags=re.MULTILINE)
    text = re.sub(r'^---+$', '', text, flags=re.MULTILINE)
    text = re.sub(r'\n{3,}', '\n\n', text)
    return text.strip()


async def generate_audio(text, output_path):
    """Generate audio from text using edge-tts."""
    communicate = edge_tts.Communicate(text, VOICE)
    await communicate.save(output_path)


async def process_book(book):
    """Process a single book's extra files."""
    print(f"\nProcessing: {book['name']}")
    
    os.makedirs(book['output'], exist_ok=True)
    
    # Opening credits
    opening_path = os.path.join(book['source'], 'front_matter', 'opening_credits.md')
    if os.path.exists(opening_path):
        with open(opening_path, 'r', encoding='utf-8') as f:
            text = clean_markdown(f.read())
        output_file = os.path.join(book['output'], '00-opening-credits.mp3')
        print(f"  Generating: 00-opening-credits.mp3...")
        await generate_audio(text, output_file)
        print(f"  Saved: 00-opening-credits.mp3")
    else:
        print(f"  Skipping opening credits (file not found)")
    
    # Closing credits
    closing_path = os.path.join(book['source'], 'back_matter', 'closing_credits.md')
    if os.path.exists(closing_path):
        with open(closing_path, 'r', encoding='utf-8') as f:
            text = clean_markdown(f.read())
        output_file = os.path.join(book['output'], '23-closing-credits.mp3')
        print(f"  Generating: 23-closing-credits.mp3...")
        await generate_audio(text, output_file)
        print(f"  Saved: 23-closing-credits.mp3")
    else:
        print(f"  Skipping closing credits (file not found)")
    
    # Retail sample
    sample_path = os.path.join(book['source'], 'front_matter', 'retail_sample.md')
    if os.path.exists(sample_path):
        with open(sample_path, 'r', encoding='utf-8') as f:
            text = clean_markdown(f.read())
        output_file = os.path.join(book['output'], '24-retail-sample.mp3')
        print(f"  Generating: 24-retail-sample.mp3...")
        await generate_audio(text, output_file)
        print(f"  Saved: 24-retail-sample.mp3")
    else:
        print(f"  Skipping retail sample (file not found)")


async def main():
    for book in BOOKS:
        await process_book(book)
    print("\nDone generating all extra audio files.")


if __name__ == "__main__":
    asyncio.run(main())
