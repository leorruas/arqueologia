---
title: "LLM Wiki"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
  - design/ia
---

# LLM Wiki

Uma resposta de chatbot tem uma característica estranha: ela pode exigir leitura, comparação e síntese de vários documentos e, ainda assim, terminar como uma ocorrência quase descartável dentro de uma conversa. A pergunta seguinte pode exigir que boa parte daquele trabalho seja reconstruída. Os documentos permanecem. A síntese, muitas vezes, não.

A **LLM Wiki** parte justamente dessa diferença. Em vez de usar um modelo de linguagem apenas para responder a perguntas sobre fontes, ela transforma o resultado acumulado dessas leituras em uma wiki persistente que o próprio modelo mantém. O objeto de design mais interessante aqui não é a IA que “sabe” mais. É a decisão de fazer **a interpretação já construída sobreviver à conversa**.

Essa mudança parece pequena, mas desloca uma fronteira histórica importante da memória externa. Um arquivo guarda documentos. Uma wiki guarda páginas relacionadas. Um sistema de busca ajuda a localizar. Um sistema RAG recupera trechos para compor uma resposta. A LLM Wiki tenta fazer outra coisa: preservar também o trabalho intermediário de integrar, relacionar, revisar e organizar o que foi encontrado.

## O problema é mais antigo que a inteligência artificial

Em 1945, Vannevar Bush descreveu no ensaio *As We May Think* um problema produzido pela própria abundância do conhecimento: registrar informação já não bastava se encontrar e relacionar o que havia sido registrado continuasse difícil. Sua proposta do Memex imaginava um arquivo pessoal em que documentos pudessem ser ligados por “trilhas associativas”, permitindo que relações entre registros também fossem preservadas.[^1]

O parentesco com a LLM Wiki é conceitual e foi apontado pelo próprio Andrej Karpathy em sua formulação do padrão. Não existe uma linha técnica direta entre Memex e LLM Wiki. O que reaparece é uma mesma inquietação: **o valor de uma memória externa não está apenas no que ela armazena, mas nas relações que permite reconstruir entre as coisas armazenadas**.[^2]

A wiki acrescentou outra resposta a esse problema. O WikiWikiWeb de Ward Cunningham, colocado em uso em 1995 no Portland Pattern Repository, tornou relativamente barato criar, editar e ligar páginas pela própria web. Seu conteúdo podia ser continuamente refeito pelos participantes, e a ligação entre páginas deixava de ser apenas estrutura editorial planejada antecipadamente para tornar-se parte do próprio trabalho coletivo de escrever.[^3]

A wiki, porém, ainda carregava uma exigência: alguém precisava mantê-la. Criar páginas é barato; revisar sínteses antigas, atualizar referências cruzadas, fundir duplicações, perceber contradições e reorganizar uma base crescente continua sendo trabalho.

Décadas depois, os modelos de linguagem e a recuperação automática produziram outra solução. O trabalho de Lewis e colaboradores que consolidou a expressão **Retrieval-Augmented Generation (RAG)** em 2020 combinava memória paramétrica do modelo com uma memória externa recuperável durante a geração.[^4] Em termos de interação, isso tornou possível perguntar algo e fazer o sistema localizar evidências relevantes antes de responder.

Mas é importante não construir uma oposição falsa. “RAG” designa uma família ampla de arquiteturas, e sistemas podem combinar recuperação com caches, memórias e gravação de resultados. O contraste de Karpathy é mais específico: ele compara a LLM Wiki ao padrão comum em que os documentos permanecem armazenados, trechos são recuperados a cada pergunta e a síntese produzida não é integrada de volta a uma base de conhecimento durável.[^2]

Nesse caso, a informação persiste; o trabalho de ter pensado sobre ela, não necessariamente.

## A síntese deixa de morrer na resposta

Em 4 de abril de 2026, Andrej Karpathy publicou um arquivo de ideia chamado `LLM Wiki`, apresentado explicitamente como um padrão para construir bases pessoais de conhecimento com LLMs. O documento não descreve um produto único. Ele propõe uma arquitetura que outros agentes e usuários podem adaptar ao próprio domínio.[^2]

