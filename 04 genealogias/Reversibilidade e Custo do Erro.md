---
title: "Reversibilidade e Custo do Erro"
type: "genealogia"
status: "publicado"
tags:
  - design/genealogia
  - arqueologia
---

# Reversibilidade e Custo do Erro

Um artefato pode tornar uma ação mais fácil sem torná-la mais segura. Outra família de soluções trabalha sobre um problema diferente: **o que acontece quando a pessoa muda de ideia, se engana ou ainda não sabe se a decisão é boa?**

## A ideia recorrente

Reversibilidade reduz o preço da experimentação. Quando uma ação pode ser desfeita, testada em escala pequena ou mantida provisória por alguns segundos, o sistema permite aprender antes de pagar o custo completo do erro.

## Constelação de artefatos

- [[03 artefatos/Undo|Undo]]: parentesco **funcional**. Cria uma operação explícita para retornar a um estado anterior.
- [[03 artefatos/Undo Send|Undo Send]]: parentesco **temporal**. Insere um pequeno intervalo entre intenção e irreversibilidade.
- [[03 artefatos/Botao Salvar|Botão Salvar]]: parentesco **funcional**. Historicamente ajuda a criar estados persistentes aos quais o trabalho pode retornar, embora salvar não seja por si só equivalente a desfazer.
- [[03 artefatos/Quadro Branco|Quadro Branco]]: parentesco **material e comportamental**. Torna escrever e apagar barato, favorecendo pensamento provisório.
- [[03 artefatos/Projeto Piloto|Projeto Piloto]]: parentesco **organizacional**. Reduz escala e compromisso para que uma mudança possa ser testada antes de institucionalização ampla.

## O efeito sobre criatividade

Uma hipótese importante é que reversibilidade muda comportamento antes mesmo de qualquer erro acontecer. Se experimentar é barato, as pessoas podem explorar mais alternativas. O valor do Undo, portanto, pode estar tanto em corrigir falhas quanto em alterar a disposição para agir.

## A falsa segurança

Reversibilidade também pode ser apenas aparente. Um “desfazer envio” normalmente funciona como atraso de envio, não como recuperação de uma mensagem já entregue. A arqueologia precisa investigar qual parte da ação é realmente reversível e por quanto tempo.

## Conceitos relacionados

- [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]]
- [[01 conceitos/Manipulacao Direta|Manipulação Direta]]

## Variáveis relacionadas

- [[02 variaveis/Reversibilidade|Reversibilidade]]
- [[02 variaveis/Custo do Erro|Custo do Erro]]
- [[02 variaveis/Friccao|Fricção]]

## Hipótese em aberto

Talvez sistemas criativos sejam menos definidos pela quantidade de ferramentas disponíveis do que pelo custo de tentar alguma coisa e voltar atrás. Nesse sentido, reversibilidade seria uma infraestrutura de exploração.
