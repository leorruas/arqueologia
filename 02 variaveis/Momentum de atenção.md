---
title: "Momentum de atenção"
type: "variavel"
status: "rascunho"
eixo: "baixo ↔ alto ritmo recente de acumulação de interações"
tags:
  - design/variavel
  - arqueologia
---

# Momentum de atenção

Dois posts podem ter dez mil curtidas e estar em situações completamente diferentes. Um levou semanas para chegar ali e quase parou de crescer; o outro alcançou o mesmo número em uma hora. **Momentum de atenção** é a variável proposta por este projeto para comparar o ritmo recente com que novas interações se acumulam sobre um item.

**Eixo:** baixo ↔ alto ritmo recente de acumulação de interações.

A formulação é uma hipótese operacional do Arqueologia do Design. Ela se apoia em duas bases: literatura de recomendação que trata dinâmica temporal, tendências e popularidade como fenômenos variáveis no tempo,[^1] e documentação de plataformas que considera não apenas quantas interações um conteúdo recebeu, mas também a rapidez com que elas aparecem.

## Popularidade é estoque; momentum é fluxo

[[02 variaveis/Popularidade|Popularidade]] descreve o que já se acumulou. Momentum descreve **a velocidade recente desse acúmulo**. Um item pode ter popularidade alta e momentum baixo; outro pode ter popularidade pequena e momentum alto.

Essa separação ajuda a analisar “hot topics” sem transformar tendência em rótulo vago. Uma tendência pode envolver recência, volume absoluto, aceleração, concentração temporal e contexto. Momentum isola somente uma dessas dimensões.

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], essa variável ajuda a interpretar sinais de crescimento rápido como informação distinta da contagem acumulada. No [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]], a documentação atual oferece uma implementação ainda mais próxima da ideia: contagens são acompanhadas em diferentes durações em tempo real e usadas por algoritmos estatísticos para produzir scores de tendência. O projeto Arqueologia do Design não afirma que exista internamente uma feature chamada “momentum”; trata a ideia como operacionalização para comparar ritmos de atenção.

No [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]], o próprio Creative Center torna o ritmo observável externamente: hashtags podem ser examinadas por período e trendline, além de volume de posts, visualizações e popularidade regional. Isso não revela a fórmula interna do Para Você, mas oferece uma superfície pública em que criadores conseguem observar parte da dinâmica temporal que chamamos de momentum.

A consequência comportamental é importante. Uma tendência produtiva pode acelerar porque novas pessoas não precisam inventar um formato do zero; sons, hashtags e challenges reduzem o custo de produzir ocorrências adicionais. Nesse caso, [[04 genealogias/Gramaticas Produtivas|gramática produtiva]] e momentum se conectam: a estrutura reutilizável pode aumentar a taxa de novas variações, enquanto o crescimento torna a própria estrutura mais visível.

## Como observar

Uma medida simples pode ser interações novas por unidade de tempo. Medidas mais robustas podem normalizar por alcance, tamanho da audiência, idade do conteúdo ou exposição disponível. Dependendo do problema, também pode ser útil observar aceleração ou desaceleração da taxa.

A variável não prova interesse coletivo espontâneo. Um pico pode resultar de impulsionamento, cobertura externa, recomendação algorítmica ou coordenação. O próprio ranking pode aumentar exposição e, com isso, aumentar o momentum que depois observa, criando um circuito de retroalimentação.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Momentum de atenção |
| **Eixo** | Baixo ↔ alto ritmo recente de acumulação de interações |
| **Definição operacional** | Velocidade recente com que um item recebe novas interações ou exposições |
| **Como observar** | Interações por unidade de tempo, crescimento normalizado por exposição, variação recente da taxa |
| **O que não mede sozinho** | Popularidade acumulada, relevância individual, qualidade, espontaneidade ou causa do crescimento |
| **Trade-offs principais** | Detecta conteúdos emergentes, mas pode amplificar picos produzidos pelo próprio sistema ou por coordenação externa |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]], [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]] |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Tendência em plataformas|Tendência em plataformas]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

Esta variável é uma operacionalização própria da Arqueologia do Design.

[^1]: Koren, Yehuda. “Collaborative Filtering with Temporal Dynamics”. *Proceedings of KDD 2009*, 2009. DOI: https://doi.org/10.1145/1557019.1557072. Ver também Karimi et al., “News recommender system: a review of recent progress, challenges, and opportunities”, *Artificial Intelligence Review*, 2021, sobre popularidade, recência e tendências em recomendação temporal.
