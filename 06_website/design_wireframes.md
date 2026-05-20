# Wireframes Visuais — Site Indesigns
## Direção de Arte · Hero Section + Landing Page

> Wireframes sofisticados com especificações completas de layout, tipografia, espaçamento e hierarquia visual.
> Cada seção é um brief de design autônomo — executável diretamente no Framer.

---

## SISTEMA DE DESIGN — SITE

### Grid Desktop (1440px)

```
Largura máxima:     1440px
Coluna de conteúdo: 1200px (centralized)
Margem lateral:     120px cada lado
Colunas internas:   12 colunas / 24px gutter
Breakpoint mobile:  390px (iPhone 14 Pro)
```

### Espaçamento Vertical (Desktop)

```
Entre seções:          120–160px (respiração generosa)
Padding interno seção: 80–120px top/bottom
Espaço entre blocos:   40–60px
Linha de acento:       32px (margem acima e abaixo)
```

### Tipografia Web

```
Headline H1:   KyivType Sans / 72–96px / #ececea ou #173a4a / tracking: -0.02em
Headline H2:   KyivType Sans / 48–64px / #173a4a / tracking: -0.01em
Headline H3:   KyivType Sans / 32–40px / #173a4a
Subtítulo:     Sweet Sans Pro Light / 20–24px / #3c6e71 / tracking: +0.02em
Label:         Sweet Sans Pro / 12px / #3c6e71 / tracking: +0.10em / VERSALETE
Corpo:         Montserrat Regular / 16–18px / #173a4a / line-height: 1.7
Corpo claro:   Montserrat / 16px / #8ab0ab (sobre fundos escuros)
```

---

## SEÇÃO 01 — HERO
### A Primeira Impressão

**Objetivo:** Criar impacto imediato — beleza, posicionamento e convite.
**Sensação emocional:** *"Isso é diferente do que eu esperava. Preciso continuar."*
**Tempo de atenção:** 3–5 segundos para decidir rolar ou sair.

---

### WIREFRAME HERO — DESKTOP (1440px)

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│  ▓▓▓                                                                     ▓▓▓│
│  ▓▓▓  [INDESIGNS]                          [Projetos] [Processo] [Sobre]  ▓▓▓│  ← NAV
│  ▓▓▓                                                               [Contato]▓▓│  ← overlay sobre foto
│  ▓▓▓                                                                     ▓▓▓│
│  ▓▓▓                                                                     ▓▓▓│
│  ▓▓▓                                                                     ▓▓▓│  ← 100vh / foto full-screen
│  ▓▓▓                                                                     ▓▓▓│  ← overlay #173a4a / 35% opacity
│  ▓▓▓                                                                     ▓▓▓│
│  ▓▓▓                                                                     ▓▓▓│
│  ▓▓▓  Cada espaço                                                        ▓▓▓│  ← H1 / KyivType / 88px / #ececea
│  ▓▓▓  conta uma história.                                                ▓▓▓│  ← line-height: 1.05
│  ▓▓▓  A sua.                                                             ▓▓▓│
│  ▓▓▓                                                                     ▓▓▓│  ← 32px
│  ▓▓▓  Arquitetura residencial e coletiva em Brasília.                    ▓▓▓│  ← subtítulo / 20px / #8ab0ab
│  ▓▓▓                                                                     ▓▓▓│  ← 48px
│  ▓▓▓  [  Agende uma conversa  ]           Ver projetos ↓                 ▓▓▓│  ← CTA
│  ▓▓▓                                                                     ▓▓▓│
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└────────────────────────────────────────────────────────────────────────────────┘
  Altura: 100vh (viewport height total — foto ocupa a tela inteira)
```

---

### ESPECIFICAÇÕES COMPLETAS — HERO DESKTOP

```
CONTAINER:
  Largura:        100vw × 100vh
  Background:     Fotografia do projeto mais impactante (object-fit: cover)
  Overlay:        #173a4a / opacity: 35% / position: absolute / inset: 0

