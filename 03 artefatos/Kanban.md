---
title: "Kanban"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Kanban

Hoje, a palavra **Kanban** costuma evocar um quadro dividido em colunas com cartões que avançam de “a fazer” para “feito”. Historicamente, porém, o artefato começa em outro lugar. Na Toyota, *kanban* era um sinal de informação que dizia quais peças eram necessárias, em qual quantidade e em que momento. Seu poder estava menos em mostrar um projeto inteiro do que em impedir que produção e transporte acontecessem sem uma necessidade concreta a puxá-los.

## O problema de produzir antes da necessidade

Em uma fábrica, excesso também é problema. Quando processos anteriores produzem peças independentemente do consumo dos processos seguintes, estoques crescem, ocupam espaço, escondem gargalos e imobilizam recursos.

A história oficial da Toyota descreve justamente esse cenário. Antes do chamado “supermarket method”, peças podiam ser enviadas do processo anterior ao seguinte mesmo quando ainda não eram necessárias. O resultado era acumulação em áreas que deveriam servir à montagem.

A solução inverte parte da lógica. O processo seguinte passa a funcionar como cliente do processo anterior: retira aquilo de que precisa, e essa retirada gera informação para reposição.

O kanban entra como suporte dessa informação.

## Supermercado, cartão e uma história que varia até dentro da Toyota

Taiichi Ohno é a figura central na implementação do sistema dentro da Toyota, mas mesmo as narrativas corporativas sobre a inspiração do “supermercado” variam. Uma história institucional da Toyota Brasil relata que Ohno observou supermercados durante uma viagem aos Estados Unidos em 1953. Já a história global de 75 anos da empresa descreve a introdução do método em 1954 a partir de um artigo de publicação industrial sobre o uso de uma lógica semelhante numa fábrica da Lockheed.

A discrepância é valiosa para esta arqueologia porque recomenda cautela diante da história elegante do inventor que vê uma prateleira e tem uma epifania. O ponto mais sólido é que, no início dos anos 1950, a Toyota desenvolveu uma lógica de reposição puxada pelo consumo e posteriormente incorporou **kanban**, cartões ou sinais com informações sobre peça e quantidade, para controlá-la.

A própria Toyota registra que o sistema foi testado inicialmente em processos da planta Honsha, adotado em todas as plantas em 1963 e expandido para retirada de peças de fornecedores em 1965.

Aqui conseguimos distinguir as camadas: Taiichi Ohno é central no desenvolvimento e implantação do Sistema Toyota de Produção; o “supermarket method” antecede a plena expansão do kanban; cartões de informação refinam o mecanismo; a padronização ocorre quando a lógica se estende pela produção e pela cadeia de fornecedores.

## O cartão é pequeno porque o sistema é grande

Um kanban físico contém pouca informação, mas sua posição no sistema muda o que deve acontecer. Ele pode indicar que determinada quantidade foi consumida e precisa ser reposta. Em vez de depender de uma ordem central detalhando continuamente toda a produção, parte da coordenação emerge do próprio fluxo.

Isso reduz a necessidade de supervisão direta em cada microdecisão, preservando regras fortes sobre quantidade, sequência e capacidade. A nota anterior dizia que Kanban “enfraquece comando e controle centralizado”, e essa interpretação é útil se não for confundida com ausência de controle.

O sistema não elimina disciplina. Ele **redistribui o lugar onde a disciplina está inscrita**: menos em ordens improvisadas de um supervisor e mais em regras visuais e operacionais que conectam processos.

Esse é um parentesco forte com [[01 conceitos/Memoria Distribuida|Memória Distribuída]] e [[01 conceitos/Sincronizacao|Sincronização]]. O estado do fluxo deixa de existir apenas na cabeça de alguém. Sinais materiais carregam informação entre etapas.

## Visualizar não é a origem inteira do Kanban

A versão anterior definia Kanban principalmente como “gestão visual que espacializa fluxos e limita WIP”. Isso descreve muito bem aplicações contemporâneas em trabalho do conhecimento, mas retroprojeta sobre a Toyota a aparência dos quadros digitais atuais.

O kanban original é antes de tudo um **mecanismo de sinalização dentro de produção puxada**. Limitar inventário e trabalho em processo é consequência essencial do sistema, mas o quadro de colunas com cartões movidos manualmente é uma forma posterior e específica de adaptação.

No desenvolvimento de software e no trabalho do conhecimento, autores como David J. Anderson transformaram princípios de sistemas puxados e limitação de WIP em um método de gestão visual aplicado a tarefas imateriais. Trello, Jira e outros produtos depois transformaram esse vocabulário em interface digital.

