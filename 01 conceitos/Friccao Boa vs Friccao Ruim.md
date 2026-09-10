---
title: "Fricção boa vs fricção ruim"
type: "conceito"
status: "publicado"
origem: "adaptação"
grau: "debatido"
tags:
  - design/conceito
  - arqueologia
---

# Fricção boa vs fricção ruim

Em design, “reduzir fricção” costuma soar como objetivo universal. Mas um botão de confirmação antes de apagar tudo, alguns segundos para desfazer um envio e uma etapa de verificação antes de uma cirurgia são fricções — e removê-las pode piorar o sistema.

**Fricção boa vs fricção ruim** é uma adaptação do projeto para investigar essa diferença. Ela parte de uma ideia simples: o custo de uma etapa não diz, sozinho, se essa etapa é desperdício. Precisamos perguntar **o que ela protege, torna perceptível ou permite reconsiderar**.

## Nem todo passo extra é burocracia

Uma fricção ruim aumenta esforço sem produzir valor proporcional: repetir dados que o sistema já possui, esperar sem informação, navegar por etapas redundantes ou corrigir erros criados pela própria interface.

Uma fricção produtiva faz outra coisa. Ela pode criar tempo para reflexão, impedir ação acidental, tornar risco explícito ou exigir participação necessária para que uma decisão tenha qualidade.

[[03 artefatos/Slide to Unlock|Slide to Unlock]] introduz deliberadamente mais movimento do que um toque simples para reduzir ativações acidentais. [[03 artefatos/Undo Send|Undo Send]] introduz atraso antes da irreversibilidade. [[03 artefatos/Checklist|Checklist]] acrescenta verificação numa operação que poderia, tecnicamente, prosseguir sem ela.

O valor dessas etapas vem justamente daquilo que impedem.

## A mesma fricção pode mudar de sinal

Não existe uma lista universal de fricções boas. Uma confirmação útil numa ação destrutiva pode virar irritação quando aparece em toda ação trivial. Uma autenticação adicional pode proteger uma transferência financeira e ser desproporcional para ler uma informação pública.

Por isso, “boa” e “ruim” não são propriedades fixas do componente. São avaliações contextuais da relação entre custo e função.

O conceito se conecta diretamente à variável [[02 variaveis/Friccao|Fricção]], mas adiciona uma pergunta qualitativa. A variável observa quanto atrito existe; esta lente pergunta **se esse atrito sustenta algum valor ou apenas encarece a ação**.

## Remover fricção também remove momentos de decisão

[[03 artefatos/Infinite Scroll|Infinite Scroll]] mostra o outro lado. Eliminar a paginação reduz esforço operacional, mas também elimina um ponto explícito de parada. Isso não torna a rolagem infinita automaticamente ruim; mostra que otimização nunca é neutra.

A genealogia [[04 genealogias/Compressao do Esforco|Compressão do esforço]] acompanha justamente situações em que passos são condensados. A pergunta complementar desta lente é: **o que se perdeu quando o passo desapareceu?**

Esse cuidado evita transformar eficiência em sinônimo de qualidade.

## Fricção pode proteger autonomia

Há ainda uma dimensão de poder. Algumas pausas permitem que pessoas percebam consequências antes de uma decisão; outras existem apenas para dificultar cancelamento, reclamação ou saída.

O mesmo princípio formal — “adicionar uma etapa” — pode proteger o usuário ou proteger a organização contra o usuário.

Isso torna a análise de fricção especialmente importante em serviços. Uma etapa precisa ser julgada não apenas por duração, mas por quem se beneficia de sua existência.

O objetivo do designer deixa de ser remover todas as barreiras. Passa a ser **eliminar o esforço que não produz valor e preservar o esforço que sustenta segurança, compreensão, consentimento ou qualidade da decisão**.

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Fricção boa vs fricção ruim |
| **Origem** | Adaptação |
| **Grau de consolidação** | Debatido; a distinção usada aqui é uma lente do projeto |
| **Formulação associada a** | Arqueologia do Design; diálogo com usabilidade, segurança, arquitetura de escolha e custos de interação |
| **Área principal** | IHC / design de serviços / ergonomia cognitiva |
| **Distinção central** | Uma etapa custosa pode ser desperdício ou pode proteger um valor importante |
| **O que ajuda a explicar** | Quando reduzir passos melhora a experiência e quando remove reflexão, segurança ou consentimento |
| **O que não explica sozinho** | Qual nível de fricção é ideal sem analisar contexto e distribuição de benefícios |
| **Artefatos-chave** | [[03 artefatos/Slide to Unlock|Slide to Unlock]], [[03 artefatos/Undo Send|Undo Send]], [[03 artefatos/Checklist|Checklist]], [[03 artefatos/Quadro Branco|Quadro branco]] |
| **Variáveis relacionadas** | [[02 variaveis/Friccao|Fricção]], [[02 variaveis/Atrito Decisorio|Atrito decisório]], [[02 variaveis/Custo do Erro|Custo do erro]] |
| **Genealogias relacionadas** | [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]], [[04 genealogias/Compressao do Esforco|Compressão do esforço]] |

## Referências

A distinção usada aqui é uma adaptação interpretativa do projeto. Deve dialogar com literatura de usabilidade, segurança, arquitetura de escolha e *cognitive forcing functions*, sem tratar “boa fricção” como categoria universal ou propriedade inerente de um componente.