# Videsh Karmakar — Artist & Developer Portfolio Plan

A minimalist, reactive Node.js and React personal website for electronic music producer and developer **Videsh Karmakar**, showcasing his music, dedicated YouTube channel, social presence, and upcoming developed applications within a strict two-color `#A4A2B`-based gradient design system.

---

### User Review & Critical Decisions

> [!IMPORTANT]
> Summary of your confirmed Phase 1 choices and how they shape the build:

- **Color Palette (`only #A4A2B based`)**: Because `#A4A2B` is a five-character hex fragment, the complete design system standardizes on its twilight slate-lavender completion (`#A4A2BB`) paired with a deep obsidian-indigo derived strictly from the exact same hue (`#0B0A12`), using only opacity steps, tonal contrast, and linear/radial gradients between those two poles—with zero additional colors introduced anywhere.
- **YouTube & Music Experience (`Curated featured releases grid with direct platform links`)**: Visitors browse a filterable curated releases grid (highlighting real indexed tracks such as *Chok Vanga*, *Mayabono Biharini*, *Chupi Yaadein*, *Hardstyle Nation*, and *Shiv Tandav Stotram*) with direct Spotify and YouTube links, alongside a dedicated showcase slot for `youtube.com/@videshkarmakar2000/featured`.
- **Developed Apps & Contact (`Structured app showcase slots plus working contact form`)**: The Developed Apps section renders clean, structured architectural slots formatted for App Name, Website URL, and Description (backed by a centralized Node.js API configuration so entries can be dropped in later without UI changes), paired with a live Node.js contact form (`videshkarmakar@gmail.com`).

---

### 1. Overview & Core Concept

- **What It Does**: Presents Videsh Karmakar's dual identity as an independent electronic music producer (8+ years of experience across Future Bass, Progressive House, Festival EDM, Hardstyle, Dubstep, and Lo-Fi) and app developer in a single cohesive, fast-loading web application.
- **Target Audience**: Music listeners, playlist curators, collaborators, event organizers, and software visitors discovering Videsh across Spotify, YouTube, Instagram, and Facebook.
- **Key Value**: Replaces generic multi-color templates with an understated, editorial, studio-grade aesthetic where every link, track slot, YouTube highlight, app slot, and contact action is functional and clean.

---

### 2. User Experience & Visual Design

- **Key User Flows**:
  1. **Arrival & Hero**: Visitors land on a balanced split-screen hero featuring the *"Beyond The Music — A Vision of the Future"* headline, a bespoke dark-studio editorial visual, a primary *Listen on Spotify* CTA, and a 4-column credibility strip directly beneath.
  2. **Social & Bio Exploration**: Visitors access all five verified channels (Spotify, Instagram, YouTube, Facebook, and one-click copyable Gmail) and read Videsh's full biography, genre spectrum, and artist inspirations formatted with clean typographic separators (`·`).
  3. **Music & Dedicated YouTube Channel Slot**: Visitors filter curated releases by genre, inspect release details in an editorial drawer, and explore the dedicated `@videshkarmakar2000/featured` YouTube showcase with featured channel highlights and direct viewing links.
  4. **Developed Apps Showcase**: Visitors browse structured app showcase slots prepared for upcoming App Names, Website Links, and Descriptions, with an interactive preview panel illustrating each slot's clean metadata layout.
  5. **Reactive Contact Flow**: Visitors submit inquiries directly through an Express-backed contact form with real-time validation, submission state, and direct Gmail fallback.

