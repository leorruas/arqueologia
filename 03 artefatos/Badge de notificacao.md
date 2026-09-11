---
title: "Badge de notificação"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
  - design/interface
---

# Badge de notificação

Uma notificação pode desaparecer da tela em segundos. O badge resolve um problema diferente: **como fazer a pendência sobreviver depois que o alerta acabou?**

A pequena bolha sobre o ícone de um aplicativo parece apenas um contador. Mas sua operação de design é mais profunda. Ela transporta para fora do aplicativo um estado interno — há algo não visto, não lido ou não resolvido — e o torna visível toda vez que a pessoa encontra o ícone.

O artefato não entrega a mensagem. Ele preserva a existência de uma dívida de atenção.

## O aplicativo começou a carregar um estado para fora de si

Contadores de itens não lidos existem em diferentes sistemas e não há base suficiente para atribuir o badge de notificação a um inventor único. Em ambientes de desktop, a própria documentação da Apple usa o Mail como exemplo clássico: um círculo vermelho com número aparece sobre o ícone no Dock para indicar quantas mensagens ainda estão não lidas.[^1]

O passo importante não é apenas contar. É **acoplar a contagem ao ícone de entrada do aplicativo**. Antes de abrir o Mail, a pessoa já recebe informação sobre o estado que encontrará lá dentro. O ícone deixa de significar apenas “este aplicativo existe” e passa a significar também “este aplicativo tem algo esperando por você”.

Isso aproxima o badge de [[01 conceitos/Redução de Inferências|redução de inferências]]. Sem ele, descobrir se existe novidade exige abrir o sistema, navegar e verificar. Com ele, parte dessa pergunta é respondida na superfície anterior à ação.

Mas a redução de esforço vem com uma transferência curiosa: o sistema passa a poder lembrar a pessoa continuamente de algo que ela ainda não decidiu tratar.

## No celular, a pendência passa a morar na tela inicial

A popularização dos smartphones deu ao badge uma posição muito mais persistente. Em março de 2009, ao apresentar o iPhone OS 3.0, a Apple anunciou que o Apple Push Notification service permitiria aos desenvolvedores alertar usuários com som, texto ou um **badge**.[^2] A notificação móvel deixava então de ser apenas um alerta transitório: o próprio sistema operacional podia atualizar um pequeno estado sobre o ícone do aplicativo, inclusive quando ele não estivesse aberto.

A documentação de notificações da Apple ainda descreve o badge como um pequeno oval preenchido, geralmente numérico, usado para indicar notificações não lidas disponíveis.[^3] O detalhe importante é que o sistema trata o badge como um canal distinto de som e alerta. Ele pode chamar menos atenção naquele instante, mas durar mais tempo.

Android seguiu outra convenção de plataforma. A partir do Android 8.0, lançado em 2017, o sistema passou a oferecer *notification dots* nos ícones dos aplicativos para indicar a existência de notificações ainda ativas.[^4] O contraste é arqueologicamente interessante: um número tenta representar **quantidade**; um ponto representa apenas **presença**.

Essa diferença mostra que “badge” não é uma solução única. O problema pode ser respondido com “há algo” ou com “há 37 coisas”. A segunda escolha aumenta informação, mas também transforma pendência em estoque mensurável.

## Um número pode ser informação e cobrança ao mesmo tempo

O badge aproveita um comportamento bastante comum: usamos sinais visíveis no ambiente para lembrar o que ainda precisa ser tratado. Uma carta deixada sobre a mesa, uma luz acesa, um Post-it colado na tela ou um item fora do lugar podem funcionar como lembretes porque permanecem no campo perceptivo.

No celular, essa lógica é incorporada à infraestrutura. O sistema não precisa esperar que a pessoa se lembre de verificar. O estado pendente viaja até a superfície de acesso.

Isso o conecta a [[01 conceitos/Memoria Distribuida|memória distribuída]], mas de uma maneira diferente do [[03 artefatos/Post-it|Post-it]]. O Post-it é criado deliberadamente pelo usuário para lembrar algo. O badge costuma ser criado automaticamente pelo sistema a partir de eventos que outra pessoa, serviço ou processo produziu.

