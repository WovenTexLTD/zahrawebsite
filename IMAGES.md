# Image Swap Guide

All images currently use Unsplash placeholders. Replace them with your own photos by
swapping the `src` values in the files listed below.

**Two options for hosting your images:**
- **Option A — Local files:** Put your images in the `images/` folder and use a relative
  path, e.g. `src="images/hero.jpg"`
- **Option B — External URL:** Upload to Cloudinary, your own CDN, or any host and paste
  the full URL directly

---

## Recommended image specs

| Type | Aspect ratio | Min width | Notes |
|---|---|---|---|
| Hero (full screen) | 16 : 9 or wider | 1920 px | Landscape, architectural shot |
| Project cover | 16 : 9 | 1600 px | Best face of the project |
| Project card (grid) | 3 : 4 | 800 px | Portrait orientation looks best |
| Gallery wide (first image) | 16 : 8 | 1400 px | Full-width banner in detail page |
| Gallery standard | 4 : 3 | 900 px | Fills a half-width gallery slot |
| About portrait | 3 : 4 | 900 px | Head & shoulders or editorial crop |

---

## GLOBAL IMAGES

### 1. Home — Hero (full-screen background)
**File:** `index.html` — line 61
```
src="images/hero.jpg"
```
> Show: A beautiful wide interior or architectural shot. This is the first thing visitors see.
> Aspect ratio: 16:9 or wider | Min width: 1920 px

---

### 2. Home — "My Line of Work" side image
**File:** `index.html` — line 187
```
src="images/studio-work.jpg"
```
> Show: A detail shot, a mood image, or a glimpse of process / materials.
> Aspect ratio: 4:5 (portrait) | Min width: 900 px

---

### 3. About — Portrait photo
**File:** `about.html` — line 62
```
src="images/portrait.jpg"
```
> Show: Your photo — editorial, warm, professional. Used in a sticky portrait layout.
> Aspect ratio: 3:4 (portrait) | Min width: 900 px | Crop: head & upper body

---

## PROJECT IMAGES

All project images live in **`js/projects.js`**.
Each project has a `coverImage` (shown on the detail page hero) and an `images[]` gallery array.

The first image in `images[]` marked `wide: true` spans the full gallery width (16:8 ratio).
All other gallery images are standard 4:3.

---

### Project 1 — Altbau Apartment Refresh (Vienna, 2024)
**ID:** `vienna-altbau` | **Category:** Residential

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/vienna-cover.jpg` | Hero on detail page · 16:9 · 1600 px wide |
| Gallery image 1 *(wide)* | `images/vienna-1.jpg` | Full-width banner · 16:8 · 1400 px wide |
| Gallery image 2 | `images/vienna-2.jpg` | Reading alcove · 4:3 · 900 px |
| Gallery image 3 | `images/vienna-3.jpg` | Kitchen · 4:3 · 900 px |
| Gallery image 4 | `images/vienna-4.jpg` | Master bedroom · 4:3 · 900 px |
| Gallery image 5 | `images/vienna-5.jpg` | Detail / ceramics · 4:3 · 900 px |
| Gallery image 6 | `images/vienna-6.jpg` | Bathroom · 4:3 · 900 px |

---

### Project 2 — Warm Minimal Townhouse (London, 2023)
**ID:** `london-townhouse` | **Category:** Residential

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/london-cover.jpg` | 16:9 · 1600 px |
| Gallery image 1 *(wide)* | `images/london-1.jpg` | 16:8 · 1400 px |
| Gallery image 2 | `images/london-2.jpg` | Kitchen · 4:3 · 900 px |
| Gallery image 3 | `images/london-3.jpg` | Living room detail · 4:3 · 900 px |
| Gallery image 4 | `images/london-4.jpg` | Bedroom · 4:3 · 900 px |
| Gallery image 5 | `images/london-5.jpg` | Hallway · 4:3 · 900 px |

---

### Project 3 — Boutique Retail Corner (Beirut, 2022)
**ID:** `beirut-retail` | **Category:** Commercial

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/beirut-cover.jpg` | 16:9 · 1600 px |
| Gallery image 1 *(wide)* | `images/beirut-1.jpg` | 16:8 · 1400 px |
| Gallery image 2 | `images/beirut-2.jpg` | 4:3 · 900 px |
| Gallery image 3 | `images/beirut-3.jpg` | 4:3 · 900 px |
| Gallery image 4 | `images/beirut-4.jpg` | 4:3 · 900 px |

---

### Project 4 — Lakeside Family Retreat (Zurich, 2024)
**ID:** `zurich-retreat` | **Category:** Residential

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/zurich-cover.jpg` | 16:9 · 1600 px |
| Gallery image 1 *(wide)* | `images/zurich-1.jpg` | 16:8 · 1400 px |
| Gallery image 2 | `images/zurich-2.jpg` | Kitchen · 4:3 · 900 px |
| Gallery image 3 | `images/zurich-3.jpg` | Children's room · 4:3 · 900 px |
| Gallery image 4 | `images/zurich-4.jpg` | Study · 4:3 · 900 px |
| Gallery image 5 | `images/zurich-5.jpg` | Terrace · 4:3 · 900 px |

