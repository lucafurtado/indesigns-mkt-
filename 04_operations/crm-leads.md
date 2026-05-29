# CRM de Leads — Indesigns

Quando alguém preenche o formulário do site, duas coisas acontecem automaticamente:
1. Os dados entram na sua planilha
2. O lead recebe um e-mail de confirmação na hora

Você não precisa fazer nada imediatamente. Avalia com calma e responde quando quiser.

---

## O que você vai precisar

- Conta Google (você já tem)
- Conta Make — gratuita em make.com
- 30 minutos para configurar uma única vez

---

## Como vai funcionar no dia a dia

```
Lead preenche o formulário do site
         ↓
Recebe e-mail automático de confirmação
         ↓
Dados entram na planilha com data e hora
         ↓
Você avalia o lead com calma e responde no WhatsApp quando quiser
         ↓
Se avançar → você personaliza a proposta e envia manualmente
```

---

## Passo 1 — Criar a planilha no Google Sheets

1. Abra o Google Sheets e crie uma planilha nova
2. Nomeie como **"Leads Indesigns"**
3. Na primeira linha, crie essas colunas exatamente assim (uma por célula):

```
Data | Nome | WhatsApp | E-mail | Tipo de projeto | Prazo | Local | Mensagem | Origem | Status | Próximo passo
```

4. Copie o link da planilha — você vai precisar dele no Make

---

## Passo 2 — Criar a conta no Make

1. Acesse **make.com**
2. Clique em **Sign up** e crie com seu e-mail do Google
3. Plano gratuito — não precisa cartão

---

## Passo 3 — Criar o cenário no Make

O cenário tem 3 módulos: **Webhook → Planilha → E-mail**

### Módulo 1 — Webhook (recebe o lead do site)

1. No Make, clique em **Create a new scenario**
2. Clique no **"+"** e busque **"Webhooks"** → selecione **Custom webhook**
3. Clique em **Add** → nome: **"Lead site Indesigns"** → **Save**
4. O Make gera uma URL — **copie essa URL** (ex: `https://hook.make.com/abc123...`)
5. Clique em **OK**

### Módulo 2 — Google Sheets (salva o lead)

6. Clique no **"+"** depois do webhook
7. Busque **"Google Sheets"** → selecione **Add a Row**
8. Conecte sua conta Google quando pedido
9. Selecione a planilha **"Leads Indesigns"**
10. Mapeie os campos:

| Coluna da planilha | Campo do Make |
|---|---|
| Data | `capturado_em` |
| Nome | `nome` |
| WhatsApp | `whatsapp` |
| E-mail | `email` |
| Tipo de projeto | `tipo_projeto` |
| Prazo | `urgencia_prazo` |
| Local | `local` |
| Mensagem | `mensagem` |
| Origem | `origem` |

11. Clique em **OK**

### Módulo 3 — E-mail (resposta automática para o lead)

12. Clique no **"+"** depois do Google Sheets
13. Busque **"Email"** → selecione **Send an Email**
14. Configure assim:

**Para:** `email` (campo do webhook)
**Assunto:** `Recebi seu contato, {{nome}}!`
**Corpo:**

```
Oi, {{nome}}!

Recebi seu contato aqui e já vi o que você está pensando para o seu projeto.

Vou analisar com atenção e te retorno em breve para conversarmos melhor.

Até logo,
Indira Bonfim
Indesigns — Arquitetura e Design
Instagram: @indesigns
```

15. Clique em **OK** → **Save** → ative o cenário com o botão no canto inferior esquerdo

---

## Passo 4 — Ativar no site

Envie para o Luca a URL do webhook copiada no Passo 3 (etapa 4). Ele cola no código em 2 minutos e está ativo.

---

## Planilha — o que você preenche manualmente

Depois de conversar com o lead, atualize:

| Coluna | O que colocar |
|---|---|
| **Status** | Novo / Em conversa / Proposta enviada / Fechado / Perdido |
| **Próximo passo** | Ex: "Enviar proposta até 02/06" ou "Follow-up semana que vem" |

---

## Dúvidas?

Fala com o Luca — ele configura o Make junto com você se precisar.
