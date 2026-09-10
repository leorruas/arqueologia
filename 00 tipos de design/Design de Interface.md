---
title: "Design de interface"
type: "tipo-design"
status: "publicado"
tags:
  - design/tipo
  - arqueologia
---

# Design de interface

Uma interface existe quando alguém precisa agir sobre um sistema sem poder — ou sem precisar — compreender tudo o que acontece dentro dele. Um painel, um botão, um cursor, uma tela de login ou um prompt são maneiras diferentes de responder à mesma tensão: **como tornar uma capacidade operável sem expor toda a complexidade que a produz?**

Neste vault, design de interface interessa menos como história de telas e mais como história dessa mediação. Uma interface seleciona o que o sistema deixa perceber, que ações oferece, como responde e quais erros permite recuperar. Toda simplificação visual é, portanto, também uma decisão sobre conhecimento e controle.

## Operar uma máquina já foi lembrar sua linguagem

Antes das interfaces gráficas, interagir com computadores frequentemente exigia conhecer comandos, códigos, modos e sintaxes. Isso não significa que toda computação fosse uma linha de comando nem que interfaces visuais tenham surgido de uma única invenção. O ponto histórico é outro: durante décadas, parte importante do trabalho de interação dependia de o usuário adaptar seu comportamento à linguagem da máquina.

O trabalho de [[autores/Douglas Engelbart|Douglas Engelbart]] e sua equipe no SRI mostrou uma alternativa poderosa. Na demonstração do NLS em 1968, mouse, janelas, hipertexto, edição colaborativa e outras técnicas apresentavam o computador como meio interativo para ampliar trabalho intelectual, e não apenas como máquina que recebe lotes de instruções.[^1]

Mais tarde, sistemas desenvolvidos no [[empresas/Xerox PARC|Xerox PARC]], como o Xerox Star, ajudam a consolidar outra ideia: objetos digitais podem ser representados continuamente e manipulados por ações visíveis. A interface passa a se apoiar em analogias espaciais, seleção, cópia, apontamento e feedback imediato.

[[autores/Ben Shneiderman|Ben Shneiderman]] dá nome teórico a parte dessa mudança com **manipulação direta**. Sua formulação enfatiza representação contínua dos objetos de interesse, ações físicas ou comandos visíveis em lugar de sintaxe complexa e operações rápidas, incrementais e reversíveis.[^2] O ganho não é apenas facilidade. É uma mudança no lugar onde o conhecimento necessário para agir fica armazenado: menos exclusivamente na memória do usuário, mais na própria superfície.

O [[03 artefatos/Cursor|Cursor]] é quase a miniatura perfeita dessa passagem. Ele torna visível onde a próxima ação pode acontecer. Algo que poderia permanecer como estado interno da máquina ganha presença espacial compartilhada com o usuário.

Os [[03 artefatos/Atalhos de Teclado|atalhos de teclado]] mostram uma tensão complementar. Depois que uma ação já foi aprendida, o usuário pode preferir retirar da superfície parte da navegação visível e comprimir vários passos em uma sequência motora curta. A mesma interface que ajuda iniciantes por reconhecimento pode oferecer aos usuários experientes caminhos baseados em memória.

## A interface transforma estados invisíveis em sinais

Sistemas digitais estão cheios de estados que não possuem existência física evidente. Um arquivo pode estar salvo, selecionado, arquivado, sincronizado ou bloqueado sem mudar de matéria. A interface precisa dar forma perceptível a essas diferenças.

O [[03 artefatos/Botao Salvar|Botão salvar]] materializa a passagem entre trabalho temporário e persistência. [[03 artefatos/Undo|Undo]] transforma história recente em possibilidade de retorno. [[03 artefatos/Undo Send|Undo Send]] explicita que essa reversibilidade pode ser parcial: muitas vezes o sistema não recupera algo já enviado, apenas cria uma pequena janela antes que o envio se torne efetivo. [[03 artefatos/Login|Login]] estabelece uma operação de autenticação; a [[03 artefatos/Tela de Login|Tela de login]] transforma essa regra lógica em uma cena reconhecível de passagem. [[03 artefatos/Archive|Archive]] permite que algo deixe o primeiro plano sem deixar de existir.

