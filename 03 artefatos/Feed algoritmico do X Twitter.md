---
title: "Feed algorítmico do X/Twitter"
type: "artefato"
status: "rascunho"
tags:
  - design/artefato
  - arqueologia
---

# Feed algorítmico do X/Twitter

Durante boa parte da história inicial do Twitter, abrir a timeline significava perguntar **o que aconteceu mais recentemente?**. As publicações das contas seguidas eram organizadas em ordem cronológica inversa, e essa ordem combinava especialmente bem com a promessa cultural do serviço: acompanhar acontecimentos enquanto eles ainda estavam acontecendo.

Em 2016, o Twitter introduziu uma camada nova nessa relação com o tempo. Depois de períodos de ausência, algumas publicações consideradas mais importantes para cada pessoa passaram a aparecer primeiro. A empresa justificou a mudança dizendo que usuários seguiam centenas ou milhares de contas e podiam perder Tweets relevantes no fluxo contínuo.[^1]

A pequena alteração muda a hipótese do artefato. A cronologia assume que **recência é o melhor critério geral para organizar o presente**. O ranking assume que sinais de comportamento conseguem prever quais partes desse presente merecem chegar primeiro a cada pessoa.

## Quando o presente ganhou prioridade variável

O recurso lançado em fevereiro de 2016 ainda preservava boa parte da gramática cronológica. Os Tweets previstos como mais interessantes apareciam no topo, ainda recentes, enquanto o restante seguia abaixo em ordem cronológica inversa. A função podia ser desativada.[^1] O Twitter afirmou também ter observado mais Tweets e Retweets entre usuários que experimentavam a nova timeline, ligando explicitamente a mudança de ordenação a comportamento posterior.

No ano seguinte, a equipe de engenharia descreveu a arquitetura com mais precisão. Antes do ranking, reunia os Tweets das contas seguidas e os ordenava pelo tempo. Com o novo sistema, cada candidato recebia uma pontuação de relevância que tentava prever quanto aquele Tweet seria interessante ou envolvente para uma pessoa específica.[^2] Entre as features descritas estavam [[02 variaveis/Recência|recência]], quantidade total de interações, características do autor, histórico de interação entre usuário e autor e padrões anteriores de consumo.

Isso aproxima o Twitter do [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], introduzido no mesmo ano, mas o conflito de design é diferente. O Instagram precisava organizar abundância num fluxo visual de contas seguidas. O Twitter carregava uma identidade especialmente ligada à simultaneidade e ao acontecimento público. Inserir relevância no topo significa admitir que, mesmo numa plataforma construída em torno do “agora”, **o que acabou de acontecer pode perder prioridade para aquilo que o sistema considera mais importante para você**.

## O For You transforma timeline em descoberta

O X atual explicita duas arquiteturas lado a lado. A aba **Following** mostra publicações apenas das contas seguidas em ordem cronológica inversa. A aba **For You** reúne candidatos tanto da rede do usuário quanto de contas que ele não segue e os ranqueia com uma rede neural continuamente treinada a partir de interações como likes, reposts e replies.[^3]

O repositório aberto pelo Twitter em 2023 ajuda a ver que esse resultado não vem de uma única fórmula. O Home Mixer descreve geração de candidatos, hidratação de milhares de features, scoring por modelos de machine learning, além de filtros e heurísticas como diversidade de autores, equilíbrio entre conteúdo da rede e fora dela, fadiga de feedback, deduplicação e filtros de visibilidade.[^4]

Arqueologicamente, a transformação pode ser lida em três movimentos. Primeiro, o sistema reorganiza **quando** algo aparece. Depois, passa a prever **quanto aquilo importa para você**. Por fim, amplia o universo de candidatos e passa a decidir também **quem pode entrar no seu presente mesmo sem você ter escolhido seguir essa pessoa**.

Esse terceiro movimento altera o significado do gesto de seguir. Na timeline cronológica, seguir define quase todo o universo de candidatos. No For You, seguir continua sendo um sinal forte, mas deixa de delimitar sozinho aquilo que pode aparecer. A timeline passa a combinar relação social escolhida com descoberta algorítmica.

