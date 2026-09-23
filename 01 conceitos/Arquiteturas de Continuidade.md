---
title: "Arquiteturas de continuidade"
type: "conceito"
status: "rascunho"
origem: "hipótese-do-projeto"
grau: "experimental"
tags:
  - design/conceito
  - arqueologia
---

# Arquiteturas de continuidade

Alguns artefatos não precisam convencer alguém explicitamente a continuar. Eles apenas organizam a experiência de modo que **continuar custe menos do que parar, ou aconteça antes que uma nova decisão seja necessária**.

Chamamos provisoriamente essa operação de **arquiteturas de continuidade**. É uma hipótese da Arqueologia do Design, não um conceito consolidado com essa formulação na literatura. Ela serve para comparar artefatos muito diferentes sem afirmar que possuem a mesma origem histórica, intenção ou mecanismo.

O ponto de partida é uma pergunta:

> **quem projeta o momento em que uma atividade termina?**

## O ponto de parada também é projetado

Uma página termina. Um episódio termina. Um cigarro termina. Uma ficha de fliperama acaba. Uma porção pode acabar. Cada um desses limites cria uma oportunidade para que continuar volte a exigir alguma ação.

Outros sistemas reduzem, deslocam ou eliminam esses limites. [[03 artefatos/Infinite Scroll|Infinite Scroll]] carrega o próximo conjunto antes de uma solicitação explícita. Autoplay inicia o próximo episódio. Um feed de vídeos curtos posiciona imediatamente outro conteúdo depois do anterior. Embalagens podem organizar muitas pequenas unidades numa sequência de consumo disponível.

A hipótese não é que ausência de parada produza automaticamente compulsão. É mais modesta: **a forma como uma atividade é segmentada altera onde aparecem oportunidades de reconsiderar sua continuidade**.

## Continuar não é o mesmo que querer continuar

Essa distinção é central. Uma interface pode inferir legitimamente que o gesto em curso expressa intenção de prosseguir. Foi justamente essa a lógica original do [[03 artefatos/Infinite Scroll|Infinite Scroll]] em contextos de busca.

Mas a inferência pode ganhar outra função quando continuidade também é uma métrica valiosa para quem oferece o sistema. Se permanência, consumo, atenção ou repetição produzem receita, remover pontos de parada pode beneficiar simultaneamente usuário e organização — ou criar conflito entre os dois.

Por isso, arquiteturas de continuidade não são sinônimo de [[01 conceitos/Padroes Enganosos|Padrões enganosos]]. Elas descrevem uma propriedade estrutural. Um sistema pode organizar continuidade de maneira útil, neutra, protetiva ou manipulativa dependendo do contexto, das alternativas e dos interesses envolvidos.

## A unidade importa

Muitos comportamentos repetidos possuem unidades: uma página, uma rodada, um episódio, uma dose, uma porção, uma música, uma partida.

Essas unidades fazem mais do que organizar conteúdo ou matéria. Elas podem funcionar como **fronteiras comportamentais**. Ao final de uma unidade, continuar pode exigir abrir outra, pedir outra, pagar novamente, confirmar ou simplesmente decidir.

Isso sugere que embalagem, paginação, duração e sequenciamento podem ser investigados como decisões sobre continuidade. O artefato não controla sozinho o comportamento, mas participa da definição de quando a pergunta “mais um?” reaparece.

## Continuidade mecânica e continuidade preditiva

Em sistemas personalizados, remover o ponto de parada é apenas metade do problema. A continuidade também depende de o próximo item parecer suficientemente promissor. Se as escolhas seguintes forem repetidamente irrelevantes, uma interface sem fricção não sustenta a sessão por muito tempo.

Isso sugere duas operações complementares:

**Continuidade mecânica:** reduz o custo de chegar ao próximo — [[03 artefatos/Autoplay|Autoplay]], swipe, [[03 artefatos/Infinite Scroll|Infinite Scroll]].

**Continuidade preditiva:** aumenta a probabilidade de o próximo parecer relevante — recomendação, ranking e personalização baseados em dados sobre comportamento.

