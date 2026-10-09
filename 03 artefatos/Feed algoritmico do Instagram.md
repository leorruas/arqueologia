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

O relógio, porém, não desapareceu do sistema. Seu papel mudou. Num feed cronológico, o momento da publicação determinava diretamente sua posição na fila. Num feed ranqueado, o horário pode afetar as condições em que uma publicação começa a circular: quantas pessoas potencialmente interessadas estão presentes, quão rapidamente surgem interações e quanta recência o conteúdo ainda possui quando compete com outros candidatos.[^18] Isso ajuda a explicar por que diferentes horários ainda podem produzir desempenhos diferentes sem que exista um “melhor horário” universal. A temporalidade deixa de funcionar como regra única de ordenação e passa a participar do conjunto de sinais e condições que influenciam a distribuição.

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

## O som também participa da compreensão do conteúdo

As publicações em vídeo introduzem uma camada que a imagem estática não oferece: palavras podem existir apenas na fala. A Meta documentou em 2022 a geração automática de legendas de vídeos do Feed do Instagram, inclusive em português, indicando capacidade operacional de converter áudio falado em texto.[^34] Em junho de 2023, a equipe de IA descreveu capacidades de **reconhecimento de áudio** em sistemas de compreensão de conteúdo que apoiavam recomendações de contas não seguidas no Facebook e Instagram. O mesmo texto menciona reconhecimento visual, extração de texto, classificação de assuntos, correspondência por similaridade e agrupamento.[^35] Esses mecanismos tornam plausível tratar a voz como uma fonte de informação temática, além da legenda escrita e dos elementos visíveis do vídeo.

A distinção entre funções é decisiva. Um modelo de **reconhecimento automático de fala (ASR)** pode converter a voz em palavras; um sistema de **reconhecimento de áudio** pode reconhecer padrões sonoros sem transcrever todas as palavras; um classificador pode representar o assunto por meio de texto ou outros vetores. A Meta também publicou modelos abertos de ASR, como o *Massively Multilingual Speech*, mas esse código de pesquisa não identifica o pipeline privado nem os coeficientes atuais do Reels.[^36] Assim, dizer o nome de um político num vídeo pode contribuir para torná-lo semanticamente reconhecível, mas a documentação encontrada não demonstra que a pronúncia de um nome gere bônus, punição ou classificação ideológica automática específica no ranking.

Uma decisão concreta de design decorre dessa possibilidade: tornar a locução inteligível, oferecer legendas revisadas e coordenar a fala com texto na imagem podem melhorar a compreensão e a acessibilidade. Se também alteram retenção, envios e oportunidades de recomendação, isso exige testes. O [[05 percursos/Como funciona a distribuicao no Instagram|guia prático de distribuição no Instagram]] separa o que está documentado do que continua hipótese, enquanto [[05 percursos/Laboratorio de contradesign da distribuicao|o laboratório]] propõe comparações observáveis sem supor que uma transcrição seja, por si, uma instrução ao algoritmo.

## O que o sistema chama de engajamento

A palavra “engajamento” tende a esconder diferenças que importam para o ranking. A literatura de mídias sociais trata engajamento como construto multidimensional e mostra que métricas comportamentais funcionam frequentemente como proxies para algo mais amplo do que o sistema consegue observar diretamente.[^9] Para este estudo, portanto, [[01 conceitos/Engajamento em plataformas digitais|engajamento em plataformas digitais]] funciona como conceito guarda-chuva, enquanto os sinais são analisados separadamente.

[[02 variaveis/Tempo de permanência|Tempo de permanência]] registra duração sem provar satisfação. [[02 variaveis/Propagação|Propagação]] observa quando o conteúdo é redistribuído para outras pessoas. [[02 variaveis/Recência|Recência]] registra proximidade temporal. [[02 variaveis/Popularidade|Popularidade]] observa o volume já acumulado de atenção social. [[02 variaveis/Momentum de atenção|Momentum de atenção]] separa desse estoque o ritmo recente de novas interações. [[02 variaveis/Afinidade inferida|Afinidade inferida]] descreve a força da relação que o sistema estima entre usuário e autor, tema ou conteúdo.

Essas variáveis também mostram que “boa performance” não descreve uma única coisa. Um conteúdo pode performar bem por sustentar permanência, por ser muito redistribuído, por acumular grande volume de atenção ou por ganhar interações rapidamente. Recência funciona de outro modo: é uma condição temporal que pode favorecer ou limitar a oportunidade de competir, sem constituir sucesso por si só. Afinidade inferida também não mede desempenho agregado; ela indica para quais pessoas o sistema estima maior probabilidade de relevância. Assim, dizer que um post “performou bem” só ganha precisão quando se pergunta **em qual dimensão, para qual público e durante qual intervalo de tempo**.

Ainda existe uma camada que essas métricas não alcançam diretamente. [[01 conceitos/Acesso consciente|Acesso consciente]] distingue um conteúdo simplesmente exposto ou processado de uma informação que se tornou disponível para relato, decisão ou ação deliberada. [[02 variaveis/Atenção sustentada|Atenção sustentada]] pergunta se esse foco permaneceu estável ao longo do tempo. Um post pode acumular watch time sem provar qualquer uma das duas coisas. Para o Instagram, isso significa que performance é construída sobre proxies comportamentais: o sistema observa rastros que podem prever relevância sem observar diretamente a experiência mental que “relevância” parece nomear.

Essa decomposição ajuda a entender a mecânica do ranking. Um sistema pode estimar probabilidades diferentes para permanecer, curtir, comentar, compartilhar, salvar ou visitar um perfil e depois combinar essas previsões numa decisão de ordenação. Em sistemas de recomendação, feedback implícito é valioso justamente porque aparece em escala, mas permanece ruidoso e ambíguo: interação observada oferece evidência; ausência de interação não funciona automaticamente como rejeição.[^10]