## O ranking prevê ações diferentes

A documentação atual do X fala em uma rede neural continuamente treinada sobre interações como Likes, Reposts e Replies e lista sinais como contas e Topics seguidos, posts curtidos, posts curtidos pela rede e contas seguidas pela rede.[^5] Isso já mostra duas famílias distintas: sinais sobre a relação entre usuário e conteúdo e sinais sobre o estado social do conteúdo dentro da rede.

O código aberto de 2023 oferece um retrato histórico mais detalhado. O heavy ranker daquela versão não tentava prever uma única quantidade chamada “engajamento”. Ele produzia probabilidades separadas para comportamentos diferentes: favoritar, repostar, responder, abrir o perfil e depois interagir, assistir pelo menos metade de um vídeo, responder e receber interação do autor, abrir a conversa e interagir, permanecer pelo menos dois minutos numa conversa, produzir feedback negativo e denunciar.[^6]

Essas previsões eram depois combinadas num score. O snapshot de 5 de abril de 2023 publicava coeficientes diferentes para cada saída, incluindo valores positivos para vários tipos de interação e valores negativos fortes para feedback adverso e denúncia.[^6] Esses números são uma fotografia histórica da configuração aberta naquele momento. Não devem ser tratados como pesos atuais em 2026 nem como proporções psicológicas simples: eventos com frequências e calibrações diferentes podem exigir coeficientes diferentes, e o próprio X afirma hoje que nenhum sinal recebe de forma estática um peso universalmente maior que os demais.[^7]

A operação de design, porém, permanece visível. O sistema precisa transformar ações heterogêneas em uma decisão única de posição. Curtir, responder, permanecer numa conversa, visitar um perfil ou bloquear alguém não significam a mesma coisa na experiência humana. Para entrar no ranking, tornam-se previsões comparáveis dentro de uma função de decisão. O [[01 conceitos/Engajamento em plataformas digitais|engajamento em plataformas digitais]] funciona aqui como guarda-chuva; [[02 variaveis/Tempo de permanência|tempo de permanência]], [[02 variaveis/Propagação|propagação]], [[02 variaveis/Afinidade inferida|afinidade inferida]], [[02 variaveis/Recência|recência]] e [[01 conceitos/Feedback negativo em recomendação|feedback negativo em recomendação]] permitem decompor mecanismos específicos.

Também existe uma camada posterior ao score aprendido. O Home Mixer aberto documenta heurísticas de diversidade de autores, equilíbrio entre conteúdo dentro e fora da rede, fadiga de feedback, deduplicação e filtros de visibilidade.[^4] Isso significa que “ranking” não termina quando a rede neural calcula relevância. Há decisões de composição que impedem que o maior score isolado seja a única regra do feed.

Por enquanto, a hipótese de design central está suficientemente clara: **um fluxo em tempo real pode se tornar mais útil quando o sistema seleciona e ordena aquilo que merece representar o presente de cada pessoa**. A tensão aberta é igualmente clara: quanto mais o sistema seleciona o presente, mais a experiência do “que está acontecendo agora” depende de uma política invisível de relevância.

## Conflito não é um único sinal

A documentação pública do X descreve likes, reposts, replies, clicks, dwell e feedback negativo como entradas e alvos de previsão, mas não declara “raiva”, “indignação” ou “polarização” como sinais internos do ranking.[^5][^6] A relação entre emoção e distribuição precisa, portanto, ser reconstruída por uma cadeia intermediária: propriedades da mensagem alteram comportamentos humanos; esses comportamentos produzem sinais; o ranking pode aprender a valorizá-los.

