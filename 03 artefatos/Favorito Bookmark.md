---
title: "Favorito / bookmark"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
  - design/interface
---

# Favorito / bookmark

A Web criou uma forma peculiar de abundância: podemos chegar a milhares de lugares sem possuir nenhum deles. Isso produz um problema que não existia da mesma maneira num livro, numa gaveta ou numa estante. Depois de encontrar alguma coisa valiosa, como voltar até ela?

O favorito — ou *bookmark* — resolve esse problema sem guardar propriamente o conteúdo. Ele guarda uma **relação de retorno**. A página continua em outro servidor, sob controle de outra pessoa ou instituição; o navegador preserva apenas um endereço, um nome e, mais tarde, metadados suficientes para reencontrá-la.

É um artefato pequeno, mas ele altera profundamente o significado de “guardar”. Em vez de preservar a coisa, preserva o caminho. E, ao fazer isso, transforma também um gesto muito mais antigo — marcar, separar e colecionar aquilo que merece voltar à atenção — em uma operação computacional de baixíssimo custo.

## A Web precisou inventar uma memória privada sobre um território público

Nos primeiros anos da Web, navegar significava seguir links, digitar endereços e depender bastante da memória do caminho percorrido. Já em maio de 1993, uma nota do W3C sobre o NCSA Mosaic descrevia sua lista de *bookmarks*, chamada de **hotlist**, como uma lista privada de “lugares interessantes” salva entre sessões.[^1] A formulação é historicamente importante não porque prove que o Mosaic tenha inventado sozinho a ideia de marcar destinos digitais, mas porque mostra uma ocorrência inicial e influente da operação no navegador gráfico que ajudaria a popularizar a Web.

O gesto é simples: durante a navegação, a pessoa encontra um destino cuja utilidade futura ainda não consegue prever com precisão e decide reduzir o custo de reencontrá-lo. A interface cria uma camada pessoal sobre uma rede pública.

Na metade dos anos 1990, a convenção já circulava com vocabulários diferentes. Documentação preservada pelo W3C de 1995 fala em conversão entre **NCSA Mosaic Hotlists** e **Netscape Bookmarks**.[^2] O Internet Explorer consolidaria amplamente outro nome para a mesma operação: **Favorites**. A diversidade de rótulos revela uma hesitação conceitual interessante. Estamos marcando um lugar para voltar ou declarando que gostamos dele?

Essa ambiguidade sobreviveria muito além dos navegadores.

## Antes do bookmark, já colecionávamos a leitura

A operação cognitiva é muito mais antiga que a Web. Ler nunca significou apenas receber um texto inteiro. Pessoas sublinham, escrevem à margem, dobram páginas, inserem marcadores, copiam passagens, mantêm diários, montam fichas e reúnem excertos em cadernos. Cada uma dessas práticas responde de modo diferente à mesma pergunta: **o que, dentro de tudo aquilo que encontrei, merece continuar disponível para mim?**

Os *commonplace books* são um antecedente particularmente útil para esta comparação. Na tradição moderna europeia, eles funcionavam como cadernos de excertos, ideias e materiais organizados para consulta e reutilização. Richard Yeo mostra que, nos séculos XVI e XVII, esses cadernos eram tratados inicialmente também como auxiliares da memória e depois cada vez mais como fontes externas das quais a informação poderia ser recuperada quando necessária.[^4] John Locke chegou a desenvolver um método próprio de indexação para organizar e reencontrar entradas, publicado no século XVII e posteriormente influente.[^5]

A relação com o bookmark é funcional e cognitiva, não uma descendência histórica direta. O que aproxima os dois é a transformação da leitura em **coleção pessoal**. Encontrar algo deixa de ser um evento encerrado; a pessoa cria uma infraestrutura para que aquele encontro possa participar de outra ação no futuro.

Mas há diferenças importantes entre os suportes.

