# Wonseok Oh — Modern Studio site

A modern, dynamic personal site: dark-first with a light/dark toggle, glassmorphism cards,
animated gradient background orbs, a cyan→violet accent, and a stats strip. Space Grotesk
display type + Inter body. Same content as the editorial version — different skin.
Pure static HTML/CSS/JS — no build, no Jekyll.

## Run locally
Open `index.html`, or serve the folder:
```bash
cd wonseok-modern-site
python3 -m http.server 8000   # http://localhost:8000
```

## Deploy to GitHub Pages
Copy the **contents** of this folder into your `prbs5kong.github.io` repo root (add an empty
`.nojekyll` file so Pages serves it as-is), or push this folder as a repo and enable Pages.

## Structure
```
index.html     # content + section markup
style.css      # theme tokens, glass primitive, layout
script.js      # theme toggle (dark-first), scroll reveal, pub filter
assets/        # img/ (profile + projects) · media/ (pub thumbs + Hearing Hands video) · pdf/ (CV)
```

## How to edit
- **Hero / bio / links** → top of `index.html` (`.hero`).
- **Stats strip** → the four `.stat` blocks in the hero.
- **Publications** → `.pub` cards in `#research`; `data-selected="true"` shows under the *Selected* filter.
  The first card is rendered wide (featured) automatically.
- **Other projects** → `.proj` cards in `#projects`.
- **Experience / education** → `.entry` cards in `#experience`.
- **Colors** → top of `style.css`: `--c1` (cyan) and `--c2` (violet) drive the whole gradient;
  the light theme overrides them under `html[data-theme="light"]`.
- **Fonts** → Google Fonts `<link>` in `index.html` (Space Grotesk + Inter).

## Notes / TODO for Wonseok
- Profile photo is ~537×715 — fine here; swap for a higher-res shot if you like.
- The "Paper" links for the GAN-inversion and KCC papers point at the CV PDF — replace with
  real arXiv/paper URLs when available.
- Project-image → title pairing was assigned in listed order; reorder the `<img src>` values
  in `#projects` if any thumbnail doesn't match.
