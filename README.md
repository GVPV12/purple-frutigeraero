<img width="1912" height="947" alt="brave_screenshot" src="https://github.com/user-attachments/assets/ddb5b011-7356-4a16-afd8-bc084a5ade61" />

# purple-frutigeraero
Free non-generic fast and beautiful purple Frutiger Aero static website built with HTML CSS and JS only. For nekoweb, neocities, etc

Live preview: https://purplefrutiger.netlify.app/

Download: https://ko-fi.com/s/85c0e669bc

# ✦ StarWindow Retro Blog

> A handcrafted, fully tested and functional Y2K / purple kawaii blog template.
> No frameworks. No build tools. Just HTML, CSS, and JS.

![License](https://img.shields.io/badge/license-personal%20use-c890f8)
![HTML](https://img.shields.io/badge/HTML-5-9050d8)
![CSS](https://img.shields.io/badge/CSS-3-b060e0)
![JavaScript](https://img.shields.io/badge/JavaScript-ES5-8030c0)
![Hosting](https://img.shields.io/badge/hosting-Nekoweb%20%7C%20Neocities%20%7C%20any%20static-7040a0)

---


## ✦ About

StarWindow Retro Blog is a personal blog template with a **Y2K / purple kawaii** aesthetic
inspired by early-2000s Windows, pixel art, and MSN Messenger culture.

This is **not a generic template**. Every detail was hand-coded from scratch:
the retro titlebar, bouncing mascot, animated star decorations, pixel-font navigation,
marquee strips, iridescent CD music player, image lightbox, and mobile layout.

It is **fully functional as a visual shell** — tabs switch, the music player plays,
images load with emoji fallbacks, the lightbox works. What is not included yet are
real blog posts. See the [editing guide](#-editing-guide) to start publishing.

---

## ✦ Features

- **Retro Windows-style header** — animated title, bouncing mascot PNG, badge row, marquee strip
- **Tab navigation** — Home (posts), About, Art gallery, Diary, Music, Links
- **Sidebar** — profile card, about blurb, animated SoundCloud player with CD disc + EQ bars
- **Image support everywhere** — every slot accepts a URL with automatic emoji fallback
- **Lightbox popup** — click any image to view it full size
- **Marquee strips** — one below the header badges, one in the sidebar
- **Visitor counter, category links, recent posts, tag cloud**
- **Mobile-friendly layout**
- **Pure HTML + CSS + JS** — no npm, no build step, no dependencies

---

## ✦ File Structure

```
starwindow-retro-blog/
├── index.html          ← all content: header, tabs, sidebar, footer
├── style.css           ← all styles (CSS variables at the top for easy theming)
├── blog.js             ← tab switching, SC player, lightbox, image fallbacks
└── RETRO-BLOG-GUIDE.txt ← full editing guide
```

---

## ✦ Quick Start

1. Download or clone this repo
2. Open `index.html` in your browser to preview locally
3. Edit following the guide below
4. Upload all three files (`index.html`, `style.css`, `blog.js`) to your hosting

> All three files must be in the **same folder** for links to work correctly.

---

## ✦ Editing Guide

Every editable spot in `index.html` is marked with a `★ change` comment.
Use `Ctrl+F` to search for it.

### Text & name
| What | Where in index.html |
|---|---|
| Site title | `<div class="header-sitename">` |
| URL in titlebar | `<div class="tb-url">` |
| Header description | `<div class="header-desc">` |
| Badge labels | `<span class="badge b1">` — b1 to b5 for colors |
| Marquee text | Search `<marquee` |
| Footer text | `<div class="footer-copy">` and `<div class="footer-made">` |

### Colors
Open `style.css`. At the very top, edit the `:root { }` variables:

```css
:root {
  --border2:   #8050c0;   /* darker borders, panel headers */
  --accent:    #c080f8;   /* purple highlight */
  --nav-top:   #c890f8;   /* nav gradient top */
  --nav-bot:   #9050d8;   /* nav gradient bottom */
  --text-dark: #2a0a4a;   /* main text */
  --text-mid:  #5a2a8a;   /* secondary text */
  /* ...and more — all labeled in the file */
}
```

Change any value and the whole site updates automatically.

### Images
Every image uses this pattern — replace `src`, the emoji is the fallback:
```html
<img class="icon-img" src="YOUR-IMAGE-URL" alt="description"
     onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
<span class="icon-fallback">🌟</span>
```

| Image | Search for in index.html |
|---|---|
| Mascot (left header) | `class="header-mascot"` |
| Decorative PNG (right header) | `class="header-img-right"` |
| Avatar (sidebar) | `class="pw-avatar"` |
| Social icon buttons | `class="pw-soc-btn"` |
| Post thumbnails | `class="post-img pi-1"` (pi-2, pi-3) |
| About banner | `class="about-banner"` |
| Art gallery (6 slots) | `class="art-item"` |
| Diary thumbnails | `class="diary-thumb"` |

### Music player
The player uses the **SoundCloud Widget API** — no audio files needed.

1. Go to the SoundCloud track you want
2. Copy its URL (e.g. `https://soundcloud.com/artist/track`)
3. URL-encode it at [urlencoder.org](https://www.urlencoder.org/)
4. In `index.html`, find `id="sc-player-rb"` and replace the URL in `src=`
5. Update the track name: find `id="rb-track"` and change the text

### Tabs — where each section lives
| Tab ID | Content |
|---|---|
| `tab-blog` | Blog post cards (home) |
| `tab-about` | About banner, text, facts list |
| `tab-art` | Art gallery — 6 image slots (lightbox enabled) |
| `tab-diary` | Diary entry cards |
| `tab-music` | Favorite songs list |
| `tab-links` | Social / external links |

### Adding a new post
Find `id="tab-blog"` in `index.html`. Copy one existing post block and paste it
above the others (newest first). Edit the date, category class, image, title,
and excerpt. Also update the recent posts list in the sidebar.

---

## ✦ .shtml for Nekoweb (optional)

Nekoweb supports **Server Side Includes (.shtml)**, which lets you write the
header, sidebar, and footer once and reuse them across all pages.

The full step-by-step conversion guide is in `RETRO-BLOG-GUIDE.txt`.

**Recommended folder structure for .shtml:**
```
your-site/
├── index.shtml
├── style.css
├── blog.js
├── _parts/
│   ├── header.html
│   ├── sidebar.html
│   └── footer.html
└── posts/
```

---

## ✦ Automation Scripts (optional)

Two optional Python 3 scripts are available on request:

| Script | What it does |
|---|---|
| `post-generator.py` | Reads a `.txt` post file → generates HTML → inserts it into your index |
| `feed-generator.py` | Scans your `posts/` folder → generates/updates `feed.xml` (RSS) |

Both work with plain HTML and `.shtml`.

> Scripts are provided as-is. Due to frequent platform updates, minor adjustments
> may occasionally be needed.
> **Contact:** greciavalentinapv@gmail.com

---

## ✦ Hosting

This is a **static website** — it runs entirely in the browser with no server,
database, or backend. Compatible with any static hosting:

| Platform | Notes |
|---|---|
| [Nekoweb](https://nekoweb.org) | Supports `.shtml` for free — recommended |
| [Neocities](https://neocities.org) | Free static hosting, widely used |
| GitHub Pages | Free, good for versioned projects |
| Any static host | Netlify, Vercel, Cloudflare Pages, etc. |

---

## ✦ License

Personal use only. You may edit and use this template for your own site.
Do not redistribute or resell the base template.
Credit appreciated but not required — a link back or a mention is always lovely ♡

---

## ✦ Contact

For custom setups, extra pages, automation help, or a fully built blog:

**Email:** greciavalentinapv@gmail.com

I'm a freelance web designer and developer. I can build a fully automated,
custom version of this blog for you.

---

<p align="center">made with ♡ · StarWindow Retro Blog · Y2K / purple kawaii aesthetic</p>