A formulação separa três camadas. As **fontes brutas** são preservadas e não devem ser modificadas pelo modelo. A **wiki** contém páginas em Markdown criadas e atualizadas pelo LLM: resumos, entidades, conceitos, comparações e sínteses. O **schema**, normalmente um arquivo de instruções como `CLAUDE.md` ou `AGENTS.md`, estabelece como o agente deve organizar e manter esse sistema.[^2]

Essa separação é a principal decisão de design do artefato. Ela impede que fonte e interpretação sejam a mesma coisa. O documento original permanece disponível para contestar a síntese; a wiki pode mudar; e o schema funciona como uma espécie de constituição operacional que define como essa mudança deve acontecer.

Karpathy organiza o trabalho recorrente em operações como **ingest**, **query** e **lint**. Ingerir uma fonte não significa apenas indexá-la: o agente deve lê-la, atualizar páginas relevantes, criar relações e registrar contradições. Consultar a wiki produz novas sínteses, que podem ser arquivadas de volta no sistema. O lint procura inconsistências, páginas órfãs, lacunas e conhecimento desatualizado.[^2]

A palavra usada por Karpathy para essa transformação é particularmente reveladora: o conhecimento é **compilado**. A metáfora desloca a wiki de um depósito passivo para um estado intermediário entre evidência e uso. As fontes são matéria-prima; a wiki é uma representação reorganizada para consultas futuras.

É aqui que a LLM Wiki se separa mais claramente de um chatbot com arquivos anexados. O objetivo não é apenas responder melhor à pergunta atual. É fazer com que o trabalho da pergunta atual reduza o trabalho necessário para a próxima.

Isso aproxima o artefato de [[01 conceitos/Compressao do Esforco|compressão do esforço]]. O sistema tenta evitar que a mesma operação de localizar, cruzar e sintetizar seja repetida integralmente. Também amplia a [[02 variaveis/Permanencia|permanência]]: não apenas os documentos, mas relações e interpretações podem continuar disponíveis depois da interação.

## O humano deixa de manter a wiki — mas não deixa de governá-la

A formulação de Karpathy redistribui trabalho de maneira muito específica. O humano seleciona fontes, explora o acervo, faz perguntas e decide o que merece atenção. O LLM assume grande parte do trabalho de resumir, classificar, cruzar referências e atualizar arquivos.[^2]

Isso aproveita um comportamento muito antigo: externalizar memória para poder pensar com ela. A diferença está em quem cuida do suporte depois que a memória foi externalizada.

Na [[01 conceitos/Memoria Distribuida|memória distribuída]], lembrar pode significar saber onde consultar um registro. Na LLM Wiki aparece um passo adicional: o ambiente não apenas conserva o registro; ele participa ativamente de sua reorganização. A base de conhecimento deixa de ser apenas suporte da cognição e passa a executar parte do trabalho de manutenção da própria memória distribuída.

A consequência é uma mudança de papel. Em uma wiki convencional, o usuário pode ser simultaneamente leitor, autor, editor e bibliotecário. Na LLM Wiki, o humano tende a se tornar mais **curador e investigador**, enquanto o agente ganha poder editorial sobre a camada de síntese.

Esse deslocamento não elimina trabalho humano. Ele muda o lugar em que o trabalho acontece. Selecionar uma boa fonte passa a importar mais porque ela pode alterar muitas páginas. Formular uma boa [[03 artefatos/Pergunta|pergunta]] passa a ter efeito cumulativo se a resposta útil for incorporada ao acervo. Escrever um bom schema passa a significar projetar o comportamento futuro do mantenedor artificial.

Aparentemente, isso reduz [[02 variaveis/Custo de Busca|custo de busca]] e [[02 variaveis/Custo Transacional|custo transacional]] de manutenção. Mas surge uma nova fricção: revisar o que a máquina decidiu preservar.

Essa relação de poder é central. Quem controla as fontes e o schema governa parte importante do sistema, mas quem escreve continuamente a síntese também decide, em escala microscópica, quais relações ficam explícitas, quais contradições ganham destaque e como uma afirmação é formulada. A LLM Wiki automatiza trabalho editorial; portanto, automatiza também parte das escolhas que tornam conhecimento legível.

