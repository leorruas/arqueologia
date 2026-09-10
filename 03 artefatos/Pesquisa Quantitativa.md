---
title: "Pesquisa quantitativa"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
  - pesquisa
  - design/servicos
---

# Pesquisa quantitativa

Uma entrevista pode revelar que uma situação existe. Ela não consegue, sozinha, dizer com que frequência aquela situação aparece numa população, como se distribui entre grupos ou se duas variáveis se movem juntas de forma consistente.

A **pesquisa quantitativa** nasce de outra necessidade: transformar diferenças observadas no mundo em medidas comparáveis e permitir inferências que vão além de cada caso individual.

Isso parece apenas “colocar números” na pesquisa. Não é. Antes de contar, é preciso decidir **o que conta como a mesma coisa**.

Esse é o primeiro gesto de design do método.

## Contar exige estabilizar categorias

Censos, estatísticas administrativas e questionários padronizados são muito anteriores ao UX Research. No caso dos Estados Unidos, o censo federal existe desde 1790; ao longo do século XIX, formulários e categorias foram sendo progressivamente padronizados para permitir comparação entre pessoas e lugares.[^1]

O interesse aqui não está em construir uma origem única da pesquisa quantitativa. Estatística, demografia, economia, psicometria, epidemiologia e pesquisa de opinião formaram tradições distintas. O parentesco está numa operação recorrente: transformar características, respostas ou eventos em unidades que possam ser agregadas.

Essa transformação permite enxergar padrões invisíveis no caso individual. Mas também produz perda.

Se uma pesquisa pergunta “qual foi sua principal dificuldade?” e oferece cinco alternativas, cada respondente precisa traduzir sua experiência para uma categoria já definida pelo pesquisador. Isso reduz ambiguidade e permite comparação. Ao mesmo tempo, experiências que não cabem nessas categorias podem desaparecer estatisticamente.

Por isso, quantificação não vem depois da interpretação. **A interpretação começa na decisão sobre o que será medido.**

## Mais respostas não significam automaticamente mais verdade

A força da pesquisa quantitativa não está apenas no tamanho da amostra. Está na relação entre população, amostragem, instrumento, medição e análise.

Pesquisas por amostragem probabilística tentam permitir inferência da amostra para uma população maior. Organizações como o Pew Research Center tratam explicitamente de erros de cobertura, amostragem, não resposta, medição e processamento — lembrete importante de que um número pode parecer preciso e ainda representar mal aquilo que pretende medir.[^2]

O questionário também é uma interface. Ordem das perguntas, palavras escolhidas, escalas, opções de resposta e contexto podem alterar o que as pessoas conseguem ou escolhem responder.[^3]

Assim, a pesquisa quantitativa não remove a subjetividade do pesquisador; ela **formaliza decisões suficientes para que possam ser repetidas, comparadas e criticadas**.

Essa característica a aproxima de [[01 conceitos/Justificabilidade|justificabilidade]]. Uma afirmação como “a maioria dos usuários tem dificuldade nesta etapa” pode ser examinada perguntando qual era a população, como a amostra foi selecionada, o que significava “dificuldade” no instrumento e qual incerteza existe na estimativa.

## O quantitativo responde perguntas que o qualitativo não deveria fingir responder

A [[03 artefatos/Entrevista Qualitativa|entrevista qualitativa]] é boa para descobrir linguagem, mecanismos, exceções e categorias inesperadas. A pesquisa quantitativa é especialmente útil quando essas categorias precisam ser comparadas em escala.

Suponha que oito entrevistas revelem três razões diferentes para abandono de um serviço. Isso é suficiente para saber que essas razões existem nos casos estudados. Não é suficiente para afirmar que uma delas é “a principal razão dos usuários”.

Um survey pode testar a distribuição dessas razões numa amostra mais ampla. Dados comportamentais podem mostrar em qual etapa o abandono acontece. Experimentos podem testar se alterar uma variável produz efeito mensurável sob condições controladas.

