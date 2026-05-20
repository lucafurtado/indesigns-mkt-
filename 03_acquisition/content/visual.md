# Direção Visual — Instagram
## Indesigns · Sistema Completo de Design

> Documento único com todo o sistema visual para criação de posts, carrosseis e feed.
> Fusão de: `design_posts.md` + `design_carrossel.md` + `design_feed.md`
> Paleta corrigida após análise do Manual de Identidade Visual 2024 — ver `01_brand/identity.md`.

---

## PARTE 1 — SISTEMA DE DESIGN UNIVERSAL

> Base que se aplica a todos os formatos: posts, carrosseis, stories.

### Formato e Grid

```
Dimensão padrão:  1080 × 1080 px
Margem interna:   48px (todos os lados)
Coluna de texto:  80% da largura máxima
Resolução:        72 dpi (Instagram) / exportar em 2× para qualidade
```

### Escala Tipográfica

| Elemento                   | Fonte                  | Tamanho | Cor      | Tracking           |
|----------------------------|------------------------|---------|----------|--------------------|
| Headline principal         | KyivType Sans Medium3  | 52–64px | #173a4a  | -0.02em            |
| Headline em fundo escuro   | KyivType Sans          | 52–64px | #ececea  | -0.02em            |
| Subtítulo                  | Sweet Sans Pro Light   | 18–22px | #3c6e71  | +0.04em            |
| Label / categoria          | Sweet Sans Pro         | 10–11px | #3c6e71  | +0.12em VERSALETE  |
| Corpo                      | Montserrat Regular     | 15–17px | #173a4a  | 0                  |
| Corpo em fundo escuro      | Montserrat             | 15–17px | #8ab0ab  | 0                  |

### Paleta de Aplicação

```
#ececea  —  Fundo base (off-white linho) — predomina em 70% dos posts
#173a4a  —  Fundo de posts de texto e autoridade / texto principal
#3c6e71  —  Linhas de acento, labels, sublinhados, elementos de destaque
#8ab0ab  —  Corpo de texto sobre fundo escuro, divisores leves
#d1d3c4  —  Linhas divisórias finas, áreas de suporte
```

### Ritmo Cromático — Regra do Feed

```
Post de imagem  ── Post de texto  ── Post de processo
Post de detalhe ── Post de portrait ── Post de imagem
Post de texto   ── Post de detalhe ── Post de processo
```

O feed alterna: imagem dominante → texto petróleo → editorial split.
Nunca dois posts de texto escuro seguidos. Nunca três imagens seguidas.

---

## PARTE 2 — CONCEITOS DE POSTS

> Cinco tipos autônomos. Cada conceito é executável — não uma descrição, uma instrução de design.

---

### CONCEITO 01 — PROJETO EM DESTAQUE
**"A Cobertura que Virou o Coração do Condomínio"**

**Objetivo:** Apresentar o projeto mais impactante com autoridade editorial.
**Sensação:** *"Esse nível de trabalho existe em Brasília? Ela fez isso?"*
**Pilar:** Projeto (40%) | **Tipo:** Imagem de projeto + legenda narrativa

#### Layout

```
  1080px
┌─────────────────────────────────────────────────┐
│                                                 │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓▓▓                                       ▓▓▓  │
│  ▓▓▓   FOTOGRAFIA DO PROJETO               ▓▓▓  │
│  ▓▓▓   full bleed — sem margens            ▓▓▓  │  ← 72% da altura total
│  ▓▓▓   cobertura 116 sul                   ▓▓▓  │
│  ▓▓▓   academia + vista aeroporto          ▓▓▓  │
│  ▓▓▓                                       ▓▓▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│                                                 │  ← 8px respiração
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─  │  ← 1px / #d1d3c4
│                                                 │  ← 16px respiração
│  Cobertura 116 Sul                              │  ← KyivType / 36px / #173a4a
│                                                 │  ← 8px
│  ÁREA COLETIVA  ·  ASA SUL, BRASÍLIA           │  ← Sweet Sans / 10px / #3c6e71
│                                                 │  ← 24px
└─────────────────────────────────────────────────┘
  Background geral: #ececea
```

#### Especificações

```
Canvas:           1080 × 1080px / #ececea
Imagem:           100% largura × 777px altura (72%)
                  Sem bordas, sem padding, sem arredondamento
                  Topo: encostado na borda superior do canvas
Linha divisória:  1px espessura / #d1d3c4 / 100% largura
                  Posição: 777px + 8px = 785px do topo
Headline:         KyivType Sans Medium3 / 36px / #173a4a
                  Posição: 810px do topo / margem esquerda: 48px / tracking: -0.01em
Label:            Sweet Sans Pro Regular / 10px / #3c6e71
                  Posição: 858px do topo / margem esquerda: 48px
                  Tracking: +0.12em / VERSALETE
```