Essa assimetria importa. O usuário pode não ter escolhido transformar cada mensagem, atualização ou atividade em uma obrigação visual persistente. Um contador crescente pode funcionar como informação operacional — “há três mensagens ainda não lidas” — ou como pressão psicológica para zerá-lo.

É aqui que o badge entra na genealogia [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]]. Ele não precisa interromper com som ou banner para orientar comportamento. Basta permanecer visível e criar uma pequena tensão entre estado atual e estado desejado: **3 deveria virar 0**.

## A atenção pode ser convocada sem uma mensagem

O badge é uma forma extremamente comprimida de comunicação. Ele não diz quem escreveu, o que aconteceu nem se aquilo é importante. Muitas vezes diz apenas que existe algo novo.

Essa pobreza informacional é também sua força. Como ocupa pouquíssimo espaço, consegue permanecer sobre o ícone sem substituir a função principal daquela superfície. A pessoa reconhece rapidamente o aplicativo, o estado pendente e, quando há número, sua magnitude aproximada.

Mas essa compressão pode produzir equivalências artificiais. Dez mensagens irrelevantes podem gerar um badge maior que uma única mensagem urgente. A quantidade ganha saliência sem necessariamente representar importância.

Por isso, os próprios sistemas passaram a devolver parte do controle ao usuário. A Apple permite desativar badges por aplicativo nas configurações de notificação, e o Android permite controlar *badging* por canais de notificação.[^3][^5] O refinamento não elimina o problema; reconhece que **uma tecnologia feita para reduzir o custo de lembrar pode aumentar o custo de ser constantemente lembrado**.

## O conteúdo desaparece, mas o estado continua olhando de volta

O parentesco do badge com [[03 artefatos/Botao Like|Botão Like]], [[03 artefatos/Pull to Refresh|Pull to Refresh]] e [[03 artefatos/Infinite Scroll|Infinite Scroll]] não é histórico direto. Todos, porém, participam de uma mudança em que a interface deixa de apenas receber atenção e passa a criar sinais sobre quando retornar, continuar ou verificar novidade.

O Pull to Refresh exige uma ação para perguntar “tem algo novo?”. O badge antecipa a resposta: **sim, tem**. O usuário nem precisa abrir o aplicativo para que a novidade comece a agir sobre ele.

Nesse sentido, o badge é quase o inverso do favorito. O [[03 artefatos/Favorito Bookmark|Favorito / bookmark]] permite ao usuário deixar um sinal para o próprio futuro: “quero voltar aqui”. O badge permite ao sistema deixar um sinal para o futuro do usuário: “você ainda precisa voltar aqui”.

Essa diferença pequena expõe uma diferença de poder enorme.

