---
title: "Memória distribuída"
type: "conceito"
status: "publicado"
origem: "literatura"
grau: "consolidado"
tags:
  - design/conceito
  - arqueologia
---

# Memória distribuída

Uma pessoa pode “lembrar” de uma reunião sem guardar sua data na cabeça: basta que o calendário a preserve. Uma equipe pode “lembrar” a ordem de um processo porque cartões, posições e registros mantêm esse estado visível. Nesses casos, aquilo que chamamos de memória não está contido apenas num indivíduo.

Este projeto usa **memória distribuída** como uma porta de entrada para a tradição mais ampla da **cognição distribuída**, associada especialmente ao trabalho de Edwin Hutchins. Em *Cognition in the Wild*, Hutchins desloca a unidade de análise para além da mente individual e observa sistemas cognitivos formados por pessoas, artefatos, representações e práticas sociais.[^1]

A expressão usada no vault é mais estreita que a teoria inteira: interessa-nos especialmente como informações necessárias para agir permanecem disponíveis no ambiente, em objetos ou em outras pessoas.

## Lembrar pode significar saber onde olhar

Um [[03 artefatos/Post-it|Post-it]] reduz a necessidade de manter uma intenção continuamente ativa na memória. O bilhete colocado no monitor ou na geladeira usa posição física como parte do mecanismo de lembrança.

O [[03 artefatos/Calendário|Calendário]] faz algo ainda maior: permite que compromissos futuros existam numa estrutura externa compartilhada. Não é preciso que todos mantenham mentalmente as mesmas datas; precisam saber consultar a mesma referência.

O [[03 artefatos/Favorito Bookmark|Favorito / bookmark]] torna literal outra forma de memória distribuída: não é preciso recordar o endereço nem reconstruir a sequência de links se o navegador preserva uma referência de retorno. O sistema não guarda necessariamente aquilo de que queremos lembrar; pode guardar apenas **onde procurar de novo**.

O [[03 artefatos/Badge de notificacao|Badge de notificação]] distribui memória em outra direção. Em vez de o usuário registrar deliberadamente uma intenção futura, o sistema preserva um sinal de que existe algo ainda não tratado. Isso mostra que externalizar memória também levanta uma pergunta de agência: **quem decidiu o que deveria continuar sendo lembrado?**

Na [[03 artefatos/Fila|Fila]], a posição dos corpos preserva a ordem de chegada. Não existe necessariamente um indivíduo central memorizando toda a sequência. A configuração espacial carrega parte da informação necessária para o sistema funcionar.

Esses casos são diferentes, mas revelam a mesma mudança de unidade: para explicar comportamento, pode ser insuficiente olhar apenas para aquilo que existe “na cabeça” de cada pessoa.

## Externalizar memória não enfraquece automaticamente a memória interna

A nota anterior afirmava que artefatos como Post-it enfraquecem hábitos de memorização. Isso pode acontecer em situações específicas, mas não é consequência necessária.

Ferramentas externas também podem liberar recursos cognitivos para outras tarefas. Um piloto que consulta uma checklist não precisa demonstrar competência lembrando cada item sem apoio; pode usar atenção para interpretar condições anômalas. Um calendário permite coordenar mais compromissos do que seria razoável guardar apenas mentalmente.

O ponto não é que objetos “substituem o cérebro”. É que atividade cognitiva pode ser reorganizada entre componentes diferentes do sistema.

Essa formulação evita confundir cognição distribuída com [[01 conceitos/Autodeterminação|autonomia]], “embodied cognition” ou a ideia genérica de que objetos são extensões da mente. São tradições relacionadas, mas não equivalentes.

## O ambiente também pode esquecer por nós

Distribuir memória cria dependências. Quando uma informação passa a existir principalmente num calendário, banco de dados, protocolo ou aplicativo, perder acesso a esse suporte pode significar perder parte da capacidade de agir.

Isso conecta memória distribuída à [[02 variaveis/Permanencia|Permanência]] e à [[02 variaveis/Previsibilidade Visual|Previsibilidade visual]]. Não basta registrar: o estado precisa sobreviver e continuar interpretável.

