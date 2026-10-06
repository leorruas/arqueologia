---
title: "Tendência em plataformas"
type: "conceito"
status: "rascunho"
origem: "literatura + adaptação"
grau: "debatido"
tags:
  - design/conceito
  - arqueologia
---

# Tendência em plataformas

Um assunto pode ser muito popular sem estar emergindo. Outro pode ainda ter pouco volume absoluto e, mesmo assim, estar crescendo rápido o suficiente para se tornar um “hot topic”. **Tendência em plataformas** descreve um padrão temporal de atenção coletiva em que um tema, formato ou item ganha intensidade durante um intervalo e se torna mais saliente no fluxo de conteúdo.

A literatura de detecção de eventos oferece um antecedente importante. Kleinberg modelou *bursts* como aumentos abruptos de frequência em fluxos de documentos, justamente para distinguir atividade comum de períodos em que certos termos passam a ocorrer com intensidade excepcional.[^1] Estudos posteriores de social media analisaram tendências como fenômenos de formação, persistência e decaimento, mostrando que elas não se resumem a contagem acumulada.[^2]

No Arqueologia do Design, tendência é tratada como **conceito composto**, porque depende da combinação de várias variáveis temporais e sociais.

## Quatro perguntas diferentes

[[02 variaveis/Recência|Recência]] pergunta **quão novo é** um item.

[[02 variaveis/Popularidade|Popularidade]] pergunta **quanto de atenção já se acumulou**.

[[02 variaveis/Momentum de atenção|Momentum de atenção]] pergunta **quão rapidamente novas interações estão chegando agora**.

Tendência pergunta se esse padrão temporal e coletivo é suficientemente distinto do comportamento de fundo para caracterizar uma emergência, um pico ou uma fase de persistência.

Por isso, um conteúdo antigo pode ser popular e deixar de ser tendência. Um conteúdo recente pode ter baixa popularidade e nenhum momentum. Um item ainda pequeno pode apresentar momentum alto e estar no começo de uma tendência. A literatura de recomendação de notícias separa justamente recência, popularidade e tendências entre os fatores temporais relevantes para sistemas que precisam reagir a conteúdo efêmero.[^3]

## Tendência pode ser produzida pelo próprio sistema

Quando uma plataforma identifica crescimento e aumenta a exposição de um item, a classificação como tendência pode participar daquilo que mede. Pesquisas sobre trending topics no Twitter mostram que aparecer numa área de tendências pode gerar exposição adicional e produzir novos tweets, ainda que o efeito estimado em alguns estudos seja modesto.[^4]

Isso cria uma circularidade importante para a arqueologia do design:

**crescimento observado → classificação como emergente → exposição ampliada → novo crescimento observado**

O circuito não prova manipulação nem significa que toda tendência seja artificial. Ele mostra que uma plataforma pode atuar simultaneamente como sensor e amplificador da atenção coletiva.

O [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]] torna essa distinção explícita em produto. A documentação atual separa detecção de tendências de recomendação de tendências: primeiro o sistema acompanha contagens em diferentes durações e produz um score estatístico de quão “trendy” é um candidato; depois recupera e ranqueia tendências segundo localização, interesses, similaridade e engajamento. Assim, detectar emergência e decidir quem deve vê-la são operações distintas.

No [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], a documentação de ranking descreve sinais sobre quantas pessoas interagem com um post e quão rapidamente essas interações ocorrem. Isso dá suporte à distinção entre [[02 variaveis/Popularidade|popularidade]] e [[02 variaveis/Momentum de atenção|momentum]], mas não significa que o Feed possua uma feature pública chamada “tendência”. O conceito serve para interpretar padrões emergentes produzidos pela combinação desses sinais.

## No TikTok, tendência pode ser também uma gramática

No [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]], tendência ganha uma propriedade produtiva que não é central nos [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]]. Hashtags, sons, challenges, coreografias e formatos podem sinalizar emergência e, ao mesmo tempo, oferecer ao usuário uma estrutura pronta para criar uma nova ocorrência.