Podemos representar abstratamente essa transformação como uma coleção de previsões, e não como uma fórmula publicada do Instagram: P(permanecer), P(curtir), P(comentar), P(enviar), P(visitar perfil) e outras. Para produzir uma ordem única, essas previsões precisam ser combinadas segundo objetivos e pesos. Sistemas industriais de recomendação usam arquiteturas multiobjetivo e multitarefa porque diferentes comportamentos carregam informações e valores operacionais diferentes.[^11]

A decisão de peso é uma decisão de design, mas seus valores exatos permanecem opacos. A Meta confirma que o Feed combina probabilidades de diferentes ações e atribui importância diferente a elas, sem publicar os coeficientes usados nessa combinação.[^2] Em 2025, Adam Mosseri ofereceu uma hierarquia parcial: apontou tempo médio de visualização, likes por alcance e envios por alcance como três dos sinais mais importantes para ranking. Likes teriam importância ligeiramente maior na distribuição para pessoas que já seguem a conta, enquanto envios teriam importância ligeiramente maior na distribuição para pessoas que ainda não a seguem.[^22] Isso fornece uma ordem relativa, não uma fórmula: não sabemos quantos likes equivalem a um envio, quanto cada previsão acrescenta ao score nem se esses pesos permanecem constantes entre superfícies, usuários e momentos.

Essa opacidade importa para o design. Ao atribuir pesos diferentes às previsões, o sistema estabelece operacionalmente que tipos de resposta humana contam mais para cada decisão de distribuição. O ranking pode assim produzir efeitos culturais sem possuir uma regra explícita sobre cada propriedade cultural do conteúdo: basta que determinadas propriedades aumentem comportamentos aos quais o sistema concede maior valor.

Há ainda propriedades do conteúdo que podem influenciar esses sinais sem aparecer como sinais declarados do ranking. [[02 variaveis/Valência emocional|Valência emocional]] e [[02 variaveis/Ativação emocional|Ativação emocional]] são duas delas. A literatura encontra relações entre propriedades afetivas e compartilhamento, mas positivo versus negativo é insuficiente para explicar circulação; estudos também apontam diferenças associadas ao nível de ativação.[^13] Replicações preregistradas recentes, porém, não encontraram efeito causal de ativação fisiológica incidental sobre disposição de compartilhar, portanto essa relação permanece dependente de contexto.[^15] Na documentação pública do Feed consultada, a Meta descreve previsões comportamentais e atributos do post, sem declarar valência emocional como variável de ranking.[^14] A hipótese do projeto é, portanto, mediada: propriedade emocional → comportamento → sinal → ranking.

Emoções específicas também não produzem uma ordem estável de performance. Estudos encontram raiva associada a maior circulação ou atenção em alguns contextos, mas há conjuntos em que alegria prevê mais compartilhamento e raiva menos.[^16] Outros trabalhos mostram que negatividade pode aumentar atenção visual sem necessariamente aumentar propagação.[^17] Para este estudo, “qual emoção engaja mais?” precisa sempre ser reescrita como “qual emoção se associa a qual comportamento, em qual contexto?”. Essa regra evita converter evidência contextual em receita universal.

O sistema também precisa interpretar afastamento. [[01 conceitos/Feedback negativo em recomendação|Feedback negativo em recomendação]] separa rejeição explícita, como marcar “Não tenho interesse”, de rejeição implícita, como pular rapidamente um item. A Meta afirma que o controle “Não tenho interesse” reduz recomendações semelhantes e que o reset permite reconstruir recomendações a partir de novas interações.[^19] Literatura de recomendação mostra que skips podem ser modelados como feedback negativo, mas continuam ambíguos porque abandono nem sempre significa desinteresse.[^20] Relatos de 2026 sobre os system cards atuais da Meta indicam que o Feed passou a prever explicitamente a probabilidade de um post ser pulado; como os cartões dinâmicos não ficaram acessíveis diretamente nesta pesquisa, essa atualização é tratada como evidência secundária.[^21]

Isso também separa popularidade de tendência. [[02 variaveis/Popularidade|Popularidade]] registra quanto já aconteceu. [[02 variaveis/Momentum de atenção|Momentum de atenção]] registra quão rapidamente está acontecendo agora. [[02 variaveis/Recência|Recência]] registra há quanto tempo o item surgiu. [[01 conceitos/Tendência em plataformas|Tendência em plataformas]] descreve o padrão composto em que atenção cresce, atinge picos, persiste ou decai. A literatura de recomendação trata dinâmica temporal, popularidade, recência e tendências como dimensões distintas porque o valor dos itens e as preferências dos usuários mudam com o tempo.[^12]

A distinção também encontra apoio na própria documentação pública do Instagram: entre as informações sobre um post, a plataforma descreveu tanto quantas pessoas interagiram quanto quão rapidamente likes, comentários, compartilhamentos e salvamentos estavam chegando.[^18] Isso sustenta a separação entre estoque e velocidade, mas não autoriza dizer que exista internamente uma variável pública chamada “hot topic”.

## De acompanhar pessoas a descobrir conteúdos

A transformação seguinte aparece quando o feed deixa de ordenar apenas aquilo que vem das contas seguidas e começa também a inserir recomendações de contas desconhecidas. Em 2022, o Instagram reintroduziu as visualizações **Following** e **Favorites** em ordem cronológica, enquanto descrevia o feed principal como um espaço que receberia cada vez mais recomendações baseadas em interesses.[^4]

A arquitetura técnica publicada em 2023 mostra a escala dessa mudança. Para recomendações de conteúdo “não conectado”, os sistemas podem partir de dezenas de bilhões de candidatos, reduzir o conjunto para milhares e depois para algumas centenas antes da classificação final.[^5] O problema deixa de ser somente ordenar uma rede social já construída. O sistema também precisa descobrir, entre um universo enorme, aquilo que pode merecer entrada na rede perceptiva de cada usuário.