O [[03 artefatos/Numero de Protocolo|Número de protocolo]] é um exemplo institucional. A demanda deixa de depender da lembrança de um atendente porque o sistema guarda sua identidade. Mas isso também significa que o cidadão passa a depender da infraestrutura capaz de reconhecer aquele identificador.

Bookmark e badge mostram duas falhas complementares. Uma referência pode sobreviver enquanto seu destino desaparece. Uma pendência pode continuar visível mesmo depois de perder relevância. Externalizar memória não elimina a necessidade de atualizar, descartar e interpretar aquilo que o ambiente decidiu conservar.

Externalizar memória não elimina vulnerabilidade. Desloca onde a vulnerabilidade mora.

## A cognição pode pertencer ao sistema

Hutchins estudou navegação naval para mostrar algo mais radical do que simples uso de anotações: equipes, instrumentos e representações podem formar um sistema cognitivo com propriedades que nenhum integrante possui isoladamente.[^1]

Isso é particularmente útil para design de serviços. Uma organização “sabe” coisas por meio de formulários, bancos de dados, pessoas, procedimentos e interfaces. Quando esses elementos não se conectam, a instituição pode parecer esquecer repetidamente o que cada parte individual já sabia.

A [[03 artefatos/LLM Wiki|LLM Wiki]] oferece um caso contemporâneo particularmente interessante para esta lente. Nela, o suporte externo não apenas conserva informação para consulta posterior: um agente recebe a tarefa de resumir, relacionar e reorganizar representações persistentes entre consultas. Isso não demonstra que o sistema “lembra” ou “pensa” do mesmo modo que uma pessoa. O que muda é a divisão funcional do trabalho: parte da manutenção da memória externa passa a ser executada pela própria infraestrutura.

Esse deslocamento torna ainda mais importante observar a unidade de análise. Se uma resposta futura depende simultaneamente de fontes brutas, páginas sintetizadas, regras do agente, histórico de edições e julgamento humano, atribuir o resultado apenas ao modelo ou apenas ao usuário esconde o sistema que tornou aquela resposta possível.

A pergunta de design deixa então de ser apenas “como ajudar o usuário a lembrar?” e passa a ser: **onde a informação precisa permanecer — quem decidiu que ela deveria permanecer e quem pode transformá-la — para que o sistema inteiro consiga continuar agindo?**

## Ficha do conceito

| Campo | Registro |
|---|---|
| **Conceito** | Memória distribuída |
| **Origem** | Literatura; uso do projeto apoiado na tradição de cognição distribuída |
| **Grau de consolidação** | Consolidado como família de ideias, embora “memória distribuída” seja aqui um recorte específico |
| **Formulação associada a** | Edwin Hutchins / cognição distribuída |
| **Área principal** | Ciência cognitiva / antropologia cognitiva / IHC |
| **Distinção central** | Informação necessária para agir pode estar distribuída entre pessoas, objetos, representações e ambiente, não apenas armazenada internamente por um indivíduo |
| **O que ajuda a explicar** | Como artefatos preservam estados, intenções e referências que sustentam ação coletiva e individual |
| **O que não explica sozinho** | Qualidade da memória individual, embodied cognition, se externalização sempre melhora desempenho ou se sistemas artificiais possuem memória/cognição no mesmo sentido humano |
| **Artefatos-chave** | [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Calendário|Calendário]], [[03 artefatos/Favorito Bookmark|Favorito / bookmark]], [[03 artefatos/Badge de notificacao|Badge de notificação]], [[03 artefatos/Fila|Fila]], [[03 artefatos/Numero de Protocolo|Número de protocolo]], [[03 artefatos/LLM Wiki|LLM Wiki]] |
| **Variáveis relacionadas** | [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Previsibilidade Visual|Previsibilidade visual]] |
| **Genealogias relacionadas** | [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]], [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]] |

## Referências

[^1]: Hutchins, Edwin. *Cognition in the Wild*. MIT Press, 1995. A obra analisa navegação como sistema cognitivo distribuído entre pessoas, práticas, artefatos e representações e propõe deslocar a unidade de análise além do indivíduo.
