---
title: "Custo do erro"
type: "variavel"
status: "publicado"
eixo: "baixo ↔ alto impacto de uma ação equivocada"
tags:
  - design/variavel
  - arqueologia
---

# Custo do erro

Errar ao mover um objeto alguns pixels e errar ao apagar definitivamente um banco de dados são ambos “erros”, mas não pertencem à mesma classe de experiência. **Custo do erro** mede a gravidade das consequências depois que uma ação equivocada, indesejada ou acidental acontece.

**Eixo:** baixo ↔ alto impacto de uma ação equivocada.

O eixo não mede apenas probabilidade de erro. Um sistema pode produzir erros frequentes de baixo impacto ou erros raros com consequências enormes.

## Evitar o erro e reduzir sua consequência são estratégias diferentes

Donald Norman mostrou como análises de erros de ação podem orientar princípios de projeto que reduzam tanto a ocorrência quanto os efeitos dos erros.[^1] Essa distinção é central aqui.

Uma confirmação pode tentar impedir que o erro aconteça. [[03 artefatos/Undo|Undo]] atua depois: permite retornar a um estado anterior. [[03 artefatos/Undo Send|Undo Send]] cria uma pequena janela em que aquilo que parece enviado ainda pode ser cancelado.

Essas soluções não tornam o usuário “menos propenso a errar” necessariamente. Elas mudam o tamanho da consequência.

Por isso, custo do erro e [[02 variaveis/Reversibilidade|Reversibilidade]] estão fortemente relacionados, mas não são idênticos. Reversibilidade descreve a facilidade de retornar. Custo do erro inclui também perdas que podem permanecer mesmo quando parte da ação é desfeita.

## Undo não reduz todo erro a zero

A versão anterior dizia que [[03 artefatos/Undo|Undo]] poderia reduzir o custo de ações erradas “a zero”. Isso é forte demais.

Uma ação desfeita pode ter consumido tempo, interrompido raciocínio ou produzido efeitos externos que não retornam com o estado visual. Em sistemas colaborativos, outras pessoas podem ter observado a mudança. Em operações financeiras, industriais ou comunicacionais, nem tudo é reversível.

Undo reduz drasticamente o custo de certos erros de edição porque transforma estados intermediários em experimentação recuperável. Isso já é uma mudança enorme sem precisar pressupor reversibilidade perfeita.

## O custo percebido altera comportamento antes do erro

Quando uma ação parece irreversível, usuários tendem a agir com mais cautela. Quando experimentar é barato e recuperável, exploração se torna mais viável.

É por isso que a genealogia [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] conecta Undo, quadro branco, projeto piloto e outras soluções aparentemente distantes. Todas reorganizam a relação entre tentativa e consequência.

Isso também mostra um trade-off. Baixar demais a percepção de risco pode incentivar ações descuidadas quando a reversibilidade real é limitada. Um botão visualmente inofensivo pode esconder consequências difíceis de reparar.

## Alto custo exige mais do que avisos

Sistemas de alto risco não são resolvidos apenas com uma caixa “tem certeza?”.

O design pode combinar prevenção, diferenciação visual de ações críticas, permissões, backups, revisões, separação de responsabilidades e recuperação. A estratégia adequada depende do tipo de erro e de quem arca com a consequência.

Essa última pergunta é importante: o custo pode ser distribuído de forma desigual. Um operador comete o erro, mas outra pessoa sofre a perda. Um usuário confirma uma decisão porque a interface era ambígua, enquanto a instituição transfere toda responsabilidade para ele.

Assim, custo do erro também pode se conectar a [[02 variaveis/Justica|Justiça]] e [[02 variaveis/Legitimidade Decisoria|Legitimidade decisória]].

## Como observar

Além da frequência de erros, observar tempo de recuperação, perda de dados, necessidade de suporte, impacto financeiro, exposição pública, retrabalho e possibilidade de restauração completa ou parcial.

Também vale distinguir impacto objetivo e impacto percebido. Um usuário pode acreditar que algo é irreversível e evitar experimentar mesmo quando existe recuperação; o inverso também pode acontecer.

A pergunta central é: **quando esta ação dá errado, o que precisa acontecer para que a situação volte a ser aceitável?**

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Custo do erro |
| **Eixo** | Baixo ↔ alto impacto de uma ação equivocada |
| **Definição operacional** | Gravidade das consequências e esforço necessário para recuperação após erro ou ação indesejada |
| **Como observar** | Perda, retrabalho, tempo de recuperação, impacto financeiro, exposição e restaurabilidade |
| **O que não mede sozinho** | Probabilidade de erro ou facilidade de executar a ação |
| **Trade-offs principais** | Reduzir consequência favorece exploração; percepção excessiva de segurança pode esconder efeitos realmente irreversíveis |
| **Artefatos-chave** | [[03 artefatos/Undo|Undo]], [[03 artefatos/Undo Send|Undo Send]], [[03 artefatos/Projeto Piloto|Projeto piloto]] |
| **Conceitos relacionados** | [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]] |
| **Genealogias relacionadas** | [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] |

## Referências

[^1]: Norman, Donald A. “Design Rules Based on Analyses of Human Error”. *Communications of the ACM*, 1983. O artigo distingue classes de erro e discute princípios para reduzir sua ocorrência e seus efeitos.