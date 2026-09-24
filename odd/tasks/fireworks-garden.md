# Fireworks garden finale

## Goal
Add a restrained fireworks celebration in the sky of the fullscreen moonlit garden reveal.

## Scope
- `index.html`
- `assets/css/styles.css`

## Plan
- [x] Add a bounded decorative fireworks layer in the garden sky.
- [x] Animate bursts with opacity/transform only and keep the central message clear.
- [x] Preserve aria-hidden, reduced-motion, close behavior, and performance constraints.
- [x] Verify static integrity and create the requested commit.

## Evidence

- JS syntax, HTML, and CSS checks passed.
- Fireworks are inside the `aria-hidden` garden.
- 4 bursts / 40 sparks.
- No focusable decorative elements.
- Keyframes use opacity/transform only.
- Reduced-motion disables fireworks.
- Existing hooks preserved; no-autoplay / no-new-scroll constraints retained.
- Browser visual validation remains pending: no browser is installed.

## Non-goals
- Do not use canvas, unbounded particle systems, or autoplay.
- Do not cover the message, close control, or flowers.
- Do not change the romantic copy or add trip details.
