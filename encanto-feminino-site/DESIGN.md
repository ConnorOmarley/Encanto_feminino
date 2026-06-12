---
name: Encanto Feminino
description: Landing page editorial de marca para lingeries, pijamas e sabonetes artesanais sob encomenda.
colors:
  rose: "#c8738a"
  rose-light: "#e8a0b0"
  rose-pale: "#f5dde4"
  rose-deep: "#9e4d65"
  wine: "#7a3048"
  wine-dark: "#52203a"
  surface: "#f9f2f5"
  surface-warm: "#f2e6dd"
  blush: "#fce9f0"
  blush-mid: "#f9d5e5"
  ink: "#3d1e2c"
  ink-mid: "#7a4f5c"
  ink-light: "#8a5f6d"
typography:
  display:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(3.2rem, 9.5vw, 6.4rem)"
    fontWeight: 300
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "clamp(2.1rem, 5.5vw, 3.8rem)"
    fontWeight: 400
    lineHeight: 1.12
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Cormorant Garamond, Georgia, serif"
    fontSize: "1.12rem"
    fontWeight: 500
    lineHeight: 1.28
  body:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.8
  label:
    fontFamily: "Jost, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 500
    letterSpacing: "0.08em"
rounded:
  sm: "0.6rem"
  default: "0.85rem"
  pill: "99px"
spacing:
  xs: "0.45rem"
  sm: "0.9rem"
  md: "1.4rem"
  lg: "2.5rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "{colors.rose}"
    textColor: "#ffffff"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.8rem"
  button-primary-hover:
    backgroundColor: "{colors.rose-deep}"
    textColor: "#ffffff"
  button-outline:
    backgroundColor: "rgba(255,255,255,0.6)"
    textColor: "{colors.rose-deep}"
    rounded: "{rounded.pill}"
    padding: "0.85rem 1.8rem"
  button-outline-hover:
    backgroundColor: "{colors.rose}"
    textColor: "#ffffff"
  filter-chip:
    backgroundColor: "#ffffff"
    textColor: "{colors.ink-mid}"
    rounded: "{rounded.pill}"
    padding: "0.48rem 1.2rem"
  filter-chip-active:
    backgroundColor: "{colors.wine}"
    textColor: "#ffffff"
  product-card:
    backgroundColor: "#ffffff"
    rounded: "{rounded.default}"
    padding: "0"
  faq-item:
    backgroundColor: "#ffffff"
    rounded: "{rounded.sm}"
---

# Design System: Encanto Feminino

## 1. Overview

**Creative North Star: "O Ateliê Íntimo"**

O sistema visual da Encanto Feminino é construído como um ateliê de moda de luxo acessível: íntimo, artesanal, atemporal. A tipografia editorial em Cormorant Garamond carrega o peso da marca, enquanto o Jost funciona como o balcão neutro onde os detalhes práticos residem. O espaço em branco não é ausência — é o equivalente visual de tecido de qualidade, do peso de um produto bem feito.

A cor não decora, ela identifica. A paleta wine e rose é comprometida (`Committed` strategy): o wine-dark (`#52203a`) ancora o rodapé e os CTAs de maior peso; o rose (`#c8738a`) é o sotaque emocional usado com precisão em destaques interativos. A superfície (`#f9f2f5`) é ligeiramente tingida em direção à rosa da marca — não areia, não creme, mas claramente do universo cromático da Encanto Feminino.

Explicitamente rejeitado: o fundo creme/areia quente que é o padrão AI de 2026, grid-pills de eyebrow em toda seção, ghost-cards (borda + sombra larga simultâneas), side-stripes em bordas coloridas, filtros de papel grain com feTurbulence, e qualquer estética de marketplace genérico (Shopee, Mercado Livre) ou varejo de massa (Riachuelo, C&A).

**Key Characteristics:**
- Tipografia display em escala editorial generosa com letra-espaçamento no limite -0.02em/-0.04em
- Paleta comprometida: wine-dark como âncora, rose como sotaque, surface levemente rosado
- Elevation por contraste de borda, não por sombras largas decorativas
- Section labels em italic serif com linha fina — editorial, não pill
- Botões pill com shimmer sutil; cards clean sem ghost-card patterns

## 2. Colors

Paleta comprometida baseada em vinho e rosa: o wine-dark ancora, o rose acende.

### Primary
- **Rose Encanto** (`#c8738a`): A cor de ação. CTAs secundários, estados ativos de filtros, ícones interativos, underline animado em títulos em itálico. Usada em ~20–30% das superfícies.
- **Wine** (`#7a3048`): Âncora primária para CTAs de maior peso (botão primário de fundo via gradiente), títulos de produto, preços. Tom sério e comprometido.
- **Wine Dark** (`#52203a`): O mais profundo. Rodapé, fundo do menu mobile, gradiente do announcement bar. Autoridade máxima.

### Secondary
- **Rose Deep** (`#9e4d65`): Texto de destaque, hover em links de nav, label de categoria de produto. Intermediário entre rose e wine.
- **Rose Light** (`#e8a0b0`): Bordas de linha fina em section labels, linha divisória do hero, estrelas de avaliação em depoimentos.