Em debates políticos no Twitter, Brady e colegas encontraram que palavras simultaneamente morais e emocionais estavam associadas a maior difusão por retweets, com cerca de 20% de aumento por palavra moral-emocional nos três temas analisados.[^8] O efeito foi mais forte dentro de redes ideológicas do que entre elas. Esse resultado é observacional e recebeu uma crítica metodológica importante: Burton, Cruz e Hahn mostraram que o chamado “moral contagion” pode ser sensível a especificações analíticas e ter baixo poder preditivo fora da amostra.[^9] Para o Arqueologia do Design, a conclusão segura é que moralização emocional pode participar da propagação em certos contextos, não que exista uma lei universal de viralidade moral.

Outra regularidade parece ainda mais forte em comunicação política. Rathje, Van Bavel e van der Linden analisaram mais de 2,7 milhões de posts de mídia e congressistas no Facebook e Twitter e encontraram que referências ao grupo político adversário previam compartilhamento e retweet com efeito maior que linguagem negativa ou moral-emocional; posts sobre o out-group eram compartilhados aproximadamente duas vezes mais que posts sobre o in-group.[^10] O mecanismo aqui combina [[01 conceitos/Design da aversão|aversão]], identidade social e [[02 variaveis/Propagação|propagação]], e não deve ser reduzido a “conteúdo negativo”.

Também há um circuito de aprendizagem posterior à publicação. Em dois estudos preregistrados de Twitter e dois experimentos, Brady, McLoughlin, Doan e Crockett encontraram que feedback social positivo recebido por expressões de indignação moral previa maior probabilidade de o usuário expressar indignação novamente; usuários também ajustavam expressão às normas percebidas de suas redes.[^11] O sistema social pode, assim, ensinar estilos de expressão sem que o ranker precise possuir uma feature explícita de indignação.

A direção continua dependente de contexto e de ação. Em tweets sobre ciência da COVID-19, por exemplo, alegria esteve associada a mais retweets e raiva a menos; em outros domínios, raiva ou disgust podem gerar mais replies.[^12] Repost, reply e quote-post não devem ser tratados como três intensidades da mesma resposta. Repost tende a redistribuir; reply cria uma relação dialogal; quote-post redistribui acrescentando comentário. Pesquisas políticas mostram usos e valências diferentes entre essas formas de interação.[^13]

A interpretação arqueológica é que o risco sistêmico aparece quando determinadas formas de conflito produzem justamente os comportamentos que a infraestrutura aprende a prever e recompensar. Isso pode criar o circuito:

**aversão ou indignação → reply/repost/quote → sinal social → distribuição/feedback → aprendizagem de norma → nova expressão**

O circuito é uma hipótese de sistema sustentada por estudos parciais de cada elo. Ele não demonstra que o algoritmo atual do X “prefere raiva”.

## Rejeitar também tem uma arquitetura

O X oferece várias formas de dizer “quero menos disso”, mas elas atuam em escalas diferentes. **Not interested in this post** e **Not interested in this Topic** alimentam diretamente a personalização: a empresa afirma usar essas escolhas como sinal para recomendar menos daquele tipo de conteúdo.[^14] **Show less often** exerce função semelhante de redução futura.[^15]

Silenciar amplia o escopo. É possível remover da Home e das notificações posts que contenham palavras, frases, usernames, emojis ou hashtags específicas; o X também afirma que recomendações não sugerirão conteúdo contendo termos silenciados.[^16] Silenciar uma conta remove seus posts da timeline sem desfazer necessariamente a relação de follow e sem avisar a outra pessoa.[^17]

Bloquear muda outra camada. O bloqueio rompe follow, impede likes, replies, reposts e mensagens diretas entre as contas e exclui posts da conta bloqueada da timeline em condições normais.[^18] Aqui a ação deixa de ser apenas preferência sobre conteúdo e passa a redesenhar a fronteira social da interface.

Denunciar atua ainda em outro regime. Um report comunica possível violação das Regras ou dos Termos do X e entra num fluxo de moderação; a própria documentação ressalta que denunciar um post não suspende automaticamente a conta.[^19] No snapshot aberto do ranker de 2023, a probabilidade de report aparecia como uma saída negativa do modelo, mas a ação possui também função institucional que excede personalização individual.[^6]