NAVEGAÇÃO (fixed no topo):
  Background:     transparent (sobre a foto)
  Altura:         72px
  Padding:        0 120px (margens laterais)
  Logo:           KyivType Sans / 18px / #ececea / tracking: +0.04em / letra maiúscula
  Links:          Sweet Sans Pro / 13px / #ececea / tracking: +0.08em
  Botão contato:  border 1px #ececea / color: #ececea / padding: 12px 24px
                  Hover: background #3c6e71 / border #3c6e71

CONTEÚDO (posicionado no terço inferior da tela):
  Posição:        absolute / bottom: 15% / left: 120px
  Largura máx:    680px

HEADLINE H1:
  Fonte:          KyivType Sans Medium3
  Tamanho:        88px
  Cor:            #ececea
  Line-height:    1.05
  Tracking:       -0.02em
  Animação:       fade up / 0.8s ease / delay: 0.2s

SUBTÍTULO:
  Fonte:          Montserrat Regular
  Tamanho:        20px
  Cor:            #8ab0ab
  Line-height:    1.6
  Margin-top:     32px
  Animação:       fade up / 0.8s ease / delay: 0.4s

CTA PRINCIPAL:
  Texto:          "Agende uma conversa"
  Background:     #3c6e71
  Cor texto:      #ececea
  Padding:        16px 32px
  Font:           Sweet Sans Pro / 13px / tracking: +0.06em
  Margin-top:     48px
  Hover:          background #173a4a / transition 0.3s
  Animação:       fade up / 0.8s ease / delay: 0.6s

CTA SECUNDÁRIO:
  Texto:          "Ver projetos ↓"
  Cor:            #ececea / opacity: 0.7
  Font:           Montserrat / 14px
  Margin-left:    32px (mesmo baseline do CTA principal)
  Hover:          opacity: 1 / texto sublinhado
```

---

### WIREFRAME HERO — MOBILE (390px)

```
┌───────────────────────────────┐
│                               │
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
│▓  [INDESIGNS]          ☰   ▓│  ← nav mobile / hamburger
│▓                           ▓│
│▓                           ▓│
│▓                           ▓│
│▓                           ▓│  ← foto full-screen / overlay 40%
│▓  Cada espaço              ▓│  ← H1 / 52px / #ececea
│▓  conta uma               ▓│
│▓  história.               ▓│
│▓  A sua.                   ▓│
│▓                           ▓│  ← 24px
│▓  Arquitetura em Brasília. ▓│  ← subtítulo / 16px / #8ab0ab
│▓                           ▓│  ← 32px
│▓  [ Agende uma conversa ]  ▓│  ← CTA / largura total
│▓                           ▓│
│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│
└───────────────────────────────┘
  Altura: 100svh (safe viewport height)
```

**Mobile:** H1 reduz para 52px. Subtítulo encurtado. CTA ocupa largura total.
CTA secundário "Ver projetos ↓" aparece abaixo do botão principal.

---

### DIREÇÃO FOTOGRÁFICA — HERO

**A foto do hero é a decisão mais importante do site.**

**Critérios de seleção:**
A foto que criar mais impacto emocional ao ser vista pela primeira vez — não a mais "bonita" tecnicamente, mas a que comunica melhor o nível de trabalho da Indira.

**Candidatas:**
1. Cobertura 116 Sul — academia com vista para o aeroporto
2. Projeto residencial mais fotogênico entregue
3. Interior que combine escala, luz e geometria

**Direção de grading:**
Overlay petróleo (#173a4a / 35%) sobre a foto naturalmente fria.
A foto não precisa ser perfeita — o overlay unifica.
Evitar: fotos com muito amarelo/laranja que lutem contra o overlay azul.

---

## SEÇÃO 02 — PORTFÓLIO
### Os Projetos

**Objetivo:** Demonstrar capacidade através de narrativa visual — não de catálogo.
**Layout:** Grid assimétrico — destaque para o projeto principal.

---

### WIREFRAME PORTFÓLIO — DESKTOP

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  [espaço: 120px]                                                              │
│                                                                                │
│  PROJETOS                                                       [label/seção] │  ← H2 / KyivType / 56px / #173a4a
│  Cada projeto começa com uma escuta.                                          │  ← subtítulo / Sweet Sans / #3c6e71
│                                                                                │
│  [espaço: 64px]                                                               │
│                                                                                │
│  ┌──────────────────────────────────┐  ┌────────────────┐  ┌───────────────┐ │
│  │                                  │  │                │  │               │ │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  │  ▒▒▒▒▒▒▒▒▒▒  │  │  ▒▒▒▒▒▒▒▒▒  │ │
│  │  ▓▓▓                       ▓▓▓  │  │  ▒ PROJETO ▒  │  │  ▒PROJETO ▒  │ │
│  │  ▓▓▓  PROJETO PRINCIPAL    ▓▓▓  │  │  ▒    02   ▒  │  │  ▒   03   ▒  │ │
│  │  ▓▓▓  Cobertura 116 Sul   ▓▓▓  │  │  ▒▒▒▒▒▒▒▒▒▒  │  │  ▒▒▒▒▒▒▒▒▒  │ │
│  │  ▓▓▓  (destaque maior)    ▓▓▓  │  │                │  │               │ │
│  │  ▓▓▓                       ▓▓▓  │  │  Nome          │  │  Nome         │ │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │  │  Tipo · Bairro │  │  Tipo · Bairro│ │
│  │                                  │  │                │  │               │ │
│  │  Cobertura 116 Sul               │  └────────────────┘  └───────────────┘ │
│  │  ÁREA COLETIVA · ASA SUL        │                                         │
│  │                                  │                                         │
│  └──────────────────────────────────┘                                         │
│  [58% largura]                         [20% largura]    [20% largura]         │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
  Hover nos cards: foto alternativa aparece suavemente (opacity transition 0.4s)
```

