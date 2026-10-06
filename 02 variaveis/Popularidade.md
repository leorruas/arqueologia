---
title: "Popularidade"
type: "variavel"
status: "rascunho"
eixo: "baixa ↔ alta acumulação de atenção social observável"
tags:
  - design/variavel
  - arqueologia
---

# Popularidade

Um conteúdo pode acumular milhares de reações sem estar crescendo rapidamente naquele momento. **Popularidade** compara o volume de atenção social observável que um item já acumulou.

**Eixo:** baixa ↔ alta acumulação de atenção social observável.

A variável pode ser operacionalizada por visualizações, curtidas, compartilhamentos, comentários, visitas ou combinações dessas métricas. O denominador importa: popularidade absoluta, taxa por impressão e posição relativa dentro de uma categoria descrevem situações diferentes.

## Acúmulo não é velocidade

Sistemas de recomendação usam popularidade de várias maneiras, desde contagens simples até features combinadas com personalização. Revisões de sistemas de recomendação de notícias tratam popularidade, recência, frescor e tendências como dimensões distintas, justamente porque um item muito acumulado pode já estar perdendo força enquanto outro cresce rapidamente.[^1]

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], informações sobre o desempenho agregado do post podem participar do ranking. O interesse do projeto está em separar esse estado acumulado de [[02 variaveis/Momentum de atenção|momentum de atenção]], que observa o ritmo recente de novas interações.

Popularidade também precisa ser distinguida de prova social. A primeira é um estado mensurável do conteúdo. Prova social aparece quando pessoas percebem sinais dessa popularidade e alteram seu próprio comportamento em resposta. Experimentos como o de Muchnik, Aral e Taylor mostram que avaliações sociais exibidas podem produzir efeitos de influência e acumulação posteriores.[^2]

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Popularidade |
| **Eixo** | Baixa ↔ alta acumulação de atenção social observável |
| **Definição operacional** | Volume acumulado de interações ou exposições associado a um item |
| **Como observar** | Visualizações, likes, comentários, compartilhamentos, seguidores, taxas normalizadas e posição relativa |
| **O que não mede sozinho** | Qualidade, satisfação, crescimento recente, relevância individual ou prova social percebida |
| **Trade-offs principais** | Facilita identificar conteúdo socialmente validado, mas pode reforçar vantagens iniciais e concentração de visibilidade |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]] |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Karimi, Mozhgan et al. “News recommender system: a review of recent progress, challenges, and opportunities”. *Artificial Intelligence Review*, 2021. A revisão distingue popularidade, recência, frescor e tendências como características relevantes de recomendação temporal.

[^2]: Muchnik, Lev; Aral, Sinan; Taylor, Sean J. “Social Influence Bias: A Randomized Experiment”. *Science*, 341(6146), 2013, pp. 647–651. DOI: https://doi.org/10.1126/science.1240466
