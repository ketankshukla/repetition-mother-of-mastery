# Audiobook Generation Process for ACX/Audible

Complete guide for generating audiobooks from markdown files for ACX/Audible distribution.

**Voice:** en-US-AvaNeural

---

## Prerequisites

Your book series must have this folder structure:

```
book-series/
└── [Book Name]/
    ├── front_matter/
    │   ├── opening_credits.md      # "00-opening-credits.mp3"
    │   ├── copyright.md
    │   ├── dedication.md
    │   ├── epigraph.md
    │   ├── preface.md
    │   ├── prologue.md
    │   ├── introduction.md
    │   └── retail_sample.md        # "24-retail-sample.mp3" (5 min or less)
    ├── chapters/
    │   ├── chapter_01.md           # Each book has chapters 01-10
    │   ├── chapter_02.md
    │   └── ... (chapter_XX.md format)
    └── back_matter/
        ├── epilogue.md             # Track 17
        ├── authors_note.md         # Track 18
        ├── also_by.md              # Track 19
        ├── about_the_author.md     # Track 20
        ├── connect.md              # Track 21
        ├── review_request.md       # Track 22
        └── closing_credits.md      # "23-closing-credits.mp3"
```

### Important: Chapter Numbering

Each book should have chapters starting from `chapter_01` regardless of its position in the series. Do NOT continue chapter numbers across books.

---

## Step 1: Create Audiobooks Folder

Create `amazon-production/audiobooks/` in the project root.

---

## Step 2: Add to .gitignore

Add these lines to the project's `.gitignore`:

```
# Audio files
*.mp3
*.wav

# Audiobook generation
amazon-production/audiobooks/output/
amazon-production/audiobooks/.venv/
```

---

## Step 3: Create requirements.txt

Create `amazon-production/audiobooks/requirements.txt`:

```
edge-tts>=6.1.10
```

---

## Step 4: Setup Virtual Environment

Run in PowerShell from the `audiobooks` folder:

```powershell
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

---

## Step 5: Generate Audiobooks

### All Books

```powershell
.\.venv\Scripts\python.exe generate_audiobooks.py
```

### Single Book

```powershell
.\.venv\Scripts\python.exe generate_audiobooks.py --book 1
```

---

## Step 6: Generate Extra Files

After running the main audiobook generation:

```powershell
.\.venv\Scripts\python.exe generate_extras.py
```

This generates:

- `00-opening-credits.mp3` - Book title, author, narrator, copyright
- `23-closing-credits.mp3` - Thank you message, next book teaser
- `24-retail-sample.mp3` - 5-minute compelling sample from book beginning

---

## Step 7: Re-encode for ACX

Re-encode all MP3s to meet ACX requirements (192 Kbps, 44.1 kHz):

```powershell
.\.venv\Scripts\python.exe -c "
import os
import subprocess

BOOKS = [
    r'E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition',
    r'E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 2 - Building Habits and the Journey to Excellence',
    r'E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 3 - Mastery in Action — Sports, Arts, and Language',
    r'E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 4 - The Cognitive Edge — Memory, Learning, and Feedback',
    r'E:\repetition-mother-of-mastery\amazon-production\audiobooks\output\Repetition Mother of Mastery Book 5 - Living Mastery — Routines, Growth, and Legacy',
]

for i, book_dir in enumerate(BOOKS, 1):
    print(f'Book {i}...')
    for mp3 in sorted([f for f in os.listdir(book_dir) if f.endswith('.mp3')]):
        input_path = os.path.join(book_dir, mp3)
        output_path = input_path.replace('.mp3', '-acx.mp3')
        subprocess.run(['ffmpeg', '-y', '-i', input_path, '-ar', '44100', '-ab', '192k', output_path], capture_output=True)
        os.remove(input_path)
        os.rename(output_path, input_path)