A pergunta arqueológica não é, portanto, se badges são bons ou ruins. É mais específica: **quando um estado externo merece ganhar permanência no campo de atenção de alguém — e quem deve poder decidir quando essa pendência acabou?**

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Badge de notificação |
| **Período** | Antecedentes em interfaces desktop; forte popularização móvel a partir do fim dos anos 2000 |
| **Autoria** | Atribuição distribuída; não há inventor único estabelecido para a convenção |
| **Produto ou contexto** | Ícones de aplicativos, desktops, smartphones, sistemas de notificação e launchers |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]] |
| **Empresas ou instituições relacionadas** | [[empresas/Apple|Apple]] e [[empresas/Google|Google]] como agentes de refinamento e padronização em plataformas móveis |
| **Problema original** | Tornar visível, fora do aplicativo, que existe conteúdo ou estado ainda não tratado |
| **Mundo antes** | Era necessário abrir o aplicativo, consultar uma caixa de entrada ou depender de alertas transitórios e memória para verificar pendências |
| **Invenção** | Atribuição difusa; contadores e indicadores de estado aparecem em diferentes interfaces antes de sua consolidação como badge de ícone |
| **Refinamento** | Sobreposição no ícone, números de não lidos, atualização remota, badges por aplicativo ou canal e controle pelo usuário |
| **Popularização** | Ecossistemas de smartphones e notificações push tornaram badges uma presença cotidiana na tela inicial |
| **Padronização** | iOS consolidou amplamente o badge numérico; Android 8.0 incorporou pontos de notificação como convenção de plataforma, mostrando que a semântica não é universal |
| **Hipótese de design** | Um pequeno sinal persistente pode reduzir o custo de verificar um sistema ao tornar sua pendência visível antes da abertura |
| **Comportamento aproveitado** | Usar sinais ambientais persistentes para lembrar tarefas, novidades ou estados não resolvidos |
| **Comportamento produzido** | Verificar aplicativos para reduzir ou zerar contadores e perceber a tela inicial como painel de pendências |
| **Relação de poder** | O sistema ganha capacidade de manter uma demanda perceptivamente presente fora do contexto original; configurações de notificação devolvem parte desse controle ao usuário |
| **Consequências inesperadas** | Ansiedade por contadores crescentes, equiparação entre quantidade e importância, hábito de “zerar” notificações e competição entre aplicativos pela volta do usuário |
| **Destino ou transformação posterior** | Continua presente como número, ponto ou outro sinal sobre ícones e coexistindo com banners, central de notificações e resumos |
| **Conceitos relacionados** | [[01 conceitos/Economia da Atencao|Economia da atenção]], [[01 conceitos/Autonomia da Atencao|Autonomia da atenção]], [[01 conceitos/Redução de Inferências|Redução de inferências]], [[01 conceitos/Memoria Distribuida|Memória distribuída]] |
| **Variáveis relacionadas** | [[02 variaveis/Atencao|Atenção]], [[02 variaveis/Expectativa de Disponibilidade|Expectativa de disponibilidade]], [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Friccao|Fricção]] |
| **Genealogia** | [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]]; secundariamente [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]] |
| **Percurso(s)** | [[05 percursos/Da Parede ao Feed|Da parede ao feed]] |
| **Parentes** | [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Pull to Refresh|Pull to Refresh]], [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Botao Like|Botão Like]], [[03 artefatos/Favorito Bookmark|Favorito / bookmark]] |
| **Leituras-chave** | Documentação da Apple sobre Dock badges e notificações; apresentação do iPhone OS 3.0; documentação do Android 8.0 sobre notification dots |
| **Princípio de design revelado** | Um estado invisível pode orientar comportamento sem mostrar seu conteúdo quando é condensado num sinal persistente colocado antes da próxima ação |
| **Questão em aberto** | Quando a externalização de uma pendência deixa de funcionar como memória auxiliar e passa a funcionar como apropriação contínua da atenção? |

## Referências

[^1]: Apple. *Supporting Common App Behaviors*. A documentação usa o Mail como exemplo de badge numérico sobre o ícone no Dock para indicar mensagens não lidas. https://developer.apple.com/library/archive/documentation/General/Conceptual/MOSXAppProgrammingGuide/CommonAppBehaviors/CommonAppBehaviors.html

[^2]: Apple. “Apple Previews Developer Beta of iPhone OS 3.0”. 17 mar. 2009. A apresentação do sistema registra o Apple Push Notification service e a possibilidade de alertar com sons, texto ou badge. https://www.apple.com/uk/newsroom/2009/03/17Apple-Previews-Developer-Beta-of-iPhone-OS-3-0/

[^3]: Apple. *Human Interface Guidelines — Notifications*. A documentação atual descreve badges como pequenos indicadores numéricos sobre o ícone para representar notificações não lidas e registra que o usuário pode permitir ou impedir sua exibição. https://developer.apple.com/design/human-interface-guidelines/notifications

[^4]: Android Developers. *Android 8.0 Features and APIs*. O Android 8.0 introduziu suporte de plataforma a notification dots/badges sobre ícones do launcher para indicar notificações ainda não tratadas. https://developer.android.com/about/versions/oreo/android-8.0

[^5]: Android Developers. *Modify a notification badge*. A documentação explica que badges podem ser controlados por canal e desativados quando não fizerem sentido para determinada categoria de notificação. https://developer.android.com/develop/ui/views/notifications/badges