Isso torna o ranking uma política de distribuição. Em 2024, o Instagram anunciou mudanças destinadas a ampliar a exposição inicial de criadores menores, substituir reposts por conteúdo original em recomendações e retirar determinados agregadores da elegibilidade para recomendações.[^6] A plataforma não estava apenas recalculando preferências individuais. Estava decidindo que tipos de origem deveriam ganhar mais oportunidade de circulação.

Em janeiro de 2026, a Meta afirmou que 75% das recomendações vistas nos Estados Unidos no Instagram já vinham de posts originais, depois de mudanças voltadas a aumentar a presença desse conteúdo.[^7] Esse dado é específico ao contexto anunciado pela empresa, mas mostra como critérios editoriais, econômicos e de produto podem entrar na própria infraestrutura de ranking.

Essa infraestrutura cria uma fronteira pouco visível para quem produz conteúdo. Alcançar pessoas que não seguem uma conta indica descoberta fora da relação explícita com o autor; ainda não permite afirmar que a publicação atravessou comunidades com interesses, vínculos ou posições diferentes. A recomendação pode selecionar desconhecidos muito semelhantes à audiência atual, porque proximidade de comportamento e [[02 variaveis/Afinidade inferida|afinidade inferida]] também ajudam a tornar uma previsão segura. A distinção entre público não conectado e público socialmente distante permanece uma hipótese analítica, pois os dados públicos de alcance não revelam integralmente como essas audiências se sobrepõem.

Há pelo menos dois caminhos distintos para uma publicação chegar além do público habitual: recomendação do sistema e [[02 variaveis/Propagação|propagação]] realizada por pessoas. Um envio privado pode inserir a peça numa relação social que o criador desconhece; ainda assim, compartilhar dentro de uma rede homogênea também pode aprofundar o mesmo circuito de interesse. Em 2024, o Instagram apresentou os *Trial Reels* para experimentar vídeos inicialmente com não seguidores e avaliar seu desempenho, ampliando a disponibilidade do recurso em 2025.[^23] A função cria uma oportunidade de testar audiências fora da base de seguidores, sem medir por si só diversidade social, compreensão ou mudança de perspectiva.

A interpretação arqueológica aqui é que “relevância” nunca é apenas uma propriedade descoberta pelo modelo. Ela é produzida por uma combinação de previsão, elegibilidade, objetivos e escolhas sobre o que vale a pena testar. O feed decide tanto **quem parece gostar de quê** quanto **o que pode concorrer por esse gosto**.

A [[03 artefatos/Hashtag|hashtag]] ajuda a distinguir associação temática de recomendação: uma etiqueta pode favorecer recuperação e contexto sem representar uma previsão de afinidade suficiente para ordenar o feed. Já [[03 artefatos/Remix Duet e Stitch|Remix]] transforma conteúdo preexistente em matéria-prima de uma nova peça, com novos sinais de recepção e políticas próprias de elegibilidade.

[[03 artefatos/Collab do Instagram|Collab]] acrescenta uma possibilidade diferente de ampliar os caminhos de descoberta: a mesma publicação passa a estar associada a mais de uma conta. Isso pode criar oportunidades de encontro entre redes, sem comprovar distância cultural entre elas ou garantir aumento de alcance. A decisão de coassinar pertence aos participantes; o sistema continua determinando como a publicação será distribuída.

## Quem treina quem?

A personalização cria uma relação circular. Usuários treinam o sistema ao agir; o sistema reorganiza o ambiente em que as ações seguintes ocorrerão. Em 2024, o Instagram anunciou uma ferramenta para zerar recomendações em Explore, Reels e Feed e reconstruí-las a partir das novas interações.[^8] A existência desse mecanismo torna visível um problema que a própria personalização produz: um modelo aprendido pode continuar representando interesses que a pessoa já não quer reforçar.

Também há controles que devolvem parte da ordenação ao usuário, como Following e Favorites cronológicos. Eles mostram que autonomia aqui não depende apenas de conseguir parar de rolar. Ela depende também de quem decide quais candidatos entram no primeiro plano e de quão fácil é corrigir essa decisão. Isso aproxima o artefato de [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]].

O poder permanece assimétrico. A pessoa pode seguir, curtir, ocultar, trocar para uma visão cronológica ou resetar recomendações. A plataforma define os objetivos centrais dos sistemas, os sinais que entram no cálculo, políticas de elegibilidade e mudanças posteriores de distribuição. Uma publicação pode continuar existindo e ainda assim perder visibilidade sem que o usuário consiga reconstruir todo o caminho que produziu essa ausência.

Para criadores, essa infraestrutura provavelmente produz uma adaptação recíproca: quando certos sinais parecem aumentar distribuição, formatos passam a ser imaginados também em relação ao sistema que os mede. Essa é uma hipótese em aberto e precisa de estudo próprio antes de virar regra histórica. O ponto seguro é que o feed torna a distribuição responsiva ao comportamento e, por isso, cria incentivos para que usuários e produtores tentem compreender seus critérios.

O parentesco com [[03 artefatos/Infinite Scroll|Infinite Scroll]] ajuda a separar duas operações frequentemente confundidas. Infinite Scroll remove um ponto de parada e torna barato continuar. O feed algorítmico decide **o que ocupará essa continuidade**. O [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]] combina essa seleção com outra gramática de consumo: uma unidade dominante, descarte por swipe e aprendizado durante a própria sequência.

Talvez a consequência mais profunda do ranking personalizado apareça quando previsão e preferência começam a formar um ciclo. Se o sistema usa nosso comportamento para prever o que veremos e aquilo que vemos condiciona as próximas oportunidades de comportamento, a pergunta deixa de ser apenas se o algoritmo “acerta” nossos interesses. A tensão passa a ser **quando uma previsão de relevância começa também a participar da produção daquilo que aprendemos a considerar relevante**.

