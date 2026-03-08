# Audiobook Generation - Repetition Mother of Mastery

Generate audiobook MP3 files from markdown source files using Microsoft Edge TTS.

**Voice:** en-US-AvaNeural

## Setup

```powershell
cd E:\repetition-mother-of-mastery\amazon-production\audiobooks
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Generate Audiobooks

### All Books
```powershell
python generate_audiobooks.py
```

### Single Book
```powershell
python generate_audiobooks.py --book 1
```

### Re-encode for ACX (192 Kbps, 44.1 kHz)
After generating, re-encode all MP3s to meet ACX requirements:
```powershell
# Use FFmpeg to re-encode
ffmpeg -y -i input.mp3 -ar 44100 -ab 192k output.mp3
```

## Generate Extra Files

After creating the markdown files for opening credits, closing credits, and retail samples:
```powershell
python generate_extras.py
```

## Output Structure

```
output/
├── Repetition Mother of Mastery Book 1 - .../
│   ├── 00-opening-credits.mp3
│   ├── 01-copyright.mp3
│   ├── 02-dedication.mp3
│   ├── ...chapters...
│   ├── 17-epilogue.mp3
│   ├── ...back matter...
│   ├── 23-closing-credits.mp3
│   └── 24-retail-sample.mp3
└── ...other books...
```

## Track Numbering (ACX Standard)

- **00** - Opening Credits
- **01-06** - Front Matter (copyright, dedication, epigraph, preface, prologue, introduction)
- **07-16** - Chapters 1-10
- **17-22** - Back Matter (epilogue, author's note, also by, about author, connect, quick favor)
- **23** - Closing Credits
- **24** - Retail Sample

## Required Markdown Files (Create Before Running generate_extras.py)

For each book, create these files:
- `front_matter/opening_credits.md`
- `back_matter/closing_credits.md`
- `front_matter/retail_sample.md` (5 minutes or less when converted to audio)