A diferença não é “qualitativo explica por quê e quantitativo explica quanto” de maneira absoluta. Entrevistas também podem descrever frequência percebida; estatísticas podem apoiar explicações causais em desenhos adequados. A distinção mais útil é outra: **o qualitativo tolera categorias em transformação; o quantitativo precisa estabilizar categorias para compará-las**.

Isso faz com que os dois métodos possam trabalhar em sequência. Pesquisa qualitativa pode descobrir o que vale medir. Pesquisa quantitativa pode testar distribuição e magnitude. Resultados quantitativos inesperados podem, por sua vez, gerar novas entrevistas.

## JTBD contém uma disputa sobre como medir um Job

A relação com [[03 artefatos/Jobs to Be Done|Jobs to Be Done]] é especialmente reveladora porque diferentes linhagens do framework usam evidência de maneiras distintas.

Na tradição associada a Christensen e Bob Moesta, a pesquisa se apoia fortemente em entrevistas retrospectivas de mudança. O objetivo é reconstruir circunstâncias e forças que levaram alguém a “contratar” uma nova solução.

Na abordagem de Anthony Ulwick, o **Outcome-Driven Innovation (ODI)** tenta converter o Job em uma estrutura mensurável. O trabalho é decomposto em etapas e necessidades são formuladas como *desired outcomes*: critérios que clientes usam para avaliar sucesso.[^4]

Ulwick insiste que descobrir segmentos de necessidades e quais outcomes estão subatendidos requer pesquisa quantitativa estatisticamente válida. Em sua abordagem, respondentes avaliam outcomes segundo dimensões como importância e satisfação, permitindo comparar necessidades e procurar oportunidades de inovação.[^5]

Isso produz uma diferença conceitual importante.

Uma Switch Interview pergunta algo próximo de: **o que aconteceu para você mudar?**

ODI pergunta algo próximo de: **quais resultados importam e onde o mercado está mais insatisfeito com sua capacidade de alcançá-los?**

As duas perguntas podem falar do mesmo domínio e produzir artefatos muito diferentes.

JTBD, portanto, não deveria ser reduzido a “fazer entrevistas”. Há uma disputa interna sobre se o Job é melhor compreendido como narrativa de progresso e mudança, como processo funcional mensurável ou como combinação dos dois.

## O número também pode esconder a experiência

Uma média pode melhorar enquanto um grupo específico piora. Uma taxa de conversão pode subir porque pessoas que encontravam dificuldades abandonaram o serviço antes de entrar na amostra. Uma escala de satisfação pode esconder que respondentes interpretaram a pergunta de formas diferentes.

Essa é a relação de poder da quantificação: aquilo que recebe uma medida torna-se mais fácil de comparar, priorizar e governar. Aquilo que não entra no instrumento pode perder visibilidade.

No [[03 artefatos/Customer Journey Map|Customer Journey Map]], dados quantitativos podem mostrar onde estão concentrações de abandono, demora ou satisfação. Mas, se o mapa for organizado apenas pelo que já possui métrica, experiências sem telemetria podem desaparecer da representação.

Por isso, números deveriam aumentar a capacidade de contestar uma hipótese, não fechar prematuramente a investigação.

