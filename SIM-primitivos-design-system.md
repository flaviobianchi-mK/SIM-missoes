# Primitivos — Tipografia

## Famílias tipográficas

Duas famílias principais foram identificadas no sistema:

- **Lexend Deca** (`font.family.display`) — exclusiva para títulos e
  elementos de alto impacto. Traz personalidade e reconhecimento à marca.
- **comfortaa** (`font.family.body`) — base de todo o texto funcional: corpo,
  navegação, formulários, botões. Excelente legibilidade em telas.

---



## Escala de tamanhos

| Token          | rem       | px   | Uso semântico                                   |
|----------------|-----------|------|-------------------------------------------------|
| `font.size.2xs`| 0.5625rem | 9px  | Apenas metadados muito secundários (evitar)     |
| `font.size.xs` | 0.625rem  | 10px | Timestamps, tooltips, legenda de imagem         |
| `font.size.sm` | 0.75rem   | 12px | Labels de botão sm, badges, chips               |
| `font.size.sm2`| 0.8125rem | 13px | Overline / eyebrow uppercase                   |
| `font.size.md` | 0.875rem  | 14px | Texto de formulário, helper text                |
| `font.size.base`| 1rem     | 16px | **Body** — Corpo principal, nav, botão md       |
| `font.size.lg` | 1.125rem  | 18px | Lead paragraph, subtítulo de destaque           |
| `font.size.xl` | 1.25rem   | 20px | Subtítulo de seção, card title sm               |
| `font.size.2xl`| 1.5rem    | 24px | Card title md                                   |
| `font.size.3xl`| 1.5625rem | 25px | Card title lg, título editorial                 |
| `font.size.4xl`| 1.875rem  | 30px | H3 — Heading de seção menor                    |
| `font.size.5xl`| 2.4375rem | 39px | **H2** — Section heading                       |
| `font.size.6xl`| 3rem      | 48px | H1 — Page title                                 |
| `font.size.7xl`| 3.8125rem | 61px | **Display** — Hero h1, máximo impacto           |

> A escala não segue um modular scale matemático puro (ex: 1.25×).
> Recomendação: ao criar novos componentes, priorizar os tamanhos
> `base`, `xl`, `3xl`, `5xl` e `7xl` como âncoras da hierarquia.

---

## Pesos

| Token                  | Valor | Uso                                          |
|------------------------|-------|----------------------------------------------|
| `font.weight.regular`  | 400   | Corpo corrido, subtítulos suaves             |
| `font.weight.medium`   | 500   | Overlines, metadados, ênfase leve            |
| `font.weight.semibold` | 600   | Headings secundários, nav ativo, labels      |
| `font.weight.bold`     | 700   | Títulos principais, CTAs, valores de impacto |

---

## Line height

| Token                    | Ratio  | Uso típico                                 |
|--------------------------|--------|--------------------------------------------|
| `font.lineHeight.none`   | 1      | Textos de uma linha, sem quebra            |
| `font.lineHeight.tight`  | 1.16   | H1, H2 — Headings de grande porte         |
| `font.lineHeight.snug`   | 1.2    | H3, H4, card titles                        |
| `font.lineHeight.normal` | 1.4    | Lead text, subtítulos editoriais           |
| `font.lineHeight.relaxed`| 1.5    | **Body padrão** — máxima legibilidade      |
| `font.lineHeight.loose`  | 1.625  | Artigos longos, leitura contínua           |

---

## Letter spacing

| Token                      | Valor   | Uso                                       |
|----------------------------|---------|-------------------------------------------|
| `font.letterSpacing.tight` | -0.71px | Headings Lexend Deca (grande porte)       |
| `font.letterSpacing.normal`| 0px     | Body text, uso padrão                     |
| `font.letterSpacing.wide`  | 0.4px   | Rótulos UI secundários                    |
| `font.letterSpacing.wider` | 0.5px   | Labels de botão, badges (Inter uppercase) |

---

## Padrões de composição tipográfica

### Hero / Display (H1)
```
font-family:    font.family.display  (Lexend Deca)
font-size:      font.size.7xl        (3.8125rem / 61px)
font-weight:    font.weight.bold     (700)
line-height:    font.lineHeight.tight (1.16)
letter-spacing: font.letterSpacing.tight (-0.71px)
```

### Section Heading (H2)
```
font-family:    font.family.display  (Lexend Deca)
font-size:      font.size.5xl        (2.4375rem / 39px)
font-weight:    font.weight.bold     (700)
line-height:    font.lineHeight.tight (1.16)
letter-spacing: font.letterSpacing.tight (-0.71px)
```

### Card Title (H4 / H5)
```
font-family:    font.family.display  (Lexend Deca)
font-size:      font.size.3xl        (1.5625rem / 25px)
font-weight:    font.weight.bold     (700)
line-height:    font.lineHeight.snug  (1.2)
letter-spacing: font.letterSpacing.tight (-0.71px)
```

### Body Text
```
font-family:    font.family.body     (Inter)
font-size:      font.size.base       (1rem / 16px)
font-weight:    font.weight.regular  (400)
line-height:    font.lineHeight.relaxed (1.5)
letter-spacing: font.letterSpacing.normal (0)
```

### Overline / Eyebrow
```
font-family:    font.family.display  (Lexend Deca)
font-size:      font.size.sm2        (0.8125rem / 13px)
font-weight:    font.weight.medium   (500)
text-transform: font.textTransform.uppercase
letter-spacing: font.letterSpacing.wider (0.5px)
```