print('Done!')
"
```

---

## Output

MP3 files will be saved to:
`amazon-production/audiobooks/output/[Book Name]/`

---

## Step 8: Create M4B Audiobooks

After generating all MP3 files, create M4B audiobooks with embedded chapters and cover art:

```powershell
.\.venv\Scripts\python.exe create_m4b.py
```

This script:

- Concatenates all MP3 files for each book
- Converts to AAC format (M4B)
- Embeds chapter markers based on track durations
- Embeds cover art from `audiobook-covers/`
- Outputs to `m4b-audiobook/[Book Name]/[Book Name].m4b`

### M4B Output Structure

```
m4b-audiobook/
├── Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition/
│   └── Repetition Mother of Mastery Book 1 - The Science and Psychology of Repetition.m4b
├── Repetition Mother of Mastery Book 2 - Building Habits and the Journey to Excellence/
│   └── Repetition Mother of Mastery Book 2 - Building Habits and the Journey to Excellence.m4b
├── Repetition Mother of Mastery Book 3 - Mastery in Action/
│   └── Repetition Mother of Mastery Book 3 - Mastery in Action.m4b
├── Repetition Mother of Mastery Book 4 - The Cognitive Edge/
│   └── Repetition Mother of Mastery Book 4 - The Cognitive Edge.m4b
└── Repetition Mother of Mastery Book 5 - Living Mastery/
    └── Repetition Mother of Mastery Book 5 - Living Mastery.m4b
```

### Verify M4B Chapters

```powershell
ffprobe -i "path\to\file.m4b" -show_chapters
```

---

## ACX Track Listing (25 tracks per book)

| Track | Filename                         | Source                          |
| ----- | -------------------------------- | ------------------------------- |
| 00    | 00-opening-credits.mp3           | front_matter/opening_credits.md |
| 01    | 01-copyright.mp3                 | front_matter/copyright.md       |
| 02    | 02-dedication.mp3                | front_matter/dedication.md      |
| 03    | 03-epigraph.mp3                  | front_matter/epigraph.md        |
| 04    | 04-preface.mp3                   | front_matter/preface.md         |
| 05    | 05-prologue.mp3                  | front_matter/prologue.md        |
| 06    | 06-introduction.mp3              | front_matter/introduction.md    |
| 07-16 | 07-chapter-01.mp3 ...            | chapters/chapter_01.md ...      |
| 17    | 17-epilogue.mp3                  | back_matter/epilogue.md         |
| 18    | 18-authors-note.mp3              | back_matter/authors_note.md     |
| 19    | 19-also-by-ketan-shukla.mp3      | back_matter/also_by.md          |
| 20    | 20-about-the-author.mp3          | back_matter/about_the_author.md |
| 21    | 21-connect-with-ketan-shukla.mp3 | back_matter/connect.md          |
| 22    | 22-a-quick-favor.mp3             | back_matter/review_request.md   |
| 23    | 23-closing-credits.mp3           | back_matter/closing_credits.md  |
| 24    | 24-retail-sample.mp3             | front_matter/retail_sample.md   |

---

## Step 8: Create Audiobook Cover

For each book, create a square cover image (2400×2400px, 24-bit color).

1. View the original book cover in `amazon-production/pdf covers/`
2. Use the prompts in `amazon-production/audiobooks/audiobook-cover-prompts.md` with ChatGPT
3. Resize and convert to 2400×2400px, 24-bit color for ACX upload

---

## Voice Options

| Voice               | Description                   |
| ------------------- | ----------------------------- |
| `en-US-AvaNeural`   | US English female (this book) |
| `en-US-BrianNeural` | US English male               |
| `en-US-JennyNeural` | US English female             |
| `en-GB-RyanNeural`  | UK English male               |

---

## Retail Sample Guidelines

Per ACX requirements:

- **Duration:** 5 minutes or less
- **Content:** Start from the beginning of the audiobook for seamless transition
- **Purpose:** Compelling hook to drive purchases

Include:

- Book title and author credit
- Prologue excerpt
- Introduction excerpt
- First chapter opening
- Call to action to purchase

---

## Troubleshooting

- **Skipped words**: Ensure you're reading from markdown files, not PDFs
- **Files out of order**: Check that chapter files follow `chapter_XX.md` naming
- **Missing tracks**: Verify markdown files exist in the expected folders
- **Chapter numbers wrong**: Each book should have chapters 01-10, not continue from previous book