Esses artefatos mostram que interface é também **design de estados legíveis**. O usuário não precisa conhecer bits, processos ou bancos de dados; precisa reconhecer sinais suficientes para decidir o próximo gesto.

É por isso que [[01 conceitos/Redução de Inferências|redução de inferências]] e [[01 conceitos/Affordance|affordance]] aparecem tanto aqui. Quando a superfície mostra o que pode ser feito e o que acabou de acontecer, parte da interpretação deixa de depender de adivinhação.

Mas essa tradução tem custo. Quanto mais uma interface esconde a infraestrutura, mais fácil pode ser confundir a representação com o sistema real. O ícone de arquivo não é o arquivo; a barra de progresso não é o processo; o botão “enviar” pode esconder filas, redes, permissões e estados intermediários.

## O gesto tornou o controle corporal novamente

Com dispositivos móveis e telas sensíveis ao toque, o repertório de interação se desloca outra vez. A mão deixa de operar apenas dispositivos intermediários e passa a tocar diretamente a superfície onde o conteúdo aparece.

[[03 artefatos/Pinch to Zoom|Pinch to Zoom]] transforma escala numa manipulação contínua entre dedos. [[03 artefatos/Slide to Unlock|Slide to Unlock]] converte mudança de estado em gesto deliberado. [[03 artefatos/Pull to Refresh|Pull to Refresh]] incorpora atualização ao próprio movimento da lista. [[03 artefatos/Infinite Scroll|Infinite Scroll]] remove o clique explícito de paginação e faz a continuidade parecer propriedade natural da superfície.

Esses gestos parecem “intuitivos” depois de aprendidos, mas isso não significa que sejam biologicamente óbvios. Eles se tornam previsíveis porque produtos, sistemas operacionais e imitação entre interfaces os estabilizam como convenções. A padronização produz familiaridade retrospectiva.

Aqui aparece uma tensão recorrente do campo: reduzir controles visíveis pode diminuir ruído e, ao mesmo tempo, aumentar dependência de conhecimento aprendido. Uma interface “limpa” pode exigir que o usuário saiba que puxar, pinçar ou deslizar têm significado oculto.

O design de interface administra, portanto, um equilíbrio entre **mostrar possibilidades e preservar espaço**, entre ensinar e pressupor.

## A entrada também é uma decisão de interface

A [[03 artefatos/Hero Section|hero section]] mostra que a interface começa antes do primeiro comando. A parte inicial de uma página organiza atenção, contexto e expectativa para que a pessoa reconheça onde chegou e o que pode fazer. Seu parentesco com telas de login e outros limiares é menos técnico do que semiótico: todos precisam transformar chegada em orientação suficiente para a próxima ação.

Isso aproxima interface de design gráfico. Hierarquia, escala e composição não servem apenas para embelezar uma superfície, mas para reduzir o custo de descobrir o que aquela superfície espera do usuário.

## A linguagem natural reabre o problema da interface

O [[03 artefatos/Prompt Conversacional|Prompt conversacional]] parece quebrar essa tradição porque substitui repertórios explícitos por uma caixa aberta. Em vez de escolher entre ações previamente representadas, a pessoa formula o que deseja em linguagem.

Isso pode comprimir enormemente o esforço de navegar por menus ou aprender comandos, mas recoloca uma dificuldade antiga sob nova forma: diante de uma superfície vazia, o usuário precisa imaginar o que o sistema é capaz de fazer. A interface visual fica mais simples enquanto o problema de formulação se torna maior.

Essa tensão não é nova na história da HCI. Já em 1997, um debate da CHI contrapôs agentes inteligentes e manipulação direta: de um lado, sistemas que assumem mais iniciativa; de outro, interfaces que priorizam previsibilidade, visibilidade e controle do usuário.[^3] As interfaces generativas tornam essa disputa novamente central.

É por isso que o campo hoje se mistura ao [[00 tipos de design/Design de IA|Design de IA]]. Quando uma resposta pode variar, interpretar intenção e agir por ferramentas, o designer deixa de controlar apenas caminhos e passa a projetar expectativa, correção, delegação e recuperação de erro.

