# Audiobook Generation - Repetition Mother of Mastery

Generate audiobook MP3 and M4B files from markdown source files using Microsoft Edge TTS.

**Voice:** en-US-AvaNeural

## Book Titles

| Book | Title                                         |
| ---- | --------------------------------------------- |
| 1    | The Science and Psychology of Repetition      |
| 2    | Building Habits and the Journey to Excellence |
| 3    | Mastery in Action                             |
| 4    | The Cognitive Edge                            |
| 5    | Living Mastery                                |

## Setup

```powershell
cd E:\repetition-mother-of-mastery\amazon-production\audiobooks
py -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Generate MP3 Audiobooks

### All Books

```powershell
py generate_audiobooks.py
```

### Single Book

```powershell
py generate_audiobooks.py --book 1
```

## Generate M4B Audiobooks (with chapters)

After generating MP3s, create M4B files with embedded chapters and cover art:

```powershell
py create_m4b.py
```

## Output Structure

```
output/                          # MP3 files (25 tracks per book)
├── Repetition Mother of Mastery Book 1 - .../
│   ├── 00-opening-credits.mp3
│   ├── 01-copyright.mp3
│   └── ... (25 tracks)
└── ...

m4b-audiobook/                   # M4B files (one per book)
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

audiobook-covers/                # Cover images (2400x2400, 24-bit)
└── *.jpg
```

## Track Numbering (ACX Standard - 25 tracks)

| Track | Content                                                                            |
| ----- | ---------------------------------------------------------------------------------- |
| 00    | Opening Credits                                                                    |
| 01-06 | Front Matter (copyright, dedication, epigraph, preface, prologue, introduction)    |
| 07-16 | Chapters 1-10                                                                      |
| 17-22 | Back Matter (epilogue, author's note, also by, about author, connect, quick favor) |
| 23    | Closing Credits                                                                    |
| 24    | Retail Sample                                                                      |

## Notes

- MP3/M4B files are excluded from git via `.gitignore`
- M4B files include embedded chapter markers and cover art
- Use `ffprobe` to verify chapter metadata in M4B files
