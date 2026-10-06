---
title: "Reversibilidade representacional"
type: "variavel"
status: "publicado"
eixo: "rígida ↔ revisável"
tags:
  - design/variavel
  - arqueologia
  - representacao
---

# Reversibilidade representacional

Uma pessoa pode receber dez novas informações sobre alguém e continuar vendo exatamente a mesma pessoa. O problema não é ausência de evidência. É que a representação anterior encontrou uma forma de absorver tudo sem precisar mudar.

**Reversibilidade representacional** é uma variável deste projeto para observar quanto uma representação permanece capaz de ser revista quando encontra informação nova, contraditória ou mais específica. Ela interessa ao design porque artefatos controlam quais pedaços de informação chegam, em que ordem, com que duração, sob qual enquadramento e com que facilidade podem ser recuperados depois.

O nome deriva por analogia com [[02 variaveis/Reversibilidade|Reversibilidade]], mas os dois eixos medem coisas diferentes. Reversibilidade pergunta se uma **ação ou estado** pode ser desfeito. Reversibilidade representacional pergunta se uma **interpretação** continua aberta a revisão.

**Eixo:** representação rígida ↔ representação revisável.

## Quando a contraprova vira exceção

Uma representação rígida consegue preservar sua estrutura mesmo diante de informação incompatível. A pessoa pode encontrar um membro do grupo que contradiz seu estereótipo e classificá-lo como “exceção”; pode assistir a uma fala longa e escolher o instante que confirma a impressão anterior; pode reinterpretar um comportamento cooperativo como estratégia ou fingimento.

A psicologia social descreve mecanismos próximos. A literatura sobre estereótipos mostra que representações categóricas podem ser persistentes e que informação inconsistente nem sempre produz revisão.[^1] Um mecanismo particularmente relevante é o **subtyping**: membros que contradizem o estereótipo são agrupados numa subcategoria excepcional, permitindo que a representação do grupo principal permaneça praticamente intacta.[^2]

Essa literatura não utiliza “reversibilidade representacional” como variável de design. A formulação aqui é uma operacionalização própria do projeto. Ela usa essas evidências como antecedente para perguntar algo diferente: **que propriedades de um artefato tornam mais fácil ou mais difícil tratar uma contraprova como informação capaz de alterar a representação?**

O [[03 artefatos/Apelido político|apelido político]] oferece um caso de baixa reversibilidade potencial. Quando referência e atributo se fundem num rótulo curto, informação posterior pode continuar sendo recuperada sob o mesmo enquadramento. O [[03 artefatos/Clip político|clip político]] pode produzir operação parecida no tempo: um fragmento saliente torna-se atalho para representar uma sequência muito maior.

Baixa reversibilidade não significa falsidade. Uma representação pode ser rígida e correta em vários aspectos. O eixo mede sua **capacidade de revisão**, não sua veracidade.

## Revisar exige que a nova informação alcance a categoria

No polo mais revisável, informação nova consegue alterar a estrutura pela qual a pessoa, grupo ou situação é interpretada. Isso pode acontecer porque o artefato apresenta diversidade interna, prolonga exposição, permite interação ou dificulta a redução de todo comportamento a uma única categoria.

Ahler e Sood mostraram que norte-americanos superestimavam a presença de grupos estereotípicos dentro dos dois grandes partidos; fornecer informação sobre a composição real levou participantes a perceber o outro partido como menos extremo e a relatar menor distância social.[^3] O resultado não demonstra revisão permanente de uma identidade política, mas mostra que uma representação partidária agregada pode ser atualizada quando a informação introduz variação onde havia homogeneidade percebida.

Santos, Garcia-Marques e Palma investigaram diretamente a relação entre variabilidade percebida e mudança de estereótipos. Seus experimentos encontraram que induzir uma representação mais variável do grupo favorecia a incorporação de informação contraestereotípica na representação geral, em vez de confiná-la a exceções.[^4] Essa relação é particularmente próxima da variável proposta aqui: uma representação pode tornar-se mais revisável quando já admite que seus membros não são todos iguais.

O [[03 artefatos/Entrevista longa|Entrevista longa]] é uma hipótese de design nessa direção. Duração adicional não garante revisão, mas aumenta a quantidade de comportamento, contexto e contradição que precisa coexistir na mesma representação. O [[03 artefatos/Tango|Tango]] produz outro tipo de evidência: em vez de apenas apresentar informação sobre o adversário, coloca-o numa relação cooperativa em que ele precisa agir diante do participante. Estudos de contato intergrupal mostram que personalização, saliência posterior da categoria e recategorização podem ser combinadas para produzir mudanças em avaliações do outro grupo, embora os efeitos dependam do contexto e possam perder força com o tempo.[^5]

