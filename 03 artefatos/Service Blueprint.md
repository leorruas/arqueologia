---
title: "Service Blueprint"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
  - design/servicos
---

# Service Blueprint

Um serviço pode funcionar todos os dias sem que nenhuma pessoa consiga descrevê-lo inteiro.

O usuário vê uma tela, uma atendente, uma mensagem, uma fila, um recibo. A atendente vê um pedaço do sistema. A TI conhece integrações que o atendimento nunca encontra. A gestão acompanha indicadores que não aparecem para o usuário. Cada parte sabe alguma coisa, mas o serviço completo existe distribuído entre pessoas, regras, sistemas, objetos e tempo.

O **Service Blueprint** nasce de um problema de representação: como projetar aquilo que não está inteiro em lugar nenhum?

Sua contribuição histórica não foi simplesmente desenhar um fluxo. Fluxogramas, engenharia de métodos, planejamento de projetos e diagramas de sistemas já faziam isso. O movimento mais importante foi alinhar, numa mesma superfície, **aquilo que o usuário faz e vê com aquilo que a organização precisa fazer sem que ele veja**. A partir daí, a experiência deixa de parecer um evento isolado e passa a revelar a infraestrutura que a produz.

É também por isso que o blueprint se conecta à [[01 conceitos/Compressao do Esforco|compressão do esforço]]. Ele não elimina necessariamente nenhuma etapa do serviço. O que comprime é o trabalho de reconstruir mentalmente suas dependências.

## Antes do serviço ganhar um desenho

A palavra *blueprint* já carregava uma história antes de entrar no design de serviços. Em 1842, John Herschel desenvolveu o processo de cianotipia; décadas depois, o método se tornou especialmente útil para reproduzir desenhos técnicos de arquitetura e engenharia de forma relativamente simples e barata.[^1]

O objeto físico era uma cópia de um desenho técnico, normalmente reconhecida pelas linhas claras sobre fundo azul. Mas a palavra adquiriu uma função maior: *blueprint* passou a sugerir uma representação suficientemente precisa para orientar a construção de algo que ainda não estava pronto.

O parentesco com o Service Blueprint é, portanto, metafórico e operacional, não uma descendência direta entre técnicas gráficas. O que o design de serviços herda é uma promessa: **antes de executar, tornar a estrutura discutível no papel**.

Esse problema era especialmente difícil nos serviços. Em 1982, G. Lynn Shostack argumentava que produtos podiam ser examinados, fotografados, comparados e especificados fisicamente, enquanto serviços existiam como atos e processos no tempo. “Conhecer” um serviço com precisão semelhante era muito mais difícil.[^2]

A resposta de Shostack não surgiu do nada. No próprio artigo *How to Design a Service*, ela identifica como raízes do blueprinting a engenharia de métodos e estudos de tempo e movimento, técnicas de programação de projetos como PERT e o design de sistemas e software. Nenhuma delas resolvia sozinha o problema, mas todas ofereciam maneiras de representar processos, funções, dependências, tempos, falhas e fluxos.[^2]

A invenção, nesse sentido, não é a ideia genérica de diagramar um processo. É reorganizar essas tradições para um objeto específico: **um serviço visto simultaneamente como experiência e como sistema de produção**.

## A linha que revelou os bastidores

No modelo de Shostack, um blueprint precisava representar o serviço no tempo, identificar funções e subfunções, mostrar entradas e saídas, localizar gargalos e erros e considerar tolerâncias de execução.[^2] Um dos elementos mais importantes era a **linha de visibilidade**, que separava aquilo que fazia parte da experiência observável pelo consumidor daquilo que precisava acontecer nos bastidores.

Essa linha produz uma mudança conceitual simples e poderosa.

Em um fluxograma comum, duas atividades podem aparecer apenas como etapas consecutivas. No blueprint, importa também **quem as executa e se o usuário consegue vê-las**.

Imagine uma pessoa fazendo check-in em um hotel. Para ela, o serviço pode parecer resumido a entregar um documento, receber uma chave e subir para o quarto. Abaixo dessa experiência podem existir reserva, confirmação de pagamento, atualização do sistema, preparação do quarto, coordenação da limpeza, manutenção, emissão da chave e regras para exceções. O blueprint alinha essas camadas para mostrar que um gesto simples no frontstage pode depender de uma cadeia extensa no backstage.

