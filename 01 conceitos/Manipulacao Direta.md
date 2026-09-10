---
title: "Manipulação direta"
type: "conceito"
status: "publicado"
origem: "literatura"
grau: "consolidado"
tags:
  - design/conceito
  - arqueologia
---

# Manipulação direta

Mover uma imagem com o dedo parece mais “direto” do que digitar um comando dizendo ao computador para movê-la. Mas a diferença não está simplesmente em usar as mãos nem em imitar objetos físicos.

Ben Shneiderman formulou **manipulação direta** no início dos anos 1980 para descrever sistemas em que os objetos de interesse permanecem visíveis e podem ser alterados por ações rápidas, incrementais e reversíveis, substituindo parte da sintaxe abstrata de comandos por operações sobre suas representações.[^1]

O conceito ajuda a perceber uma mudança importante na relação com o computador: em vez de descrever para a máquina o que ela deve fazer e depois observar o resultado, o usuário acompanha a transformação enquanto age.

## Direto não significa sem mediação

Nenhuma interface digital é literalmente direta. Um dedo sobre vidro continua atravessando sensores, software, modelos gráficos e convenções.

A palavra descreve uma experiência de menor distância entre ação e efeito. Quando uma janela acompanha o cursor, quando um objeto muda de tamanho durante o gesto ou quando um desenho reaparece imediatamente depois de um Undo, o sistema mantém a relação entre aquilo que a pessoa faz e aquilo que vê.

Shneiderman destaca justamente três propriedades: representação contínua do objeto de interesse; ações físicas ou controles nomeados em vez de sintaxe complexa; e operações rápidas, incrementais e reversíveis cujo efeito aparece imediatamente.[^1]

Essa última parte aproxima manipulação direta de [[03 artefatos/Undo|Undo]]. A reversibilidade permite explorar sem precisar planejar toda sequência antecipadamente.

## Pinçar não é “natural” só porque usa dedos

[[03 artefatos/Pinch to Zoom|Pinch to Zoom]], [[03 artefatos/Slide to Unlock|Slide to Unlock]] e [[03 artefatos/Pull to Refresh|Pull to Refresh]] são bons casos contemporâneos, mas precisam ser descritos com cuidado.

Pinch to Zoom mantém resposta visual contínua ao movimento de dois dedos. Slide to Unlock faz o controle acompanhar o gesto ao longo de um caminho. Pull to Refresh deforma e desloca a própria lista antes de acionar atualização.

Nada disso significa que os gestos eram inevitavelmente compreensíveis antes de serem aprendidos. O conceito de [[01 conceitos/Affordance|Affordance]] ajuda a separar possibilidade de ação, signifiers e convenção. Uma interação pode ser diretamente manipulável depois de descoberta e ainda assim ter baixa descobribilidade inicial.

Manipulação direta, portanto, não é sinônimo de “intuitivo”.

## Ver o efeito muda o custo do erro

Quando pequenas ações produzem pequenos efeitos visíveis, o usuário consegue ajustar o comportamento durante a própria execução. Isso reduz a necessidade de imaginar mentalmente um estado futuro distante antes de agir.

Essa relação explica a importância de feedback rápido e reversibilidade em ferramentas criativas. Arrastar, redimensionar, desenhar e experimentar tornam-se processos iterativos: agir, observar, corrigir.

O ganho pode aparecer em [[02 variaveis/Custo Transacional|Custo transacional]] e [[02 variaveis/Atrito Decisorio|Atrito decisório]], mas não porque todos os menus desapareceram. Muitas interfaces combinam manipulação direta com menus, atalhos e comandos textuais.

A força do conceito está na coexistência dessas camadas.

## A transparência também pode ser uma ilusão útil

Shneiderman descrevia a sensação de o computador “desaparecer” para que a pessoa se concentrasse na tarefa.[^1] Mas essa transparência merece leitura arqueológica.

Quando a infraestrutura some da experiência, regras complexas continuam operando. Arrastar um arquivo para uma lixeira parece simples porque o sistema esconde cópia, permissões, armazenamento e recuperação. A manipulação parece concreta, embora o objeto seja uma representação de processos abstratos.

Isso não é defeito. É justamente parte do design. Mas mostra que uma interface “direta” é, na verdade, uma mediação tão bem organizada que parte da mediação deixa de exigir atenção.

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Manipulação direta |
| **Origem** | Literatura |
| **Grau de consolidação** | Consolidado |
| **Formulação associada a** | Ben Shneiderman, início dos anos 1980 |
| **Área principal** | Interação humano-computador |
| **Distinção central** | Agir sobre representações visíveis com feedback incremental não é o mesmo que instruir por sintaxe abstrata |
| **O que ajuda a explicar** | Valor de visibilidade, feedback rápido, incrementalidade e reversibilidade em interfaces |
| **O que não explica sozinho** | Descobribilidade, naturalidade ou ausência de mediação técnica |
| **Artefatos-chave** | [[03 artefatos/Pinch to Zoom|Pinch to Zoom]], [[03 artefatos/Slide to Unlock|Slide to Unlock]], [[03 artefatos/Pull to Refresh|Pull to Refresh]], [[03 artefatos/Undo|Undo]] |
| **Variáveis relacionadas** | [[02 variaveis/Custo Transacional|Custo transacional]], [[02 variaveis/Atrito Decisorio|Atrito decisório]], [[02 variaveis/Reversibilidade|Reversibilidade]] |

## Referências

[^1]: Shneiderman, Ben. “Direct Manipulation: A Step Beyond Programming Languages”. *IEEE Computer*, 1983. O artigo caracteriza manipulação direta pela visibilidade dos objetos de interesse, ações rápidas, incrementais e reversíveis e substituição de sintaxe complexa por manipulação das representações.