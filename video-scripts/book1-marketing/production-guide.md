# Book 1 Marketing Video — Complete Production Guide

**Book:** The Foundation of Mastery  
**Series:** Repetition: Mother of Mastery  
**Author:** Ketan Shukla  
**Video Format:** Portrait (9:16 vertical), ~3 minutes 22 seconds  
**Platform Targets:** YouTube, Instagram, TikTok

---

## Overview

This guide walks you through every step required to produce the ~3-minute marketing video for Book 1 using ChatGPT (for b-roll image generation), HeyGen (for video assembly), and your existing book cover and logo assets.

**Video flow:** Logo → Book Cover → 10 b-roll images (content) → Book Cover (CTA) → Logo

You will generate 10 b-roll images — pure cinematic visuals, no human figures — each one depicting exactly what the narrator is talking about at that moment. The AI avatar presenter is overlaid in the lower third of the frame throughout, with the b-roll visible above and around them.

---

## Assets You Need Before You Start

| Asset                                | Status      | Notes                                            |
| ------------------------------------ | ----------- | ------------------------------------------------ |
| Book 1 cover image                   | Ready       | Used in Scene 2 (opening) and Scene 13 (CTA)     |
| Author logo                          | Ready       | Used in Scene 1 (opening) and Scene 14 (closing) |
| 10 b-roll images                     | To generate | Follow Step 1 below                              |
| HeyGen account                       | Required    | heygen.com                                       |
| ChatGPT account (DALL-E 3 or GPT-4o) | Required    | For b-roll generation                            |

---

## Step 1 — Generate the 10 B-Roll Images Using ChatGPT

Each b-roll image has a dedicated prompt file in this folder. All prompts are written for **9:16 portrait format**, with no human figures — pure cinematic concept visuals. Submit each prompt to ChatGPT with image generation enabled.

### The 10 Images and Their Concepts

| File           | Image Name | Visual Concept                                                                                  | Narration Moment                                                                            |
| -------------- | ---------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- |
| `image-01.txt` | image-01   | Stone monolith of talent myth shattering apart in golden light                                  | "What if they did not start with some gift you were never given?"                           |
| `image-02.txt` | image-02   | Macro neural network — neurons firing, Hebbian connections forming                              | "Neural pathways physically form and strengthen with each repetition"                       |
| `image-03.txt` | image-03   | Myelin sheath wrapping axon fibers — nodes of Ranvier blazing                                   | "Myelin wraps around your nerve fibers every time you practice"                             |
| `image-04.txt` | image-04   | Living brain cross-section actively rewiring — new pathways growing                             | "Neuroplasticity — your brain's infinite capacity to grow at any age"                       |
| `image-05.txt` | image-05   | Vertical split: cold gray futile clockwork (left) vs. warm gold targeting spiral (right)        | "The difference between deliberate practice and mindless repetition"                        |
| `image-06.txt` | image-06   | Four-level stone staircase ascending from dark fog to blazing white-gold summit                 | "The four stages of competence — from ignorance to effortless mastery"                      |
| `image-07.txt` | image-07   | Landscape split: cramming cliff of forgetting (top) vs. spaced repetition archipelago (bottom)  | "The spacing effect — distributing practice over time"                                      |
| `image-08.txt` | image-08   | Night window exterior (cool blue) surrounding blazing golden hippocampal consolidation (center) | "While you sleep, your brain is actively consolidating every pattern"                       |
| `image-09.txt` | image-09   | Golden torus feedback loop machine with four precision nodes and inward improvement spiral      | "Feedback loops — the engine that transforms blind repetition into precision-guided growth" |
| `image-10.txt` | image-10   | Mountain path winding upward through quitting-point shadows to blazing gold summit              | "The people who achieve mastery are the ones who kept going anyway"                         |

### How to Submit Each Prompt

1. Open the `.txt` file in a text editor
2. Copy the **entire contents** of the file
3. Paste into ChatGPT (with DALL-E 3 or GPT-4o image generation active)
4. Submit and wait for the image
5. Download and save as `image-01.png`, `image-02.png`, etc.
6. Repeat for all 10 files

