"""
Generate audiobook MP3 files from markdown source files.
Voice: en-US-AvaNeural

Usage:
    python generate_audiobooks.py                    # Generate all books
    python generate_audiobooks.py --book 1           # Generate specific book
    python generate_audiobooks.py --book 1 --chapter 3  # Generate specific chapter
"""
import asyncio
import edge_tts
import os
import re
import argparse

VOICE = "en-US-AvaNeural"

BOOKS = [
    {
        "name": "Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition",
        "short_title": "The Science and Psychology of Repetition"
    },
    {
        "name": "Repetition Mother of Mastery Book 2 - Building Habits and the Journey to Excellence",
        "short_title": "Building Habits and the Journey to Excellence"
    },
    {
        "name": "Repetition Mother of Mastery Book 3 - Mastery in Action — Sports, Arts, and Language",
        "short_title": "Mastery in Action"
    },
    {
        "name": "Repetition Mother of Mastery Book 4 - The Cognitive Edge — Memory, Learning, and Feedback",
        "short_title": "The Cognitive Edge"
    },
    {
        "name": "Repetition Mother of Mastery Book 5 - Living Mastery — Routines, Growth, and Legacy",
        "short_title": "Living Mastery"
    }
]

BASE_SOURCE = r"E:\repetition-mother-of-mastery\book-series"
BASE_OUTPUT = r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\output"


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


async def process_file(source_path, output_path, file_num, file_name):
    """Process a single markdown file to audio."""
    if not os.path.exists(source_path):
        print(f"  Skipping (not found): {source_path}")
        return False
    
    with open(source_path, 'r', encoding='utf-8') as f:
        text = clean_markdown(f.read())
    
    if not text.strip():
        print(f"  Skipping (empty): {file_name}")
        return False
    
    output_file = os.path.join(output_path, f"{file_num:02d}-{file_name}.mp3")
    print(f"  Generating: {file_num:02d}-{file_name}.mp3...")
    await generate_audio(text, output_file)
    return True


async def process_book(book_index):
    """Process a single book."""
    book = BOOKS[book_index]
    source_dir = os.path.join(BASE_SOURCE, book["name"])
    output_dir = os.path.join(BASE_OUTPUT, book["name"])
    
    os.makedirs(output_dir, exist_ok=True)
    
    print(f"\n{'='*60}")
    print(f"Processing: {book['name']}")
    print(f"{'='*60}")
    
    file_num = 1
    
    # Front matter order
    front_matter = [
        ("copyright", "copyright"),
        ("dedication", "dedication"),
        ("epigraph", "epigraph"),
        ("preface", "preface"),
        ("prologue", "prologue"),
        ("introduction", "introduction"),
    ]
    
    print("\n--- Front Matter ---")
    for md_name, output_name in front_matter:
        source_path = os.path.join(source_dir, "front_matter", f"{md_name}.md")
        if await process_file(source_path, output_dir, file_num, output_name):
            file_num += 1
    
    # Chapters
    print("\n--- Chapters ---")
    chapters_dir = os.path.join(source_dir, "chapters")
    if os.path.exists(chapters_dir):
        chapter_files = sorted([f for f in os.listdir(chapters_dir) if f.endswith('.md')])
        for chapter_file in chapter_files:
            source_path = os.path.join(chapters_dir, chapter_file)
            chapter_name = chapter_file.replace('.md', '').replace('_', '-')
            if await process_file(source_path, output_dir, file_num, chapter_name):
                file_num += 1
    
    # Back matter order
    back_matter = [
        ("epilogue", "epilogue"),
        ("authors_note", "authors-note"),
        ("also_by", "also-by-ketan-shukla"),
        ("about_the_author", "about-the-author"),
        ("connect", "connect-with-ketan-shukla"),
        ("review_request", "a-quick-favor"),
    ]
    
    print("\n--- Back Matter ---")
    for md_name, output_name in back_matter:
        source_path = os.path.join(source_dir, "back_matter", f"{md_name}.md")
        if await process_file(source_path, output_dir, file_num, output_name):
            file_num += 1
    
    print(f"\nBook complete! Generated {file_num - 1} files.")
    return file_num - 1


async def main():
    parser = argparse.ArgumentParser(description='Generate audiobook MP3s from markdown')
    parser.add_argument('--book', type=int, help='Book number (1-5)')
    parser.add_argument('--chapter', type=int, help='Chapter number (requires --book)')
    args = parser.parse_args()
    
    if args.book:
        if args.book < 1 or args.book > 5:
            print("Error: Book must be 1-5")
            return
        await process_book(args.book - 1)
    else:
        total_files = 0
        for i in range(len(BOOKS)):
            total_files += await process_book(i)
        print(f"\n{'='*60}")
        print(f"All books complete! Total files generated: {total_files}")
        print(f"{'='*60}")


if __name__ == "__main__":
    asyncio.run(main())
