# Book 1 Marketing Video — Complete Production Guide

**Book:** The Foundation of Mastery  
**Series:** Repetition: Mother of Mastery  
**Author:** Ketan Shukla  
**Video Format:** Portrait (9:16), 3 minutes  
**Platform Targets:** YouTube Shorts, Instagram Reels, TikTok  

---

## Overview

This guide walks you through every step required to produce the 3-minute marketing video for Book 1 using ChatGPT (for b-roll image generation), HeyGen (for video assembly), and your existing book cover and logo assets.

You will generate 10 b-roll images, assemble them with the book cover and logo in HeyGen, and deliver a polished 3-minute portrait video with synchronized narration and visuals.

---

## Assets You Need Before You Start

| Asset | Status | Notes |
|---|---|---|
| Book 1 cover image | Ready | Use the existing Book 1 cover file |
| Author logo | Ready | Use your existing logo file |
| 10 b-roll images | To generate | Follow Step 1 below |
| HeyGen account | Required | heygen.com |
| ChatGPT account (DALL-E or GPT-4o image gen) | Required | For b-roll generation |

---

## Step 1 — Generate the 10 B-Roll Images Using ChatGPT

Each b-roll image has a dedicated prompt file in this folder. Open ChatGPT (with image generation enabled — DALL-E 3 or GPT-4o) and submit each prompt file one at a time.

### The 10 Images and Their Concepts

| File | Image Name | Concept |
|---|---|---|
| `image-01.txt` | image-01 | The talent myth shattering — the opening hook |
| `image-02.txt` | image-02 | Neural pathways forming (Hebbian learning) |
| `image-03.txt` | image-03 | Myelin wrapping — building speed and precision |
| `image-04.txt` | image-04 | Neuroplasticity — the brain grows at any age |
| `image-05.txt` | image-05 | Deliberate practice vs. mindless repetition |
| `image-06.txt` | image-06 | The four stages of competence |
| `image-07.txt` | image-07 | The spacing effect |
| `image-08.txt` | image-08 | Sleep and memory consolidation |
| `image-09.txt` | image-09 | Feedback loops |
| `image-10.txt` | image-10 | The psychology of persistence |

### How to Submit Each Prompt

1. Open `image-01.txt` in a text editor
2. Copy the entire contents of the file
3. Paste it into ChatGPT's message box
4. Submit and wait for the image to generate
5. Download the image and save it as `image-01.png` (or `.jpg`)
6. Repeat for all 10 files

### Tips for Best Results

- **Use DALL-E 3 or GPT-4o image generation** — these produce the most photorealistic, cinematic results
- If the first result is not quite right, ask ChatGPT: *"Regenerate this with more cinematic lighting and higher photorealism"*
- All prompts specify **16:9 landscape format** — confirm this in the generation settings if possible
- Save all 10 images in a dedicated folder named `book1-broll` for easy upload to HeyGen
- Name them exactly: `image-01`, `image-02`, ... `image-10` to match the HeyGen script cues

---

## Step 2 — Prepare Your Asset Folder

Before opening HeyGen, organize all your assets in one folder:

```
book1-video-assets/
├── book1-cover.png          (your Book 1 cover image)
├── author-logo.png          (your logo)
├── image-01.png             (generated b-roll)
├── image-02.png
├── image-03.png
├── image-04.png
├── image-05.png
├── image-06.png
├── image-07.png
├── image-08.png
├── image-09.png
└── image-10.png
```

---

## Step 3 — Set Up the Video in HeyGen

### 3a. Create a New Video Project

1. Log in to HeyGen at heygen.com
2. Click **Create Video**
3. Select **Portrait** format (9:16 vertical)
4. Set duration target: **3 minutes** (180 seconds)

### 3b. Choose or Configure Your Avatar

- Select your preferred HeyGen avatar (or upload a custom avatar if you have one)
- Position the avatar in the **lower-center** of the frame for b-roll segments
- For the book cover opening and closing segments, the avatar can be **full-frame** or **lower-third**

### 3c. Upload All Assets

1. Go to the **Media** panel in HeyGen
2. Upload all files from your `book1-video-assets/` folder
3. Confirm all 12 assets are visible: book cover, logo, and image-01 through image-10

---

## Step 4 — Build the Scene Timeline

Build the video scene by scene following the image transition summary from `heygen-video-script.txt`. Each scene corresponds to one background image.

### Scene-by-Scene Build

| Scene | Duration | Background Asset | Script Section |
|---|---|---|---|
| 1 | 0:00–0:08 | Book Cover | Opening hook — "What if everything you have ever believed about talent is wrong?" |
| 2 | 0:08–0:30 | image-01 | Talent myth — "What if they did not start with some gift you were never given?" |
| 3 | 0:30–0:55 | image-02 | Neural pathways — "Neural pathways physically form and strengthen with each repetition" |
| 4 | 0:55–1:18 | image-03 | Myelin — "A substance called myelin wraps around your nerve fibers every time you practice" |
| 5 | 1:18–1:38 | image-04 | Neuroplasticity — "Your brain's infinite capacity to grow at any age" |
| 6 | 1:38–2:00 | image-05 | Deliberate practice — "The difference between deliberate practice and mindless repetition" |
| 7 | 2:00–2:12 | image-06 | Four stages — "The four stages of competence" |
| 8 | 2:12–2:22 | image-07 | Spacing effect — "Distributing your practice over time" |
| 9 | 2:22–2:32 | image-08 | Sleep — "While you sleep, your brain is actively consolidating" |
| 10 | 2:32–2:42 | image-09 | Feedback loops — "The engine that transforms blind repetition into precision-guided growth" |
| 11 | 2:42–2:55 | image-10 | Persistence — "The ones who kept going anyway" |
| 12 | 2:55–3:10 | Book Cover | Closing CTA — "Get your copy today on Amazon" |
| 13 | 3:10–3:15 | Author Logo | Fade out |

