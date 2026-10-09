---
title: "Como funciona a distribuição no Instagram"
type: "percurso"
status: "rascunho"
tags:
  - design/percurso
  - arqueologia
  - guia-pratico
---

# Como funciona a distribuição no Instagram

Um guia de leitura prática para entender o que sabemos sobre o sistema de recomendação, quais decisões de design podem ajudar uma publicação a circular e quais explicações ainda são apenas hipóteses. Atualizado em **9 de outubro de 2026**. As regras mudam; as datas das fontes importam.

Imagine duas publicações de uma mesma conta. Uma chega a milhares de pessoas; outra quase não sai de sua audiência habitual. É tentador pensar que o Instagram gostou de uma e puniu a outra. O problema é que **o mesmo resultado pode nascer de mecanismos diferentes**: uma restrição sobre a conta, uma restrição sobre a publicação, previsões diferentes para os possíveis destinatários, reações diferentes do público ou uma combinação deles. Nosso ponto de partida é o [[03 artefatos/Feed algoritmico do Instagram|feed algorítmico do Instagram]]; este percurso reorganiza a pesquisa para quem precisa tomar decisões e testar hipóteses.

**Resposta curta:** uma publicação precisa ser elegível, entrar em algum conjunto de candidatos, receber previsões de interesse suficientes para competir por atenção e encontrar públicos que efetivamente reajam a ela. O Instagram possui sistemas distintos para Feed, Explorar e Reels. Não existe um único peso conhecido para cada ação, válido em todas essas superfícies.[^1][^2]

## Antes do alcance, existe uma seleção

**1. A plataforma escolhe o que pode ser recomendado.** As diretrizes de recomendação são mais restritivas do que a regra geral de permissão para publicar. Um conteúdo pode continuar disponível para quem segue a conta e deixar de aparecer em algumas superfícies de descoberta para não seguidores. A situação da própria conta também pode afetar essa elegibilidade.[^3] É por isso que **pouco alcance não é sinônimo de punição**: há filtros demonstráveis, mas também há concorrência entre conteúdos elegíveis.

**2. O histórico de quem recebe entra na descoberta.** Em 2020, uma consulta exemplificativa publicada pela engenharia do Instagram recuperava até 30 itens curtidos e usava similaridade entre contas para buscar publicações candidatas. Em 2023, a Meta descreveu a recuperação, no Explorar, de itens semelhantes aos que a pessoa já havia curtido, salvo ou compartilhado, recorrendo também a *embeddings*.[^4][^5] **Embeddings** são representações numéricas de conteúdos e interesses: itens com características parecidas tendem a ficar próximos nesse tipo de “mapa” matemático, facilitando a busca por recomendações semelhantes. O número 30 era um parâmetro de um exemplo histórico, **não** o limite universal de memória da plataforma. A [[02 variaveis/Afinidade inferida|afinidade inferida]] ajuda a explicar por que um mesmo post pode interessar mais a um destinatário do que a outro.