A [[03 artefatos/LLM Wiki|LLM Wiki]] leva isso para além da conversa: a interface não serve apenas para produzir uma resposta, mas para acessar e governar uma memória persistente que pode ser reorganizada pelo próprio agente.

## Toda facilidade redistribui conhecimento e poder

A hipótese recorrente do design de interface é que uma pessoa não deveria precisar compreender toda a máquina para conseguir usá-la. Isso ampliou dramaticamente quem consegue operar sistemas complexos.

Mas esconder complexidade também redistribui poder. Quem projeta a interface decide que estados serão visíveis, quais ações parecerão possíveis, que alternativas serão omitidas e que erros poderão ser desfeitos. O [[03 artefatos/Botao Like|Botão Like]] reduz uma reação social a um sinal simples e quantificável. Um [[03 artefatos/App de tracking de gastos|App de tracking de gastos]] transforma comportamento financeiro em categorias e gráficos. Um [[03 artefatos/Banco de dados|Banco de dados]] pode permanecer completamente invisível enquanto determina o que a interface consegue recuperar. Um [[03 artefatos/Arquivo em nuvem|Arquivo em nuvem]] faz o armazenamento físico desaparecer da experiência cotidiana enquanto aumenta dependência de autenticação e infraestrutura remota.

Por isso, design de interface não é apenas “deixar fácil”. É decidir **qual parte do sistema precisa permanecer compreensível para que facilidade não se transforme em submissão opaca**.

Essa questão atravessa [[01 conceitos/Manipulacao Direta|manipulação direta]], [[01 conceitos/Compressao do Esforco|compressão do esforço]] e [[01 conceitos/Limiares|limiares]]. Ela também conecta interface a [[00 tipos de design/Design Grafico|design gráfico]], porque hierarquia e composição orientam percepção, e a [[00 tipos de design/Design de Servicos|design de serviços]], porque muitas interfaces são apenas a superfície visível de processos organizacionais muito maiores.

## Leituras no vault

Para observar a passagem de comando para ação visível, leia [[03 artefatos/Cursor|Cursor]], [[03 artefatos/Atalhos de Teclado|atalhos de teclado]], [[03 artefatos/Undo|Undo]], [[03 artefatos/Undo Send|Undo Send]] e [[03 artefatos/Botao Salvar|Botão salvar]]. Para interfaces gestuais, [[03 artefatos/Pinch to Zoom|Pinch to Zoom]], [[03 artefatos/Slide to Unlock|Slide to Unlock]] e [[03 artefatos/Pull to Refresh|Pull to Refresh]] mostram como convenções podem desaparecer dentro do corpo. [[03 artefatos/Hero Section|Hero section]] ajuda a observar a interface como limiar e enquadramento antes da ação.

[[03 artefatos/Prompt Conversacional|Prompt conversacional]] e [[05 percursos/Da Parede ao Interlocutor|Da parede ao interlocutor]] ajudam a enxergar a mudança atual de superfície operável para superfície que parece interlocutora. [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] e [[04 genealogias/Limiares e Delimitacao|Limiares e delimitação]] mostram duas famílias de problemas que atravessam a história da interface sem depender de uma tecnologia específica.

## Referências

[^1]: Computer History Museum. “1968 | Timeline of Computer History” e perfil de Douglas Engelbart. As fontes documentam a demonstração do NLS em 1968 e seu conjunto de técnicas de interação, colaboração e hipertexto. https://www.computerhistory.org/timeline/1968/ ; https://computerhistory.org/profile/doug-engelbart/

[^2]: Shneiderman, Ben. “Direct manipulation: A step beyond programming languages”. *ACM SIGSOC Bulletin*, 1981. A formulação descreve representação contínua, ações visíveis e operações rápidas e reversíveis como características da manipulação direta. https://doi.org/10.1145/800276.810991

[^3]: CHI 1997. “Intelligent Software Agents vs. User-Controlled Direct Manipulation: A Debate”. O painel entre Pattie Maes e Ben Shneiderman explicita a tensão entre delegação a agentes e interfaces orientadas a previsibilidade e controle. https://chi1997.acm.org/proceedings/panel/jrm.html