**Sublinhar ou usar marca-texto** modifica perceptivamente o próprio objeto: o trecho continua no livro, mas passa a competir de modo diferente pela atenção na releitura. O STABILO BOSS, lançado em 1971, ajudou a popularizar um instrumento dedicado a destacar passagens por sobreposição de cor, embora a própria história da empresa registre que estudantes já utilizavam canetas para realçar textos antes do produto.[^6]

O [[03 artefatos/Post-it|Post-it]] cria uma camada separada e removível. Ele pode marcar uma página, mas também acrescentar uma interpretação, uma pergunta ou uma instrução sem alterar permanentemente o suporte. A anotação passa a existir **ao lado** daquilo que motivou sua criação.

O [[03 artefatos/Diário|diário]] faz outra operação: em vez de apenas marcar um objeto externo, ele transfere experiências, pensamentos ou trechos para um suporte próprio. Fichas bibliográficas e cartões de índice levam essa extração ainda mais longe, transformando fragmentos em unidades independentes que podem ser classificadas e recombinadas.

O bookmark digital realiza uma quarta operação: **não marca o conteúdo, não acrescenta necessariamente uma nota e não copia o trecho para uma coleção própria. Preserva uma referência que permite reconstruir o acesso depois.**

Podemos então distinguir quatro estratégias aparentadas:

- marcar **no próprio objeto**: sublinhado, marginalia, marca-texto;
- anexar **uma camada provisória ao objeto**: marcador de página, Post-it;
- extrair **algo do objeto para uma coleção pessoal**: diário de leitura, commonplace book, ficha bibliográfica, cartão de índice;
- preservar **um caminho de retorno ao objeto externo**: favorito / bookmark.

A comparação é importante porque impede tratar toda memória externa como simples armazenamento. O design também decide **onde a seleção ficará**: no objeto, ao lado dele, numa coleção separada ou apenas como referência para reencontro.

## Guardar o caminho não é guardar a coisa

O bookmark parece parente do [[03 artefatos/Botao Salvar|Botão salvar]], mas a diferença entre os dois é decisiva. Salvar um documento normalmente tenta preservar um estado do próprio objeto. Favoritar uma página preserva apenas uma referência a algo cuja existência continua externa ao usuário.

Isso o aproxima de [[01 conceitos/Continuidade de Acesso|continuidade de acesso]] e [[01 conceitos/Memoria Distribuida|memória distribuída]]. A pessoa deixa de precisar memorizar o endereço ou reconstruir o percurso. O navegador assume parte dessa tarefa e transforma um futuro problema de busca numa ação presente de marcação.

Mas essa economia esconde uma fragilidade. Se o destino mudar, for removido ou perder sua URL, o bookmark pode sobreviver como um caminho para lugar nenhum. Uma análise do Pew Research Center publicada em 2024 encontrou que 38% das páginas de uma amostra existente em 2013 já não estavam acessíveis dez anos depois.[^3] O favorito, portanto, produz **permanência da intenção de retorno**, não permanência garantida do objeto.

Essa distinção separa bookmark de arquivo, captura de tela ou cópia local. O primeiro preserva acesso potencial. Os outros tentam preservar conteúdo.

## A estrela transformou memória em gesto de coleção

Quando a operação migra dos menus de navegador para estrelas, corações e botões de “salvar”, ela começa a aparecer em catálogos, mapas, lojas, músicas, posts e sistemas de recomendação. O artefato deixa de ser apenas uma técnica de navegação da Web e se torna um padrão de **apropriação leve**: algo continua pertencendo ao sistema, mas passa a integrar uma coleção do usuário.

Aqui o parentesco com o [[03 artefatos/Botao Like|Botão Like]] é útil justamente por causa da diferença. Curtir pode funcionar como reação pública, sinal social ou dado de recomendação. Favoritar tende a prometer utilidade futura para quem marcou. Um gesto diz algo sobre a relação presente com o conteúdo; o outro tenta preservar uma possibilidade futura de retorno. Em muitos produtos, porém, essas funções se misturam, e um mesmo coração pode significar preferência, coleção, lembrança e treinamento algorítmico ao mesmo tempo.

