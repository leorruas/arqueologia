---
title: "Undo Send"
type: "artefato"
tags:
  - design/artefato
  - arqueologia
---

# Undo Send

O **Undo Send** (Desfazer Envio) é um recurso de design de interação que concede ao usuário um intervalo curto de tempo (normalmente de 5 a 30 segundos) para cancelar a transmissão de uma mensagem ou e-mail recém-enviado.

## Ficha Técnica
- **Criador(es)**: Yishay Carmiel (desenvolvedor inicial no Google Labs)
- **Empresa/Fabricante**: [[empresas/Google|Google]] (Gmail)
- **Ano de Lançamento**: 2009 (como recurso experimental no Gmail Labs); consolidado em 2015.
- **Tipo de Design**: [[00 tipos de design/Design de Interface|Design de Interface]]

## História e Contexto de Criação
- **Demanda / Problema**: O envio de cartas físicas possuía etapas físicas rituais (escrever, envelopar, selar, ir até a caixa de correio) que concediam tempo para arrependimento ou revisão. No e-mail digital tradicional, clicar no botão "Enviar" disparava o envio instantâneo e definitivo da mensagem, gerando pânico social e arrependimento imediato por erros de anexo, destinatário incorreto ou palavras impulsivas.
- **Processo de Desenvolvimento**: A solução proposta não tentou criar um protocolo de comunicação para interceptar um e-mail já enviado. Em vez disso, o sistema atrasa artificialmente a transmissão do e-mail em background por alguns segundos, exibindo um botão de "Desfazer" na tela.

## Inovação e Impacto
- **Ampliação de Capacidade**: Amplia a segurança psicológica e o controle emocional sobre atos impulsivos de comunicação e falhas de digitação.
- **Enfraquecimento de Capacidade**: Enfraquece o processamento de transmissão de dados instantâneo na rede ao impor um delay forçado.
- **Comportamento Coletivo**: Criou o hábito mental de clicar em enviar contando com a existência de uma curta "janela de escape" antes da fixação da mensagem.
- **Linhagem e Descendência**: Descendente filosófico do comando Undo (Ctrl+Z) e de buffers de processamento temporários (filas de atraso técnico). Antepassado direto de recursos de desfazer envios de mensagens instantâneas (como Slack, WhatsApp e iMessage).
- **Custo Invisível**: Dependência de um intermediário tecnológico que retém e gerencia mensagens temporariamente, aumentando a complexidade da infraestrutura lógica de dados.

## Referências e Onde Encontrar
- **Produtos Relacionados**: Gmail, Slack, Apple Messages.

---

### Ficha Resumo

- **Nome do artefato**: Undo Send
- **Ano aproximado**: 2009
- **Pessoas ou equipes envolvidas**: Yishay Carmiel
- **Produto onde apareceu**: Gmail
- **Problema que resolvia**: O arrependimento imediato após o envio instantâneo de mensagens por erros de digitação, anexos ausentes ou impulsividade
- **Comportamento aproveitado**: O ato reflexivo de arrependimento humano e revisão logo após a execução de uma ação impulsiva
- **Comportamento criado**: O hábito mental de enviar mensagens sabendo que há uma "janela de escape" segura de alguns segundos
- **Impacto histórico**: Introduziu um buffer de tempo na interface para solucionar uma falha psicológica humana, sem precisar alterar a infraestrutura técnica de tráfego de rede
- **Conceitos relacionados**: [[02 variaveis/Reversibilidade|Reversibilidade]], [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Custo do Erro|Custo do Erro]], [[02 variaveis/Atrito Decisorio|Atrito Decisório]]
- **Artefatos relacionados para estudos futuros**: [[03 artefatos/Undo|Undo]], [[03 artefatos/Fila|Fila]]