Quando as duas se combinam, a arquitetura não apenas abre uma estrada sem cruzamentos: **ela pode reconstruir continuamente o próximo trecho a partir dos rastros deixados pelo próprio percurso**.

## Dados como matéria de continuidade

Num feed personalizado, consumir também produz dados. Permanecer, avançar, curtir, compartilhar, seguir, pesquisar ou abandonar podem funcionar como sinais para sistemas que estimam preferências e reorganizam ofertas futuras.

Surge um circuito:

**comportamento → dados → inferência de preferência → seleção → novo comportamento → novos dados.**

A continuidade deixa, portanto, de depender apenas da forma da interface. Ela pode depender da capacidade do sistema de aprender quais conteúdos mantêm relevância para aquela pessoa.

Isso também torna personalização ambígua. Ela pode funcionar como serviço — reduzir o esforço de encontrar algo interessante num universo enorme — e simultaneamente como infraestrutura de permanência.

A pergunta crítica passa a ser: **qual objetivo define uma boa recomendação?**

Algo parecido com o que a pessoa já gostou? Algo que provavelmente será consumido até o fim? Algo que amplia seus interesses? Algo importante mesmo que não produza engajamento imediato? Algo que maximiza permanência?

Todos podem ser apresentados como “personalização”, mas produzem arquiteturas de experiência diferentes.

## Continuidade versus descoberta

A personalização introduz outra tensão: **explorar o conhecido ou introduzir o novo**.

Um sistema que oferece apenas variações de padrões já observados pode aumentar previsibilidade, mas reduzir encontros improváveis. Um sistema que introduz novidade demais corre o risco de diminuir relevância percebida e interromper a continuidade.

Por isso, uma arquitetura de continuidade personalizada precisa administrar alguma relação entre familiaridade e surpresa. A pergunta arqueológica torna-se:

> **quanto de surpresa uma arquitetura de continuidade consegue suportar sem perder a pessoa?**

O problema não é apenas aquilo que o algoritmo mostra. Também importa aquilo que deixa de alcançar probabilidade suficiente para ser mostrado.

Essa dimensão amplia a análise de poder. Sistemas de recomendação não distribuem somente atenção entre conteúdos disponíveis; participam da definição de quais diferenças chegam a ser experimentadas pelo usuário.

## Produzir razões para continuar

Nas primeiras formulações desta hipótese, arquiteturas de continuidade apareciam principalmente como sistemas que removiam ou deslocavam pontos de parada. Personalização exige uma ampliação.

Em sistemas adaptativos, a arquitetura pode atuar em duas frentes: **reduzir a necessidade de decidir continuar e aumentar continuamente a atratividade estimada daquilo que vem depois**.

Portanto, arquiteturas de continuidade não dizem respeito apenas à remoção dos momentos em que alguém poderia parar. Em sistemas personalizados, dizem respeito também à **produção contínua de razões para não usar esses pontos de parada**.

## Relação com compressão do esforço

[[01 conceitos/Compressao do Esforco|Compressão do esforço]] ajuda a explicar um dos mecanismos possíveis. Quando o custo de repetir uma ação cai, a frequência possível dessa ação pode aumentar.

Mas os conceitos não são equivalentes. Um atalho de teclado comprime esforço sem necessariamente prolongar uma sessão. Uma arquitetura de continuidade pode operar mesmo sem grande redução de esforço, por exemplo ao organizar unidades e recompensas de modo que cada término já prepare o próximo começo.

A relação a investigar é:

**redução do custo de repetição → repetição mais disponível → deslocamento do ponto de parada → possível aumento de continuidade**.

Essa cadeia é uma hipótese, não uma causalidade universal.

## Relação com recompensa variável

[[01 conceitos/Recompensa Variavel|Recompensa variável]] descreve outra peça possível. Uma atividade pode continuar porque a próxima tentativa possui resultado incerto e potencialmente recompensador. Máquinas caça-níqueis são candidatas importantes para investigar essa combinação.

Mas continuidade não exige recompensa variável. Autoplay pode prolongar uma sequência de episódios previsíveis; um pacote pode tornar disponível a próxima unidade sem qualquer incerteza sobre seu sabor.

