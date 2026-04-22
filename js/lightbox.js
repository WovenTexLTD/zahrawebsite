/* ============================================================
   ZAHRA INTERIOR ARCHITECTURE — Image Lightbox
   ============================================================ */

(function () {
  'use strict';

  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const tiles = Array.from(grid.querySelectorAll('.project-card'));
  if (!tiles.length) return;

  const items = tiles
    .map((tile) => {
      const img = tile.querySelector('img');
      if (!img) return null;
      return { src: img.currentSrc || img.src, alt: img.alt || '', sourceEl: tile };
    })
    .filter(Boolean);

  tiles.forEach((tile, i) => {
    if (!items[i]) return;
    tile.setAttribute('role', 'button');
    tile.setAttribute('tabindex', '0');
    tile.setAttribute('aria-label', `View image: ${items[i].alt || 'project image'}`);
    tile.addEventListener('click', () => openLightbox(i));
    tile.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openLightbox(i);
      }
    });
  });

  const lb = document.createElement('div');
  lb.className = 'lightbox';
  lb.setAttribute('role', 'dialog');
  lb.setAttribute('aria-modal', 'true');
  lb.setAttribute('aria-label', 'Image viewer');
  lb.hidden = true;
  lb.innerHTML = `
    <button class="lightbox__close" type="button" aria-label="Close image viewer">
      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
        <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round"/>
      </svg>
    </button>
    <button class="lightbox__prev" type="button" aria-label="Previous image">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M15 5l-7 7 7 7" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <button class="lightbox__next" type="button" aria-label="Next image">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
        <path d="M9 5l7 7-7 7" stroke="currentColor" stroke-width="1.4" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    <figure class="lightbox__figure">
      <div class="lightbox__image-wrap">
        <img class="lightbox__image" src="" alt="" decoding="async">
      </div>
      <figcaption class="lightbox__caption"></figcaption>
    </figure>
    <p class="lightbox__counter" aria-live="polite"></p>
  `;
  document.body.appendChild(lb);

  const imgEl     = lb.querySelector('.lightbox__image');
  const captionEl = lb.querySelector('.lightbox__caption');
  const counterEl = lb.querySelector('.lightbox__counter');
  const closeBtn  = lb.querySelector('.lightbox__close');
  const prevBtn   = lb.querySelector('.lightbox__prev');
  const nextBtn   = lb.querySelector('.lightbox__next');

  let currentIndex = -1;
  let previouslyFocused = null;

  function updateImage(index) {
    const item = items[index];
    if (!item) return;
    currentIndex = index;
    imgEl.classList.add('is-loading');

    const apply = () => {
      imgEl.src = item.src;
      imgEl.alt = item.alt;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => imgEl.classList.remove('is-loading'));
      });
    };

    const preload = new Image();
    preload.src = item.src;
    if (preload.complete) apply();
    else preload.onload = apply;

    captionEl.textContent = item.alt;
    counterEl.textContent = `${index + 1} / ${items.length}`;

    [1, -1].forEach((d) => {
      const n = items[(index + d + items.length) % items.length];
      if (n) new Image().src = n.src;
    });
  }

  function openLightbox(index) {
    previouslyFocused = document.activeElement;
    lb.hidden = false;
    updateImage(index);
    document.body.classList.add('lightbox-open');
    void lb.offsetHeight;
    lb.classList.add('open');
    setTimeout(() => closeBtn.focus(), 60);
  }

  function closeLightbox() {
    lb.classList.remove('open');
    document.body.classList.remove('lightbox-open');
    const onEnd = (e) => {
      if (e.target !== lb) return;
      lb.hidden = true;
      lb.removeEventListener('transitionend', onEnd);
    };
    lb.addEventListener('transitionend', onEnd);
    setTimeout(() => { if (!lb.classList.contains('open')) lb.hidden = true; }, 600);
    if (previouslyFocused && previouslyFocused.focus) previouslyFocused.focus();
  }

  function next() { updateImage((currentIndex + 1) % items.length); }
  function prev() { updateImage((currentIndex - 1 + items.length) % items.length); }

  closeBtn.addEventListener('click', closeLightbox);
  nextBtn.addEventListener('click', next);
  prevBtn.addEventListener('click', prev);
  lb.addEventListener('click', (e) => {
    if (e.target === lb) closeLightbox();
  });

  document.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') { closeLightbox(); return; }
    if (e.key === 'ArrowRight') { next(); return; }
    if (e.key === 'ArrowLeft')  { prev(); return; }
    if (e.key === 'Tab') {
      const focusables = [closeBtn, prevBtn, nextBtn];
      const i = focusables.indexOf(document.activeElement);
      if (i === -1) return;
      e.preventDefault();
      const dir = e.shiftKey ? -1 : 1;
      focusables[(i + dir + focusables.length) % focusables.length].focus();
    }
  });

  let touchX = null;
  lb.addEventListener('touchstart', (e) => {
    touchX = e.changedTouches[0].clientX;
  }, { passive: true });
  lb.addEventListener('touchend', (e) => {
    if (touchX === null) return;
    const dx = e.changedTouches[0].clientX - touchX;
    if (Math.abs(dx) > 50) (dx < 0 ? next : prev)();
    touchX = null;
  }, { passive: true });
})();
