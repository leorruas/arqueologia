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

Uma anotação pode durar minutos; um protocolo pode atravessar décadas. Um arquivo pode sair da tela e continuar recuperável. **Permanência** mede quanto tempo um estado, registro, objeto ou sinal tende a continuar disponível sem precisar ser recriado.

**Eixo:** efêmero ↔ persistente.

Permanência não é sinônimo de qualidade. Há coisas que funcionam porque desaparecem e coisas que só funcionam porque sobrevivem à troca de pessoas, lugares e dispositivos.

## Durar e permanecer visível são coisas diferentes

[[03 artefatos/Archive|Archive]] ajuda a separar duas dimensões frequentemente confundidas. Uma mensagem pode deixar o primeiro plano e continuar existindo. A permanência está na recuperabilidade, não na visibilidade constante.

[[03 artefatos/Botao Salvar|Botão Salvar]] torna explícita outra passagem: um estado de trabalho que poderia desaparecer é registrado para sobreviver ao encerramento da sessão ou do aplicativo.

[[03 artefatos/Número de Protocolo|Número de protocolo]] permite que uma demanda continue identificável enquanto atravessa pessoas e setores. [[03 artefatos/Assinatura|Assinatura]] liga autoria ou responsabilidade a um registro que produzirá efeitos posteriores.

Esses artefatos aparecem juntos na genealogia [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]] porque deslocam para suportes externos parte da tarefa de “continuar existindo”.

## Efemeridade também pode ser uma propriedade útil

[[03 artefatos/Post-it|Post-it]] aceita uma memória material de baixa durabilidade relativa: pode ser movida, descartada ou substituída com pouco custo. Essa fragilidade é parte de sua utilidade em situações provisórias.

Uma projeção luminosa, discutida em [[01 conceitos/Peles Temporarias da Arquitetura|Peles temporárias da arquitetura]], pode existir apenas enquanto determinada condição técnica é mantida. Sua baixa permanência permite intervenção sem modificar a estrutura material com a mesma intensidade.

Projetar permanência é, portanto, escolher um horizonte temporal adequado ao tipo de compromisso.

## A responsabilidade pela permanência pode mudar de lugar

No modelo clássico do botão Salvar, o usuário precisa decidir que aquele estado merece persistir. Sistemas de autosave transferem parte dessa responsabilidade para a infraestrutura.

Essa mudança parece pequena, mas altera comportamento. Se a persistência acontece continuamente, “salvar” deixa de ser evento consciente e passa a ser condição presumida.

Isso conecta Permanência à [[01 conceitos/Continuidade de Acesso|Continuidade de acesso]] e à [[02 variaveis/Expectativa de Disponibilidade|Expectativa de disponibilidade]]. Quanto mais registros persistem e permanecem recuperáveis, mais usuários podem esperar que nada se perca.

## Persistir demais também tem custo

A permanência protege contra perda, mas pode criar acúmulo, vigilância, exposição e dificuldade de esquecimento.

Históricos de atividade, logs e mensagens antigas podem sobreviver muito além do contexto em que foram produzidos. O usuário pode acreditar que algo era temporário enquanto a infraestrutura o preserva.

Por isso, o eixo não pergunta apenas “quanto tempo dura?”. Pergunta também **quem controla a duração e quem consegue encerrar essa permanência**.

A relação com [[02 variaveis/Reversibilidade|Reversibilidade]] é sutil. Um registro pode ser altamente permanente e ainda admitir versões reversíveis; outro pode ser efêmero e irreversível depois de desaparecer.

## Como observar

Alguns sinais: tempo de existência, recuperabilidade, esforço para preservar, presença de versionamento, controle sobre exclusão, dependência de manutenção e sobrevivência a mudanças de sessão, dispositivo ou equipe.

Também vale distinguir permanência material, informacional e institucional. Um papel pode durar fisicamente, mas perder valor jurídico; uma regra pode continuar institucionalmente mesmo depois de o suporte original desaparecer.

A pergunta arqueológica é: **o que precisa acontecer para que isto deixe de existir — e quem tem poder para fazê-lo?**

## Ficha da variável

| Campo | Registro |
|---|---|
| **Variável** | Permanência |
| **Eixo** | Efêmero ↔ persistente |
| **Definição operacional** | Duração e recuperabilidade de um estado, objeto, sinal ou registro |
| **Como observar** | Tempo de existência, esforço de preservação, recuperabilidade, versionamento e controle sobre exclusão |
| **O que não mede sozinho** | Visibilidade, importância, reversibilidade ou valor histórico |
| **Trade-offs principais** | Segurança contra perda ↔ direito ao desaparecimento; continuidade ↔ acúmulo de rastros |
| **Artefatos-chave** | [[03 artefatos/Botao Salvar|Botão Salvar]], [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Archive|Archive]], [[03 artefatos/Número de Protocolo|Número de protocolo]] |
| **Conceitos relacionados** | [[01 conceitos/Memoria Distribuida|Memória distribuída]], [[01 conceitos/Continuidade de Acesso|Continuidade de acesso]] |
| **Genealogias relacionadas** | [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]], [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] |

## Referências

Esta variável é uma operacionalização do projeto. Estudos específicos sobre memória externa, arquivamento, persistência digital e direito ao apagamento devem ser citados nos artefatos quando sustentarem afirmações históricas ou jurídicas concretas.