Separar os mecanismos impede que todo comportamento repetitivo seja explicado pela mesma teoria.

## Relação com padrões enganosos

[[01 conceitos/Padroes Enganosos|Padrões enganosos]] entram quando a arquitetura de continuidade obscurece, constrange ou dificulta uma decisão que poderia interromper a atividade.

A pergunta crítica passa a ser:

> **o sistema facilita uma intenção de continuar ou reduz a oportunidade de perceber e exercer a intenção de parar?**

Essa distinção permite analisar Infinite Scroll, autoplay, cancelamento, notificações e outros sistemas sem classificá-los antecipadamente como manipulativos.

## Artefatos candidatos

A hipótese precisa ser testada por escavações independentes. Candidatos:

- [[03 artefatos/Infinite Scroll|Infinite Scroll]];
- [[03 artefatos/Autoplay|Autoplay]];
- máquina caça-níqueis;
- cigarro e maço de cigarros;
- snack e embalagem multiporção;
- [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]];
- créditos finais;
- paginação;
- ficha de fliperama;
- botão “próximo”;
- “você ainda está assistindo?”;
- limites de tempo e lembretes de pausa.

Os pares são especialmente úteis: paginação / Infinite Scroll; reprodução manual / autoplay; unidade individual / multiporção; continuidade automática / confirmação de continuidade.

## Uma inversão importante

Se existem artefatos que facilitam continuidade, existem também **artefatos de interrupção**.

Um aviso de “você ainda está assistindo?”, um limite diário, uma embalagem individual, o fim de uma página ou uma confirmação antes de prosseguir podem devolver ao usuário um momento de decisão.

Isso sugere que a ausência de fricção não é sempre a condição mais neutra. Em alguns sistemas, uma pequena interrupção funciona como infraestrutura de agência.

## Perguntas arqueológicas

- Onde esta atividade termina?
- Quem definiu essa unidade?
- O que é necessário para começar a próxima?
- O sistema pede nova decisão ou presume continuidade?
- Que fricção existia entre uma repetição e outra?
- Essa fricção foi removida, deslocada ou automatizada?
- Quem se beneficia quando a atividade continua?
- Existe um sinal de parada?
- Como o usuário recupera a possibilidade de interromper?
- O artefato facilita continuidade desejada ou torna a interrupção mais difícil de exercer?
- O próximo item é escolhido pela pessoa, por um editor ou por um sistema de recomendação?
- Que comportamentos viram dados para selecionar o próximo item?
- O que o sistema entende por relevância?
- Quanto de novidade consegue introduzir sem romper a continuidade?
- Que conteúdos deixam de aparecer porque não se parecem suficientemente com o comportamento passado?

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Arquiteturas de continuidade |
| **Origem** | Hipótese do projeto |
| **Grau de consolidação** | Experimental |
| **Formulação associada a** | Arqueologia do Design |
| **Área principal** | IHC / design de interação / design de produto / economia comportamental |
| **Hipótese central** | Artefatos podem alterar comportamento ao projetar onde aparecem, desaparecem ou são automatizados os pontos em que continuar exige nova decisão |
| **Unidade de análise** | Relação entre repetição, segmentação, ponto de parada, custo de continuidade e seleção do próximo estímulo |
| **O que ajuda a explicar** | Por que paginação, autoplay, porções, embalagens e feeds podem alterar a frequência ou duração de comportamentos sem necessariamente criar um desejo novo |
| **O que não explica sozinho** | Dependência química, compulsão, preferência, intenção manipulativa ou efeitos psicológicos de um artefato |
| **Conceitos relacionados** | [[01 conceitos/Compressao do Esforco|Compressão do esforço]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]], [[01 conceitos/Recompensa Variavel|Recompensa variável]], [[01 conceitos/Padroes Enganosos|Padrões enganosos]] |
| **Variáveis relacionadas** | [[02 variaveis/Friccao|Fricção]], [[02 variaveis/Atrito Decisorio|Atrito decisório]], [[02 variaveis/Atencao|Atenção]] |
| **Artefatos-chave iniciais** | [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Autoplay|Autoplay]], [[03 artefatos/Feed de Videos Curtos|Feed de vídeos curtos]], máquina caça-níqueis, cigarro/maço, snack/embalagem, paginação |
| **Questão em aberto** | Quando um ponto de parada é fricção inútil e quando funciona como infraestrutura de agência? Em sistemas personalizados, quanto de novidade pode ser introduzido sem romper a continuidade? |