---

### Project 5 — Studio Penthouse (Paris, 2023)
**ID:** `paris-penthouse` | **Category:** Residential

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/paris-cover.jpg` | 16:9 · 1600 px |
| Gallery image 1 *(wide)* | `images/paris-1.jpg` | 16:8 · 1400 px |
| Gallery image 2 | `images/paris-2.jpg` | Library wall · 4:3 · 900 px |
| Gallery image 3 | `images/paris-3.jpg` | Dining area · 4:3 · 900 px |
| Gallery image 4 | `images/paris-4.jpg` | Rooftop terrace · 4:3 · 900 px |

---

### Project 6 — Curated Design Showroom (Milan, 2022)
**ID:** `milan-showroom` | **Category:** Commercial

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/milan-cover.jpg` | 16:9 · 1600 px |
| Gallery image 1 *(wide)* | `images/milan-1.jpg` | 16:8 · 1400 px |
| Gallery image 2 | `images/milan-2.jpg` | Object vignette · 4:3 · 900 px |
| Gallery image 3 | `images/milan-3.jpg` | Consultation room · 4:3 · 900 px |

---

### Project 7 — Heritage Villa (Lisbon, 2023)
**ID:** `lisbon-villa` | **Category:** Residential

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/lisbon-cover.jpg` | 16:9 · 1600 px |
| Gallery image 1 *(wide)* | `images/lisbon-1.jpg` | 16:8 · 1400 px |
| Gallery image 2 | `images/lisbon-2.jpg` | Entrance hall · 4:3 · 900 px |
| Gallery image 3 | `images/lisbon-3.jpg` | Garden room · 4:3 · 900 px |
| Gallery image 4 | `images/lisbon-4.jpg` | Library · 4:3 · 900 px |

---

### Project 8 — Coastal Edit (Marseille, 2024)
**ID:** `marseille-coastal` | **Category:** Styling

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/marseille-cover.jpg` | 16:9 · 1600 px |
| Gallery image 1 *(wide)* | `images/marseille-1.jpg` | 16:8 · 1400 px |
| Gallery image 2 | `images/marseille-2.jpg` | Dining corner · 4:3 · 900 px |
| Gallery image 3 | `images/marseille-3.jpg` | Balcony · 4:3 · 900 px |

---

### Project 9 — Skyline Penthouse (Dubai, 2023)
**ID:** `dubai-penthouse` | **Category:** Residential

| Key | Suggested filename | Notes |
|---|---|---|
| `coverImage` | `images/dubai-cover.jpg` | 16:9 · 1600 px |
| Gallery image 1 *(wide)* | `images/dubai-1.jpg` | 16:8 · 1400 px |
| Gallery image 2 | `images/dubai-2.jpg` | Dining room · 4:3 · 900 px |
| Gallery image 3 | `images/dubai-3.jpg` | Primary suite · 4:3 · 900 px |
| Gallery image 4 | `images/dubai-4.jpg` | Library · 4:3 · 900 px |

---

## How to swap an image in js/projects.js

Find the project by its `id`, then update the `src` field:

```js
// BEFORE (Unsplash placeholder)
coverImage: 'https://images.unsplash.com/photo-1586023492125…',

// AFTER (your own image)
coverImage: 'images/vienna-cover.jpg',
```

Same for gallery images:
```js
// BEFORE
{ src: 'https://images.unsplash.com/photo-1615529182904…', alt: 'Reading alcove', wide: true },

// AFTER
{ src: 'images/vienna-1.jpg', alt: 'Reading alcove — bespoke oak joinery', wide: true },
```

> **Tip:** Update the `alt` text too — describe what's actually in your photo.
> Good alt text also helps with SEO.

---

## Quick checklist

- [ ] `images/hero.jpg` — Home hero
- [ ] `images/studio-work.jpg` — Home "My Line of Work" section
- [ ] `images/portrait.jpg` — About page portrait
- [ ] Vienna: cover + 6 gallery images
- [ ] London: cover + 5 gallery images
- [ ] Beirut: cover + 4 gallery images
- [ ] Zurich: cover + 5 gallery images
- [ ] Paris: cover + 4 gallery images
- [ ] Milan: cover + 3 gallery images
- [ ] Lisbon: cover + 4 gallery images
- [ ] Marseille: cover + 3 gallery images
- [ ] Dubai: cover + 4 gallery images
