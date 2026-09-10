---
title: "Distribuição de escassez"
type: "conceito"
status: "publicado"
origem: "adaptação"
grau: "debatido"
tags:
  - design/conceito
  - arqueologia
---

# Distribuição de escassez

Uma fila, um concurso, uma triagem médica e um leilão resolvem problemas muito diferentes. Mas todos respondem à mesma pergunta estrutural: **quando não há recurso suficiente para todos ao mesmo tempo, quem recebe primeiro?**

Chamamos de **distribuição de escassez** uma adaptação do projeto para analisar serviços como teorias de prioridade materializadas. Ela aproxima tradições já existentes sobre justiça distributiva e procedimental, alocação de recursos e design de serviços, mas lhes dá aqui uma função específica: investigar o critério incorporado no fluxo.

A interface não apenas movimenta pessoas ou dados; ela pode tornar algumas ordens de atendimento legítimas e outras inaceitáveis.

## Toda fila contém uma teoria de justiça

Na [[03 artefatos/Fila|Fila]], a regra mais comum é temporal: quem chegou antes deve ser atendido antes. A geometria dos corpos torna essa ordem visível e socialmente fiscalizável.

No [[03 artefatos/Agendamento|Agendamento]], a mesma escassez de capacidade é organizada antecipadamente em horários. O usuário troca espera física incerta por uma reserva temporal definida.

Outros sistemas usam critérios diferentes. Processos seletivos distribuem vagas por desempenho segundo regras definidas. Triagens médicas priorizam gravidade. Sorteios recorrem ao acaso quando candidatos são considerados equivalentes. Leilões usam disposição ou capacidade de pagamento.

Nenhum desses critérios é apenas operacional. Cada um contém uma resposta para “o que conta como prioridade justa neste contexto?”.

## Critérios diferentes produzem experiências morais diferentes

A versão anterior do conceito reunia sete critérios úteis, que permanecem como uma taxonomia de trabalho do projeto: ordem temporal; mérito ou desempenho; necessidade ou gravidade; aleatoriedade; capacidade de pagamento; relacionamento ou confiança; e preferência personalizada por dados.

A lista não pretende ser universal nem mutuamente exclusiva. Serviços reais frequentemente combinam critérios. Uma fila pode reservar prioridade legal por necessidade; uma universidade pode combinar prova, cotas e critérios socioeconômicos; uma plataforma pode ordenar conteúdo por histórico, pagamento e previsão de relevância ao mesmo tempo.

É justamente na combinação que a investigação fica interessante. O design precisa tornar compreensível não apenas **quem passou na frente**, mas por que isso foi considerado legítimo.

Por isso o conceito se conecta à [[02 variaveis/Justica|Justiça]] e ao custo de explicar decisões.

## Eficiência e legitimidade não são a mesma coisa

O mecanismo mais rápido nem sempre é o mais aceitável. Atender quem grita mais alto pode ser operacionalmente simples e socialmente desastroso. Uma triagem por gravidade pode quebrar a ordem de chegada e ainda ser percebida como mais justa porque existe uma justificativa diferente para prioridade.

Essa distinção evita reduzir design de serviços a otimização de vazão.

Um sistema de distribuição também precisa administrar percepção de equidade, previsibilidade e possibilidade de contestação. Quando a regra é invisível, mudanças de prioridade podem parecer favoritismo mesmo quando existe um critério legítimo.

O artefato de serviço é, portanto, simultaneamente logística e explicação.

## Algoritmos tornam a escassez menos visível, não menos política

Sistemas digitais podem esconder a distribuição atrás de ranking, recomendação e personalização. Um feed decide qual conteúdo recebe espaço escasso na atenção; uma plataforma decide quais motoristas recebem corridas; um marketplace decide quais produtos aparecem primeiro.

A ausência de uma fila visível não significa ausência de prioridade. Significa que o critério foi incorporado ao sistema.

Essa é uma extensão interpretativa importante do projeto: **todo sistema que ordena acesso sob escassez está fazendo uma escolha distributiva**, mesmo quando essa escolha aparece apenas como cálculo técnico.

O conceito não diz qual critério é correto. Ele obriga a tornar o critério investigável.

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Distribuição de escassez |
| **Origem** | Adaptação |
| **Grau de consolidação** | Debatido; apoia-se em campos consolidados, mas a lente comparativa específica é do projeto |
| **Formulação associada a** | Arqueologia do Design; justiça distributiva e procedimental, design de serviços e alocação de recursos |
| **Área principal** | Design de serviços / filosofia política / economia comportamental |
| **Distinção central** | Otimizar fluxo não é o mesmo que justificar quem recebe um recurso escasso |
| **O que ajuda a explicar** | Critérios de prioridade incorporados em serviços e interfaces |
| **O que não explica sozinho** | Qual critério distributivo é moralmente correto em cada contexto |
| **Artefatos-chave** | [[03 artefatos/Fila|Fila]], [[03 artefatos/Agendamento|Agendamento]] |
| **Variáveis relacionadas** | [[02 variaveis/Justica|Justiça]], [[02 variaveis/Custo Transacional|Custo transacional]], [[02 variaveis/Friccao|Fricção]] |
| **Genealogias relacionadas** | [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]] |

## Referências

A formulação usada aqui é uma adaptação do projeto. Sua consolidação deve dialogar com literatura sobre justiça distributiva e procedimental, teoria das filas, triagem, alocação e governança algorítmica sem apresentar qualquer uma dessas tradições como origem direta do termo.