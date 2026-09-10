---
title: "Custo transacional"
type: "variavel"
status: "publicado"
eixo: "baixo ↔ alto esforço total para concluir uma interação ou troca"
tags:
  - design/variavel
  - arqueologia
---

# Custo transacional

Dar um Like, comprar um item, atualizar uma página e autenticar uma conta são ações diferentes, mas podem ser comparadas por uma pergunta simples: **quanto trabalho é necessário para concluir a interação?**

Neste projeto, **custo transacional** mede o esforço operacional total entre intenção e conclusão: passos, cliques, gestos, deslocamentos, espera e coordenação exigidos para fazer uma troca ou ação chegar ao fim.

**Eixo:** baixo ↔ alto esforço total para concluir uma interação ou troca.

O termo é inspirado pela tradição econômica dos custos de transação, mas seu uso aqui é mais estreito e operacional. Coase discutia custos de usar o mecanismo de preços — descobrir preços, negociar e concluir contratos — para explicar por que certas atividades são organizadas dentro de firmas.[^1] Não estamos usando a variável como equivalente direto da teoria econômica.

## Um clique pode condensar uma cadeia inteira

O [[03 artefatos/Botao Like|Botão Like]] comprime uma manifestação social em uma ação mínima. Expressar aprovação que poderia exigir escrever, falar ou produzir outro sinal passa a caber em um toque.

[[03 artefatos/Pull to Refresh|Pull to Refresh]] também reduz passos: a atualização é incorporada ao próprio gesto de manipular a lista. [[03 artefatos/Pinch to Zoom|Pinch to Zoom]] permite controlar escala continuamente sem alternar repetidamente entre botões discretos.

Esses artefatos diminuem custo transacional porque reduzem etapas ou as incorporam ao gesto já em curso.

Mas o efeito não precisa ser apenas físico. Um fluxo pode ter poucos cliques e ainda exigir espera, coordenação entre pessoas ou preenchimento redundante. Por isso, “número de telas” é apenas um dos indicadores possíveis.

## Custo transacional não é fricção em geral

A variável [[02 variaveis/Friccao|Fricção]] mede resistência localizada entre intenção e ação. Custo transacional olha para **a soma do percurso necessário para concluir**.

Uma etapa de autenticação pode aumentar fricção num ponto específico e também aumentar o custo total. Mas uma interação pode ter muitas etapas fáceis: baixa resistência em cada passo e alto custo transacional acumulado.

Da mesma forma, [[02 variaveis/Custo de Busca|Custo de busca]] pode ser uma parcela do custo transacional, mas não é a mesma coisa. Encontrar o produto e concluir a compra são trabalhos distintos.

Essa separação permite diagnosticar onde o esforço realmente está.

## Aumentar custo pode proteger valor

Baixo custo não é meta universal.

Autenticação em duas etapas adiciona passos para reduzir risco de acesso indevido. Uma confirmação antes de apagar definitivamente um arquivo aumenta o percurso justamente porque o [[02 variaveis/Custo do Erro|Custo do erro]] seria alto.

O problema de design não é “eliminar passos” em abstrato. É decidir **quais passos produzem proteção, compreensão ou coordenação suficientes para justificar o esforço que acrescentam**.

Essa é a conexão com [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]]. Uma etapa pode ser operacionalmente cara e ainda assim valiosa. Outra pode existir apenas porque o sistema foi mal integrado.

## Reduzir custo muda frequência de comportamento

Quando uma ação fica muito mais barata, ela pode acontecer mais vezes.

Curtir custa menos do que escrever; trocar de canal com [[03 artefatos/Controle Remoto|controle remoto]] custa menos do que levantar; adicionar produtos ao [[03 artefatos/Carrinho de Compras|carrinho de compras]] permite acumular decisões antes do pagamento final.

A arqueologia do design precisa observar essa segunda ordem: o que acontece quando a economia de esforço altera a frequência, a escala ou a espontaneidade da ação?

É aí que custo transacional se conecta à [[01 conceitos/Compressao do Esforco|Compressão do esforço]]. A variável permite comparar o tamanho do deslocamento; o conceito investiga a lógica histórica de incorporar etapas ao artefato.

## Como observar

Podem ser medidos passos, cliques, gestos, deslocamento físico, tempo ativo, espera, número de sistemas envolvidos, repetição de informações e dependência de outros atores.

A métrica deve acompanhar a tarefa real. Contar cliques sem considerar espera ou retrabalho pode produzir uma falsa sensação de eficiência.

A pergunta mais útil é: **que trabalho ainda precisa acontecer entre “quero fazer” e “está concluído”?**

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Custo transacional |
| **Eixo** | Baixo ↔ alto esforço total para concluir uma interação ou troca |
| **Definição operacional** | Soma de passos, gestos, espera, deslocamentos e coordenação necessários para concluir uma ação |
| **Como observar** | Passos, tempo ativo, espera, repetição, sistemas e atores envolvidos |
| **O que não mede sozinho** | Complexidade da decisão, justiça, risco ou valor gerado por cada etapa |
| **Trade-offs principais** | Reduzir custo aumenta fluidez; etapas adicionais podem proteger segurança, compreensão ou reversibilidade |
| **Artefatos-chave** | [[03 artefatos/Botao Like|Botão Like]], [[03 artefatos/Pull to Refresh|Pull to Refresh]], [[03 artefatos/Pinch to Zoom|Pinch to Zoom]], [[03 artefatos/Carrinho de Compras|Carrinho de compras]] |
| **Conceitos relacionados** | [[01 conceitos/Compressao do Esforco|Compressão do esforço]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]] |
| **Genealogias relacionadas** | [[04 genealogias/Compressao do Esforco|Compressão do esforço]] |

## Referências

[^1]: Coase, Ronald H. “The Nature of the Firm”. *Economica*, 1937. O artigo é um antecedente do vocabulário de custos de transação; a variável do projeto não equivale à teoria econômica de Coase.