O ciclo descrito acima também pode operar no lado de quem publica. Sinais de recepção são registrados, parte deles influencia decisões de distribuição e os resultados reaparecem em indicadores de desempenho. Quando um produtor observa repetidamente esses resultados, pode alterar suas decisões seguintes. **O sistema mede comportamentos e pode participar das condições em que novos comportamentos serão produzidos.** Essa última etapa é uma hipótese sobre adaptação humana, não uma propriedade garantida do cálculo.

Esse mecanismo aproxima o feed de [[04 genealogias/Gramaticas Produtivas|gramáticas produtivas]] e de [[01 conceitos/Dispositivo|dispositivo]]. Os formatos disponíveis organizam o espaço da publicação; critérios de elegibilidade, métricas, práticas de produção e sistemas de recomendação participam de sua circulação. A autoridade para criar uma publicação continua diferente da autoridade para definir quais critérios aumentarão sua visibilidade.

Para os destinatários, a [[02 variaveis/Afinidade inferida|afinidade inferida]] pode criar oportunidades desiguais de contato com temas e autores. Exposição repetida, porém, não demonstra concordância nem formação duradoura de preferências. A hipótese de influência sobre repertórios exige estudos de recepção, comparação e observação de escolhas para além das métricas nativas.

## Quando o criador antecipa a resposta do sistema

A estrutura do feed também pode influenciar decisões editoriais anteriores à publicação. Em seu estudo do *jogo da visibilidade*, Kelley Cotter observou discussões entre influenciadores do Instagram que tentavam interpretar regras de alcance, conciliando suas expectativas com discursos de autenticidade e empreendedorismo.[^24] Esse aprendizado percebido não comprova que as explicações dos criadores correspondam às regras efetivas do ranking.

Taina Bucher investigou experiências de usuários do Facebook e chamou de *imaginário algorítmico* as concepções e sensações mobilizadas na relação com algoritmos.[^25] A aplicação ao Instagram é comparativa: um criador pode evitar certos assuntos porque acredita que reduzirão sua visibilidade, mesmo quando a hipótese sobre a causa da queda não foi verificada. A consequência comportamental pode existir sem que a explicação do sistema esteja correta.

Para reconstruir o processo, é preciso distinguir **o que o criador publicou, o que a plataforma mostrou, o que ele acreditou que aconteceu e o que decidiu publicar depois**. Essa investigação se conecta ao [[01 conceitos/Dispositivo|dispositivo]] e exige examinar elegibilidade para recomendação, mudanças de audiência, conteúdo e contexto, em vez de deduzir um tratamento ideológico a partir de duas métricas.

## Quando elegibilidade e política entram na distribuição

Uma decisão explícita de política de recomendação oferece evidência particularmente concreta de como visibilidade pode orientar práticas. Em fevereiro de 2024, a Meta anunciou que Instagram e Threads deixariam de recomendar proativamente determinados conteúdos políticos de contas que os usuários não seguiam. Isso afetava superfícies como Explorar, Reels e recomendações no Feed, mas não era uma proibição de publicar nem uma remoção automática das publicações para seguidores.[^26] A empresa indicou que contas profissionais poderiam consultar seu status de elegibilidade, editar ou remover publicações, pedir revisão e até deixar de publicar esses temas por um período para buscar restabelecer a condição de recomendabilidade.

O interesse arqueológico está nessa última possibilidade: **uma política de visibilidade pode introduzir razões para modificar o comportamento editorial antes da próxima publicação**. Existe uma diferença entre o efeito documentado da regra, a expectativa desenvolvida pelo produtor e a experiência concreta de uma conta. Comparar impressões de publicações políticas e não políticas não permite, sozinho, concluir que o sistema diferencia ideologicamente esquerda e direita.

Em janeiro de 2025, a Meta anunciou uma revisão da abordagem, dizendo que voltaria a recomendar progressivamente mais conteúdo político com base em sinais personalizados, em Facebook, Instagram e Threads.[^27] Por isso, a política anunciada em 2024 precisa ser tratada historicamente; sua redação não comprova quais critérios estavam efetivamente ativos em outubro de 2026. A continuidade, a escala e os possíveis efeitos de cada configuração precisam ser verificados por período e superfície.

Os experimentos de Guess e colaboradores sobre feeds cronológicos de Facebook e Instagram na eleição norte-americana de 2020 ampliam a cautela.[^28] A mudança de ordenação alterou exposição e atividades, mas não detectou efeitos significativos nos principais indicadores de atitudes políticas analisados. Resultados posteriores de uma plataforma diferente não podem ser transportados diretamente ao Instagram. O mecanismo geral em investigação permanece: uma decisão sobre o que é elegível, encontrável e recomendado pode participar das condições futuras de expressão; seus efeitos sociais e ideológicos exigem prova específica.

## Duas memórias: histórico do destinatário e histórico da conta criadora

Uma publicação não encontra uma audiência abstrata. Para decidir quais conteúdos sugerir, o sistema pode utilizar o histórico de quem recebe a recomendação: contas seguidas, conteúdos com os quais houve interação, similaridade entre autores e temas. Em dezembro de 2020, a engenharia do Instagram publicou uma consulta de demonstração para Suggested Posts que recuperava até 30 itens curtidos por um usuário, buscava contas próximas em um espaço de embeddings, selecionava até dez publicações por conta e aplicava filtros, ordenação e diversidade.[^29] Esses são limites daquela **consulta exemplificativa**, não uma janela temporal global de memória, nem evidência de que o sistema atual considere somente trinta curtidas.

Em 2023, a equipe de Explore documentou outro mecanismo: aproveitar embeddings de publicações anteriormente curtidas, salvas ou compartilhadas para buscar itens semelhantes. A seleção de quais itens históricos serviriam de semente passava por filtragem de qualidade, para não transformar qualquer clique ocasional em uma enxurrada de recomendações similares.[^30] O artigo também descreveu modelos *two-tower*, com representações de usuário e item que permitem recuperar candidatos em escala. A memória do destinatário, portanto, pode afetar **quais publicações chegam a ser consideradas**, antes da pontuação final de cada candidato. Nem toda superfície ou período emprega a mesma arquitetura.

