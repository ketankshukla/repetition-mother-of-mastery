#!/usr/bin/env python3
"""
Create M4B audiobook files with chapter markers and cover art from MP3 files.
"""

import os
import subprocess
import tempfile
from pathlib import Path

# Configuration
OUTPUT_DIR = Path(r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\output")
M4B_DIR = Path(r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\m4b-audiobook")
COVER_DIR = Path(r"E:\repetition-mother-of-mastery\amazon-production\audiobooks\audiobook-covers")

BOOKS = [
    {
        "name": "Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition",
        "short": "Book 1 - The Science and Psychology of Repetition",
        "cover": "book1-audiobook-image-final.jpg"
    },
    {
        "name": "Repetition Mother of Mastery Book 2 - Building Habits and the Journey to Excellence",
        "short": "Book 2 - Building Habits and the Journey to Excellence",
        "cover": "book2-audiobook-image-final.jpg"
    },
    {
        "name": "Repetition Mother of Mastery Book 3 - Mastery in Action — Sports, Arts, and Language",
        "short": "Book 3 - Mastery in Action",
        "cover": "book3-audiobook-image-final.jpg"
    },
    {
        "name": "Repetition Mother of Mastery Book 4 - The Cognitive Edge — Memory, Learning, and Feedback",
        "short": "Book 4 - The Cognitive Edge",
        "cover": "book4-audiobook-image-final.jpg"
    },
    {
        "name": "Repetition Mother of Mastery Book 5 - Living Mastery — Routines, Growth, and Legacy",
        "short": "Book 5 - Living Mastery",
        "cover": "book5-audiobook-image-final.jpg"
    },
]

def get_duration(mp3_path):
    """Get duration of an MP3 file in seconds using ffprobe."""
    result = subprocess.run([
        'ffprobe', '-v', 'error', '-show_entries', 'format=duration',
        '-of', 'default=noprint_wrappers=1:nokey=1', str(mp3_path)
    ], capture_output=True, text=True)
    return float(result.stdout.strip())

def create_m4b(book_info):
    """Create M4B file for a single book."""
    book_dir = OUTPUT_DIR / book_info["name"]
    cover_path = COVER_DIR / book_info["cover"]
    output_path = M4B_DIR / f"{book_info['short']}.m4b"
    
    if not book_dir.exists():
        print(f"  ERROR: Book directory not found: {book_dir}")
        return False
    
    # Get all MP3 files sorted
    mp3_files = sorted([f for f in book_dir.iterdir() if f.suffix == '.mp3'])
    if not mp3_files:
        print(f"  ERROR: No MP3 files found in {book_dir}")
        return False
    
    print(f"  Found {len(mp3_files)} MP3 files")
    
    # Create file list for ffmpeg concat (use escaped paths)
    with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False, encoding='utf-8') as f:
        filelist_path = f.name
        for mp3 in mp3_files:
            # Escape single quotes and use forward slashes
            escaped_path = str(mp3).replace("\\", "/").replace("'", "'\\''")
            f.write(f"file '{escaped_path}'\n")
    
    # Create chapter metadata
    chapters = []
    current_time = 0
    for mp3 in mp3_files:
        duration = get_duration(mp3)
        chapter_name = mp3.stem.replace('-', ' ').title()
        # Clean up chapter name
        chapter_name = chapter_name.replace('  ', ' ')
        chapters.append({
            'start': int(current_time * 1000),  # milliseconds
            'end': int((current_time + duration) * 1000),
            'title': chapter_name
        })
        current_time += duration
    
    # Create metadata file for chapters
    with tempfile.NamedTemporaryFile(mode='w', suffix='.txt', delete=False, encoding='utf-8') as f:
        metadata_path = f.name
        f.write(";FFMETADATA1\n")
        f.write(f"title={book_info['short']}\n")
        f.write("artist=Ketan Shukla\n")
        f.write("album=Repetition: Mother of Mastery\n")
        f.write("genre=Audiobook\n\n")
        
        for ch in chapters:
            f.write("[CHAPTER]\n")
            f.write("TIMEBASE=1/1000\n")
            f.write(f"START={ch['start']}\n")
            f.write(f"END={ch['end']}\n")
            f.write(f"title={ch['title']}\n\n")
    
    # Create intermediate M4A (without cover)
    temp_m4a = str(output_path).replace('.m4b', '_temp.m4a')
    
    print("  Concatenating MP3s and converting to AAC...")
    result = subprocess.run([
        'ffmpeg', '-y', '-f', 'concat', '-safe', '0', '-i', filelist_path,
        '-i', metadata_path,
        '-map_metadata', '1',
        '-c:a', 'aac', '-b:a', '128k',
        temp_m4a
    ], capture_output=True, text=True)
    
    if result.returncode != 0:
        print(f"  ERROR during concat: {result.stderr}")
        return False
    
    # Add cover art
    if cover_path.exists():
        print("  Adding cover art...")
        result = subprocess.run([
            'ffmpeg', '-y', '-i', temp_m4a, '-i', str(cover_path),
            '-map', '0:a', '-map', '1:0',
            '-c:a', 'copy', '-c:v', 'mjpeg',
            '-disposition:v', 'attached_pic',
            str(output_path)
        ], capture_output=True, text=True)
        
        if result.returncode != 0:
            print(f"  ERROR adding cover: {result.stderr}")
            # Fall back to file without cover
            os.rename(temp_m4a, str(output_path))
        else:
            os.remove(temp_m4a)
    else:
        print(f"  WARNING: Cover not found at {cover_path}")
        os.rename(temp_m4a, str(output_path))
    
    # Clean up temp files
    os.remove(filelist_path)
    os.remove(metadata_path)
    
    # Get final file size
    size_mb = output_path.stat().st_size / (1024 * 1024)
    print(f"  Created: {output_path.name} ({size_mb:.1f} MB)")
    return True

def main():
    print("=" * 60)
    print("Creating M4B Audiobooks - Repetition: Mother of Mastery")
    print("=" * 60)
    
    M4B_DIR.mkdir(exist_ok=True)
    
    success_count = 0
    for i, book in enumerate(BOOKS, 1):
        print(f"\n[{i}/5] {book['short']}")
        if create_m4b(book):
            success_count += 1
    
    print(f"\n{'=' * 60}")
    print(f"Complete! Created {success_count}/5 M4B files")
    print(f"Output: {M4B_DIR}")
    print("=" * 60)

if __name__ == "__main__":
    main()
