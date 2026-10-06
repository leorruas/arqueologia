---
title: "Afinidade inferida"
type: "variavel"
status: "rascunho"
eixo: "baixa ↔ alta afinidade estimada pelo sistema"
tags:
  - design/variavel
  - arqueologia
---

# Afinidade inferida

Duas pessoas podem seguir a mesma conta e receber posições diferentes para a próxima publicação dela. **Afinidade inferida** compara quanto um sistema estima que existe uma relação de interesse, proximidade ou relevância entre um usuário e um autor, item, tema ou conjunto de conteúdos.

**Eixo:** baixa ↔ alta afinidade estimada pelo sistema.

O qualificativo “inferida” é essencial. Sistemas de recomendação aprendem preferências a partir de feedback explícito e implícito, mas interação observada não equivale a preferência declarada. Hu, Koren e Volinsky mostram por que feedback implícito precisa ser tratado em termos de confiança e incerteza: consumir ou clicar produz evidência, enquanto não interagir continua ambíguo.[^1]

## Relação vivida e relação modelada podem divergir

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], histórico de interação entre pessoas, atividade anterior e características do conteúdo podem participar das previsões de ranking. O sistema constrói uma representação operacional suficiente para ordenar candidatos; essa representação não precisa coincidir com a maneira como o usuário descreveria seus próprios vínculos.

A variável permite observar esse descompasso. Uma pessoa pode visitar repetidamente um perfil por conflito, trabalho ou curiosidade e produzir rastros que o sistema interprete como afinidade. Da mesma forma, uma relação importante pode gerar pouco comportamento mensurável.

Por isso, afinidade inferida não deve ser usada como sinônimo de amizade, preferência consciente ou identidade. Ela mede a força de uma relação **modelada para uma decisão computacional**.

## Como observar

Em sistemas públicos, raramente conhecemos o valor interno da afinidade. Podemos inferir sua presença a partir de documentação, experiências controladas, padrões de exposição e mudanças após interações. Em sistemas experimentais, ela pode aparecer como similaridade de embeddings, probabilidade de interação, peso de histórico ou outro score relacional.

Quanto mais esse valor influencia ranking, mais uma hipótese passada do sistema participa da exposição futura. Surge um circuito: a afinidade inferida aumenta exposição; maior exposição cria mais oportunidades de interação; essas interações podem fortalecer a própria afinidade inferida.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Afinidade inferida |
| **Eixo** | Baixa ↔ alta afinidade estimada pelo sistema |
| **Definição operacional** | Força estimada de uma relação de relevância entre usuário e autor, item, tema ou conjunto de conteúdos |
| **Como observar** | Scores de similaridade, probabilidade prevista de interação, histórico relacional e mudanças de ranking após novas interações |
| **O que não mede sozinho** | Amizade, preferência consciente, satisfação, intenção ou identidade |
| **Trade-offs principais** | Personaliza distribuição, mas pode reforçar interpretações antigas, ambíguas ou autoalimentadas do comportamento |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]] |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Hu, Yifan; Koren, Yehuda; Volinsky, Chris. “Collaborative Filtering for Implicit Feedback Datasets”. *2008 Eighth IEEE International Conference on Data Mining*, 2008, pp. 263–272. DOI: https://doi.org/10.1109/ICDM.2008.22

[^2]: Meta AI. “Instagram Feed Ranking System Card”. 23 fev. 2022. https://ai.meta.com/tools/system-cards/instagram-feed-ranking/