#### Direção Fotográfica

Wide angle — mostrar a escala do espaço inteiro. Academia em primeiro plano, janelas panorâmicas ao fundo revelando a cidade abaixo. Linhas horizontais limpas, piso neutro, teto concreto.

**Luz:** Fim de tarde — luz azul-prata lateral. Sem flash. O contraluz da cidade visível ao fundo cria profundidade.

**Grading:** Boost leve nos meios-tons azuis e teal. Reduzir amber nos highlights. Film grain sutil (ISO 400–800).

#### Prompt IA

```
Rooftop collective renovation space, Brasília Brazil, completed architectural project,

SPACE: open gym and gourmet area combined, large floor-to-ceiling windows on far wall
revealing Brasília city below with airport visible in distance,
wood slat wall detail on left side, concrete ceiling, neutral light stone floor,
minimal gym equipment (treadmill, weights rack) in background — not focal point,

LIGHT: cool blue-silver late afternoon light through windows,
NOT golden hour — more blue-steel quality,
city visible through glass creates backlit depth,
no artificial gym lighting, natural ambient only,

COMPOSITION: wide angle architectural shot, strong horizontal lines,
rule of thirds — empty floor in foreground, equipment middle, city-view windows far,
generous headroom, no people,

COLOR GRADE: boost blue-teal mid-tones, reduce warm amber,
palette: concrete #d1d3c4 floor, teal #3c6e71 accents, deep navy #173a4a shadows,
off-white #ececea ceiling panels if visible, subtle film grain,

STYLE: editorial architecture photography — not real estate, not gym catalog,
Domus magazine quality, Leica M equivalent camera aesthetic,
photorealistic, 1:1 square crop, no text, no watermarks
```

---

### CONCEITO 02 — MANIFESTO EM TIPOGRAFIA
**"A Frase que Para o Scroll"**

**Objetivo:** Construir autoridade de marca através de ponto de vista — não de imagem.
**Sensação:** *"Ela pensa diferente. Quero saber mais sobre esse trabalho."*
**Pilar:** Autoridade (15%) | **Tipo:** Text-only — tipografia como design, fundo petróleo total

#### Layout

```
  1080px
┌─────────────────────────────────────────────────┐
│█████████████████████████████████████████████████│  ← fundo #173a4a (petróleo total)
│█                                               █│  ← 200px respiração superior
│█   ARQUITETURA                                 █│  ← KyivType / 64px / #ececea
│█   NÃO É                                       █│  ← line-height: 1.05
│█   DECORAÇÃO.                                  █│  ← tracking: -0.02em
│█                                               █│
│█   ────────────────                            █│  ← 120px / 1.5px / #3c6e71
│█                                               █│  ← 28px respiração
│█   É a linguagem mais honesta                  █│  ← Montserrat / 16px / #8ab0ab
│█   que existe para dizer                       █│  ← line-height: 1.65
│█   quem você é.                                █│
│█                                               █│  ← 80px respiração inferior
│█                             INDESIGNS         █│  ← Sweet Sans / 10px / #3c6e71
│█████████████████████████████████████████████████│     tracking: +0.16em
└─────────────────────────────────────────────────┘
```

#### Especificações

```
Canvas:        1080 × 1080px / #173a4a (campo inteiro)
Margem:        64px todos os lados
Headline:      KyivType Sans Medium3 / 64px / #ececea
               Posição: 220px do topo / x: 64px
               Line-height: 1.05 / Tracking: -0.02em
Linha acento:  120px largura / 1.5px / #3c6e71
               28px abaixo da última linha do headline / x: 64px
Corpo:         Montserrat Regular / 16px / #8ab0ab
               28px abaixo da linha / line-height: 1.65
Assinatura:    Sweet Sans Pro / 10px / #3c6e71
               24px acima da borda inferior / alinhado à direita
               Tracking: +0.16em / Texto: INDESIGNS
```

#### Variações de Copy

```
Versão A — Manifesto:
ARQUITETURA / NÃO É / DECORAÇÃO.

Versão B — Provocação:
O ESPAÇO / ONDE VOCÊ VIVE / DIZ QUEM VOCÊ É.

Versão C — Processo:
ANTES DE / QUALQUER LINHA, / UMA ESCUTA.

Versão D — Posicionamento:
NÃO PROJETO / PARA O MERCADO. / PROJETO PARA VOCÊ.
```

*Regra: uma ideia, três linhas, impacto total. Nunca quatro linhas. Nunca frase completa.*

#### Elemento Gráfico Opcional — Textura de Fundo

Padrão gráfico da marca (grid modular do manual) em 6% opacidade / #3c6e71 sobre #173a4a.
Efeito: textura quase invisível — percebida inconscientemente, não conscientemente.