Essa fusão muda a relação de poder. Uma coleção aparentemente privada pode também produzir dados sobre interesse. O usuário pensa que está organizando seu futuro; o sistema pode estar aprendendo seu perfil no presente.

O comportamento aproveitado é muito antigo: marcar, separar, colecionar, dobrar uma página, copiar uma passagem, colocar um objeto de lado para usar depois. A interface reduz o custo dessa intenção a um toque. E justamente por ser tão barato, cria outro problema: acumulamos mais retornos futuros do que conseguiremos realizar.

## O problema deixa de ser lembrar e passa a ser reencontrar entre o que lembramos

Quando há poucos favoritos, a lista funciona como memória auxiliar. Quando há centenas ou milhares, o próprio sistema de memória cria um problema de recuperação. Pastas, tags, busca, sincronização, barras de favoritos e sistemas de *read later* aparecem como refinamentos porque preservar um caminho não garante que ele permanecerá encontrável dentro da coleção pessoal.

Isso aproxima o favorito da pista futura **Índice** e das tradições de fichas e commonplace books: guardar demais produz uma segunda necessidade de design, projetar a recuperação do que já foi selecionado.

Há uma ironia nessa transformação. O bookmark nasceu para reduzir dependência da memória; coleções muito grandes podem exigir que a pessoa se lembre de como organizou a própria memória externa.

A pergunta arqueológica então muda. O artefato não serve apenas para “salvar para depois”. Ele projeta uma relação temporal: **o presente pode deixar uma pequena infraestrutura para um eu futuro**. Mas esse futuro só recebe o benefício se o destino ainda existir, a coleção continuar acessível e o sistema permitir reencontrar aquilo que foi marcado.

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Favorito / bookmark |
| **Período** | Início dos anos 1990 na Web gráfica; difusão ampla ao longo da década |
| **Autoria** | Atribuição distribuída; o NCSA Mosaic oferece uma ocorrência inicial influente como *hotlist*, sem base suficiente para tratá-lo como inventor único da operação |
| **Produto ou contexto** | Navegadores Web e, depois, catálogos, mapas, lojas, plataformas de conteúdo e aplicativos |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]] |
| **Empresas ou instituições relacionadas** | NCSA, Netscape e Microsoft como contextos históricos de circulação dos termos e convenções |
| **Problema original** | Reencontrar posteriormente um destino descoberto numa rede crescente sem depender de memorizar ou reconstruir seu endereço |
| **Mundo antes** | Marcadores físicos, sublinhados, marginalia, commonplace books, fichas, anotações externas, retorno por memória, histórico de navegação, digitação de endereço ou repetição do percurso de links |
| **Invenção** | Não há inventor único estabelecido aqui; em 1993 o Mosaic já documentava uma *hotlist* privada persistente entre sessões |
| **Refinamento** | Pastas, edição, barras de favoritos, tags, busca, sincronização entre dispositivos, serviços de leitura posterior e coleções integradas a plataformas |
| **Popularização** | Navegadores gráficos dos anos 1990, especialmente Mosaic, Netscape Navigator e Internet Explorer, tornaram a operação cotidiana para a Web de massa |
| **Padronização** | A ideia de marcar um item para retorno tornou-se convenção transversal; os rótulos e ícones continuam variando entre bookmark, favorito, salvar, estrela e coração |
| **Hipótese de design** | Pessoas não precisam possuir ou memorizar um recurso se puderem preservar uma referência suficientemente barata e recuperável para voltar a ele |
| **Comportamento aproveitado** | Marcar, sublinhar, anotar, separar, extrair, colecionar e deixar lembretes para uso futuro |
| **Comportamento produzido** | Construção de coleções pessoais de referências, “salvar para depois” e acumulação de intenções futuras de leitura ou retorno |
| **Relação de poder** | O usuário ganha uma camada privada de organização sobre conteúdo externo, mas o provedor continua controlando a existência do destino e pode usar a marcação como dado de interesse |
| **Consequências inesperadas** | Acúmulo excessivo, coleções difíceis de recuperar, links quebrados e mistura entre memória privada, sinal social e dado de recomendação |
| **Destino ou transformação posterior** | Continua presente em navegadores e foi generalizado como estrela, coração, salvar, coleção e *read later* em diferentes produtos digitais |
| **Conceitos relacionados** | [[01 conceitos/Memoria Distribuida|Memória distribuída]], [[01 conceitos/Continuidade de Acesso|Continuidade de acesso]], [[01 conceitos/Compressao do Esforco|Compressão do esforço]] |
| **Variáveis relacionadas** | [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Expectativa de Disponibilidade|Expectativa de disponibilidade]] |
| **Genealogia** | [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]] |
| **Percurso(s)** | [[05 percursos/Como o Design Aprendeu a Guardar|Como o design aprendeu a guardar]] |
| **Parentes** | [[03 artefatos/Botao Salvar|Botão salvar]], [[03 artefatos/Archive|Archive]], [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Diário|Diário]], [[03 artefatos/Botao Like|Botão Like]]; sublinhado/marginalia, marca-texto, marcador de página, commonplace book e ficha bibliográfica como parentes comparativos ainda sem estudo próprio |
| **Leituras-chave** | Documentação histórica do W3C sobre Mosaic e hotlists; Richard Yeo sobre notebooks e commonplacing; Michael Stolberg sobre o método de commonplace book de John Locke; estudo do Pew Research Center sobre *link rot* |
| **Princípio de design revelado** | Selecionar algo para o futuro pode significar marcar o próprio objeto, extrair uma representação ou apenas preservar o caminho de retorno; o suporte escolhido define que tipo de memória será possível |
| **Questão em aberto** | Quando uma coleção deixa de ser extensão da memória e passa a exigir uma nova infraestrutura de indexação, busca e curadoria para continuar utilizável? |

