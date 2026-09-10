---
title: "Undo Send"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Undo Send

Há uma diferença enorme entre enviar uma mensagem e perceber, um segundo depois, que ela não deveria ter sido enviada. O **Undo Send** nasceu nesse intervalo mínimo entre ação e arrependimento. Seu truque de design é simples: transformar alguns segundos de espera em uma margem para mudar de ideia.

## Quando a comunicação perdeu o intervalo

Cartas físicas acumulavam etapas entre escrever e entregar: revisar, dobrar, envelopar, endereçar, selar e levar a mensagem até um ponto de envio. Essas etapas não foram projetadas como mecanismo de segurança psicológica, mas criavam tempo entre intenção e irreversibilidade. O e-mail comprimiu quase tudo isso em um botão.

Essa compressão reduziu o esforço de comunicar, mas também reduziu o tempo disponível para perceber um erro. Destinatário errado, anexo esquecido, frase impulsiva ou simples mudança de intenção podiam se tornar permanentes no instante do clique.

## A pequena invenção do atraso

Em 19 de março de 2009, o Gmail Labs lançou o Undo Send. O anúncio foi escrito pelo designer de experiência Michael Leggett, que descreveu o problema a partir de erros reais de envio e mencionou o engenheiro Yuzo Fujishima como uma das pessoas que compartilhavam a ideia. O recurso segurava a mensagem por cinco segundos antes de efetivamente enviá-la. Se o usuário clicasse em “Undo”, voltava ao modo de composição.

Esse detalhe técnico é central para a arqueologia do artefato. O sistema não recuperava uma mensagem já entregue. Ele adiava a passagem para o estado irreversível. O que parecia ser uma máquina do tempo era, na prática, um pequeno **limiar temporal**.

Em versões posteriores, o intervalo configurável passou a chegar a 30 segundos e o recurso deixou de ser um experimento do Labs para integrar as configurações normais do Gmail. A ideia também apareceu em outros serviços de comunicação, ainda que com implementações diferentes: algumas plataformas atrasam o envio; outras permitem apagar ou revogar mensagens depois de entregues. Essas soluções parecem semelhantes na interface, mas operam sobre mecanismos distintos.

## O que o design descobriu

A força do Undo Send está em reconhecer que a intenção humana continua mudando logo depois da ação. Interfaces tradicionais tratam o clique como fronteira perfeita entre “ainda decidindo” e “decidido”. O Undo Send trabalha com uma hipótese mais realista: parte das decisões continua cognitivamente aberta durante alguns segundos.

Ele também produz um efeito curioso sobre a relação entre velocidade e segurança. O e-mail havia removido fricções materiais da comunicação; o Undo Send reinsere uma fricção invisível e deliberada. O envio fica tecnicamente um pouco mais lento para parecer subjetivamente mais seguro.

Essa pequena janela também pode alterar o comportamento antes do erro. Quando o usuário sabe que existe uma saída, enviar pode parecer menos arriscado. A interface passa a oferecer uma espécie de seguro contra arrependimento imediato.

## Da reversão ao adiamento

O parentesco com [[03 artefatos/Undo|Undo]] é forte, mas não literal. O Undo tradicional tenta restaurar um estado anterior depois de uma transformação. O Undo Send do Gmail original impede por alguns segundos que a transformação final aconteça. Um volta; o outro espera.

A relação com [[03 artefatos/Fila|Fila]] também é interessante. Tecnicamente, a mensagem permanece retida em uma fila temporária. Conceitualmente, porém, essa espera é invisível ao usuário até o momento em que ele decide cancelá-la.

Por isso o artefato pertence de forma especialmente clara à genealogia [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]]. Sua principal contribuição não é tornar a comunicação reversível em sentido absoluto, mas deslocar por alguns segundos a fronteira da irreversibilidade.

## O custo escondido da janela de escape