### Label de Botão (SM)
```
font-family:    font.family.body     (Inter)
font-size:      font.size.sm         (0.75rem / 12px)
font-weight:    font.weight.bold     (700)
letter-spacing: font.letterSpacing.wider (0.5px)
line-height:    font.lineHeight.none  (1)
```
```

---

# Primitivos — Bordas & Espaçamentos

## Filosofia

Seguimos uma **escala de base 4px** (4-point grid), garantindo harmonia
visual em todos os dispositivos. Valores fora da escala existem apenas
como exceções composicionais herdadas do site atual e não devem ser
introduzidos em novos componentes.

---

## Border Radius

| Token              | Valor   | Uso principal                          |
|--------------------|---------|----------------------------------------|
| `border.radius.none` | 0px   | Divisores, regras horizontais          |
| `border.radius.xs`   | 4px   | Tags, chips de categoria               |
| `border.radius.sm`   | 6px   | Tooltips, badges informacionais        |
| `border.radius.md`   | 8px   | **Padrão** — Botões, inputs, dropdowns |
| `border.radius.lg`   | 12px  | Cards de notícia, modais               |
| `border.radius.xl`   | 16px  | Cards de campanha, hero highlights     |
| `border.radius.2xl`  | 20px  | Painéis de destaque suave              |
| `border.radius.3xl`  | 40px  | Banners arredondados                   |
| `border.radius.pill` | 50px  | CTAs primários, botão "Doe Agora"      |
| `border.radius.full` | 999px | Badges, pills de navegação             |
| `border.radius.circle` | 100% | Avatares, ícones circulares          |

> **Regra de decisão:** componentes interativos primários usam `pill` ou `md`.
> Containers de conteúdo usam `lg` ou `xl`. Nunca misture radius extremos
> (`pill` + `none`) no mesmo componente.

---

## Border Width

| Token              | Valor | Uso principal                                  |
|--------------------|-------|------------------------------------------------|
| `border.width.none` | 0px  | Botões primários filled, sem borda visível     |
| `border.width.xs`   | 1px  | **Padrão** — Inputs, cards outlined, divisores |
| `border.width.sm`   | 2px  | Focus ring, estado ativo/selecionado           |
| `border.width.md`   | 4px  | Acento editorial, sidebar item ativo           |

---

## Escala de Espaçamento

| Token        | Valor | Multiplicador | Uso principal                            |
|--------------|-------|---------------|------------------------------------------|
| `spacing.0`  | 0px   | ×0            | Reset                                    |
| `spacing.1`  | 2px   | ×0.5          | Micro-ajustes ópticos                    |
| `spacing.2`  | 4px   | ×1            | Gap ícone+label, borda interna           |
| `spacing.3`  | 6px   | ×1.5          | Padding chips e tags                     |
| `spacing.4`  | 8px   | ×2            | **Base unit** — Padding botão sm, gaps   |
| `spacing.5`  | 10px  | ×2.5          | Padding vertical botão md               |
| `spacing.6`  | 12px  | ×3            | Padding interno inputs                  |
| `spacing.8`  | 16px  | ×4            | **Unidade principal** — Padding padrão  |
| `spacing.10` | 20px  | ×5            | Padding horizontal botões, col gap      |
| `spacing.12` | 24px  | ×6            | Grid gap, padding de card               |
| `spacing.16` | 32px  | ×8            | Separação entre blocos de conteúdo      |
| `spacing.20` | 40px  | ×10           | Padding de seções, hero vertical        |
| `spacing.26` | 52px  | ×13           | Margens generosas de seção              |
| `spacing.30` | 60px  | ×15           | Entre seções principais                 |
| `spacing.36` | 72px  | ×18           | Seções de alto impacto visual           |

---

## Gaps de Layout

| Token     | Referência     | Valor | Uso                              |
|-----------|----------------|-------|----------------------------------|
| `gap.xs`  | `spacing.2`    | 4px   | Ícones agrupados                 |
| `gap.sm`  | `spacing.4`    | 8px   | Botões com ícone, tags inline    |
| `gap.md`  | `spacing.8`    | 16px  | **Padrão** — Listas, forms       |
| `gap.lg`  | `spacing.12`   | 24px  | Grids de card (3-col)            |
| `gap.xl`  | `spacing.16`   | 32px  | Grid principal de layout         |
| `gap.2xl` | `spacing.20`   | 40px  | Blocos hero e highlight          |

---

## Padrões de Composição

### Botão padrão
```
border-radius: border.radius.md (8px)
padding: spacing.5 spacing.12 (10px 24px)
border-width: border.width.xs (1px) ou none
gap: gap.sm (8px) — entre ícone e texto
```

### Input / Campo de formulário
```
border-radius: border.radius.md (8px)
border-width: border.width.xs (1px)
padding: spacing.5 spacing.6 (10px 15px)
```

### Card de conteúdo
```
border-radius: border.radius.lg (12px)
padding: spacing.8 (16px) ou spacing.12 (24px)
gap interno: gap.md (16px)
```

### Tag / Badge
```
border-radius: border.radius.xs (4px) ou border.radius.full (999px)
padding: spacing.1 spacing.3 (2px 6px)
```
```

---

## Estrutura de arquivos recomendada
```
tokens/
├── primitives/
│   ├── border.json       ← radius, width, style
│   ├── spacing.json      ← scale + gap
│   └── (color.json)      ← fora do escopo desta entrega
├── semantic/
│   ├── components.json   ← referências aos primitivos
│   └── layout.json
└── docs/
    └── primitives-border-spacing.md

## Estrutura de arquivos completa até agora
```
tokens/
├── primitives/
│   ├── border.json        ← radius, width, style
│   ├── spacing.json       ← scale + gap
│   └── typography.json    ← family, size, weight, line-height, tracking ✅
├── semantic/
│   └── (componentes referenciam os primitivos acima)
└── docs/
    ├── primitives-border-spacing.md
    └── primitives-typography.md   ✅