- **Visual Identity & Theme**:
  - *Aesthetic Direction*: Minimalist electronic music studio monograph—restrained, architectural, free of emojis, pill badges, pulsing status dots, or decorative clutter.
  - *Color Palette & Mood (Strict 2-Color Gradient System)*:
    - `--bg-canvas` (60%): `#0B0A12` (deep obsidian-indigo derived strictly from `#A4A2BB`'s hue)
    - `--bg-surface` (30%): `#14131E` and translucent `#A4A2BB` at `6%–10%` opacity with `1px` hairline borders (`rgba(164, 162, 187, 0.18)`)
    - `--accent-primary` (10%): `#A4A2BB` (and high-contrast light tint `#E6E5F0` for crisp WCAG AA body/display legibility)
    - *Gradients*: Subtle directional and radial washes blending `#A4A2BB` into `#0B0A12` across hero framing, primary buttons, and active tab highlights.
  - *Typography & Hierarchy*:
    - Display Headings: `Outfit` (`600`–`700`, tight tracking, `text-wrap: balance`)
    - Editorial Accents / Subtitles: `Cormorant Garamond` (`500` italic for signature vision quotes)
    - Body Prose & Controls: `Plus Jakarta Sans` (`400`–`600`, `15px–16px`, `1.6` line-height) with `tabular-nums` for release years and durations.
  - *Component Styling & Layout*:
    - 3-zone single-row top navigation (`Videsh Karmakar` wordmark — 5 single-line links `Bio`, `Music`, `YouTube`, `Apps`, `Contact` — 1 primary `Get in Touch` action).
    - Whitespace-led section rhythm (`900px–1200px` centered container on `1440px` desktop), single-level elevation, zero pill enclosures for static metadata, and hairline dividers.

- **Interactive Feedback & Motion**:
  - Smooth compositor-only transitions (`transform`, `opacity` settling within `150ms–200ms`), `prefers-reduced-motion` compliance, live copy-to-clipboard confirmation for Gmail, and instant reactive feedback on genre filtering and contact submission.

---

### 3. Key Product Decisions & Trade-Offs

- **Decision 1: Strict `#A4A2BB` + `#0B0A12` Tonal System**
  - *Chosen Approach*: Complete the five-character `#A4A2B` value as `#A4A2BB` and derive the dark canvas (`#0B0A12`), structural surfaces (`#14131E`), and high-contrast text tint (`#E6E5F0`) strictly along the same hue/saturation axis.
  - *Why*: Preserves 100% visual fidelity to the user's single-palette directive while guaranteeing WCAG AA readability (4.5:1+ text contrast).
  - *Alternatives Considered*: Introducing bright neon or white/black unrelated accents (rejected to avoid breaking the strict two-color rule).

- **Decision 2: Curated Releases + Dedicated YouTube Channel Slot**
  - *Chosen Approach*: Serve curated music releases and `@videshkarmakar2000/featured` channel highlights from a reactive Node.js Express API with direct outbound links and a clean release detail modal.
  - *Why*: Matches the user's preference for a curated grid with direct platform links, avoids third-party iframe cookie/embed failures, and keeps page load instant.
  - *Alternatives Considered*: Live YouTube Data API scraping or heavy Spotify widgets (rejected to avoid API key dependencies and sluggish embed frames).

- **Decision 3: Structured Editable App Slots**
  - *Chosen Approach*: Define an explicit typed app registry served via `/api/apps` so App Name, Website URL, and Description can be added in one data structure later while rendering clean, honest upcoming slots today.
  - *Why*: Avoids fabricated placeholder apps or cheesy "AI slop" mock metrics while delivering an immediately polished layout.

---

### 4. Technical Architecture & Data Strategy *(Technical Reference)*

- **Architecture & Component Diagram**:

```text
┌─────────────────────────────────────────────────────────────────────────┐
│                       Node.js + Express Server                          │
│  ┌──────────────────────┐  ┌───────────────────────┐  ┌──────────────┐  │
│  │ GET /api/portfolio   │  │ GET /api/apps         │  │ POST         │  │
│  │ Profile, Socials,    │  │ Structured App Slots  │  │ /api/contact │  │
│  │ Releases & YouTube   │  │ (Name, Link, Desc)    │  │ Validation   │  │
│  └──────────┬───────────┘  └──────────┬────────────┘  └──────┬───────┘  │
└─────────────┼─────────────────────────┼──────────────────────┼──────────┘
              │                         │                      │
              ▼                         ▼                      ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                    React 19 + Tailwind CSS Frontend                     │
│                                                                         │
│  ┌──────────────────────────── Top Bar ──────────────────────────────┐  │
│  │  Videsh Karmakar  │  Bio · Music · YouTube · Apps · Contact │ CTA │  │
│  └───────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ├── Hero Split + 4-Column Credibility Strip                            │
│  ├── Social Presence Strip (Spotify, Instagram, YouTube, Facebook, Mail)│
│  ├── Artist Bio, Genres & Inspirations (Editorial Prose)                │
│  ├── Curated Music Grid (Genre Filter Tabs + Release Detail Modal)      │
│  ├── Dedicated YouTube Channel Slot (@videshkarmakar2000/featured)      │
│  ├── Developed Apps Showcase (Structured Slots for Future Entries)      │
│  └── Reactive Contact Form + Minimalist Footer                          │
└─────────────────────────────────────────────────────────────────────────┘
```

- **Data Model & State**:
  - `ArtistProfile`: Name, tagline, vision quote (`"Beyond The Music" — A Vision of the Future`), full bio paragraphs, genres array, influences array, and verified social/email links.
  - `MusicRelease`: `id`, `title`, `genre`, `year`, `platformLabel`, `spotifyUrl`, `youtubeUrl`, `artworkUrl`, and `notes`.
  - `YouTubeHighlight`: `id`, `title`, `format`, `channelUrl`, `videoUrl`, `thumbnailUrl`, and concise editorial summary for the dedicated `@videshkarmakar2000/featured` slot.
  - `DevelopedAppSlot`: `slotNumber`, `appName`, `websiteUrl`, `description`, `status` (`"Awaiting Details"` / `"Live"`), ready for immediate population.
  - `ContactSubmission`: `name`, `email`, `subject`, `message`, validated both client-side and server-side via Express.

- **Interactive Component & State Mapping**:
  - **Genre Filter Tabs**: Updates active category state and filters the curated releases grid without page reload.
  - **Release Detail Modal**: Opens on card selection with `ESC` and backdrop close, displaying full credits and direct Spotify/YouTube launch buttons.
  - **Gmail Copy Action**: Copies `videshkarmakar@gmail.com` via Clipboard API and displays subtle inline confirmation.
  - **Contact Form**: Handles async submission to `POST /api/contact` with loading, field validation error, and confirmation states.