A conta criadora possui outro histórico, com consequências que não se reduzem à afinidade pessoal do destinatário. Em abril de 2024, a Meta anunciou que contas com dez ou mais republicações não originais nos trinta dias anteriores poderiam perder elegibilidade para áreas de recomendação; a recuperação foi descrita como possível trinta dias após a última republicação não original, com consulta e recurso pelo *Status da conta*.[^31] A empresa também estabeleceu a possibilidade de tornar contas temporariamente não recomendáveis por violações repetidas das diretrizes, embora não tenha divulgado uma fórmula universal para essas decisões. O exemplo é um limite documentado **sobre uma conta criadora**, e não um coeficiente de afinidade. Sua vigência exata precisa ser conferida para períodos posteriores.

A mesma comunicação descreveu um refinamento da circulação dos Reels elegíveis: oferecer inicialmente uma oportunidade a um público menor, incluindo pessoas que não seguiam a conta, e ampliar progressivamente a distribuição conforme a recepção. A política procurava reduzir a vantagem histórica de grandes perfis, cujas audiências existentes haviam pesado no desempenho de recomendações.[^31] Temos, assim, uma terceira camada além dos dois históricos: a **resposta inicial a uma publicação específica**, que pode afetar suas oportunidades posteriores. A arquitetura anunciada não garante crescimento em etapas idênticas para todo vídeo nem revela os parâmetros operacionais usados hoje.

Essa diferenciação ganha complexidade com sistemas recentes de recuperação de candidatos. Em maio de 2026, a engenharia da Meta apresentou o SilverTorch, arquitetura que integra recuperação de conteúdo, filtragem de elegibilidade, previsões de interação e atualização de sinais em alta frequência.[^32] A publicação descreve capacidades técnicas de uma família de serviços de recomendação em escala; não fornece o código integral do ranking de Reels nem demonstra o valor numérico de cada fator em uma conta brasileira. Ela confirma, contudo, que a seleção de candidatos e a aplicação de restrições já podem ocorrer **antes** da etapa final de ordenação.

O diagnóstico de uma queda de alcance depende de saber em qual relação ela apareceu. Uma publicação pode deixar de ser recomendável por seu conteúdo ou pela condição da conta; pode ser elegível, mas receber previsão de interesse baixa para certos destinatários; ou pode ter uma recepção inicial insuficiente para alcançar grupos adicionais. O criador vê impressões, visualizações e, em alguns casos, alcance de seguidores e não seguidores, mas esses números não identificam sozinhos qual mecanismo atuou. **Histórico do destinatário, histórico da conta criadora, elegibilidade da publicação e recepção observada constituem quatro fontes distintas de variação** que precisam permanecer separadas na arqueologia do feed.

## A mediana de visualizações pode evidenciar desigualdade sem explicar sua causa

Em outubro de 2026, circulou uma peça gráfica intitulada *Mediana de visualizações dos Reels no Instagram*, compartilhada no X pela conta de Nikolas Ferreira em 8 de outubro e reproduzida em reportagem no dia seguinte.[^33] A imagem compara oito perfis públicos. Os valores apresentados foram 41,1 milhões para Nikolas Ferreira, 24,5 milhões para Neymar Jr., 24,2 milhões para Kylie Jenner, 15,7 milhões para MrBeast, 15,4 milhões para Virginia, 5,4 milhões para Donald Trump, 3,1 milhões para Zohran Mamdani e 2,4 milhões para Barack Obama. Esses valores são **alegações do gráfico compartilhado**, e não medianas que o Arqueologia do Design tenha reproduzido com dados brutos.

A medida escolhida merece atenção. Uma mediana de visualizações é o ponto central da distribuição de resultados dos Reels observados em uma amostra definida. Ela descreve o desempenho típico dentro desse conjunto, resistindo mais a valores extremos do que uma média aritmética. A figura, contudo, não especifica quais vídeos foram incluídos, quantos foram medidos por perfil, o período de publicação, a duração disponível para acumular visualizações, se houve impulsionamento pago ou como foram tratados vídeos colaborativos. Também não distingue visualizações repetidas de pessoas distintas nem apresenta a origem da circulação por seguidores e não seguidores. Sem esses dados, não é possível reproduzir a estatística ou atribuir diferenças ao ranking.

As contas comparadas também não são equivalentes: reúnem políticos de diferentes países, esportistas, produtores de entretenimento e personalidades com histórias de audiência distintas. O gráfico não organiza suas linhas inteiramente em ordem decrescente — Kylie Jenner, com 24,2 milhões, aparece abaixo de perfis com valores inferiores —, um detalhe de diagramação que torna a leitura intuitiva diferente da ordenação numérica. A desigualdade dos números expostos é visualmente marcante, mas a escolha dos participantes e da escala não controla idioma, frequência de postagem, formato, temas ou momento de circulação.

O exemplo retoma a distinção entre condições de **quem publica** e de **quem recebe**. Um perfil pode reunir uma audiência com forte histórico de interesse no criador; algumas publicações podem obter resposta inicial elevada e ganhar novas oportunidades de recomendação; outras contas podem enfrentar restrições de elegibilidade documentadas. Nenhuma dessas explicações foi verificada para os oito perfis. A mediana agregada não revela se ocorreu uma penalidade aplicada à conta, um filtro sobre determinada publicação, uma previsão de baixo interesse para certos receptores ou uma diferença de recepção humana. Também não fornece evidência suficiente de favorecimento ideológico deliberado.

