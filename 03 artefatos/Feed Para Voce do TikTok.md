---
title: "Feed Para Você do TikTok"
type: "artefato"
status: "rascunho"
tags:
  - design/artefato
  - arqueologia
---

# Feed Para Você do TikTok

Em muitas redes sociais, o feed começou como consequência de uma relação anterior: primeiro a pessoa escolhia quem seguir; depois o sistema organizava aquilo que essas escolhas produziam. O TikTok ajuda a consolidar outra hipótese de interface. **A pessoa pode chegar antes ao conteúdo e descobrir o autor depois.**

Essa inversão é pequena na superfície e profunda no comportamento. O usuário já não precisa construir uma rede suficientemente boa antes de receber uma experiência interessante. O sistema tenta fazer isso por ele, usando cada sessão como oportunidade de observar preferências, testar hipóteses e reorganizar a próxima sequência.

O [[03 artefatos/Feed de Videos Curtos|feed de vídeos curtos]] descreve a gramática mais ampla: vídeo vertical, unidade dominante, swipe e descarte barato. Este estudo isola outra decisão dentro dessa gramática: o feed **Para Você** como sistema que transforma consumo em descoberta personalizada.

## Quando seguir deixou de ser pré-condição para descobrir

A genealogia técnica é anterior ao TikTok global. A ByteDance lançou Douyin na China em setembro de 2016 e TikTok fora da China em 2017.[^1] A empresa adquiriu musical.ly em novembro de 2017 e, em agosto de 2018, unificou musical.ly e TikTok numa plataforma global. No anúncio dessa integração, o produto já era descrito com dois modos relevantes: um feed que destacava a comunidade do usuário e um **For You** que oferecia recomendações personalizadas segundo preferências de visualização.[^2]

Essa documentação é suficiente para localizar o For You como parte explícita da experiência global de 2018. Ela não estabelece, sozinha, a primeira implementação histórica do mecanismo nem autoriza atribuir a invenção a uma pessoa específica. A autoria deve permanecer distribuída entre equipes de produto, engenharia e recomendação da ByteDance/TikTok.

O problema resolvido também difere do que vimos no [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]] e no [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]]. Instagram e Twitter adicionaram ranking a produtos cuja experiência social já estava fortemente organizada por contas seguidas. No TikTok global, a descoberta personalizada aparece desde cedo como uma superfície definidora. O follow continua existindo, mas deixa de ser condição necessária para que o sistema encontre algo para mostrar.

A interpretação arqueológica é que isso altera o contrato social do feed. **A rede pode ser inferida depois da atenção.** Primeiro o sistema observa o que prende, interessa, é compartilhado ou rejeitado; depois pode aproximar criadores, temas, sons e comunidades que a pessoa ainda não escolheu explicitamente.

## O feed aprende enquanto entrega

Em 2020, o TikTok publicou uma explicação relativamente detalhada do Para Você. As recomendações eram descritas como resultado de três famílias de fatores: interações do usuário, informações do vídeo e configurações de dispositivo/conta. A empresa já destacava que assistir um vídeo longo até o fim era um sinal de interesse mais forte que compartilhar apenas o mesmo país do criador.[^3]

A documentação atual mantém a mesma lógica geral, com formulação mais ampla. O TikTok afirma que seus sistemas selecionam candidatos de uma coleção de conteúdo elegível e os classificam pela probabilidade de serem relevantes e interessantes para cada pessoa. Entre os sinais atuais do Para Você estão conteúdo curtido, compartilhado, comentado, assistido integralmente ou pulado, além de sons, hashtags, número de visualizações, país de publicação e informações do usuário; para a maioria das pessoas, interações como tempo assistido recebem peso maior que vários outros fatores.[^4]

Essa descrição torna visível uma propriedade central do artefato: **o consumo é simultaneamente experiência e medição**. Assistir, terminar, repetir, compartilhar ou pular não acontece depois da recomendação como simples consequência. Essas ações também podem participar da seleção das recomendações seguintes.

O circuito é:

**o sistema seleciona → a pessoa assiste ou pula → o comportamento vira sinal → o sistema recalibra a seleção**

No [[03 artefatos/Feed de Videos Curtos|feed de vídeos curtos]], swipe reduz o custo de abandonar. No Para Você, o abandono também se torna informação.

## Permanecer, terminar e repetir não são o mesmo sinal

