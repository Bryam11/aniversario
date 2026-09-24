# Media library

Put the real photos, videos and audio in this folder, then wire them into `../index.html`.

## How to add content

- **Photos**: add `ahora-nuestros-momentos.jpg` (or similar), then in `../index.html` replace
  each placeholder `<div class="media__frame">` with:

  ```html
  <div class="media__frame">
    <img src="assets/media/mi-foto.jpg" alt="Descripción de la foto" loading="lazy" />
  </div>
  ```

- **Videos**: add a `.mp4` file and replace the placeholder frame with a `<video controls>` element.
- **Audio clips**: add a `.mp3` file and use an `<audio controls>` element inside the frame.

> Mobile note: keep photos reasonably compressed (ideally under ~300 KB each) and
> videos short so the page loads fast on phones.

The SVG favicon (`favicon.svg`) is already wired up and can stay here.