O melhor uso da pesquisa quantitativa talvez não seja transformar pessoas em percentuais. É criar uma linguagem comum para perguntar: **isso que observamos em alguns casos é amplo, raro, concentrado, crescente ou diferente do que imaginávamos?**

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Pesquisa quantitativa |
| **Período** | Desenvolvimento distribuído ao longo de séculos em censos, estatística, demografia e ciências sociais; ampla incorporação a pesquisa de mercado, produto e UX no século XX e XXI |
| **Autoria** | Distribuída; não há inventor único |
| **Produto ou contexto** | Censos, surveys, experimentos, analytics, pesquisa de mercado, product analytics e UX Research |
| **Tipo(s) de design** | Relação disciplinar ainda não classificada. |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Comparar casos e inferir padrões, distribuição ou relações que não são observáveis com segurança a partir de poucos casos individuais |
| **Mundo antes** | Registros administrativos, descrições de casos, observação e contagens locais sem instrumentos ou categorias necessariamente comparáveis |
| **Invenção** | Não há momento único; diferentes tradições desenvolveram técnicas de contagem, amostragem, medição e inferência |
| **Refinamento** | Amostragem probabilística, questionários padronizados, psicometria, testes estatísticos, experimentação, weighting e analytics digitais |
| **Popularização** | Administração pública, ciência, pesquisa de opinião, marketing e, posteriormente, produto digital e UX |
| **Padronização** | Protocolos de amostragem, desenho de questionário, documentação metodológica e métodos estatísticos tornaram resultados mais comparáveis e auditáveis |
| **Hipótese de design** | Estabilizar categorias e medidas permite comparar experiências individuais e inferir padrões coletivos |
| **Comportamento aproveitado** | Responder a instrumentos padronizados e produzir rastros observáveis de ação |
| **Comportamento produzido** | Medir, comparar, segmentar, priorizar e acompanhar mudanças ao longo do tempo |
| **Relação de poder** | Quem define categorias, amostra e métricas define quais diferenças se tornam visíveis e governáveis |
| **Consequências inesperadas** | Precisão numérica pode produzir falsa certeza; médias podem apagar minorias e instrumentos podem medir categorias inadequadas com grande consistência |
| **Destino ou transformação posterior** | Painéis online, telemetria digital, experimentação contínua, causal inference, métricas em tempo real e combinação com métodos qualitativos |
| **Conceitos relacionados** | [[01 conceitos/Investigação|Investigação]], [[01 conceitos/Justificabilidade|Justificabilidade]], [[01 conceitos/Formulacao|Formulação]], [[01 conceitos/Distribuicao de Escassez|Distribuição de escassez]] |
| **Variáveis relacionadas** | [[02 variaveis/Variabilidade|Variabilidade]], [[02 variaveis/Justica|Justiça]], [[02 variaveis/Legitimidade Decisoria|Legitimidade decisória]] |
| **Genealogia** | Artefatos de investigação, medição e comparação |
| **Percurso(s)** | Ainda não integrado a um percurso editorial. |
| **Parentes** | [[03 artefatos/Entrevista Qualitativa|Entrevista qualitativa]], [[03 artefatos/Pergunta de Pesquisa|Pergunta de pesquisa]], [[03 artefatos/Customer Journey Map|Customer Journey Map]], [[03 artefatos/Jobs to Be Done|Jobs to Be Done]], questionário, censo e dashboard |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Tornar algo mensurável aumenta sua comparabilidade e governabilidade, mas toda medida depende de categorias que precisam continuar abertas à crítica |
| **Questão em aberto** | Como combinar escala e comparabilidade sem deixar que a facilidade de medir determine quais experiências merecem existir na investigação? |

## Referências

[^1]: U.S. Census Bureau. “Decennial Census of Population and Housing Questionnaires & Instructions”. https://www.census.gov/programs-surveys/decennial-census/technical-documentation/questionnaires.html. Documenta censos desde 1790 e a padronização de schedules/questionários impressos a partir do século XIX.

[^2]: Pew Research Center. “U.S. Survey Methodology”. https://www.pewresearch.org/u-s-survey-methodology/. Explicita uma abordagem de *total survey error*, incluindo cobertura, amostragem, não resposta, medição e processamento.

[^3]: Pew Research Center. “Public Opinion Polling Basics”. https://www.pewresearch.org/course/public-opinion-polling-basics/. Discute efeitos de formulação, clareza e capacidade dos respondentes sobre qualidade de perguntas de survey.

[^4]: Ulwick, Anthony W. “Jobs-to-be-Done”. https://anthonyulwick.com/jobs-to-be-done/. Descreve Jobs, desired outcomes e Outcome-Driven Innovation como estrutura para organizar e medir necessidades.

[^5]: Ulwick, Anthony W. “The Strategic Function of the Jobs-to-be-Done Needs Framework”. 2016. https://anthonyulwick.com/2016/12/22/strategic-function-jobs-done-needs-framework/. Defende explicitamente pesquisa quantitativa estatisticamente válida para identificar segmentos de necessidades e outcomes subatendidos no ODI.