```
Prompt da textura:
Abstract architectural geometric modular grid pattern,
Brasília urban layout aerial view abstracted to geometry,
deep navy #173a4a background, subtle teal #3c6e71 lines,
very low opacity (6–10%) — texture not object,
no recognizable forms, pure repetitive geometry,
Oscar Niemeyer / Lucio Costa urban grid language,
vector aesthetic, ultra-minimal, seamless tile pattern,
no text, no numbers, no photographic elements
```

---

### CONCEITO 03 — EDITORIAL SPLIT
**"O Bastidor Inteligente"**

**Objetivo:** Revelar o método sem revelar o segredo — processo como autoridade.
**Sensação:** *"Existe rigor aqui. Não é improviso. Eu confiaria nesse processo."*
**Pilar:** Processo (25%) | **Tipo:** Layout dois painéis — fotografia à esquerda, texto à direita

#### Layout

```
  1080px
┌─────────────────────────────────────────────────┐
│                                                 │  ← #ececea background
│  ┌──────────────────┐  ┌───────────────────┐   │
│  │                  │  │                   │   │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓  │  │  ANTES DE         │   │  ← KyivType / 30px / #173a4a
│  │  ▓▓ FOTO ▓▓▓▓  │  │  QUALQUER         │   │  ← line-height: 1.1
│  │  ▓▓ close ▓▓▓  │  │  LINHA.           │   │
│  │  ▓▓ up de ▓▓▓  │  │                   │   │
│  │  ▓▓ mãos  ▓▓▓  │  │  ─────────        │   │  ← 56px / 1px / #3c6e71
│  │  ▓▓ ou    ▓▓▓  │  │                   │   │
│  │  ▓▓ planta▓▓▓  │  │  Existe uma       │   │  ← Montserrat / 13px / #173a4a
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓  │  │  conversa.        │   │  ← line-height: 1.6
│  │  45% largura     │  │  Uma escuta.      │   │
│  └──────────────────┘  └───────────────────┘   │
│  ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─   │  ← 1px / #d1d3c4
│  PROCESSO  ·  INDESIGNS                        │  ← Sweet Sans / 10px / #8ab0ab
└─────────────────────────────────────────────────┘
```

#### Especificações

```
Canvas:          1080 × 1080px / #ececea
Coluna esq:      468px largura × 900px altura (margem: 48px)
                 Imagem: sem bordas, sem arredondamento
                 Toca o topo do canvas (sem margem superior)
Gutter:          48px entre colunas
Coluna dir:      516px largura / centrada verticalmente
Headline:        KyivType Sans Medium3 / 30px / #173a4a
                 Line-height: 1.1 / Tracking: -0.01em
Linha acento:    56px largura / 1px / #3c6e71 / 20px após headline
Corpo:           Montserrat Regular / 13px / #173a4a
                 Line-height: 1.65 / 16px após linha
Footer label:    Sweet Sans Pro / 10px / #8ab0ab
                 Tracking: +0.10em / 20px acima da borda inferior
```

#### Direção Fotográfica — Coluna Esquerda

**Opção A — As Mãos:** Close-up de mãos sobre planta baixa impressa. Linhas precisas, não esboço. Luz de janela lateral da esquerda. Mãos sem anel, unhas naturais.

**Opção B — O Monitor:** Tela com render em desenvolvimento (sem revelar projeto). Apenas tela + parte do teclado/mesa. Ambiente off-white, elementos navy desfocados. Luz fria de tela + luz ambiente fria.

**Opção C — As Amostras:** Flat lay de amostras de material em greige, teal, petróleo. Sobre superfície #ececea. Com esquadro ou lápis técnico. Luz de cima, difusa.

#### Prompt IA

```
Close-up architectural work scene, interior of minimal Brasília studio,

SUBJECT (Opção A — mãos):
Architect's hands reviewing large format floor plan architectural drawing,
hands in frame — no face visible, sharp focus on hands and paper,
technical drawing with precise lines (not a sketch) — plan view of a room,

ENVIRONMENT:
Off-white #ececea desk surface, deep navy #173a4a architectural elements out of focus,
one material sample chip in teal #3c6e71 visible at edge,
minimal studio aesthetic — nothing decorative,

LIGHT:
Cool indirect window light from left — overcast quality,
no warm tones, no fill flash, slightly underexposed shadow on right side,

COMPOSITION:
Vertical crop — will fill left 45% of 1:1 square,
strong graphic composition, hands positioned in upper third,
paper fills most of frame, architectural detail legible but not the main subject,

STYLE:
Documentary photography — Domus magazine quality,
Leica M film aesthetic, cool color science,
subtle film grain, no artificial staging,
no text visible on drawings, no warm color tones
```

---

### CONCEITO 04 — DETALHE MINERAL
**"O Teal, o Concreto, a Precisão"**

