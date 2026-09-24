# Sunflower fullscreen reveal

## Goal
Transform the final chapter into a full-viewport romantic garden with sunflower-inspired yellow blooms that feel crafted and cinematic rather than decorative emoji.

## Scope
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`

## Plan
- [x] Replace the current small flower forms with sunflower-inspired layered blooms.
- [x] Expand the opened reveal into a full-viewport composition with depth and framing.
- [x] Add a graceful open/close interaction or an equally usable return path.
- [x] Preserve reduced-motion, accessibility, and performance constraints.
- [x] Verify existing surprise/music/lightbox/reveal hooks and static integrity.

## Evidence
- JS syntax and HTML balance passed.
- `surpriseContent` is an accessible fullscreen dialog with a close button, Escape handling, `hidden`/`aria-expanded` contract, and focus restoration.
- 7 decorative sunflowers render inside an `aria-hidden` garden.
- No Alausí/date/travel details added.
- CSS balanced; feature keyframes use `opacity`/`transform`/`rotation` only.
- Reduced-motion static; no autoplay or new scroll handlers added.
- Existing hooks remain intact.
- Browser visual validation remains pending because no browser is installed in this environment.

## Non-goals
- Do not add a heavy canvas or unbounded particle system.
- Do not add autoplay or unrelated trip details.
- Do not change the existing audio or gallery assets.