### Tertiary
- **Rose Pale** (`#f5dde4`): Ícones de fundo em about-cards, chip de tamanho/cor em produto. Suavíssimo, quase background.
- **Blush Mid** (`#f9d5e5`): Fundo de gradiente hero, announcement bar como gradiente de fundo.

### Neutral
- **Surface** (`#f9f2f5`): Fundo do body. Ligeiramente tingido em direção à rosa da marca — não creme, não areia. Distinção intencional do padrão AI de 2026.
- **Surface Warm** (`#f2e6dd`): Fundo de seções About e Catalog como gradiente suave. Nudez quente.
- **Ink** (`#3d1e2c`): Texto primário. Wine muito escuro — vive entre o preto e o vinho. Nunca preto puro.
- **Ink Mid** (`#7a4f5c`): Texto de corpo em parágrafos, links de nav. 
- **Ink Light** (`#8a5f6d`): Texto de apoio, descrições de produto, FAQs. Mínimo 4.5:1 contra surface.

### Named Rules
**The Committed Palette Rule.** Rose e wine são cores de identidade, não sotaques opcionais. Nunca substitua por cinza neutro, azul ou verde — mesmo que "combine melhor". A cor carrega a marca.

**The Surface Rule.** O body background nunca é creme quente (`oklch > 0.84 C < 0.06 hue 40-100`). Se precisar de um fundo claro, tinte em direção ao hue da marca (rosa, wine), não em direção ao âmbar.

## 3. Typography

**Display Font:** Cormorant Garamond (Georgia, serif)
**Body Font:** Jost (system-ui, sans-serif)

**Character:** Cormorant Garamond traz o peso de um ateliê de alta-costura — serifado clássico, itálico expressivo, ideal para grandes escalas. Jost funciona como contraste arquitetônico: geométrico, neutro, funcional. Juntos, criam a tensão entre artesanal e contemporâneo que define a marca.

### Hierarchy
- **Display** (peso 300, `clamp(3.2rem, 9.5vw, 6.4rem)`, line-height 1.04, letter-spacing -0.02em): Hero title. Máximo 6.4rem (~102px) — nunca ultrapassar. Itálico no segundo word.
- **Headline** (peso 400, `clamp(2.1rem, 5.5vw, 3.8rem)`, line-height 1.12, letter-spacing -0.01em): Section titles. `text-wrap: balance` aplicado.
- **Title** (peso 500, `1.05–1.12rem`, line-height 1.28): Nome de produto, título de step, título de about-card.
- **Body** (peso 400, `1rem`, line-height 1.8, max ~65ch): Parágrafos de seção About, descrições de produto. Line-height generoso para leitura confortável.
- **Label** (peso 500–600, `0.68–0.8rem`, letter-spacing 0.08–0.18em, uppercase): Tags de categoria, badges de status, filtros de catálogo.

### Named Rules
**The Italic Emphasis Rule.** Em títulos de seção, o último word-group deve ser em `<em>` (itálico de Cormorant Garamond). Este ritmo itálico é a assinatura tipográfica da marca — não usar em mais de um elemento por seção.

**The Letter-Spacing Floor Rule.** Letter-spacing de display nunca abaixo de -0.04em. -0.02em é o ponto ideal para Cormorant Garamond em escala hero.

## 4. Elevation

O sistema usa elevation por contraste de borda, não por sombras decorativas largas. Superfícies em repouso são planas — bordas finas de baixa opacidade definem forma. Sombras aparecem apenas em estados hover como resposta a interação, e sempre contidas (blur ≤ 8px em repouso, ≤ 24px em hover).

O ghost-card pattern (borda `1px solid` + `box-shadow blur ≥ 16px` no mesmo elemento) é **proibido**.

### Shadow Vocabulary
- **ambient-low** (`0 2px 8px rgba(122, 48, 72, .12)`): Product cards em repouso. Único shadow permitido em rest state.
- **ambient-mid** (`0 6px 20px rgba(122, 48, 72, .18)`): About-cards, FAQ open state em hover. Resposta a interação.
- **ambient-high** (`0 8px 24px rgba(122, 48, 72, .22)`): Product cards em hover. Elevação confirmada.
- **cta-glow** (`0 8px 24px rgba(122, 48, 72, .28)`): Botão primário em repouso. CTA shadow intencional.

### Named Rules
**The Ghost-Card Ban.** Nunca usar `border` + `box-shadow blur ≥ 16px` no mesmo elemento ao mesmo tempo. Escolha um: uma borda sólida na cor da marca, OU uma sombra com blur ≤ 8px.

**The Flat-at-Rest Rule.** About-cards e testimonial cards são planos ao repouso (border only). Sombra aparece apenas em `:hover`.

## 5. Components