No TikTok, [[02 variaveis/Tempo de permanência|tempo de permanência]] ocupa posição especialmente importante porque a interface oferece um sinal contínuo mesmo quando a pessoa não curte, comenta nem compartilha. A documentação atual inclui entre as interações do Para Você conteúdo assistido integralmente ou pulado e afirma que, para a maioria das pessoas, sinais como tempo assistido costumam receber peso maior que vários outros fatores.[^6]

Isso não significa que exista uma única métrica chamada “retenção” capaz de representar interesse. Pelo menos quatro observações precisam ser separadas: segundos assistidos, proporção do vídeo consumida, conclusão e repetição. Em 2020, o TikTok citava replays entre as primeiras interações que ajudavam a refinar um feed recém-inicializado; a documentação atual consultada enfatiza full watch, skip e watch time, sem listar replay como um sinal geral com peso conhecido.[^3][^6]

A diferença importa porque cada medida carrega um problema estatístico diferente. Watch time bruto é influenciado pelo comprimento do vídeo. A literatura de recomendação chama essa distorção de [[01 conceitos/Viés de duração|viés de duração]]: vídeos mais longos têm mais oportunidade de acumular segundos mesmo quando o interesse não é maior.[^7] Em direção complementar, um estudo controlado de 2026 sobre TikTok encontrou que a própria duração do vídeo era a feature de metadata mais forte para prever conclusão, mostrando que “assistiu até o fim” também não pode ser interpretado sem considerar o tamanho do item.[^8]

Pesquisadores da ByteDance publicaram em 2026 um método de debiasing que trata watch time como proxy importante de satisfação, mas corrige sua posição relativa segundo distribuições de referência de usuário e vídeo para reduzir efeitos de duração, popularidade e hábitos individuais.[^9] O trabalho mostra a maturidade desse problema em sistemas industriais; não é documentação de que o TikTok use exatamente esse modelo no Para Você.

O ponto arqueológico é maior que a métrica. **A duração do conteúdo altera a forma como o comportamento do público se torna legível para a máquina.** Escolher fazer um vídeo de 12 segundos ou de dois minutos não muda apenas narrativa e ritmo; muda também as condições sob as quais permanência, conclusão e abandono poderão ser interpretados.

## Ações da pessoa e propriedades do conteúdo

A documentação do TikTok ajuda a separar dois tipos de evidência que costumam ser reunidos sob a palavra “engajamento”. De um lado estão **ações da pessoa**: curtir, compartilhar, comentar, seguir contas, assistir, pular e pesquisar. De outro estão **informações do conteúdo**: legenda, som, hashtags, número de visualizações e contexto de publicação.[^4][^10] O sistema pode cruzar as duas famílias, mas elas respondem a perguntas diferentes.

Like e comentário indicam que houve uma ação explícita diante de um item. Compartilhar acrescenta [[02 variaveis/Propagação|propagação]] porque desloca o conteúdo para outra relação social. Seguir é ainda mais relacional: ele cria um vínculo persistente com um criador e fornece evidência para [[02 variaveis/Afinidade inferida|afinidade inferida]]. Nenhuma dessas ações, isoladamente, revela por que a pessoa agiu; comentário pode ser discordância, share pode ser crítica e follow pode resultar de curiosidade temporária.

Som e hashtag cumprem outra função. Eles descrevem ou conectam o vídeo a categorias culturais reutilizáveis. Em 2020, o TikTok já os listava como informações do vídeo usadas pelo sistema de recomendação.[^3] A orientação oficial para criadores também afirma que hashtags relevantes ajudam o conteúdo a ser encontrado pela audiência adequada e que sons podem conectar vídeos a buscas, desafios e repertórios compartilhados; usar mais hashtags, porém, não garante maior alcance.[^11] Isso sustenta uma leitura de **descoberta e correspondência temática**, não uma regra causal do tipo “usar hashtag aumenta distribuição”.

[[02 variaveis/Popularidade|Popularidade]] e [[02 variaveis/Recência|recência]] entram numa terceira escala: contexto coletivo. Em 2022, a ferramenta “Por que este vídeo” passou a explicar algumas recomendações com razões como conteúdo publicado recentemente na região e conteúdo popular na região.[^10] Popularidade indica que muitas pessoas já produziram atenção observável; recência indica proximidade temporal. Nenhuma das duas diz, sozinha, que **esta** pessoa gostará do vídeo.

