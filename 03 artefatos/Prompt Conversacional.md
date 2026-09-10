---
title: "Prompt conversacional"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Prompt conversacional

Uma caixa de texto vazia parece a interface mais simples possível. Quase nada foi decidido por quem desenhou a tela: não há catálogo completo de ações, sequência fixa de menus nem formulário capaz de antecipar todas as intenções.

Mas essa ausência de controles não elimina o design. Ela transfere parte dele para o usuário.

O **prompt conversacional** é interessante justamente por isso. Para pedir algo a um sistema generativo, a pessoa precisa transformar uma intenção ainda vaga em linguagem: explicar objetivo, contexto, restrições, exemplos, tom e formato. Aquilo que um formulário distribuiria em campos passa a precisar ser formulado dentro da própria conversa.

A caixa vazia é menos uma ausência de interface do que uma **metainterface para construir interfaces temporárias por linguagem**.

## Antes do prompt existir como conversa

Computadores já recebiam instruções textuais muito antes dos LLMs. Interfaces de linha de comando permitiam descrever operações por palavras e parâmetros, mas exigiam vocabulário e sintaxe definidos previamente. A flexibilidade era grande apenas dentro da gramática formal que o sistema conseguia interpretar.

Também houve sistemas conversacionais muito antes da IA generativa contemporânea. Joseph Weizenbaum desenvolveu ELIZA no MIT entre 1965 e 1966. Seu famoso script DOCTOR produzia a aparência de diálogo por regras de transformação textual, sem a capacidade semântica aberta dos modelos atuais.[^1]

ELIZA é um antecedente importante não porque o prompt de LLM descenda diretamente dele, mas porque revelou cedo uma propriedade da interação humana com linguagem computacional: **fluência conversacional pode levar pessoas a atribuir compreensão, intenção e presença a mecanismos muito mais limitados do que parecem**.

A barra de busca constitui outro parente funcional. Ela também recebe linguagem relativamente livre e tenta transformar formulação humana em recuperação de informação. O prompt generativo amplia a operação: em vez de apenas localizar um item existente, o sistema pode sintetizar, transformar e produzir respostas novas.

## Quando instrução virou uma capacidade central do modelo

A arquitetura Transformer apresentada em 2017 é uma parte importante da infraestrutura que possibilita os grandes modelos de linguagem contemporâneos, mas não “inventa o prompt”.[^2] Outro passo relevante foi o refinamento de modelos para seguir instruções expressas em linguagem natural.

Em 2022, o trabalho sobre InstructGPT descreveu modelos ajustados com feedback humano para responder melhor às intenções expressas em prompts.[^3] Em 30 de novembro do mesmo ano, o ChatGPT foi lançado publicamente com uma diferença de interface especialmente importante: o prompt não era uma solicitação isolada. Ele fazia parte de um diálogo capaz de manter contexto e receber perguntas e correções posteriores.[^4]

Isso transforma a interação. O usuário não precisa especificar tudo perfeitamente de uma vez. Pode dizer “não era isso”, adicionar uma restrição, pedir outro formato ou mostrar um exemplo.

O comando se torna negociação iterativa.

## A GUI mostrava possibilidades; a conversa exige imaginá-las

Menus e botões têm uma vantagem poderosa: mostram parte do que é possível fazer. Uma caixa vazia oferece pouca orientação sobre seu espaço de possibilidades.

Esse é um deslocamento de [[02 variaveis/Custo de Busca|custo de busca]]. Em uma GUI, o usuário procura a ação entre controles desenhados previamente. Em uma interface conversacional, precisa muitas vezes imaginar que a ação é possível antes de formulá-la.

Isso explica a sensação conhecida do cursor piscando diante de uma caixa vazia. A interface parece oferecer liberdade total, mas liberdade sem catálogo também produz incerteza.

A promessa de “basta dizer o que você quer” esconde que querer não é sempre uma instrução suficientemente definida. Usuários precisam descobrir quais detalhes alteram o resultado, que contexto fornecer e como reconhecer uma resposta ruim.

É por isso que o prompt se conecta a [[01 conceitos/Formulação|Formulação]] e a artefatos como [[03 artefatos/Brief|Brief]] e [[03 artefatos/Jobs to Be Done|Jobs to Be Done]]. Todos transformam intenção em estrutura comunicável, embora para interlocutores e finalidades diferentes.

## O design operacional mudou de lugar

Um formulário obriga o designer a decidir antecipadamente quais informações importam. Campo de data, quantidade, endereço e categoria já contêm uma teoria sobre o problema.

No prompt aberto, parte dessa estrutura precisa ser reconstruída linguisticamente. O usuário pode dizer “reescreva este texto para uma diretoria, mantendo os dados e reduzindo para três parágrafos”. Acabou de especificar operação, público, restrição de conteúdo e formato sem tocar em quatro controles diferentes.

Essa capacidade produz enorme [[01 conceitos/Compressao do Esforco|Compressão do esforço]] quando a intenção está clara. Uma sequência de operações pode caber numa frase.

Mas o custo não desaparece. Ele muda de natureza. O usuário passa a realizar trabalho de formulação e, principalmente, de validação. Como a saída é probabilística e pode parecer convincente mesmo quando está errada, compreender o pedido não basta: é preciso julgar a resposta.