Uma auditoria reproduzível começaria por identificar os Reels de cada perfil e o instante da coleta, documentar os critérios de inclusão e recomputar a mediana a partir dos dados observados. Uma segunda etapa compararia resultados relativos ao público disponível e, quando acessíveis, a proporção de seguidores e não seguidores, a idade dos vídeos, características editoriais e alterações no *Status da conta*. A comparação entre dois posts do mesmo autor reduz algumas diferenças entre perfis, mas ainda exige controle de tema, formato, horário e histórico de recepção. **A pergunta histórica sobre poder continua aberta; os dados precisam primeiro permitir distinguir os mecanismos de distribuição que se pretende explicar.**

Para uma síntese de consulta rápida, acompanhada de referências e decisões editoriais testáveis, o percurso [[05 percursos/Como funciona a distribuicao no Instagram|Como funciona a distribuição no Instagram]] reúne as etapas de seleção, elegibilidade, previsão, distribuição e recepção. A comparação de táticas preserva a diferença entre regra documentada, hipótese de design e truque sem comprovação, permitindo voltar a este estudo histórico quando surgir uma dúvida de procedência.

## Quando o indicador de circulação deixa de ser confiável

Uma falha reconhecida pela Meta em outubro de 2026 acrescentou uma complicação à análise de alcance: os números apresentados pela plataforma também podem estar incorretos. Em resposta publicada pelo *Correio Braziliense* em 8 de outubro, a empresa confirmou um problema técnico que afetava algumas métricas de vídeo do Instagram. A reportagem constatou pelo menos um Reel com mais curtidas do que visualizações exibidas.[^40] O [*Diário do Centro do Mundo*](https://www.diariodocentrodomundo.com.br/meta-falha-instagram-campanha-lula-alcance-videos/) noticiou no dia seguinte as suspeitas levantadas pela campanha de Lula e reproduziu números de um relatório interno sobre diferenças de engajamento entre duas candidaturas.[^39]

Os três níveis de afirmação precisam permanecer distintos. **Documentado:** a Meta reconheceu falha na medição de algumas métricas. **Relatado pela campanha:** havia diferença relevante de desempenho entre perfis, e ela poderia representar um problema de igualdade de condições. **Não demonstrado pelas fontes:** que o problema tenha afetado a entrega efetiva dos vídeos ou favorecido uma candidatura. Mesmo a presença de mais curtidas do que visualizações públicas exige apuração da contagem, não permite inferir sozinha a ação de um filtro político. O título do DCM é mais categórico que as ressalvas presentes na reportagem.

O episódio liga [[02 variaveis/Popularidade|popularidade]] à **confiabilidade da mensuração**: um contador de visualizações pode parecer representar uma audiência observada, enquanto um defeito de instrumentação impede saber se a circulação estagnou ou se apenas a apresentação dos resultados falhou. Para investigar um caso real seria necessário distinguir dados exibidos, eventos registrados, públicos efetivamente alcançados e regras que selecionaram as recomendações. O [[05 percursos/Como funciona a distribuicao no Instagram|guia de distribuição]] transforma essa distinção em orientação para leitura e auditoria.

## O limite da transparência como decisão de interface

Os cartões de sistemas divulgados pela Meta em 2023 distinguem Feed, recomendações, Explorar, Reels e outros mecanismos, descrevendo previsões relevantes para cada superfície. A empresa afirmou que publicava os dez modelos de previsão mais importantes em cada cartão, em lugar de todos os modelos e sinais, e reconheceu que os sistemas mudam frequentemente.[^37] Um artigo técnico de 2025 identificou camadas de recuperação, ranking inicial e ranking final em várias superfícies, com numerosas configurações em experimentação.[^38] A documentação permite reconhecer uma arquitetura e exemplos de decisões; não fornece o código integral implantado, os pesos de cada sinal em outubro de 2026 nem as razões completas por que determinada pessoa deixou de receber certa publicação.

A diferença entre as condições de quem produz e de quem recebe permanece particularmente difícil de auditar. Conhecemos exemplos históricos de janelas de recuperação do receptor e regras explícitas de elegibilidade de contas que publicam conteúdo não original. Não conhecemos uma janela universal de memória dos destinatários, uma fórmula abrangente de eventual reputação de criadores, os limiares atuais de expansão de Reels nem os atributos exatos usados para relacionar uma palavra transcrita, uma imagem ou um tema à distribuição. Desconhecer um coeficiente **não demonstra que ele exista**; também não autoriza descartá-lo quando a arquitetura admite diferentes classificadores.

Essa assimetria repercute na experiência do autor: as métricas mostram resultados agregados, enquanto as condições internas de seleção, pontuação e não exposição não são disponibilizadas de maneira integral e reproduzível para cada post. O [[05 percursos/Como funciona a distribuicao no Instagram|guia prático de distribuição no Instagram]] reúne, em linguagem de consulta, o que está declarado, o que pode ser testado externamente e aquilo que permanece fora do alcance desta investigação. A pergunta de design é quem consegue explicar, contestar e verificar as regras de visibilidade de um sistema cuja participação se torna parte da rotina de produzir informação.

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
| **Conceitos relacionados** | [[01 conceitos/Economia da Atencao|Economia da atenção]], [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]], [[01 conceitos/Engajamento em plataformas digitais|Engajamento em plataformas digitais]], [[01 conceitos/Tendência em plataformas|Tendência em plataformas]], [[01 conceitos/Feedback negativo em recomendação|Feedback negativo em recomendação]], [[01 conceitos/Acesso consciente|Acesso consciente]] |
| **Variáveis relacionadas** | [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Atencao|Atenção]], [[02 variaveis/Tempo de permanência|Tempo de permanência]], [[02 variaveis/Propagação|Propagação]], [[02 variaveis/Recência|Recência]], [[02 variaveis/Popularidade|Popularidade]], [[02 variaveis/Momentum de atenção|Momentum de atenção]], [[02 variaveis/Afinidade inferida|Afinidade inferida]], [[02 variaveis/Valência emocional|Valência emocional]], [[02 variaveis/Ativação emocional|Ativação emocional]], [[02 variaveis/Atenção sustentada|Atenção sustentada]] |
| **Genealogia** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]] |
| **Percurso(s)** | [[05 percursos/Da Parede ao Feed|Da parede ao feed]], [[05 percursos/Do artefato ao sinal em feeds algoritmicos|Do artefato ao sinal em feeds algorítmicos]] |
| **Parentes** | [[03 artefatos/Botao Like|Botão Like]], [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]] |
| **Leituras-chave** | Meta AI, “Instagram Feed Ranking System Card” (2022); Trunfio & Rossi (2021) sobre engajamento; Hu, Koren & Volinsky (2008) sobre feedback implícito; Jeunen et al. (2024) sobre recomendação multiobjetivo; Berger & Milkman (2012) e Prowten et al. (2024) sobre emoção e propagação |
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