### Buttons
- **Shape:** Pill — `border-radius: 99px`. Mantido em todos os botões sem exceção.
- **Primary:** Gradiente `rose → wine` como background, branco puro como texto. Padding `0.85rem 1.8rem`, min-height 44px (WCAG 2.5.5). Shimmer sutil animado (gloss de 5s).
- **Hover / Focus:** `translateY(-2px)` + sombra `cta-glow` amplificada. Transição 0.3s.
- **Outline:** Borda `1.5px rose-deep` + fundo `rgba(255,255,255,0.6)`. Hover: inverte para rose sólido.

### Chips / Filter Pills
- **Style:** Fundo branco, borda `1.5px rgba(200,115,138,.25)`, texto ink-mid. Raio pill.
- **Active:** Fundo wine-dark, texto branco, sem borda visível.
- **Min-height:** 44px (touch target WCAG).

### Cards / Containers
- **Corner Style:** Suavemente arredondadas — 0.85rem (13.6px) para product cards; 0.6rem para about-cards e FAQ items.
- **Background:** Branco puro `#fff`.
- **Shadow Strategy:** Ambient-low ao repouso apenas em product cards. About-cards e testimonials: border-only ao repouso, shadow em hover.
- **Border:** `1px solid rgba(200,115,138,.18–.20)` para todos os cards. Nunca opacidade > 0.35 ao repouso.
- **Internal Padding:** Product card info: `1.1rem 1.2rem 1.2rem`. Testimonial: `1.8rem`. About-card: `1.2rem 1.4rem`.

### Section Labels
- **Style:** Inline-flex com linha fina `28px` de `rose-light` à esquerda via `::before`. Texto em Cormorant Garamond italic, `0.92rem`, `color: rose`. Sem pill, sem border, sem background.
- **Purpose:** Kicker editorial de seção — one per section, não repetir o estilo em sub-elementos.

### Navigation
- **Style:** Fixed top, `backdrop-filter: blur(16px)`, background `rgba(249,242,245,.92)`. Transição de shadow ao scroll.
- **Links:** Jost 500, `0.8rem`, uppercase, letter-spacing `0.09em`, `color: ink-mid`. Hover: `rose-deep`.
- **CTA:** Botão pill rose com texto branco.
- **Mobile:** Menu fullscreen `wine-dark` com links em Cormorant Garamond italic `2rem`.

### Announcement Bar (Signature)
- Barra fixa topo, height 34px, gradiente `wine-dark → wine → wine-dark`. Marquee animado 40s. Texto Jost uppercase `0.65rem` letter-spacing `0.14em`.

### FAQ Accordion
- Border `1px solid rgba(200,115,138,.15)` ao repouso. Open state: border-color `rgba(200,115,138,.32)` + background tint `rgba(252,233,240,.18)`. Ícone circulo rose que gira 180° ao abrir. Sem side-stripe.

## 6. Do's and Don'ts

### Do:
- **Do** usar Cormorant Garamond italic em títulos de seção com `<em>` no último grupo de palavras — é a assinatura tipográfica da marca.
- **Do** manter o letter-spacing de display entre -0.01em e -0.02em. Nunca abaixo de -0.04em.
- **Do** usar `text-wrap: balance` em h1-h3 para evitar orphans em headings.
- **Do** escolher entre borda OU sombra em cards — nunca os dois ao mesmo tempo como decoração.
- **Do** manter superfícies de body em `#f9f2f5` (rose-tinted) — nunca retornar ao creme/areia quente.
- **Do** usar min-height 44px em todos os elementos interativos (botões, filtros, FAQ questions).
- **Do** respeitar `prefers-reduced-motion` — todas as animações têm alternativa de opacity/instant.
- **Do** aplicar `focus-visible` com outline `2px solid rose` em todos os elementos focáveis.

### Don't:
- **Don't** usar `border-left` ou `border-right` > 1px como sotaque colorido em cards, callouts ou FAQ open state. Proibido. Usar background tint ou borda completa.
- **Don't** usar `background-clip: text` com gradiente. Gradient text é decorativo e proibido.
- **Don't** usar `feTurbulence` / `feDisplacementMap` como grain/textura de papel. Proibido.
- **Don't** fazer `border: 1px solid X` + `box-shadow blur ≥ 16px` no mesmo elemento (ghost-card). Proibido.
- **Don't** usar `border-radius > 16px` em cards e containers de conteúdo. Máximo: 0.85rem (13.6px).
- **Don't** repetir a pill de eyebrow uppercase em toda seção. Section labels são italic serif com linha — não pill.
- **Don't** usar fundo creme/areia quente (`oklch L > 0.84, C < 0.06, hue 40-100`) como cor de body. É o default AI de 2026.
- **Don't** parecer Shopee, Mercado Livre, Riachuelo ou C&A — sem badge de desconto vermelho, sem multi-column caótico, sem linguagem de campanha de rede.
- **Don't** parecer SaaS clínico — sem branco acinzentado frio, sem sans-serif técnica como fonte primária, sem cards com sombra flat de software.
- **Don't** usar `repeating-linear-gradient(...)` como fundo de seções. Proibido.
- **Don't** usar ilustrações SVG "sketch" / doodle para representar objetos físicos. Sem produto se não há asset real.