### Tips for Best Results

- Use **GPT-4o image generation** or **DALL-E 3** for maximum photorealism
- If a result misses the mark, add: _"Regenerate with stronger cinematic lighting, deeper blacks, and more vivid gold tones. No human figures."_
- All prompts specify **9:16 portrait format** — confirm this is selected before generating
- Save all 10 images in a folder named `book1-broll/` for clean HeyGen upload
- Name files exactly: `image-01.png` through `image-10.png`

---

## Step 2 — Prepare Your Asset Folder

Organize all assets in one folder before opening HeyGen:

```
book1-video-assets/
├── author-logo.png          (your logo — Scenes 1 and 14)
├── book1-cover.png          (Book 1 cover — Scenes 2 and 13)
├── image-01.png             (b-roll — Scene 3)
├── image-02.png             (b-roll — Scene 4)
├── image-03.png             (b-roll — Scene 5)
├── image-04.png             (b-roll — Scene 6)
├── image-05.png             (b-roll — Scene 7)
├── image-06.png             (b-roll — Scene 8)
├── image-07.png             (b-roll — Scene 9)
├── image-08.png             (b-roll — Scene 10)
├── image-09.png             (b-roll — Scene 11)
└── image-10.png             (b-roll — Scene 12)
```

---

## Step 3 — Set Up the Video in HeyGen

### 3a. Create a New Video Project

1. Log in to HeyGen at heygen.com
2. Click **Create Video**
3. Select **Portrait** format (9:16 vertical)
4. Target duration: approximately **3 minutes 22 seconds**

### 3b. Configure Your Avatar

- Select your preferred AI avatar
- Set avatar position: **lower third of frame** — this position is used for ALL 14 scenes
- The avatar must be low enough that the background image is clearly visible in the upper two-thirds of the frame
- On logo and book cover scenes, ensure the logo/cover is fully visible and not obscured by the avatar

### 3c. Upload All Assets

1. Go to the **Media** panel in HeyGen
2. Upload all 12 files from your `book1-video-assets/` folder
3. Confirm all assets are visible: logo, book cover, and image-01 through image-10

---

## Step 4 — Build the 14-Scene Timeline

Build the video scene by scene. The complete scene order is:

| Scene | Duration  | Background Asset | Narration Summary                                                  |
| ----- | --------- | ---------------- | ------------------------------------------------------------------ |
| 1     | 0:00–0:05 | Author Logo      | Silent — logo hold                                                 |
| 2     | 0:05–0:13 | Book Cover       | "What if everything you have ever believed about talent is wrong?" |
| 3     | 0:13–0:35 | image-01         | Talent myth shattering                                             |
| 4     | 0:35–1:00 | image-02         | Neural pathways and Hebbian learning                               |
| 5     | 1:00–1:22 | image-03         | Myelin wrapping                                                    |
| 6     | 1:22–1:42 | image-04         | Neuroplasticity                                                    |
| 7     | 1:42–2:03 | image-05         | Deliberate vs. mindless practice                                   |
| 8     | 2:03–2:15 | image-06         | Four stages of competence                                          |
| 9     | 2:15–2:25 | image-07         | The spacing effect                                                 |
| 10    | 2:25–2:35 | image-08         | Sleep and memory consolidation                                     |
| 11    | 2:35–2:45 | image-09         | Feedback loops                                                     |
| 12    | 2:45–2:57 | image-10         | Psychology of persistence                                          |
| 13    | 2:57–3:17 | Book Cover       | Full closing CTA                                                   |
| 14    | 3:17–3:22 | Author Logo      | Silent — logo hold — fade to black                                 |

### How to Set Each Scene

For each scene:

1. Click **Add Scene** (or duplicate the previous scene)
2. Set the **background** to the corresponding asset
3. Set background display to: **Full Screen, Centered, Cover** (fills the 9:16 frame)
4. Set the **transition** to: **Cross Fade, 0.5 seconds**
5. Paste the narration text from `heygen-video-script.txt` into the scene's script field
6. Set scene duration to match the timing table above

