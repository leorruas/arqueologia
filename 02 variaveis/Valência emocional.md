---
title: "Valência emocional"
type: "variavel"
status: "rascunho"
eixo: "negativa ↔ positiva"
tags:
  - design/variavel
  - arqueologia
---

# Valência emocional

Um conteúdo pode produzir uma experiência agradável, desagradável ou próxima da neutralidade. **Valência emocional** é a variável usada aqui para comparar a direção afetiva associada a uma experiência, mensagem ou estímulo.

**Eixo:** negativa ↔ positiva.

A variável se apoia em uma tradição consolidada da psicologia do afeto. No modelo circumplexo de James A. Russell, prazer e desprazer formam uma dimensão fundamental da experiência afetiva, distinta da ativação ou arousal.[^1] Essa separação é útil para o estudo de plataformas porque conteúdos negativos e positivos podem produzir níveis semelhantes de ativação e ainda gerar comportamentos muito diferentes.

## Valência descreve direção, não força

Valência ajuda a distinguir agradável de desagradável. Ela não informa, sozinha, quão intensa ou ativadora é a experiência. Raiva e tristeza podem ter valência negativa, mas diferem fortemente em ativação; entusiasmo e serenidade podem ter valência positiva e também produzir estados muito diferentes.

Essa distinção aparece em pesquisas sobre circulação de conteúdo. Berger e Milkman encontraram que conteúdo positivo foi, em média, mais compartilhado que conteúdo negativo no conjunto analisado, mas mostraram também que valência isolada não explica a propagação: emoções negativas de alta ativação, como raiva e ansiedade, podiam circular mais do que emoções negativas de baixa ativação, como tristeza.[^2]

Por isso, [[02 variaveis/Valência emocional|valência emocional]] deve ser lida junto de [[02 variaveis/Ativação emocional|ativação emocional]]. O eixo positivo ↔ negativo organiza uma dimensão do afeto, não uma escala universal de capacidade de engajar.

## Do conteúdo ao ranking existe uma mediação comportamental

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], a documentação pública da Meta descreve sinais e previsões como likes, saves, taps, visualização e histórico de interação.[^3] Ela não apresenta valência emocional como um sinal declarado do ranking do Feed.

A relação proposta pelo projeto é indireta e deve permanecer marcada como hipótese: uma propriedade emocional pode alterar a probabilidade de determinado comportamento; esse comportamento produz um sinal; o sistema pode usar esse sinal para prever e ordenar exposições futuras.

A cadeia analítica é:

**valência do conteúdo → resposta humana → comportamento observável → sinal de ranking → oportunidade de nova exposição**

Isso significa que um sistema pode favorecer indiretamente certos tipos de conteúdo sem possuir internamente uma variável chamada “positivo”, “negativo” ou “raiva”. O efeito dependerá dos comportamentos que essas propriedades realmente produzem e do valor que o ranking atribui a esses comportamentos.

## Como observar

Valência pode ser medida por auto-relato, escalas afetivas, avaliação humana de conteúdo ou modelos de classificação. Essas estratégias não são equivalentes. A emoção expressa por uma mensagem, a emoção percebida por um observador e a emoção efetivamente sentida por ele podem divergir.

Em estudos de design, é importante indicar qual dessas camadas está sendo medida. Classificar uma legenda como negativa não demonstra que todas as pessoas que a veem experimentaram afeto negativo.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Valência emocional |
| **Eixo** | Negativa ↔ positiva |
| **Definição operacional** | Direção afetiva de uma experiência, mensagem ou estímulo em relação a desprazer/prazer |
| **Como observar** | Auto-relato, escalas afetivas, codificação humana de conteúdo e classificadores, sempre distinguindo emoção expressa, percebida e sentida |
| **O que não mede sozinho** | Intensidade, ativação, propagação, satisfação, moralidade ou probabilidade de engajamento |
| **Trade-offs principais** | Simplifica comparação afetiva, mas pode ocultar diferenças importantes entre emoções com a mesma valência |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]] |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Economia da Atencao|Economia da atenção]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |

## Referências

[^1]: Russell, James A. “A Circumplex Model of Affect”. *Journal of Personality and Social Psychology*, 39(6), 1980, pp. 1161–1178. DOI: https://doi.org/10.1037/h0077714

[^2]: Berger, Jonah; Milkman, Katherine L. “What Makes Online Content Viral?”. *Journal of Marketing Research*, 49(2), 2012, pp. 192–205. DOI: https://doi.org/10.1509/jmr.10.0353

[^3]: Meta AI. “Instagram Feed Ranking System Card”. Atualizado em 23 fev. 2022. https://ai.meta.com/tools/system-cards/instagram-feed-ranking/
