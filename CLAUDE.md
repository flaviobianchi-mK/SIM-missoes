# Agent Instructions — Simplesmente Missões

Você está trabalhando no projeto **Simplesmente Missões** — site de apoio à missão de Neno e Liz em Beja, Portugal.

---

## Core Philosophy

Arquitetura que separa responsabilidades: IA probabilística cuida do raciocínio, código determinístico cuida da execução.

**Layer 1: Workflows** — SOPs em Markdown definindo objetivos, inputs, ferramentas, outputs.
**Layer 2: Agent (Você)** — Coordenação inteligente. Leia os artefatos, execute skills, faça perguntas. Conecte intenção à execução.
**Layer 3: Tools** — Scripts e arquivos de execução determinística.

---

## Projeto: Simplesmente Missões

Site de apoio missionário com foco em:

| Objetivo | Descrição |
|---|---|
| **Apresentar o campo** | Por que Beja — dados, contexto espiritual, urgência |
| **Contar a história** | Quem são Neno e Liz — formação, chamado, parceiros |
| **Gerar apoio** | Conversão de visitantes em apoiadores financeiros e intercessores |
| **Credibilidade** | Parceiros institucionais: SEPAL, MEVIC, Igreja Batista do Povo |

---

## Design System — SIM × Apple

**Fonte da verdade:** `SIM-primitivos-design-system.md` + `specs-apple-design.md`

> Toda decisão visual rastreia até um token. Nunca hardcode cores, espaçamentos ou radius fora dos tokens.

**Regra de composição:**
- **Tipografia** → SIM-primitivos (`Lexend Deca` display · `Comfortaa` body · escala rem)
- **Cores** → SIM-primitivos (tokens SIM brand guide)
- **Espaçamento e layout** → Apple (`--space-xs` a `--space-4xl` · `section-padding` · `max-content-width`)
- **Componentes e estrutura** → Apple (nav sticky + blur, hero, bento gallery, story sections, stat cards, feature cards)
- **Border radius** → SIM-primitivos (escala `xs` 4px → `pill` 50px → `full` 999px)
- **Sombras** → Apple (`shadow-card` · `shadow-popover`)

### Tipografia

| Papel | Família | Uso |
|---|---|---|
| **Display / Headings** | `'Lexend Deca', sans-serif` | Títulos, hero, seções de destaque |
| **Body / UI** | `'Comfortaa', sans-serif` | Corpo de texto, nav, botões, labels |

```html
<link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;600;700&family=Comfortaa:wght@400;500;600;700&display=swap" rel="stylesheet">
```

**Escala (SIM-primitivos — rem):**

| Token | Família | rem | px | Peso | Uso |
|---|---|---|---|---|---|
| `--text-display` | Lexend Deca | 3.8125rem | 61px | 700 | Hero H1 |
| `--text-6xl` | Lexend Deca | 3rem | 48px | 700 | H1 page title |
| `--text-5xl` | Lexend Deca | 2.4375rem | 39px | 700 | H2 section heading |
| `--text-4xl` | Lexend Deca | 1.875rem | 30px | 600 | H3 |
| `--text-3xl` | Lexend Deca | 1.5625rem | 25px | 700 | Card title |
| `--text-2xl` | Comfortaa | 1.5rem | 24px | 600 | Card title md |
| `--text-xl` | Comfortaa | 1.25rem | 20px | 600 | Subtítulo |
| `--text-lg` | Comfortaa | 1.125rem | 18px | 400 | Lead paragraph |
| `--text-base` | Comfortaa | 1rem | 16px | 400 | Body |
| `--text-md` | Comfortaa | 0.875rem | 14px | 400 | Helper text |
| `--text-sm` | Comfortaa | 0.75rem | 12px | 700 | Labels, badges |
| `--text-eyebrow` | Lexend Deca | 0.8125rem | 13px | 500 | Overline uppercase |

### Cores

> Tokens semânticos — valores hex definidos no brand guide SIM.