Essa passagem é historicamente importante porque o objeto muda de significado. Na fábrica, um cartão pode representar necessidade de peça. No software, um cartão costuma representar **trabalho**.

O sinal de reposição transforma-se em representação da tarefa.

## Quando trabalho invisível ganha posição

Essa adaptação explica por que o quadro Kanban funciona tão bem como artefato de coordenação de equipes. Uma tarefa abstrata passa a ter forma, posição e estado. Se está em “Em andamento”, ocupa espaço visual. Se há dez cartões na mesma coluna, a sobrecarga deixa de ser apenas sensação individual e aparece como propriedade do sistema.

Essa visibilidade pode aumentar autonomia. Pessoas conseguem perceber gargalos e escolher ações sem esperar uma ordem verbal a cada momento.

A hipótese comportamental da nota anterior continua forte: **equipes podem regular melhor o próprio fluxo quando conseguem enxergar o estado coletivo do trabalho**.

O parentesco com [[03 artefatos/Quadro Branco|Quadro branco]] é material e funcional. Ambos transformam uma superfície em memória compartilhada. O Kanban acrescenta uma gramática de estados e movimentação. O quadro deixa de ser apenas lugar para pensar e passa a ser também modelo operacional do processo.

## O limite como escolha de design

Uma das contribuições mais importantes das adaptações Kanban para trabalho do conhecimento é a explicitação de limites de trabalho em progresso. O sistema diz que iniciar mais coisas pode piorar o fluxo quando capacidade já está ocupada.

Isso parece contraintuitivo em culturas que tratam começar atividade como sinal de produtividade. Limitar WIP força outra pergunta: **o que precisa terminar antes que algo novo possa começar?**

O limite funciona como [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]]. Impede uma ação localmente fácil, puxar mais uma tarefa, para proteger uma propriedade global, a capacidade de concluir o que já foi iniciado.

A nota anterior dizia que “limitar trabalho em progresso acelera a entrega global”. Como princípio de fluxo isso tem base, mas o efeito depende de contexto, capacidade e desenho do sistema. Não é uma lei automática produzida por qualquer quadro com colunas.

## De autonomia a vigilância

O mesmo quadro que torna gargalos visíveis para a equipe pode tornar indivíduos visíveis para a gestão. Quem está com qual cartão? Há quanto tempo? Quantos itens concluiu? Quanto tempo uma etapa levou?

A nota anterior já capturava essa ambiguidade: Kanban pode ser infraestrutura de autorregulação ou painel de microvigilância.

A diferença depende de **qual entidade o sistema torna observável**. Se o foco está no fluxo e nos gargalos coletivos, a visualização pode ajudar a equipe a discutir capacidade. Se métricas são usadas para comparar desempenho individual de forma simplista, a mesma interface muda de função política.

O artefato não possui autonomia embutida. Ele oferece visibilidade. Quem interpreta essa visibilidade decide se ela será usada para aprendizagem, coordenação ou controle.

## Quando o quadro vira burocracia

Há também um custo clássico: o mapa pode se separar do território. Cartões ficam desatualizados, tarefas reais acontecem fora do quadro e equipes passam a gastar energia mantendo uma representação que não ajuda mais ninguém.

Nesse momento, mover cartões deixa de coordenar trabalho e vira trabalho adicional. A interface continua visualmente organizada enquanto o processo real escapa dela.

Essa é uma lição de design de serviços importante. Um artefato de coordenação precisa ter custo de atualização proporcional ao valor que devolve. Quanto maior a distância entre trabalho real e representação, maior a chance de a manutenção da ferramenta tornar-se ritual.

## Referências