A camada de fontes imutáveis funciona como contrapeso. Ela permite retornar à evidência quando a síntese é questionada. O lint também introduz uma forma de inspeção recorrente. Mas nenhum dos dois mecanismos garante, sozinho, que a interpretação produzida seja correta. Eles tornam o erro mais auditável; não o tornam impossível.

## Quando o erro também aprende a durar

A vantagem mais evidente da LLM Wiki contém seu risco mais interessante.

Se uma resposta de chatbot estiver errada e morrer naquela conversa, o erro pode ser local. Se uma síntese errada for incorporada a uma página central, relacionada a outras páginas e usada como contexto para respostas futuras, ela pode adquirir **permanência estrutural**.

O conhecimento pode acumular. O erro também.

Por isso, a LLM Wiki muda a natureza do problema de alucinação. Já não basta perguntar se uma resposta atual está correta. É preciso perguntar como uma interpretação entrou na memória, quais fontes a sustentavam, que páginas foram alteradas por ela e como uma revisão posterior consegue desfazer sua propagação.

Aqui o artefato encontra [[01 conceitos/Justificabilidade|justificabilidade]] e [[02 variaveis/Reversibilidade|reversibilidade]]. Uma base que preserva fontes, histórico de versões, logs e regras de edição pode tornar sua própria memória mais contestável. Sem esses mecanismos, a síntese persistente corre o risco de transformar plausibilidade em infraestrutura.

Esse é também um limite da metáfora de “compilação”. Código compilado pode ser reconstruído deterministicamente a partir de uma fonte e de um compilador conhecidos. Uma síntese produzida por LLM é interpretativa e probabilística. Duas ingestões do mesmo conjunto de fontes podem não gerar exatamente a mesma wiki. Chamar o resultado de compilado é produtivo como metáfora de persistência e reutilização, mas não deve sugerir equivalência técnica com compilação determinística.

Em setembro de 2026, o padrão ainda é recente demais para falar em padronização. A formulação de Karpathy já inspirou implementações diferentes, inclusive uma extensão open source da Microsoft em que o LLM mantém uma wiki pessoal estruturada e interligada.[^5] Essas implementações refinam a ideia com interfaces, rastreabilidade, busca e verificações próprias, mas justamente a variedade mostra que ainda não existe uma forma única e estabilizada de “fazer uma LLM Wiki”.

Ao mesmo tempo, produtos empresariais começaram a convergir para uma hipótese próxima por outro caminho. O **Projects do Gemini Enterprise**, do Google Cloud, permite criar uma base de conhecimento dedicada a um trabalho individual ou de equipe, reunindo arquivos enviados, documentos do Google Drive, notas e conectores externos para que o assistente responda com base naquele contexto persistente.[^6] O **Gemini Notebook Enterprise** acrescenta notebooks compartilháveis, fontes organizadas, guias especializados e help centers para uso dentro de organizações.[^7]

O parentesco é forte, mas não são equivalentes. A documentação do Google descreve **fontes e projetos persistentes sobre os quais a IA pesquisa, resume e responde**. Ela não descreve, como operação central, uma camada wiki de síntese que o agente reescreve continuamente após cada ingestão ou consulta segundo um schema explícito. O Google se aproxima da mesma fronteira — fazer o trabalho cognitivo sobreviver entre interações —, mas mantém mais claramente a fonte e o notebook como unidades persistentes. A LLM Wiki de Karpathy torna a **síntese mantida pelo agente** uma unidade arquitetural própria.

Essa comparação é historicamente interessante porque sugere convergência, não necessariamente descendência. Em 2026, diferentes sistemas estão tentando resolver o mesmo problema: como fazer uma interação com IA deixar de começar do zero sem reduzir continuidade a um histórico infinito de chat.

Há, portanto, formulação e rápida experimentação. Popularização está em andamento. Padronização ainda é uma pergunta histórica aberta.

## Uma wiki estudando a própria wiki