| Token | Uso |
|---|---|
| `--color-bg-primary` | Hero, seções escuras |
| `--color-bg-alt: #f5f5f7` | Seções claras alternadas |
| `--color-bg-white: #ffffff` | Superfícies brancas |
| `--color-text-dark: #1d1d1f` | Sobre fundo claro |
| `--color-text-light: #f5f5f7` | Sobre fundo escuro |
| `--color-text-secondary: #6e6e73` | Suporte, metadados |
| `--color-accent` | CTA primário — brand guide SIM |
| `--color-accent-hover` | Estado hover |
| `--color-accent-secondary` | Destaque secundário |
| `--color-border-light: rgba(0,0,0,0.1)` | Bordas sobre fundo claro |
| `--color-border-dark: rgba(255,255,255,0.15)` | Bordas sobre fundo escuro |
| `--color-overlay: rgba(0,0,0,0.61)` | Overlay sobre imagem/vídeo |

**Regra:** CTA sempre `--color-accent` com texto `--color-bg-white`. Nunca hardcode hex.

### Espaçamento — Apple

| Token | px | Uso |
|---|---|---|
| `--space-xs` | 8px | Gap ícone+label |
| `--space-sm` | 12px | Padding chips |
| `--space-md` | 16px | Padding padrão |
| `--space-lg` | 24px | Grid gap, card |
| `--space-xl` | 40px | Seções menores |
| `--space-2xl` | 60px | Entre seções |
| `--space-3xl` | 80px | Seções de impacto |
| `--space-4xl` | 120px | Hero, flagship |
| `--section-padding-v` | 100px | Seção desktop |
| `--section-padding-v-mobile` | 60px | Seção mobile |
| `--max-content-width` | 980px | Conteúdo padrão |
| `--max-content-width-wide` | 1200px | Hero, galeria |

### Border Radius — SIM-primitivos

| Token | Valor | Uso |
|---|---|---|
| `--radius-none` | 0px | Divisores |
| `--radius-xs` | 4px | Tags, chips |
| `--radius-sm` | 6px | Tooltips, badges |
| `--radius-md` | 8px | **Padrão** — botões, inputs |
| `--radius-lg` | 12px | Cards, modais |
| `--radius-xl` | 16px | Cards campanha |
| `--radius-2xl` | 20px | Painéis destaque |
| `--radius-3xl` | 40px | Banners arredondados |
| `--radius-pill` | 50px | CTAs primários |
| `--radius-full` | 999px | Badges, pills nav |
| `--radius-circle` | 100% | Avatares |

### Sombras — Apple

| Token | Valor | Uso |
|---|---|---|
| `--shadow-card` | `0 2px 24px rgba(0,0,0,0.12)` | Cards |
| `--shadow-popover` | `0 4px 48px rgba(0,0,0,0.18)` | Popovers |

### Navegação — Apple

| Token | Valor |
|---|---|
| `--nav-height-global` | 44px |
| `--nav-height-local` | 52px |
| `--nav-bg` | `rgba(22, 22, 23, 0.8)` |
| `--nav-blur` | `saturate(180%) blur(20px)` |

### CSS Tokens Consolidados