---

## Step 5 — Enter the Narration Script

Open `heygen-video-script.txt`. For each scene, copy only the narration text (the lines below each `[SCENE X — ...]` marker, not the marker itself) into the corresponding HeyGen scene's script field.

Scenes 1 and 14 (logo scenes) have no narration — leave the script field empty for these scenes.

---

## Step 6 — Configure Audio and Music

### Narration Voice

- Speaking pace: **measured and deliberate** — not rushed
- Tone: **confident, authoritative, inspiring**

### Background Music

- Style: warm, cinematic, instrumental — builds from quiet/contemplative at opening to powerful/inspiring at closing CTA
- Volume under narration: **15–20%**
- Volume on logo scenes (1 and 14): **50–60%**
- Volume on book cover scenes (2 and 13): **40–50%**

---

## Step 7 — Text Overlays

**None.** Do not add any text overlays, captions, lower-third labels, or title cards of any kind. The visuals and narration carry the entire video.

---

## Step 8 — Review and Export

### Pre-Export Checklist

- [ ] All 14 scenes present in correct order
- [ ] Scene 1 and Scene 14: Author Logo, no narration
- [ ] Scene 2 and Scene 13: Book Cover
- [ ] Scenes 3–12: image-01 through image-10 in correct order
- [ ] All transitions: Cross Fade, 0.5 seconds
- [ ] Avatar positioned in lower third throughout
- [ ] No text overlays of any kind
- [ ] Total duration approximately 3 minutes 22 seconds
- [ ] Portrait format (9:16) confirmed

### Export Settings

- **Resolution:** 1080 × 1920 (Full HD Portrait)
- **Format:** MP4
- **Frame rate:** 30fps
- **Quality:** Highest available

---

## Step 9 — Upload and Publish

### Platform Notes

- **YouTube:** Upload as a standard video with portrait orientation. Add to a playlist for the book series.
- **Instagram:** Upload as a Reel (up to 90 seconds) or Instagram Video (longer). Portrait format is native.
- **TikTok:** Upload as a standard TikTok video. Portrait format is native.

### Recommended Title and Description

**Title:** The Science of Mastery — Why Talent Is a Myth | The Foundation of Mastery

**Description:**
What if talent is not something you are born with — but something you build? The Foundation of Mastery, Book 1 of the Repetition: Mother of Mastery series, reveals the neuroscience behind how every human being can develop extraordinary skill through deliberate repetition. Get your copy on Amazon: [link]

**Tags:** mastery, repetition, neuroscience, deliberate practice, skill development, myelin, neuroplasticity, Ketan Shukla

---

## File Reference Summary

All files for this production are in: `video-scripts/book1-marketing/`

| File                      | Purpose                                                               |
| ------------------------- | --------------------------------------------------------------------- |
| `image-01.txt`            | ChatGPT prompt — Talent myth monolith shattering                      |
| `image-02.txt`            | ChatGPT prompt — Neural pathways forming (Hebbian learning)           |
| `image-03.txt`            | ChatGPT prompt — Myelin wrapping axon fibers                          |
| `image-04.txt`            | ChatGPT prompt — Living brain rewiring (neuroplasticity)              |
| `image-05.txt`            | ChatGPT prompt — Deliberate vs. mindless practice split               |
| `image-06.txt`            | ChatGPT prompt — Four stages of competence staircase                  |
| `image-07.txt`            | ChatGPT prompt — Spacing effect memory landscape                      |
| `image-08.txt`            | ChatGPT prompt — Sleep consolidation (night window + neural activity) |
| `image-09.txt`            | ChatGPT prompt — Feedback loop torus machine                          |
| `image-10.txt`            | ChatGPT prompt — Persistence mountain path to summit                  |
| `heygen-video-script.txt` | Complete HeyGen production prompt — 14 scenes, full script, settings  |
| `production-guide.md`     | This document                                                         |
