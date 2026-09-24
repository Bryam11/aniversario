# Shared next chapter

## Goal
Reframe the planned Alausí trip as a shared next chapter and create a restrained yellow-flower reveal that celebrates the journey without presenting it as a secret surprise.

## Scope
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`

## Plan
- [x] Rename and rewrite the trip section as a shared next chapter.
- [x] Add a lightweight yellow-flower bloom animation to the reveal.
- [x] Preserve the existing button, hidden content, keyboard, and reduced-motion behavior.
- [x] Verify structure, hooks, and performance constraints.

## Evidence
- JS syntax and HTML balance checks passed.
- Shared chapter copy preserves October 16 and Alausí.
- `surpriseButton`/`surpriseContent` hidden and `aria-expanded` contract preserved.
- Five decorative flowers present with `aria-hidden`.
- Flower animations use only opacity, transform, and rotation.
- Reduced motion disables the flower animations.
- No autoplay or scroll handlers.
- Existing hooks remain intact.
- Browser visual validation remains pending because no browser is installed.

## Non-goals
- Do not change the Alausí destination or October 16 date.
- Do not add heavy canvas, particle systems, or autoplay.
- Do not change the existing media or audio assets.