### How to Set Each Scene in HeyGen

For each scene:
1. Click **Add Scene** (or duplicate the previous scene)
2. Set the **background** to the corresponding image asset
3. Set the **background display** to: Full Screen, Centered, Cover (fills the frame)
4. Set the **transition** between scenes to: **Cross Fade, 0.5 seconds**
5. Paste the corresponding script text into the **narration/script** field for that scene
6. Adjust scene duration to match the timing in the table above

---

## Step 5 — Enter the Full Script

Open `heygen-video-script.txt` and copy the script text for each scene into the corresponding HeyGen scene's narration field. The script is already divided by scene with clear markers like:

```
[Transition to image-01 — The Talent Myth Shattering]
What if the people you admire most...
```

Copy only the narration text (not the bracketed cue markers) into each scene's script field.

---

## Step 6 — Configure Audio and Music

### Narration Voice
- Select a clear, authoritative, warm voice
- Speaking pace: **measured and deliberate** — not rushed
- Tone: **confident and inspiring** — this is a book that changes lives

### Background Music
- Select a **warm, cinematic, instrumental** track
- Music style: builds gradually from quiet and contemplative at the opening to powerful and inspiring at the closing CTA
- **Volume under narration:** 15–20% (music should support, not compete)
- **Volume during opening (0:00–0:08) and closing (2:55–3:15):** 60–70% (music is featured)

---

## Step 7 — Optional Text Overlays

For maximum impact, add animated text overlays when the narrator speaks key terms. These appear as lower-third captions:

| Timestamp | Text Overlay | Style |
|---|---|---|
| ~0:45 | HEBBIAN LEARNING | Gold (#D4A843), Garamond, animated fade-in |
| ~1:05 | MYELIN | Gold (#D4A843), Garamond, animated fade-in |
| ~1:25 | NEUROPLASTICITY | Gold (#D4A843), Garamond, animated fade-in |
| ~1:48 | DELIBERATE PRACTICE | Gold (#D4A843), Garamond, animated fade-in |
| ~2:05 | FOUR STAGES OF COMPETENCE | Gold (#D4A843), Garamond, animated fade-in |
| ~2:15 | THE SPACING EFFECT | Gold (#D4A843), Garamond, animated fade-in |
| ~2:38 | FEEDBACK LOOPS | Gold (#D4A843), Garamond, animated fade-in |

---

## Step 8 — Review and Export

### Before Exporting — Checklist

- [ ] All 13 scenes are present and in the correct order
- [ ] Each scene has the correct background image
- [ ] All transitions are cross-fade at 0.5 seconds
- [ ] Total video duration is approximately 3 minutes (175–185 seconds)
- [ ] Narration text is entered correctly in each scene
- [ ] Music volume is correctly set (low under narration, higher on cover scenes)
- [ ] Book cover appears at both the opening and closing
- [ ] Author logo appears in the final scene
- [ ] Portrait format (9:16) is confirmed

### Export Settings

- **Resolution:** 1080 × 1920 (Full HD Portrait)
- **Format:** MP4
- **Frame rate:** 30fps
- **Quality:** Highest available

---

## Step 9 — Upload and Publish

Once exported:

1. **YouTube Shorts:** Upload as a Short (under 60 seconds clips go to Shorts automatically; for 3-minute videos, upload as a regular video and add `#Shorts` is not applicable — upload as a standard YouTube video with portrait orientation)
2. **Instagram Reels:** Upload directly — Instagram supports up to 90 seconds for Reels; for 3-minute videos, use Instagram Video
3. **TikTok:** Upload as a standard TikTok video (supports up to 10 minutes)

### Recommended Title and Description

**Title:** The Science of Mastery — Why Talent Is a Myth | The Foundation of Mastery

**Description:**
What if talent is not something you are born with — but something you build? The Foundation of Mastery, Book 1 of the Repetition: Mother of Mastery series, reveals the neuroscience behind how every human being can develop extraordinary skill through deliberate repetition. Get your copy on Amazon: [link]

**Tags:** mastery, repetition, neuroscience, deliberate practice, skill development, myelin, neuroplasticity, Ketan Shukla

---

## File Reference Summary

All files for this production are located in:
`video-scripts/book1-marketing/`

| File | Purpose |
|---|---|
| `image-01.txt` | ChatGPT prompt — The talent myth shattering |
| `image-02.txt` | ChatGPT prompt — Neural pathways forming |
| `image-03.txt` | ChatGPT prompt — Myelin wrapping |
| `image-04.txt` | ChatGPT prompt — Neuroplasticity at every age |
| `image-05.txt` | ChatGPT prompt — Deliberate vs. mindless practice |
| `image-06.txt` | ChatGPT prompt — Four stages of competence |
| `image-07.txt` | ChatGPT prompt — The spacing effect |
| `image-08.txt` | ChatGPT prompt — Sleep and memory consolidation |
| `image-09.txt` | ChatGPT prompt — Feedback loops |
| `image-10.txt` | ChatGPT prompt — Psychology of persistence |
| `heygen-video-script.txt` | Full HeyGen production prompt with image cues and script |
| `production-guide.md` | This document — complete step-by-step production guide |