## Conversar facilita antropomorfizar

Uma interface baseada em turnos de fala usa um comportamento humano antiquíssimo: delegar, explicar, corrigir e negociar por linguagem.

Isso reduz a aprendizagem inicial porque conversar já faz parte do repertório humano. Também aumenta o risco de confundir forma social com capacidade cognitiva.

Aqui o parentesco com [[01 conceitos/Antropomorfismo|Antropomorfismo]] e com [[03 artefatos/Mascote|Mascote]] fica especialmente produtivo. Um mascote dá rosto a uma instituição. Uma interface conversacional pode dar **voz responsiva** a um sistema.

O chamado efeito ELIZA é importante como alerta histórico: pessoas podem interpretar respostas linguísticas como sinais de compreensão profunda mesmo quando o mecanismo não sustenta essa interpretação.[^1]

Com LLMs, a capacidade é muito maior do que no ELIZA, mas o problema semiótico permanece: a fluência da forma não é garantia de verdade, intenção ou consciência.

## Quem ganhou poder quando o menu desapareceu?

O prompt parece descentralizar o design porque permite ao usuário formular operações que ninguém precisou transformar antes em botão. Isso amplia muito o espaço de ação.

Ao mesmo tempo, concentra poder interpretativo no modelo e na infraestrutura que o produz. O usuário sabe o que escreveu, mas não controla integralmente como aquela formulação será interpretada, quais contextos internos atuarão sobre ela nem por que uma resposta específica apareceu.

A relação de poder é, portanto, dupla. O usuário ganha liberdade para especificar intenções; perde parte da previsibilidade que interfaces determinísticas forneciam.

Os controles híbridos que vêm cercando interfaces generativas — sugestões, modos, anexos, ferramentas, campos estruturados e ações rápidas — podem ser lidos como resposta a esse problema. Depois de remover quase todos os controles, o design começa a devolvê-los seletivamente onde a liberdade da linguagem produz ambiguidade demais.

Talvez o prompt conversacional não seja o fim da interface gráfica. Seja um novo centro em torno do qual controles reaparecem.

## Ficha arqueológica

| Campo | Registro |
|---|---|
| **Artefato** | Prompt conversacional |
| **Período** | Antecedentes em comandos, busca e conversação computacional; popularização massiva com interfaces de LLM a partir de 2022 |
| **Autoria** | Distribuída; não há inventor único do prompt conversacional contemporâneo |
| **Problema original** | Permitir especificar uma variedade grande de intenções sem antecipá-las todas em controles fixos |
| **Invenção** | Entrada textual e diálogo computacional antecedem LLMs |
| **Refinamento** | Modelos capazes de seguir instruções e manter interação contextual em múltiplos turnos |
| **Popularização** | ChatGPT e outras interfaces generativas a partir de 2022 |
| **Padronização** | Caixa de conversa cercada progressivamente por controles multimodais, ferramentas e sugestões |
| **Comportamento aproveitado** | Explicar, delegar, exemplificar, corrigir e negociar tarefas por linguagem |
| **Comportamento produzido** | Iterar com software por diálogo, desenvolver repertórios de prompting e validar saídas probabilísticas |
| **Hipótese de design** | Linguagem natural pode funcionar como camada flexível de especificação para operações que não foram previamente transformadas em controles |
| **Relação de poder** | Amplia liberdade de formulação do usuário, mas concentra interpretação e geração numa infraestrutura opaca e probabilística |
| **Custo invisível** | Ansiedade diante da caixa vazia, esforço de formulação, imprevisibilidade e necessidade contínua de validar respostas plausíveis |
| **Conceitos relacionados** | [[01 conceitos/Formulação|Formulação]], [[01 conceitos/Antropomorfismo|Antropomorfismo]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção boa vs fricção ruim]], [[01 conceitos/Compressao do Esforco|Compressão do esforço]] |
| **Parentes** | interface de linha de comando, barra de busca, ELIZA, [[03 artefatos/Brief|Brief]], [[03 artefatos/Jobs to Be Done|Jobs to Be Done]], [[03 artefatos/Mascote|Mascote]] |
| **Questão em aberto** | Quanto da liberdade do prompt continuará aberta quando interfaces generativas amadurecerem e voltarem a incorporar estruturas visíveis para reduzir ambiguidade? |

## Referências

[^1]: Weizenbaum, Joseph. “ELIZA—A Computer Program for the Study of Natural Language Communication between Man and Machine”. *Communications of the ACM*, 1966; MIT Archives, *Computer conversations, 1965*. Fontes históricas do sistema ELIZA e do script DOCTOR.

[^2]: Vaswani, Ashish et al. “Attention Is All You Need”. 2017. Artigo que apresenta a arquitetura Transformer.

[^3]: Ouyang, Long et al. “Training language models to follow instructions with human feedback”. 2022. Trabalho sobre InstructGPT e ajuste de modelos para seguir intenções expressas em prompts.

[^4]: OpenAI. “Introducing ChatGPT”. 30 nov. 2022. O anúncio público descreve explicitamente o formato de diálogo, perguntas de acompanhamento e relação com InstructGPT.