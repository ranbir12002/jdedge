# JDedge Education Forum — React Starter Pack (Vite)

## Setup
```bash
npm install
npm run dev
```

## Structure
- `src/components/GlobalHeader/*` — global header + hamburger menu
- `src/pages/*` — each page has its own folder with `*.jsx` + `*.css`
- `src/components/ThreeHero/*` — simple 3D hero using React Three Fiber

## Add your assets
- Put logo files in `public/assets/` and update `src/components/GlobalHeader/GlobalHeader.jsx`.

## Notes on 3D
This starter includes a simple 3D hero on the Home page.
You can reuse `<ThreeHero />` across pages or create new R3F scenes per page.
