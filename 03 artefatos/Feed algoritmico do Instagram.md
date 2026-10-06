---
title: "Feed algorítmico do Instagram"
type: "artefato"
status: "rascunho"
tags:
  - design/artefato
  - arqueologia
---

# Feed algorítmico do Instagram

Durante os primeiros anos do Instagram, havia uma regra relativamente simples para explicar por que uma foto aparecia antes de outra: ela era mais recente. Abrir o aplicativo significava entrar numa fila temporal formada por contas que a pessoa havia escolhido seguir. Em 2016, essa regra perdeu o comando. O Instagram começou a ordenar o feed por previsões sobre aquilo que cada pessoa provavelmente consideraria mais relevante.[^1]

A mudança parecia resolver um problema de abundância. Segundo o anúncio da época, usuários deixavam de ver cerca de 70% das publicações disponíveis no feed. Quando já existe mais conteúdo do que tempo para percorrê-lo, a cronologia deixa de garantir acesso efetivo ao que alguém gostaria de ver. O problema de design passa a ser escolher por antecipação.

Essa escolha altera algo maior que a ordem dos posts. A posição de uma publicação deixa de depender principalmente de quando ela entrou na fila e passa a depender de uma inferência sobre quem está olhando. Relevância torna-se uma previsão personalizada.

## Quando o relógio perdeu o comando

O Instagram foi lançado em 2010 com um fluxo cronológico de fotos. A plataforma documenta retrospectivamente essa fase ao explicar que o crescimento do volume de conteúdo tornou cada vez mais difícil acompanhar tudo o que era publicado pelas contas seguidas.[^2] Em março de 2016, anunciou que começaria a reorganizar o feed segundo a probabilidade de interesse, a relação entre as pessoas e a atualidade do post; em junho daquele ano, a mudança foi distribuída amplamente.[^1]

O Instagram não inventou o feed ranqueado. Facebook e Twitter já experimentavam formas de priorização algorítmica em redes sociais. Seu papel histórico aqui é outro: transformar a ordem prevista por relevância em regra cotidiana de uma enorme rede visual baseada em contas seguidas. A cronologia continuou possível como princípio, mas deixou de ser o default dominante.

Essa troca modifica silenciosamente o contrato do gesto de seguir. Numa fila puramente cronológica, seguir uma conta significa que suas publicações entram no fluxo em posição determinada pelo tempo. Num feed ranqueado, seguir continua dando acesso ao conjunto de candidatos, mas já não determina a posição que cada publicação receberá. Entre “eu escolhi acompanhar esta conta” e “eu verei esta publicação” aparece uma nova camada de decisão.

A interpretação arqueológica proposta aqui é que o feed algorítmico transforma **ordenação em curadoria preditiva**. O sistema não precisa esperar que a pessoa procure, compare ou abra cada perfil. Ele tenta reduzir esse [[02 variaveis/Custo de Busca|custo de busca]] antecipando aquilo que merece ser colocado no primeiro plano.

## Relevância virou uma previsão

A documentação técnica da Meta ajuda a desmontar a palavra “algoritmo”, que frequentemente faz o sistema parecer uma única fórmula secreta. O sistema de ranking do Feed descrito em 2022 começa reunindo publicações candidatas, aplica filtros de integridade e então produz previsões sobre ações possíveis, como curtir, salvar, tocar em um perfil ou assistir a um vídeo. Essas previsões são combinadas em uma pontuação usada para ordenar o conteúdo.[^2]

Em 2023, a Meta publicou cartões separados para Feed, recomendações no Feed, Stories, Explore, Reels e outras superfícies, deixando explícito que Instagram usa diversos sistemas, modelos e sinais, e que eles mudam ao longo do tempo.[^3] A expressão “algoritmo do Instagram” funciona, portanto, como atalho cultural para uma família dinâmica de mecanismos de seleção.

Essa família depende de rastros que outras decisões de interface tornam fáceis de produzir. O [[03 artefatos/Botao Like|Botão Like]] comprime uma reação social em um sinal computável. Assistir, salvar, compartilhar, seguir, ocultar ou permanecer diante de um conteúdo também podem produzir informação sobre a relação entre pessoa e publicação. O feed ranqueado pega esses sinais e os transforma em entrada para uma decisão futura de visibilidade.