A arquitetura pode ser resumida assim:

**comportamento individual → evidência sobre preferência ou relação**

**metadados do conteúdo → evidência sobre tema, formato ou repertório**

**popularidade e recência → evidência sobre estado coletivo e temporal do item**

O ranking combina essas escalas para estimar relevância. A distinção importa porque impede transformar todo fator de recomendação em “engajamento”.

## Quando a tendência também ensina a produzir

No TikTok, [[01 conceitos/Tendência em plataformas|tendência]] pode assumir uma forma diferente daquela observada nos [[03 artefatos/Trending Topics do X Twitter|Trending Topics do X/Twitter]]. O X transforma crescimento de conversa em uma lista de assuntos. O TikTok frequentemente transforma padrões emergentes em **matéria-prima reutilizável**: hashtags, sons, coreografias, POVs, challenges, efeitos e outros formatos podem funcionar como sinais de que algo está em alta e, ao mesmo tempo, como estruturas para fabricar uma nova versão.

O Creative Center torna a dimensão temporal visível ao apresentar hashtags em alta, rankings, número de posts, visualizações e gráficos de tendência ao longo de diferentes janelas.[^12] Esse tipo de interface aproxima trend de [[02 variaveis/Momentum de atenção|momentum de atenção]]: não basta saber quantas ocorrências existem; importa observar se o padrão está ganhando força, em qual região e durante qual intervalo.

Mas a cultura produtiva do TikTok acrescenta uma segunda camada. Recursos como **Use this Sound** permitem reutilizar diretamente um áudio em outro vídeo; Duet preserva o conteúdo anterior dentro de uma nova composição; challenges e formatos meméticos estabelecem regras reconhecíveis de participação. Estudos da plataforma descrevem essa arquitetura como uma cultura de imitação e transformação em que sons, performances e templates funcionam como unidades reaproveitáveis.[^13][^14]

A tendência, portanto, pode criar um circuito diferente daquele do hot topic:

**variações começam a crescer → o padrão se torna reconhecível → a plataforma e os usuários o tornam encontrável → outras pessoas recebem uma gramática pronta para participar → novas variações aumentam o volume e o momentum**

Esse circuito aproxima TikTok da genealogia [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]]. O conteúdo em alta não oferece apenas algo para consumir. Em muitos casos, ele reduz o custo de produzir porque parte da forma já está resolvida: o som, a sequência performativa, a piada, o enquadramento ou a regra do challenge.

Isso ajuda a entender por que uma trend não deve ser confundida com popularidade. Um som pode ter milhões de usos acumulados e já estar perdendo força; outro pode ter volume menor e crescer rapidamente. Também não basta dizer que algo “é trend” porque usa um som popular. A participação chega tarde, cedo ou no pico dependendo do [[02 variaveis/Momentum de atenção|momentum]], e a nova versão ainda precisa ser suficientemente legível para ser reconhecida e suficientemente diferente para justificar sua existência.

Uma pesquisa de 2026 com mais de 85 mil vídeos de dança no TikTok encontrou justamente uma relação não linear entre aderência ao padrão e engajamento: versões moderadamente atípicas podiam superar tanto cópias muito próximas quanto variações excessivamente distantes.[^15] O resultado é contextual, mas reforça uma hipótese de design importante: **uma gramática produtiva funciona porque estabiliza algo que pode ser reconhecido e deixa outra parte aberta para variação**.

A [[01 conceitos/Dispositivo|leitura do dispositivo]] acrescenta uma pergunta à gramática de participação. Sons, Duets, challenges e modelos de montagem tornam novas versões mais fáceis de produzir; o sistema de recomendação condiciona quais versões têm oportunidade de chegar a públicos. Métricas e práticas compartilhadas entre criadores podem influenciar decisões posteriores de produção, enquanto políticas da plataforma e critérios de distribuição permanecem parcialmente fora do controle de quem publica.

Surge daí um circuito possível: **padrão reconhecível → nova produção → recepção e sinais → distribuição e feedback → novas escolhas de participação**. Os recursos de reutilização e as famílias de sinais são documentados; a medida em que cada produtor adapta seu trabalho a eles precisa de investigação própria. Uma tendência também pode se disseminar por relações entre pessoas, repertórios culturais e contingências que não se reduzem ao ranking.

