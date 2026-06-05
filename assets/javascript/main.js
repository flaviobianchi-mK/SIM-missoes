/**
 * main.js — Simplesmente Missões
 * Comportamentos: nav scroll, hambúrguer, fade-in via IntersectionObserver
 */

'use strict';

/* ── Nav: escurece ao scrollar ───────────────── */
(function initNav() {
  const nav = document.querySelector('.global-nav');
  if (!nav) return;

  const onScroll = () => {
    nav.style.borderBottomColor = window.scrollY > 10
      ? 'rgba(255,255,255,0.12)'
      : 'transparent';
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


/* ── Hambúrguer menu ─────────────────────────── */
(function initHamburger() {
  const btn  = document.querySelector('.global-nav__hamburger');
  const menu = document.querySelector('.global-nav__mobile-menu');
  if (!btn || !menu) return;

  const bars = btn.querySelectorAll('span');

  btn.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', isOpen);

    // Anima barras
    if (isOpen) {
      bars[0].style.transform = 'translateY(6.5px) rotate(45deg)';
      bars[1].style.opacity   = '0';
      bars[2].style.transform = 'translateY(-6.5px) rotate(-45deg)';
    } else {
      bars[0].style.transform = '';
      bars[1].style.opacity   = '';
      bars[2].style.transform = '';
    }
  });

  // Fecha ao clicar em link do menu
  menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      bars[0].style.transform = '';
      bars[1].style.opacity   = '';
      bars[2].style.transform = '';
    });
  });

  // Fecha ao clicar fora
  document.addEventListener('click', (e) => {
    if (!btn.contains(e.target) && !menu.contains(e.target)) {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      bars[0].style.transform = '';
      bars[1].style.opacity   = '';
      bars[2].style.transform = '';
    }
  });
})();


/* ── IntersectionObserver: fade-up ──────────── */
(function initFadeUp() {
  const elements = document.querySelectorAll('.fade-up');
  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  elements.forEach(el => observer.observe(el));
})();


/* ── Smooth scroll para âncoras internas ─────── */
(function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href.length < 2 || !/^#[A-Za-z][\w-]*$/.test(href)) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();

      const navH = parseInt(
        getComputedStyle(document.documentElement)
          .getPropertyValue('--nav-height-global') || '52'
      );

      const top = target.getBoundingClientRect().top + window.scrollY - navH - 16;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });
})();


/* ── Hero vídeo: autoplay silencioso ─────────── */
(function initHeroVideo() {
  const video = document.querySelector('.hero__video-player');
  if (!video) return;

  const wrapper = video.closest('.hero__video-wrapper');
  const canHover = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  video.muted = true;
  video.defaultMuted = true;
  video.controls = !canHover;

  const tryPlay = () => {
    video.play().catch(() => {});
  };

  if (video.readyState >= HTMLMediaElement.HAVE_CURRENT_DATA) {
    tryPlay();
  } else {
    video.addEventListener('loadeddata', tryPlay, { once: true });
  }

  document.addEventListener('visibilitychange', () => {
    if (!document.hidden) tryPlay();
  });

  if (wrapper && canHover) {
    wrapper.addEventListener('mouseenter', () => {
      video.controls = true;
    });
    wrapper.addEventListener('mouseleave', () => {
      video.controls = false;
    });
    wrapper.addEventListener('focusin', () => {
      video.controls = true;
    });
    wrapper.addEventListener('focusout', (e) => {
      if (!wrapper.contains(e.relatedTarget)) {
        video.controls = false;
      }
    });
  }
})();