Surge um circuito: **o sistema mostra → a pessoa reage → a reação vira dado → o sistema recalcula o que mostrar**. A cronologia também seleciona, porque torna o tempo o critério de prioridade. A diferença é que seu critério é relativamente legível e igual para todos. O ranking personalizado produz uma ordem diferente para cada pessoa a partir de inferências que ela não reconstrói integralmente olhando para a tela.

A hipótese de design embutida nessa mudança parece ser simples: comportamento passado, relações sociais e propriedades do conteúdo conseguem prever o valor futuro de uma publicação melhor que a recência isolada. Essa hipótese pode funcionar muito bem sem que o sistema “saiba” o que alguém realmente quer. Ele precisa apenas ordenar candidatos de modo que suas previsões sejam suficientemente úteis para sustentar a experiência.

## O que o sistema chama de engajamento

A palavra “engajamento” tende a esconder diferenças que importam para o ranking. A literatura de mídias sociais trata engajamento como construto multidimensional e mostra que métricas comportamentais funcionam frequentemente como proxies para algo mais amplo do que o sistema consegue observar diretamente.[^9] Para este estudo, portanto, [[01 conceitos/Engajamento em plataformas digitais|engajamento em plataformas digitais]] funciona como conceito guarda-chuva, enquanto os sinais são analisados separadamente.

[[02 variaveis/Tempo de permanência|Tempo de permanência]] registra duração sem provar satisfação. [[02 variaveis/Propagação|Propagação]] observa quando o conteúdo é redistribuído para outras pessoas. [[02 variaveis/Recência|Recência]] registra proximidade temporal. [[02 variaveis/Popularidade|Popularidade]] observa o volume já acumulado de atenção social. [[02 variaveis/Momentum de atenção|Momentum de atenção]] separa desse estoque o ritmo recente de novas interações. [[02 variaveis/Afinidade inferida|Afinidade inferida]] descreve a força da relação que o sistema estima entre usuário e autor, tema ou conteúdo.

Essa decomposição ajuda a entender a mecânica do ranking. Um sistema pode estimar probabilidades diferentes para permanecer, curtir, comentar, compartilhar, salvar ou visitar um perfil e depois combinar essas previsões numa decisão de ordenação. Em sistemas de recomendação, feedback implícito é valioso justamente porque aparece em escala, mas permanece ruidoso e ambíguo: interação observada oferece evidência; ausência de interação não funciona automaticamente como rejeição.[^10]

Podemos representar abstratamente essa transformação como uma coleção de previsões, e não como uma fórmula publicada do Instagram: P(permanecer), P(curtir), P(comentar), P(enviar), P(visitar perfil) e outras. Para produzir uma ordem única, essas previsões precisam ser combinadas segundo objetivos e pesos. Sistemas industriais de recomendação usam arquiteturas multiobjetivo e multitarefa porque diferentes comportamentos carregam informações e valores operacionais diferentes.[^11]

A decisão de peso é uma decisão de design. Se enviar recebe mais importância do que curtir em determinada superfície, o sistema aumenta a oportunidade de conteúdos com maior probabilidade prevista de propagação. Se tempo de permanência pesa mais, outros conteúdos podem ganhar vantagem. O ranking não precisa possuir uma regra explícita sobre cada propriedade cultural do conteúdo para produzir efeitos culturais; basta que certas propriedades humanas aumentem comportamentos aos quais o sistema atribui valor.

Há ainda propriedades do conteúdo que podem influenciar esses sinais sem aparecer como sinais declarados do ranking. [[02 variaveis/Valência emocional|Valência emocional]] é uma delas. A literatura encontra relações entre direção afetiva e compartilhamento, mas também mostra que positivo versus negativo é insuficiente para explicar circulação sem considerar ativação emocional.[^13] Na documentação pública do Feed consultada, a Meta descreve previsões comportamentais e atributos do post, sem declarar valência emocional como variável de ranking.[^14] A hipótese do projeto é, portanto, mediada: propriedade emocional → comportamento → sinal → ranking.

Isso também separa popularidade de tendência. Popularidade registra quanto já aconteceu. Momentum registra quão rapidamente está acontecendo agora. A literatura de recomendação trata dinâmica temporal, popularidade, recência e tendências como dimensões distintas porque o valor dos itens e as preferências dos usuários mudam com o tempo.[^12]

## De acompanhar pessoas a descobrir conteúdos