[^11]: Jeunen, Olivier; Mandav, Jatin; Potapov, Ivan; Agarwal, Nakul; Vaid, Sourabh; Shi, Wenzhe; Ustimenko, Aleksei. “Multi-Objective Recommendation via Multivariate Policy Learning”. *Proceedings of the 18th ACM Conference on Recommender Systems (RecSys 2024)*. O trabalho descreve sistemas reais que equilibram objetivos como clicks, shares e dwell time por meio de scalarisation e pesos aprendidos em relação a uma métrica North Star.

[^12]: Koren, Yehuda. “Collaborative Filtering with Temporal Dynamics”. *Proceedings of KDD 2009*, 2009. DOI: https://doi.org/10.1145/1557019.1557072. Ver também Karimi et al., “News recommender system: a review of recent progress, challenges, and opportunities”, *Artificial Intelligence Review*, 2021.


[^13]: Berger, Jonah; Milkman, Katherine L. “What Makes Online Content Viral?”. *Journal of Marketing Research*, 49(2), 2012, pp. 192–205. DOI: https://doi.org/10.1509/jmr.10.0353

[^14]: Meta AI. “Instagram Feed Ranking System Card”. Atualizado em 23 fev. 2022. A documentação descreve probabilidades de ações, atributos do post e histórico de interação; valência emocional não aparece como sinal declarado nessa explicação pública. https://ai.meta.com/tools/system-cards/instagram-feed-ranking/


[^15]: Prowten, Skyler et al. “Does Physiological Arousal Increase Social Transmission of Information? Two Replications of Berger (2011)”. *Psychological Science*, 35(9), 2024, pp. 1025–1034. DOI: https://doi.org/10.1177/09567976241257255


[^16]: Berger e Milkman (2012) encontraram maior viralidade para admiração, raiva e ansiedade e menor para tristeza no conjunto estudado. Em contraste, Luo, Kai; Yang, Yang; Teo, Hock Hai. “The Asymmetric Influence of Emotion in the Sharing of COVID-19 Science on Social Media: Observational Study”. *JMIR Infodemiology*, 2(2), 2022, e37331. DOI: https://doi.org/10.2196/37331. No conjunto analisado de tweets sobre ciência da COVID-19, valência positiva associou-se a maior difusão, mostrando dependência de contexto e conteúdo.

[^17]: Kohout, Susann; Kruikemeier, Sanne; Bakker, Bert N. “May I have your Attention, please? An eye tracking study on emotional social media comments”. *Computers in Human Behavior*, 139, 2023, 107495. O estudo encontrou maior atenção visual para comentários negativos e, em condição de processamento sistemático, para raiva em comparação com medo.


[^18]: Instagram. “Instagram Ranking Explained”, 31 maio 2023. A explicação pública do Feed descreveu sinais sobre quantas pessoas e quão rapidamente elas curtem, comentam, compartilham e salvam uma publicação. O texto foi reproduzido em fontes secundárias e registros contemporâneos; os pesos e a implementação interna não foram publicados.


[^19]: Meta. “Testing More Ways to Control What You See on Instagram”, 30 ago. 2022; Meta, “Reshape Your Instagram With a Recommendations Reset”, 19 nov. 2024.

[^20]: Gong, Shansan; Zhu, Kenny Q. “Positive, Negative and Neutral: Modeling Implicit Feedback in Session-based News Recommendation”. *SIGIR ’22*, 2022. DOI: https://doi.org/10.1145/3477495.3532040; Wang, Yueqi et al. “Learning from Negative User Feedback and Measuring Responsiveness for Sequential Recommenders”. *RecSys ’23*, 2023. DOI: https://doi.org/10.1145/3604915.3610244

[^21]: Aubrium Research Editorial. “The Minus Sign: What Instagram Scores Against You”, 2026. A fonte relata leitura dos system cards da Meta atualizados em junho de 2026 e reproduz previsões de skip no Feed e Feed Recommendations. Usada como confirmação secundária do estado atual dos cartões.

[^22]: Hutchinson, Andrew. “Instagram Shares Algorithm Insights To Inform Strategy”. *Social Media Today*, 22 jan. 2025. O texto reproduz declaração de Adam Mosseri segundo a qual watch time, likes e sends são os três sinais mais importantes para ranking; likes pesam relativamente mais para audiência conectada e sends para audiência não conectada. A declaração fornece importância relativa, não coeficientes numéricos.

[^23]: Meta. “Test Content With Non-Followers Using Trial Reels”. 10 dez. 2024, atualizado em 2025; “Inspiring Creativity That Brings People Together”. 12 jun. 2025. Documentam exposição inicial a não seguidores e posterior expansão do recurso, sem afirmar que públicos alcançados sejam socialmente diferentes. https://about.fb.com/news/2024/12/trial-reels-try-content-non-followers-first-see-what-perfoms-best/ ; https://about.fb.com/news/2025/06/inspiring-creativity-that-brings-people-together/

[^24]: Cotter, Kelley. “Playing the Visibility Game: How Digital Influencers and Algorithms Negotiate Influence on Instagram”. *New Media & Society*, 21(4), 2019. https://doi.org/10.1177/1461444818815684

