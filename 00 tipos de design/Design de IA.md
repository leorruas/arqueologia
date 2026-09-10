---
title: "Design de IA"
type: "tipo-design"
status: "publicado"
tags:
  - design/tipo
  - arqueologia
---

# Design de IA

Uma interface tradicional costuma prometer uma relação relativamente estável entre ação e resposta. O usuário clica, arrasta, seleciona ou preenche; o designer consegue antecipar boa parte dos estados que virão depois. Sistemas de inteligência artificial quebram parcialmente essa promessa. A mesma instrução pode produzir respostas diferentes, o sistema pode inferir intenções que não foram explicitadas e, em alguns casos, agir sobre outros sistemas.

É nesse deslocamento que este vault usa **Design de IA** como lente disciplinar. Não se trata de afirmar que existe uma profissão universalmente estabilizada, com fronteiras consensuais, que nasceu junto com os LLMs. A interação humano-IA é estudada há décadas, e princípios para sistemas adaptativos, agentes, recomendadores, automação e interfaces inteligentes antecedem a atual onda generativa.[^1] O que muda recentemente é a escala em que interpretação probabilística, linguagem natural e delegação passam a ocupar o centro da experiência cotidiana.

A pergunta deixa de ser apenas “como tornar a máquina utilizável?”. Passa a ser: **como projetar uma relação em que intenção, resposta, confiança e responsabilidade permanecem parcialmente abertas durante o uso?**

## A interface deixa de prometer o mesmo resultado

O ELIZA de Joseph Weizenbaum, publicado em 1966, é um antecedente importante não porque fosse um LLM rudimentar, mas porque revelou cedo uma propriedade da interação linguística: respostas produzidas por regras relativamente simples podiam ser interpretadas por usuários como sinais de compreensão e presença.[^2]

A história posterior da interação humano-IA inclui sistemas especialistas, agentes, recomendadores, busca, reconhecimento de fala e interfaces adaptativas. Em 2019, Amershi e colaboradores, ao sintetizar orientações para interação humano-IA, já descreviam mais de duas décadas de trabalho sobre como sistemas inteligentes deveriam comunicar capacidades, corrigir erros, adaptar-se e permitir controle.[^1] Portanto, a dificuldade de projetar sistemas que não se comportam como software determinístico não nasce com o ChatGPT.

Os modelos generativos tornam, porém, essa dificuldade muito mais visível. A arquitetura Transformer, apresentada em 2017, torna-se uma das infraestruturas técnicas centrais para grandes modelos de linguagem.[^3] O InstructGPT, em janeiro de 2022, mostra o uso de feedback humano para aproximar modelos de instruções e preferências declaradas.[^4] Em novembro do mesmo ano, o ChatGPT ajuda a popularizar em grande escala uma forma de interação em que linguagem natural funciona como superfície geral para pedir, revisar e continuar tarefas.[^5]

Nenhum desses marcos “inventa o Design de IA”. Eles transformam as condições do problema. Quando a resposta deixa de ser inteiramente pré-escrita, o design precisa administrar não só estado e navegação, mas **incerteza sobre o próprio comportamento do sistema**.

## Da operação visível à formulação de intenção

O [[03 artefatos/Prompt Conversacional|prompt conversacional]] condensa essa mudança. Menus e botões oferecem reconhecimento: mostram parte do repertório possível. O prompt oferece abertura: pede ao usuário que formule o que quer antes de saber exatamente o que o sistema aceita.

Essa liberdade desloca trabalho cognitivo. A superfície fica visualmente mais simples, mas a pessoa precisa imaginar possibilidades, escolher contexto, explicitar critérios e avaliar uma resposta que pode soar convincente mesmo quando está errada. O desaparecimento de controles não significa desaparecimento de complexidade; muitas vezes significa **transferência da complexidade para a formulação**.

Por isso o prompt é parente funcional do [[03 artefatos/Brief|Brief]], da [[03 artefatos/Pergunta|Pergunta]], do [[03 artefatos/Jobs to Be Done|Jobs to Be Done]] e da [[03 artefatos/Pergunta de Pesquisa|Pergunta de pesquisa]]. Todos tentam transformar intenção em direção sem prescrever completamente o caminho intermediário. A diferença é que, no prompt, quem interpreta essa direção é um sistema probabilístico.