## Como observar a variável

A variável não pode ser medida apenas perguntando “a pessoa mudou de opinião?”. Uma representação pode se tornar mais revisável sem mudar de polo avaliativo. Alguém pode continuar rejeitando uma figura pública e, ao mesmo tempo, deixar de acreditar que um único rótulo explica tudo sobre ela.

Um primeiro indicador é a **incorporação de contraprovas**. Depois de encontrar informação incompatível com a representação anterior, a pessoa altera a descrição geral ou apenas cria uma exceção? Outro é a **capacidade de gerar variação interna**: ao descrever um grupo, reconhece tipos, motivações e trajetórias diferentes ou continua tratando seus membros como intercambiáveis?

Também podem ser observados **tempo de atualização**, número de evidências necessárias para revisar uma conclusão, confiança antes e depois de informação contraditória e capacidade de formular condições de falsificação: “o que precisaria acontecer para eu mudar essa interpretação?”. Em pesquisa qualitativa, sinais importantes seriam correções espontâneas, abandono de generalizações absolutas, surgimento de ressalvas e reconhecimento de casos que não cabem na categoria anterior.

Esses indicadores ainda precisam ser testados como instrumento. O valor inicial da variável está em permitir comparação entre artefatos que antes apareciam apenas como casos isolados.

## Mais revisabilidade também tem custo

Uma representação infinitamente revisável seria pouco útil. Categorias existem porque permitem antecipar, reconhecer e decidir sem reconstruir o mundo inteiro a cada encontro. A mesma capacidade de estabilizar uma interpretação que produz estereótipos rígidos também sustenta aprendizado, reputação, confiança e memória.

Por isso, alta reversibilidade representacional não é automaticamente desejável. Exigir revisão constante pode produzir indecisão, relativização de evidências consistentes ou vulnerabilidade a manipulação. Uma representação baseada em ampla documentação não deveria perder peso diante de qualquer novo fragmento contraditório.

O problema de design está na relação entre **estabilidade e corrigibilidade**. Uma representação precisa ser estável o suficiente para orientar ação e revisável o suficiente para não transformar toda evidência incompatível em ruído.

Essa tensão também distingue reversibilidade representacional de [[02 variaveis/Variabilidade|Variabilidade]]. Variabilidade descreve quanto condições ou resultados mudam. Reversibilidade representacional descreve quanto o **modelo usado para interpretá-los** consegue mudar. Um grupo pode ser altamente variável e continuar sendo percebido por uma representação rígida.

[[02 variaveis/Prototipicidade percebida|Prototipicidade percebida]] acrescenta outra dimensão. Ela pergunta quanto um indivíduo parece representar a categoria; reversibilidade representacional pergunta se a própria representação consegue mudar. Um caso pouco prototípico pode aumentar individuação e, ao mesmo tempo, ser descartado como exceção, preservando uma representação rígida.

[[02 variaveis/Ameaça percebida|Ameaça percebida]] pode funcionar como condição que torna revisão mais custosa: informação sobre um grupo interpretado como perigoso pode ser processada defensivamente ou reenquadrada como nova evidência de risco. Essa relação permanece hipótese comparativa do projeto e não implica que toda representação rígida seja produzida por ameaça.

## Do fechamento à reabertura

Dentro de [[01 conceitos/Design da aversão|Design da aversão]], a variável permite comparar dispositivos que operam em níveis diferentes. O [[03 artefatos/Apelido político|apelido político]] pode reduzir revisabilidade por compressão semântica; o [[03 artefatos/Clip político|clip político]], por compressão temporal. A [[03 artefatos/Entrevista longa|entrevista longa]] pode aumentar a quantidade de evidência disponível para revisão; o [[03 artefatos/Tango|Tango]] pode introduzir evidência relacional produzida durante a própria interação.

Isso dá forma operacional à hipótese de **fechamento e reabertura de representações** preservada no projeto. Fechamento ocorre quando um artefato torna uma interpretação suficientemente barata, estável e recuperável para que novas informações tenham dificuldade de alterar sua estrutura. Reabertura ocorre quando o sistema volta a permitir que contradição, variação ou experiência produzam revisão.

