---
title: "Reversibilidade e custo do erro"
type: "genealogia"
status: "publicado"
tags:
  - design/genealogia
  - arqueologia
---

# Reversibilidade e custo do erro

Uma ação fácil pode continuar sendo assustadora se o erro for caro. Apagar um arquivo, enviar uma mensagem, testar uma ideia ou mudar um processo exigem disposições muito diferentes dependendo de uma pergunta simples: se eu me arrepender, consigo voltar?

Essa genealogia aproxima soluções que não necessariamente evitam o erro. Elas mudam seu preço. Undo, Undo Send, versões salvas, superfícies apagáveis, Post-its, checklists, retrospectivas e projetos piloto criam formas diferentes de retorno, prevenção, atraso ou experimentação parcial. O parentesco é funcional e comportamental, não uma linha histórica única.

## O valor de poder voltar

O [[03 artefatos/Undo|Undo]] torna explícita a possibilidade de retornar a um estado anterior. Ele não apenas corrige uma falha depois que ela acontece. Saber que existe pode mudar o comportamento antes da ação: a pessoa pode testar algo com menos receio porque a consequência não parece definitiva.

O [[03 artefatos/Undo Send|Undo Send]] trabalha com outro mecanismo. Em muitos sistemas, o “desfazer” não recupera uma mensagem que já chegou ao destinatário. Ele cria uma pequena janela entre a decisão de enviar e a irreversibilidade efetiva. Isso mostra que reversibilidade não é binária: importa saber o que pode ser revertido, durante quanto tempo e até qual etapa.

O [[03 artefatos/Botao Salvar|botão salvar]] pertence à família por parentesco indireto. Salvar não é o mesmo que desfazer, mas estados persistentes podem fornecer pontos aos quais o trabalho consegue retornar. O [[03 artefatos/Quadro Branco|quadro branco]] torna a provisoriedade material. Escrever e apagar custa pouco, permitindo que uma ideia ocupe espaço sem parecer definitiva.

O [[03 artefatos/Post-it|Post-it]] acrescenta mobilidade à provisoriedade. A nota pode existir, mudar de lugar, ser reagrupada e desaparecer sem grande custo. A reversibilidade não está apenas em apagar: está em permitir que a própria organização da informação continue negociável.

O [[03 artefatos/Checklist|checklist]] atua antes do erro. Em vez de tornar uma ação reversível depois, reduz a chance de uma omissão custosa por meio de memória externa. Seu parentesco revela que diminuir custo do erro pode ocorrer por retorno ou por prevenção.

A [[03 artefatos/Retrospectiva|retrospectiva]] trabalha depois do acontecimento, mas antes de sua repetição. O passado não pode ser desfeito; o processo pode ser revisto para alterar a próxima tentativa. É uma reversibilidade de regra, não de evento.

O [[03 artefatos/Projeto Piloto|projeto piloto]] leva essa lógica para organizações: em vez de comprometer todo o sistema com uma mudança, reduz escala e compromisso para aprender antes da institucionalização ampla.

## A segurança muda o comportamento antes do erro

Essa é talvez a consequência mais importante da reversibilidade. Seu efeito não começa quando alguém erra. Começa quando alguém decide se vale a pena agir.

Se desfazer é barato, mais alternativas podem ser exploradas. Se reorganizar notas é simples, mais hipóteses podem coexistir provisoriamente. Se um checklist reduz omissões previsíveis, ações complexas podem ser executadas com menor dependência de memória. Se um piloto limita exposição, uma organização pode testar uma mudança que pareceria arriscada demais em escala total.

A relação com [[01 conceitos/Manipulacao Direta|manipulação direta]] é forte porque interfaces de ação rápida tendem a depender de feedback e correção também rápidos. Já [[01 conceitos/Friccao Boa vs Friccao Ruim|fricção boa vs fricção ruim]] lembra que nem toda proteção precisa vir de desfazer depois. Em algumas situações, um pequeno atrito antes da ação é melhor do que confiar apenas na reversão posterior.

As variáveis [[02 variaveis/Reversibilidade|reversibilidade]], [[02 variaveis/Custo do Erro|custo do erro]] e [[02 variaveis/Friccao|fricção]] formam um sistema. Uma ação pode ser extremamente fácil e ainda produzir cautela se for irreversível. Outra pode exigir esforço, mas convidar à exploração porque o retorno é confiável.

## Quando “desfazer” é só uma promessa parcial

A reversibilidade pode produzir falsa segurança. Undo Send é o caso mais claro: o nome sugere recuperar algo já enviado, mas frequentemente o sistema apenas segura a mensagem por alguns segundos antes de concluir o envio. A interface comunica reversão enquanto a infraestrutura oferece atraso.

Esse descompasso importa porque a sensação de segurança pode aumentar a disposição para agir. Se o usuário acredita que uma operação é reversível quando só uma pequena etapa é, o design pode incentivar confiança além do que o sistema realmente suporta.

Uma hipótese desta genealogia é que sistemas criativos e experimentais talvez sejam definidos menos pela quantidade de ferramentas oferecidas do que pelo custo de tentar alguma coisa, detectar problemas e voltar atrás ou alterar a próxima tentativa.

## Ficha da genealogia

| Campo | Registro |
|---|---|
| **Genealogia** | Reversibilidade e custo do erro |
| **Pergunta central** | O que muda quando uma pessoa pode errar, mudar de ideia, prevenir omissões ou experimentar sem pagar imediatamente o custo completo da decisão? |
| **Hipótese de parentesco** | Artefatos diferentes criam retorno, prevenção, atraso, estados recuperáveis ou experimentação em escala reduzida |
| **Natureza das relações** | Funcional, temporal, material, comportamental, organizacional e comparativa |
| **Artefatos principais** | [[03 artefatos/Undo|Undo]], [[03 artefatos/Undo Send|Undo Send]], [[03 artefatos/Botao Salvar|Botão salvar]], [[03 artefatos/Quadro Branco|Quadro branco]], [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Checklist|Checklist]], [[03 artefatos/Retrospectiva|Retrospectiva]], [[03 artefatos/Projeto Piloto|Projeto piloto]] |
| **Comportamento recorrente** | Experimentar, prevenir, corrigir, recuar e aprender antes de assumir consequências definitivas |
| **O que o design redistribui** | Risco, memória preventiva, custo do erro, momento da decisão e responsabilidade pela recuperação |
| **Relação de poder** | A infraestrutura define quais consequências podem ser revertidas, quais erros tenta impedir e sob quais condições |
| **Conceitos relacionados** | [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]], [[01 conceitos/Manipulacao Direta|Manipulação direta]] |
| **Variáveis relacionadas** | [[02 variaveis/Reversibilidade|Reversibilidade]], [[02 variaveis/Custo do Erro|Custo do erro]], [[02 variaveis/Friccao|Fricção]] |
| **Cuidado histórico** | Os artefatos são aproximados pela redução do preço da tentativa ou do erro; não formam uma sequência histórica direta |
| **Hipótese em aberto** | Reversibilidade e prevenção podem funcionar como infraestruturas de criatividade e exploração; resta investigar quando a promessa de segurança excede a proteção real oferecida pelo sistema |