Isso reabre uma tensão antiga da HCI entre controle direto e delegação. Em um debate da CHI de 1997, Pattie Maes e [[autores/Ben Shneiderman|Ben Shneiderman]] contrapuseram agentes inteligentes, capazes de assumir iniciativa, a interfaces orientadas a manipulação direta e controle previsível do usuário.[^6] Sistemas generativos não resolvem essa disputa. Eles a tornam cotidiana.

Quanto mais o agente assume decomposição, busca, escrita ou execução, menos o usuário precisa operar cada passo — e mais difícil pode se tornar reconstruir **por que** determinada ação aconteceu.

## A IA como esfinge

Uma hipótese comparativa útil deste projeto é aproximar a IA da esfinge mitológica. Não há descendência histórica. O parentesco é semiótico e comportamental: ambos podem ocupar um limiar e transformar linguagem em condição de passagem.

No mito de Édipo, a esfinge bloqueia a entrada e apresenta um enigma. O viajante atravessa quando oferece uma resposta aceita. A interface de IA parece inverter a cena porque o humano pergunta e a máquina responde. A inversão, porém, é incompleta. Diante de um campo aberto, o sistema devolve silenciosamente outras exigências: **o que você quer, que contexto importa, que critérios definem uma boa resposta, o que pode ser delegado e como reconhecer um erro?**

O prompt pode ser lido como o enigma virado do avesso. A esfinge torna explícita a pergunta e avalia a resposta humana. A IA oferece um campo aparentemente vazio e expõe a capacidade humana de formular o problema.

A comparação fica mais forte quando sistemas de IA classificam, selecionam ou autorizam. Filtros de risco, fraude, visibilidade, prioridade ou elegibilidade transformam modelos em mecanismos de passagem. Nesse caso, a questão deixa de ser apenas “como conversar com a máquina?” e passa a incluir **quem consegue atravessar uma decisão mediada por ela e quais critérios consegue enxergar ou contestar**.

Existe uma diferença decisiva. O enigma mítico é relativamente estável. Sistemas probabilísticos respondem de modo dependente de contexto, dados, versão, instruções e infraestrutura. Não existe necessariamente uma solução única que encerre o encontro. Isso faz do Design de IA também um design de incerteza.

Há ainda uma advertência útil no mito: Édipo resolve o enigma e mesmo assim não compreende inteiramente a própria situação. Em IA, obter uma resposta correta ou dominar uma técnica de prompting não garante compreender o sistema, seus limites ou as relações de poder que o cercam. **Resolver uma tarefa continua sendo diferente de compreender o problema.**

## Quando a superfície parece sujeito — e começa a lembrar

O design já possui longa experiência em dar presença social a entidades abstratas. [[03 artefatos/Mascote|Mascotes]] dão rosto e temperamento a organizações; interfaces dão feedback e resposta a sistemas invisíveis. A IA acrescenta uma diferença: a entidade pode produzir novas respostas durante a interação, e essa variação fortalece a impressão de interlocução.

É aqui que [[01 conceitos/Antropomorfismo|antropomorfismo]] se torna central. Fluência, voz, nome, avatar e continuidade conversacional podem fazer um sistema parecer saber, desejar ou compreender mais do que sua operação autoriza concluir. Projetar IA significa também projetar a distância entre **capacidade real e capacidade percebida**.

O percurso [[05 percursos/Da Parede ao Interlocutor|Da parede ao interlocutor]] ajuda a enxergar essa passagem: superfícies projetadas foram de lugares que mostram mensagens a lugares que reagem e, depois, parecem responder. A mudança cria uma expectativa cultural nova: se existe informação ali, talvez seja possível interrogá-la em vez de navegar manualmente por sua estrutura.

A [[03 artefatos/LLM Wiki|LLM Wiki]] desloca novamente a fronteira. O sistema generativo não responde apenas à consulta atual; pode participar da manutenção de sínteses entre consultas. A memória deixa de ser apenas armazenamento e passa a incluir edição, conexão e revisão realizadas por um agente.

Aí o problema de design muda de forma. Uma alucinação que morre numa conversa é um erro local. Uma interpretação errada incorporada a uma memória persistente pode tornar-se contexto para respostas futuras. Preservar passa a exigir governança sobre **o que o sistema aprende a tratar como já sabido**.

