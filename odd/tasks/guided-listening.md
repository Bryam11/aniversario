# Guided listening experience

## Goal
Guide the visitor through the anniversary page with a warm listening invitation, richer music states, and a dedicated song chapter without blocking access or inventing the song's personal history.

## Scope
- `index.html`
- `assets/css/styles.css`
- `assets/js/main.js`

## Plan
- [x] Add a concise “how to enjoy this” invitation and chapter guide.
- [x] Add a “Nuestra canción” section with honest placeholder-free framing that can later receive the real song story.
- [x] Improve music control labels and accessible status messaging.
- [x] Preserve user-initiated playback, no autoplay, and reduced-motion support.
- [x] Verify navigation, hooks, and static integrity.

## Evidence
- JS syntax and HTML balance checks passed.
- Chapter navigation 01–06 aligned and `#cancion` resolves.
- Headphone guidance present without an invented song title, artist, or origin.
- Music hint uses `aria-live` with improved states.
- Audio remains user-initiated; no autoplay.
- Existing lightbox/reveal/surprise hooks, CSS balance, reduced-motion, and 13 gallery assets verified.
- Browser visual validation remains pending because no browser is installed.

## Non-goals
- Do not invent why the song is special or quote lyrics without the user's supplied context.
- Do not autoplay audio or block the page behind a mandatory modal.
- Do not change the audio file.