A literatura sobre TikTok descreve essa dinâmica em termos de mimesis, imitation publics e performances meméticas. Recursos como “Use this Sound” e Duet tornam parte do conteúdo tecnicamente reutilizável e reduzem o custo de participar de um padrão já reconhecido. A tendência deixa de ser apenas algo observado e pode funcionar como instrução implícita de produção.

Essa diferença cria um circuito específico:

**emergência → reconhecimento → reutilização → variação → nova circulação → reforço da emergência**

A relação com [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]] é funcional e comparativa. Uma trend bem estabelecida preserva elementos suficientes para que as variações pertençam à mesma família, mas precisa deixar espaço para diferença. Pesquisa recente sobre vídeos de dança no TikTok encontrou associação não linear entre tipicidade e engajamento, sugerindo que aderência excessiva ou afastamento excessivo do padrão podem ter desempenho inferior a variações moderadamente distintas.

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Tendência em plataformas |
| **Origem** | Literatura + adaptação |
| **Grau de consolidação** | Debatido; existem tradições de burst detection, trend detection e temporal recommendation, mas os critérios variam entre plataformas |
| **Formulação associada a** | Detecção de bursts, dinâmica temporal de popularidade e estudos de trending topics |
| **Área principal** | Sistemas de recomendação / mineração de dados / social media |
| **Distinção central** | Estado acumulado de popularidade ↔ padrão temporal de emergência, pico, persistência ou decaimento |
| **O que ajuda a explicar** | Como um assunto pode “esquentar” antes de ser o mais popular e como sistemas podem detectar e amplificar esse crescimento |
| **O que não explica sozinho** | Causa do crescimento, qualidade, relevância individual, espontaneidade ou origem da coordenação |
| **Artefatos-chave** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]], [[03 artefatos/Feed Para Voce do TikTok|Feed Para Você do TikTok]] |
| **Variáveis relacionadas** | [[02 variaveis/Recência|Recência]], [[02 variaveis/Popularidade|Popularidade]], [[02 variaveis/Momentum de atenção|Momentum de atenção]] |
| **Genealogias relacionadas** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]], [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]] |

## Referências

[^1]: Kleinberg, Jon. “Bursty and Hierarchical Structure in Streams”. *Proceedings of the 8th ACM SIGKDD International Conference on Knowledge Discovery and Data Mining*, 2002, pp. 91–101. DOI: https://doi.org/10.1145/775047.775061

[^2]: Asur, Sitaram; Huberman, Bernardo A.; Szabo, Gabor; Wang, Chunyan. “Trends in Social Media: Persistence and Decay”. *Proceedings of the International AAAI Conference on Web and Social Media*, 5(1), 2011, pp. 434–437. DOI: https://doi.org/10.1609/icwsm.v5i1.14167

[^3]: Raza, Shaina; Ding, Chen. “News recommender system: a review of recent progress, challenges, and opportunities”. *Artificial Intelligence Review*, 55, 2022, pp. 749–800. DOI: https://doi.org/10.1007/s10462-021-10043-x

[^4]: Schlessinger, Joseph; Garimella, Kiran; Jakesch, Maurice; Eckles, Dean. “Effects of Algorithmic Trend Promotion: Evidence from Coordinated Campaigns in Twitter's Trending Topics”. 2023. O estudo encontra efeito estatisticamente significativo, porém modesto, da promoção em tendências sobre produção posterior de tweets.


[^5]: X Help Center. “Trends Recommendations”. Consultado em 6 out. 2026. A documentação atual separa Trends Detection, Candidate Retrieval, Trends Ranking e Feedback Collection. https://help.x.com/en/resources/recommender-systems/trends-recommendations


[^6]: Zulli, Diana; Zulli, David James. “Extending the Internet meme: Conceptualizing technological mimesis and imitation publics on the TikTok platform”. *New Media & Society*, 24(8), 2022. DOI: https://doi.org/10.1177/1461444820983603

[^7]: Matamoros-Fernández, Ariadna. “Taking Humor Seriously on TikTok”. *Social Media + Society*, 9(1), 2023. DOI: https://doi.org/10.1177/20563051231157609

[^8]: Bravin, Marc et al. “How Closely Should You Follow a Trend? Atypicality and Engagement on Social Media”. *Journal of Marketing*, 90(5), 2026. DOI: https://doi.org/10.1177/00222429261466668
