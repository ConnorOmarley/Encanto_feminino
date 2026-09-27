# Encanto Feminino — landing page de catálogo (v1)

Landing page de conversão para uma marca artesanal de lingeries, pijamas e sabonetes sob encomenda. **Zero dependências, zero build:** HTML, CSS e JavaScript puros. O site existe para uma única razão — transformar visitantes em conversas de WhatsApp.

> **Case real**, entregue a uma cliente (identidade e dados de contato substituídos por dados fictícios neste repositório). Nenhum dado de cliente, telefone, perfil de rede social ou foto de produto está versionado aqui — ver [Dados fictícios](#dados-fictícios).

---

## O que tem aqui

| | |
|---|---|
| **Stack** | HTML5 + CSS3 + JavaScript vanilla |
| **Dependências** | nenhuma — sem `package.json`, sem framework, sem bundler |
| **Rodar** | abrir `encanto-feminino-site/index.html` no navegador |
| **Backend** | não tem (v1) |
| **Hospedagem** | qualquer host estático (a pasta `encanto-feminino-site/` é o site inteiro) |

### Funcionalidades

- Vitrine de catálogo com 12 produtos, **filtro por categoria** (pijama, lingerie, calcinha, sabonete)
- Cards com preço, unidade de venda, badge de disponibilidade, tamanhos e cores
- CTA "Solicitar pelo WhatsApp" com **mensagem pré-preenchida por produto e variante**
- FAQ em `<details>`, seção "Como funciona" em 5 passos, grid de Instagram
- Animações de entrada com `IntersectionObserver`, `prefers-reduced-motion` respeitado
- Responsivo, com menu hambúrguer e retorno de foco nos modais

---

## Segurança

O ponto mais interessante deste projeto não é o design — é o endurecimento:

- **XSS corrigido.** Toda interpolação que passa por `innerHTML` (nomes, descrições, URLs, chips de tamanho e cor) é filtrada por `escapeHtml()` antes de ser injetada no DOM. Commit `7633ef4`.
- **CSP declarada** via `<meta http-equiv>`, com `img-src` restrito a `self`, `data:`, `blob:` e à origem do host de imagens.
- `X-Content-Type-Options: nosniff` e `Referrer-Policy: strict-origin-when-cross-origin`.
- Links externos com `rel="noopener noreferrer"`.

> **Limitação honesta:** CSP declarada em `<meta>` tem efeito parcial (não cobre `frame-ancestors`, e `'unsafe-inline'` é necessário porque o site usa `onclick` inline). Quem hospedar deve repetir os headers no servidor. A origem `i.ibb.co` foi removida da lista porque o projeto não usa mais imagens hotlinked de terceiros.

---

## Dados fictícios

O repositório é público, então **todos os dados de cliente foram substituídos**:

| Dado | Nesta versão |
|---|---|
| WhatsApp | `5511999999999` (placeholder) |
| Instagram | `encantofeminino.demo` |
| Fotos de produto | banco de imagens genérico (Pexels) |
| Logo | SVG local (`assets/logo.svg`) |
| Localização da marca | removida |

Os nomes, descrições e preços dos produtos são fictícios e servem só para demonstrar o catálogo.

---

## O que ficou por fazer (e por quê)

O painel administrativo existe no HTML e no JS, mas está **comentado de propósito**:

```js
// IMPLEMENTAÇÃO FUTURA: PAINEL ADMIN
```

O motivo está no próprio código: `localStorage` não sincroniza entre dispositivos, então um painel baseado nele daria a impressão de uma gestão que não existe. A solução correta era um backend com persistência real — que é exatamente o que foi construído na [v2 deste projeto](https://github.com/ConnorOmarley/boutique-chat-chic) (React + TanStack Start + Supabase com RLS).

Outros pontos conhecidos: o passo a passo "Como funciona" usa um grid de números `01–05` em vez de ícones, e o catálogo é estático (12 itens em `script.js`, sem paginação).

**Este repositório é a v1 e está superado pela v2.** Ele permanece público porque mostra o processo: a decisão de não entregar um painel falso, e o passo seguinte de construir a versão com backend de verdade.

---

## Estrutura

```
encanto-feminino-site/
├── index.html      # página completa (591 linhas)
├── style.css       # design system em custom properties
├── script.js       # catálogo, filtros, FAQ, WhatsApp, escapeHtml
├── assets/
│   └── logo.svg    # marca fictícia
├── PRODUCT.md      # público-alvo, tom de voz, métrica de conversão
├── DESIGN.md       # tokens de design (paleta, tipografia, espaçamento)
└── .hintrc         # config do webhint
```

`PRODUCT.md` e `DESIGN.md` documentam as decisões de produto e de design **antes** do código — a referência usada para revisar o HTML depois de pronto.

---

## Licença

MIT
