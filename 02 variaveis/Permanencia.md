---
title: "Permanência"
type: "variavel"
status: "publicado"
eixo: "efêmero ↔ persistente"
tags:
  - design/variavel
  - arqueologia
---

# Permanência

**Permanência** descreve quanto tempo um registro, estado, objeto ou sinal tende a continuar disponível sem precisar ser recriado. O eixo vai de **efêmero** a **persistente**.

Permanência não é sinônimo de qualidade. Um post-it pode funcionar porque é temporário; um protocolo pode funcionar porque precisa sobreviver à troca de pessoas e ao tempo institucional.

## Como observar

Algumas perguntas ajudam a localizar um artefato no eixo:

- O estado continua existindo depois que a interação termina?
- Quanto esforço é necessário para preservá-lo?
- O sistema apaga, arquiva ou registra automaticamente?
- Quem controla a duração: usuário, instituição ou infraestrutura?
- O registro continua recuperável mesmo quando deixa de estar visível?

## Impacto nos artefatos

### Aumentam permanência

- [[03 artefatos/Botao Salvar|Botão Salvar]]: transforma explicitamente um estado temporário de trabalho em registro persistente.
- [[03 artefatos/Número de Protocolo|Número de Protocolo]]: ajuda uma demanda a persistir enquanto atravessa pessoas e setores.
- [[03 artefatos/Assinatura|Assinatura]]: liga autoria e responsabilidade a um registro que produzirá efeitos no futuro.
- [[03 artefatos/Archive|Archive]]: preserva recuperabilidade mesmo ao retirar informação do primeiro plano.

### Reduzem ou limitam permanência

- [[03 artefatos/Post-it|Post-it]]: aceita e explora uma memória material facilmente removível e reposicionável.
- [[03 artefatos/Undo Send|Undo Send]]: mantém por alguns segundos um estado ainda não totalmente consolidado, adiando a irreversibilidade percebida.

### Redistribuem a responsabilidade pela permanência

- [[03 artefatos/Botao Salvar|Botão Salvar]] coloca no usuário a decisão de preservar; sistemas de autosave, ainda sem estudo próprio, tendem a transferir essa responsabilidade para a infraestrutura.

## Relações e tensões

Aumentar permanência costuma reduzir risco de perda, mas pode elevar custo de exposição, armazenamento ou esquecimento institucional. Sistemas também podem preservar demais: histórico, rastros e registros que o usuário acreditava serem temporários podem continuar existindo.

Por isso, a pergunta não é apenas “como fazer durar?”, mas **quem decide o que merece durar e por quanto tempo?**

## Conceitos relacionados

- [[01 conceitos/Memoria Distribuida|Memória Distribuída]]
- [[01 conceitos/Continuidade de Acesso|Continuidade de Acesso]]

## Genealogias relacionadas

- [[04 genealogias/Permanencia e Memoria Externa|Permanência e Memória Externa]]
- [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e Custo do Erro]]

### Ficha Resumo da Variável

- **Nome da variável**: Permanência
- **Eixo**: efêmero ↔ persistente
- **Definição operacional**: duração e recuperabilidade de um estado, objeto, sinal ou registro
- **Como observar**: tempo de existência, esforço de preservação, recuperabilidade e controle sobre exclusão
- **Trade-offs principais**: segurança contra perda ↔ direito ao desaparecimento; continuidade ↔ acúmulo de rastros
- **Artefatos chave**: [[03 artefatos/Botao Salvar|Botão Salvar]], [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Archive|Archive]], [[03 artefatos/Número de Protocolo|Número de Protocolo]]