[^25]: Bucher, Taina. “The Algorithmic Imaginary: Exploring the Ordinary Affects of Facebook Algorithms”. *Information, Communication & Society*, 20(1), 2017. https://doi.org/10.1080/1369118X.2016.1154086

[^26]: Meta. “Atualização de nossa abordagem sobre conteúdo político no Instagram e no Threads”. 9 fev. 2024; atualização de 12 ago. 2024. Declara redução de recomendação proativa a contas não seguidas e opções de revisão de elegibilidade. https://about.fb.com/br/news/2024/02/atualizacao-de-nossa-abordagem-sobre-conteudo-politico-no-instagram-e-no-threads/

[^27]: Meta. “Mais expressão e menos erros”. 7 jan. 2025. Anuncia retomada gradual e personalizada de recomendações de conteúdo cívico. https://about.fb.com/br/news/2025/01/mais-expressao-e-menos-erros/

[^28]: Guess, Andrew M. et al. “How do social media feed algorithms affect attitudes and behavior in an election campaign?”. *Science*, 381, 2023, pp. 398–404. https://doi.org/10.1126/science.abp9364

[^29]: Meta Engineering. “How Instagram suggests new content”. 10 dez. 2020. Consulta de demonstração com `.liked(max_num_to_retrieve=30)`, `.account_nn(embedding_config=default)` e `.posted_media(max_media_per_account=10)`. https://engineering.fb.com/2020/12/10/web/how-instagram-suggests-new-content/

[^30]: Meta Engineering. “Scaling the Instagram Explore recommendations system”. 9 ago. 2023. Recuperação baseada em embeddings de itens presentes no histórico de interações e seleção de sementes, com modelos *two-tower*. https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/

[^31]: Meta. “Ajudando o criador de conteúdo a encontrar novos públicos”. 30 abr. 2024. Anuncia regra de agregadores com dez ou mais republicações não originais em trinta dias, janela de possível recuperação, regras de recomendabilidade e distribuição inicial de Reels elegíveis. https://about.fb.com/br/news/2024/04/ajudando-o-criador-de-conteudo-a-encontrar-novos-publicos/

[^32]: Meta Engineering. “SilverTorch: Index as Model — A New Retrieval Paradigm for Recommendation Systems”. 26 maio 2026. Descreve arquitetura de recuperação, elegibilidade e scoring em escala; não revela pesos atuais do Instagram Reels. https://engineering.fb.com/2026/05/26/ml-applications/silvertorch-index-as-model-new-retrieval-paradigm-recommendation-systems/

[^33]: Comparativo “Mediana de visualizações dos Reels no Instagram”, imagem compartilhada por Nikolas Ferreira em publicação de 8 out. 2026 no X e reproduzida em *Minas em Dia*, “Nikolas Ferreira divulga ranking em que supera Neymar, MrBeast e Trump em visualizações no Instagram”, 9 out. 2026. A reportagem apresenta os mesmos valores, mas não fornece planilha, período, amostra ou método de coleta para verificá-los. https://x.com/nikolas_dm/status/2108343363900748183 ; https://minasemdia.com.br/2026/10/09/nikolas-ferreira-supera-neymar-reels/

[^34]: Meta. “Recognizing Global Accessibility Awareness Day”. 19 maio 2022. Informa que legendas automáticas estavam disponíveis em vídeos do Feed do Instagram em vários idiomas, inclusive português. https://about.fb.com/news/2022/05/recognizing-global-accessibility-awareness-day/

[^35]: Meta AI. “The AI behind unconnected content recommendations on Facebook and Instagram”. 29 jun. 2023. Descreve *audio recognition*, extração de texto e classificação temática nos sistemas de compreensão de conteúdo usados em recomendações, sem revelar transcrições ou pesos de cada Reel. https://ai.meta.com/blog/ai-unconnected-content-recommendations-facebook-instagram/

[^36]: Meta. “Apresentamos a conversão de fala para texto, texto para fala e mais novidades para mais de 1.100 idiomas”. 22 maio 2023. https://about.fb.com/br/news/2023/05/apresentamos-a-conversao-de-fala-para-texto-texto-para-fala-e-mais-novidades-para-mais-de-1-100-idiomas/ ; Meta Research. *Massively Multilingual Speech*: implementação pública de pesquisa, não reprodução do ranking de Reels. https://github.com/facebookresearch/fairseq/tree/main/examples/mms

[^37]: Meta AI. “Introducing 22 system cards that explain how AI powers experiences on Facebook and Instagram”. 29 jun. 2023. Informa múltiplos sistemas de recomendação, milhares de sinais e divulgação seletiva dos dez modelos de previsão mais importantes por cartão. https://ai.meta.com/blog/how-ai-powers-experiences-facebook-instagram-system-cards/

[^38]: Meta Engineering. “Journey to 1000 models: Scaling Instagram's recommendation system”. 21 maio 2025. Descreve o funil de recuperação, early-stage ranking e late-stage ranking e a frequência de experimentação. https://engineering.fb.com/2025/05/21/production-engineering/journey-to-1000-models-scaling-instagrams-recommendation-system/

[^39]: *Diário do Centro do Mundo*. “Meta admite falha que prejudicou vídeos de Lula no Instagram e favoreceu campanha de Flávio Bolsonaro”. 9 out. 2026. Reconhecimento de falha de métricas e suspeitas eleitorais; efeito na entrega e favorecimento não confirmados. https://www.diariodocentrodomundo.com.br/meta-falha-instagram-campanha-lula-alcance-videos/

[^40]: Strickland, Fernanda; Souza, Renato. “Eleições: Meta admite falha na contagem de visualizações em vídeos no Instagram”. *Correio Braziliense*, 8 out. 2026. https://www.correiobraziliense.com.br/politica/2026/10/7517736-eleicoes-meta-admite-falha-na-contagem-de-visualizacoes-em-videos-no-instagram.html