**Objetivo:** Criar desejo pela estética da marca através do detalhe material.
**Sensação:** *"Eu quero esse azul na minha vida. Essa textura. Essa precisão."*
**Pilar:** Desejo Mineral | **Tipo:** Macro fotografia — composição quase abstrata

#### Layout

```
  1080px
┌─────────────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓▓▓                                       ▓▓▓  │
│  ▓▓▓   MACRO DETALHE ARQUITETÔNICO         ▓▓▓  │  ← 85% da altura
│  ▓▓▓   Madeira × Concreto × Teal          ▓▓▓  │
│  ▓▓▓   Luz rasante lateral                ▓▓▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│                                                 │  ← 12px respiração
│           MADEIRA  ·  CONCRETO  ·  TEAL        │  ← Sweet Sans / 10px / #3c6e71
└─────────────────────────────────────────────────┘     centralizado / tracking +0.16em
  Background: #ececea
```

#### Especificações

```
Canvas:    1080 × 1080px / #ececea
Imagem:    100% largura × 918px altura (85%)
           Toca bordas: superior, esquerda, direita (full bleed horizontal)
Label:     Sweet Sans Pro Regular / 10px / #3c6e71
           Posição: 942px do topo (centralizado)
           Tracking: +0.16em / Texto: MADEIRA  ·  CONCRETO  ·  TEAL
```

#### Direção de Arte — O Detalhe

**Opção A — Ripa + Concreto:** Extremo close-up onde ripa encontra concreto. Luz rasante revelando textura. Concreto: #d1d3c4. Madeira: desaturada — não quente, não viva. A sombra da ripa sobre o concreto é o elemento principal.

