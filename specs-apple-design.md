# Apple AirPods 4 — Especificação de Design de Componentes
**Fonte:** https://www.apple.com/br/airpods-4/  
**Data:** Abril 2026  
**Propósito:** Referência para recriação de componentes e comportamentos via Claude Code

---

## Sumário

1. [Design Tokens](#1-design-tokens)
2. [Global Navigation Bar](#2-global-navigation-bar)
3. [Local Navigation Bar](#3-local-navigation-bar)
4. [Hero Section](#4-hero-section)
5. [Event Banner](#5-event-banner)
6. [Media Card Gallery (Tabs)](#6-media-card-gallery-tabs)
7. [Bento Gallery](#7-bento-gallery)
8. [Story Sections (Scroll Narrativo)](#8-story-sections-scroll-narrativo)
9. [Feature Contrast / Icon Cards](#9-feature-contrast--icon-cards)
10. [Stat Cards (Battery)](#10-stat-cards-battery)
11. [Product Comparison Cards](#11-product-comparison-cards)
12. [Reasons to Buy (Icon Cards com Popover)](#12-reasons-to-buy-icon-cards-com-popover)
13. [Explore Section (Cross-link Cards)](#13-explore-section-cross-link-cards)
14. [Botões e CTAs](#14-botões-e-ctas)
15. [Comportamentos de Scroll e Animação](#15-comportamentos-de-scroll-e-animação)
16. [Tipografia](#16-tipografia)
17. [Paleta de Cores](#17-paleta-de-cores)
18. [Responsividade e Breakpoints](#18-responsividade-e-breakpoints)
19. [Acessibilidade](#19-acessibilidade)

---

## 1. Design Tokens

### Tipografia
```css
--font-primary: "SF Pro Display", "SF Pro Text", -apple-system, BlinkMacSystemFont, sans-serif;
--font-size-hero-eyebrow: 1.0588em;      /* ~18px */
--font-size-hero-title: 4.941em;         /* ~84px desktop */
--font-size-section-headline: 3.294em;   /* ~56px */
--font-size-subsection-title: 2.353em;   /* ~40px */
--font-size-body: 1.059em;               /* ~18px */
--font-size-body-sm: 0.882em;            /* ~15px */
--font-size-caption: 0.706em;            /* ~12px */
--font-size-cta: 1.059em;               /* ~18px */
--font-size-stat: 4.941em;              /* números grandes, ex: "30" */
--font-weight-regular: 400;
--font-weight-semibold: 600;
--font-weight-bold: 700;
--line-height-tight: 1.0;
--line-height-heading: 1.05;
--line-height-body: 1.52941;
--letter-spacing-tight: -0.02em;
--letter-spacing-hero: -0.009em;
```

### Cores
```css
/* Fundo */
--color-bg-primary: #000000;         /* hero, seções escuras */
--color-bg-section-alt: #f5f5f7;     /* seções claras alternadas */
--color-bg-white: #ffffff;

/* Texto */
--color-text-primary-dark: #1d1d1f;  /* sobre fundo claro */
--color-text-primary-light: #f5f5f7; /* sobre fundo escuro */
--color-text-secondary: #6e6e73;
--color-text-link: #0066cc;
--color-text-link-hover: #0077ed;

/* Accent */
--color-accent-blue: #0071e3;        /* CTAs principais */
--color-accent-blue-hover: #0077ed;

/* Bordas */
--color-border-light: rgba(0, 0, 0, 0.1);
--color-border-dark: rgba(255, 255, 255, 0.15);
```

### Espaçamento (base Apple)
```css
--space-xs: 8px;
--space-sm: 12px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 40px;
--space-2xl: 60px;
--space-3xl: 80px;
--space-4xl: 120px;

/* Seções */
--section-padding-v: 100px;
--section-padding-v-mobile: 60px;
--max-content-width: 980px;
--max-content-width-wide: 1200px;
```

### Bordas e Sombras
```css
--radius-sm: 6px;
--radius-md: 12px;
--radius-lg: 18px;
--radius-xl: 28px;
--radius-pill: 980px;

--shadow-card: 0 2px 24px rgba(0, 0, 0, 0.12);
--shadow-popover: 0 4px 48px rgba(0, 0, 0, 0.18);
```

---

## 2. Global Navigation Bar

### Estrutura HTML
```html
<nav class="global-nav" role="navigation" aria-label="Global">
  <div class="global-nav-inner">
    <a class="apple-logo" href="/" aria-label="Apple"><!-- SVG logo --></a>
    <ul class="global-nav-list">
      <li><a href="/br/shop/goto/store">Loja</a></li>
      <li><a href="/br/mac/">Mac</a></li>
      <li><a href="/br/ipad/">iPad</a></li>
      <li><a href="/br/iphone/">iPhone</a></li>
      <li><a href="/br/watch/">Apple Watch</a></li>
      <li><a href="/br/airpods/">AirPods</a></li>
      <li><a href="/br/tv-home/">TV e Casa</a></li>
      <li><a href="/br/entertainment/">Entretenimento</a></li>
      <li><a href="/br/shop/goto/buy_accessories">Acessórios</a></li>
      <li><a href="#">Suporte</a></li>
    </ul>
    <div class="global-nav-actions">
      <!-- ícone lupa (busca) -->
      <!-- ícone sacola (carrinho) com badge numérico -->
    </div>
  </div>
</nav>
```

### CSS
```css
.global-nav {
  position: sticky;
  top: 0;
  z-index: 9999;
  background: rgba(22, 22, 23, 0.8);  /* dark */
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  height: 44px;
  width: 100%;
}

.global-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 22px;
  height: 100%;
}

.global-nav-list {
  display: flex;
  list-style: none;
  gap: 0;
}

.global-nav-list li a {
  font-size: 12px;
  color: rgba(245, 245, 247, 0.8);
  text-decoration: none;
  padding: 0 8px;
  line-height: 44px;
  white-space: nowrap;
  transition: color 0.3s ease;
}

.global-nav-list li a:hover {
  color: #f5f5f7;
}

/* Badge do carrinho */
.cart-badge {
  background: #0071e3;
  color: white;
  border-radius: 50%;
  font-size: 10px;
  width: 14px;
  height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: -2px;
  right: -4px;
}
```

### Comportamento
- Sempre visível no topo (sticky)
- Em scroll para baixo: fundo escurecido com blur
- Mobile: colapsa em menu hambúrguer, abre drawer lateral
- Transição de opacidade suave ao surgir/desaparecer
- Logo Apple centralizado no mobile, alinhado à esquerda no desktop

---

## 3. Local Navigation Bar

### Estrutura HTML
```html
<nav class="local-nav" aria-label="AirPods 4">
  <div class="local-nav-inner">
    <div class="local-nav-product-name">
      <a href="/br/airpods-4/">AirPods 4</a>
    </div>
    <ul class="local-nav-links">
      <li class="active"><a href="/br/airpods-4/">Visão geral</a></li>
      <li><a href="/br/airpods-4/specs/">Especificações</a></li>
      <li><a href="/br/airpods-4/compare/">Comparar</a></li>
    </ul>
    <a class="local-nav-cta" href="/br/shop/goto/buy_airpods/airpods_4">
      Comprar AirPods 4
    </a>
  </div>
</nav>
```

### CSS
```css
.local-nav {
  position: sticky;
  top: 44px;  /* abaixo da global nav */
  z-index: 9998;
  background: rgba(22, 22, 23, 0.8);
  backdrop-filter: saturate(180%) blur(20px);
  -webkit-backdrop-filter: saturate(180%) blur(20px);
  height: 52px;
  border-bottom: 0.5px solid rgba(255,255,255,0.1);
}

.local-nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 22px;
  height: 100%;
}

.local-nav-product-name a {
  font-size: 17px;
  font-weight: 600;
  color: #f5f5f7;
  text-decoration: none;
}

.local-nav-links {
  display: flex;
  list-style: none;
  gap: 0;
}

.local-nav-links li a {
  font-size: 12px;
  color: rgba(245, 245, 247, 0.7);
  text-decoration: none;
  padding: 0 16px;
  line-height: 52px;
  transition: color 0.2s;
}

.local-nav-links li.active a,
.local-nav-links li a:hover {
  color: #f5f5f7;
}

.local-nav-cta {
  font-size: 12px;
  color: #2997ff;
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s;
}

.local-nav-cta:hover {
  color: #0071e3;
  text-decoration: underline;
}
```

### Comportamento
- Aparece abaixo da global nav
- Fica sticky durante todo o scroll da página do produto
- Item "Visão geral" marcado como ativo na página principal
- CTA "Comprar" sempre visível à direita
- Mobile: links colapsam em dropdown chevron, CTA permanece

---

## 4. Hero Section

### Estrutura HTML
```html
<section class="hero" aria-label="AirPods 4 hero">
  <div class="hero-inner">
    <div class="hero-text">
      <p class="hero-eyebrow">AirPods 4</p>
      <h1 class="hero-title">
        <span class="hero-title-line1">Icônicos.</span>
        <span class="hero-title-line2">Supersônicos.</span>
      </h1>
      <a class="hero-cta" href="/br/shop/goto/buy_airpods/airpods_4">Comprar</a>
    </div>
    <div class="hero-media">
      <picture>
        <!-- srcset responsivo -->
        <source media="(min-width: 1441px)" srcset="hero__xlarge.jpg">
        <source media="(min-width: 1069px)" srcset="hero__large.jpg">
        <source media="(min-width: 735px)" srcset="hero__medium.jpg">
        <img src="hero__small.jpg" alt="Pessoa dançando com AirPods 4">
      </picture>
    </div>
  </div>
</section>
```

### CSS
```css
.hero {
  background: #000;
  overflow: hidden;
  min-height: 600px;
}

.hero-inner {
  max-width: var(--max-content-width-wide);
  margin: 0 auto;
  padding: 80px 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.hero-eyebrow {
  font-size: 28px;
  font-weight: 600;
  color: #a1a1a6;
  margin-bottom: 8px;
}

.hero-title {
  font-size: 96px;
  font-weight: 700;
  letter-spacing: -0.009em;
  line-height: 1.0;
  color: #f5f5f7;
  margin-bottom: 32px;
}

.hero-cta {
  display: inline-block;
  font-size: 17px;
  color: #2997ff;
  text-decoration: none;
  margin-bottom: 48px;
  transition: color 0.2s;
}

.hero-cta:hover {
  color: #0071e3;
  text-decoration: underline;
}

.hero-media {
  width: 100%;
  max-width: 900px;
}

.hero-media img {
  width: 100%;
  height: auto;
  display: block;
}
```

### Comportamento
- Imagem do produto surge com fade-in ao carregar
- Parallax sutil no scroll (imagem move mais devagar que o texto)
- Fundo sempre preto (#000)
- Vídeo de produto pode ser reproduzido em autoplay silencioso como background
- Texto se mantém legível sobre qualquer frame do vídeo (cor clara sobre fundo escuro)

---

## 5. Event Banner

### Estrutura HTML
```html
<section class="event-banner">
  <div class="event-banner-inner">
    <div class="event-banner-media">
      <picture>
        <img src="anc_film__xlarge.jpg" alt="">
      </picture>
    </div>
    <div class="event-banner-text">
      <p class="event-banner-headline">
        Descubra o Cancelamento Ativo de Ruído em um vídeo estrelado por Pedro Pascal.
      </p>
      <a class="event-banner-link" href="[url-do-video]">
        Assistir ao vídeo
        <span class="link-arrow">›</span>
      </a>
    </div>
  </div>
</section>
```

### CSS
```css
.event-banner {
  background: #f5f5f7;
  padding: 60px 40px;
  overflow: hidden;
}

.event-banner-inner {
  max-width: var(--max-content-width);
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.event-banner-media img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
}

.event-banner-headline {
  font-size: 24px;
  font-weight: 600;
  color: #1d1d1f;
  line-height: 1.25;
  margin-bottom: 20px;
}

.event-banner-link {
  font-size: 17px;
  color: #0066cc;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.event-banner-link:hover { text-decoration: underline; }

/* Mobile: empilha vertical */
@media (max-width: 734px) {
  .event-banner-inner {
    grid-template-columns: 1fr;
  }
}
```

### Comportamento
- Click em "Assistir ao vídeo" abre modal com player de vídeo nativo (HLS .m3u8)
- Modal tem overlay escuro, botão X para fechar, player centralizado
- Vídeo pausa ao fechar o modal

---

## 6. Media Card Gallery (Tabs)

Componente de galeria com tabs de seleção e conteúdo à direita.

### Estrutura HTML
```html
<section class="media-card-gallery">
  <div class="media-card-gallery-inner">
    <h2 class="gallery-headline">Comece pelos destaques.</h2>

    <!-- Tab de vídeo principal -->
    <div class="gallery-tabs">
      <button class="gallery-tab gallery-tab--video active" data-target="video">
        <span class="tab-icon">▶</span>
        <span class="tab-label">Assistir ao AirPods 4 vídeo</span>
      </button>
      <button class="gallery-tab" data-target="item-1">
        <img src="thumb_1.jpg" alt="...">
      </button>
      <button class="gallery-tab" data-target="item-2">
        <img src="thumb_2.jpg" alt="...">
      </button>
      <button class="gallery-tab" data-target="item-3">
        <img src="thumb_3.jpg" alt="...">
      </button>
      <button class="gallery-tab" data-target="item-4">
        <img src="thumb_4.jpg" alt="...">
      </button>
    </div>

    <!-- Painel de conteúdo -->
    <div class="gallery-panels">
      <div id="gallery-panel-video" class="gallery-panel active">
        <video autoplay muted playsinline loop src="product_video.m3u8"></video>
      </div>
      <div id="gallery-panel-item-1" class="gallery-panel">
        <img src="media_lifestyle__xlarge.jpg" alt="...">
        <p class="panel-caption">Áudio imersivo de outro nível com Cancelamento Ativo de Ruído opcional.</p>
      </div>
      <!-- Demais painéis... -->
    </div>
  </div>
</section>
```

### CSS
```css
.media-card-gallery {
  background: #000;
  padding: 100px 0;
}

.media-card-gallery-inner {
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.gallery-headline {
  font-size: 56px;
  font-weight: 700;
  color: #f5f5f7;
  letter-spacing: -0.009em;
  text-align: center;
  margin-bottom: 60px;
}

.gallery-tabs {
  display: flex;
  gap: 12px;
  overflow-x: auto;
  scrollbar-width: none;
  padding-bottom: 4px;
}

.gallery-tabs::-webkit-scrollbar { display: none; }

.gallery-tab {
  flex-shrink: 0;
  background: #1d1d1f;
  border: none;
  border-radius: var(--radius-md);
  padding: 0;
  overflow: hidden;
  cursor: pointer;
  transition: opacity 0.2s;
  width: 120px;
  height: 80px;
}

.gallery-tab img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.gallery-tab.active {
  outline: 2px solid #2997ff;
  outline-offset: 2px;
}

.gallery-tab--video {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: #1d1d1f;
}

.gallery-panel {
  display: none;
}

.gallery-panel.active {
  display: block;
  animation: fadeIn 0.3s ease;
}

.gallery-panel img,
.gallery-panel video {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
}

.panel-caption {
  font-size: 21px;
  font-weight: 600;
  color: #f5f5f7;
  text-align: center;
  margin-top: 40px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to   { opacity: 1; transform: translateY(0); }
}
```

### Comportamento
- Click em tab: troca painel com fade de 300ms
- Tab ativa recebe outline azul (#2997ff)
- Painel de vídeo: reprodução automática, mudo, loop
- Tabs em overflow horizontal no mobile (scroll horizontal sem scrollbar visível)
- Estado ativo persiste até nova seleção

---

## 7. Bento Gallery

Grid assimétrico de imagens do produto (estilo "explorar os detalhes").

### Estrutura HTML
```html
<section class="bento-gallery">
  <div class="bento-gallery-inner">
    <h2 class="bento-headline">Explore os detalhes.</h2>

    <!-- AR trigger (opcional) -->
    <a class="bento-ar-link" href="airpods-mid.usdz" rel="ar">
      <span class="ar-icon"><!-- ícone AR --></span>
      <span>Ver em AR</span>
    </a>

    <div class="bento-grid">
      <!-- Célula grande (span 2 colunas) -->
      <div class="bento-cell bento-cell--wide">
        <img src="bento_case_open__xlarge.jpg" alt="AirPods 4 sendo colocados no estojo">
      </div>

      <!-- Coluna dupla vertical -->
      <div class="bento-cell bento-cell--tall-stack">
        <div class="bento-subcell">
          <img src="bento_stem__xlarge.jpg" alt="Microfone na haste">
        </div>
        <div class="bento-subcell">
          <img src="bento_closeup__xlarge.jpg" alt="Microfone na parte superior">
        </div>
      </div>

      <!-- Célula simples -->
      <div class="bento-cell">
        <img src="bento_case_close__xlarge.jpg" alt="Estojo fechado">
      </div>

      <!-- Coluna dupla vertical -->
      <div class="bento-cell bento-cell--tall-stack">
        <div class="bento-subcell">
          <img src="bento_side__xlarge.jpg" alt="Vista lateral">
        </div>
        <div class="bento-subcell">
          <img src="bento_angle__xlarge.jpg" alt="Vista angular">
        </div>
      </div>
    </div>
  </div>
</section>
```

### CSS
```css
.bento-gallery {
  background: #000;
  padding: 100px 0;
}

.bento-gallery-inner {
  max-width: var(--max-content-width-wide);
  margin: 0 auto;
  padding: 0 40px;
}

.bento-headline {
  font-size: 56px;
  font-weight: 700;
  color: #f5f5f7;
  text-align: center;
  margin-bottom: 60px;
}

.bento-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 300px;
  gap: 12px;
}

.bento-cell {
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: #1d1d1f;
}

.bento-cell--wide {
  grid-column: span 2;
}

.bento-cell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.bento-cell:hover img {
  transform: scale(1.04);
}

.bento-cell--tall-stack {
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
}

.bento-subcell {
  overflow: hidden;
  border-radius: var(--radius-lg);
  background: #1d1d1f;
}

.bento-subcell img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.6s ease;
}

.bento-subcell:hover img {
  transform: scale(1.04);
}

/* Mobile: uma coluna */
@media (max-width: 734px) {
  .bento-grid {
    grid-template-columns: 1fr;
    grid-auto-rows: auto;
  }
  .bento-cell--wide { grid-column: span 1; }
  .bento-cell--tall-stack { grid-template-rows: auto auto; }
}
```

### Comportamento
- Hover em célula: escala sutil da imagem (scale 1.04, transition 600ms ease)
- Link de AR (`.usdz`): no iOS abre visualização em Realidade Aumentada nativa
- Grid não tem comportamento de lightbox (cada imagem é estática)

---

## 8. Story Sections (Scroll Narrativo)

Padrão de alternância de seção: fundo cheio + headline grande + grid de features.

### Estrutura HTML
```html
<section class="story-section story-section--dark">
  <div class="story-section-inner">

    <!-- Hero da seção -->
    <div class="story-hero">
      <p class="story-tag">Desempenho de áudio</p>
      <h2 class="story-headline">Uma experiência sonora completamente reinventada.</h2>
      <figure class="story-hero-image">
        <img src="audio_hero__xlarge.png" alt="Pessoa dançando com AirPods 4">
      </figure>
      <div class="story-hero-intro">
        <h3 class="story-subheadline">Som imersivo digno de cinema.</h3>
        <p class="story-body">
          O Áudio Espacial Personalizado com Rastreamento Dinâmico da Cabeça envolve você
          com som por todos os lados...
        </p>
      </div>
    </div>

    <!-- Grid de features (image + text) -->
    <ul class="story-features">
      <li class="story-feature">
        <figure class="feature-image">
          <img src="audio_h2__large.jpg" alt="Chip H2">
        </figure>
        <div class="feature-text">
          <strong class="feature-title">Um sonoro salto em capacidade.</strong>
          <p class="feature-body">O poderoso chip H2 chega aos AirPods 4...</p>
        </div>
      </li>
      <!-- Mais features... -->
    </ul>

  </div>
</section>
```

### CSS
```css
.story-section {
  padding: var(--section-padding-v) 0;
}

.story-section--dark {
  background: #000;
  color: #f5f5f7;
}

.story-section--light {
  background: #f5f5f7;
  color: #1d1d1f;
}

.story-section-inner {
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.story-tag {
  font-size: 17px;
  font-weight: 600;
  color: #6e6e73;
  text-align: center;
  margin-bottom: 8px;
}

.story-headline {
  font-size: 56px;
  font-weight: 700;
  letter-spacing: -0.009em;
  line-height: 1.05;
  text-align: center;
  max-width: 720px;
  margin: 0 auto 60px;
}

.story-hero-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-lg);
  margin-bottom: 60px;
}

.story-subheadline {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 16px;
  text-align: center;
}

.story-body {
  font-size: 17px;
  line-height: 1.6;
  color: inherit;
  opacity: 0.8;
  text-align: center;
  max-width: 600px;
  margin: 0 auto 80px;
}

/* Grid de features */
.story-features {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 60px 40px;
}

.story-feature {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.feature-image img {
  width: 100%;
  height: auto;
  border-radius: var(--radius-md);
  aspect-ratio: 4/3;
  object-fit: cover;
}

.feature-title {
  display: block;
  font-size: 21px;
  font-weight: 700;
  margin-bottom: 8px;
}

.feature-body {
  font-size: 17px;
  line-height: 1.6;
  opacity: 0.8;
}

@media (max-width: 734px) {
  .story-headline { font-size: 36px; }
  .story-features { grid-template-columns: 1fr; }
}
```

### Comportamento
- Imagens surgem com fade-in ao entrar no viewport (IntersectionObserver)
- Nenhum scroll parallax nos story features
- Alternância de fundo escuro/claro entre seções consecutivas
- Seções com vídeo: vídeo inicia automaticamente ao entrar no viewport, pausa ao sair

---

## 9. Feature Contrast / Icon Cards

Seção com ícone + título + texto para 3 features lado a lado.

### Estrutura HTML
```html
<div class="feature-contrast-section">
  <div class="feature-contrast-inner">
    <div class="feature-contrast-cards">

      <div class="contrast-card">
        <figure class="contrast-icon">
          <img src="noise_icon_adaptive__large.png" alt="">
        </figure>
        <h4 class="contrast-card-title">Áudio Adaptativo</h4>
        <p class="contrast-card-body">
          Combina o modo Ambiente e o Cancelamento Ativo de Ruído em tempo real...
        </p>
      </div>

      <div class="contrast-card">
        <figure class="contrast-icon">
          <img src="noise_icon_transparency__large.png" alt="">
        </figure>
        <h4 class="contrast-card-title">Modo Ambiente</h4>
        <p class="contrast-card-body">
          O jeito mais natural de ouvir o mundo...
        </p>
      </div>

      <div class="contrast-card">
        <figure class="contrast-icon">
          <img src="noise_icon_conversation__large.png" alt="">
        </figure>
        <h4 class="contrast-card-title">Detecção de Conversa</h4>
        <p class="contrast-card-body">
          Identifica quando você começa a conversar com alguém...
        </p>
      </div>

    </div>
  </div>
</div>
```

### CSS
```css
.feature-contrast-section {
  padding: 80px 0;
}

.feature-contrast-inner {
  max-width: var(--max-content-width);
  margin: 0 auto;
  padding: 0 40px;
}

.feature-contrast-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.contrast-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
}

.contrast-icon {
  width: 48px;
  height: 48px;
}

.contrast-icon img {
  width: 100%;
  height: auto;
}

.contrast-card-title {
  font-size: 19px;
  font-weight: 700;
  color: inherit;
}

.contrast-card-body {
  font-size: 15px;
  line-height: 1.6;
  color: inherit;
  opacity: 0.8;
}

@media (max-width: 734px) {
  .feature-contrast-cards { grid-template-columns: 1fr; }
}
```

---

## 10. Stat Cards (Battery)

Cards com número grande e legenda descritiva.

### Estrutura HTML
```html
<div class="stat-cards">
  <div class="stat-card">
    <div class="stat-card-content">
      <p class="stat-label">Até</p>
      <p class="stat-number">30 <span class="stat-unit">horas</span></p>
      <p class="stat-description">de áudio com o estojo</p>
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-card-content">
      <p class="stat-label">Até</p>
      <p class="stat-number">5 <span class="stat-unit">horas</span></p>
      <p class="stat-description">de áudio com apenas uma recarga</p>
    </div>
  </div>

  <div class="stat-card">
    <div class="stat-card-content">
      <p class="stat-label">Até</p>
      <p class="stat-number">4 <span class="stat-unit">horas</span></p>
      <p class="stat-description">de áudio com o Cancelamento Ativo de Ruído com apenas uma recarga</p>
    </div>
  </div>
</div>
```

### CSS
```css
.stat-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.1);  /* gap como separador */
  margin: 60px 0;
}

.stat-card {
  background: #000;
  padding: 60px 40px;
  text-align: center;
}

.stat-label {
  font-size: 17px;
  color: #6e6e73;
  margin-bottom: 4px;
}

.stat-number {
  font-size: 80px;
  font-weight: 700;
  color: #f5f5f7;
  letter-spacing: -0.02em;
  line-height: 1;
}

.stat-unit {
  font-size: 40px;
  font-weight: 600;
}

.stat-description {
  font-size: 17px;
  color: #a1a1a6;
  margin-top: 12px;
  max-width: 180px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.4;
}

@media (max-width: 734px) {
  .stat-cards { grid-template-columns: 1fr; }
  .stat-number { font-size: 60px; }
}
```

---

## 11. Product Comparison Cards

Cards de comparação de produto com features listadas.

### Estrutura HTML
```html
<section class="comparison-section">
  <h2 class="comparison-headline">Continue explorando.</h2>
  <a class="comparison-explore-link" href="/br/airpods/">Explorar todos os modelos de AirPods ›</a>

  <div class="comparison-cards">

    <div class="comparison-card comparison-card--current">
      <div class="comparison-card-header">
        <p class="card-label">AirPods 4</p>
        <figure class="card-product-image">
          <img src="explore_airpods_4_closed__xlarge.jpg" alt="AirPods 4">
        </figure>
        <p class="card-tagline">O próximo passo em som e conforto.</p>
        <span class="current-badge">Página atual</span>
      </div>

      <div class="card-cta-group">
        <a class="card-cta-primary" href="/br/shop/goto/buy_airpods/airpods_4/without_active_noise_cancellation">
          Comprar
        </a>
      </div>

      <ul class="card-features">
        <li class="feature-item feature-item--dash">Sem Cancelamento Ativo de Ruído</li>
        <li class="feature-item">
          <img src="person_spatialaudio.png" alt=""> Áudio Espacial Personalizado com Rastreamento Dinâmico
        </li>
        <li class="feature-item feature-item--dash">Tradução ao Vivo indisponível</li>
        <li class="feature-item">
          <img src="chip_h2.png" alt=""> Isolamento de Voz, "E aí, Siri" e interações com a Siri
        </li>
        <li class="feature-item">
          <strong class="feature-stat">5 hrs</strong>
          Até 5 horas de áudio com apenas uma recarga
        </li>
        <li class="feature-item">
          <img src="battery_100percent.png" alt=""> Até 30 horas de uso total
        </li>
        <li class="feature-item">
          <img src="airpods_4_chargingcase.png" alt=""> Estojo de recarga (USB-C)
        </li>
        <li class="feature-item">
          <img src="drop.png" alt=""> IP54
        </li>
      </ul>
    </div>

    <!-- AirPods 4 com ANC -->
    <div class="comparison-card">
      <!-- estrutura similar -->
    </div>

    <!-- AirPods Pro 2 -->
    <div class="comparison-card">
      <!-- estrutura similar -->
    </div>

  </div>
</section>
```

### CSS
```css
.comparison-section {
  background: #f5f5f7;
  padding: 100px 40px;
  text-align: center;
}

.comparison-headline {
  font-size: 56px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 16px;
}

.comparison-explore-link {
  font-size: 17px;
  color: #0066cc;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 60px;
}

.comparison-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: var(--max-content-width);
  margin: 0 auto;
}

.comparison-card {
  background: #fff;
  border-radius: var(--radius-xl);
  padding: 40px 24px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  box-shadow: var(--shadow-card);
}

.comparison-card--current {
  outline: 2px solid #0071e3;
}

.card-label {
  font-size: 19px;
  font-weight: 700;
  color: #1d1d1f;
}

.card-product-image img {
  width: 100%;
  height: 200px;
  object-fit: contain;
}

.card-tagline {
  font-size: 15px;
  color: #6e6e73;
}

.current-badge {
  font-size: 12px;
  background: #f5f5f7;
  color: #6e6e73;
  padding: 4px 12px;
  border-radius: var(--radius-pill);
  display: inline-block;
}

.card-cta-primary {
  display: block;
  background: #0071e3;
  color: #fff;
  text-decoration: none;
  padding: 12px 24px;
  border-radius: var(--radius-pill);
  font-size: 17px;
  font-weight: 400;
  text-align: center;
  transition: background 0.2s;
}

.card-cta-primary:hover {
  background: #0077ed;
}

.card-features {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 16px;
  text-align: left;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 15px;
  color: #1d1d1f;
  line-height: 1.4;
  padding-bottom: 16px;
  border-bottom: 0.5px solid rgba(0,0,0,0.1);
}

.feature-item--dash {
  color: #6e6e73;
  padding-left: 24px;
  position: relative;
}

.feature-item--dash::before {
  content: "—";
  position: absolute;
  left: 0;
}

.feature-item img {
  width: 32px;
  height: 32px;
  object-fit: contain;
  flex-shrink: 0;
}

.feature-stat {
  font-size: 28px;
  font-weight: 700;
  color: #1d1d1f;
  display: block;
}

@media (max-width: 1068px) {
  .comparison-cards { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 734px) {
  .comparison-cards { grid-template-columns: 1fr; }
}
```

---

## 12. Reasons to Buy (Icon Cards com Popover)

Cards com ícone, título, resumo e popover expandido ao hover/click.

### Estrutura HTML
```html
<section class="reasons-section">
  <h2 class="reasons-headline">Motivos para comprar seus AirPods na Apple.</h2>
  <a class="reasons-link" href="/br/airpods/">Comprar AirPods ›</a>

  <div class="reasons-cards">

    <div class="reason-card" data-popover="shipping">
      <figure class="reason-icon">
        <img src="icon_truck_box__large.png" alt="">
      </figure>
      <h3 class="reason-title">Frete grátis.</h3>
      <p class="reason-summary">Entrega gratuita na sua casa.</p>

      <!-- Popover -->
      <div class="reason-popover" id="popover-shipping" role="tooltip">
        <h4 class="popover-title">Frete grátis.</h4>
        <p class="popover-body">Entrega gratuita na sua casa.</p>
        <a class="popover-link" href="/br/shop/goto/shipping_pickup">Saiba mais ›</a>
      </div>
    </div>

    <div class="reason-card" data-popover="financing">
      <figure class="reason-icon">
        <img src="icon_financing__large.png" alt="">
      </figure>
      <h3 class="reason-title">Opções de pagamento.</h3>
      <p class="reason-summary">Aproveite e parcele com facilidade e conveniência.</p>

      <div class="reason-popover" id="popover-financing" role="tooltip">
        <h4 class="popover-title">Pague do jeito que ficar melhor.</h4>
        <p class="popover-body">
          Economize 10% no pagamento à vista. Parcele em até 12x com American Express,
          Visa ou Mastercard. Ou divida o valor entre dois cartões.
        </p>
        <a class="popover-link" href="/br/shop/browse/finance/installment">Saiba mais ›</a>
      </div>
    </div>

    <div class="reason-card" data-popover="appstore">
      <figure class="reason-icon">
        <img src="icon_app_applestore__large.png" alt="">
      </figure>
      <h3 class="reason-title">Uma experiência de compra inspirada em você.</h3>
      <p class="reason-summary">App Apple Store. Um jeito mais pessoal de comprar.</p>

      <div class="reason-popover" id="popover-appstore" role="tooltip">
        <h4 class="popover-title">Compre no app Apple Store. Feito sob medida para você.</h4>
        <p class="popover-body">
          Receba recomendações personalizadas de produtos, compare os modelos,
          acesse os itens salvos e acompanhe seus pedidos.
        </p>
        <a class="popover-link" href="https://apps.apple.com/br/app/apple-store/id375380948/">
          Baixar o app Apple Store ›
        </a>
        <img class="popover-qr" src="boc_qr_code__large.jpg" alt="QR Code Apple Store">
      </div>
    </div>

  </div>
</section>
```

### CSS
```css
.reasons-section {
  background: #f5f5f7;
  padding: 100px 40px;
  text-align: center;
}

.reasons-headline {
  font-size: 40px;
  font-weight: 700;
  color: #1d1d1f;
  max-width: 600px;
  margin: 0 auto 16px;
}

.reasons-link {
  font-size: 17px;
  color: #0066cc;
  text-decoration: none;
  display: inline-block;
  margin-bottom: 60px;
}

.reasons-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: var(--max-content-width);
  margin: 0 auto;
}

.reason-card {
  position: relative;
  background: #fff;
  border-radius: var(--radius-xl);
  padding: 40px 28px;
  text-align: center;
  cursor: pointer;
  transition: box-shadow 0.2s;
}

.reason-card:hover {
  box-shadow: var(--shadow-card);
}

.reason-icon {
  width: 56px;
  height: 56px;
  margin: 0 auto 20px;
}

.reason-icon img {
  width: 100%;
  height: auto;
}

.reason-title {
  font-size: 21px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 8px;
}

.reason-summary {
  font-size: 15px;
  color: #6e6e73;
  line-height: 1.5;
}

/* Popover */
.reason-popover {
  display: none;
  position: absolute;
  top: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  background: #fff;
  border-radius: var(--radius-lg);
  padding: 24px;
  box-shadow: var(--shadow-popover);
  text-align: left;
  z-index: 100;
}

.reason-card:hover .reason-popover,
.reason-card:focus-within .reason-popover {
  display: block;
  animation: popoverIn 0.2s ease;
}

@keyframes popoverIn {
  from { opacity: 0; transform: translateX(-50%) translateY(-4px); }
  to   { opacity: 1; transform: translateX(-50%) translateY(0); }
}

.popover-title {
  font-size: 17px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 8px;
}

.popover-body {
  font-size: 15px;
  color: #6e6e73;
  line-height: 1.5;
  margin-bottom: 12px;
}

.popover-link {
  font-size: 15px;
  color: #0066cc;
  text-decoration: none;
}

.popover-qr {
  width: 100px;
  height: 100px;
  margin-top: 16px;
  border-radius: var(--radius-sm);
}

@media (max-width: 734px) {
  .reasons-cards { grid-template-columns: 1fr; }
  .reason-popover { position: static; transform: none; width: 100%; margin-top: 16px; }
}
```

### Comportamento
- Hover no card: abre popover com animação de fade+translate
- Click no mobile: toggle do popover
- Popover fecha ao mover o mouse para fora do card
- Popover do card "App Apple Store" inclui QR code
- Acessibilidade: popover tem `role="tooltip"`, acessível via teclado (focus-within)

---

## 13. Explore Section (Cross-link Cards)

Seção final com cards de outros produtos da linha.

### Estrutura HTML
```html
<section class="explore-section">
  <div class="explore-inner">
    <h2>Continue explorando.</h2>
    <a href="/br/airpods/">Explorar todos os modelos de AirPods ›</a>
    <!-- reutiliza comparison-cards (ver seção 11) -->
  </div>
</section>
```

---

## 14. Botões e CTAs

### Variantes

#### CTA Primário (azul — compra)
```html
<a class="btn-primary" href="/br/shop/goto/buy_airpods/airpods_4">Comprar</a>
```
```css
.btn-primary {
  display: inline-block;
  background: #0071e3;
  color: #fff;
  font-size: 17px;
  font-weight: 400;
  padding: 12px 22px;
  border-radius: var(--radius-pill);
  text-decoration: none;
  transition: background 0.2s;
  cursor: pointer;
  border: none;
  outline: none;
}
.btn-primary:hover { background: #0077ed; }
.btn-primary:active { background: #006edb; }
```

#### Link Azul (texto simples)
```html
<a class="btn-link" href="#">Saiba mais ›</a>
```
```css
.btn-link {
  color: #0066cc;
  font-size: 17px;
  text-decoration: none;
  transition: color 0.2s;
}
.btn-link:hover {
  color: #0071e3;
  text-decoration: underline;
}
```

#### Link Claro (sobre fundo escuro)
```html
<a class="btn-link-light" href="#">Comprar</a>
```
```css
.btn-link-light {
  color: #2997ff;
  font-size: 17px;
  text-decoration: none;
  transition: color 0.2s;
}
.btn-link-light:hover {
  color: #5ec3fa;
  text-decoration: underline;
}
```

#### Botão de Play (vídeo)
```html
<button class="btn-play" aria-label="Assistir ao vídeo">
  <span class="btn-play-icon">
    <svg><!-- play SVG --></svg>
  </span>
  <span class="btn-play-label">Assistir ao vídeo</span>
</button>
```
```css
.btn-play {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: #0066cc;
  font-size: 17px;
  cursor: pointer;
  padding: 0;
  transition: color 0.2s;
}
.btn-play:hover { color: #0071e3; }
.btn-play-icon {
  width: 28px;
  height: 28px;
  background: #0066cc;
  color: #fff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

#### Todos os estados de foco
```css
button:focus-visible,
a:focus-visible {
  outline: 2px solid #0071e3;
  outline-offset: 2px;
  border-radius: 4px;
}
```

---

## 15. Comportamentos de Scroll e Animação

### Fade-in ao entrar no viewport
```javascript
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // anima só uma vez
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
```
```css
.animate-on-scroll {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.animate-on-scroll.visible {
  opacity: 1;
  transform: translateY(0);
}
```

### Autoplay de vídeo ao entrar no viewport
```javascript
const videoObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      const video = entry.target;
      if (entry.isIntersecting) {
        video.play();
      } else {
        video.pause();
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll('video[data-autoplay]').forEach(v => videoObserver.observe(v));
```

### Sticky nav com mudança de aparência
```javascript
const globalNav = document.querySelector('.global-nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY && currentScrollY > 100) {
    globalNav.classList.add('nav-hidden');    /* esconde ao descer */
  } else {
    globalNav.classList.remove('nav-hidden'); /* mostra ao subir */
  }

  lastScrollY = currentScrollY;
}, { passive: true });
```
```css
.global-nav {
  transition: transform 0.3s ease;
}
.global-nav.nav-hidden {
  transform: translateY(-100%);
}
```

### Modal de vídeo
```javascript
function openVideoModal(videoSrc) {
  const modal = document.createElement('div');
  modal.className = 'video-modal';
  modal.innerHTML = `
    <div class="video-modal-overlay" onclick="closeVideoModal(this)"></div>
    <div class="video-modal-content">
      <button class="video-modal-close" onclick="closeVideoModal(this)">✕</button>
      <video src="${videoSrc}" controls autoplay playsinline></video>
    </div>
  `;
  document.body.appendChild(modal);
  document.body.style.overflow = 'hidden';
}

function closeVideoModal(trigger) {
  const modal = trigger.closest('.video-modal');
  modal.remove();
  document.body.style.overflow = '';
}
```
```css
.video-modal {
  position: fixed;
  inset: 0;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.video-modal-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.85);
  animation: fadeIn 0.2s ease;
}

.video-modal-content {
  position: relative;
  z-index: 1;
  width: min(90vw, 900px);
  border-radius: var(--radius-lg);
  overflow: hidden;
  animation: scaleIn 0.3s ease;
}

.video-modal-content video {
  width: 100%;
  display: block;
}

.video-modal-close {
  position: absolute;
  top: 12px;
  right: 12px;
  background: rgba(0,0,0,0.5);
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  font-size: 16px;
  cursor: pointer;
  z-index: 2;
}

@keyframes scaleIn {
  from { transform: scale(0.95); opacity: 0; }
  to   { transform: scale(1);    opacity: 1; }
}
```

---

## 16. Tipografia

| Token | Tamanho | Peso | Uso |
|---|---|---|---|
| `display-hero` | 96px / clamp(48px, 8vw, 96px) | 700 | Título hero |
| `display-section` | 56px / clamp(32px, 5vw, 56px) | 700 | Títulos de seção |
| `display-sub` | 40px | 700 | Sub-seções |
| `headline` | 32px | 700 | Títulos de feature |
| `title` | 21–24px | 700 | Títulos de card |
| `body-lg` | 21px | 400 | Corpo destacado |
| `body` | 17px | 400 | Corpo padrão |
| `body-sm` | 15px | 400 | Texto secundário |
| `caption` | 12px | 400 | Notas de rodapé |
| `eyebrow` | 17–19px | 600 | Tags de categoria |

**Família:** SF Pro Display (headings) / SF Pro Text (corpo)  
**Fallback:** `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`

**Implementação com `clamp` para responsividade fluida:**
```css
.hero-title {
  font-size: clamp(48px, 8vw, 96px);
}
.section-headline {
  font-size: clamp(32px, 5vw, 56px);
}
```

---

## 17. Paleta de Cores

| Token | Valor | Uso |
|---|---|---|
| `color-bg-black` | `#000000` | Fundo seções hero/escuras |
| `color-bg-light` | `#f5f5f7` | Fundo seções alternadas |
| `color-bg-white` | `#ffffff` | Cards |
| `color-text-dark` | `#1d1d1f` | Texto primário sobre claro |
| `color-text-light` | `#f5f5f7` | Texto primário sobre escuro |
| `color-text-muted` | `#6e6e73` | Texto secundário |
| `color-text-muted-dark` | `#a1a1a6` | Texto secundário sobre escuro |
| `color-accent-blue` | `#0071e3` | CTAs, links ativos |
| `color-link` | `#0066cc` | Links sobre fundo claro |
| `color-link-dark` | `#2997ff` | Links sobre fundo escuro |
| `color-separator` | `rgba(0,0,0,0.1)` | Divisores sobre claro |
| `color-separator-dark` | `rgba(255,255,255,0.15)` | Divisores sobre escuro |

---

## 18. Responsividade e Breakpoints

| Breakpoint | Largura | Comportamento |
|---|---|---|
| Desktop Large | > 1440px | Max-width container, conteúdo centrado |
| Desktop | 1069px–1440px | Layout full, navegação expandida |
| Tablet | 735px–1068px | Grid de 2 colunas, fontes reduzidas |
| Mobile | < 734px | 1 coluna, global nav em drawer, fontes fluidas |

### Padrão de Container
```css
.container {
  width: 100%;
  max-width: 980px;
  margin: 0 auto;
  padding: 0 22px;
}

@media (min-width: 1441px) {
  .container { max-width: 1200px; }
}
@media (max-width: 1068px) {
  .container { padding: 0 20px; }
}
@media (max-width: 734px) {
  .container { padding: 0 16px; }
}
```

### Grid Responsivo Padrão
```css
.grid-3-col {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 1068px) {
  .grid-3-col { grid-template-columns: repeat(2, 1fr); }
}
@media (max-width: 734px) {
  .grid-3-col { grid-template-columns: 1fr; }
}
```

---

## 19. Acessibilidade

### Atributos obrigatórios
```html
<!-- Navegação: role e aria-label -->
<nav role="navigation" aria-label="Global">
<nav role="navigation" aria-label="AirPods 4">

<!-- Imagens: alt descritivo ou vazio se decorativo -->
<img src="hero.jpg" alt="Pessoa dançando com AirPods 4 no ouvido">
<img src="icon.png" alt="">  <!-- decorativo -->

<!-- Vídeo: controls, captions -->
<video controls>
  <track kind="captions" src="captions.vtt" srclang="pt" label="Português">
</video>

<!-- Botões sem label de texto -->
<button aria-label="Fechar modal">✕</button>

<!-- Popovers -->
<div role="tooltip" id="popover-1">...</div>
<button aria-describedby="popover-1">Card</button>

<!-- Estado atual na navegação -->
<a href="/br/airpods-4/" aria-current="page">Visão geral</a>
```

### Cores e Contraste
- Texto sobre `#f5f5f7`: `#1d1d1f` — Contraste 16.1:1 (AAA)
- Texto sobre `#000`: `#f5f5f7` — Contraste 19.6:1 (AAA)
- Links `#0066cc` sobre `#f5f5f7` — Contraste 5.9:1 (AA)
- Links `#2997ff` sobre `#000` — Contraste 5.3:1 (AA)
- Texto muted `#6e6e73` sobre `#f5f5f7` — Contraste 4.7:1 (AA) para body sm

### Navegação por teclado
- Todos os elementos interativos acessíveis via Tab
- Popovers abrem/fecham com Enter e Escape
- Modal de vídeo: foco armado ao abrir, devolvido ao trigger ao fechar
- Skip link para conteúdo principal:
```html
<a class="skip-link" href="#main-content">Ir para o conteúdo principal</a>
```
```css
.skip-link {
  position: absolute;
  top: -100%;
  left: 16px;
  background: #0071e3;
  color: #fff;
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  z-index: 99999;
  text-decoration: none;
}
.skip-link:focus { top: 16px; }
```

---

## Notas para Implementação (Claude Code)

1. **SF Pro não é disponível publicamente.** Usar `-apple-system, BlinkMacSystemFont` como fallback. Para produção fora do ecossistema Apple, substituir por `"Inter"` ou `"DM Sans"`.

2. **Vídeos HLS (.m3u8)** requerem `hls.js` em browsers não-Safari.

3. **Realidade Aumentada (`.usdz`)** funciona apenas em Safari/iOS nativo. Ignorar em outros browsers.

4. **Imagens** usam padrão `srcset` com sufixos `_small`, `_medium`, `_large`, `_xlarge` para responsividade. Usar `loading="lazy"` em todas as imagens abaixo do fold.

5. **Animações:** preferir `prefers-reduced-motion` para respeitar acessibilidade:
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

6. **Ordem de implementação sugerida:**
   - Tokens CSS (variáveis)
   - Layout base (container, grid, tipografia)
   - Global nav + Local nav
   - Hero
   - Seções de story (template reutilizável)
   - Componentes menores (stat cards, feature cards, comparison cards)
   - Interatividade (tabs, popovers, modal de vídeo)
   - Scroll animations (IntersectionObserver)
   - Responsividade final

---

*Documento gerado por análise estrutural da página apple.com/br/airpods-4/ — Abril 2026*