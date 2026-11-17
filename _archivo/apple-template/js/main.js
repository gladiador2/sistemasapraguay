/* ============================================================
   APPLE TEMPLATE — INTERACTION ENGINE
   ============================================================ */

(function () {
  'use strict';

  /* ---- Scroll-reveal (IntersectionObserver) ---- */
  const revealEls = document.querySelectorAll('.reveal, .reveal-scale');
  if (revealEls.length) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    revealEls.forEach((el) => io.observe(el));
  }

  /* ---- Sticky nav background ---- */
  const nav = document.getElementById('main-nav');
  if (nav) {
    window.addEventListener('scroll', () => {
      nav.classList.toggle('nav-scrolled', window.scrollY > 2);
    }, { passive: true });
  }

  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById('nav-toggle');
  const navMenu   = document.getElementById('nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const open = navMenu.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', open);
      document.body.style.overflow = open ? 'hidden' : '';
    });
  }

  /* ---- Smooth scroll for anchor links ---- */
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  /* ---- Parallax hero (subtle depth) ---- */
  const heroParallax = document.querySelectorAll('[data-parallax]');
  if (heroParallax.length) {
    window.addEventListener('scroll', () => {
      const y = window.scrollY;
      heroParallax.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.3;
        el.style.transform = `translateY(${y * speed}px)`;
      });
    }, { passive: true });
  }

  /* ---- Video autoplay on scroll into view ---- */
  const videos = document.querySelectorAll('video[data-autoplay-scroll]');
  if (videos.length) {
    const vio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          e.isIntersecting ? e.target.play() : e.target.pause();
        });
      },
      { threshold: 0.3 }
    );
    videos.forEach((v) => { v.muted = true; vio.observe(v); });
  }

  /* ---- Ticker / marquee polyfill ---- */
  const tickers = document.querySelectorAll('[data-ticker]');
  tickers.forEach((ticker) => {
    const inner = ticker.querySelector('[data-ticker-inner]');
    if (!inner) return;
    const clone = inner.cloneNode(true);
    ticker.appendChild(clone);
  });

  /* ---- Number count-up animation ---- */
  function countUp(el) {
    const target = parseFloat(el.dataset.countup);
    const duration = 1800;
    const start = performance.now();
    const isDecimal = String(target).includes('.');
    function step(now) {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      el.textContent = isDecimal ? current.toFixed(1) : Math.floor(current).toLocaleString();
      if (progress < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }
  const countEls = document.querySelectorAll('[data-countup]');
  if (countEls.length) {
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { countUp(e.target); cio.unobserve(e.target); }
        });
      },
      { threshold: 0.5 }
    );
    countEls.forEach((el) => cio.observe(el));
  }

  /* ---- Theme toggle (dark/light) ---- */
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    const stored = localStorage.getItem('theme') || 'light';
    document.documentElement.dataset.theme = stored;
    themeBtn.addEventListener('click', () => {
      const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      document.documentElement.dataset.theme = next;
      localStorage.setItem('theme', next);
    });
  }
})();