A literatura posterior refinou essa estrutura. Bitner, Ostrom e Morgan descreveram em 2008 um formato que organiza **evidências físicas, ações do cliente, ações visíveis de funcionários ou tecnologias, ações invisíveis e processos de suporte**, separados por linhas de interação, visibilidade e interação interna.[^3]

É aí que o Service Blueprint se torna mais do que desenho de processo.

Ele funciona quase como uma contabilidade em duas dimensões do serviço: horizontalmente, acompanha a experiência ao longo do tempo; verticalmente, revela a profundidade organizacional necessária para cada momento acontecer.

Essa operação reduz [[01 conceitos/Redução de Inferências|inferências]]. Sem o blueprint, uma equipe pode precisar reconstruir em reuniões sucessivas quem faz o quê, qual sistema responde por determinada etapa, onde uma espera foi produzida ou por que uma falha visível nasceu num processo invisível. No diagrama, parte dessas relações passa a existir fora da cabeça das pessoas.

O esforço comprimido é, portanto, sobretudo **cognitivo e coordenativo**.

## O serviço cabe na parede — mas a parede não é o serviço

Em 1984, Shostack levou a técnica a uma audiência gerencial muito maior em *Designing Services That Deliver*, na *Harvard Business Review*. O argumento era que muitos problemas de serviço nasciam da ausência de design e controle sistemáticos e que o blueprint permitia identificar falhas antes da execução, testar modificações e explorar novas oportunidades.[^4]

Essa capacidade ajuda a explicar a popularização posterior do método no design de serviços. Um serviço distribuído entre departamentos pode ser colocado numa sala, impresso numa parede ou reconstruído colaborativamente durante um [[03 artefatos/Workshop|workshop]]. Pessoas que normalmente enxergam apenas seu trecho passam a discutir uma representação compartilhada.

Bitner, Ostrom e Morgan reforçaram em 2008 exatamente essa função. O blueprint aparece em seu trabalho como técnica capaz de visualizar processos dinâmicos, reconhecer interdependências, apoiar inovação, tornar a experiência do cliente visível e transferir conhecimento sobre a operação.[^3]

Isso aproxima o artefato de [[01 conceitos/Memoria Distribuida|memória distribuída]] e [[01 conceitos/Ecologia de Artefatos|ecologia de artefatos]]. O blueprint não precisa ser o fim do projeto. Ele pode receber evidências de pesquisa, revelar um [[03 artefatos/Problema de Design|problema de design]], orientar um [[03 artefatos/Projeto Piloto|projeto piloto]], alimentar [[03 artefatos/Checklist|checklists]], esclarecer responsabilidades próximas de uma [[03 artefatos/Matriz RACI|Matriz RACI]] ou tornar mudanças acompanháveis num [[03 artefatos/Kanban|Kanban]].

Seu valor pode estar justamente no estado que entrega ao artefato seguinte.

Mas existe um risco. Quanto melhor o diagrama, mais fácil confundir **legibilidade do mapa com ordem do território**.

Serviços reais contêm improviso, conhecimento tácito, conflito, exceções, atalhos, emoções, negociações e trabalho informal. Uma linha reta entre duas caixas pode condensar vinte telefonemas. A célula “aprovar solicitação” pode esconder disputa política. A etapa “atender usuário” pode comprimir julgamento, cuidado e trabalho emocional em um verbo aparentemente neutro.

O blueprint reduz o esforço de entender o sistema porque escolhe o que merece ser representado. Toda compressão contém uma perda.

## A linha de visibilidade também é uma linha de poder

Há outra razão para a linha de visibilidade ser importante: ela não é apenas uma convenção gráfica. Ela descreve uma assimetria.

O usuário experimenta consequências de processos que não consegue observar. Uma compra é cancelada, um benefício é negado, uma consulta atrasa, uma solicitação desaparece ou uma tarifa muda. Muitas vezes a pessoa só vê a última etapa de uma decisão produzida em outro lugar.

O Service Blueprint pode tornar parte dessa infraestrutura invisível visível **para a organização que o produz**, mas isso não significa que ela se torne visível para o usuário.

