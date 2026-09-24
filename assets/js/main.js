/* ==========================================================================
   Andrea & Xavier — Anniversary site
   Vanilla JS: music control, scroll reveal, surprise toggle, gallery lightbox.
   No dependencies, no build step.
   ========================================================================== */
(function () {
  "use strict";

  /* --- Music control ------------------------------------------------------ */
  // Shared "start playback" hook, kept in module scope so the welcome layer can
  // begin the song from an explicit user action without owning any audio state.
  // The music control's own status / aria-pressed / error handling stays
  // authoritative. Null until initMusic() succeeds.
  var startMusicHook = null;

  function initMusic() {
    var root = document.getElementById("music");
    var button = document.getElementById("musicToggle");
    var audio = document.getElementById("bgMusic");
    var hint = document.getElementById("musicHint");
    if (!root || !button || !audio) return;

    var unavailable = false;

    function setHint(text) {
      if (hint) hint.textContent = text;
    }

    function markUnavailable(message) {
      unavailable = true;
      root.classList.remove("is-playing");
      root.classList.add("is-unavailable");
      button.setAttribute("aria-pressed", "false");
      setHint(message || "El audio aún no está disponible");
    }

    // Begin playback from an explicit user gesture. Never called on load; it
    // only runs from a click path (the music button or the welcome start). All
    // status updates happen here so the two entry points share one contract.
    function ensurePlaying() {
      if (unavailable) {
        // Retry once in case the file was added after load.
        unavailable = false;
        audio.load();
      }
      if (!audio.paused) return; // already playing: leave status untouched
      var playPromise = audio.play();
      if (playPromise && typeof playPromise.then === "function") {
        playPromise
          .then(function () {
            root.classList.add("is-playing");
            button.setAttribute("aria-pressed", "true");
            setHint("Reproduciendo · disfrutala");
          })
          .catch(function () {
            markUnavailable("El audio aún no está disponible");
          });
      }
    }

    startMusicHook = ensurePlaying;

    // Surface missing file / playback errors instead of failing silently.
    audio.addEventListener("error", function () {
      markUnavailable("El audio aún no está disponible");
    });

    button.addEventListener("click", function () {
      if (audio.paused) {
        ensurePlaying();
      } else {
        audio.pause();
        root.classList.remove("is-playing");
        button.setAttribute("aria-pressed", "false");
        setHint("En pausa · toca para reanudar");
      }
    });

    audio.addEventListener("ended", function () {
      root.classList.remove("is-playing");
      button.setAttribute("aria-pressed", "false");
      setHint("Toca para escucharla de nuevo");
    });
  }

  /* --- First-visit welcome ------------------------------------------------ */
  var WELCOME_KEY = "andrea-anniversary-welcome-seen";
  var welcomeDismissed = false; // hard guard: never re-arm after dismissal

  function canUseStorage() {
    try {
      if (!window.localStorage) return false;
      window.localStorage.setItem("__welcome_probe__", "1");
      window.localStorage.removeItem("__welcome_probe__");
      return true;
    } catch (e) {
      return false; // private mode / disabled storage: fail open below
    }
  }

  function initWelcome() {
    var welcome = document.getElementById("welcome");
    var startBtn = document.getElementById("welcomeStart");
    var skipBtn = document.getElementById("welcomeSkip");
    if (!welcome || !startBtn || !skipBtn) return;

    var storageOk = canUseStorage();
    var seen = false;
    if (storageOk) {
      try { seen = window.localStorage.getItem(WELCOME_KEY) === "1"; }
      catch (e) { seen = false; }
    }

    if (seen || welcomeDismissed) return; // already welcomed: stay hidden

    function remember() {
      if (storageOk) {
        try { window.localStorage.setItem(WELCOME_KEY, "1"); }
        catch (e) { /* fail open: it still dismisses for this visit */ }
      } else {
        // No persistence available: show it once for this page only.
        welcomeDismissed = true;
      }
    }

    function dismiss() {
      welcomeDismissed = true;
      welcome.classList.remove("is-open");
      welcome.setAttribute("hidden", "");
      welcome.setAttribute("aria-hidden", "true");
      // Return focus to a sensible target: the music control or the hero CTA.
      var target = document.getElementById("musicToggle") || document.querySelector(".hero__cta");
      if (target && typeof target.focus === "function") {
        target.focus({ preventScroll: true });
      }
    }

    startBtn.addEventListener("click", function () {
      remember();
      dismiss();
      // Music begins only from this explicit begin action; its own status
      // handling (unavailable state included) stays authoritative above.
      if (startMusicHook) startMusicHook();
    });

    skipBtn.addEventListener("click", function () {
      remember();
      dismiss();
    });

    // Show it for the first time.
    welcome.removeAttribute("hidden");
    welcome.setAttribute("aria-hidden", "false");
    welcome.classList.add("is-open");
    startBtn.focus({ preventScroll: true });
  }

  /* --- Scroll reveal ------------------------------------------------------ */
  function initReveal() {
    var items = document.querySelectorAll(".reveal");
    if (!items.length) return;

    var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      Array.prototype.forEach.call(items, function (el) { el.classList.add("is-visible"); });
      return;
    }

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

    Array.prototype.forEach.call(items, function (el) { observer.observe(el); });
  }

  /* --- Surprise reveal ---------------------------------------------------- */
  // Opener toggles a full-viewport overlay (#surpriseContent -> display). A
  // dedicated close control and Escape both restore `hidden`, aria-expanded
  // and focus to the opener, so the full-screen state is never a dead end.
  function initSurprise() {
    var button = document.getElementById("surpriseButton");
    var content = document.getElementById("surpriseContent");
    var closeButton = document.getElementById("surpriseClose");
    if (!button || !content || !closeButton) return;

    function open() {
      button.setAttribute("aria-expanded", "true");
      content.hidden = false;
      content.scrollIntoView({ behavior: "smooth", block: "center" });
      closeButton.focus({ preventScroll: true });
    }

    function close() {
      content.hidden = true;
      button.setAttribute("aria-expanded", "false");
      button.focus({ preventScroll: true });
    }

    button.addEventListener("click", function () {
      if (button.getAttribute("aria-expanded") === "true") {
        close();
      } else {
        open();
      }
    });

    closeButton.addEventListener("click", close);

    content.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    });
  }

  /* --- Gallery lightbox ---------------------------------------------------- */
  function initLightbox() {
    var gallery = document.querySelector(".gallery");
    var lightbox = document.getElementById("lightbox");
    if (!gallery || !lightbox) return;

    var image = document.getElementById("lightboxImage");
    var caption = document.getElementById("lightboxCaption");
    var counter = document.getElementById("lightboxCounter");
    var figureBox = lightbox.querySelector(".lightbox__figure");
    var closeButton = document.getElementById("lightboxClose");
    var prevButton = document.getElementById("lightboxPrev");
    var nextButton = document.getElementById("lightboxNext");
    if (!image || !caption || !closeButton || !prevButton || !nextButton) return;

    var currentIndex = -1;
    var lastTrigger = null;
    var isOpen = false;
    var closeTimer = null;

    function photos() {
      // Live from the DOM: caption/alt/src edits need no extra wiring.
      return Array.prototype.slice.call(gallery.querySelectorAll("figure[data-lightbox]"));
    }

    function showAt(index, trigger) {
      var items = photos();
      if (!items.length) return;
      index = (index + items.length) % items.length; // wrap both directions

      var figure = items[index];
      var img = figure.querySelector("img");
      var figcaption = figure.querySelector("figcaption");
      var src = img ? img.getAttribute("src") : "";
      if (!src) return; // never open an empty item

      currentIndex = index;
      lastTrigger = trigger || figure;

      image.src = src;
      image.alt = img ? img.alt : "";
      caption.textContent = figcaption ? figcaption.textContent : "";
      if (counter) counter.textContent = (index + 1) + " de " + items.length;

      window.clearTimeout(closeTimer);
      lightbox.removeAttribute("hidden");
      void lightbox.offsetWidth; // force reflow so the open fade runs
      lightbox.classList.add("is-open");
      document.documentElement.classList.add("is-locked");
      document.body.classList.add("is-locked");
      isOpen = true;

      if (trigger) closeButton.focus(); // move focus only on first open
    }

    function close() {
      if (!isOpen) return;
      isOpen = false;
      lightbox.classList.remove("is-open");
      document.documentElement.classList.remove("is-locked");
      document.body.classList.remove("is-locked");

      var restoreFocus = lastTrigger;
      var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      closeTimer = window.setTimeout(function () {
        if (isOpen) return; // reopened while closing: bail out
        lightbox.setAttribute("hidden", "");
        if (restoreFocus && typeof restoreFocus.focus === "function") {
          restoreFocus.focus({ preventScroll: true });
        }
      }, reduceMotion ? 0 : 350);
    }

    // Delegated open: any gallery photo (mouse or keyboard) triggers the viewer.
    gallery.addEventListener("click", function (event) {
      var figure = event.target.closest("figure[data-lightbox]");
      if (!figure || !gallery.contains(figure)) return;
      var index = photos().indexOf(figure);
      if (index !== -1) showAt(index, figure);
    });

    gallery.addEventListener("keydown", function (event) {
      var figure = event.target.closest("figure[data-lightbox]");
      if (!figure || !gallery.contains(figure)) return;
      if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
        event.preventDefault();
        var index = photos().indexOf(figure);
        if (index !== -1) showAt(index, figure);
      }
    });

    prevButton.addEventListener("click", function () { if (isOpen) showAt(currentIndex - 1); });
    nextButton.addEventListener("click", function () { if (isOpen) showAt(currentIndex + 1); });
    closeButton.addEventListener("click", close);

    // Backdrop click: the padded area around the figure, plus letterboxed gaps.
    lightbox.addEventListener("click", function (event) {
      if (!isOpen) return;
      if (event.target === lightbox) {
        close();
        return;
      }
      if (event.target === figureBox && image.getBoundingClientRect().width > 0) {
        var rect = image.getBoundingClientRect();
        var insideImage =
          event.clientX >= rect.left && event.clientX <= rect.right &&
          event.clientY >= rect.top && event.clientY <= rect.bottom;
        if (!insideImage) close();
      }
    });

    lightbox.addEventListener("keydown", function (event) {
      if (!isOpen) return;
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        showAt(currentIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showAt(currentIndex + 1);
      } else if (event.key === "Tab") {
        // Keep focus inside the dialog (close, prev, next).
        var focusables = Array.prototype.slice.call(lightbox.querySelectorAll("button"));
        if (!focusables.length) return;
        var first = focusables[0];
        var last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus({ preventScroll: true });
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus({ preventScroll: true });
        }
      }
    });

    // Keyboard-accessible triggers: figures carry tabindex="0", name them here.
    Array.prototype.forEach.call(photos(), function (figure) {
      var img = figure.querySelector("img");
      if (!figure.getAttribute("role")) figure.setAttribute("role", "button");
      if (img && !figure.getAttribute("aria-label")) {
        figure.setAttribute("aria-label", "Ver foto: " + img.alt);
      }
    });
  }

  /* --- Boot --------------------------------------------------------------- */
  function boot() {
    initMusic();
    initWelcome();
    initReveal();
    initSurprise();
    initLightbox();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }
})();
