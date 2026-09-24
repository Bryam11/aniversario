# Yellow garden reveal

## Goal
Turn the final chapter into an open romantic moment and replace the understated flower effect with a more expressive but lightweight yellow garden bloom.

## Scope
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`

## Plan
- [x] Remove the known destination/date details from the final chapter.
- [x] Rewrite the final message as an open romantic next-chapter invitation.
- [x] Build a layered yellow garden reveal with stems, petals, glow, and gentle sway.
- [x] Preserve accessibility, reduced-motion, and the existing reveal contract.
- [x] Verify performance constraints and static integrity.

## Evidence
- JS syntax and HTML balance passed.
- Final chapter has no Alausí/date/train/trip details.
- New romantic copy present.
- surpriseButton/surpriseContent hidden, aria-expanded, and aria-hidden garden preserved.
- 7 flowers, 35 petals, 7 centers and stems.
- CSS balanced and keyframes valid.
- Garden animations use opacity/transform/rotation only.
- Reduced-motion makes the garden static.
- No new scroll/autoplay behavior.
- Browser visual validation remains pending: no browser is installed.

## Non-goals
- Do not add a new destination, date, or invented event.
- Do not use canvas, large particle systems, or autoplay.
- Do not change the audio, gallery, or lightbox behavior.