Esse detalhe muda a leitura política do artefato. Mapear backstage pode aumentar capacidade de coordenação e de correção. Também pode aumentar capacidade de controle gerencial sobre trabalhadores e tornar procedimentos mais rígidos. Um blueprint pode revelar trabalho invisível ou pode transformá-lo numa sequência padronizada que deixa menos espaço para julgamento local.

A mesma representação que ajuda a perguntar “por que o usuário espera?” pode ser usada para perguntar “como retirar trinta segundos desta etapa?”.

Por isso, o Service Blueprint não deve ser confundido com uma defesa automática de eficiência. Ele reduz [[02 variaveis/Custo de Busca|custo de busca]] para compreender relações, pode reduzir [[02 variaveis/Custo Transacional|custo transacional]] de coordenação e aumentar [[02 variaveis/Previsibilidade Visual|previsibilidade visual]] do sistema. Mas a qualidade do resultado depende do que foi mapeado, de quem participou e de quais interesses orientam a leitura.

A questão arqueológica é menos “o blueprint está completo?” e mais: **quais trabalhos deixaram de precisar ser reconstruídos porque o mapa os tornou explícitos — e quais trabalhos desapareceram justamente porque o mapa não soube representá-los?**

## Da representação à intervenção

O Service Blueprint acabou sendo refinado ao longo do tempo com novas camadas, símbolos, tempos, evidências, métricas, sistemas e fronteiras. Não existe uma única notação universal. Isso é importante porque mostra que sua padronização é funcional, não absoluta: reconhecemos a família de artefatos mesmo quando dois blueprints não usam exatamente o mesmo desenho.[^3]

A popularização também deslocou seu centro. Em Shostack, a preocupação estava fortemente ligada a marketing, operações, qualidade e design racional de serviços. No service design contemporâneo, o blueprint passou a conviver com pesquisa qualitativa, jornadas, workshops, prototipação e transformação organizacional.

A ideia fundamental, porém, sobrevive: um serviço pode ser tratado como algo que merece projeto explícito antes de depender apenas da execução cotidiana.

Isso produz uma relação curiosa com o blueprint arquitetônico. O desenho técnico permitia que diferentes trabalhadores construíssem um objeto físico compartilhando uma representação comum. O Service Blueprint tenta fazer algo semelhante com uma entidade que nunca se torna inteiramente material.

O edifício pode finalmente existir sem seu blueprint à vista. O serviço não. Ele precisa ser reconstruído toda vez que alguém o executa.

Talvez por isso o artefato seja tão importante para [[01 conceitos/Compressao do Esforco|compressão do esforço]]. Ele não comprime uma única ação do usuário. **Comprime a complexidade relacional suficiente para que muitas pessoas consigam pensar juntas sobre um sistema que nenhuma delas controla ou enxerga inteiro.**

