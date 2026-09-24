# Gallery lightbox

## Goal
Add and validate a polished, mobile-friendly full-screen viewer for the anniversary gallery photos.

## Tasks
- [x] Map the existing gallery markup, styles, and JavaScript behavior.
- [x] Add accessible lightbox markup and controls.
- [x] Implement open, close, previous, next, keyboard, and reduced-motion behavior.
- [x] Verify all 13 image references and responsive presentation in the source.
- [ ] Complete manual browser validation for visual interaction and mobile layout.

## Scope
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`
- `README.md`
- `odd/tasks/gallery-lightbox.md`

## Non-goals
- No framework or build step.
- No changes to image files or song behavior.
- No autoplay or intrusive animation.

## Evidence
- Lightbox is present in `index.html`, `assets/css/styles.css`, and `assets/js/main.js`.
- All 13 gallery image references resolve to files in `assets/media/`.
- `node --check assets/js/main.js` passed previously.
- CSS brace balance passed previously.
- Lightbox IDs and JavaScript element references were cross-checked.
- Manual browser testing remains the only implementation validation pending; no browser binary is available in the verification environment.
- Static verification passed: JavaScript syntax, CSS brace balance, 13 image references, asset references, and HTML/JavaScript IDs.

## Current status
- Implementation: complete.
- Documentation synchronization: complete.
- Static verification: complete.
- Browser validation: pending human review in a real browser, preferably mobile-sized.
