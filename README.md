# PANELVERSE

Digital comic publication website. DPP Assignment 2, Question 2 (SDG 4: Quality Education).
Devan S · S7 CSD · Roll No. 24 · FISAT

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in /dist
```

Requires Node 18+.

## Stack
React 18, Vite 5, Tailwind CSS 3, Framer Motion, Lucide React. All artwork is original inline SVG, so no images can fail to load.

## Structure
```
src/
  App.jsx                 page composition, modals, state
  data/comics.jsx         comics, categories, reader pages
  art/                    SVG covers, category art, 6 reader panels
  components/             Navbar, Hero, Featured, Categories, Library,
                          Reader, About, Footer, Modal, Loader, Reveal
```

## Features
Loading animation, sticky navbar with animated underline, hero with floating elements, featured cards, category cards that filter the library, live search, and a comic reader (prev/next, arrow keys, Esc, progress bar, page counter). "The Little Inventor" is the complete 6-panel sample story.