E é justamente aí que aparece seu limite: se o serviço muda mais rápido do que o mapa, o artefato que deveria reduzir inferência começa a produzir outra — a suposição de que o desenho ainda representa a realidade.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Service Blueprint |
| **Período** | Formulação identificável em 1982; ampla divulgação gerencial em 1984; refinamentos importantes nas décadas seguintes |
| **Autoria** | G. Lynn Shostack é a formuladora identificável do service blueprinting; a forma contemporânea foi refinada por diversos autores e praticantes, incluindo Mary Jo Bitner, Amy L. Ostrom e Felicia N. Morgan |
| **Produto ou contexto** | Marketing de serviços, operações, design de serviços, inovação e transformação organizacional |
| **Tipo(s) de design** | Relação disciplinar ainda não classificada. |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Tornar serviços intangíveis e processuais suficientemente explícitos para serem analisados, projetados, testados e controlados |
| **Mundo antes** | Descrições verbais, procedimentos, fluxogramas, engenharia de métodos, PERT e diagramas de sistemas representavam partes do problema, mas não articulavam de modo específico experiência do cliente, visibilidade e produção do serviço |
| **Invenção** | Shostack sistematiza em 1982 o service blueprinting como método específico para representar e projetar serviços, combinando técnicas anteriores de representação de processos |
| **Refinamento** | Expansão das camadas e linhas de interação, visibilidade e interação interna; inclusão de evidências físicas, ações do cliente, frontstage, backstage, suporte, tempos, falhas e métricas |
| **Popularização** | O artigo de Shostack na Harvard Business Review em 1984 e, posteriormente, a adoção pela literatura de marketing, operações e service design |
| **Padronização** | Tornou-se uma convenção amplamente reconhecida no design de serviços, embora sem uma notação gráfica universal única |
| **Hipótese de design** | Se relações distribuídas de um serviço forem externalizadas numa representação comum, pessoas conseguem identificar dependências e intervir no sistema com menos reconstrução mental |
| **Comportamento aproveitado** | Pensar espacialmente sobre relações, sequências e dependências; usar representações compartilhadas para coordenar trabalho coletivo |
| **Comportamento produzido** | Mapear experiência e operação simultaneamente, discutir frontstage e backstage numa mesma superfície e localizar falhas atravessando fronteiras organizacionais |
| **Relação de poder** | Torna trabalho invisível legível para quem participa do mapeamento, mas também pode ampliar controle gerencial, cristalizar procedimentos ou manter processos invisíveis para o próprio usuário |
| **Consequências inesperadas** | Diagramas podem criar falsa sensação de completude, reduzir trabalho tácito a caixas genéricas e fazer uma representação ordenada parecer mais estável que o serviço real |
| **Destino ou transformação posterior** | Continua amplamente usado e foi expandido por ferramentas digitais, workshops colaborativos e variações específicas de setores e organizações |
| **Conceitos relacionados** | [[01 conceitos/Compressao do Esforco|Compressão do esforço]], [[01 conceitos/Redução de Inferências|Redução de inferências]], [[01 conceitos/Memoria Distribuida|Memória distribuída]], [[01 conceitos/Ecologia de Artefatos|Ecologia de artefatos]] |
| **Variáveis relacionadas** | [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Custo Transacional|Custo transacional]], [[02 variaveis/Previsibilidade Visual|Previsibilidade visual]], [[02 variaveis/Friccao|Fricção]] |
| **Genealogia** | [[04 genealogias/Compressao do Esforco|Compressão do esforço]], [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]] |
| **Percurso(s)** | Ainda não integrado a um percurso editorial. |
| **Parentes** | Blueprint arquitetônico, fluxograma, mapa de processo, customer journey map, [[03 artefatos/Kanban|Kanban]], [[03 artefatos/Matriz RACI|Matriz RACI]], [[03 artefatos/Checklist|Checklist]] |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Uma representação pode reduzir esforço sem remover trabalho do sistema: basta comprimir o custo de reconstruir suas relações |
| **Questão em aberto** | Quando um blueprint deixa de tornar o serviço legível e começa a impor ao serviço a simplificação necessária para caber no mapa? |

## Referências

[^1]: Smithsonian National Museum of American History. “Photographic History Collection: Cyanotypes”. O acervo registra John Herschel como inventor do processo de cianotipia em 1842 e sua posterior popularização, a partir da década de 1870, para reprodução de desenhos arquitetônicos. https://www.si.edu/object/photographic-history-collection-cyanotypes%3Anmah_1343353

[^2]: Shostack, G. Lynn. “How to Design a Service”. *European Journal of Marketing*, v. 16, n. 1, 1982, p. 49–63. DOI: 10.1108/EUM0000000004799. O artigo formula o conceito de service blueprinting, discute serviços como processos no tempo e identifica engenharia de métodos, PERT e design de sistemas/software como raízes da técnica. https://doi.org/10.1108/EUM0000000004799

[^3]: Bitner, Mary Jo; Ostrom, Amy L.; Morgan, Felicia N. “Service Blueprinting: A Practical Technique for Service Innovation”. *California Management Review*, v. 50, n. 3, 2008, p. 66–94. O artigo sistematiza o uso contemporâneo do blueprint para inovação, visualização da experiência, reconhecimento de interdependências e transferência de conhecimento. https://doi.org/10.2307/41166446

[^4]: Shostack, G. Lynn. “Designing Services That Deliver”. *Harvard Business Review*, jan. 1984. O artigo amplia a circulação gerencial do blueprint e enfatiza seu uso para localizar falhas e projetar serviços de forma sistemática. https://hbr.org/1984/01/designing-services-that-deliver