Este próprio vault oferece um pequeno caso reflexivo. Seu `AGENTS.md` se apresenta como um schema de LLM Wiki: existe uma camada de regras que orienta como um agente deve criar, revisar, conectar e auditar as páginas. O conteúdo é mantido em Markdown, índices e logs registram o estado do acervo e auditorias procuram links quebrados, estruturas legadas e inconsistências editoriais.

Isso não prova nada sobre a eficácia geral do padrão. É apenas uma implementação local que permite observar sua hipótese em funcionamento.

A experiência revela algo que a definição abstrata deixa especialmente visível: o schema talvez seja tão importante quanto a própria wiki. Quando um agente recebe regras sobre fontes, procedência conceitual, sentence case, preservação de conteúdo e wikilinks, estamos projetando não apenas uma base de dados, mas **o comportamento de quem terá permissão para reescrever a memória**.

Nesse sentido, a LLM Wiki é parente funcional do [[03 artefatos/Checklist|checklist]], do [[03 artefatos/Botao Salvar|botão salvar]] e do [[03 artefatos/Archive|Archive]]. O checklist externaliza regras para evitar omissões. O botão salvar materializa a decisão de preservar. Archive separa visibilidade de existência. A LLM Wiki combina partes dessas lógicas e acrescenta uma novidade: o suporte de memória também recebe instruções para cuidar continuamente de sua própria organização.

Talvez esse seja o passo mais importante da genealogia [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]]. Primeiro projetamos objetos para guardar aquilo que não queríamos esquecer. Depois projetamos sistemas para localizar o que havíamos guardado. Agora começamos a projetar sistemas que reorganizam o que foi guardado para que uma interpretação anterior esteja pronta para participar da próxima interpretação.

A pergunta deixa de ser apenas “como guardar conhecimento?”. Passa a ser: **quando a memória externa começa a editar a si mesma, quem passa a ser responsável pelo que ela acredita saber?**

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | LLM Wiki |
| **Período** | Formulação pública identificável em abril de 2026; experimentação e refinamento em curso |
| **Autoria** | Andrej Karpathy é o formulador e principal popularizador identificável do padrão chamado LLM Wiki; os componentes e antecedentes são distribuídos e muito anteriores |
| **Produto ou contexto** | Padrão de arquitetura e workflow para bases de conhecimento mantidas por agentes LLM |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]] |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | O custo de manter uma base de conhecimento estruturada e a necessidade de reconstruir sínteses quando consultas partem repetidamente de fontes brutas |
| **Mundo antes** | Arquivos e notas manuais, wikis mantidas por pessoas, busca documental, sistemas de recuperação/RAG e bases persistentes consultadas por assistentes |
| **Invenção** | Não há evidência de que Karpathy tenha inventado bases auto-organizadas por IA em sentido amplo; sua contribuição identificável é a formulação pública deste padrão específico de fontes brutas + wiki persistente + schema |
| **Refinamento** | Implementações posteriores transformam o padrão abstrato em extensões, CLIs, verificações de integridade, rastreabilidade e interfaces; produtos como Gemini Enterprise Projects e Gemini Notebook Enterprise convergem para continuidade de contexto e conhecimento por arquiteturas parcialmente diferentes |
| **Popularização** | O gist de Karpathy, implementações surgidas em seguida e a convergência de produtos empresariais para bases persistentes de conhecimento ampliaram a visibilidade do problema em 2026 |
| **Padronização** | Ainda não estabelecida; implementações divergem em estrutura, ferramentas, governança e mecanismos de verificação |
| **Hipótese de design** | Humanos agregam mais valor escolhendo fontes, fazendo perguntas e julgando sínteses do que executando continuamente o trabalho de manutenção e cruzamento da base |
| **Comportamento aproveitado** | Externalizar memória, organizar registros, seguir relações e fazer perguntas sobre um acervo |
| **Comportamento produzido** | Ingerir fontes para atualizar uma memória compilada, auditar a base periodicamente e incorporar boas respostas de volta ao conhecimento persistente |
| **Relação de poder** | O LLM ganha poder editorial sobre a camada de síntese; o humano preserva poder sobre fontes, regras e revisão, mas pode delegar parte desse controle sem perceber |
| **Consequências inesperadas** | Uma síntese incorreta pode se tornar contexto persistente e propagar erro; ao mesmo tempo, logs, fontes imutáveis e versionamento podem tornar a memória mais auditável |
| **Destino ou transformação posterior** | Padrão emergente; ainda em experimentação, enquanto produtos empresariais exploram soluções vizinhas para continuidade de conhecimento |
| **Conceitos relacionados** | [[01 conceitos/Memoria Distribuida|Memória distribuída]], [[01 conceitos/Compressao do Esforco|Compressão do esforço]], [[01 conceitos/Investigação|Investigação]], [[01 conceitos/Justificabilidade|Justificabilidade]] |
| **Variáveis relacionadas** | [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Custo de Busca|Custo de busca]], [[02 variaveis/Custo Transacional|Custo transacional]], [[02 variaveis/Reversibilidade|Reversibilidade]] |
| **Genealogia** | [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]] |
| **Percurso(s)** | [[05 percursos/Como o Design Aprendeu a Guardar|Como o Design Aprendeu a Guardar]] |
| **Parentes** | [[03 artefatos/Prompt Conversacional|Prompt conversacional]], [[03 artefatos/Botao Salvar|Botão salvar]], [[03 artefatos/Archive|Archive]], [[03 artefatos/Checklist|Checklist]], [[03 artefatos/Pergunta|Pergunta]]; Memex, WikiWikiWeb, RAG, Gemini Enterprise Projects e Gemini Notebook Enterprise como antecedentes ou parentes ainda sem estudo próprio no vault |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Persistir a síntese pode reduzir o custo da próxima investigação, mas transforma manutenção da memória em uma questão de governança |
| **Questão em aberto** | Como impedir que uma interpretação probabilística, depois de incorporada à memória persistente, se fossilize como fato para todas as consultas seguintes? |

