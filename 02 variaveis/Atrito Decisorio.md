---
title: "Atrito decisório"
type: "variavel"
status: "publicado"
eixo: "baixo ↔ alto custo para formular ou confirmar uma escolha"
tags:
  - design/variavel
  - arqueologia
---

# Atrito decisório

Algumas interfaces pedem uma escolha explícita a cada passo. Outras continuam quase sozinhas até que o usuário decida interrompê-las. **Atrito decisório** mede o esforço específico necessário para **formular, comparar ou confirmar uma escolha** antes de avançar.

**Eixo:** baixo ↔ alto custo para formular ou confirmar uma escolha.

Ele não é sinônimo de fricção geral. Digitar uma senha pode ser trabalhoso sem envolver uma decisão complexa. Escolher entre vinte planos pode exigir pouco esforço físico e ainda ter alto atrito decisório.

## Decidir também é uma etapa de interface

[[03 artefatos/Infinite Scroll|Infinite Scroll]] é um caso útil porque remove uma decisão que antes aparecia materialmente na paginação: “continuar para a próxima página?”. A rolagem ainda é uma ação, mas a continuidade deixa de exigir confirmação discreta.

O [[03 artefatos/Prompt Conversacional|Prompt conversacional]] faz quase o movimento contrário. Uma caixa vazia oferece enorme liberdade, mas transfere ao usuário decisões que menus normalmente pré-estruturam: o que pedir, como delimitar, quais restrições explicitar e quando considerar a resposta suficiente.

Já [[03 artefatos/Archive|Archive]] pode reduzir o atrito de uma escolha organizacional ao substituir decisões detalhadas de categorização por uma operação mais genérica: retirar do primeiro plano sem apagar.

Esses exemplos mostram que design não elimina simplesmente decisões. Ele pode **pré-resolvê-las, adiá-las, agrupá-las ou devolvê-las ao usuário**.

## Confirmação pode ser fricção protetora

[[03 artefatos/Slide to Unlock|Slide to Unlock]] introduzia um gesto deliberado entre tocar o aparelho e entrar no estado de uso. O ganho não estava em tornar a escolha intelectualmente difícil, mas em elevar o custo de confirmação o bastante para separar intenção de acionamento acidental.

[[03 artefatos/Undo Send|Undo Send]] também cria uma janela entre intenção inicial e irreversibilidade. Dependendo da implementação, essa janela pode oferecer uma nova oportunidade de decisão sem exigir que todo envio passe por uma caixa de confirmação.

Isso aproxima o eixo de [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]]: um pequeno aumento no custo decisório pode proteger contra ações involuntárias ou criar espaço para revisão.

Mas confirmação demais também produz fadiga. Quando todo passo pede “tem certeza?”, a própria repetição pode ensinar o usuário a confirmar automaticamente.

## Baixo atrito pode significar decisão terceirizada

Quando uma interface parece “decidir por nós”, o custo não desaparece necessariamente; parte dele migra para regras, padrões, recomendações ou automações.

Isso pode ser benéfico. Defaults bem escolhidos reduzem escolhas triviais. Mas também concentram poder no sistema que define o padrão.

Por isso, o eixo deve ser lido junto de [[02 variaveis/Legitimidade Decisoria|Legitimidade decisória]]. Quanto mais decisões são incorporadas à infraestrutura, mais relevante se torna entender quem definiu os critérios e como podem ser alterados.

## Como observar

Alguns sinais: número de escolhas explícitas, quantidade de alternativas simultâneas, necessidade de comparar atributos, frequência de confirmações, tempo gasto antes de avançar, abandono em pontos de decisão e necessidade de reformular a intenção.

Nenhum indicador sozinho resolve a análise. Um fluxo com poucas escolhas pode ser coercitivo; um fluxo com muitas escolhas pode ser apropriado quando as diferenças importam.

A pergunta central é: **que decisão o usuário ainda precisa tomar aqui, e quais decisões o design já tomou por ele?**

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Atrito decisório |
| **Eixo** | Baixo ↔ alto custo para formular ou confirmar uma escolha |
| **Definição operacional** | Esforço necessário para produzir, comparar ou confirmar uma decisão antes de avançar |
| **Como observar** | Número e complexidade de escolhas, confirmações, tempo decisório, abandono e necessidade de formular restrições |
| **O que não mede sozinho** | Esforço físico total, justiça da decisão ou qualidade das alternativas |
| **Trade-offs principais** | Menos decisões explícitas pode aumentar fluidez e também transferir poder para defaults ou automação |
| **Artefatos-chave** | [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Prompt Conversacional|Prompt conversacional]], [[03 artefatos/Archive|Archive]], [[03 artefatos/Slide to Unlock|Slide to Unlock]] |
| **Conceitos relacionados** | [[01 conceitos/Paradoxo da Escolha|Paradoxo da escolha]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]] |

## Referências

Esta é uma operacionalização do projeto. Ela dialoga com literatura sobre escolha, carga cognitiva e defaults, mas não deve ser tratada como escala psicológica validada.