## Inventário de literatura para testar a hipótese

Arquiteturas de continuidade é uma formulação do projeto. A literatura abaixo não deve ser tratada como se já utilizasse esse conceito. Ela oferece mecanismos, evidências e contraexemplos com os quais a hipótese pode ser confrontada.

### 1. Pontos de parada, segmentação e unidades

**Geier, Rozin & Doros (2006), _Unit Bias: A New Heuristic That Helps Explain the Effect of Portion Size on Food Intake_.** Mostra que a unidade apresentada pode funcionar como referência para quanto parece apropriado consumir. É importante porque sustenta a ideia de que a unidade não é apenas recipiente: sua segmentação participa do comportamento.

**Geier, Wansink & Rozin (2012), _Red potato chips: segmentation cues can substantially decrease food intake_.** Inserir marcadores visuais periódicos em tubos de batata chips reduziu substancialmente o consumo nos experimentos relatados. Os autores propõem mecanismos como aumento do monitoramento, normas de porção e interrupção de sequências automatizadas. É uma aproximação especialmente direta da nossa noção de **artefato de interrupção**.

**Wansink, Painter & North (2005), _Bottomless Bowls_.** O experimento da tigela que se reabastecia encontrou maior consumo quando o sinal visual de quanto havia sido consumido era removido. É conceitualmente muito próximo de Infinite Scroll: o recipiente deixa de fornecer seu próprio fim. Deve ser usado com cautela e acompanhado por literatura posterior, dado o histórico de problemas de pesquisa associado a Brian Wansink.

**Pergunta para o projeto:** uma unidade material ou visual funciona também como unidade comportamental? E o que acontece quando seu término deixa de ser perceptível?

### 2. Autorregulação e HCI

**Lyngs et al. (2019), _Self-Control in Cyberspace_.** Revisou 367 aplicativos e extensões de autocontrole digital e organizou mecanismos pelos quais interfaces podem apoiar autorregulação. É importante porque oferece a contraparte da continuidade: sistemas deliberadamente projetados para ajudar alguém a interromper, restringir ou reconsiderar um comportamento.

Esse campo permite estudar limites de tempo, bloqueadores, lembretes, confirmação de continuidade e outros **artefatos de interrupção** sem pressupor que toda fricção seja indesejável.

**Pergunta para o projeto:** quando a interrupção funciona como custo inútil e quando funciona como infraestrutura de agência?

### 3. Tecnologia persuasiva

**B. J. Fogg (1998; 2003), _Persuasive Computers_ e _Persuasive Technology_.** A captologia investiga tecnologias computacionais deliberadamente projetadas para mudar atitudes ou comportamentos. É fundamental para distinguir uma arquitetura que simplesmente possui efeitos comportamentais de outra criada com intenção persuasiva.

A distinção de intencionalidade é especialmente útil para evitar chamar qualquer continuidade de manipulação. Uma consequência emergente de um artefato não é automaticamente equivalente a um efeito persuasivo planejado.

**Pergunta para o projeto:** a continuidade é efeito colateral, conveniência deliberada, objetivo comportamental ou meio para outro objetivo?

### 4. Economia da atenção

**Herbert Simon (1971), _Designing Organizations for an Information-Rich World_.** Formula a relação entre abundância de informação e escassez da atenção necessária para consumi-la. É uma base conceitual importante para compreender por que sistemas de seleção, filtragem e recomendação ganham valor quando o conteúdo disponível ultrapassa radicalmente a capacidade humana de examiná-lo.

**Tim Wu (2016), _The Attention Merchants_.** Reconstrói historicamente modelos de negócio que capturam atenção para revendê-la a anunciantes. Ajuda a separar a mecânica da continuidade de sua economia: permanecer pode adquirir valor comercial.

