---
target: encanto-feminino-site/index.html
total_score: 23
p0_count: 0
p1_count: 1
p2_count: 3
timestamp: 2026-06-12T14-27-55Z
slug: encanto-feminino-site-index-html
---
### Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Filter/FAQ states clear; zero feedback for the primary conversion action (WhatsApp click exits the page silently) |
| 2 | Match Between System / Real World | 3 | Natural Portuguese, domain-appropriate language, recognizable icons |
| 3 | User Control and Freedom | 2 | No scroll-to-top, no active filter label, mobile menu close requires finding ✕ |
| 4 | Consistency and Standards | 2 | Font system split (Playfair Display base + Cormorant Garamond override); Instagram section-label shows @handle, not editorial italic; inline style= mixed with classes |
| 5 | Error Prevention | 3 | Pre-filled WhatsApp messages prevent blank contacts; no destructive user actions on public page |
| 6 | Recognition Rather Than Recall | 3 | Filter buttons visible and labeled; all CTAs have text; FAQ questions fully visible |
| 7 | Flexibility and Efficiency | 1 | Single rigid path; no keyboard navigation, skip links, or scroll shortcuts |
| 8 | Aesthetic and Minimalist Design | 2 | Instagram section occupies large viewport with emoji-gradient placeholders; hero stacks 7 elements |
| 9 | Error Recovery | 2 | No forms to recover from; WhatsApp external. N/A for most flows |
| 10 | Help and Documentation | 3 | FAQ and "Como Funciona" are prominent and well-organized |
| **Total** | | **23/40** | **Acceptable** |

### Anti-Patterns Verdict

LLM assessment: No longer a slam-dunk "yes" — the previous work removed the loudest tells (grain texture, generic cream background, pill eyebrow labels on every section, ghost-cards). What remains is subtler: the step-number circles (01–05) in Como Funciona are the most visible remaining AI scaffold. The hero badge is a single pill but sits in the exact eyebrow slot. The palette and editorial italic signature read as intentional.

Deterministic scan — 3 findings:
1. broken-image (line 551): admin panel image preview with no src. FALSE POSITIVE — JS-populated, not user-facing.
2. single-font ("only cormorant garamond"): PARTIALLY VALID, MISDIAGNOSED. Real issue: base --font-serif = 'Playfair Display' used on nav-logo, about-card-title, prod-name, footer. Late "LUXURY EDITORIAL UPGRADE" block adds --font-display = 'Cormorant Garamond' and overrides headings, prices, testimonials. Two competing serifs rendering simultaneously.
3. numbered-section-markers (01–05): REAL FINDING. "Como Funciona" step circles are the banned AI scaffold pattern.

Browser visualization: not available this session.

### Overall Impression

The site has shed most AI-generation tells. The rose-tinted surface, editorial italic signatures, and ghost-card cleanup are working. The biggest remaining gap is structural — the "Como Funciona" section is a textbook AI scaffold (numbered circles, 5-column grid, short generic labels), and the Instagram section is a placeholder masquerading as content. Fix those two and this site reads as genuinely editorial.

### What's Working

1. The italic em signature in section titles creates consistent rhythmic identity that a human would design.
2. Product card elevation is now clean — shadow-only at rest, larger shadow on hover, no ghost-card.
3. FAQ component — animated icon, clean accordion, pre-filled WhatsApp messages.

### Priority Issues

[P1] Font system is fragmented — Playfair Display still dominates the base layer
- Base :root has --font-serif: 'Playfair Display'. Late CSS block adds --font-display: 'Cormorant Garamond'. nav-logo, about-card-title, prod-name, foot-brand-name, foot-col h4 still render Playfair.
- Fix: Change --font-serif to 'Cormorant Garamond' in :root. Remove Playfair Display from Google Fonts URL. Consolidate --font-serif and --font-display into one variable.
- Command: $impeccable typeset

[P2] "Como Funciona" step numbers are AI scaffold
- 5 numbered circles (01-05) with rose-wine gradient, 5-column grid, connector line. Classic AI "how it works" pattern.
- Fix: Replace gradient circles with large Cormorant Garamond italic numerals at ~4rem in rose-light, no background circles.
- Command: $impeccable layout

[P2] Instagram section has no real content
- 6 emoji gradient cells: soap, flower, rose, tulip, hearts, sparkle. Zero real product photos.
- Fix: Add real product photos or remove section until content is available.
- Command: $impeccable polish

[P2] Hero eyebrow badge is the banned pill pattern
- .hero-badge above the logo/h1 is a small uppercase pill — the exact banned eyebrow pattern.
- Fix: Remove. Hero copy already communicates the same sentiment.
- Command: $impeccable distill

[P3] FAQ open-state violates Ghost-Card Ban
- .faq-item.open has border + box-shadow 0 6px 22px (22px > 16px threshold).
- Fix: Cap shadow to blur ≤ 8px when open, or remove border change and use background tint only.
- Command: $impeccable polish

### Persona Red Flags

Jordan (First-Timer): "Encanto Feminino M" reads as typo in nav/title. "Sob encomenda" badge on products has no explanation at point of first contact. No price anchor in hero before entering catalog.

Casey (Mobile User): Catalog filter buttons likely under 44px touch target height (.48rem padding at .8rem font). Instagram grid cells render very small on mobile (emoji in ~110px cells).

Valentina (Mobile WhatsApp buyer, project-specific): Instagram section with emoji placeholders is a direct trust signal failure. Catalog uses external ibb.co image hosting with no fallback. No real @username social proof.

### Minor Observations

- "Encanto Feminino M" with trailing M appears in title, og:title, nav logo text, and admin panel — typo or intentional suffix?
- hero-logo-img has loading="lazy" but is above-the-fold — delays LCP.
- Step connector line (steps-grid::before) makes no visual sense on stacked mobile layout.
- Footer copyright hardcoded as 2025.