**Opção B — Azulejo Teal:** Detalhe de revestimento geométrico em teal (#3c6e71 ou próximo). Precisão do encaixe — a junta é o elemento de interesse. Luz rasante revelando tridimensionalidade.

**Opção C — Cantaria / Pedra:** Corte preciso em pedra clara (mármore ou quartzito). Fio de veia diagonal atravessando o enquadramento. Sem elementos decorativos — só a pedra.

#### Prompt IA

```
Extreme close-up architectural material detail photography,

SUBJECT: wood slat meeting raw concrete wall — the junction point is the subject,
wood is desaturated dark warm tone (not orange-warm), concrete is #d1d3c4 grey,
teal #3c6e71 or #8ab0ab surface partially visible behind or below,

LIGHT: harsh directional raking light from left or above,
strong shadow revealing texture depth — NOT soft diffuse light,
highlights: off-white #ececea, shadows: deep navy #173a4a,
no fill light — pure contrast between texture and shadow,

DEPTH OF FIELD: extremely shallow — sharpest at contact point between materials,
foreground blurred, background blurred, only the junction in focus,

COMPOSITION: geometric — line of contact divides frame roughly in half,
diagonal possible but controlled, not random,

COLOR GRADE: cool-mineral, remove any warmth from wood,
teal accents preserved and enhanced, concrete grey kept neutral,

STYLE: luxury material photography — not architecture lifestyle,
macro lens (100mm equivalent), medium format film aesthetic,
subtle grain, ultra-precise, no text, no people, no decorative elements
```

---

### CONCEITO 05 — PORTRAIT EDITORIAL
**"Indira de Brasília"**

**Objetivo:** Humanizar a marca com presença — não proximidade, mas autoridade.
**Sensação:** *"Essa é uma profissional em que eu confiaria com o meu espaço."*
**Pilar:** Indira de Brasília (10%) | **Tipo:** Editorial portrait — fotografia como brand statement

#### Layout

```
  1080px
┌─────────────────────────────────────────────────┐
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓▓▓                                       ▓▓▓  │
│  ▓▓▓   PORTRAIT EDITORIAL                  ▓▓▓  │
│  ▓▓▓   Indira em contexto profissional     ▓▓▓  │  ← 80% da altura
│  ▓▓▓   Composição 2/3 de corpo             ▓▓▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│                                                 │  ← 16px respiração
│  Indira Bonfim                                  │  ← KyivType / 24px / #173a4a
│  ARQUITETA · BRASÍLIA                          │  ← Sweet Sans / 10px / #3c6e71
└─────────────────────────────────────────────────┘
  Background: #ececea
```

#### Especificações

```
Canvas:    1080 × 1080px / #ececea
Imagem:    100% largura × 864px altura (80%) — full bleed superior e lateral
Nome:      KyivType Sans Medium3 / 24px / #173a4a
           Posição: 888px do topo / x: 48px / Tracking: -0.01em
Label:     Sweet Sans Pro / 10px / #3c6e71
           Posição: 916px do topo / x: 48px / Tracking: +0.12em / VERSALETE
```

#### Direção de Arte

**Enquadramento:** 3/4 de corpo com contexto do espaço visível, ou figura inteira menor no frame, ou meio busto com fundo desfocado presente.

**Olhar:** Direto à câmera (presença, não submissão) ou 45° (pensativa, não distante). Nunca sorriso aberto de marketing.

**Vestuário:** Navy (#173a4a aproximado) ou off-white (#ececea aproximado). Peça sólida — sem estampas, sem logos. Corte limpo, contemporâneo.

**Ambiente:** Escritório minimal: plantas baixas na parede, amostras em teal e greige, modelo arquitetônico visível. Elementos da marca sem esforço.

**Luz:** Janela lateral — luz direcional fria. Lado iluminado nítido, sombra visível mas não pesada. Sem flash frontal, sem luz artificial quente.

**O que evitar:**
```
✗ Sorriso aberto de marketing / foto de perfil de LinkedIn
✗ Braços cruzados rígidos (clichê de autoridade)
✗ Fundo desfocado bege genérico de estúdio
✗ Luz quente de lifestyle (golden hour interior)
✗ Filtro Instagram visível
✗ Roupas com logos ou estampas
✗ Postura forçada / poses de catálogo
```

#### Prompt IA

```
Editorial portrait young Brazilian woman architect, late 20s,

SETTING: minimal studio environment in Brasília,
background: slightly out of focus — architectural blueprints pinned to wall,
material samples in teal and greige visible on desk edge,
one scale architectural model partially visible,

CLOTHING: deep navy blue (close to #173a4a) or off-white solid top,
clean contemporary cut — no patterns, no logos, no jewelry except minimal,

POSTURE: natural, composed — not rigid, not casual,
seated at desk looking up at camera, or standing beside drawing surface,

EXPRESSION: direct eye contact — confident, thoughtful, present,
NOT smiling broadly, NOT stern — human intelligence without performance,

LIGHT: cool indirect natural window light from left side,
overcast window quality — not golden hour, not harsh flash,
highlight on face: off-white cool (#ececea tone),
shadow side: visible, controlled, adds dimension,

COLOR GRADE: cool-neutral, consistent with brand palette,
cool blue-teal in highlights, deep navy shadows,
film grain (ISO 400 equivalent), subtle,

STYLE: Domus / Wallpaper magazine portrait photography,
editorial authority — NOT corporate headshot, NOT Instagram lifestyle,
photorealistic, 1:1 crop, no text, no overlays
```

---

## PARTE 3 — CARROSSEL PREMIUM

> Conceito para o carrossel âncora do perfil. Replicável para temas futuros.

### "O Projeto que Virou o Coração do Condomínio"
**Objetivo:** Contar a história da Cobertura 116 Sul em formato imersivo.
**Sensação:** Curiosidade → Reconhecimento → Admiração → Desejo.
**Pilar:** Projetos + Processo | **Formato:** 1080 × 1080px, 6 slides

---

### SLIDE 01 — CAPA

```
  1080px
┌─────────────────────────────────────────────────┐
│█████████████████████████████████████████████████│  ← fundo #173a4a (petróleo total)
│█                                               █│  ← 240px respiração superior
│█   Uma cobertura                               █│  ← KyivType / 52px / #ececea
│█   subutilizada                                █│  ← line-height: 1.08
│█   por anos.                                   █│
│█                                               █│  ← 32px
│█   ────────────                                █│  ← 80px / 1.5px / #3c6e71
│█                                               █│  ← 24px
│█   E o que aconteceu depois.                   █│  ← Montserrat / 17px / #8ab0ab
│█                                               █│  ← 100px respiração inferior
│█   COBERTURA 116 SUL  ·  ASA SUL  ·  BRASÍLIA █│  ← Sweet Sans / 10px / #3c6e71
│█████████████████████████████████████████████████│
└─────────────────────────────────────────────────┘
  Seta de arraste: canto inferior direito (ícone minimalista →)
```

**Objetivo:** Criar curiosidade. "Subutilizada por anos" é o gancho.

---

### SLIDE 02 — O PROBLEMA

```
  1080px
┌─────────────────────────────────────────────────┐
│                                                 │  ← #ececea background
│  ┌───────────────────────────────────────────┐  │
│  │  FOTO "ANTES"                             │  │  ← 55% da altura
│  │  espaço vazio/subutilizado                │  │
│  └───────────────────────────────────────────┘  │
│                                                 │  ← 24px
│  01                                             │  ← Sweet Sans / 11px / #3c6e71
│  O PROBLEMA                                     │  ← tracking +0.14em / VERSALETE
│                                                 │  ← 16px
│  Trinta famílias.                               │  ← KyivType / 28px / #173a4a
│  Gostos completamente diferentes.               │  ← line-height: 1.15
│  Um espaço que ninguém usava.                   │
└─────────────────────────────────────────────────┘
```

**Objetivo:** Estabelecer o contexto. O leitor deve se identificar. Tom: factual, preciso.

---

### SLIDE 03 — O DESAFIO

```
  1080px
┌─────────────────────────────────────────────────┐
│█████████████████████████████████████████████████│  ← #173a4a background
│█   02                                          █│  ← Sweet Sans / 11px / #3c6e71
│█   O DESAFIO                                   █│  ← VERSALETE
│█                                               █│
│█   O comitê de aprovação                       █│  ← KyivType / 32px / #ececea
│█   tinha pioneiros                             █│  ← line-height: 1.12
│█   de Brasília.                                █│
│█                                               █│
│█   ────────                                    █│  ← 48px / 1px / #3c6e71
│█                                               █│
│█   Gente que construiu esta cidade.            █│  ← Montserrat / 16px / #8ab0ab
│█   Que tinha opinião sobre tudo.               █│
│█   E que precisava concordar.                  █│
│█████████████████████████████████████████████████│
└─────────────────────────────────────────────────┘
```

**Objetivo:** Amplificar a escala do problema. Peso dramático antes da virada.

---

### SLIDE 04 — A DECISÃO

```
  1080px
┌─────────────────────────────────────────────────┐
│                                                 │  ← #ececea background
│  03                                             │  ← Sweet Sans / 11px / #3c6e71
│  A DECISÃO                                      │
│                                                 │
│  ┌───────────────────────────────────────────┐  │
│  │  FOTO DA VISTA PARA O AEROPORTO           │  │  ← 45% da altura
│  │  da academia — a decisão criativa visível │  │
│  └───────────────────────────────────────────┘  │
│                                                 │
│  A academia poderia ter qualquer parede.        │  ← KyivType / 24px / #173a4a
│                                                 │
│  Escolhemos janelas com                         │  ← Montserrat / 15px / #173a4a
│  vista para o aeroporto de Brasília.            │
│                                                 │
│  Uma decisão. Uma razão. Uma memória.           │  ← Montserrat Italic / 14px / #3c6e71
└─────────────────────────────────────────────────┘
```

**Objetivo:** Revelar o diferencial criativo — a decisão que só Indira tomou.

---

### SLIDE 05 — O RESULTADO

```
  1080px
┌─────────────────────────────────────────────────┐
│                                                 │  ← #ececea background
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│  ▓▓▓   FOTO DO RESULTADO — DEPOIS          ▓▓▓  │  ← 65% da altura
│  ▓▓▓   academia + gourmet / Wide angle     ▓▓▓  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │
│                                                 │
│  04                                             │  ← Sweet Sans / 11px / #3c6e71
│  O RESULTADO                                    │
│                                                 │
│  "Euforia na inauguração."                      │  ← KyivType / 26px / #173a4a
│                                                 │
│  O espaço que era de ninguém                   │  ← Montserrat / 14px / #173a4a
│  virou o coração do condomínio.                │
└─────────────────────────────────────────────────┘
```

**Objetivo:** Entrega a transformação. A citação é prova social. A história fala por si.

---

### SLIDE 06 — CTA

```
  1080px
┌─────────────────────────────────────────────────┐
│█████████████████████████████████████████████████│  ← #173a4a background
│█                                               █│  ← 200px respiração
│█   Esse espaço existiu porque                  █│  ← Montserrat / 17px / #8ab0ab
│█   alguém confiou no processo.                 █│
│█                                               █│  ← 40px
│█   O seu projeto pode                          █│  ← KyivType / 44px / #ececea
│█   ser o próximo.                              █│  ← line-height: 1.1
│█                                               █│
│█   ────────────────                            █│  ← 120px / 1px / #3c6e71
│█                                               █│
│█   Link na bio.                                █│  ← Sweet Sans / 14px / #8ab0ab
│█   Ou me chama no Direct.                      █│
│█████████████████████████████████████████████████│
└─────────────────────────────────────────────────┘
```

**Objetivo:** Converter engajamento em contato — sem pressão, com convite.
Retorna ao petróleo da capa: arco visual fechado.

---

### Especificações Técnicas do Carrossel

```
Formato:     1080 × 1080px / 6 slides
Exportação:  PNG ou JPG / qualidade máxima

Consistência entre slides:
  - Headline: KyivType Sans Medium3 em todos
  - Numeração: Sweet Sans Pro / 11px / #3c6e71 / VERSALETE
  - Linha acento: sempre #3c6e71 / 1–1.5px
  - Margem interna: 48–64px (consistente)

Alternância cromática:
  Slide 1: #173a4a  (impacto / capa)
  Slide 2: #ececea  (o antes)
  Slide 3: #173a4a  (o desafio — peso dramático)
  Slide 4: #ececea  (a decisão — clareza)
  Slide 5: #ececea  (o resultado — abertura)
  Slide 6: #173a4a  (CTA — fechamento do arco)
```

### Regras do Carrossel Premium

1. **Cada slide entrega algo.** O leitor arrasta porque cada slide tem substância.
2. **O arco narrativo é real.** Capa → Contexto → Conflito → Decisão → Resultado → CTA.
3. **A estética é consistente.** Paleta, fonte, espaçamento — o mesmo sistema nos 6 slides.
4. **O texto é preciso.** Máximo 3 linhas de corpo por slide. Máximo 2 linhas de headline. Respiração generosa.
5. **O CTA não vende.** "O seu projeto pode ser o próximo" é um convite, não uma promessa.

### Próximos Carrosseis — Sistema Replicável

```
CARROSSEL 02 — "Como Funciona o Processo"
  4 etapas → 6 slides (capa + 4 etapas + CTA)

CARROSSEL 03 — "A Decisão que Ninguém Viu"
  Uma micro-decisão de projeto que mudou tudo

CARROSSEL 04 — "Para Quem Eu Trabalho"
  O perfil do cliente ideal — sem julgamento, com clareza

CARROSSEL 05 — "Antes e Depois: Projeto Residencial"
  O mesmo formato, com projeto diferente
```

**Sistema:** Capa petróleo → Slides off-white com conteúdo → CTA petróleo.
Sempre 5–7 slides. Nunca menos de 4, nunca mais de 8.

---

## PARTE 4 — GRID DO FEED

> Direção visual do perfil como um todo — o que o visitante vê antes de ler qualquer post.

### O Que o Feed Comunica

Antes de qualquer post ser lido individualmente, o perfil já transmite:
- **Rigor:** composição consistente, sem variação caótica
- **Paleta coesa:** petróleo e off-white dominam, teal aparece como acento
- **Variedade com ritmo:** imagem → texto → editorial, nunca aleatório
- **Premium silencioso:** nada grita. Tudo é visto.

### Mockup do Feed — Grid 3×3

```
╔═══════════════╦═══════════════╦═══════════════╗
║               ║               ║               ║
║  POST 01      ║  POST 02      ║  POST 03      ║
║  ░  FOTO   ░  ║  █ TEXTO  █  ║  ░ SPLIT  ░  ║
║  ░ PROJETO ░  ║  █ PETRÓ- █  ║  ░PROCESSO░  ║
║  Cobertura    ║  ARQUITETURA  ║  Antes de     ║
║  116 Sul      ║  NÃO É        ║  qualquer     ║
║  #ececea bg   ║  DECORAÇÃO.   ║  linha.       ║
║               ║  #173a4a bg   ║  #ececea bg   ║
╠═══════════════╬═══════════════╬═══════════════╣
║               ║               ║               ║
║  POST 04      ║  POST 05      ║  POST 06      ║
║  ░  MACRO  ░  ║  ░PORTRAIT░  ║  ░  FOTO   ░  ║
║  ░MATERIAL ░  ║  ░ INDIRA  ░  ║  ░PROJETO 2░  ║
║  Madeira ·    ║  Indira       ║  [Projeto     ║
║  Concreto     ║  Bonfim       ║  Residencial] ║
║  #ececea bg   ║  Arquiteta    ║  #ececea bg   ║
║               ║  #ececea bg   ║               ║
╠═══════════════╬═══════════════╬═══════════════╣
║               ║               ║               ║
║  POST 07      ║  POST 08      ║  POST 09      ║
║  █ TEXTO  █  ║  ░  MACRO  ░  ║  ░ SPLIT  ░  ║
║  █ AUTORI-█  ║  ░MATERIAL ░  ║  ░PROCESSO░  ║
║  O ESPAÇO     ║  Geometria    ║  O briefing   ║
║  ONDE VOCÊ    ║  do teal      ║  é onde o     ║
║  VIVE...      ║  #ececea bg   ║  projeto      ║
║  #173a4a bg   ║               ║  começa.      ║
╚═══════════════╩═══════════════╩═══════════════╝
```

### Padrão Cromático do Grid

```
[ececea]  [173a4a]  [ececea]
[ececea]  [ececea]  [ececea]
[173a4a]  [ececea]  [ececea]
```

Posts escuros (#173a4a) em posições 2 e 7 — criam diagonal visual sofisticada.
O feed "respira": predominância off-white, petróleo como pontuação. Não óbvio, percebido como coesão.

### Análise Post a Post

| Post | Tipo | Background | Sensação |
|---|---|---|---|
| 01 | Imagem de projeto | #ececea | Competência visual imediata |
| 02 | Text-only manifesto | #173a4a | Ponto de vista forte — diferenciação |
| 03 | Editorial split | #ececea | Rigor e método visíveis |
| 04 | Macro material | #ececea | Desejo pela estética mineral |
| 05 | Portrait editorial | #ececea | Confiança, presença, autoria |
| 06 | Imagem de projeto 2 | #ececea | Portfólio com profundidade |
| 07 | Text-only autoridade | #173a4a | Segundo âncora editorial — consistência de voz |
| 08 | Macro detalhe 2 | #ececea | Desejo mineral — segunda camada |
| 09 | Editorial split 2 | #ececea | Método com profundidade |

### Regra dos 9 — Distribuição por Conjunto

```
Por conjunto de 9 posts:
  2–3  posts de imagem de projeto    (portfólio)
  2    posts de texto petróleo       (âncoras editoriais)
  2    posts editoriais split        (processo)
  1    post de macro material        (desejo mineral)
  1    post de portrait              (humanização)

Nunca:
  - Dois posts de texto escuro seguidos
  - Três posts de imagem seguidos
  - Dois portraits no mesmo grupo de 9
```

### Primeira Impressão — Análise dos 3 Segundos

```
0–1 segundo:
"É diferente dos escritórios de arquitetura que eu conheço."
→ O petróleo #173a4a aparece e é memorável. Não é o bege/cobre/genérico.

1–2 segundos:
"Tem consistência visual. Parece premium."
→ Off-white dominante + ritmo entre posts comunica curadoria.

2–3 segundos:
"Tem ponto de vista. Não é só portfólio."
→ Posts de texto editorializam — não é só "olha o que eu fiz."
```

### Evolução do Feed — Plano de 30 Posts

**Semana 1–2 (posts 1–6) — Estabelecer a paleta**
Foco em imagem e detalhe material. Deixar a estética falar antes do texto longo.

**Semana 3–4 (posts 7–12) — Estabelecer a voz**
Introduzir posts de texto. O perfil começa a ter dois elementos: o belo e o pensante.

**Mês 2 (posts 13–24) — Aprofundar o processo**
Posts de bastidor, processo, decisões criativas. O perfil começa a parecer um manifesto visual.

**Mês 3+ (posts 25+) — Prova social e conversão**
Depoimentos com identidade visual coerente. CTAs integrados ao visual.

---

## PARTE 5 — STORIES HIGHLIGHTS

Covers dos 4 Highlights obrigatórios:

```
HIGHLIGHT 01 — PROJETOS
  Cover: ícone de planta baixa em linha / fundo #173a4a
  Label: PROJETOS

HIGHLIGHT 02 — PROCESSO
  Cover: ícone de traço/régua em linha / fundo #3c6e71
  Label: PROCESSO

HIGHLIGHT 03 — SOBRE
  Cover: ícone minimal de pessoa / fundo #173a4a
  Label: SOBRE

HIGHLIGHT 04 — CONTATO
  Cover: ícone de envelope ou conversa / fundo #3c6e71
  Label: CONTATO
```

**Estilo dos ícones:** Linha fina, 1.5px stroke, #ececea sobre fundo sólido.
Não usar ícones prontos de pacotes genéricos — criar em estilo blueprint.

---

## PARTE 6 — CHECKLIST DE REVISÃO

> Verificar antes de publicar qualquer peça.

```
IDENTIDADE VISUAL
[ ] Paleta usa apenas as 5 cores oficiais da marca?
[ ] Nenhuma cor quente introduzida (cobre, areia, dourado, laranja)?
[ ] Tipografia: KyivType / Sweet Sans / Montserrat — sem outras fontes?
[ ] Espaçamento generoso — texto não comprimido?

FOTOGRAFIA / GERAÇÃO IA
[ ] Grading frio-neutro — não quente-alaranjado?
[ ] Luz coerente: fria, direcional, não flash frontal ou golden hour?
[ ] Sem stock photo genérico?
[ ] Material fotogênico coerente (concreto, pedra, vidro — não rattan, couro quente)?
[ ] A paleta da imagem é: navy #173a4a + teal #3c6e71 + greige #d1d3c4 + off-white #ececea?

COPY
[ ] Nenhuma palavra proibida (incrível, exclusivo, sofisticado, luxo, top)?
[ ] Tom preciso e contemporâneo — não efusivo?
[ ] Parágrafos curtos com espaçamento entre linhas?
[ ] Sem exclamação no corpo do texto?

COMPOSIÇÃO
[ ] Espaço em branco adequado — não comprimido?
[ ] Hierarquia clara: imagem → headline → label?
[ ] A sensação emocional objetivada foi alcançada?
[ ] Poderia ser publicado em Domus ou Casabella? (padrão de referência)

FEED
[ ] O post respeita o ritmo cromático do grid?
[ ] Não quebra a regra de dois escuros/três imagens seguidos?
```