Isso conecta Design de IA a [[04 genealogias/Permanencia e Memoria Externa|permanência e memória externa]], [[01 conceitos/Memoria Distribuida|memória distribuída]] e [[01 conceitos/Justificabilidade|justificabilidade]]. A interface precisa permitir não apenas obter respostas, mas reconstruir fonte, estado, autoria, revisão e possibilidade de correção.

## Projetar incerteza é projetar poder

Em software convencional, um erro de interface pode esconder uma opção. Em sistemas de IA, a superfície pode esconder também a própria base do julgamento. Um modelo pode resumir, priorizar, classificar ou agir sem tornar imediatamente visíveis os critérios que produziram aquele resultado.

Isso aproxima o campo de [[00 tipos de design/Design de Servicos|design de serviços]]. Quando uma IA participa de atendimento, triagem ou decisão, ela não é apenas “uma tela inteligente”: entra numa ecologia de regras, responsabilidades, recursos e consequências. A pergunta passa a incluir quem pode corrigir, interromper ou contestar a ação.

Também aproxima o campo de [[00 tipos de design/Design Grafico|design gráfico]]. Fluência textual, hierarquia, tipografia e composição participam da autoridade percebida de uma resposta. Uma resposta bem diagramada pode parecer epistemicamente mais estável do que realmente é. O design não decide se ela é verdadeira, mas participa da maneira como **parece saber**.

E continua ligado a [[00 tipos de design/Design de Interface|design de interface]], porque estados, feedback e reversibilidade não desaparecem quando entra IA. Pelo contrário: tornam-se mais importantes quando o sistema pode interpretar mal, agir demais ou responder com confiança indevida.

Por isso, Design de IA não deveria ser definido apenas pela presença de uma tecnologia chamada IA. Como lente deste vault, ele aparece quando o projeto precisa administrar uma relação em que **parte da interpretação e da ação foi delegada a um sistema cujo comportamento não pode ser completamente especificado antes do uso**.

A hipótese recorrente do campo é que essa delegação pode ampliar capacidade humana sem exigir que cada passo seja operado diretamente. A tensão recorrente é o inverso: quanto mais a máquina assume o caminho, mais precisamos projetar condições para que o humano continue capaz de compreender, intervir e discordar.

## Leituras no vault

[[03 artefatos/Prompt Conversacional|Prompt conversacional]] mostra a passagem de controles visíveis para formulação aberta. [[03 artefatos/LLM Wiki|LLM Wiki]] leva a questão para memória persistente e manutenção por agentes. [[03 artefatos/Mascote|Mascote]] e [[01 conceitos/Antropomorfismo|antropomorfismo]] ajudam a investigar por que sistemas ganham presença social tão facilmente.

Para atravessar a questão pela história das superfícies, leia [[05 percursos/Da Parede ao Interlocutor|Da parede ao interlocutor]]. [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] e [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]] ajudam a observar dois problemas que ficam mais difíceis — não menos — quando parte do comportamento deixa de ser determinística.

## Referências

[^1]: Amershi, Saleema et al. “Guidelines for Human-AI Interaction”. *CHI Conference on Human Factors in Computing Systems*, 2019. Os autores sintetizam décadas de pesquisa e prática sobre interação com sistemas inteligentes e propõem diretrizes para expectativas, correção, adaptação e controle. https://doi.org/10.1145/3290605.3300233

[^2]: Weizenbaum, Joseph. “ELIZA—A Computer Program for the Study of Natural Language Communication Between Man and Machine”. *Communications of the ACM*, 1966. https://doi.org/10.1145/365153.365168

[^3]: Vaswani, Ashish et al. “Attention Is All You Need”. *Advances in Neural Information Processing Systems 30*, 2017. https://proceedings.neurips.cc/paper/7181-attention-is-all-you-need

[^4]: Ouyang, Long et al. “Training language models to follow instructions with human feedback”. OpenAI, 27 jan. 2022; posteriormente publicado em NeurIPS 2022. https://openai.com/index/instruction-following/

[^5]: OpenAI. “Introducing ChatGPT”. 30 nov. 2022. Registro contemporâneo do lançamento público do ChatGPT como interface conversacional de pesquisa. https://openai.com/index/chatgpt/

[^6]: CHI 1997. “Intelligent Software Agents vs. User-Controlled Direct Manipulation: A Debate”. Painel entre Pattie Maes e Ben Shneiderman sobre agência automática e controle direto. https://chi1997.acm.org/proceedings/panel/jrm.html