O contraste com [[03 artefatos/Feed algoritmico do Instagram|Instagram]] e [[03 artefatos/Feed algoritmico do X Twitter|X/Twitter]] esclarece a operação: recursos produtivos, práticas sociais e sistemas de distribuição variam entre plataformas. Para comparar seus efeitos, é necessário identificar separadamente **o que cada ambiente torna fácil produzir** e **quais comportamentos a infraestrutura observa**, antes de atribuir resultados a um único algoritmo.

## Descoberta sem catálogo

Serviços de mídia anteriores já usavam recomendação, playlists e sugestões. A mudança de interface do TikTok está em reduzir fortemente o intervalo entre **escolher** e **consumir**. O usuário não precisa necessariamente abrir um catálogo, ler títulos, comparar thumbnails ou decidir qual criador merece atenção. O próximo item já ocupa quase toda a tela e pode ser avaliado durante o próprio consumo.

Isso reduz [[02 variaveis/Custo de Busca|custo de busca]], mas também transfere parte da escolha para o sistema. A pessoa continua escolhendo ficar ou deslizar; a infraestrutura escolhe qual candidato terá a oportunidade de ser avaliado.

Essa distribuição de agência ajuda a explicar por que o TikTok pode apresentar criadores com poucos seguidores. Em 2020, a empresa afirmou que contagem de seguidores e desempenho anterior da conta não eram fatores diretos do sistema de recomendação, embora contas maiores naturalmente pudessem receber mais visualizações pela audiência já construída.[^3] O feed, portanto, podia oferecer descoberta fora da hierarquia social já acumulada.

A consequência é uma promessa poderosa para criadores: **cada vídeo pode encontrar uma audiência antes que o criador tenha uma audiência própria grande**. Essa promessa não elimina desigualdades de distribuição e não significa alcance igual. Ela desloca o ponto de entrada da competição: o objeto recomendado ganha mais autonomia em relação à rede prévia do autor.

## O sistema também injeta diferença

Personalização perfeita criaria outro problema: repetir indefinidamente o que o sistema já aprendeu. TikTok reconhece explicitamente essa tensão e afirma diversificar recomendações, intercalando conteúdos e criadores diferentes, evitando em geral duas publicações seguidas do mesmo criador e introduzindo itens que podem não corresponder imediatamente aos interesses já inferidos.[^4][^5]

Isso revela que um recomendador precisa fazer duas coisas incompatíveis em algum grau: **explorar o conhecido e testar o desconhecido**. Se só repetir, torna o feed previsível e estreito. Se só experimentar, perde relevância.

A arqueologia do Para Você começa, então, com uma hipótese humana bastante específica: preferências não precisam ser declaradas completamente antes da experiência. Elas podem ser inferidas e refinadas a partir de pequenos comportamentos durante o uso, enquanto o sistema também introduz variações para descobrir interesses ainda não observados.