**3. O histórico de quem publica também pode importar.** A Meta anunciou em abril de 2024 que contas com dez ou mais republicações de conteúdos de terceiros sem melhorias significativas nos trinta dias anteriores poderiam perder elegibilidade para recomendações. O comunicado descreveu recuperação possível após trinta dias desde a última publicação não original, com consulta e contestação no *Status da conta*.[^6] O **[Status da conta](https://help.instagram.com/338481628002750/)** é uma área do Instagram que permite verificar possíveis restrições sobre o perfil e suas publicações, inclusive se eles podem ser recomendados a quem ainda não segue a conta. Quando a opção está disponível, também permite pedir uma revisão da decisão. Esse é um exemplo **documentado historicamente de limitação sobre o criador**; não devemos presumir sem verificação que os mesmos limiares operam sem mudanças em outubro de 2026. O histórico do criador e a preferência do receptor são mecanismos diferentes.

**4. Modelos fazem previsões de interação.** A ficha técnica oficial do Feed, atualizada em 2022, descreve a previsão de probabilidades de curtir, salvar, comentar ou abrir um perfil, combinadas em uma pontuação; também descreve ajustes de integridade e regras de diversidade de autores.[^1] Isso não significa somar uma curtida real a um placar simples. O sistema trabalha com **probabilidades previstas de ações futuras**, que podem variar entre destinatários. Veja [[01 conceitos/Engajamento em plataformas digitais|engajamento em plataformas digitais]], [[02 variaveis/Tempo de permanência|tempo de permanência]], [[02 variaveis/Popularidade|popularidade]] e [[02 variaveis/Recência|recência]].

**5. A resposta inicial pode abrir outras oportunidades.** Na mudança anunciada para recomendações de Reels em 2024, a Meta descreveu exposição inicial de conteúdos elegíveis a pequenos grupos, seguida de expansão progressiva dos que apresentassem melhor desempenho.[^6] O enunciado é sobre uma arquitetura anunciada para esse contexto, não uma promessa de que qualquer publicação terá um número fixo de rodadas ou atingirá uma audiência mínima. [[02 variaveis/Momentum de atenção|Momentum de atenção]] distingue o ritmo de crescimento do volume acumulado.

A distinção prática é esta: **seleção, elegibilidade, previsão e recepção humana precisam ser investigadas separadamente**. O [[05 percursos/Do artefato ao sinal em feeds algoritmicos|percurso do artefato ao sinal]] aprofunda como diferentes formatos e gestos acabam registrados como dados.

## Dois históricos e uma publicação: onde pode estar o limite?

| Camada | O que sabemos | O que não podemos concluir apenas pelas visualizações |
|---|---|---|
| **Destinatário** | Interações anteriores ajudam a selecionar e ordenar publicações; há [[02 variaveis/Afinidade inferida|modelos de afinidade]].[^1][^5] | Que todas as pessoas receberam a mesma oportunidade de ver o post. |
| **Conta criadora** | Existem restrições documentadas sobre comportamentos reiterados, originalidade e elegibilidade.[^6] | Que uma conta específica tenha sido secretamente limitada por sua posição política. |
| **Publicação** | Conteúdos permitidos podem ser inelegíveis em áreas de recomendação.[^3] | Que uma publicação foi penalizada apenas porque teve menos alcance. |
| **Recepção** | Os sistemas usam sinais e previsões de interação; a Meta anunciou testes iniciais de distribuição de Reels.[^1][^6] | Que as reações causaram, sozinhas, todo o crescimento posterior. |

Para diagnosticar uma queda de distribuição, comece pelo **Status da conta** e por possíveis restrições visíveis de recomendação. Depois verifique se o conteúdo era elegível, compare público seguidor e não seguidor e só então investigue as respostas proporcionais. A contagem total de visualizações costuma ser o início da pergunta, não sua resposta.

## Os sinais que vale acompanhar

Em janeiro de 2025, Adam Mosseri, responsável pelo Instagram, destacou **tempo assistido, curtidas e envios por mensagem** como três sinais centrais para o ranking. Orientou criadores a observar tempo médio assistido, curtidas por alcance e envios por alcance. Segundo sua explicação, curtidas teriam importância relativamente maior entre seguidores, enquanto envios ganhariam importância relativa na distribuição para não seguidores.[^7] A declaração não publicou coeficientes operacionais nem demonstrou que esses sejam os únicos sinais usados em todas as superfícies em 2026.

A diferença entre **quantidade** e **taxa** importa. Uma publicação com mil curtidas e alcance de cem mil contas tem cerca de uma curtida a cada cem contas alcançadas. Outra, com cem curtidas e alcance de mil contas, tem dez curtidas a cada cem. As contagens totais favorecem a primeira, mas a resposta proporcional observada é maior na segunda. Taxa de curtidas e alcance continuam sendo métricas distintas: o sistema também pode ter mudado *quem* encontrou cada publicação.

Para comparar seus posts, registre, quando as métricas estiverem disponíveis, alcance de seguidores e não seguidores, **envios por 100 contas alcançadas**, **curtidas por 100 contas alcançadas**, salvamentos, tempo médio assistido nos Reels e a idade da publicação. [[02 variaveis/Propagação|Propagação]] lembra que envios a outras pessoas e recomendação automatizada podem produzir circulação por caminhos diferentes; [[03 artefatos/Botao Salvar|salvar]] e [[03 artefatos/Carrossel|carrossel]] ajudam a pensar usos que vão além de consumir uma publicação uma única vez.

## Táticas para experimentar — e por que elas fazem sentido

As táticas abaixo são decisões de projeto ou formas de diagnóstico. **Alta confiança** significa que há suporte oficial para a regra ou a ferramenta citada; **confiança intermediária** significa que a hipótese é plausível, mas seu efeito sobre alcance não foi isolado. Nenhuma tática garante distribuição.

| Tática | Mecanismo ou hipótese | Evidência |
|---|---|---|
| **Produzir algo que alguém tenha motivo para enviar** | Envios por alcance estão entre os sinais destacados por Mosseri, especialmente para público não seguidor. Um material explicativo com fonte consultável pode ter valor de circulação social. | **Alta para o sinal**; efeito de cada formato exige teste.[^7] |
| **Tornar a primeira informação compreensível rapidamente** | Uma pergunta clara, uma hierarquia visual legível e uma abertura específica podem reduzir esforço de compreensão. A [[03 artefatos/Pergunta|pergunta]] e o [[03 artefatos/Pôster|pôster]] ajudam a pensar essa função. | **Hipótese de design**; não há bônus algorítmico documentado para “texto grande”. |
| **Criar conteúdo original e revisar possíveis marcas-d'água** | A política anunciada em 2024 inclui originalidade e ausência de marcas-d'água visíveis entre condições consideradas para distribuição inicial de Reels elegíveis. | **Alta para a política histórica**; verificar estado atual.[^6] |
| **Gravar fala inteligível e revisar legendas automáticas** | O Instagram oferece transcrição/legendas automáticas e a Meta documenta reconhecimento de áudio na compreensão de conteúdos. Pode ampliar acessibilidade e facilitar entendimento; eventual benefício de ranking exige teste. | **Alta para a capacidade de transcrição**; **hipótese** para aumento de alcance.[^14][^15] |
| **Usar *Trial Reels* quando disponível** | A ferramenta permite testar Reels primeiro com não seguidores e comparar métricas antes de ampliar a publicação para seguidores. | **Alta para a funcionalidade**, não para promessa de maior alcance.[^8] |
| **Experimentar [[03 artefatos/Collab do Instagram|Collab]] com parceiros relevantes** | A coautoria vincula uma publicação a mais de um perfil e pode criar oportunidades de encontro com audiências distintas. | **Mecanismo de produto documentado**; sem bônus secreto comprovado.[^9] |
| **Observar taxas, não somente totais** | Curtidas e envios por alcance mostram respostas proporcionais; [[02 variaveis/Popularidade|popularidade]] não é a mesma coisa que interesse relativo. | **Alta como método de comparação**; ainda sujeito a diferenças entre públicos.[^7] |
| **Checar a elegibilidade e pedir revisão quando aplicável** | O *Status da conta* pode apontar limitações documentadas e permitir contestação. | **Alta para a ferramenta**; ela não revela todos os modelos internos.[^3][^6] |
| **Conservar uma versão recuperável fora do feed** | Uma página externa com fontes, acessível pelo link na bio ou pelo adesivo de link nos Stories, pode facilitar o reencontro. Um QR Code dentro de um post ou Reel é pouco prático para quem usa o Instagram no próprio celular. | **Hipótese de autonomia e recuperabilidade**, não de impulsionamento; ver [[05 percursos/Da recomendacao a circulacao propria|circulação própria]]. |

Duas observações evitam confusões frequentes. O indicador de **envios** mencionado por Mosseri diz respeito ao gesto de enviar uma publicação; não podemos presumir que qualquer tipo de compartilhamento tenha o mesmo peso. E uma ferramenta oficial de teste melhora nossa capacidade de experimentar, mas não garante que um post terá sucesso.

## Aquilo que a máquina consegue ler não é necessariamente aquilo que ela vai premiar

A Meta documentou o **Rosetta**, sistema de OCR utilizado para reconhecer texto em imagens e quadros de vídeos do Facebook e Instagram. O texto extraído pode ser usado por sistemas de classificação e compreensão de conteúdo.[^10] Esse conhecimento explica por que palavras dentro de uma arte podem ser percebidas automaticamente. A empresa também publicou implementações de modelos de recomendação e visão multimodal, mas não o código operacional completo e os pesos atuais que governam a distribuição do Instagram.[^11]

Isso deixa uma pergunta concreta da nossa pesquisa em aberto: escrever um nome político em branco sobre fundo branco com a ferramenta nativa de texto **impulsiona** uma publicação? **Não há evidência pública de que sim.** O texto invisível pode não apresentar contraste para OCR; o aplicativo conhece o texto durante a edição, mas não temos prova de que retenha esse dado como sinal positivo de recomendação. Também não encontramos evidência de bônus geral para o rosto de um político, para uma palavra repetida ou para uma hashtag específica.

A distinção essencial é entre **reconhecer o conteúdo** e **decidir mostrá-lo mais**. Um classificador pode identificar um tema e, ainda assim, esse tema não receber vantagem alguma — ou estar sujeito a uma regra específica de elegibilidade.

## A fala também pode virar texto legível pela máquina

Quando alguém diz uma frase dentro de um Reel, há uma segunda forma de texto a considerar: **a transcrição automática do áudio**, chamada de reconhecimento automático de fala (*automatic speech recognition*, ou ASR). Ela é diferente do **OCR**, que reconhece caracteres já desenhados numa imagem. Um sistema de ASR recebe um sinal sonoro e estima palavras; um modelo de compreensão multimodal pode utilizar informação do áudio diretamente ou combiná-la com imagem, legenda e outros dados.

A Meta confirmou em 2022 que o Instagram disponibilizava **legendas automáticas para vídeos do Feed**, inclusive em português.[^14] Em 2023, descreveu o uso de **reconhecimento de áudio**, ao lado de texto e imagem, entre as capacidades de compreensão que dão suporte a recomendações de conteúdos de contas não seguidas no Facebook e no Instagram. Esse texto técnico menciona ainda classificação temática e identificação de semelhanças.[^15] A empresa publicou código e modelos próprios de transcrição, como o *Massively Multilingual Speech* (MMS), em 2023, além de recursos de tradução e dublagem de Reels com IA em 2025.[^16][^17] Esses fatos demonstram capacidades reais, mas **não revelam a implementação nem os pesos do ranking atual dos Reels**.

O caminho **fala → reconhecimento de áudio → palavras ou representação semântica → possível classificação do assunto → seleção e ranking** é tecnicamente plausível e compatível com as capacidades declaradas. Ele não deve ser confundido com uma descrição comprovada de que cada Reel é transcrito integralmente e de que cada palavra recebe um bônus ou penalidade específica. A Meta não publica essa fórmula. Um vídeo que pronuncie “Flávio Bolsonaro” pode ser reconhecido como conteúdo sobre o assunto; não temos evidência de que simplesmente dizer esse nome impulsione, limite ou contorne uma regra de recomendação.

Há uma **tática com fundamento humano e técnico**: gravar uma fala inteligível, revisar as legendas automáticas e garantir que a informação essencial continue compreensível sem som. Isso melhora a acessibilidade e pode reduzir esforço de compreensão. A hipótese de que melhora a retenção ou a distribuição do Reel precisa de teste; a existência de ASR não comprova um benefício algorítmico. Num experimento, poderíamos comparar versões com locução clara, legendas revisadas e texto na tela, medindo compreensão, tempo assistido e envios por alcance. Como áudio, texto e montagem podem modificar a experiência ao mesmo tempo, o estudo deve controlar os fatores e repetir as observações. O [[05 percursos/Laboratorio de contradesign da distribuicao|laboratório de contradesign]] ajuda a estruturar esses testes.

## O que a Meta não documenta — e por que isso importa

A Meta publica explicações úteis: existem cartões separados para Feed, recomendações, Explorar e Reels, descrições de sinais comportamentais, diretrizes de elegibilidade e artigos de engenharia.[^1][^3][^18] Essa documentação revela **classes de operações**, mas não um manual para reproduzir a decisão tomada sobre uma publicação específica. Em 2023, a própria empresa explicou que optou por expor os dez modelos de previsão considerados mais importantes em seus cartões, em vez do conjunto completo; também reconheceu que sinais e modelos mudam frequentemente.[^18] Um artigo de engenharia de 2025 descreveu estágios distintos de recuperação, ranking inicial e ranking final e a multiplicação de modelos e experimentos por superfície.[^19] Uma explicação datada não é necessariamente o retrato de cada configuração em outubro de 2026.

| Pergunta que permanece | Informação pública disponível | O que ainda não conseguimos verificar |
|---|---|---|
| **Quanto vale cada interação?** | Curtidas, envios, permanência e outros sinais entram em previsões, segundo explicações oficiais.[^1][^7] | Coeficientes operacionais, combinação completa, mudanças de pesos e diferenças exatas por superfície, público ou período. |
| **Quanto histórico do receptor é utilizado?** | Exemplos de recuperação por curtidas e semelhanças; o caso das 30 curtidas é uma consulta de 2020.[^4][^5] | Janela geral de histórico, decaimento temporal, seleção efetiva de sinais e peso relativo de cada ação em 2026. |
| **Existe uma pontuação geral sobre o criador?** | Há regras públicas para originalidade, reincidência e limites de recomendação.[^6] | Se existe um *score* global único de reputação do criador, sua fórmula e seu efeito sobre cada postagem. O código disponível não comprova sua existência nem inexistência. |
| **Quando um Reel passa ao próximo público?** | A Meta descreveu em 2024 um processo de exposição progressiva para conteúdos elegíveis.[^6] | Tamanho real dos grupos, limiares de expansão, intervalos, critérios de desempate e tratamento de cada vídeo publicado hoje. |
| **Como texto, voz e imagem entram no ranking?** | A Meta documentou OCR, reconhecimento de áudio, legendas automáticas e compreensão multimodal.[^10][^15] | Se cada Reel é transcrito integralmente para recomendação, se o texto nativo permanece como metadado, quais classificadores são acionados e que peso recebem palavras, rostos ou assuntos específicos. |
| **Como uma conta ou tema político é tratado hoje?** | Foram anunciadas mudanças de política em 2024 e 2025.[^12][^13] | Conjunto completo de regras efetivamente em produção por país e superfície em outubro de 2026 e seus efeitos sobre um caso individual. |
| **Por que este post alcançou estas pessoas e não outras?** | Cartões do sistema, alguns controles de recomendação, Insights e *Status da conta* oferecem explicações e verificações parciais.[^1][^6][^18] | Registro reproduzível de candidatos descartados, pontuações por destinatário, testes internos, decisões contrafactuais e razões completas para cada não exposição. |

A distinção entre **informação não divulgada**, **informação divulgada parcialmente** e **informação ainda não encontrada nesta pesquisa** é essencial. Por exemplo, a regra de dez republicações não originais em trinta dias foi explicitamente anunciada em 2024, mas isso não equivale a revelar todas as regras que podem afetar o histórico de uma conta. Do mesmo modo, a existência de código de pesquisa da Meta para recomendação e transcrição de fala não permite reproduzir os modelos efetivamente implantados no Instagram.[^11][^16]

Por isso, uma auditoria pode chegar a níveis diferentes de conclusão. Com documentação, conseguimos provar que um **tipo de mecanismo existe ou foi anunciado**. Com dados de uma conta e experimentos repetidos, conseguimos observar diferenças associadas a conteúdo, público ou formato. Sem registros internos de candidatos, scores, filtros e exposição, raramente conseguimos atribuir **uma queda individual de alcance a uma regra interna específica**. Essa limitação é especialmente importante diante de alegações sobre restrições políticas: uma penalização sistemática é uma hipótese investigável, mas nem uma queda de visualizações nem a opacidade da plataforma a demonstram por si.

O princípio metodológico para o [[05 percursos/Laboratorio de contradesign da distribuicao|laboratório]] é registrar, junto de cada hipótese, **qual evidência seria necessária para testá-la e qual evidência está indisponível**. Só assim uma tática útil continua sendo uma tática, sem se transformar numa explicação fictícia de como o algoritmo funciona.

## Um cuidado extra com a política

Em fevereiro de 2024, a Meta anunciou restrições à recomendação proativa de conteúdo político de contas não seguidas no Instagram e no Threads. Em janeiro de 2025, anunciou a retomada gradual e personalizada de recomendações políticas.[^12][^13] Essas decisões mostram que distribuição não depende apenas de engajamento. Também existe uma camada de **política de produto**, sujeita a revisão, variação regional e mudanças de implementação.

Logo, um post político com pouco alcance pode levantar uma hipótese legítima de restrição. Para demonstrá-la, precisamos de evidência sobre elegibilidade, comparação entre conteúdos equivalentes e dados de exposição. O diagnóstico não pode pular diretamente da diferença de visualizações para a conclusão de favorecimento ideológico. O estudo principal do [[03 artefatos/Feed algoritmico do Instagram|feed algorítmico do Instagram]] documenta tanto as mudanças de política quanto os limites das comparações de publicações políticas.

## Um teste simples vale mais do que dez truques

Escolha uma pergunta verificável: **“Uma abertura com pergunta explícita produz mais envios por conta alcançada do que uma abertura baseada em manchete?”** Planeje uma pequena série de publicações comparáveis, registrando tema, público, formato, horário, duração, situação da conta e resultados observados depois de 24 horas e de sete dias. Se alterar tudo simultaneamente, não saberá o que contribuiu para qualquer diferença.

A primeira medida é a **elegibilidade**. A segunda é o **alcance de seguidores e não seguidores**. A terceira é a **resposta proporcional**: envios, curtidas e outros sinais por alcance, e tempo assistido quando houver vídeo. Considere ainda a possibilidade de que o próprio sistema tenha mostrado cada peça para públicos diferentes; isso dificulta comparar taxas como se fossem experimentos perfeitamente controlados.

Repita o teste, documente os resultados negativos e mantenha as explicações concorrentes. Os testes não revelam os pesos secretos do Instagram, mas ajudam a descobrir quais escolhas editoriais funcionam melhor **para determinada audiência, em certo contexto e período**. Para aprofundar o método, siga para [[05 percursos/Laboratorio de contradesign da distribuicao|Laboratório de contradesign da distribuição]].

A ideia que conecta todos esses estudos é uma consequência de design particularmente importante: um sistema que decide o que circulará também pode alterar o que será produzido. Quando criadores antecipam os resultados do ranking, passam a escrever, diagramar, gravar e selecionar assuntos sob expectativas sobre um mecanismo que conhecem apenas parcialmente. Essa é uma hipótese de comportamento tratada no [[01 conceitos/Dispositivo|dispositivo]] e no estudo do [[03 artefatos/Feed algoritmico do Instagram|feed]], não uma prova de intenção específica de seus desenvolvedores.

## Referências

[^1]: Meta AI. “Instagram Feed Ranking System Card”. Atualizado em 23 fev. 2022. Documenta candidatos, probabilidades de ação, combinação de pontuações, regras de integridade e diversidade, especificamente para o Feed descrito naquele período. https://ai.meta.com/tools/system-cards/instagram-feed-ranking/

[^2]: Meta Engineering. “Scaling the Instagram Explore recommendations system”. 9 ago. 2023. Documenta recuperação de candidatos, ranking em múltiplas etapas, embeddings e modelo *two-tower* para Explorar. https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/

[^3]: Meta. “Recommendation Guidelines”. 31 ago. 2020. Distingue conteúdo permitido de conteúdo elegível a recomendações e explica que alguns conteúdos não são distribuídos nas superfícies de descoberta. https://about.fb.com/news/2020/08/recommendation-guidelines/

[^4]: Meta Engineering. “How Instagram suggests new content”. 10 dez. 2020. Contém a consulta ilustrativa com `liked(max_num_to_retrieve=30)`, similaridade de contas e `posted_media(max_media_per_account=10)`. É exemplo histórico, não descrição integral do ranking atual. https://engineering.fb.com/2020/12/10/web/how-instagram-suggests-new-content/

[^5]: Meta Engineering. “Scaling the Instagram Explore recommendations system”. 9 ago. 2023. Seção *User interactions history*; descreve busca de itens semelhantes aos anteriormente curtidos, salvos ou compartilhados, com filtragem de sementes. https://engineering.fb.com/2023/08/09/ml-applications/scaling-instagram-explore-recommendations-system/

[^6]: Meta. “Ajudando o criador de conteúdo a encontrar novos públicos”. 30 abr. 2024. Documenta critérios de originalidade, marcas-d’água visíveis, proposta de exposição progressiva de Reels elegíveis, regra de 10 republicações em 30 dias para agregadores e recuperação após 30 dias desde última republicação não original. https://about.fb.com/br/news/2024/04/ajudando-o-criador-de-conteudo-a-encontrar-novos-publicos/

[^7]: Mosseri, Adam. Explicação sobre o ranking do Instagram em vídeo de janeiro de 2025, reproduzida em Hutchinson, Andrew. “Instagram Shares Algorithm Insights To Inform Strategy”. *Social Media Today*, 22 jan. 2025. Trata tempo médio assistido, curtidas por alcance e envios por alcance, distinguindo públicos seguidores e não seguidores. Fonte secundária que relata declaração do responsável pelo produto; não divulga coeficientes. https://www.socialmediatoday.com/news/instagram-shares-algorithm-insights-2025/738034/

[^8]: Instagram/Meta. “Test Content With Non-Followers Using Trial Reels”. 10 dez. 2024, atualizado em 26 jun. 2025. Documenta elegibilidade da ferramenta, teste inicial com não seguidores e consulta de métricas. https://about.fb.com/news/2024/12/trial-reels-try-content-non-followers-first-see-what-perfoms-best/

[^9]: Meta. “リールやフィード投稿を他の利用者と共同投稿できる「コラボ」...” (*Introdução da função Collab para Reels e Feed*). 20 out. 2021. Comunicado oficial em japonês; informa compartilhamento por contas coautoras e audiência de ambas. https://about.fb.com/ja/news/2021/10/collab_superbeat_3d_dynamiclyrics/ ; Perez, Sarah. “Instagram is adding ‘Collabs,’ new music features for Reels, desktop posting and more”. *TechCrunch*, 19 out. 2021. https://techcrunch.com/2021/10/19/instagram-is-adding-collabs-new-music-features-for-reels-desktop-posting-and-more/

[^10]: Meta Engineering. “Rosetta: Understanding text in images and videos with machine learning”. 11 set. 2018. Documenta detecção e extração de texto de imagens/vídeos e usos posteriores na classificação e personalização. https://engineering.fb.com/2018/09/11/ai-research/rosetta-understanding-text-in-images-and-videos-with-machine-learning/

[^11]: Meta AI. Repositório “Deep Learning Recommendation Model”. Código de pesquisa para recomendação, não reprodução do Instagram em produção. https://github.com/facebookresearch/dlrm ; Meta Recommender Systems. “Generative Recommenders”. Código de pesquisa em recomendação sequencial, não pesos operacionais da plataforma. https://github.com/meta-recsys/generative-recommenders

[^12]: Meta. “Atualização de nossa abordagem sobre conteúdo político no Instagram e no Threads”. 9 fev. 2024, atualizado em 12 ago. 2024. Registra limites históricos de recomendação política e diferencia seguidores de recomendações. https://about.fb.com/br/news/2024/02/atualizacao-de-nossa-abordagem-sobre-conteudo-politico-no-instagram-e-no-threads/

[^13]: Meta. “Mais expressão e menos erros”. 7 jan. 2025. Anuncia reintrodução gradual e personalizada de conteúdo cívico e político, sem revelar todos os parâmetros posteriores por país e superfície. https://about.fb.com/br/news/2025/01/mais-expressao-e-menos-erros/

[^14]: Meta. “Recognizing Global Accessibility Awareness Day”. 19 maio 2022. Confirma legendas automáticas para vídeos do Feed do Instagram, incluindo português, e informa seu uso generalizado naquele período. https://about.fb.com/news/2022/05/recognizing-global-accessibility-awareness-day/

[^15]: Meta AI. “The AI behind unconnected content recommendations on Facebook and Instagram”. 29 jun. 2023. Descreve compreensão de conteúdo com modalidades de texto, imagem, áudio e vídeo; cita *audio recognition*, classificação temática, matching e recuperação para sistemas de recomendações. Não detalha se todo Reel passa por ASR ou os pesos do ranking. https://ai.meta.com/blog/ai-unconnected-content-recommendations-facebook-instagram/

[^16]: Meta. “Apresentamos a conversão de fala para texto, texto para fala e mais novidades para mais de 1.100 idiomas”. 22 maio 2023. https://about.fb.com/br/news/2023/05/apresentamos-a-conversao-de-fala-para-texto-texto-para-fala-e-mais-novidades-para-mais-de-1-100-idiomas/ ; Meta Research. *Massively Multilingual Speech*, implementação de modelos ASR de pesquisa, não o pipeline privado do Instagram. https://github.com/facebookresearch/fairseq/tree/main/examples/mms

[^17]: Meta. “Descubra mais Reels do mundo todo com tradução da Meta AI”. 9 out. 2025. Documenta tradução, dublagem e sincronização labial de Reels no Instagram/Facebook, incluindo português. Não atribui vantagem de alcance ao uso de palavras específicas. https://about.fb.com/br/news/2025/10/descubra-mais-reels-do-mundo-todo-com-traducao-da-meta-ai/

[^18]: Meta AI. “Introducing 22 system cards that explain how AI powers experiences on Facebook and Instagram”. 29 jun. 2023. A empresa descreve cartões separados por superfície, milhares de sinais, divulgação dos dez modelos de previsão mais relevantes e caráter dinâmico dos modelos. https://ai.meta.com/blog/how-ai-powers-experiences-facebook-instagram-system-cards/

[^19]: Meta Engineering. “Journey to 1000 models: Scaling Instagram's recommendation system”. 21 maio 2025. Descreve diferentes superfícies e estágios de recuperação, ranking inicial e ranking final, com experimentação contínua; não expõe fórmulas atuais ou decisões individuais. https://engineering.fb.com/2025/05/21/production-engineering/journey-to-1000-models-scaling-instagrams-recommendation-system/
