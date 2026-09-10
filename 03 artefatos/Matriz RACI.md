---
title: "Matriz RACI"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Matriz RACI

Muitos conflitos organizacionais parecem discordâncias sobre o trabalho, mas começam numa pergunta mais básica: **quem pode decidir o quê?**

Duas pessoas acreditam ser responsáveis pela mesma entrega. Uma terceira executa o trabalho sem saber quem pode aprová-lo. Alguém precisa ser consultado, mas só descobre a decisão depois. Quando o projeto falha, a ambiguidade reaparece em outra forma: ninguém sabe de quem era a responsabilidade final.

A **Matriz RACI** transforma essa rede de expectativas numa superfície visível. Em uma dimensão aparecem tarefas ou entregas. Na outra, pessoas ou papéis. Em cada cruzamento, uma letra indica o tipo de participação: Responsible, Accountable, Consulted ou Informed.

É uma tentativa de diagramar poder antes que ele precise ser negociado a cada decisão.

## Antes do acrônimo, havia o problema da responsabilidade

A origem exata da RACI é difícil de estabelecer. Não há um inventor confiavelmente documentado nem um momento único de criação do acrônimo. A ferramenta pertence a uma linhagem mais ampla de *responsibility charting* e *responsibility assignment matrices* desenvolvida na gestão e engenharia de projetos ao longo do século XX.[^1]

Por isso, a antiga datação do vault em “décadas de 1950 e 1960” deve ser tratada como contexto de desenvolvimento de matrizes de responsabilidade, e não como nascimento comprovado da RACI tal como é usada hoje.

A geometria do artefato é anterior à sigla: atividades em um eixo, atores no outro, códigos nas células. Essa forma permite visualizar algo que um organograma sozinho não resolve.

O organograma diz onde alguém está na estrutura. A matriz pergunta **qual relação essa pessoa possui com cada trabalho específico**.

Essa diferença é fundamental em projetos transversais. A hierarquia formal pode permanecer igual enquanto responsabilidade, consulta e execução variam de entrega para entrega.

## Quatro letras para separar coisas que organizações confundem

A RACI tenta decompor participação em quatro papéis.

**Responsible** é quem realiza o trabalho. **Accountable** é quem responde pela entrega e possui a palavra final sobre ela. **Consulted** identifica quem precisa contribuir antes da decisão ou execução. **Informed** registra quem precisa receber informação sem participar necessariamente da escolha.

As traduções variam e podem gerar confusão, especialmente entre *Responsible* e *Accountable*. O valor do modelo não depende tanto da palavra portuguesa escolhida quanto da separação entre **executar** e **responder pela decisão ou resultado**.

Essa distinção reduz um custo transacional recorrente. Em vez de renegociar a cada etapa quem deve agir, aprovar ou ser ouvido, o projeto tenta estabilizar essas relações antecipadamente.

É por isso que a RACI se aproxima da genealogia [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]]. Assim como o [[03 artefatos/Kanban|Kanban]] torna fluxo visível, a matriz torna a distribuição de participação visível.

Mas ela mostra outra coisa: não apenas onde está o trabalho, mas onde está a autoridade.

## Tornar o poder visível não significa torná-lo justo

Uma matriz pode reduzir ambiguidade e ainda registrar uma estrutura ruim com perfeita clareza.

Se todas as decisões possuem a mesma pessoa como Accountable, a RACI não descentralizou poder. Apenas tornou a centralização legível. Se usuários afetados por uma política aparecem apenas como Informed, a matriz pode explicitar uma assimetria sem corrigi-la.

Essa é uma propriedade importante do artefato. **Visibilidade não é distribuição.**

A RACI pode fortalecer autonomia quando deixa claro que determinadas decisões pertencem realmente a equipes locais. Também pode cristalizar hierarquias e transformar relações negociáveis em fronteiras aparentemente naturais.

Há ainda aquilo que a matriz não consegue registrar bem: influência informal, confiança, reputação, barganhas políticas e pessoas que têm poder sem aparecer oficialmente como aprovadoras. Uma organização pode ter uma RACI impecável no documento e operar por outra matriz invisível na prática.

Nesse sentido, o artefato funciona também como diagnóstico. Quando todos sabem que determinada pessoa precisa aprovar algo apesar de a matriz dizer o contrário, a distância entre desenho formal e comportamento real se torna informação sobre a organização.

## A responsabilidade também pode virar mecanismo de culpa

A clareza prometida pela RACI tem um lado defensivo.

Depois de um problema, a matriz pode ser usada retrospectivamente para localizar quem “era o A” e transformar uma ferramenta de coordenação em instrumento de responsabilização individual. Isso incentiva pessoas a negociar letras não apenas para melhorar o fluxo, mas para reduzir exposição futura.

Quanto mais detalhada a matriz, maior também o risco de burocratização. Equipes pequenas podem gastar mais tempo discutindo classificações do que resolvendo o problema que justificou a ferramenta.

O artefato funciona melhor quando a ambiguidade de papéis é um custo real. Em trabalhos altamente fluidos, atualizar uma tabela para cada mudança pode produzir uma representação que envelhece mais rápido do que o sistema que tenta descrever.

