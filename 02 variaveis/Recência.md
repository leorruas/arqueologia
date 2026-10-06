---
title: "Recência"
type: "variavel"
status: "rascunho"
eixo: "antigo ↔ recente"
tags:
  - design/variavel
  - arqueologia
---

# Recência

Duas publicações podem ser igualmente relevantes para uma pessoa e ainda receber posições diferentes porque uma acabou de ser publicada. **Recência** compara a proximidade temporal entre um item e o momento em que ele é avaliado ou apresentado.

**Eixo:** antigo ↔ recente.

A variável é especialmente importante em sistemas em que o valor informacional envelhece. A literatura de recomendação trata dinâmica temporal como problema próprio porque preferências e popularidade mudam ao longo do tempo; modelos time-aware incorporam tempo justamente para evitar tratar interações antigas e recentes como equivalentes.[^1]

## O relógio pode ser regra ou sinal

Num feed cronológico, recência é a regra principal de ordenação. No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], ela continua existindo, mas passa a competir com relações, comportamento passado e outras previsões. Isso transforma o tempo de critério dominante em um sinal entre vários.

Essa mudança é arqueologicamente importante. Quando a ordem deixa de ser “mais novo primeiro”, conteúdo antigo pode continuar visível se outros sinais compensarem sua idade. Ao mesmo tempo, conteúdo recente pode receber oportunidades iniciais de exposição antes de acumular histórico.

Recência também deve ser separada de [[02 variaveis/Momentum de atenção|momentum de atenção]]. Um post pode ser muito recente e receber pouca interação; outro pode ser um pouco mais antigo e estar acumulando respostas rapidamente.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Recência |
| **Eixo** | Antigo ↔ recente |
| **Definição operacional** | Proximidade temporal entre criação ou atualização de um item e o momento de avaliação/apresentação |
| **Como observar** | Idade do item, tempo desde publicação, time decay e janelas temporais |
| **O que não mede sozinho** | Popularidade, relevância pessoal, novidade percebida ou ritmo de crescimento |
| **Trade-offs principais** | Favorecer recência melhora atualização, mas pode reduzir permanência de conteúdo ainda relevante |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]] |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Koren, Yehuda. “Collaborative Filtering with Temporal Dynamics”. *Proceedings of KDD 2009*, 2009. DOI: https://doi.org/10.1145/1557019.1557072. Ver também revisões de news recommender systems que tratam recência, frescor e tendências como características temporais distintas.