A aba **Following** oferece uma recusa mais estrutural: em vez de ensinar ao For You item por item, a pessoa pode escolher uma timeline apenas das contas seguidas, em ordem cronológica inversa.[^3] Isso não desliga todos os mecanismos do serviço, mas retira daquela superfície a seleção personalizada de posts de contas não seguidas.

A interpretação do projeto é que o X oferece uma **gramática de recusa por escopo**:

**post → tópico/termo → fonte → relação → moderação → modo de feed**

Cada gesto responde a um problema diferente. “Não tenho interesse” corrige a inferência do modelo; mute cria uma exclusão operacional; block redefine relação e capacidade de interação; report solicita julgamento institucional; Following troca a regra de curadoria. Reunir tudo sob “feedback negativo” esconderia diferenças importantes de agência e poder.

Essa mediação acontece também em outra escala. O [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]] não escolhe primeiro qual post merece aparecer, mas qual **conversa** merece receber o estatuto de assunto emergente. A documentação atual separa detecção de Trends de recomendação de Trends, mostrando que o X opera duas curadorias paralelas do presente: uma no nível das mensagens e outra no nível dos temas.

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Feed algorítmico do X/Twitter |
| **Período** | Ranking introduzido em 2016; evolução posterior para a arquitetura For You / Following |
| **Autoria** | Atribuição distribuída entre equipes de produto, engenharia, dados e machine learning do Twitter e posteriormente X |
| **Produto ou contexto** | Home Timeline do Twitter; atualmente abas For You e Following do X |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]], [[00 tipos de design/Design de IA|Design de IA]] |
| **Empresas ou instituições relacionadas** | Twitter / X Corp. |
| **Problema original** | Reduzir a chance de perder publicações relevantes num fluxo cronológico de grande volume |
| **Mundo antes** | Timeline de contas seguidas organizada principalmente em ordem cronológica inversa |
| **Invenção** | O Twitter não inventou ranking algorítmico; introduziu sua camada de “best Tweets first” em 2016 |
| **Refinamento** | Modelos de relevância, deep learning, candidatos fora da rede e atual separação entre For You e Following |
| **Popularização** | Incorporação do ranking à experiência principal de Home Timeline e posterior For You |
| **Padronização** | Coexistência entre feed personalizado como superfície principal de descoberta e Following como alternativa cronológica |
| **Hipótese de design** | Sinais de comportamento e relações conseguem prever melhor que a recência isolada quais partes do fluxo merecem prioridade individual |
| **Promessa** | Interpretação do projeto: permitir acompanhar “o que importa” sem exigir presença contínua no fluxo cronológico |
| **Comportamento aproveitado** | Seguir contas, curtir, repostar, responder, clicar, visitar perfis e repetir padrões de interação |
| **Comportamento produzido** | Esperar que o sistema selecione conteúdo relevante inclusive de contas não seguidas, alternar entre curadoria personalizada e cronologia e usar controles de recusa em diferentes escalas para corrigir exposição |
| **Relação de poder** | A plataforma ganha capacidade de definir quais acontecimentos, autores e temas entram primeiro no campo perceptivo, enquanto o usuário recebe controles de correção com diferentes escopos: preferência, filtragem, relação social, moderação e escolha de timeline |
| **Consequências inesperadas** | Interações que aumentam propagação ou conversação podem também recompensar conteúdo moralizado ou intergrupal em determinados contextos; feedback social e exposição podem alterar normas percebidas de expressão, embora emoção não apareça como sinal declarado do ranking |
| **Destino ou transformação posterior** | A timeline ranqueada evoluiu para uma superfície de descoberta que mistura rede seguida e conteúdo recomendado |
| **Futuro prometido** | Um fluxo em que abundância e ausência temporária não impedissem o usuário de encontrar os acontecimentos considerados mais relevantes |
| **Futuro produzido** | Um presente personalizado no qual relevância prevista participa da definição do que parece estar acontecendo agora |
| **Quando a promessa virou expectativa** | Ainda não explicitado. |
| **Futuro tornado mais provável** | Plataformas em tempo real nas quais a percepção do presente é mediada por ranking personalizado |
| **Descendentes possíveis** | Ainda não explicitado. |
| **Novo problema produzido pelo sucesso** | Distinguir aquilo que está acontecendo amplamente daquilo que o sistema tornou especialmente visível para uma pessoa |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Tendência em plataformas|Tendência em plataformas]], [[01 conceitos/Feedback negativo em recomendação|Feedback negativo em recomendação]], [[01 conceitos/Economia da Atencao|Economia da atenção]], [[01 conceitos/Design da aversão|Design da aversão]], [[01 conceitos/Polarização afetiva|Polarização afetiva]] |
| **Variáveis relacionadas** | [[02 variaveis/Recência|Recência]], [[02 variaveis/Popularidade|Popularidade]], [[02 variaveis/Afinidade inferida|Afinidade inferida]], [[02 variaveis/Propagação|Propagação]], [[02 variaveis/Momentum de atenção|Momentum de atenção]], [[02 variaveis/Tempo de permanência|Tempo de permanência]], [[02 variaveis/Valência emocional|Valência emocional]], [[02 variaveis/Ativação emocional|Ativação emocional]], [[02 variaveis/Normatividade percebida da hostilidade|Normatividade percebida da hostilidade]] |
| **Genealogia** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |
| **Percurso(s)** | [[05 percursos/Da Parede ao Feed|Da parede ao feed]], [[05 percursos/Do artefato ao sinal no X Twitter|Do artefato ao sinal no X/Twitter]] |
| **Parentes** | [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]], [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]], [[03 artefatos/Botao Like|Botão Like]] |
| **Leituras-chave** | Documentação oficial do Twitter/X sobre timeline ranking e repositório aberto do sistema de recomendação |
| **Princípio de design revelado** | Quando o volume excede a capacidade de acompanhar o fluxo, ordenar o presente exige escolher uma teoria operacional de relevância |
| **Questão em aberto** | O que muda socialmente quando cada pessoa recebe uma versão diferente do que parece estar acontecendo agora? |

