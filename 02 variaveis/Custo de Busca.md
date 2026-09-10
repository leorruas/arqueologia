---
title: "Custo de busca"
type: "variavel"
status: "publicado"
eixo: "baixo ↔ alto esforço para localizar e comparar uma opção"
tags:
  - design/variavel
  - arqueologia
---

# Custo de busca

Antes de escolher, muitas vezes é preciso descobrir **o que existe, onde está e como se compara**. **Custo de busca** mede o esforço necessário para localizar informação, recurso ou alternativa relevante antes de agir.

**Eixo:** baixo ↔ alto esforço para localizar e comparar uma opção.

A variável tem antecedente direto na economia da informação. George Stigler tratou a busca por informação — especialmente preços — como atividade custosa, mostrando que conhecer alternativas não é gratuito.[^1] No design, ampliamos essa pergunta para interfaces, documentos, ambientes e serviços.

## Encontrar e escolher são trabalhos diferentes

[[02 variaveis/Atrito Decisorio|Atrito decisório]] começa quando alternativas ou critérios precisam ser avaliados e uma escolha formulada. Custo de busca aparece antes e durante essa etapa: é o trabalho de **tornar as alternativas encontráveis e comparáveis**.

Um catálogo pode ter poucas opções e péssima busca. Outro pode ter milhares de itens e filtros eficientes. Quantidade de alternativas e custo de encontrá-las não são a mesma coisa.

[[03 artefatos/Archive|Archive]] deixa isso muito claro. Arquivar reduz a necessidade de manter uma mensagem no primeiro plano, mas essa decisão só funciona bem se a infraestrutura de recuperação mantiver baixo o custo de reencontrá-la.

## A organização do espaço altera o custo de procurar

O [[03 artefatos/Grid|Grid]] pode reduzir custo de busca visual quando cria padrões recorrentes de localização e alinhamento. O leitor aprende onde títulos, colunas ou elementos similares tendem a aparecer.

O [[03 artefatos/Espaço entre Palavras|Espaço entre palavras]] atua em escala menor: torna fronteiras lexicais visualmente disponíveis e reduz parte do trabalho de segmentação durante a leitura. O texto antigo dizia que isso eliminava vocalização obrigatória, uma causalidade forte demais. O efeito mais seguro é falar em redução de esforço de segmentação e varredura.

O [[03 artefatos/Controle Remoto|Controle remoto]] também reduz certos custos de exploração: circular entre canais deixa de exigir deslocamento físico até o aparelho. Mas ele pode simultaneamente aumentar a quantidade de alternativas exploradas. Baixo custo de busca não significa necessariamente decisão mais rápida.

## Interfaces podem deslocar o custo, não eliminá-lo

[[03 artefatos/Infinite Scroll|Infinite Scroll]] reduz o esforço de solicitar mais conteúdo, mas não necessariamente o custo de **encontrar algo específico**. Ele favorece exploração contínua; recuperação direcionada pode continuar difícil.

Essa diferença é importante. “Mais conteúdo disponível” não é sinônimo de “mais encontrável”.

Filtros, índices, hierarquias, rótulos e mecanismos de busca reduzem determinados custos ao incorporar uma estrutura de classificação. Em troca, o usuário passa a depender das categorias e do ranking escolhidos pelo sistema.

Assim, reduzir custo de busca pode aumentar poder de curadoria. Isso conecta a variável à [[01 conceitos/Redução de Inferências|Redução de inferências]] e à [[02 variaveis/Legitimidade Decisoria|Legitimidade decisória]].

## Quanto menor o custo, maior pode ser a exploração

A economia de busca não precisa produzir apenas rapidez. Ela pode tornar viável comparar mais alternativas.

Isso ajuda a explicar por que tecnologias de acesso podem gerar comportamentos que parecem contraditórios: o usuário gasta menos esforço por tentativa, mas realiza muito mais tentativas. O tempo total pode até crescer.

Portanto, a pergunta não é simplesmente “ficou mais rápido encontrar?”. Também vale perguntar: **o que passou a ser procurado porque procurar ficou mais barato?**

## Como observar

Sinais úteis incluem tempo até localizar informação, número de tentativas, consultas reformuladas, navegação entre páginas, necessidade de memorizar caminhos, quantidade de itens inspecionados e sucesso em encontrar um alvo conhecido.

Em comparação entre alternativas, também importam consistência de atributos, capacidade de ordenar e facilidade de retornar a itens já vistos.

A variável não mede sozinha a qualidade da escolha. Um sistema pode tornar um item fácil de encontrar justamente porque decidiu promovê-lo.

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Custo de busca |
| **Eixo** | Baixo ↔ alto esforço para localizar e comparar uma opção |
| **Definição operacional** | Recursos, tempo e esforço necessários para tornar informação ou alternativas encontráveis e comparáveis |
| **Como observar** | Tempo de localização, tentativas, reformulações, navegação, itens inspecionados e sucesso de recuperação |
| **O que não mede sozinho** | Qualidade da escolha, quantidade de alternativas ou legitimidade do ranking |
| **Trade-offs principais** | Busca eficiente pode ampliar exploração e também concentrar poder em filtros, categorias e ordenação |
| **Artefatos-chave** | [[03 artefatos/Archive|Archive]], [[03 artefatos/Grid|Grid]], [[03 artefatos/Espaço entre Palavras|Espaço entre palavras]], [[03 artefatos/Controle Remoto|Controle remoto]] |
| **Conceitos relacionados** | [[01 conceitos/Redução de Inferências|Redução de inferências]], [[01 conceitos/Tecnologia de Acesso|Tecnologia de acesso]] |
| **Genealogias relacionadas** | [[04 genealogias/Acesso e Disponibilidade|Acesso e disponibilidade]] |

## Referências

[^1]: Stigler, George J. “The Economics of Information”. *Journal of Political Economy*, 1961. O artigo formaliza a busca por informação como atividade custosa e serve de antecedente direto para esta variável.