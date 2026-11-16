// Andrew Saba — portfolio interactions
(() => {
  'use strict';
  const root = document.documentElement;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = matchMedia('(hover: hover) and (pointer: fine)').matches;

  // ── smooth scroll ─────────────────────────────────────────────────────
  let lenis = null;
  if (!reduced && window.Lenis) {
    lenis = new Lenis({ lerp: 0.1, wheelMultiplier: 1 });
    const raf = (t) => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  const onScroll = (fn) => (lenis ? lenis.on('scroll', fn) : addEventListener('scroll', fn, { passive: true }));

  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const target = document.querySelector(a.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target, { offset: 0, duration: 1.4 });
      else target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth' });
    });
  });

  // ── loader → hero reveal ──────────────────────────────────────────────
  document.querySelectorAll('.hero-name .ch').forEach((c, i) => c.style.setProperty('--i', i));
  let revealed = false;
  const reveal = () => {
    if (revealed) return;
    revealed = true;
    root.classList.add('is-loaded');
    setTimeout(() => root.classList.add('is-gone'), 1000);
  };
  if (reduced) reveal();
  else {
    // keep the loader short: fonts are the only thing worth waiting for
    Promise.race([document.fonts.ready, new Promise((r) => setTimeout(r, 1200))])
      .then(() => setTimeout(reveal, 650));
  }

  // ── nav: solid after hero top, hide on scroll down ────────────────────
  const nav = document.querySelector('.nav');
  let lastY = window.scrollY;
  onScroll(() => {
    const y = window.scrollY;
    nav.classList.toggle('is-solid', y > 40);
    if (y < window.innerHeight * 0.6) { nav.classList.remove('is-hidden'); lastY = y; return; }
    // smooth-scroll settles with zero or sub-pixel steps; only react to a real move
    if (Math.abs(y - lastY) < 8) return;
    nav.classList.toggle('is-hidden', y > lastY);
    lastY = y;
  });

  // ── statement: words light up as you scroll through it ────────────────
  const scrub = document.querySelector('[data-scrub]');
  if (scrub) {
    const words = scrub.textContent.trim().split(/\s+/);
    scrub.textContent = '';
    const spans = words.map((w, i) => {
      const s = document.createElement('span');
      s.className = 'w';
      s.textContent = w;
      scrub.append(s, i < words.length - 1 ? ' ' : '');
      return s;
    });
    const section = scrub.closest('.statement');
    const update = () => {
      if (reduced) return;
      const r = section.getBoundingClientRect();
      const travel = r.height - window.innerHeight;
      const p = Math.min(1, Math.max(0, -r.top / (travel * 0.8)));
      const lit = Math.round(p * spans.length);
      spans.forEach((s, i) => s.classList.toggle('on', i < lit));
    };
    onScroll(update);
    addEventListener('resize', update);
    update();
  }

  // ── expandable rows ───────────────────────────────────────────────────
  document.querySelectorAll('.item-head').forEach((head) => {
    const item = head.closest('.item');
    head.addEventListener('click', () => {
      const open = !item.classList.contains('open');
      item.classList.toggle('open', open);
      head.setAttribute('aria-expanded', String(open));
      const video = item.querySelector('video');
      if (video) open ? video.play().catch(() => {}) : video.pause();
      if (open) hidePreview();
    });
  });

  // ── cursor-following screenshot preview on project rows ───────────────
  const preview = document.querySelector('.preview');
  const previewImg = preview.querySelector('img');
  let px = 0, py = 0, tx = 0, ty = 0, rafId = 0;
  function hidePreview() { preview.classList.remove('on'); }
  if (finePointer && !reduced) {
    const tick = () => {
      px += (tx - px) * 0.14;
      py += (ty - py) * 0.14;
      const tilt = Math.max(-8, Math.min(8, (tx - px) * 0.08));
      preview.style.transform = `translate3d(${px}px, ${py}px, 0) translate(-50%, -50%) rotate(${tilt}deg)`;
      rafId = requestAnimationFrame(tick);
    };
    document.querySelectorAll('[data-hover-preview] .item').forEach((item) => {
      const head = item.querySelector('.item-head');
      head.addEventListener('mouseenter', (e) => {
        if (item.classList.contains('open')) return;
        previewImg.src = item.dataset.preview;
        if (!preview.classList.contains('on')) { px = tx = e.clientX + 140; py = ty = e.clientY; }
        preview.classList.add('on');
        if (!rafId) tick();
      });
      head.addEventListener('mousemove', (e) => { tx = e.clientX + 140; ty = e.clientY; });
      head.addEventListener('mouseleave', () => {
        hidePreview();
        setTimeout(() => { if (!preview.classList.contains('on')) { cancelAnimationFrame(rafId); rafId = 0; } }, 300);
      });
    });
  }

  // ── copy email ────────────────────────────────────────────────────────
  const copyBtn = document.querySelector('[data-copy]');
  if (copyBtn) {
    const hint = copyBtn.querySelector('.hint');
    copyBtn.addEventListener('click', async () => {
      try {
        await navigator.clipboard.writeText(copyBtn.dataset.copy);
        hint.textContent = 'Copied';
      } catch {
        location.href = `mailto:${copyBtn.dataset.copy}`;
      }
      setTimeout(() => { hint.textContent = 'Copy'; }, 1800);
    });
  }
})();
