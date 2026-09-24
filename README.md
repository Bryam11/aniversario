# Andrea &amp; Xavier — Nuestra Historia

A cinematic, mobile-first anniversary website made for **Andrea Maldonado** and
**Xavier Chuchuca**. The site celebrates their anniversary (**September 24**),
how they met (**through a mutual friend**) and their first outing (**the Nidia
nightclub**).

Pure static **HTML / CSS / JavaScript** — no framework, no build step, no
server. Optimized for phones and trivial to deploy on **Vercel**.

---

## What's in the site

- **Opening hero** — names, date and a live countdown to the next anniversary.
- **Music control** — a floating player that plays the background song
  `assets/audio/nuestra-cancion.mp3`; tap to play or pause.
- **How it all began** — a timeline of story cards (mutual friend → Nidia →
  September 24 → today).
- **Our moments** — a gallery of 13 real photos with a full-screen lightbox:
  tap any photo to view it, then use the arrows, keyboard or swipe to browse.
- **A letter for you** — a fully written, styled letter for their third
  anniversary.
- **A surprise for you** — a reveal button that opens a celebration message
  (a teaser for their upcoming trip).

The visible romantic copy is in natural **Spanish**. All code, classes and docs
are in **English**.

---

## Local preview

Run any static server from this folder:

```bash
# Option A: Python
python3 -m http.server 8080

# Option B: Node (if you have a global static server)
npx serve .

# Option C: VS Code "Live Server" extension
```

Then open <http://localhost:8080> in your browser. Test on your phone with the
same WiFi to check mobile layout and performance.

---

## Deploy to Vercel

No configuration file is required.

1. Push this folder to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "Initial anniversary site"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```
2. Go to <https://vercel.com/new> and **Import** that repository. Vercel
   auto-detects a static site — leave the default settings.
3. Click **Deploy**. You'll get a public URL like `https://your-site.vercel.app`.

### Generate a QR code for the URL

- Use <https://www.qr-code-generator.com> or any QR generator, paste your public
  URL, and download the QR image to share on your phone.
- Or use your terminal:
  ```bash
  npx qrcode -o qr.png "https://your-site.vercel.app"
  ```

> Tip: you can also import the folder directly with the Vercel CLI:
> `npx vercel`.

---

## File map

```text
andrea-anniversary/
├── index.html              # Single-page site (all sections)
├── assets/
│   ├── css/styles.css      # Cinematic + romantic styles
│   ├── js/main.js          # Music, countdown, reveal, surprise, gallery lightbox
│   ├── media/              # Gallery photos (1–13), favicon, MEDIA.md guide
│   └── audio/              # Background song (nuestra-cancion.mp3) + AUDIO.md guide
├── README.md
└── .gitignore
```

Built with love, for Andrea.