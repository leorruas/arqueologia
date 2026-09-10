---
title: "Custo do Erro"
type: "variavel"
tags:
  - design/variavel
  - arqueologia
---

# Custo do Erro

O **Custo do Erro** é a variável que mede o impacto das consequências negativas de uma ação incorreta ou indesejada do usuário em um sistema. O bom design busca reduzir essa variável para evitar perdas críticas de dados ou frustração.

## Impacto nos Artefatos

Esta variável é ativamente modificada nos seguintes artefatos:

### Aumentada / Maximizada
- *Nota: Nenhum artefato do vault busca aumentar o custo do erro de forma punitiva.*

### Diminuída / Minimizada
- [[Undo|Undo / Ctrl + Z]] — Minimizou o custo de ações erradas a zero, incentivando a exploração e a experimentação criativa.
- [[Undo Send|Undo Send]] — Diminuiu o custo de envios de e-mail acidentais ou impulsivos por meio de um buffer temporário de tempo.

---

### Ficha Resumo da Variável

- **Nome da variável**: Custo do Erro
- **Definição**: Medida do impacto e gravidade das consequências de uma ação incorreta do usuário.
- **Objetivos de design relacionados**: Tolerância a falhas, redução de ansiedade operacional.
- **Artefatos chave relacionados**: [[Undo|Undo]], [[Undo Send|Undo Send]]