```css
/* <link href="https://fonts.googleapis.com/css2?family=Lexend+Deca:wght@400;500;600;700&family=Comfortaa:wght@400;500;600;700&display=swap" rel="stylesheet"> */

:root {
  /* FONTES — SIM-primitivos */
  --font-display: 'Lexend Deca', sans-serif;
  --font-body:    'Comfortaa', sans-serif;

  /* ESCALA DE FONTE — rem */
  --text-display: 3.8125rem;
  --text-6xl:     3rem;
  --text-5xl:     2.4375rem;
  --text-4xl:     1.875rem;
  --text-3xl:     1.5625rem;
  --text-2xl:     1.5rem;
  --text-xl:      1.25rem;
  --text-lg:      1.125rem;
  --text-base:    1rem;
  --text-md:      0.875rem;
  --text-sm:      0.75rem;
  --text-eyebrow: 0.8125rem;

  /* PESOS */
  --font-regular:  400;
  --font-medium:   500;
  --font-semibold: 600;
  --font-bold:     700;

  /* LINE HEIGHTS */
  --lh-none:    1;
  --lh-tight:   1.16;
  --lh-snug:    1.2;
  --lh-normal:  1.4;
  --lh-relaxed: 1.5;
  --lh-loose:   1.625;

  /* LETTER SPACING */
  --ls-tight:  -0.71px;
  --ls-normal: 0px;
  --ls-wide:   0.4px;
  --ls-wider:  0.5px;

  /* CORES — SIM-primitivos */
  --color-bg-primary:       #000000;
  --color-bg-alt:           #f5f5f7;
  --color-bg-white:         #ffffff;
  --color-text-dark:        #1d1d1f;
  --color-text-light:       #f5f5f7;
  --color-text-secondary:   #6e6e73;
  --color-text-link:        var(--color-accent);
  --color-accent:           #FF9500;  /* ← substituir por cor primária SIM */
  --color-accent-hover:     #FF9500;
  --color-accent-secondary: #132238;  /* ← substituir por cor secundária SIM */
  --color-border-light:     rgba(0, 0, 0, 0.1);
  --color-border-dark:      rgba(255, 255, 255, 0.15);
  --color-overlay:          rgba(0, 0, 0, 0.61);

  /* ESPAÇAMENTO — Apple */
  --space-xs:  8px;
  --space-sm:  12px;
  --space-md:  16px;
  --space-lg:  24px;
  --space-xl:  40px;
  --space-2xl: 60px;
  --space-3xl: 80px;
  --space-4xl: 120px;
  --section-padding-v:        100px;
  --section-padding-v-mobile: 60px;
  --max-content-width:        980px;
  --max-content-width-wide:   1200px;

  /* BORDER RADIUS — SIM-primitivos */
  --radius-none:   0px;
  --radius-xs:     4px;
  --radius-sm:     6px;
  --radius-md:     8px;
  --radius-lg:     12px;
  --radius-xl:     16px;
  --radius-2xl:    20px;
  --radius-3xl:    40px;
  --radius-pill:   50px;
  --radius-full:   999px;
  --radius-circle: 100%;

  /* SOMBRAS — Apple */
  --shadow-card:    0 2px 24px rgba(0, 0, 0, 0.12);
  --shadow-popover: 0 4px 48px rgba(0, 0, 0, 0.18);

  /* NAVEGAÇÃO — Apple */
  --nav-height-global: 44px;
  --nav-height-local:  52px;
  --nav-bg:            rgba(22, 22, 23, 0.8);
  --nav-blur:          saturate(180%) blur(20px);
}
```

### Breakpoints — Apple

```css
@media (max-width: 734px)  { /* mobile  */ }
@media (min-width: 735px) and (max-width: 1068px) { /* tablet  */ }
@media (min-width: 1069px) { /* desktop */ }
```

### Componentes Apple — obrigatórios

| Componente | Referência |
|---|---|
| Global Nav (sticky + blur) | `specs-apple-design.md §2` |
| Local Nav | `specs-apple-design.md §3` |
| Hero Section | `specs-apple-design.md §4` |
| Bento Gallery | `specs-apple-design.md §7` |
| Story Sections (scroll narrativo) | `specs-apple-design.md §8` |
| Feature / Icon Cards | `specs-apple-design.md §9` |
| Stat Cards | `specs-apple-design.md §10` |
| Botões e CTAs | `specs-apple-design.md §14` |

---

## Skills Disponíveis

| Arquivo | Função | Quando usar |
|---|---|---|
| `SKILLS/skill-pro-uidesigner.md` | Designer UI sênior — design system SIM × Apple | Qualquer componente, tela ou LP visual |
| `SKILLS/lp-skill.md` | Landing page copy + estrutura de conversão | Criar ou revisar copy e estrutura de páginas |
| `SKILLS/Assets/vibe-design.md` | Persona FAANG designer | Referência / base para outras skills |

### Hierarquia de uso

```
1. CHECAR   → Existe skill para essa tarefa? Ver tabela acima
2. CARREGAR → Ler o arquivo da skill antes de executar
3. ADAPTAR  → Aplicar ao contexto do projeto
4. CRIAR    → Skill custom APENAS se nada existir
```

---

## Context System — Auto-Load

| Tipo de Tarefa | Artefatos para Carregar |
|---|---|
| UI / Componentes / Estilização | `SIM-primitivos-design-system.md` + `SKILLS/skill-pro-uidesigner.md` |
| Landing Page / Copy | `SKILLS/lp-skill.md` + conteúdo do site (`Texto-site.txt`) |
| Design de componente | `SKILLS/skill-pro-uidesigner.md` + `specs-apple-design.md` |
| Debug visual | Verificar tokens em `CLAUDE.md §Design System` |

---

## Estrutura de Página — Simplesmente Missões