A transformação seguinte aparece quando o feed deixa de ordenar apenas aquilo que vem das contas seguidas e começa também a inserir recomendações de contas desconhecidas. Em 2022, o Instagram reintroduziu as visualizações **Following** e **Favorites** em ordem cronológica, enquanto descrevia o feed principal como um espaço que receberia cada vez mais recomendações baseadas em interesses.[^4]

A arquitetura técnica publicada em 2023 mostra a escala dessa mudança. Para recomendações de conteúdo “não conectado”, os sistemas podem partir de dezenas de bilhões de candidatos, reduzir o conjunto para milhares e depois para algumas centenas antes da classificação final.[^5] O problema deixa de ser somente ordenar uma rede social já construída. O sistema também precisa descobrir, entre um universo enorme, aquilo que pode merecer entrada na rede perceptiva de cada usuário.

Isso torna o ranking uma política de distribuição. Em 2024, o Instagram anunciou mudanças destinadas a ampliar a exposição inicial de criadores menores, substituir reposts por conteúdo original em recomendações e retirar determinados agregadores da elegibilidade para recomendações.[^6] A plataforma não estava apenas recalculando preferências individuais. Estava decidindo que tipos de origem deveriam ganhar mais oportunidade de circulação.

Em janeiro de 2026, a Meta afirmou que 75% das recomendações vistas nos Estados Unidos no Instagram já vinham de posts originais, depois de mudanças voltadas a aumentar a presença desse conteúdo.[^7] Esse dado é específico ao contexto anunciado pela empresa, mas mostra como critérios editoriais, econômicos e de produto podem entrar na própria infraestrutura de ranking.

A interpretação arqueológica aqui é que “relevância” nunca é apenas uma propriedade descoberta pelo modelo. Ela é produzida por uma combinação de previsão, elegibilidade, objetivos e escolhas sobre o que vale a pena testar. O feed decide tanto **quem parece gostar de quê** quanto **o que pode concorrer por esse gosto**.

## Quem treina quem?

A personalização cria uma relação circular. Usuários treinam o sistema ao agir; o sistema reorganiza o ambiente em que as ações seguintes ocorrerão. Em 2024, o Instagram anunciou uma ferramenta para zerar recomendações em Explore, Reels e Feed e reconstruí-las a partir das novas interações.[^8] A existência desse mecanismo torna visível um problema que a própria personalização produz: um modelo aprendido pode continuar representando interesses que a pessoa já não quer reforçar.

Também há controles que devolvem parte da ordenação ao usuário, como Following e Favorites cronológicos. Eles mostram que autonomia aqui não depende apenas de conseguir parar de rolar. Ela depende também de quem decide quais candidatos entram no primeiro plano e de quão fácil é corrigir essa decisão. Isso aproxima o artefato de [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]].

O poder permanece assimétrico. A pessoa pode seguir, curtir, ocultar, trocar para uma visão cronológica ou resetar recomendações. A plataforma define os objetivos centrais dos sistemas, os sinais que entram no cálculo, políticas de elegibilidade e mudanças posteriores de distribuição. Uma publicação pode continuar existindo e ainda assim perder visibilidade sem que o usuário consiga reconstruir todo o caminho que produziu essa ausência.

Para criadores, essa infraestrutura provavelmente produz uma adaptação recíproca: quando certos sinais parecem aumentar distribuição, formatos passam a ser imaginados também em relação ao sistema que os mede. Essa é uma hipótese em aberto e precisa de estudo próprio antes de virar regra histórica. O ponto seguro é que o feed torna a distribuição responsiva ao comportamento e, por isso, cria incentivos para que usuários e produtores tentem compreender seus critérios.

O parentesco com [[03 artefatos/Infinite Scroll|Infinite Scroll]] ajuda a separar duas operações frequentemente confundidas. Infinite Scroll remove um ponto de parada e torna barato continuar. O feed algorítmico decide **o que ocupará essa continuidade**. O [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]] combina essa seleção com outra gramática de consumo: uma unidade dominante, descarte por swipe e aprendizado durante a própria sequência.

