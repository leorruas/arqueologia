---
title: "Sincronização"
type: "conceito"
status: "publicado"
origem: "adaptação"
grau: "debatido"
tags:
  - design/conceito
  - arqueologia
---

# Sincronização

Duas pessoas não precisam fazer a mesma coisa para estarem sincronizadas. Basta que suas ações dependam umas das outras em tempos compatíveis: o passageiro chega antes do embarque fechar, o médico encontra o paciente no horário reservado, uma equipe executa etapas numa sequência que evita conflito.

Neste projeto, **sincronização** é uma adaptação conceitual para investigar artefatos que tornam relações temporais e operacionais compartilháveis. A sociologia do tempo oferece uma base importante. Eviatar Zerubavel mostrou como horários e calendários organizam socialmente duração, sequência, timing, ritmo e recorrência de eventos.[^1]

Nossa lente amplia essa discussão para perguntar como objetos, interfaces e serviços reduzem a incerteza sobre **quando cada parte precisa agir em relação às outras**.

## Tempo compartilhado precisa de referências compartilhadas

O [[03 artefatos/Calendário|Calendário]] permite endereçar o futuro por datas reconhecidas coletivamente. O [[03 artefatos/Agendamento|Agendamento]] ocupa partes desse futuro com compromissos específicos. O [[03 artefatos/Cartao de Embarque|Cartão de embarque]] conecta horário, voo, portão e passageiro numa credencial operacional.

Esses artefatos não tornam pessoas biologicamente sincronizadas. Criam convenções externas que permitem coordenar ações mesmo quando cada indivíduo possui prioridades e ritmos próprios.

A coordenação depende, portanto, menos de sentir o mesmo tempo e mais de compartilhar referências suficientemente estáveis.

## A fila sincroniza sem relógio preciso

[[03 artefatos/Fila|Fila]] mostra que sincronização também pode acontecer por sequência, não apenas por horário.

Cada pessoa sabe quem está antes e depois sem necessariamente saber a hora exata do atendimento. A ordem espacial substitui parte da necessidade de previsão temporal.

Essa observação amplia o conceito: sincronizar pode significar alinhar **ordem, estado ou dependência**, e não apenas colocar eventos na mesma hora.

Por isso a genealogia [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]] reúne calendários, filas, agendamentos, cartões de embarque e Kanban. Eles não compartilham uma história única; compartilham a operação de tornar dependências visíveis o suficiente para ação coletiva.

## Sincronizar reduz variabilidade e pode criar rigidez

Uma agenda reduz incerteza porque define quando algo deve acontecer. Um horário de transporte permite que diferentes pessoas organizem ações em torno dele. Um [[03 artefatos/Checklist|Checklist]] pode coordenar a sequência de verificações entre membros de uma equipe.

Esse ganho aparece na variável [[02 variaveis/Variabilidade|Variabilidade]]: sistemas de sincronização frequentemente reduzem diferenças de timing e sequência que atrapalhariam coordenação.

Mas a mesma regularidade pode virar rigidez. Zerubavel chama atenção para conveniências e constrangimentos produzidos por schedules. Um calendário compartilhado facilita encontro e também obriga corpos diferentes a caber em unidades de tempo padronizadas.[^1]

Sincronização não é, portanto, sinônimo de harmonia.

## Coordenar também é decidir quem espera

Há uma dimensão distributiva. Quando duas atividades não podem acontecer simultaneamente, alguma regra define prioridade, espera ou reserva.

Fila, agendamento e embarque distribuem não apenas tempo, mas poder sobre o tempo. Quem define o horário? Quanto atraso é tolerado? Quem sofre a consequência quando uma parte não cumpre o ritmo esperado?

Isso aproxima sincronização de [[01 conceitos/Distribuicao de Escassez|Distribuição de escassez]] e [[02 variaveis/Justica|Justiça]]. Um sistema pode ser extremamente sincronizado e ainda distribuir custos temporais de forma desigual.

A pergunta arqueológica é então mais precisa: **que dependências este artefato tornou coordenáveis e quem precisou adaptar seu próprio tempo para que o sistema funcionasse?**

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Sincronização |
| **Origem** | Adaptação |
| **Grau de consolidação** | Debatido; apoia-se em sociologia do tempo e teorias de coordenação, com uso transversal específico no projeto |
| **Formulação associada a** | Arqueologia do Design; Eviatar Zerubavel e estudos de organização social do tempo |
| **Área principal** | Design de serviços / sociologia / IHC |
| **Distinção central** | Sincronizar não exige fazer a mesma coisa ao mesmo tempo; exige tornar timing, sequência ou dependências compatíveis |
| **O que ajuda a explicar** | Como artefatos tornam referências temporais e estados compartilháveis entre atores |
| **O que não explica sozinho** | Se a coordenação é justa, flexível ou desejável para todos os envolvidos |
| **Artefatos-chave** | [[03 artefatos/Calendário|Calendário]], [[03 artefatos/Fila|Fila]], [[03 artefatos/Agendamento|Agendamento]], [[03 artefatos/Cartao de Embarque|Cartão de embarque]], [[03 artefatos/Checklist|Checklist]] |
| **Variáveis relacionadas** | [[02 variaveis/Atencao|Atenção]], [[02 variaveis/Justica|Justiça]], [[02 variaveis/Variabilidade|Variabilidade]] |
| **Genealogias relacionadas** | [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]] |

## Referências

[^1]: Zerubavel, Eviatar. “Timetables and Scheduling: On the Social Organization of Time”. *Sociological Inquiry*, 1976. Analisa horários e scheduling como instituições que regulam duração, sequência, timing e ritmo da vida social.