---

### ESPECIFICAÇÕES PORTFÓLIO

```
GRID:
  Coluna principal:  58% da largura de conteúdo
  Colunas menores:   20% cada / 2% gutter
  Gap entre cards:   24px
  Border-radius:     0 (sem arredondamento)

CARD PRINCIPAL:
  Proporção:         4:3 (landscape)
  Overlay hover:     #173a4a / 60% opacity
  Texto overlay:     aparece no hover — título em branco + label

CARDS MENORES:
  Proporção:         3:4 (portrait) ou 1:1 (square)
  Mesmo sistema de hover

TIPOGRAFIA DOS CARDS:
  Nome:              KyivType Sans / 20px / #173a4a
  Label:             Sweet Sans Pro / 11px / #3c6e71 / VERSALETE
  Margin-top:        16px após a imagem

TEXTO ABAIXO DO GRID:
  "Cada projeto no portfólio representa uma história diferente."
  Montserrat / 16px / #173a4a / margin-top: 64px / max-width: 560px
```

---

## SEÇÃO 03 — PROCESSO
### Como Trabalhamos

**Objetivo:** Criar segurança operacional — o cliente sabe o que esperar.
**Layout:** 4 etapas em linha horizontal com linha conectora.

---

### WIREFRAME PROCESSO — DESKTOP

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  [seção com fundo #d1d3c4 — greige mineral / 160px padding top/bottom]        │
│                                                                                │
│  Como trabalhamos                                                              │  ← H2 / KyivType / 48px / #173a4a
│  Do primeiro contato à entrega, você sabe exatamente o que esperar.           │  ← Montserrat / 18px / #173a4a
│                                                                                │
│  [espaço: 80px]                                                                │
│                                                                                │
│  01             02              03              04                             │  ← numeração / Sweet Sans / 64px / #3c6e71
│  │              │               │               │                              │
│  Descoberta     Projeto         Refinamento     Entrega                        │  ← KyivType / 22px / #173a4a
│  │              │               │               │                              │
│  ─────────────────────────────────────────────────── (linha conectora)        │  ← 1px / #8ab0ab / horizontal
│                                                                                │
│  Antes de       Com o           Ajustes,        Projeto                        │  ← Montserrat / 14px / #173a4a
│  qualquer       briefing em     escolhas de     executivo                      │  ← max 4 linhas por etapa
│  linha, eu      mãos,           material,       completo.                      │
│  preciso te     desenvolvemos   especificações. Acompanhamento                 │
│  entender.      o estudo...     Trabalhamos...  de visitas.                    │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
  Background: #d1d3c4 (greige mineral — diferencia da seção de portfólio)
```

---

### ESPECIFICAÇÕES PROCESSO

```
SEÇÃO:
  Background:    #d1d3c4 (greige — contraste com #ececea padrão)
  Padding:       160px top/bottom
  Coluna:        1200px centralizado

NUMERAÇÃO:
  Fonte:         Sweet Sans Pro Light
  Tamanho:       64px
  Cor:           #3c6e71
  Opacity:       0.4 (sutil — marca posição sem dominar)

TÍTULO ETAPA:
  Fonte:         KyivType Sans Medium3
  Tamanho:       22px
  Cor:           #173a4a
  Margin-top:    16px

LINHA CONECTORA:
  Espessura:     1px
  Cor:           #8ab0ab
  Posição:       horizontal / alinhada aos ícones das etapas
  Comprimento:   vai de 01 a 04

CORPO ETAPA:
  Fonte:         Montserrat Regular
  Tamanho:       14px
  Cor:           #173a4a
  Line-height:   1.7
  Margin-top:    24px
  Max-width:     240px por coluna
```

---

## SEÇÃO 04 — SOBRE
### Indira Bonfim

**Objetivo:** Criar conexão humana com autoridade — não biografia, mas presença.
**Layout:** Foto à esquerda / texto à direita — editorial, não institucional.

---

### WIREFRAME SOBRE — DESKTOP

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  [espaço: 120px]                                                              │
│                                                                                │
│  ┌───────────────────────────┐     ┌──────────────────────────────────────┐  │
│  │                           │     │                                      │  │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │     │  Indira Bonfim                       │  │  ← KyivType / 48px / #173a4a
│  │  ▓▓▓                 ▓▓▓  │     │                                      │  │
│  │  ▓▓▓  PORTRAIT       ▓▓▓  │     │  ─────────────                       │  │  ← 80px / 1px / #3c6e71
│  │  ▓▓▓  editorial da   ▓▓▓  │     │                                      │  │
│  │  ▓▓▓  Indira         ▓▓▓  │     │  Sou arquiteta em Brasília           │  │  ← Montserrat / 17px / #173a4a
│  │  ▓▓▓                 ▓▓▓  │     │  há quatro anos.                     │  │  ← line-height: 1.75
│  │  ▓▓▓  3:4 portrait   ▓▓▓  │     │                                      │  │
│  │  ▓▓▓                 ▓▓▓  │     │  Não escolhi essa profissão pelo     │  │
│  │  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  │     │  que ela constrói...                 │  │
│  │                           │     │                                      │  │
│  │  Indesigns · Brasília, DF │     │  [texto completo conforme copy.md]   │  │
│  │  Residencial e coletivo   │     │                                      │  │
│  │  [Sweet Sans / 11px]      │     │                                      │  │
│  │                           │     │                                      │  │
│  └───────────────────────────┘     └──────────────────────────────────────┘  │
│  [44% largura]                      [52% largura]                              │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
```

---

## SEÇÃO 05 — CTA FINAL
### O Convite

**Objetivo:** Converter — mas com elegância.
**Layout:** Centralizado, espaçamento máximo, sem distrações.

---

### WIREFRAME CTA FINAL — DESKTOP

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  [seção com fundo #173a4a — petróleo / 200px padding top/bottom]              │
│                                                                                │
│                                                                                │
│                         Pronto para começar?                                  │  ← H2 / KyivType / 64px / #ececea
│                                                                                │  ← centralizado
│                         Me conta sobre o seu projeto.                         │  ← Montserrat / 20px / #8ab0ab
│                         A conversa é gratuita e sem compromisso.              │
│                                                                                │  ← 64px
│                         [  Falar no WhatsApp  ]                               │  ← CTA / #3c6e71 bg / #ececea text
│                                                                                │  ← 24px
│                         contato@indesigns.arq.br                              │  ← link / Montserrat / 14px / #8ab0ab
│                                                                                │  ← 16px
│                         @indesigns                                             │  ← link / Sweet Sans / 12px / #8ab0ab
│                                                                                │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
  Background: #173a4a
  Texto: centralizado / max-width: 600px / auto margin
```

---

## ESPECIFICAÇÕES CTA FINAL

```
SEÇÃO:
  Background:    #173a4a
  Padding:       200px top/bottom

HEADLINE:
  Fonte:         KyivType Sans Medium3
  Tamanho:       64px
  Cor:           #ececea
  Line-height:   1.1
  Text-align:    center

SUBTÍTULO:
  Fonte:         Montserrat Regular
  Tamanho:       20px
  Cor:           #8ab0ab
  Line-height:   1.6
  Margin-top:    24px
  Text-align:    center

CTA BOTÃO:
  Texto:         "Falar no WhatsApp"
  Background:    #3c6e71
  Cor:           #ececea
  Padding:       18px 40px
  Font:          Sweet Sans Pro / 13px / tracking: +0.06em
  Margin-top:    64px
  Hover:         background #ececea / color: #173a4a / transition: 0.3s

CONTATOS SECUNDÁRIOS:
  E-mail:        Montserrat / 14px / #8ab0ab / margin-top: 24px
  Instagram:     Sweet Sans Pro / 12px / #8ab0ab / margin-top: 12px
  Hover:         color: #ececea / transition: 0.2s
```

---

## RODAPÉ — WIREFRAME

```
┌────────────────────────────────────────────────────────────────────────────────┐
│                                                                                │
│  [background #ececea / padding 48px]                                          │
│                                                                                │
│  INDESIGNS                              Instagram  WhatsApp  E-mail           │
│  Arquitetura em Brasília                                                       │
│                                                                                │
│  ─────────────────────────────────────────────────────────────────────────── │
│                                                                                │
│  © 2026 Indesigns. Todos os direitos reservados.   Indira Bonfim · CAU nº    │
│                                                                                │
└────────────────────────────────────────────────────────────────────────────────┘
  Background: #ececea
  Texto: #173a4a (principal) / #8ab0ab (secundário)
  Linha: 1px / #d1d3c4
```

---

## ANIMAÇÕES — ESPECIFICAÇÕES

```
FADE UP (padrão para conteúdo em scroll):
  transform: translateY(24px) → translateY(0)
  opacity: 0 → 1
  duration: 0.7s
  easing: cubic-bezier(0.4, 0, 0.2, 1)
  trigger: IntersectionObserver (80% visível)

HERO (carregamento inicial):
  H1: delay 0.2s / 0.8s ease
  Subtítulo: delay 0.4s / 0.8s ease
  CTA: delay 0.6s / 0.8s ease

HOVER NOS CARDS DE PORTFÓLIO:
  Photo swap: opacity 0 → 1 / 0.4s ease
  Overlay: opacity 0 → 0.6 / 0.3s ease

HOVER NOS LINKS:
  Todos: transition 0.2s ease
  Sem animações abruptas

O QUE NÃO USAR:
  × Parallax excessivo (max: 30% da velocidade de scroll no hero)
  × Animações de rotação ou scale agressivo
  × Scroll-triggered animations em cada parágrafo (apenas em blocos)
  × Bounce easing (não é premium)
```

---

## CHECKLIST DE IMPLEMENTAÇÃO FRAMER

```
CONFIGURAÇÃO INICIAL:
[ ] Configurar KyivType Sans / Sweet Sans Pro / Montserrat no Framer
[ ] Definir variáveis de cor (design tokens): #173a4a, #3c6e71, #8ab0ab, #d1d3c4, #ececea
[ ] Configurar breakpoints: 1440px (desktop) / 768px (tablet) / 390px (mobile)
[ ] Definir grid global: 12 colunas / 24px gutter

NAVEGAÇÃO:
[ ] Fixed no topo / transparent sobre hero / sólida após scroll
[ ] Logo: KyivType Sans / INDESIGNS / tracking generoso
[ ] Menu mobile: slide lateral suave

HERO:
[ ] Foto: cover / 100vh / overlay petróleo 35%
[ ] Animações de entrada com delays

PORTFÓLIO:
[ ] Hover states nos cards (foto alternativa)
[ ] Grid responsivo para mobile (1 coluna)

PERFORMANCE:
[ ] Imagens: WebP / lazy loading (exceto hero)
[ ] First contentful paint: < 1.5s
[ ] Framer CMS para projetos (facilita adicionar sem reabrir o Framer)
```