Talvez a consequência mais profunda do ranking personalizado apareça quando previsão e preferência começam a formar um ciclo. Se o sistema usa nosso comportamento para prever o que veremos e aquilo que vemos condiciona as próximas oportunidades de comportamento, a pergunta deixa de ser apenas se o algoritmo “acerta” nossos interesses. A tensão passa a ser **quando uma previsão de relevância começa também a participar da produção daquilo que aprendemos a considerar relevante**.

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Feed algorítmico do Instagram |
| **Período** | Introdução em 2016; expansão e fragmentação em múltiplos sistemas de ranking e recomendação durante os anos 2020 |
| **Autoria** | Atribuição distribuída entre equipes de produto, design, engenharia, dados, machine learning e integridade do Instagram/Meta; não há inventor único documentado |
| **Produto ou contexto** | Instagram Feed e, posteriormente, ecossistema de ranking e recomendação em Feed, Stories, Explore e Reels |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]], [[00 tipos de design/Design de IA|Design de IA]] |
| **Empresas ou instituições relacionadas** | Instagram / Meta, como organização responsável pela implementação e evolução do sistema |
| **Problema original** | Organizar uma quantidade de publicações maior do que a maioria dos usuários conseguia percorrer cronologicamente |
| **Mundo antes** | Feed de contas seguidas ordenado principalmente por recência |
| **Invenção** | O Instagram não inventou o ranking algorítmico de redes sociais; introduziu seu feed personalizado em 2016 |
| **Refinamento** | Fragmentação em sistemas por superfície, recomendações de contas não seguidas, controles cronológicos, reset de recomendações e políticas de originalidade/elegibilidade |
| **Popularização** | Adoção como feed principal do Instagram para uma audiência global de grande escala |
| **Padronização** | Ranking personalizado tornou-se a experiência principal; cronologia reapareceu como visualização opcional em Following e Favorites |
| **Hipótese de design** | Rastros de comportamento, relações sociais e propriedades do conteúdo podem prever relevância futura melhor que a recência isolada |
| **Promessa** | Reduzir a chance de perder publicações importantes e descobrir conteúdo relevante sem precisar procurar tudo manualmente |
| **Comportamento aproveitado** | Seguir pessoas, reagir, assistir, salvar, compartilhar, avançar, ocultar e repetir padrões de consumo |
| **Comportamento produzido** | Esperar uma ordem personalizada e produzir sinais durante o consumo que influenciam a seleção futura |
| **Relação de poder** | A plataforma ganha capacidade de distribuir visibilidade e definir elegibilidade; usuários preservam sinais e controles parciais, sem controlar integralmente os critérios do ranking |
| **Consequências inesperadas** | Visibilidade torna-se probabilística; interações sociais passam a alimentar distribuição; criadores ganham incentivos para interpretar sinais de ranking; surge necessidade de corrigir ou resetar modelos de preferência |
| **Destino ou transformação posterior** | De um feed ranqueado relativamente unitário para uma família de sistemas distintos por superfície e finalidade |
| **Futuro prometido** | Um feed em que a abundância de conteúdo não obrigasse o usuário a percorrer tudo para encontrar aquilo que mais lhe importa |
| **Futuro produzido** | Curadoria personalizada transformada em infraestrutura de descoberta, inclusive para conteúdo de contas que a pessoa nunca decidiu seguir |
| **Quando a promessa virou expectativa** | A reintrodução de Following cronológico em 2022 como modo opcional evidencia que o feed personalizado já funcionava como experiência principal |
| **Futuro tornado mais provável** | Curadoria algorítmica como camada padrão entre produção abundante de conteúdo e atenção limitada |
| **Descendentes possíveis** | Recomendações no Feed, Explore e Reels como desdobramentos internos da mesma capacidade de seleção preditiva; parentescos externos exigem estudo comparativo |
| **Novo problema produzido pelo sucesso** | Como corrigir uma representação aprendida dos interesses quando ela envelhece, estreita a descoberta ou entra em conflito com o que a pessoa quer ver agora |
| **Conceitos relacionados** | [[01 conceitos/Economia da Atencao|Economia da atenção]], [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]], [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]] |
| **Variáveis relacionadas** | [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Atencao|Atenção]], [[02 variaveis/Tempo de permanência|Tempo de permanência]], [[02 variaveis/Propagação|Propagação]], [[02 variaveis/Recência|Recência]], [[02 variaveis/Popularidade|Popularidade]], [[02 variaveis/Momentum de atenção|Momentum de atenção]], [[02 variaveis/Afinidade inferida|Afinidade inferida]], [[02 variaveis/Valência emocional|Valência emocional]] |
| **Genealogia** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |
| **Percurso(s)** | [[05 percursos/Da Parede ao Feed|Da parede ao feed]] |
| **Parentes** | [[03 artefatos/Botao Like|Botão Like]], [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]] |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento; a base histórica desta nota é principalmente documentação de produto e sistema |
| **Princípio de design revelado** | Reduzir custo de busca por previsão transfere ao sistema curador parte do poder de decidir o que ganha visibilidade |
| **Questão em aberto** | Quando uma previsão de relevância deixa de apenas representar preferência e passa a participar daquilo que a pessoa aprende a querer? |

