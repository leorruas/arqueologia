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

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], informações sobre o desempenho agregado do post podem participar do ranking. No [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]], volume também entra no cálculo, mas a própria documentação distingue assuntos populares agora de assuntos populares por períodos mais longos, mostrando que contagem acumulada não basta para definir tendência. O interesse do projeto está em separar esse estado acumulado de [[02 variaveis/Momentum de atenção|momentum de atenção]], que observa o ritmo recente de novas interações.

No [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]], popularidade também aparece como contexto de recomendação. O recurso “Por que este vídeo” já explicou recomendações com razões como conteúdo popular na região, e a documentação atual lista número de visualizações entre informações do conteúdo. Isso não transforma popularidade em preferência individual; ela funciona como evidência de estado coletivo que pode ser combinada com sinais pessoais.

Popularidade também precisa ser distinguida de prova social. A primeira é um estado mensurável do conteúdo. Prova social aparece quando pessoas percebem sinais dessa popularidade e alteram seu próprio comportamento em resposta. Experimentos como o de Muchnik, Aral e Taylor mostram que avaliações sociais exibidas podem produzir efeitos de influência e acumulação posteriores.[^2]

O [[03 artefatos/Radar da Virada|Radar da Virada]] reúne sinais em uma visualização denominada *Mais ditas*, com 24 horas de referência e uma legenda que associa tamanho a “alcance (views por hora)”. Essa redação expõe uma dificuldade de mensuração: um estoque acumulado de visualizações, uma taxa horária e o alcance de pessoas distintas são indicadores diferentes. A ausência de documentação da fórmula impede determinar qual deles é efetivamente representado. Essa distinção deve acompanhar toda comparação de atenção entre plataformas.

O problema da contagem também pode ser concreto: em outubro de 2026, a Meta reconheceu uma falha técnica em métricas de vídeo do Instagram após relatos de visualizações aparentemente inconsistentes.[^3] O caso é analisado no [[03 artefatos/Feed algoritmico do Instagram|feed algorítmico do Instagram]] e no [[05 percursos/Como funciona a distribuicao no Instagram|guia prático]]. Ele não comprova que o ranking tenha mudado; mostra que **a confiabilidade dos números exibidos precisa ser verificada antes de atribuir uma diferença de desempenho a um mecanismo de recomendação**.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Popularidade |
| **Eixo** | Baixa ↔ alta acumulação de atenção social observável |
| **Definição operacional** | Volume acumulado de interações ou exposições associado a um item |
| **Como observar** | Visualizações, likes, comentários, compartilhamentos, seguidores, taxas normalizadas e posição relativa |
| **O que não mede sozinho** | Qualidade, satisfação, crescimento recente, relevância individual ou prova social percebida |
| **Trade-offs principais** | Facilita identificar conteúdo socialmente validado, mas pode reforçar vantagens iniciais e concentração de visibilidade |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]], [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]] |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Tendência em plataformas|Tendência em plataformas]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Karimi, Mozhgan et al. “News recommender system: a review of recent progress, challenges, and opportunities”. *Artificial Intelligence Review*, 2021. A revisão distingue popularidade, recência, frescor e tendências como características relevantes de recomendação temporal.

[^2]: Muchnik, Lev; Aral, Sinan; Taylor, Sean J. “Social Influence Bias: A Randomized Experiment”. *Science*, 341(6146), 2013, pp. 647–651. DOI: https://doi.org/10.1126/science.1240466

[^3]: Strickland, Fernanda; Souza, Renato. “Eleições: Meta admite falha na contagem de visualizações em vídeos no Instagram”. *Correio Braziliense*, 8 out. 2026. https://www.correiobraziliense.com.br/politica/2026/10/7517736-eleicoes-meta-admite-falha-na-contagem-de-visualizacoes-em-videos-no-instagram.html