**Pergunta para o projeto:** quem obtém valor quando a atividade continua, e como esse valor altera os critérios usados para projetar a continuidade?

### 5. Continuidade, jogo e dependência comportamental

**Natasha Dow Schüll (2012), _Addiction by Design: Machine Gambling in Las Vegas_.** É provavelmente a leitura mais próxima do problema geral. Sua etnografia das máquinas de jogo examina ritmo contínuo, algoritmos, ergonomia, arquitetura de cassino, rastreamento de jogadores e o objetivo industrial de ampliar _time on device_. A “machine zone” descrita no livro permite investigar continuidade não como sequência de decisões isoladas, mas como estado sustentado pela relação entre pessoa e sistema.

Ela também oferece um cuidado importante: não reduzir dependência exclusivamente ao indivíduo nem exclusivamente ao artefato, mas investigar a interação entre os dois.

**Pergunta para o projeto:** quando continuar deixa de ser principalmente busca por uma recompensa externa e passa a ser manutenção do próprio estado de continuidade?

### 6. Alimentos, hiperpalatabilidade e mecanismos fisiológicos

**Fazzino, Rohde & Sullivan (2019), _Hyper-Palatable Foods_.** Propõe uma definição quantitativa de alimentos hiperpalatáveis baseada em combinações específicas de gordura, açúcares, carboidratos e sódio. A literatura discutida pelos autores também trata de saciedade sensorial específica e recompensa alimentar.

Essa frente deve permanecer **analiticamente separada** das interfaces. Um feed não é equivalente a um alimento hiperpalatável, e hiperpalatabilidade não é simplesmente um “dark pattern químico”. Aqui existem mecanismos fisiológicos e neurobiológicos próprios.

O parentesco útil está em outra escala: produtos materiais também podem ser projetados de maneiras que alteram recompensa, unidade, porção e condições de cessação do consumo.

**Pergunta para o projeto:** quais efeitos pertencem à composição do alimento, quais pertencem à porção/embalagem e quais pertencem à interação entre ambos?

### 7. A fronteira mais importante: mecanismos diferentes, forma semelhante

Este inventário sugere que objetos formalmente parecidos podem sustentar continuidade por mecanismos diferentes:

- **segmentação e sinais externos:** tornam o fim perceptível;
- **compressão do esforço:** reduz o custo de repetir;
- **persuasão:** procura deliberadamente alterar comportamento;
- **recomendação e personalização:** tentam aumentar a relevância prevista do próximo item;
- **recompensa e incerteza:** podem tornar a próxima unidade atraente;
- **mecanismos farmacológicos:** podem produzir dependência por vias que não pertencem ao design de interface;
- **hiperpalatabilidade e saciedade:** alteram a experiência alimentar por mecanismos fisiológicos e sensoriais;
- **economia da atenção:** explica por que prolongar permanência pode adquirir valor econômico;
- **autorregulação:** mostra como design também pode devolver pontos de decisão e interrupção.

A hipótese de **Arquiteturas de continuidade** só será útil se conseguir relacionar esses campos **sem colapsá-los numa explicação única**.

### Leituras prioritárias

1. Natasha Dow Schüll — _Addiction by Design_ (2012): continuidade, “machine zone” e _time on device_.
2. Geier, Rozin & Doros — _Unit Bias_ (2006): unidade e segmentação.
3. Geier, Wansink & Rozin — _Red Potato Chips_ (2012): sinais de segmentação como interrupção.
4. Lyngs et al. — _Self-Control in Cyberspace_ (2019): design para autorregulação e interrupção.
5. B. J. Fogg — _Persuasive Technology_ (2003): intencionalidade e mudança comportamental.
6. Herbert Simon — _Designing Organizations for an Information-Rich World_ (1971): escassez de atenção.
7. Tim Wu — _The Attention Merchants_ (2016): economia política da atenção.
8. Fazzino, Rohde & Sullivan — _Hyper-Palatable Foods_ (2019): hiperpalatabilidade e cessação do consumo.