1. Toyota Motor Corporation. *75 Years of Toyota*, seção “Supermarket Method”. História da introdução do método em 1954 e evolução para o Kanban System.
2. Toyota Motor Corporation. *75 Years of Toyota*, seção “Development and Deployment of the Toyota Production System”. Expansão do kanban para todas as plantas em 1963 e para fornecedores em 1965.
3. Toyota do Brasil. “Sistema Toyota de Produção”. Narrativa institucional que associa a inspiração de Ohno a supermercados observados nos Estados Unidos em 1953; mantida como versão divergente da história global da própria Toyota.
4. Taiichi Ohno, *Toyota Production System: Beyond Large-Scale Production*.
5. David J. Anderson. *Kanban: Successful Evolutionary Change for Your Technology Business*. Referência para a adaptação a trabalho do conhecimento.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Kanban |
| **Período** | Desenvolvimento no Sistema Toyota de Produção durante os anos 1950; expansão industrial nos anos 1960; adaptações posteriores para trabalho do conhecimento |
| **Autoria** | Taiichi Ohno e equipes da Toyota; posteriormente David J. Anderson e comunidades de software e gestão |
| **Produto ou contexto** | Sistema Toyota de Produção; posteriormente quadros físicos e digitais de gestão de trabalho Categoria: Coordenação / sinalização / gestão visual |
| **Tipo(s) de design** | Relação disciplinar ainda não classificada. |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Coordenar produção e reposição sem produzir ou transportar continuamente itens que o processo seguinte ainda não precisava |
| **Mundo antes** | Produção podia empurrar peças adiante e acumular estoque independentemente do consumo real do processo seguinte |
| **Invenção** | Desenvolvimento distribuído dentro do TPS; Ohno é figura central, mas a narrativa exata sobre inspiração e primeira formulação possui versões corporativas divergentes |
| **Refinamento** | Uso de cartões de informação para sinalizar item, quantidade e necessidade dentro do sistema puxado |
| **Popularização** | Expansão do TPS para plantas e fornecedores e posterior difusão internacional da produção enxuta |
| **Padronização** | Na Toyota, adoção em todas as plantas em 1963 e fornecedores a partir de 1965; posteriormente adaptação ampla do termo Kanban em gestão e software |
| **Hipótese de design** | Kanban torna o sistema parcialmente capaz de coordenar a si mesmo ao transformar necessidade e estado em sinais visíveis que circulam com o trabalho Hipótese sobre o comportamento humano: Pessoas conseguem coordenar ações locais com menor dependência de ordens centrais quando o estado e as necessidades do sistema estão visíveis |
| **Comportamento aproveitado** | Leitura de sinais visuais, reconhecimento de estados e resposta local a mudanças de disponibilidade |
| **Comportamento produzido** | Atualizar e mover representações do trabalho como parte do próprio processo de coordenação |
| **Relação de poder** | Pode distribuir capacidade de decisão para equipes ou ampliar vigilância quando a visibilidade do fluxo é convertida em monitoramento individual |
| **Consequências inesperadas** | Um mecanismo industrial de produção puxada tornou-se uma das interfaces mais reconhecíveis da gestão de trabalho digital Capacidade ampliada: Visibilidade de fluxo, identificação de gargalos, reposição puxada pela necessidade e autorregulação coletiva Capacidade reduzida ou deslocada: Menor liberdade para iniciar trabalho além dos limites do sistema; menor dependência de supervisão verbal contínua Custo invisível: Manutenção de quadros desatualizados, simplificação de tarefas complexas e possibilidade de microvigilância Registros adicionais preservados da ficha anterior: o que simplifica: Estado, prioridade, fluxo e capacidade tornam-se parcialmente visíveis numa representação comum; o que esconde: Complexidade interna, qualidade e esforço de tarefas podem permanecer invisíveis atrás de cartões aparentemente equivalentes |
| **Destino ou transformação posterior** | Continua como mecanismo do TPS e foi reinterpretado globalmente como método e interface de gestão de trabalho Legado: Sistemas puxados, quadros Kanban de software, Trello, Jira e outras visualizações de fluxo |
| **Conceitos relacionados** | [[01 conceitos/Sincronizacao|Sincronização]], [[01 conceitos/Memoria Distribuida|Memória Distribuída]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]], [[01 conceitos/Autodeterminação|Autodeterminação]] |
| **Variáveis relacionadas** | [[02 variaveis/Previsibilidade Visual|Previsibilidade Visual]], [[02 variaveis/Custo Transacional|Custo Transacional]], [[02 variaveis/Friccao|Fricção]] |
| **Genealogia** | [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]], [[04 genealogias/Compressao do Esforco|Compressão do esforço]] Família de ideias: Artefatos de coordenação e visualização do fluxo |
| **Percurso(s)** | [[05 percursos/Da Espera a Sincronizacao|Da Espera a Sincronizacao]] |
| **Parentes** | [[03 artefatos/Quadro Branco|Quadro branco]], backlog, Scrum board, painel de produção |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Tornar limites e estados visíveis permite distribuir decisões sem eliminar regras Por que funcionou: Converte necessidade e estado em sinais que podem circular junto ao processo, reduzindo coordenação abstrata e excesso de trabalho iniciado |
| **Questão em aberto** | Em que momento tornar o trabalho visível para a equipe se transforma em tornar o trabalhador visível para controle externo? |