## Referências

[^1]: Bush, Vannevar. “As We May Think”. *The Atlantic Monthly*, julho de 1945. Reprodução autorizada pelo W3C: https://www.w3.org/History/1945/vbush/vbush.shtml. O ensaio apresenta o Memex e o princípio de indexação por trilhas associativas.

[^2]: Karpathy, Andrej. “LLM Wiki”. GitHub Gist, criado em 4 de abril de 2026. https://gist.github.com/karpathy/442a6bf555914893e9891c11519de94f. Fonte primária para o nome do padrão, arquitetura em fontes brutas/wiki/schema, operações de ingestão, consulta e lint e divisão de trabalho entre humano e LLM.

[^3]: Cunningham & Cunningham. “Wiki Wiki Web”. Portland Pattern Repository / C2. https://c2.com/ppr/wiki/JavaIdioms/WikiWikiWeb.html. O site documenta Ward Cunningham como criador do WikiWikiWeb e a edição de páginas por usuários; o WikiWikiWeb entrou em uso público em 1995.

[^4]: Lewis, Patrick et al. “Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks”. *Advances in Neural Information Processing Systems 33*, 2020. https://proceedings.neurips.cc/paper/2020/hash/6b493230205f780e1bc26945df7481e5-Abstract.html. Fonte para a formulação técnica de RAG combinando memória paramétrica e memória não paramétrica recuperada durante a geração.

[^5]: Microsoft. `microsoft/llmwiki`. GitHub, consultado em setembro de 2026. https://github.com/microsoft/llmwiki. Implementação open source contemporânea que descreve uma base pessoal em Markdown mantida incrementalmente por LLM e oferece evidência de refinamento posterior do padrão.

[^6]: Google Cloud. “Create and manage projects”. *Gemini Enterprise Documentation*, consultado em setembro de 2026. https://docs.cloud.google.com/gemini/enterprise/docs/projects. Fonte para Projects como bases de conhecimento dedicadas a trabalho individual ou colaborativo, alimentadas por arquivos, Drive, notas e conectores externos e usadas em conversas fundamentadas no acervo.

[^7]: Google Cloud. “Gemini Notebook for enterprise” e “What is Gemini Notebook Enterprise?”. Consultados em setembro de 2026. https://cloud.google.com/gemini-enterprise/gemini-notebook e https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/overview. Fontes para notebooks empresariais, compartilhamento organizacional, fontes persistentes, guias e help centers.