| Bloco | Componente Apple | Conteúdo |
|---|---|---|
| **Nav** | Global Nav sticky | Logo SIM + links âncora + CTA apoio |
| **Hero** | Hero Section | Headline impacto + imagem Beja/Neno e Liz + CTA |
| **Por que Beja** | Stat Cards | 25.000 hab · 3.000 estudantes · poucas igrejas |
| **Nossa Missão** | Story Section (scroll) | Narrativa da missão, fotos, propósito |
| **Neno e Liz** | Feature Cards | Formação EBM, ministério, chamado |
| **Parceiros** | Bento Gallery | SEPAL · MEVIC · Igreja Batista do Povo |
| **Apoiar** | CTA Section | Botão doação + contato + oração |
| **Footer** | Footer padrão | Links parceiros, redes sociais, contato |

---

## Regras de Design — Sempre Aplicar

1. **Nunca hardcode** — use tokens definidos neste arquivo
2. **Lexend Deca para display** — headings com `letter-spacing: -0.71px`
3. **Comfortaa para body** — leitura acolhedora, sem uppercase forçado
4. **`--color-accent` para CTA** — texto sempre `--color-bg-white`
5. **Cheque antes de criar** — veja skills e referências existentes primeiro
6. **Todo componente é responsivo** — mobile, tablet, desktop sem exceção

---

## Responsividade — Obrigatório

**Todo componente, página e LP deve funcionar em mobile, tablet e desktop.**

### Breakpoints (Apple)

| Nome | Breakpoint |
|---|---|
| Mobile | `max-width: 734px` |
| Tablet | `min-width: 735px` e `max-width: 1068px` |
| Desktop | `min-width: 1069px` |

### Checklist por componente

- Grids 2+ colunas → empilham em ≤ 734px
- Font-sizes de display/hero → `clamp()` obrigatório
- Paddings horizontais → mínimo `--space-md` (16px) no mobile
- Nav links → menu hambúrguer em ≤ 734px
- CTAs em row → `flex-direction: column` em ≤ 734px

Bloco `/* ── Responsive ── */` sempre **no mesmo arquivo** do componente, após as regras base.

### Regra Obrigatória — Componentes Novos

> **Todo componente novo deve ser desenvolvido e testado para os três breakpoints ao mesmo tempo: desktop, tablet e mobile.**

Isso inclui:
- Componentes com layout de 2+ colunas: definir como empilham no tablet e no mobile
- Componentes com painéis ocultos/visíveis (accordions, tabs, modais): garantir fallback funcional em cada breakpoint
- Componentes com imagens decorativas fixas: definir se ocultam no mobile ou migram para dentro de painéis colapsáveis
- JavaScript interativo: o comportamento deve funcionar identicamente em touch e mouse

**Ao criar um componente novo:**
1. Escreva o CSS base (desktop)
2. Imediatamente adicione `@media (max-width: 1068px)` (tablet)
3. Imediatamente adicione `@media (max-width: 734px)` (mobile)
4. Nunca entregue um componente sem os três blocos responsive presentes no CSS

---

## File Structure

```
simplesmente missões/
├── CLAUDE.md                        # Este arquivo — orquestrador central
├── SIM-primitivos-design-system.md  # Tipografia, radius e espaçamento SIM
├── specs-apple-design.md            # Componentes e layout Apple
│
├── SKILLS/
│   ├── skill-pro-uidesigner.md      # UI Designer — design system SIM × Apple
│   ├── lp-skill.md                  # Landing Page Builder
│   └── Assets/
│       └── vibe-design.md           # Persona FAANG designer
│
├── index.html                       # Página principal (em desenvolvimento)
├── Texto-site.txt                   # Conteúdo extraído do site atual
└── LOGO SM 009.avif                 # Logo Simplesmente Missões
```

---

## Bottom Line

1. **Leia os artefatos** — `SIM-primitivos-design-system.md`, `specs-apple-design.md`, skills
2. **Decida com inteligência** — use o que existe antes de criar
3. **Aplique os tokens** — toda decisão visual rastreia até este arquivo
4. **Seja pragmático** — acolhedor no tom, preciso na execução

Para UI: `SKILLS/skill-pro-uidesigner.md` é o guia visual.
Para copy e LP: `SKILLS/lp-skill.md` é o guia de estrutura.
