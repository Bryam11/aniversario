# Cinematic motion

## Goal
Add a restrained motion system that makes the luxury editorial anniversary site feel alive without compromising performance or accessibility.

## Scope
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`

## Plan
- [x] Create a staged hero entrance using opacity and transform.
- [x] Add a slow, subtle movement to the hero photograph.
- [x] Improve reveal timing and timeline progression on scroll.
- [x] Make the surprise reveal feel like an emotional finale.
- [x] Preserve reduced-motion behavior and verify static integrity.

## Performance constraints
- Prefer compositor-friendly `transform` and `opacity`.
- Avoid continuous layout-affecting animation and broad `will-change` usage.
- Do not add autoplay, particle systems, or video backgrounds.

## Evidence
- JS syntax passed.
- CSS balance passed.
- All keyframes are defined and referenced.
- No `will-change` remains.
- No new scroll handlers.
- Reduced-motion covers the new animations.
- Existing IDs/hooks and hidden surprise content are preserved.
- Browser runtime validation remains pending because no browser is installed.