O recurso depende de um intermediário capaz de reter e gerenciar temporariamente a ação. Em sistemas distribuídos, nem toda operação pode receber esse intervalo com a mesma facilidade. Existe ainda uma mudança de expectativa: usuários podem começar a agir contando com a presença dessa margem de segurança e estranhar sistemas em que “enviar” continua significando “enviar agora”.

A hipótese mais interessante talvez seja justamente essa: ao tornar uma ação aparentemente reversível, o design pode reduzir o cuidado exigido antes dela. Isso não torna o recurso ruim. Mostra apenas que segurança e comportamento se reorganizam juntos.

## Referências

1. Michael Leggett. “New in Labs: Undo Send”. Official Gmail Blog, 19 mar. 2009.
2. Google Workspace. Documentação e materiais posteriores sobre configuração de Undo Send e intervalos de 5, 10, 20 ou 30 segundos.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Undo Send |
| **Período** | 2009 aos dias atuais |
| **Autoria** | Michael Leggett, Yuzo Fujishima e equipe do Gmail |
| **Produto ou contexto** | Gmail Labs Categoria: Interface digital / comunicação |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]] |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Arrependimento ou percepção de erro imediatamente após o envio de uma mensagem |
| **Mundo antes** | Ações digitais de envio tratadas como instantâneas e definitivas, em contraste com os intervalos materiais da correspondência física |
| **Invenção** | Gmail Labs, 2009, com uma janela inicial de cinco segundos antes do envio efetivo |
| **Refinamento** | Ampliação do intervalo configurável e integração ao Gmail normal |
| **Popularização** | Adoção da expectativa de “desfazer envio” por outros serviços de comunicação |
| **Padronização** | Tornou-se um padrão reconhecível de segurança em interfaces de comunicação, embora plataformas implementem mecanismos diferentes |
| **Hipótese de design** | Uma ação pode parecer reversível sem precisar ser revertida, desde que o design adie discretamente o momento em que ela se torna irreversível Hipótese sobre o comportamento humano: A intenção pode continuar mudando imediatamente depois de uma ação aparentemente concluída |
| **Comportamento aproveitado** | Arrependimento e revisão logo após agir |
| **Comportamento produzido** | Enviar contando com uma curta janela de escape |
| **Relação de poder** | Devolve ao usuário uma pequena margem temporal sobre uma decisão que o sistema poderia tratar como instantaneamente definitiva |
| **Consequências inesperadas** | Pode mudar a expectativa do usuário sobre a reversibilidade de ações digitais Capacidade ampliada: Correção rápida de erros de destinatário, anexos e impulsividade Capacidade reduzida ou deslocada: O envio deixa de ser tecnicamente instantâneo durante o intervalo de segurança Custo invisível: Dependência de infraestrutura que retém a ação e possibilidade de maior confiança em uma reversibilidade que é limitada |
| **Destino ou transformação posterior** | Incorporado e normalizado em serviços de comunicação Legado: Tornou o atraso deliberado uma ferramenta explícita de segurança de interação |
| **Conceitos relacionados** | [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]], [[01 conceitos/Limiares|Limiares]] |
| **Variáveis relacionadas** | [[02 variaveis/Reversibilidade|Reversibilidade]], [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Custo do Erro|Custo do Erro]], [[02 variaveis/Atrito Decisorio|Atrito Decisório]] |
| **Genealogia** | [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] Família de ideias: Tecnologias de reversibilidade |
| **Percurso(s)** | Ainda não integrado a um percurso editorial. |
| **Parentes** | [[03 artefatos/Undo|Undo]], [[03 artefatos/Fila|Fila]] |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Inserir tempo entre intenção e consequência pode reduzir drasticamente o custo do erro Por que funcionou: Resolve um problema psicológico com uma intervenção temporal mínima e quase invisível |
| **Questão em aberto** | Até que ponto janelas de reversão alteram o cuidado que as pessoas dedicam à decisão antes de agir? |
