# CRM de Leads — Indesigns

Quando alguém preenche o formulário do site, os dados vão automaticamente para uma planilha no Google Sheets. Você não precisa fazer nada — o lead chega na planilha e no seu WhatsApp ao mesmo tempo.

---

## O que você vai precisar

- Conta Google (você já tem)
- Conta Make — gratuita em make.com
- 20 minutos para configurar uma única vez

---

## Passo 1 — Criar a planilha no Google Sheets

1. Abra o Google Sheets e crie uma planilha nova
2. Nomeie como **"Leads Indesigns"**
3. Na primeira linha, crie essas colunas exatamente assim (uma por célula):

```
Data | Nome | WhatsApp | E-mail | Tipo de projeto | Prazo | Local | Mensagem | Origem
```

4. Copie o link da planilha — você vai precisar dele no Make

---

## Passo 2 — Criar a conta no Make

1. Acesse **make.com**
2. Clique em **Sign up** e crie com seu e-mail do Google
3. Plano gratuito — não precisa cartão

---

## Passo 3 — Criar o cenário no Make

1. No Make, clique em **Create a new scenario**
2. Clique no **"+"** para adicionar o primeiro módulo
3. Busque por **"Webhooks"** e selecione **Custom webhook**
4. Clique em **Add** → dê o nome **"Lead site Indesigns"** → **Save**
5. O Make vai gerar uma URL — **copie essa URL** (parece com `https://hook.make.com/abc123...`)
6. Clique em **OK**

Agora adicione o segundo módulo (o que salva na planilha):

7. Clique no **"+"** depois do webhook
8. Busque por **"Google Sheets"** e selecione **Add a Row**
9. Conecte sua conta Google quando pedido
10. Selecione a planilha **"Leads Indesigns"** e a aba correta
11. Mapeie os campos assim:

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

12. Clique em **OK** → **Save** → ative o cenário com o botão no canto inferior esquerdo

---

## Passo 4 — Ativar no site

Envie para o Luca a URL do webhook que você copiou no Passo 3 (etapa 5). Ele cola no código do site em 2 minutos e a integração está ativa.

---

## Como vai funcionar no dia a dia

1. Alguém preenche o formulário no site
2. Você recebe a mensagem no WhatsApp com os dados
3. **Automaticamente**, os dados entram na planilha com data e hora
4. Leads que chegam por indicação ou WhatsApp direto você adiciona manualmente na planilha

---

## Planilha — colunas adicionais que você preenche

Depois que o lead entra, adicione essas colunas manualmente conforme a conversa avança:

| Coluna | O que colocar |
|---|---|
| **Status** | Novo / Em conversa / Proposta enviada / Fechado / Perdido |
| **Valor estimado** | R$ 5.500 a R$ 6.500 conforme o projeto |
| **Próximo passo** | O que fazer e quando |

---

## Dúvidas?

Fala com o Luca — ele configura o Make junto com você se precisar.
