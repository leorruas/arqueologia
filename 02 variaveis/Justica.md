---
title: "Justiça"
type: "variavel"
status: "publicado"
eixo: "baixa ↔ alta percepção de equidade"
tags:
  - design/variavel
  - arqueologia
---

# Justiça

Duas pessoas podem receber exatamente o mesmo resultado e ainda discordar profundamente sobre se o sistema foi justo. **Justiça** é a variável usada neste projeto para comparar a percepção de equidade na aplicação de regras, distribuição de recursos e tratamento entre atores.

**Eixo:** baixa ↔ alta percepção de equidade.

O eixo é deliberadamente perceptivo. Ele não certifica que um sistema seja eticamente correto. Uma regra pode ser percebida como justa e ainda produzir consequências injustificáveis; outra pode ser inicialmente contestada e possuir forte fundamento normativo.

## Resultado e processo são dimensões diferentes

Na [[03 artefatos/Fila|Fila]], a ordem de chegada costuma ser legível e fiscalizável. Isso pode sustentar percepção de equidade porque pessoas conseguem observar uma regra comum sendo aplicada.

Mas a mesma regra pode parecer inadequada quando necessidades são diferentes. Em uma emergência médica, priorizar quem chegou primeiro pode ser menos aceitável do que priorizar gravidade.

É aqui que [[01 conceitos/Distribuicao de Escassez|Distribuição de escassez]] ajuda: diferentes serviços materializam diferentes critérios de prioridade.

[[01 conceitos/Justica Procedimental|Justiça procedimental]] acrescenta outra distinção. Na tradição associada a Tom Tyler, percepção de justiça não depende apenas do resultado; voz, neutralidade, respeito e confiabilidade da autoridade influenciam como o processo é avaliado.[^1]

A variável `Justiça` é mais ampla: permite comparar a percepção geral de equidade. O conceito de justiça procedimental ajuda a explicar uma das fontes dessa percepção.

## Visibilidade da regra pode aumentar confiança — mas não garante justiça

[[03 artefatos/Agendamento|Agendamento]] pode tornar capacidade escassa mais previsível ao distribuir horários antecipadamente. Isso pode parecer mais justo do que esperar indefinidamente, especialmente quando a regra de reserva é clara.

Ao mesmo tempo, agendas podem favorecer quem tem melhor acesso digital, maior flexibilidade de horário ou consegue entrar no sistema no momento em que vagas são abertas.

O design não apenas aplica regras; ele torna algumas formas de vantagem mais fáceis de perceber do que outras.

Isso é importante em algoritmos. Uma ordem invisível pode ser perfeitamente consistente e ainda parecer arbitrária porque o usuário não consegue compreender por que determinados itens ou pessoas receberam prioridade.

## Justiça não deve absorver reversibilidade

A versão anterior tratava [[03 artefatos/Undo|Undo]] como artefato que “aumenta justiça” por não punir severamente pequenos erros. A associação é possível como metáfora, mas é indireta demais para ser exemplo central.

Undo altera sobretudo [[02 variaveis/Reversibilidade|Reversibilidade]] e [[02 variaveis/Custo do Erro|Custo do erro]]. Só entraria numa análise de justiça se diferentes usuários recebessem capacidades de recuperação de forma desigual ou se a responsabilidade por falhas fosse distribuída de maneira controversa.

Essa poda é importante: uma variável deixa de ser útil quando qualquer benefício pode ser classificado como “mais justiça”.

## Equidade pode exigir tratamento diferente

Aplicar exatamente a mesma regra a todos não é sinônimo automático de justiça.

Filas prioritárias, cotas, acessibilidade e triagem são exemplos em que tratamento diferenciado pode ser justificado por necessidade, desigualdade anterior ou risco.

A pergunta relevante não é apenas “as regras são iguais?”, mas **que diferenças o sistema considera legítimas e por quê?**

Isso conecta Justiça à [[02 variaveis/Legitimidade Decisoria|Legitimidade decisória]]. Uma decisão pode ser percebida como mais justa quando seus critérios são compreensíveis e contestáveis, mas as duas variáveis continuam distintas: entender uma regra não obriga ninguém a considerá-la justa.

## Como observar

A percepção de justiça pode ser investigada por relatos de favoritismo, aceitação de prioridade alheia, disposição para cooperar, confiança nas regras, contestação, comparação entre grupos e reações quando a ordem é quebrada.

Também é útil comparar atores. Uma mesma mudança pode aumentar percepção de justiça para quem espera e reduzi-la para quem perde prioridade.

A pergunta arqueológica central é: **o que faz esta ordem de distribuição parecer aceitável — e para quem?**

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Justiça |
| **Eixo** | Baixa ↔ alta percepção de equidade |
| **Definição operacional** | Grau em que regras, tratamento e distribuição são percebidos como equitativos pelos atores envolvidos |
| **Como observar** | Aceitação de regras, percepção de favoritismo, contestação, confiança e comparação entre grupos |
| **O que não mede sozinho** | Correção ética objetiva, legalidade ou legitimidade institucional da decisão |
| **Trade-offs principais** | Igualdade formal pode conflitar com equidade; regras simples podem ser previsíveis e ainda inadequadas ao contexto |
| **Artefatos-chave** | [[03 artefatos/Fila|Fila]], [[03 artefatos/Agendamento|Agendamento]] |
| **Conceitos relacionados** | [[01 conceitos/Justica Procedimental|Justiça procedimental]], [[01 conceitos/Distribuicao de Escassez|Distribuição de escassez]] |
| **Genealogias relacionadas** | [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]] |

## Referências

[^1]: Tyler, Tom R. A tradição de justiça procedimental enfatiza recorrente­mente voz, neutralidade, respeito e confiabilidade como dimensões relevantes para a percepção de tratamento e decisão justos. O conceito detalhado está registrado em [[01 conceitos/Justica Procedimental|Justiça procedimental]].