A pergunta que a variável acrescenta ao estudo de qualquer artefato é simples: **depois que esta representação se forma, o que ainda consegue mudá-la?**

A [[03 artefatos/Voting Advice Application|Voting Advice Application]] também oferece um caso operacional: quando novas informações sobre um candidato aparecem, a estrutura de comparação deveria permitir que a representação e a recomendação mudassem sem precisar preservar o resultado anterior por inércia. Na hipótese de uma VAA orientada pela questão do eleitor, isso inclui poder revisar critérios, pesos e evidências que sustentaram a conclusão.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Reversibilidade representacional |
| **Eixo** | Representação rígida ↔ representação revisável |
| **Definição operacional** | Grau em que uma representação consegue incorporar informação nova, contraditória ou individuante alterando sua estrutura, em vez de preservar-se por exceção, descarte ou reenquadramento |
| **Como observar** | Incorporação de contraprovas, reconhecimento de variabilidade interna, mudança de generalizações, tempo e quantidade de evidência necessários para revisão, capacidade de formular condições de falsificação |
| **O que não mede sozinho** | Veracidade da representação, simpatia, polarização afetiva, mudança de voto, confiança ou intensidade da identidade |
| **Trade-offs principais** | Maior revisabilidade favorece correção e nuance, mas pode elevar custo cognitivo, enfraquecer estabilidade útil ou aumentar vulnerabilidade a evidência episódica e manipulação |
| **Artefatos-chave** | [[03 artefatos/Apelido político|Apelido político]], [[03 artefatos/Clip político|Clip político]], [[03 artefatos/Entrevista longa|Entrevista longa]], [[03 artefatos/Tango|Tango]] |
| **Conceitos relacionados** | [[01 conceitos/Design da aversão|Design da aversão]], [[01 conceitos/Identidade política negativa|Identidade política negativa]], [[01 conceitos/Compressao do Esforco|Compressão do esforço]] |
| **Genealogias relacionadas** | [[04 genealogias/Compressao do Esforco|Compressão do esforço]]; fechamento e reabertura de representações permanece como genealogia em investigação |

## Referências

[^1]: Hilton, James L.; von Hippel, William. “Stereotypes.” *Annual Review of Psychology*, 47, 1996, pp. 237–271. [Acessar revisão no Annual Reviews](https://www.annualreviews.org/content/journals/10.1146/annurev.psych.47.1.237). DOI: `10.1146/annurev.psych.47.1.237`.

[^2]: Yzerbyt, Vincent Y.; Coull, Angela; Rocher, Steve J. “Fencing off the deviant: The role of cognitive resources in the maintenance of stereotypes.” *Journal of Personality and Social Psychology*, 77(3), 1999, pp. 449–462. O mecanismo de *subtyping* é usado aqui como antecedente teórico; a literatura posterior o descreve como estratégia de preservação de conhecimento diante de exemplos que contradizem a categoria. Ver também: [Subtyping as a knowledge preservation strategy in category learning (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC1936983/).

[^3]: Ahler, Douglas J.; Sood, Gaurav. “The Parties in Our Heads: Misperceptions about Party Composition and Their Consequences.” *The Journal of Politics*, 80(3), 2018, pp. 964–981. [Acessar artigo no periódico](https://www.journals.uchicago.edu/doi/10.1086/697253). DOI: `10.1086/697253`.

[^4]: Santos, Ana Sofia; Garcia-Marques, Leonel; Palma, Teresa A. “Inducing perceived group variability triggers the incorporation of counter-stereotypic information into a generalized stereotype change.” *Scientific Reports*, 14, 9214, 2024. [Acessar artigo em acesso aberto (PMC)](https://pmc.ncbi.nlm.nih.gov/articles/PMC11035612/). DOI: `10.1038/s41598-024-59929-0`.

[^5]: Tausch, Nicole; Birtel, Michèle D.; Górska, Paulina; Bode, Sidney; Rocha, Carolina. “A post-Brexit intergroup contact intervention reduces affective polarization between Leavers and Remainers short-term.” *Communications Psychology*, 2, 95, 2024. [Acessar artigo em acesso aberto](https://www.nature.com/articles/s44271-024-00146-w). DOI: `10.1038/s44271-024-00146-w`.

> Formulação do projeto: “reversibilidade representacional” não é apresentada como variável consolidada na literatura. A nota operacionaliza, para comparação entre artefatos de design, problemas estudados em pesquisas sobre manutenção e mudança de estereótipos, variabilidade percebida, individuação e contato intergrupal.
