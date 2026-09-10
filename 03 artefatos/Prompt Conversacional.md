---
title: "Prompt Conversacional"
type: "artefato"
tags:
  - design/artefato
  - arqueologia
---

# Prompt Conversacional

O **Prompt Conversacional** é uma metainterface textual baseada em linguagem natural que substitui controles visuais predefinidos (menus, botões, fluxos) por uma caixa de entrada vazia, permitindo que usuários formulem intenções, instruam operações computacionais e validem resultados iterativamente por meio do diálogo.

## Ficha técnica
- **Criador(es)**: Pesquisadores de computação interativa; Joseph Weizenbaum (ELIZA); cientistas da computação responsáveis pela arquitetura Transformer e modelos ajustados por instruções (InstructGPT)
- **Empresa/Fabricante**: [[empresas/OpenAI|OpenAI]] e desenvolvedores de modelos de linguagem generativa
- **Ano de Lançamento**: Popularizado em escala global em 2022 (com o ChatGPT)
- **Materiais/Mídia**: Interface digital, código de software (NLP/LLM), campos de texto web/mobile
- **Tipo de Design**: [[00 tipos de design/Design de Interface|Design de Interface]]

## História e contexto de criação
- **Demanda / Problema**: Como permitir que humanos operem sistemas e executem tarefas complexas sem precisar aprender linguagens de programação formais ou navegar por menus rígidos que antecipam poucas opções? O prompt surge para viabilizar a especificação direta de intenções em linguagem cotidiana.
- **O Mundo Antes da Inovação**: O usuário estava preso entre a linha de comando clássica (que exigia sintaxe exata e memorização de vocabulário de máquina) e a interface gráfica clássica (que reduzia a carga de memória, mas limitava o escopo de ação às decisões e botões previamente desenhados pelo designer).

## Inovação e impacto
- **Ampliação de Capacidade**: Amplia drasticamente o alcance e a flexibilidade das operações de software, permitindo que o usuário crie tarefas sem botões preexistentes simplesmente descrevendo-as na caixa de entrada.
- **Enfraquecimento de Capacidade**: Enfraquece a orientação intuitiva fornecida pelo reconhecimento visual. A ausência de botões remove as pistas sobre os limites e capacidades do sistema, aumentando a incerteza operacional do usuário.
- **Comportamento Coletivo**: Gerou o hábito social de conversar com softwares, iterar sobre o trabalho de máquinas por meio do feedback escrito ("regenerar", "mudar o tom") e estudar a engenharia de prompts como competência técnica de articulação lógica.
- **Linhagem e Descendência**: Descendente da linha de comando, da barra de busca dos navegadores e de sistemas conversacionais antigos como o ELIZA (1966). Antepassado de sistemas híbridos de design generativo e assistentes autônomos multiagentes.
- **Custo Invisível**: Transferência da carga de design e estruturação de dados da máquina para o usuário. Para obter resultados consistentes, o usuário deve "projetar os campos" cognitivamente, antecipando o contexto, tom e formato nas frases, sob pena de receber respostas inúteis.

## Referências e onde encontrar
- **Acervos**: Demonstrações históricas de IHC, o repositório da arquitetura Transformer da Google (2017) e o lançamento do ChatGPT (2022).
- **Leituras**: *Attention Is All You Need* (Google Research, 2017) e artigos científicos sobre o InstructGPT (2022).

---

### Ficha resumo

- **Nome do artefato**: Prompt Conversacional
- **Categoria**: Interface Digital
- **Período aproximado**: Popularizado em 2022
- **Pessoas ou equipes envolvidas**: Joseph Weizenbaum, pesquisadores de computadores interativos, equipes de LLM e produto da [[empresas/OpenAI|OpenAI]]
- **Produto onde apareceu**: ChatGPT, InstructGPT, ELIZA (antecedente histórico)
- **Problema original**: Executar operações flexíveis e variadas sem a rigidez de interfaces de botões estáticos ou complexidade de código formal
- **Hipótese sobre a natureza humana**: Humanos preferem explicar o que querem por meio de linguagem descritiva incremental do que memorizar códigos de comandos de sistemas ou clicar por sequências longas de menus
- **Relação de poder**: Decentraliza a criação de comandos ao empoderar o usuário linguístico, mas concentra o poder interpretativo na caixa preta opaca do modelo de IA corporativo, gerando dependência epistêmica e exigindo que o humano adapte sua linguagem natural às heurísticas de interpretação probabilística da máquina (engenharia de prompt)
- **Mundo antes da inovação**: Interfaces gráficas controladas por designers (menus e botões rígidos) e interfaces de código restritas a programadores
- **A ideia que mudou tudo**: Oferecer uma caixa de texto livre que processa instruções semânticas em vez de comandos estruturados rígidos, interpretando o contexto por mecanismos de atenção
- **Comportamento aproveitado**: Dialogar, delegar tarefas por briefing, instruir, dar exemplos e corrigir o trabalho alheio
- **Comportamento criado**: Desenvolver heurísticas de escrita técnica para interagir com IA (prompts estruturados), monitorar respostas probabilisticamente instáveis e iterar conversando com o software
- **Por que funcionou**: Eliminou a fricção inicial de uso, pois o usuário já sabe se comunicar linguisticamente, permitindo que a especificação da tarefa ocorra de forma processual e incremental
- **Consequências inesperadas**: Ansiedade do cursor piscante em uma caixa vazia, ilusão de competência racional atribuída ao sistema com base apenas em sua fluência gramatical (efeito ELIZA) e sobrecarga cognitiva do usuário para validar alucinações
- **Legado**: Consolidou a interface de conversação como o padrão da computação de inteligência artificial generativa
- **Conceitos relacionados**: [[01 conceitos/Formulação|Formulação]], [[01 conceitos/Antropomorfismo|Antropomorfismo]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]], [[01 conceitos/Compressao do Esforco|Compressão do Esforço]]
- **Família de ideias**: Metainterfaces e computação baseada em intenções
- **Parentes**: [[03 artefatos/Tela de Login|Tela de Login]], [[03 artefatos/Atalhos de Teclado|Atalhos de Teclado]], [[03 artefatos/Jobs to Be Done|Jobs to Be Done]], [[03 artefatos/Brief|Brief]]
- **Hipótese central**: A simplicidade visual da caixa de texto do prompt esconde o deslocamento do design operacional para a capacidade formulativa da linguagem do usuário
- **Princípio de design revelado**: A universalidade semântica da entrada exige o esforço cognitivo do usuário na curadoria das restrições e validação dos resultados
- **Destino do artefato**: Evolui como o núcleo de sistemas generativos, sendo cercado por controles híbridos e automatizado por agentes que começam a agir autonomamente a partir de instruções curtas
- **Perguntas em aberto**: Como reduzir a barreira de engenharia de prompt sem comprometer a flexibilidade aberta que define a caixa de conversação?