/* ── Beja Accordion ──────────────────────────── */
(function initBejaAccordion() {
  const items  = document.querySelectorAll('.beja-accord__item');
  const slides = document.querySelectorAll('.beja-accord__slide');
  if (!items.length) return;

  function activateItem(item) {
    const idx = item.dataset.index;
    items.forEach(i => {
      i.classList.remove('is-open');
      i.querySelector('.beja-accord__trigger')?.setAttribute('aria-expanded', 'false');
    });
    item.classList.add('is-open');
    item.querySelector('.beja-accord__trigger')?.setAttribute('aria-expanded', 'true');
    slides.forEach(s => s.classList.remove('is-active'));
    const target = document.querySelector(`.beja-accord__slide[data-index="${idx}"]`);
    if (target) target.classList.add('is-active');
  }

  items.forEach(item => {
    const trigger = item.querySelector('.beja-accord__trigger');
    if (!trigger) return;
    trigger.addEventListener('click', () => {
      if (!item.classList.contains('is-open')) {
        activateItem(item);
      } else {
        item.classList.remove('is-open');
        trigger.setAttribute('aria-expanded', 'false');
      }
    });
  });
})();


/* ── Donation Modal (PIX → SEPAL) ────────────── */
(function initDonationModal() {
  const modal       = document.getElementById('donation-modal');
  const overlay     = document.getElementById('donation-modal-overlay');
  const closeBtn    = document.getElementById('donation-modal-close');
  const pixScreen   = document.getElementById('donation-modal-pix-screen');
  const sepalScreen = document.getElementById('donation-modal-sepal-screen');
  const goSepalBtn  = document.getElementById('donation-modal-go-sepal');
  const backPixBtn  = document.getElementById('donation-modal-back-pix');
  const copyBtn     = document.getElementById('modal-pix-copy-btn');
  const pixInput    = document.getElementById('modal-pix-code');
  if (!modal || !pixScreen || !sepalScreen) return;

  const pixTitle   = document.getElementById('donation-modal-pix-title');
  const sepalTitle = document.getElementById('donation-modal-sepal-title');
  const iconCopy   = copyBtn?.querySelector('.donation-modal__copy-icon--copy');
  const iconCheck  = copyBtn?.querySelector('.donation-modal__copy-icon--check');

  function showPixScreen() {
    pixScreen.hidden = false;
    sepalScreen.hidden = true;
    modal.setAttribute('aria-labelledby', pixTitle?.id || 'donation-modal-pix-title');
  }

  function showSepalScreen() {
    pixScreen.hidden = true;
    sepalScreen.hidden = false;
    modal.setAttribute('aria-labelledby', sepalTitle?.id || 'donation-modal-sepal-title');
  }

  function openDonationModal() {
    showPixScreen();
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeDonationModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    showPixScreen();
  }

  window.openDonationModal = openDonationModal;

  document.querySelectorAll('.js-open-donation').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      openDonationModal();
    });
  });

  goSepalBtn?.addEventListener('click', showSepalScreen);
  backPixBtn?.addEventListener('click', showPixScreen);

  if (copyBtn && pixInput) {
    copyBtn.addEventListener('click', () => {
      const text = pixInput.value;
      navigator.clipboard.writeText(text).then(() => {
        if (iconCopy) iconCopy.hidden = true;
        if (iconCheck) iconCheck.hidden = false;
        copyBtn.setAttribute('aria-label', 'Código copiado');
        setTimeout(() => {
          if (iconCopy) iconCopy.hidden = false;
          if (iconCheck) iconCheck.hidden = true;
          copyBtn.setAttribute('aria-label', 'Copiar código PIX');
        }, 2000);
      }).catch(() => {});
    });
  }

  closeBtn?.addEventListener('click', closeDonationModal);
  overlay?.addEventListener('click', closeDonationModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeDonationModal();
  });
})();