A hipótese do vault de que RACI “enfraquece quem se esquiva de responsabilidades” também merece refinamento. A ferramenta pode tornar evasão mais difícil, mas não resolve sozinha incentivos, capacidade ou conflitos. Uma pessoa marcada como Responsible pode continuar sem autoridade, tempo ou recursos para executar.

Claridade sobre responsabilidade não cria automaticamente condições para cumpri-la.

## Uma interface para a organização olhar para si mesma

A força da matriz talvez esteja menos nas quatro letras do que na conversa necessária para preenchê-las.

Quando duas áreas querem ser Accountable pela mesma decisão, o conflito já existia antes da planilha. A RACI apenas o torna difícil de ignorar. Quando ninguém aceita uma responsabilidade, revela um vazio que poderia permanecer escondido até a falha.

Isso aproxima a matriz do [[03 artefatos/Workshop|Workshop]] e do [[01 conceitos/Servico de Reflexao|serviço de reflexão]]. O documento final é útil, mas parte do valor está no processo de tornar explícitas expectativas incompatíveis.

Ela também é parente do [[03 artefatos/Princípio|Princípio]] por contraste. Um princípio permite julgamento local sem definir previamente todas as responsabilidades. A RACI faz o movimento oposto: explicita antecipadamente quem ocupa qual papel em um conjunto de decisões.

A questão de design é escolher quanta coordenação precisa ser estabilizada antes e quanta deve permanecer negociável durante o trabalho.

A hipótese deste projeto é que a RACI é uma **diagramação institucional de pessoas em torno de decisões**. Assim como o [[03 artefatos/Grid|Grid]] organiza elementos gráficos e a [[03 artefatos/Fila|Fila]] organiza corpos em relação à ordem de atendimento, a matriz organiza papéis em relação ao fluxo de autoridade e execução.

Seu melhor resultado talvez não seja eliminar conflito. É fazer com que o conflito aconteça no momento em que ainda pode ser discutido, e não apenas depois que alguma coisa deu errado.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Matriz RACI |
| **Período** | Linhagens de matrizes de responsabilidade se desenvolvem no século XX; origem específica do acrônimo RACI permanece incerta |
| **Autoria** | Difusa; não há inventor único confiavelmente documentado |
| **Produto ou contexto** | Não explicitado na ficha anterior. |
| **Problema original** | Reduzir ambiguidade sobre quem executa, responde, deve ser consultado ou informado em cada atividade ou entrega |
| **Mundo antes** | Não explicitado na ficha anterior. |
| **Invenção** | Sem ocorrência única estabelecida; deriva de práticas mais amplas de responsibility charting e responsibility assignment matrices |
| **Refinamento** | Consolidação das quatro categorias R, A, C e I e incorporação a métodos de gestão de projetos e governança |
| **Popularização** | Gestão de projetos, consultorias, governança, tecnologia e organizações matriciais |
| **Padronização** | Planilhas e matrizes tarefa × papel usadas em planejamento e definição de responsabilidades |
| **Hipótese de design** | Tornar fronteiras de responsabilidade visíveis reduz o custo de renegociá-las durante o trabalho |
| **Comportamento aproveitado** | Capacidade de coordenar expectativas quando papéis e alçadas se tornam explícitos e compartilhados |
| **Comportamento produzido** | Negociar antecipadamente execução, decisão, consulta e comunicação em torno das entregas |
| **Relação de poder** | Pode distribuir autonomia ou apenas tornar hierarquias existentes mais explícitas; quem define o Accountable define onde está a palavra final |
| **Consequências inesperadas** | Custo invisível: Rigidez, manutenção da matriz, falsa clareza diante de influência informal e uso defensivo para transferir culpa |
| **Destino ou transformação posterior** | Não explicitado na ficha anterior. |
| **Conceitos relacionados** | Não explicitado na ficha anterior. |
| **Variáveis relacionadas** | Não explicitado na ficha anterior. |
| **Genealogia** | Família de ideias: Artefatos de autorização e coordenação |
| **Parentes** | organograma, matriz de decisão, alçadas, [[03 artefatos/Kanban|Kanban]], [[03 artefatos/Workshop|Workshop]], [[03 artefatos/Princípio|Princípio]] |
| **Princípio de design revelado** | Não explicitado na ficha anterior. |
| **Questão em aberto** | Quanto de responsabilidade precisa ser definido antecipadamente antes que a clareza comece a destruir a colaboração adaptativa? |

## Referências

[^1]: A origem precisa da RACI é pouco documentada. Fontes de história da ferramenta a situam como cristalização de práticas de *responsibility charting* e *responsibility assignment matrices* desenvolvidas em meados do século XX, sem atribuição segura a um inventor único. A data deve ser tratada como aproximada, não como ocorrência inaugural comprovada.

[^2]: Project Management Institute. Literatura de gestão de projetos sobre *Responsibility Assignment Matrix* (RAM). RACI é uma das formas mais difundidas de codificar responsabilidades dentro dessa família de matrizes.