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
      const target = document.querySelector(anchor.getAttribute('href'));
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


/* ── Donation Widget: spring scroll + copy + share ── */
(function initDonationWidget() {
  const widget = document.getElementById('donation-widget');
  if (!widget) return;

  // Oculta em tablet / mobile via CSS — só roda em desktop
  if (window.innerWidth <= 1068) return;

  // ── Entrada com delay ──────────────────────
  setTimeout(() => widget.classList.add('is-visible'), 800);

  // ── Parallax sutil: widget flutua levemente ao rolar ──
  // Deslocamento pequeno e clampado → parece intencional, não bugado.
  let currentY   = 0;
  let targetY    = 0;
  let lastScroll = window.scrollY;

  const GAIN     = 0.06;   // quanto cada px de scroll vira offset (bem baixo)
  const MAX_OFF  = 14;     // deslocamento máximo em px
  const LERP     = 0.10;   // velocidade de interpolação (0–1)
  const DECAY    = 0.90;   // target decai para 0 a cada frame

  window.addEventListener('scroll', () => {
    const delta = window.scrollY - lastScroll;
    lastScroll  = window.scrollY;
    targetY    += delta * GAIN;
    // clamp: nunca sai demais do centro
    targetY     = Math.max(-MAX_OFF, Math.min(MAX_OFF, targetY));
  }, { passive: true });

  (function tick() {
    currentY += (targetY - currentY) * LERP;
    targetY  *= DECAY;
    widget.style.transform = `translateY(calc(-50% + ${currentY.toFixed(2)}px))`;
    requestAnimationFrame(tick);
  })();

  // ── Copiar código PIX ──────────────────────
  const copyBtn   = document.getElementById('pix-copy-btn');
  const pixInput  = document.getElementById('pix-code');
  const iconCopy  = copyBtn?.querySelector('.donation-widget__copy-icon--copy');
  const iconCheck = copyBtn?.querySelector('.donation-widget__copy-icon--check');

  if (copyBtn && pixInput) {
    copyBtn.addEventListener('click', () => {
      // O campo está disabled — lemos o value diretamente
      const text = pixInput.value;

      navigator.clipboard.writeText(text).then(() => {
        // Feedback visual: troca ícone por checkmark
        if (iconCopy && iconCheck) {
          iconCopy.style.display  = 'none';
          iconCheck.style.display = '';
        }
        copyBtn.style.background    = '#34C759';
        copyBtn.style.borderColor   = '#34C759';
        copyBtn.style.color         = '#fff';

        setTimeout(() => {
          if (iconCopy && iconCheck) {
            iconCopy.style.display  = '';
            iconCheck.style.display = 'none';
          }
          copyBtn.style.background  = '';
          copyBtn.style.borderColor = '';
          copyBtn.style.color       = '';
        }, 2000);
      }).catch(() => {
        // Clipboard API indisponível — silencioso
      });
    });
  }

  // ── Modal "Doar de outra forma" ───────────
  const openModalBtn = document.getElementById('open-donation-modal');
  if (openModalBtn) {
    openModalBtn.addEventListener('click', () => window.openDonationModal?.());
  }

  // ── Compartilhar missão ────────────────────
  const shareBtn = document.getElementById('share-btn');
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      const shareData = {
        title: 'Simplesmente Missões — Beja, Portugal',
        text:  'Conheça a missão de Neno e Liz Bianchi em Beja, Portugal. Apoie com oração, recursos e compartilhamento!',
        url:   window.location.href,
      };

      if (navigator.share) {
        try {
          await navigator.share(shareData);
        } catch (_) {
          // Usuário cancelou ou erro — silencioso
        }
      } else {
        // Fallback: copiar URL e mostrar feedback
        navigator.clipboard.writeText(window.location.href).then(() => {
          const original = shareBtn.textContent;
          shareBtn.textContent = 'Link copiado!';
          setTimeout(() => { shareBtn.textContent = original; }, 2500);
        });
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


/* ── Donation Modal ──────────────────────────── */
(function initDonationModal() {
  const SEPAL_URL = 'https://sistema.sepal.tech/doeagora/neno_e_liz_bianchi';

  const modal        = document.getElementById('donation-modal');
  const overlay      = document.getElementById('donation-modal-overlay');
  const closeBtn     = document.getElementById('donation-modal-close');
  const pixBtn       = document.getElementById('donation-modal-pix');
  const openIframeBtn = document.getElementById('open-sepal-iframe');
  const infoScreen   = document.getElementById('donation-modal-info');
  const iframeScreen = document.getElementById('donation-modal-iframe-screen');
  const iframe       = document.getElementById('sepal-iframe');
  const backBtn      = document.getElementById('sepal-back-btn');
  if (!modal) return;

  const isDesktop = () => window.innerWidth > 1068;

  function showInfoScreen() {
    modal.classList.remove('donation-modal--iframe-mode');
    infoScreen.hidden  = false;
    iframeScreen.hidden = true;
    if (iframe) iframe.src = ''; // descarrega o iframe ao voltar
  }

  function showIframeScreen() {
    modal.classList.add('donation-modal--iframe-mode');
    infoScreen.hidden  = true;
    iframeScreen.hidden = false;
    if (iframe) iframe.src = SEPAL_URL;
  }

  function openDonationModal() {
    showInfoScreen(); // sempre começa na tela de info
    modal.hidden = false;
    document.body.style.overflow = 'hidden';
  }

  function closeDonationModal() {
    modal.hidden = true;
    document.body.style.overflow = '';
    showInfoScreen(); // reseta para próxima abertura
  }

  window.openDonationModal = openDonationModal;

  // Botão principal: iframe no desktop, nova aba no mobile
  openIframeBtn?.addEventListener('click', () => {
    if (isDesktop()) {
      showIframeScreen();
    } else {
      window.open(SEPAL_URL, '_blank', 'noopener,noreferrer');
    }
  });

  // Voltar para tela de info
  backBtn?.addEventListener('click', showInfoScreen);

  closeBtn?.addEventListener('click', closeDonationModal);
  overlay?.addEventListener('click', closeDonationModal);
  pixBtn?.addEventListener('click', closeDonationModal);

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.hidden) closeDonationModal();
  });
})();


