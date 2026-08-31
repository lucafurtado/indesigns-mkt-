# Otimização on-page — Indesigns

> Estado: base técnica feita (domínio, canonicals sem barra, sitemap, robots, GA4, schema Organization/Breadcrumb/CreativeWork, GBP verificado). Este doc cobre o mapa keyword→página e o que foi ajustado nesta rodada.

---

## Mapa keyword → página

| Página | Keyword principal | Keywords secundárias | Title atual | Status |
|---|---|---|---|---|
| `/` (home) | escritório de arquitetura brasília | arquitetura e interiores brasília, arquiteto brasília, Indira Bonfim | `Indesigns \| Escritório de arquitetura e interiores em Brasília` | **ajustado nesta rodada** (era "Arquitetura autoral e interiores…") |
| `/servicos` | serviços de arquitetura e interiores brasília | projeto de arquitetura, reforma, design de interiores, consultoria, honorários de arquiteto | `Serviços de arquitetura e interiores em Brasília \| Indesigns` | **reescrita nesta rodada** — conteúdo real por serviço + FAQ + schema Service/FAQPage |
| `/projetos` | projetos de arquitetura brasília | portfólio arquitetura brasília, projetos residenciais/corporativos | `Projetos \| Arquitetura e interiores em Brasília \| Indesigns` | ok — manter |
| `/residencia-noroeste` | reforma cobertura noroeste brasília | cobertura duplex, arquitetura residencial noroeste | ok (feito na rodada técnica) | ok |
| `/cobertura-porto-seguro` | área coletiva de condomínio brasília | reforma de área comum, espaço gourmet condomínio | ok | ok — **é o case âncora do nicho coletivo** |
| `/clinica-orbis` | arquitetura para consultório psicológico | reforma de consultório brasília, consultório pequeno | ok | ok |
| `/consultorio-ml` | interiores para consultório brasília | arquitetura para saúde, consultório asa sul | ok (portado do gêmeo) | ok |
| `/escritorio-mr` | interiores para escritório de advocacia brasília | projeto corporativo SIG | ok | ok |
| `/collab` | parcerias arquitetura brasília | colaboração fornecedores | ok | manter |
| `/links` | — | — | noindex (linktree) | manter noindex |

## O que foi feito nesta rodada

1. **Home** — `<title>` de "Arquitetura autoral e interiores em Brasília" → "**Escritório de** arquitetura e interiores em Brasília" (captura o termo comercial que as pessoas digitam). OG/twitter title e H1 mantidos (posicionamento). **Reversível se a Indira preferir "autoral".**
2. **Home** — link interno novo no rodapé da seção Serviços → `/servicos` ("Serviços em detalhe e perguntas frequentes"). Antes a página não tinha nenhum link interno apontando pra ela.
3. **`/servicos`** — reescrita completa:
   - H1: "Serviços de arquitetura e interiores em Brasília" (era uma frase poética sem keyword)
   - 4 serviços com 2 parágrafos de conteúdo real + blocos "Inclui / Não inclui" (fonte: `02_offer/services.md`)
   - **Seção FAQ** com 7 perguntas (diferença arquitetura x interiores, prazo, acompanhamento de obra, honorários, consultoria, regiões atendidas, capacidade)
   - **Schema:** `BreadcrumbList` + 4x `Service` + `FAQPage` (JSON-LD)
   - `og:image` do card "Projetos de arquitetura" corrigido (apontava para `noroeste/hero.jpg`, que não existe → `capa-categoria.png`)
   - Sem preço (decisão do cliente) — o FAQ "Como funcionam os honorários?" responde a intenção de busca sem número

## Checklist técnico

| Item | Status |
|---|---|
| URLs limpas, uma por página | ✅ (rodada técnica) |
| Canonicals no domínio certo, sem barra | ✅ |
| Sitemap com as 16 URLs | ✅ |
| robots.txt | ✅ |
| Schema Organization + LocalBusiness | ✅ (home) |
| Schema BreadcrumbList | ✅ (projetos + /servicos) |
| Schema FAQPage | ✅ (/servicos) — **primeiro do site** |
| Open Graph em todas as páginas | ✅ |
| GA4 | ✅ (G-6ZBY25QCNX) |
| Alt text nas imagens | ⚠️ parcial — hero e capas ok, galerias usam `alt="[Projeto]"` genérico. Melhorar quando tiver fotos com contexto |
| Mobile-friendly | ✅ (layout responsivo existente) |
| Velocidade | ⚠️ verificar — várias imagens `.png` pesadas em `/assets/projects/` deviam virar `.webp`/`.jpg` otimizado |
| Depoimentos / prova social | ❌ nenhum no site — maior gap (ver doc 02) |

## Pendências on-page (próxima rodada, precisam de material ou decisão)

- **Alt text descritivo** nas galerias (precisa saber o que cada foto mostra).
- **Otimizar peso das imagens** (`/assets/projects/**/*.png` — algumas com nomes tipo `Enscape_...png` e `Gemini_...png`, provavelmente sem compressão).
- **Depoimentos** — bloco na home + em páginas de projeto. Depende da ação #1 do `status.md` (síndica 116 Sul).
- **Case studies com profundidade** — as páginas de projeto têm 1 parágrafo. Viram "problema → decisão → resultado" com números (m², prazo, o que mudou). Precisa da Indira.
- **Página `/sobre` própria** — hoje "Sobre" é só uma seção da home. Uma página `/sobre` indexável reforça a Indira como entidade (bom pra "arquiteta brasília" e pra GEO).