/* ── Bento Gallery — expandir ao clicar ───────── */
(function initBentoGallery() {
  const section = document.querySelector('.bento-section');
  const grid = document.getElementById('bento-grid');
  const cursor = document.getElementById('bento-cursor');
  const cells = grid ? [...grid.querySelectorAll('.bento-cell')] : [];
  if (!section || !grid || !cells.length) return;

  const canUseCustomCursor = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  const DEFAULT_LAYOUT = [
    { col: '1 / 3', row: '1 / 2' },
    { col: '3 / 4', row: '1 / 3' },
    { col: '1 / 2', row: '2 / 3' },
    { col: '2 / 3', row: '2 / 3' },
    { col: '1 / 3', row: '3 / 4' },
    { col: '3 / 4', row: '3 / 4' },
  ];

  const EXPAND_LAYOUTS = [
    [
      { col: '1 / 3', row: '1 / 3' },
      { col: '3 / 4', row: '1 / 2' },
      { col: '3 / 4', row: '2 / 3' },
      { col: '1 / 2', row: '3 / 4' },
      { col: '2 / 3', row: '3 / 4' },
      { col: '3 / 4', row: '3 / 4' },
    ],
    [
      { col: '1 / 2', row: '1 / 2' },
      { col: '2 / 4', row: '1 / 3' },
      { col: '1 / 2', row: '2 / 3' },
      { col: '1 / 2', row: '3 / 4' },
      { col: '2 / 3', row: '3 / 4' },
      { col: '3 / 4', row: '3 / 4' },
    ],
    [
      { col: '1 / 2', row: '1 / 2' },
      { col: '3 / 4', row: '1 / 2' },
      { col: '1 / 3', row: '1 / 3' },
      { col: '3 / 4', row: '2 / 3' },
      { col: '1 / 2', row: '3 / 4' },
      { col: '2 / 3', row: '3 / 4' },
    ],
    [
      { col: '1 / 2', row: '1 / 2' },
      { col: '3 / 4', row: '1 / 2' },
      { col: '1 / 2', row: '2 / 3' },
      { col: '2 / 4', row: '1 / 3' },
      { col: '1 / 2', row: '3 / 4' },
      { col: '3 / 4', row: '3 / 4' },
    ],
    [
      { col: '1 / 2', row: '1 / 2' },
      { col: '3 / 4', row: '1 / 2' },
      { col: '1 / 2', row: '2 / 3' },
      { col: '2 / 3', row: '2 / 3' },
      { col: '1 / 4', row: '2 / 4' },
      { col: '3 / 4', row: '3 / 4' },
    ],
    [
      { col: '1 / 2', row: '1 / 2' },
      { col: '3 / 4', row: '1 / 2' },
      { col: '1 / 2', row: '2 / 3' },
      { col: '2 / 3', row: '2 / 3' },
      { col: '1 / 3', row: '3 / 4' },
      { col: '2 / 4', row: '2 / 4' },
    ],
  ];

  let activeIndex = null;

  function useSimpleLayout() {
    return window.matchMedia('(max-width: 1068px)').matches;
  }

  function clearInlineLayout() {
    cells.forEach((cell) => {
      cell.style.gridColumn = '';
      cell.style.gridRow = '';
    });
  }

  function applyLayout(index) {
    if (useSimpleLayout()) {
      clearInlineLayout();
      return;
    }

    const layout = index === null ? DEFAULT_LAYOUT : EXPAND_LAYOUTS[index];
    cells.forEach((cell, i) => {
      const slot = layout[i];
      cell.style.gridColumn = slot.col;
      cell.style.gridRow = slot.row;
    });
  }

  function setActive(index) {
    activeIndex = index;
    const hasSelection = index !== null;

    grid.classList.toggle('has-selection', hasSelection);
    cells.forEach((cell, i) => {
      const isActive = i === index;
      cell.classList.toggle('is-active', isActive);
      cell.setAttribute('aria-expanded', String(isActive));
    });

    if (cursor) {
      cursor.classList.toggle('is-active', hasSelection);
    }

    applyLayout(index);
  }

  cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
      setActive(activeIndex === index ? null : index);
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && activeIndex !== null) {
      setActive(null);
    }
  });

  window.addEventListener('resize', () => {
    if (activeIndex !== null) {
      applyLayout(activeIndex);
    } else {
      clearInlineLayout();
    }
  });

  if (canUseCustomCursor && cursor) {
    grid.addEventListener('mouseover', (e) => {
      if (e.target.closest('.bento-cell')) {
        cursor.classList.add('is-visible');
      }
    });

    grid.addEventListener('mouseout', (e) => {
      if (!e.relatedTarget || !grid.contains(e.relatedTarget)) {
        cursor.classList.remove('is-visible');
      }
    });

    grid.addEventListener('mousemove', (e) => {
      if (!e.target.closest('.bento-cell')) return;
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });
  }
})();