## Referências

[^1]: Twitter. “Never miss important Tweets from people you follow” e “An improved timeline for consumers and brands”. 10 fev. 2016. https://blog.x.com/en_us/a/2016/never-miss-important-tweets-from-people-you-follow ; https://blog.x.com/en_us/a/2016/an-improved-timeline-for-consumers-and-brands

[^2]: Twitter Engineering. “Using Deep Learning at Scale in Twitter’s Timelines”. 9 maio 2017. https://blog.x.com/engineering/en_us/topics/insights/2017/using-deep-learning-at-scale-in-twitters-timelines

[^3]: X Help Center. “For You Home Timeline Recommendations”. Consultado em 6 out. 2026. https://help.x.com/en/resources/recommender-systems/for-you-home-timeline-recommendations

[^4]: X / Twitter. “X's Recommendation Algorithm” e “Home Mixer”. Repositório público. https://github.com/twitter/the-algorithm ; https://github.com/twitter/the-algorithm/blob/main/home-mixer/README.md


[^5]: X Help Center. “For You Home Timeline Recommendations” e “Our approach to recommendations”. Consultados em 6 out. 2026. A documentação atual descreve treinamento contínuo sobre Likes, Reposts e Replies e sinais de rede, interesses e interações. https://help.x.com/en/resources/recommender-systems/for-you-home-timeline-recommendations ; https://help.x.com/en/rules-and-policies/recommendations

[^6]: Twitter. “The Algorithm ML — Heavy Ranker”, atualização de 5 abr. 2023. O snapshot aberto descreve saídas previstas para favorite, retweet, reply, good profile click, video playback 50%, reply engaged by author, good click, permanência prolongada em conversa, negative feedback e report, além dos coeficientes então usados para combinar essas probabilidades. https://github.com/twitter/the-algorithm-ml

