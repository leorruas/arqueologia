---
title: "Design de serviços"
type: "tipo-design"
status: "publicado"
tags:
  - design/tipo
  - arqueologia
---

# Design de serviços

Um serviço é um objeto estranho para o design porque **não fica pronto num lugar só**. Uma cadeira pode ser inspecionada antes de ser usada. Um cartaz pode ser observado inteiro. Um serviço, ao contrário, acontece quando pessoas, regras, documentos, sistemas, espaços e tempos conseguem coincidir o suficiente para produzir uma experiência.

É por isso que, neste vault, design de serviços interessa como a tentativa de tornar **relações distribuídas projetáveis**. O problema não é apenas melhorar um ponto de contato. É compreender e reorganizar uma sequência que atravessa atores diferentes, incluindo partes que o usuário nunca vê.

## O serviço existe enquanto muita coisa coincide

Muito antes de existir uma disciplina chamada design de serviços, sociedades já desenhavam mecanismos para coordenar atendimento, circulação, espera e responsabilidade. O [[03 artefatos/Calendário|Calendário]] cria referências temporais compartilhadas; a [[03 artefatos/Fila|Fila]] transforma disputa imediata por um recurso em ordem visível; o [[03 artefatos/Agendamento|Agendamento]] distribui acesso no futuro; o [[03 artefatos/Cartao de Embarque|Cartão de embarque]] comprime pessoa, autorização, horário e destino em um documento capaz de atravessar uma infraestrutura logística.

Esses artefatos não são “service design” retrospectivamente no sentido profissional. Eles mostram, porém, que o problema central da área é antigo: **como coordenar ações que dependem de outras ações realizadas por pessoas e sistemas diferentes?**

Essa dependência torna serviços particularmente vulneráveis a invisibilidades. Para o usuário, uma falha pode aparecer como “o sistema não deixou”, enquanto por trás dela existem regra, banco de dados, decisão administrativa, exceção, fila de trabalho e responsabilidade repartida entre setores. A experiência percebida é apenas a superfície de uma organização muito maior.

O design de serviços ganha força quando essa infraestrutura deixa de ser tratada como pano de fundo inevitável e passa a ser representada, pesquisada e modificada deliberadamente.

## Quando o invisível precisou virar objeto de projeto

Uma linhagem importante dessa mudança vem do marketing e das operações de serviços. Em 1982, [[autores/G Lynn Shostack|G. Lynn Shostack]] argumenta em *How to Design a Service* que serviços precisavam de métodos capazes de torná-los visíveis e especificáveis. Sua proposta de *service blueprinting* recombinava técnicas de engenharia de métodos, PERT e design de sistemas para representar tempo, funções, pontos de falha, tolerâncias e relações entre partes do serviço.[^1]

A contribuição é importante justamente porque não inventa do zero a ideia de mapear processos. O [[03 artefatos/Service Blueprint|Service Blueprint]] é um refinamento específico: transforma métodos anteriores de representação em uma gramática voltada à prestação de serviços. O que não pode ser desmontado sobre uma bancada ganha uma superfície na qual pode ser discutido antes, durante e depois da execução.

Em 1984, Shostack leva a discussão para uma audiência gerencial mais ampla em *Designing Services That Deliver*, ajudando a popularizar a ideia de que processos de serviço poderiam ser projetados com a mesma intencionalidade atribuída a produtos.[^2] Nas décadas seguintes, o campo se institucionaliza por múltiplas vias. [[autores/Birgit Mager|Birgit Mager]] tem papel relevante na consolidação acadêmica do service design na Köln International School of Design a partir dos anos 1990, enquanto consultorias como [[empresas/Livework|Livework]] e [[empresas/Engine|Engine]] participam da profissionalização comercial posterior.[^3]

Não existe, portanto, um “inventor do design de serviços”. Há uma convergência entre pesquisa, marketing de serviços, operações, design de interação, gestão e práticas participativas que começa a ser reconhecida como campo próprio.

## Pesquisar, formular e representar não são a mesma operação

Uma das contribuições mais úteis da área é transformar investigação e representação em **artefatos intermediários**. Eles não são meros documentos de apresentação; mudam o tipo de coisa que a equipe consegue perceber e discutir.

A [[03 artefatos/Entrevista Qualitativa|Entrevista qualitativa]] reconstrói experiência, linguagem, contexto e mecanismos em profundidade. A [[03 artefatos/Pesquisa Quantitativa|Pesquisa quantitativa]] estabiliza categorias para estimar distribuição, magnitude e diferença entre grupos. O [[03 artefatos/Jobs to Be Done|Jobs to Be Done]] pode transformar histórias de mudança ou necessidades medidas em uma formulação sobre progresso. O [[03 artefatos/Customer Journey Map|Customer Journey Map]] reorganiza evidências no tempo da experiência.

Esses objetos não formam uma esteira obrigatória. Uma pesquisa quantitativa pode revelar um padrão que exige entrevista; um Journey Map pode expor um trecho baseado apenas em suposição; uma entrevista pode destruir o Job que a equipe considerava evidente. É por isso que [[01 conceitos/Ecologia de Artefatos|ecologia de artefatos]] é uma lente importante: cada representação recebe um estado de conhecimento e o transforma em outro que permite uma próxima operação.

A passagem do Journey Map para o Service Blueprint mostra isso com clareza. O primeiro pergunta como a experiência se transforma para quem a vive; o segundo pergunta que organização torna essa experiência possível. Um comprime reconstrução temporal. O outro comprime reconstrução organizacional.

