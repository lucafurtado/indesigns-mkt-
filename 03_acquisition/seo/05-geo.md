# GEO — aparecer nas respostas de IA (ChatGPT, Gemini, Perplexity)

> GEO = otimizar para ser **citado** quando alguém pergunta a uma IA "me indica um arquiteto de interiores em Brasília" ou "qual escritório faz reforma de cobertura em Brasília". Cada vez mais gente decide assim.

---

## Auditoria (2026-08-31)

Para os termos de recomendação ("melhor arquiteto de interiores em Brasília", "melhores arquitetos de Brasília"), o que aparece — e o que as IAs consultam:

- **Diretórios e listas:** ohub.com.br, StarOfService, arquitetorio.com.br, brasilarq.com.br, infoisinfo, Cronoshare. São as fontes que as IAs mais citam para "melhores X em cidade Y".
- **Escritórios com marca forte + imprensa:** CoDA (ArchDaily, Casa Vogue, Casa e Jardim), BLOCO (ArchDaily). IAs citam quem tem menção editorial.
- **Nomes de arquiteta individual:** BIA, Adriana Pestana, Flavia Goulart aparecem por nome próprio.
- **Indesigns / Indira Bonfim:** aparece só no que é dela (site, Instagram, GBP). Ainda sem menção de terceiro.

**Conclusão:** a Indesigns não tem presença GEO porque (a) não está nos diretórios que as IAs leem e (b) não tem menção externa nenhuma. O site sozinho, por melhor que seja, raramente é citado por IA — elas pesam **corroboração de fontes independentes**.

---

## O que já foi feito

- **FAQPage schema** na `/servicos` com 7 perguntas em formato Q&A, resposta direta na primeira linha. É o formato que as IAs extraem melhor.
- **Dados concretos e verificáveis** no schema e no texto: nome, endereço (Brasília/DF), CAU (Indira Bonfim, arquiteta), áreas atendidas, `sameAs` para Instagram e LinkedIn, telefone.
- **Entidade consistente:** mesmo nome ("Indesigns Arquitetura e Design") e NAP no site, no schema e no GBP.

---

## Ações para ganhar citação de IA (ordem)

### 1. Entrar nos diretórios que as IAs leem — NAP idêntico
- **Google Business Profile** ✅ (feito)
- **Houzz Brasil** — criar perfil de profissional, subir projetos. IAs consultam Houzz para arquitetura.
- **homify Brasil** — idem.
- **ohub.com.br** — cadastro em "arquitetos de interiores / DF / Brasília".
- **StarOfService** — cadastro de profissional.
- **Instagram e LinkedIn** — já linkados no schema; manter nome e descrição idênticos ao site.
- Regra: **exatamente** "Indesigns Arquitetura e Design", mesmo telefone `(61) 99858-6151`, mesma cidade, link para `https://indesigns.com.br`. Qualquer variação enfraquece a entidade.

### 2. Conseguir menção editorial (o que mais pesa)
- Pitch para **ArchDaily Brasil** e **Archtrends Portobello** com o case 116 Sul / Porto Seguro (área coletiva de condomínio é pauta incomum).
- Oferecer o case Orbis para veículos de arquitetura para saúde.
- Contato com jornalista de arquitetura/decoração do **Correio Braziliense** (caderno local).
- Guest post ou entrevista em blog de arquitetura de Brasília.
- Parcerias (`/collab`): quando um fornecedor ou marceneiro publica o projeto e cita a Indesigns com link, conta como menção.

### 3. Conteúdo em formato que IA extrai
Todo artigo do plano de conteúdo (doc 04) deve:
- Responder a pergunta do título **nas duas primeiras frases**.
- Usar perguntas como H2/H3.
- Trazer números concretos (m², etapas, prazos, bairros) — IA descarta texto vago.
- Ter um bloco FAQ com `FAQPage` schema.

### 4. Reviews no Google
IAs leem a nota e o volume de avaliações do GBP. Pedir avaliação a todo cliente que termina projeto (usar `/responder-avaliacoes` para responder). 5-10 avaliações reais já mudam como a Indesigns é descrita por IA.

---

## Monitoramento (a cada 30-45 dias)

Testar no ChatGPT, Gemini e Perplexity:
- "me indica um escritório de arquitetura em Brasília"
- "quem faz reforma de área comum de condomínio em Brasília"
- "arquiteto para consultório em Brasília"
- "Indesigns arquitetura" (checar se a IA descreve certo)

Registrar: a Indesigns apareceu? quem apareceu? que fonte a IA citou? Ajustar diretórios/conteúdo conforme o padrão de fontes.