[^7]: X Help Center. “Our approach to recommendations”. A documentação atual afirma que recomendações usam múltiplos sinais e que nenhum sinal recebe estaticamente maior peso de importância que outro. https://help.x.com/en/rules-and-policies/recommendations


[^8]: Brady, William J.; Wills, Julian A.; Jost, John T.; Tucker, Joshua A.; Van Bavel, Jay J. “Emotion shapes the diffusion of moralized content in social networks”. *PNAS*, 114(28), 2017, pp. 7313–7318. DOI: https://doi.org/10.1073/pnas.1618923114

[^9]: Burton, Jason W.; Cruz, Nicole; Hahn, Ulrike. “Reconsidering evidence of moral contagion in online social networks”. *Nature Human Behaviour*, 5, 2021, pp. 1629–1635. DOI: https://doi.org/10.1038/s41562-021-01133-5

[^10]: Rathje, Steve; Van Bavel, Jay J.; van der Linden, Sander. “Out-group animosity drives engagement on social media”. *PNAS*, 118(26), 2021, e2024292118. O estudo analisou Facebook e Twitter e encontrou linguagem sobre o grupo adversário como forte preditora de compartilhamentos e retweets.

[^11]: Brady, William J.; McLoughlin, Killian; Doan, Tuan N.; Crockett, Molly J. “How social learning amplifies moral outrage expression in online social networks”. *Science Advances*, 7(33), 2021, eabe5641. DOI: https://doi.org/10.1126/sciadv.abe5641

[^12]: Luo, Kai; Yang, Yang; Teo, Hock Hai. “The Asymmetric Influence of Emotion in the Sharing of COVID-19 Science on Social Media: Observational Study”. *JMIR Infodemiology*, 2(2), 2022, e37331. DOI: https://doi.org/10.2196/37331. Ver também estudos de comunicação de saúde no Twitter que encontram mais replies diante de anger/disgust em contextos específicos.

[^13]: Garimella, Kiran; Weber, Ingmar; De Choudhury, Munmun. “Quote RTs on Twitter: Usage of the New Feature for Political Discourse”. *WebSci ’16*, 2016. DOI: https://doi.org/10.1145/2908131.2908170. Pew Research Center (2022) também mostra que retweets e quote tweets de usuários adultos nos EUA eram mais frequentemente políticos que replies e tweets originais.


[^14]: X Help Center. “Our approach to recommendations”. Consultado em 6 out. 2026. Para recomendações do For You, “Not interested in this post” e “Not interested in this Topic” são usados como sinais para recomendar menos daquele tipo de conteúdo. https://help.x.com/en/rules-and-policies/recommendations

[^15]: X Help Center. “How to control your X experience”. Consultado em 6 out. 2026. “Show less often” ajuda o X a entender quais tipos de posts a pessoa deseja ver menos. https://help.x.com/en/safety-and-security/control-your-x-experience

[^16]: X Help Center. “How to use advanced muting options”. Consultado em 6 out. 2026. Palavras, frases, usernames, emojis e hashtags silenciados são removidos da Home/Notifications em condições especificadas e não são sugeridos em recomendações. https://help.x.com/en/using-x/advanced-x-mute-options

[^17]: X Help Center. “How to mute accounts on X”. Consultado em 6 out. 2026. O mute remove posts de uma conta da timeline sem exigir unfollow ou block e sem notificar a conta silenciada. https://help.x.com/en/using-x/x-mute

[^18]: X Help Center. “Blocking on X”. Consultado em 6 out. 2026. O bloqueio impede follow, DM e engajamento entre as contas e remove posts da conta bloqueada da timeline, com exceções documentadas. https://help.x.com/en/using-x/blocking-and-unblocking-accounts

[^19]: X Help Center. “Report a Post, List, or Direct Message”. Consultado em 6 out. 2026. Report solicita avaliação de possível violação e não implica suspensão automática da conta. https://help.x.com/en/safety-and-security/report-a-post