O ganho de design não está em produzir mais mapas. Está em **reduzir a quantidade de conhecimento que precisa permanecer implícita na cabeça de quem “conhece a casa”**.

## Projetar coordenação também é projetar poder

Quando um serviço ganha diagrama, fluxo, papel ou regra, sua estrutura fica mais legível — mas também mais governável.

A [[03 artefatos/Matriz RACI|Matriz RACI]] torna responsabilidade explícita. O [[03 artefatos/Kanban|Kanban]] externaliza estado e capacidade do trabalho. O [[03 artefatos/Checklist|Checklist]] desloca parte da memória para uma sequência verificável. O [[03 artefatos/Número de Protocolo|Número de protocolo]] faz uma demanda sobreviver à troca de pessoas e setores. Um [[03 artefatos/Projeto Piloto|Projeto piloto]] cria uma versão limitada de uma mudança para que consequências apareçam antes da escala completa.

Cada artefato reduz alguma incerteza, mas também define o que conta como estado legítimo. Uma fila decide qual ordem parece justa. Um agendamento decide quem possui um intervalo futuro. Uma RACI decide quem pode ser cobrado e quem deve ser consultado. Um blueprint decide que elementos da organização merecem aparecer no mapa.

É aqui que design de serviços deixa de ser apenas “melhorar experiência”. Projetar coordenação significa mexer em **distribuição de acesso, responsabilidade e capacidade de contestação**. [[01 conceitos/Distribuicao de Escassez|Distribuição de escassez]], [[01 conceitos/Sincronizacao|sincronização]] e [[01 conceitos/Justificabilidade|justificabilidade]] ajudam a tornar essas dimensões visíveis.

A chamada “linha de visibilidade” do blueprint é quase uma metáfora do próprio campo. Acima dela está aquilo que o usuário encontra; abaixo, pessoas, sistemas e regras capazes de determinar a experiência sem aparecer diretamente. Tornar o backstage visível para a organização pode melhorar o serviço — mas não significa automaticamente torná-lo transparente para quem é afetado por ele.

## O campo termina onde o serviço deixa de caber numa disciplina

O design de serviços cruza [[00 tipos de design/Design de Interface|design de interface]] porque muitos serviços chegam ao usuário por telas; cruza [[00 tipos de design/Design de Produto|design de produto]] porque objetos participam de sua execução; cruza [[00 tipos de design/Design Grafico|design gráfico]] porque documentos, mapas e sinais coordenam comportamento; e cruza [[00 tipos de design/Design de IA|Design de IA]] quando sistemas probabilísticos começam a atender, classificar, recomendar ou executar trabalho dentro do serviço.

Essa porosidade não enfraquece a área. Ela ajuda a definir sua pergunta específica: **o que precisa estar coordenado ao longo do tempo para que uma capacidade apareça para alguém como experiência relativamente contínua?**

Por isso, artefatos como [[03 artefatos/Visão|Visão]], [[03 artefatos/Princípio|Princípio]], [[03 artefatos/Brief|Brief]], [[03 artefatos/Problema de Design|Problema de design]] e [[03 artefatos/Wicked Problem|Wicked Problem]] importam não como um kit metodológico fechado, mas como diferentes formas de estabilizar intenção e problema antes da ação. [[03 artefatos/Retrospectiva|Retrospectiva]] e [[03 artefatos/Workshop|Workshop]] mostram que até reflexão e participação podem ser projetadas como situações temporárias.

O campo talvez seja melhor entendido não pela pergunta “o que é um serviço?”, mas por outra: **como tornar projetável algo que só existe plenamente quando várias partes agem juntas?**

## Leituras no vault

Comece por [[03 artefatos/Service Blueprint|Service Blueprint]] e [[03 artefatos/Customer Journey Map|Customer Journey Map]] para observar duas representações complementares do serviço. [[03 artefatos/Entrevista Qualitativa|Entrevista qualitativa]], [[03 artefatos/Pesquisa Quantitativa|Pesquisa quantitativa]] e [[03 artefatos/Jobs to Be Done|Jobs to Be Done]] mostram como evidência se transforma em formulação.

Para coordenação operacional, [[03 artefatos/Fila|Fila]], [[03 artefatos/Agendamento|Agendamento]], [[03 artefatos/Kanban|Kanban]], [[03 artefatos/Matriz RACI|Matriz RACI]] e [[03 artefatos/Número de Protocolo|Número de protocolo]] revelam mecanismos diferentes. [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]], [[04 genealogias/Acesso e Disponibilidade|Acesso e disponibilidade]] e [[01 conceitos/Ecologia de Artefatos|Ecologia de artefatos]] conectam essas decisões além da disciplina.

## Referências

[^1]: Shostack, G. Lynn. “How to Design a Service”. *European Journal of Marketing*, 1982. O artigo formula explicitamente o service blueprinting e relaciona suas raízes a engenharia de métodos, PERT e design de sistemas. https://doi.org/10.1108/EUM0000000004799

[^2]: Shostack, G. Lynn. “Designing Services That Deliver”. *Harvard Business Review*, janeiro de 1984. Amplia a discussão gerencial sobre projeto deliberado de serviços e blueprinting. https://hbr.org/1984/01/designing-services-that-deliver

[^3]: Service Design Network. “Birgit Mager”. Perfil institucional que registra sua atuação na construção acadêmica do service design na Köln International School of Design e na formação posterior da rede internacional do campo. https://www.service-design-network.org/community/birgit-mager-10