## Referências

[^1]: W3C. “NCSA Mosaic for X 1.0”. Maio de 1993. A nota descreve a lista de bookmarks chamada *hotlist* como uma lista privada de lugares interessantes salva entre sessões. https://www.w3.org/News/9305.html

[^2]: W3C. “Spry2htm and Winh2htm”. 1995. O registro documenta ferramentas para converter NCSA Mosaic Hotlists em HTML e para importar listas entre Mosaic e Netscape Bookmarks, evidenciando a circulação contemporânea das convenções. https://www.w3.org/Tools/hotlist.html

[^3]: Chapekis, Athena; Bestvater, Samuel; Remy, Emma; Rivero, Gonzalo. “When Online Content Disappears”. Pew Research Center, 17 maio 2024. O estudo encontrou que 38% das páginas de uma amostra existente em 2013 não estavam mais acessíveis em 2023. https://www.pewresearch.org/data-labs/2024/05/17/when-online-content-disappears/

[^4]: Yeo, Richard. “Notebooks as memory aids: Precepts and practices in early modern England”. *Memory Studies*, v. 1, n. 1, 2008. O artigo discute commonplace books como repositórios de material literário e a passagem de auxiliares de memória para fontes externas de recuperação. https://doi.org/10.1177/1750698007083894

[^5]: Stolberg, Michael. “John Locke's ‘new method of making common-place-books’: tradition, innovation and epistemic effects”. *Early Science and Medicine*, v. 19, n. 5, 2014. Discute o método de Locke para organizar e indexar entradas de seu commonplace book e sua influência posterior. https://doi.org/10.1163/15733823-00195p04

[^6]: Schwan-STABILO. “170 years Schwan-STABILO” e documentação histórica do STABILO BOSS. A história corporativa registra o lançamento do BOSS em 1971 e observa que o projeto foi precedido pela prática de estudantes que já destacavam passagens com canetas coloridas. https://www.schwan-stabilo.com/en/170-years-schwan-stabilo
