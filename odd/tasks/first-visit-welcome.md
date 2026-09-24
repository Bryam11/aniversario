# First-visit welcome

## Goal
Create a brief cinematic welcome shown on the first visit that explains the listening experience and starts the song only after the visitor explicitly begins.

## Scope
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`

## Plan
- [ ] Add an accessible, non-invasive first-visit welcome layer.
- [ ] Start music from the explicit “Comenzar nuestra historia” action.
- [ ] Persist dismissal with localStorage and provide a skip option.
- [ ] Preserve fallback behavior when audio is unavailable and support reduced motion.
- [ ] Verify no autoplay occurs without user interaction and no page lock remains after dismissal.

## Non-goals
- Do not force audio without an explicit user action.
- Do not block users permanently or remove access to the page.
- Do not add a second audio player or change the media file.