Essa hipótese transforma o feed em algo maior que uma lista ordenada. Ele funciona como um experimento contínuo sobre a pessoa.

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Feed Para Você do TikTok |
| **Período** | Antecedentes em Douyin (2016) e TikTok global (2017); For You explicitamente documentado na plataforma global unificada em 2018 |
| **Autoria** | Atribuição distribuída às equipes de produto, engenharia e sistemas de recomendação da ByteDance/TikTok |
| **Produto ou contexto** | TikTok, feed Para Você |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]], [[00 tipos de design/Design de IA|Design de IA]] |
| **Empresas ou instituições relacionadas** | ByteDance / TikTok |
| **Problema original** | Reduzir o custo de descobrir vídeos e criadores relevantes sem exigir que a pessoa construa previamente uma rede extensa de contas seguidas |
| **Mundo antes** | Descoberta em redes sociais dependia mais fortemente de follows, busca, catálogo, thumbnails, links ou navegação deliberada entre fontes |
| **Invenção** | O TikTok não inventou vídeo curto nem recomendação; a primeira implementação exata do For You permanece aberta nesta investigação |
| **Refinamento** | Acoplamento entre vídeo vertical, swipe, sinais de visualização, recomendação individual e diversificação contínua |
| **Popularização** | TikTok consolidou globalmente o For You como experiência central de descoberta após a unificação com musical.ly em 2018 |
| **Padronização** | O modelo de feed de descoberta de vídeos curtos foi posteriormente adotado por grandes plataformas em superfícies semelhantes |
| **Hipótese de design** | Preferências podem ser inferidas durante o próprio consumo e usadas para escolher o próximo conteúdo antes que o usuário tenha declarado uma rede ou catálogo de interesses completo |
| **Promessa** | Interpretação do projeto: tornar descoberta relevante imediata e permitir que conteúdos encontrem públicos além da rede prévia do criador |
| **Comportamento aproveitado** | Julgamento rápido de interesse, permanência, conclusão, repetição, compartilhamento, comentários, likes e descarte por swipe |
| **Comportamento produzido** | Avaliar conteúdo durante o consumo, aceitar descoberta de autores não seguidos e ensinar continuamente o sistema pelo próprio comportamento |
| **Relação de poder** | A plataforma ganha forte poder sobre quais criadores e temas recebem oportunidade inicial de exposição; o usuário mantém gestos rápidos de permanência e rejeição que alimentam o próprio sistema |
| **Consequências inesperadas** | Personalização pode estreitar repertório, tornar comportamento cotidiano matéria de inferência e pressionar produtores a adaptar conteúdo à lógica de retenção e descarte |
| **Destino ou transformação posterior** | O modelo expandiu-se para múltiplas superfícies do TikTok e influenciou a padronização de feeds verticais personalizados em outras plataformas |
| **Futuro prometido** | Descoberta instantânea de conteúdo relevante sem exigir navegação extensa ou rede social previamente construída |
| **Futuro produzido** | Um ambiente em que a atenção observada participa continuamente da construção do próximo objeto de atenção |
| **Quando a promessa virou expectativa** | Processo gradual após a expansão global de 2018 e a consolidação do For You como porta de entrada principal da plataforma |
| **Futuro tornado mais provável** | Plataformas em que recomendação antecede relação social explícita e o conteúdo pode circular antes de o autor possuir grande audiência |
| **Descendentes possíveis** | Feeds personalizados de vídeo curto em outras plataformas; vínculos históricos específicos precisam ser demonstrados caso a caso |
| **Novo problema produzido pelo sucesso** | Como preservar exploração, diversidade, autonomia e segurança quando o sistema se torna muito eficiente em repetir padrões de atenção já observados |
| **Conceitos relacionados** | [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]], [[01 conceitos/Economia da Atencao|Economia da atenção]], [[01 conceitos/Feedback negativo em recomendação|Feedback negativo em recomendação]], [[01 conceitos/Viés de duração|Viés de duração]], [[01 conceitos/Tendência em plataformas|Tendência em plataformas]] |
| **Variáveis relacionadas** | [[02 variaveis/Tempo de permanência|Tempo de permanência]], [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Afinidade inferida|Afinidade inferida]], [[02 variaveis/Propagação|Propagação]], [[02 variaveis/Popularidade|Popularidade]], [[02 variaveis/Recência|Recência]], [[02 variaveis/Momentum de atenção|Momentum de atenção]] |
| **Genealogia** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]], [[04 genealogias/Gramaticas Produtivas|Gramáticas produtivas]] |
| **Percurso(s)** | [[05 percursos/Da Parede ao Feed|Da parede ao feed]], [[05 percursos/Do artefato ao sinal em feeds algoritmicos|Do artefato ao sinal em feeds algorítmicos]] |
| **Parentes** | [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]], [[03 artefatos/Feed algoritmico do Instagram|Feed algorítmico do Instagram]], [[03 artefatos/Feed algoritmico do X Twitter|Feed algorítmico do X/Twitter]], [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Autoplay|Autoplay]] |
| **Leituras-chave** | Documentação oficial do TikTok sobre For You e sistemas de recomendação |
| **Princípio de design revelado** | Quando consumo e feedback acontecem no mesmo gesto, descoberta pode ser tratada como processo contínuo de inferência em vez de escolha prévia num catálogo |
| **Questão em aberto** | O que acontece com autonomia e diversidade cultural quando a melhor maneira de descobrir algo novo depende de o sistema prever o que será difícil abandonar? |

## Referências

[^1]: ByteDance. “Milestones”. A empresa registra Douyin em setembro de 2016, TikTok fora da China em 2017, aquisição de musical.ly em novembro de 2017 e fusão das plataformas em agosto de 2018. https://www.bytedance.com/en/

