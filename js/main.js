/* ============================================================
   ZAHRA INTERIOR ARCHITECTURE — Main JavaScript
   ============================================================ */

(function () {
  'use strict';

  /* ── NAV SCROLL BEHAVIOUR ─────────────────────────────── */
  const nav = document.getElementById('nav');

  if (nav) {
    const handleScroll = () => {
      nav.classList.toggle('scrolled', window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // run once on load
  }

  /* ── HAMBURGER MENU ───────────────────────────────────── */
  const hamburger  = document.getElementById('hamburger');
  const mobileNav  = document.getElementById('mobileNav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.getAttribute('aria-expanded') === 'true';

      hamburger.setAttribute('aria-expanded', String(!isOpen));

      if (!isOpen) {
        mobileNav.removeAttribute('hidden');
        mobileNav.classList.add('open');
        // Trap focus to first link
        const firstLink = mobileNav.querySelector('a');
        if (firstLink) firstLink.focus();
      } else {
        mobileNav.setAttribute('hidden', '');
        mobileNav.classList.remove('open');
        hamburger.focus();
      }
    });

    // Close on Escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('hidden', '');
        mobileNav.classList.remove('open');
        hamburger.focus();
      }
    });

    // Close when a mobile nav link is clicked
    mobileNav.querySelectorAll('a').forEach((link) => {
      link.addEventListener('click', () => {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('hidden', '');
        mobileNav.classList.remove('open');
      });
    });

    // Close on outside click
    document.addEventListener('click', (e) => {
      if (
        mobileNav.classList.contains('open') &&
        !mobileNav.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('hidden', '');
        mobileNav.classList.remove('open');
      }
    });
  }

  /* ── ACTIVE NAV LINK ─────────────────────────────────── */
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__link').forEach((link) => {
    const linkPath = link.getAttribute('href')?.split('/').pop();
    if (linkPath === currentPath) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });

  /* ── INTERSECTION OBSERVER — FADE IN ─────────────────── */
  const fadeEls = document.querySelectorAll('.fade-in');

  if (fadeEls.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    fadeEls.forEach((el) => observer.observe(el));
  } else {
    // Fallback: show all immediately
    fadeEls.forEach((el) => el.classList.add('visible'));
  }

  /* ── SMOOTH SCROLL FOR ANCHOR LINKS ─────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href').slice(1);
      if (!targetId) return;
      const target = document.getElementById(targetId);
      if (target) {
        e.preventDefault();
        const navHeight = parseInt(
          getComputedStyle(document.documentElement).getPropertyValue('--nav-height'),
          10
        ) || 80;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 24;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });

  /* ── SUBTLE IMAGE LOAD FADE ──────────────────────────── */
  document.querySelectorAll('img[loading="lazy"]').forEach((img) => {
    img.style.opacity = '0';
    img.style.transition = 'opacity 0.5s ease';

    const reveal = () => { img.style.opacity = '1'; };

    if (img.complete) {
      reveal();
    } else {
      img.addEventListener('load', reveal);
    }
  });

})();
