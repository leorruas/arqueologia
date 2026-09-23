---
title: "Padrões enganosos"
type: "conceito"
status: "rascunho"
procedencia: "literatura"
tags:
  - design/interface
  - hci
  - arqueologia
---

# Padrões enganosos

**Padrões enganosos** (*deceptive patterns*, historicamente chamados *dark patterns*) são decisões de interface que manipulam, enganam ou constrangem pessoas em direção a escolhas que podem contrariar seus interesses ou uma decisão plenamente informada.

Harry Brignull cunhou o termo *dark patterns* em 2010 para nomear interfaces deliberadamente construídas para induzir usuários a fazer coisas que não pretendiam, como aderir a cobranças recorrentes. A literatura e a discussão regulatória posteriores ampliaram e refinaram o vocabulário; o próprio projeto de Brignull passou a preferir *deceptive patterns* como termo guarda-chuva para padrões enganosos, manipulativos ou coercivos.

A FTC descreve dark patterns como práticas digitais capazes de obscurecer, subverter ou prejudicar a autonomia e a tomada de decisão do consumidor. Entre os exemplos documentados aparecem caixas pré-marcadas, cancelamentos deliberadamente difíceis, informações materiais escondidas, taxas reveladas tardiamente, falsos contadores regressivos e escolhas de privacidade estruturadas para empurrar o usuário à opção mais favorável ao serviço.

## O que torna esse conceito arqueologicamente interessante

O conceito não descreve um componente visual específico. Ele descreve uma **relação entre decisão de projeto, arquitetura de escolha e interesses em conflito**.

Um botão grande não é enganoso por natureza. Um default não é enganoso por natureza. Remover um clique não é enganoso por natureza. O problema aparece quando a distribuição de visibilidade, esforço, informação ou continuidade orienta sistematicamente uma escolha em benefício de uma parte enquanto reduz a capacidade da outra de compreender, recusar, interromper ou reverter.

Por isso, esta nota não deve virar uma etiqueta automática para qualquer interface persuasiva. A investigação precisa perguntar o que a interface faz concretamente e quais alternativas oferece.

## Persuasão, manipulação e engano

Nem toda influência é um padrão enganoso. Todo design organiza possibilidades: destaca algumas ações, esconde outras, define defaults, sequências e custos.

A fronteira importante está em investigar mecanismos como:

- informação falsa ou materialmente incompleta;
- assimetria entre entrar e sair;
- escolha visualmente enviesada;
- default que transforma inação em consentimento;
- obstrução deliberada de recusa, cancelamento ou reversão;
- urgência ou escassez artificial;
- linguagem que constrange ou envergonha uma alternativa;
- continuidade automática que remove momentos de decisão.

A presença de um desses mecanismos não prova, sozinha, intenção manipulativa. A arqueologia deve separar efeito observável, evidência histórica sobre intenção e interpretação crítica.

## A distribuição da fricção

Uma hipótese particularmente fértil para o projeto é olhar para **onde a fricção foi colocada**.

Se aderir exige um clique e cancelar exige oito telas, senha, justificativa e sucessivas ofertas, o sistema não trata as duas decisões de maneira equivalente. A diferença pode ser medida antes mesmo de inferirmos a intenção de quem projetou.

Isso conecta padrões enganosos a [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]] e à variável [[02 variaveis/Friccao|Fricção]]. A pergunta deixa de ser apenas “há muita fricção?” e passa a ser:

> **quem se beneficia da distribuição de fricção desta interface?**

Essa assimetria pode aparecer em dinheiro, dados, atenção, permanência numa assinatura ou dificuldade de interromper uma atividade.

## Quando o sistema aprende qual manipulação funciona

Interfaces digitais acrescentam uma capacidade histórica importante às técnicas de persuasão anteriores: diferentes versões de uma escolha podem ser medidas e comparadas em grande escala.

A FTC observa que comércio digital, coleta de dados e técnicas analíticas permitem experimentar padrões e identificar quais são mais eficazes. Em casos regulatórios, A/B testing também aparece associado à otimização de interfaces capazes de induzir determinadas ações.

Isso cria uma pergunta específica para a Arqueologia do Design:

> **o que muda quando vieses e fricções deixam de ser apenas intuídos pelo projetista e podem ser selecionados experimentalmente por desempenho?**

A questão não torna A/B testing manipulativo por definição. O mesmo método pode melhorar compreensão, acessibilidade ou conclusão legítima de tarefas. O interesse está na função objetivo: **o que está sendo otimizado e à custa de qual capacidade do usuário?**

## Infinite Scroll: caso-limite

O [[03 artefatos/Infinite Scroll|Infinite Scroll]] é especialmente útil porque impede uma taxonomia moral simples.

Seu problema original era legítimo: eliminar a interrupção da paginação quando a pessoa claramente queria continuar explorando resultados. O padrão reduz [[02 variaveis/Friccao|Fricção]] e [[02 variaveis/Atrito Decisorio|Atrito Decisório]].

Quando combinado com feeds continuamente ranqueados, porém, a mesma decisão remove um *stopping cue*: o ponto em que continuar exigia uma nova ação explícita. A conveniência pode então participar de uma ecologia orientada a prolongar atenção.

Isso não permite concluir que todo Infinite Scroll seja um padrão enganoso. Permite uma pergunta mais útil: **quando a remoção de fricção deixa de servir à intenção atual do usuário e começa a dificultar que ele perceba ou execute a decisão de parar?**

## Artefatos a escavar

Este conceito deve ser testado em artefatos concretos antes de gerar uma genealogia própria. Candidatos fortes:

- checkbox pré-marcado;
- banner de cookies com recusa assimétrica;
- fluxo de cancelamento de assinatura;
- confirmshaming;
- contador regressivo e escassez artificial;
- botão × de fechar anúncio;
- autoplay;
- [[03 artefatos/Infinite Scroll|Infinite Scroll]];
- [[03 artefatos/Badge de notificacao|Badge de notificação]];
- [[03 artefatos/Botao Like|Botão Like]].

Os três últimos são deliberadamente casos ambíguos. Um artefato pode participar de um sistema manipulativo sem ser manipulativo em toda implementação.

## Perguntas arqueológicas

- Quem se beneficia da distribuição de fricção?
- Qual escolha é tratada como default?
- O que acontece se o usuário não fizer nada?
- Entrar e sair possuem custos equivalentes?
- A pessoa consegue prever as consequências antes de agir?
- O sistema preserva pontos naturais de pausa e recusa?
- Uma métrica de negócio está sendo otimizada contra uma capacidade humana?
- A interface informa, persuade, manipula, engana ou coage — e que evidência permite distinguir esses regimes?

## Procedência

**Literatura / tradição estabelecida.** O termo *dark patterns* foi cunhado por Harry Brignull em 2010; pesquisas posteriores em HCI, direito e proteção do consumidor desenvolveram taxonomias e definições relacionadas. A FTC publicou em 2022 o relatório *Bringing Dark Patterns to Light* sobre práticas que podem obscurecer, subverter ou prejudicar escolhas e decisões de consumidores.

## Referências

1. Harry Brignull / Deceptive Patterns. Histórico do termo *dark patterns* e adoção posterior de *deceptive patterns*.
2. Federal Trade Commission. *Bringing Dark Patterns to Light*. Staff Report, setembro de 2022.