[^2]: TikTok. “musical.ly and TikTok unite to debut new worldwide short-form video platform”. 2 ago. 2018. O anúncio descreve explicitamente um feed de comunidade e um “For You” com recomendações personalizadas baseadas em preferências de visualização. https://newsroom.tiktok.com/musical-ly-and/?lang=en

[^3]: TikTok. “Como o TikTok recomenda os vídeos para o feed #ParaVocê”. 18 jun. 2020. https://newsroom.tiktok.com/como-o-tiktok-recomenda-os-videos-para-o-feed-paravoce?lang=pt-BR

[^4]: TikTok Support. “Como o TikTok recomenda conteúdo”. Consultado em 6 out. 2026. A documentação atual descreve interações, informações do conteúdo e informações do usuário como fatores principais e afirma que, para a maioria das pessoas, interações como tempo assistido costumam ter maior peso. https://support.tiktok.com/pt_BR/using-tiktok/exploring-videos/how-tiktok-recommends-content

[^5]: TikTok. “Uma atualização sobre nosso trabalho para proteger e diversificar as recomendações”. 5 jan. 2022. https://newsroom.tiktok.com/proteger-diversificar-recomendacoes/?lang=pt-BR


[^6]: TikTok Support. “How TikTok recommends content”. Consultado em 6 out. 2026. O Para Você considera likes, shares, comentários, vídeos assistidos integralmente ou pulados e afirma que, para a maioria dos usuários, interações como tempo assistido costumam receber peso maior. https://support.tiktok.com/en/using-tiktok/exploring-videos/how-tiktok-recommends-content

[^7]: Quan, Yuhan et al. “Alleviating Video-length Effect for Micro-video Recommendation”. *ACM Transactions on Information Systems*, 42(2), 2024, art. 44. DOI: https://doi.org/10.1145/3617826

[^8]: “Exploring the Limits of Predicting User Watching Behavior with Short-Form Videos on TikTok”. *WebSci ’26 Companion*, 2026. DOI: https://doi.org/10.1145/3795513.3810457

[^9]: Liu, Emily et al. “Relative Advantage Debiasing for Watch-Time Prediction in Short-Video Recommendation”. *AAAI-26*, 40(18), 2026, pp. 15296–15305. DOI: https://doi.org/10.1609/aaai.v40i18.38555


[^10]: TikTok. “Entenda por que um vídeo é recomendado para você”. 20 dez. 2022. O recurso “Por que esse vídeo” lista razões como ações do usuário, contas seguidas ou sugeridas, conteúdo publicado recentemente na região e conteúdo popular na região. https://newsroom.tiktok.com/entenda-por-que-um-video-recomendado?lang=pt-BR

[^11]: TikTok. “5 tips for TikTok creators”. A orientação oficial recomenda hashtags relevantes, sem afirmar que maior quantidade garante alcance, e descreve sons como mecanismos de descoberta e compartilhamento ligados a buscas, trends e desafios. https://newsroom.tiktok.com/5-tips-for-tiktok-creators?lang=en


[^12]: TikTok For Business. “How to use Trends” e Creative Center. Consultados em 6 out. 2026. O Creative Center permite filtrar hashtags em alta por setor e período e abrir análises com trendline, vídeos relacionados, audiência, popularidade regional e hashtags relacionadas. https://ads.tiktok.com/resources/help/article/how-to-use-trends?lang=en ; https://ads.tiktok.com/business/creativecenter/inspiration/popular/hashtag/pc/pt/

[^13]: Zulli, Diana; Zulli, David James. “Extending the Internet meme: Conceptualizing technological mimesis and imitation publics on the TikTok platform”. *New Media & Society*, 24(8), 2022, pp. 1872–1890. DOI: https://doi.org/10.1177/1461444820983603

[^14]: Matamoros-Fernández, Ariadna. “Taking Humor Seriously on TikTok”. *Social Media + Society*, 9(1), 2023. DOI: https://doi.org/10.1177/20563051231157609. A autora destaca funções como “Use this Sound” e Duet na reutilização de sons, dança e challenges por imitação e transformação.

[^15]: Bravin, Marc et al. “How Closely Should You Follow a Trend? Atypicality and Engagement on Social Media”. *Journal of Marketing*, 90(5), 2026. DOI: https://doi.org/10.1177/00222429261466668. O estudo analisa mais de 85 mil vídeos de dança no TikTok e encontra relação não linear entre tipicidade de uma trend e engajamento.