## Referências

[^1]: Instagram. “See the Moments You Care About First”. Instagram Blog, 15 mar. 2016. Registro contemporâneo do anúncio do feed ordenado por relevância. Ver também *The Guardian*, “Instagram users to see posts in order of interest rather than chronologically”, 15 mar. 2016; e *TechCrunch*, “Instagram's new algorithm that puts the best posts first goes live for all”, 3 jun. 2016.

[^2]: Meta AI. “Instagram Feed Ranking System Card”. 23 fev. 2022. https://ai.meta.com/tools/system-cards/instagram-feed-ranking/

[^3]: Meta AI. “Introducing 22 system cards that explain how AI powers experiences on Facebook and Instagram”. 29 jun. 2023. https://ai.meta.com/blog/how-ai-powers-experiences-facebook-instagram-system-cards/

[^4]: Meta. “Two New Ways to Control Your Instagram Feed”. 23 mar. 2022. https://about.fb.com/news/2022/03/two-new-ways-to-control-your-instagram-feed/

[^5]: Meta AI. “The AI behind unconnected content recommendations on Facebook and Instagram”. 29 jun. 2023. https://ai.meta.com/blog/ai-unconnected-content-recommendations-facebook-instagram/

[^6]: Meta Brasil. “Ajudando o criador de conteúdo a encontrar novos públicos”. 30 abr. 2024. https://about.fb.com/br/news/2024/04/ajudando-o-criador-de-conteudo-a-encontrar-novos-publicos/

[^7]: Meta. “2026: AI Drives Performance”. 28 jan. 2026. https://about.fb.com/news/2026/01/2026-ai-drives-performance/

[^8]: Meta. “Reshape Your Instagram With a Recommendations Reset”. 19 nov. 2024, atualizado em 2025. https://about.fb.com/news/2024/11/introducing-recommendations-reset-instagram/


[^9]: Trunfio, Mariapina; Rossi, Simona. “Conceptualising and measuring social media engagement: A systematic literature review”. *Italian Journal of Marketing*, 2021, 267–292. DOI: https://doi.org/10.1007/s43039-021-00035-8

[^10]: Hu, Yifan; Koren, Yehuda; Volinsky, Chris. “Collaborative Filtering for Implicit Feedback Datasets”. *2008 Eighth IEEE International Conference on Data Mining*, 2008, pp. 263–272. DOI: https://doi.org/10.1109/ICDM.2008.22

[^11]: Trabalhos de recomendação multiobjetivo e multi-behavior tratam clicks, shares, dwell time e outras respostas como sinais distintos que precisam ser combinados para ranking. Ver, por exemplo, os trabalhos industriais apresentados em ACM RecSys e KDD sobre multi-task ranking, watch-time prediction e long-term engagement.

[^12]: Koren, Yehuda. “Collaborative Filtering with Temporal Dynamics”. *Proceedings of KDD 2009*, 2009. DOI: https://doi.org/10.1145/1557019.1557072. Ver também Karimi et al., “News recommender system: a review of recent progress, challenges, and opportunities”, *Artificial Intelligence Review*, 2021.


[^13]: Berger, Jonah; Milkman, Katherine L. “What Makes Online Content Viral?”. *Journal of Marketing Research*, 49(2), 2012, pp. 192–205. DOI: https://doi.org/10.1509/jmr.10.0353

[^14]: Meta AI. “Instagram Feed Ranking System Card”. Atualizado em 23 fev. 2022. A documentação descreve probabilidades de ações, atributos do post e histórico de interação; valência emocional não aparece como sinal declarado nessa explicação pública. https://ai.meta.com/tools/system-cards/instagram-feed-ranking/
