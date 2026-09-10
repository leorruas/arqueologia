---
title: "Undo"
type: "artefato"
tags:
  - design/artefato
  - arqueologia
---

# Undo

O **Undo** (Desfazer / Ctrl + Z) é um comando de software que reverte a última ação executada pelo usuário, agindo como um mecanismo de segurança contra erros.

## Ficha Técnica
- **Criador(es)**: Warren Teitelman (no BBN LISP); popularizado no [[empresas/Xerox PARC|Xerox PARC]] e refinado por Bruce Horn e Bill Atkinson na [[empresas/Apple|Apple]].
- **Ano de Lançamento**: Desenvolvido na década de 1960; integrado à GUI moderna a partir de 1970/1980.
- **Tipo de Design**: [[00 tipos de design/Design de Interface|Design de Interface]]

## História e Contexto de Criação
- **Demanda / Problema**: Nos primórdios da computação, os computadores eram sistemas estritamente punitivos. Um erro simples de digitação ou exclusão de um parágrafo podia causar perda irreversível de dados. Isso criava uma forte tensão psicológica e medo nas pessoas ao usar as máquinas.
- **Processo de Desenvolvimento**: Pesquisadores do Xerox PARC (incluindo as teorias de [[autores/Alan Kay|Alan Kay]]) começaram a ver o computador como um meio dinâmico de exploração criativa e aprendizado, o que exigia a capacidade de errar sem sofrer consequências desastrosas. O comando foi implementado de forma consistente no Lisa e no Macintosh.

## Inovação e Impacto
- **Ampliação de Capacidade**: Amplia a liberdade de exploração estética e a experimentação criativa ao permitir que o usuário cometa falhas operacionais sem sofrer punição material.
- **Enfraquecimento de Capacidade**: Enfraquece a concentração cuidadosa e o planejamento prévio rigoroso antes da execução de tarefas (estimulando ações impulsivas com a expectativa de correção fácil).
- **Comportamento Coletivo**: Criou o hábito de editar, ajustar e produzir documentos digitais de forma fragmentada e experimental.
- **Linhagem e Descendência**: Descendente direto da borracha física de apagar traços de lápis. Antepassado direto dos históricos de versões contínuos (como Git e Version History do Google Docs).
- **Custo Invisível**: Perda de registros históricos de processos (erros passados são simplesmente eliminados do fluxo de arquivo) e a ilusão de que todas as ações na vida física podem ser desfeitas instantaneamente.

## Referências e Onde Encontrar
- **Pioneiros Relacionados**: [[autores/Alan Kay|Alan Kay]].

---

### Ficha Resumo

- **Nome do artefato**: Undo
- **Ano aproximado**: Década de 1970 (consolidação em interfaces gráficas)
- **Pessoas ou equipes envolvidas**: Warren Teitelman (LISP), [[autores/Alan Kay|Alan Kay]] (Xerox PARC), Bruce Horn, Bill Atkinson (Apple)
- **Produto onde apareceu**: BBN LISP, Xerox Alto, Apple Lisa / Macintosh
- **Problema que resolvia**: A perda permanente de dados devido a erros e a tensão psicológica punitiva da computação inicial
- **Comportamento aproveitado**: O processo de aprendizado humano por tentativa e erro (brincadeira infantil, esboço)
- **Comportamento criado**: Exploração criativa livre, experimentação estética e menor medo de errar ao interagir com computadores
- **Impacto histórico**: Reduziu drasticamente o custo psicológico e operacional do erro, servindo de base para todos os sistemas criativos e históricos de versão
- **Conceitos relacionados**: [[01 conceitos/Justica Procedimental|Justiça Procedimental]], [[02 variaveis/Reversibilidade|Reversibilidade]], [[02 variaveis/Custo do Erro|Custo do Erro]], [[02 variaveis/Justica|Justiça]]
- **Artefatos relacionados para estudos futuros**: [[03 artefatos/Undo Send|Undo Send]], [[03 artefatos/Quadro Branco|Quadro Branco]]
