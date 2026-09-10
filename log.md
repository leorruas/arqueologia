---
title: "log"
type: "log"
status: "ativo"
---

# Registro de Alterações (Log)

Registro decrescente de modificações significativas no vault Arqueologia do Design.

## [2026-09-10]
- **Protocolo de propagação**: Formalização da criação de artigos como operação sobre a rede do vault. Toda criação ou revisão material passa a exigir varredura de tipos de design, conceitos, variáveis, artefatos relacionados, genealogias, percursos, autores, empresas e livros; atualização bidirecional das notas afetadas; critérios seletivos para criação de novos nós; atualização de índices e log; e verificação de wikilinks antes do encerramento. O `template-artefato.md` passou a expor também tipos de design, empresas, percursos e leituras-chave na ficha arqueológica.
- **Arquitetura intelectual**: Criação das camadas `04 genealogias/` e `05 percursos/` para permitir leitura transversal do acervo por famílias de ideias e sequências narrativas, sem reduzir o projeto a uma coleção de fichas isoladas.
- **Governança editorial**: Consolidação do `Guia de escrita`, `Instrucoes de Arqueologia.md`, `README.md`, `index.md`, `me.md` e templates para priorizar narrativa, sentence case em pt-BR, uma única ficha de consulta ao final, distinção entre história documentada, interpretação arqueológica e hipótese em aberto, além da separação entre invenção, refinamento, popularização e padronização.
- **Procedência conceitual**: Separação explícita dos conceitos em `literatura`, `adaptação` e `hipótese-do-projeto`, com grau de consolidação e limites de uso. Toda a pasta `01 conceitos/` foi migrada para o novo padrão narrativo e recebeu `status`, `origem` e `grau` no frontmatter.
- **Variáveis comparáveis**: Toda a pasta `02 variaveis/` foi migrada para o novo padrão, com eixo explícito, definição operacional, formas de observação, limites e trade-offs. Foram distinguidos eixos antes sobrepostos, especialmente fricção, custo transacional, atrito decisório, custo de busca e custo do erro.
- **Refatoração dos artefatos**: Toda a pasta `03 artefatos/` foi convertida do formato fragmentado `Ficha técnica` / `História e contexto` / `Inovação e impacto` / `Ficha resumo` para estudos narrativos com seções editoriais e uma única `Ficha arqueológica`, preservando conteúdo útil e registrando hipóteses como hipóteses.
- **Correções históricas e teóricas**: Revisão de afirmações frágeis em estudos como [[03 artefatos/Pull to Refresh|Pull to Refresh]], [[03 artefatos/Botao Salvar|Botão Salvar]], [[03 artefatos/Braun T3|Braun T3]], [[03 artefatos/Carrinho de Compras|Carrinho de compras]], [[03 artefatos/Espaço entre Palavras|Espaço entre palavras]], [[03 artefatos/Login|Login]], [[03 artefatos/Mascote|Mascote]], [[03 artefatos/Portfólio|Portfólio]] e [[03 artefatos/Prompt Conversacional|Prompt conversacional]], separando parentesco formal, antecedente histórico e descendência documentada.
- **Genealogias**: Criação dos estudos [[04 genealogias/Permanencia e Memoria Externa|Permanência e memória externa]], [[04 genealogias/Limiares e Delimitacao|Limiares e delimitação]], [[04 genealogias/Acesso e Disponibilidade|Acesso e disponibilidade]], [[04 genealogias/Coordenacao e Sincronizacao|Coordenação e sincronização]], [[04 genealogias/Atencao e Recompensa|Atenção e recompensa]], [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] e [[04 genealogias/Compressao do Esforco|Compressão do esforço]].
- **Percursos de leitura**: Criação de [[05 percursos/Como o Design Aprendeu a Guardar|Como o design aprendeu a guardar]], [[05 percursos/Como Projetamos Fronteiras|Como projetamos fronteiras]], [[05 percursos/Da Parede ao Feed|Da parede ao feed]] e [[05 percursos/Da Espera a Sincronizacao|Da espera à sincronização]].
- **GitHub Pages**: Reorganização da exploração pública em lentes de tipos de design, ideias/genealogias e percursos, com metadados editoriais, relações entre estudos e fichas recolhíveis para preservar leitura progressiva.
- **Automação e integridade**: Expansão de `build-search-index.mjs` e `audit-editorial.mjs` para indexar genealogias e percursos, detectar wikilinks sem destino, auditar sentence case, estruturas legadas e metadados obrigatórios. A auditoria final registrou 0 links quebrados, 0 estruturas legadas em artefatos, conceitos ou variáveis, 0 conceitos sem `status/origem/grau` e 0 variáveis sem `status/eixo`.
- **Novo estudo — LLM Wiki**: Criação de [[03 artefatos/LLM Wiki|LLM Wiki]], investigando a passagem de recuperação episódica para síntese persistente mantida por agentes, com antecedentes em Memex, WikiWikiWeb e RAG; integração ao Design de IA, à genealogia de permanência e memória externa e ao percurso [[05 percursos/Como o Design Aprendeu a Guardar|Como o design aprendeu a guardar]].

## [2026-07-25]
- **Ingestão de Inbox**: Ingestão completa do arquivo de notas sobre a ecologia dos artefatos de transformação no Service Design e a análise arqueológica profunda sobre o pôster/cartaz, litografia e peles temporárias da arquitetura.
- **Criação de Artefato**: Criação da nota [[03 artefatos/Pôster|Pôster]], incluindo a Ficha Resumo obrigatória com as Quatro Camadas de Análise Crítica e sem o uso de emojis.
- **Criação de Conceitos**: Criação dos conceitos teóricos [[01 conceitos/Ecologia de Artefatos|Ecologia de Artefatos]] (ciclo evolutivo de transformação de serviços por recursos invisíveis) e [[01 conceitos/Peles Temporarias da Arquitetura|Peles Temporárias da Arquitetura]] (anotações gráficas e luminosas efêmeras sobre o espaço construído).
- **Criação de Perfis de Autores**: Criação dos perfis biográficos de [[autores/Alois Senefelder|Alois Senefelder]] (inventor da litografia), [[autores/Jules Cheret|Jules Chéret]] (pioneiro do pôster litográfico colorido) e [[autores/Henri de Toulouse Lautrec|Henri de Toulouse-Lautrec]] (síntese visual pós-impressionista e cartaz publicitário).
- **Atualização de Artefatos Existentes**: Cruzamento e inserção de links para o artefato [[03 artefatos/Pôster|Pôster]] nas notas [[03 artefatos/Grid|Grid]], [[03 artefatos/Fila|Fila]] e [[03 artefatos/Hero Section|Hero Section]].
- **Atualização de Especialidades de Design**: Vinculação dos novos autores, conceitos e artefatos nas vertentes [[00 tipos de design/Design Grafico|Design Gráfico]] e [[00 tipos de design/Design de Servicos|Design de Serviços]].
- **Atualização de Índices**: Atualização dos índices cruzados [[00 índices/Indice de Artefatos|Índice de Artefatos]], [[00 índices/Indice de Autores|Índice de Autores]], [[00 índices/Indice de Conceitos|Índice de Conceitos]] e [[00 índices/Livros Indicados|Livros Indicados]] (inclusão das obras de Senefelder, Chéret e Toulouse-Lautrec).
- **Limpeza de Inbox**: Limpeza do arquivo `00 inbox/Ingestão.md`, preservando rigorosamente seu frontmatter e título de acordo com a Regra 5 do vault.

## [2026-07-24]
- **Ingestão de Inbox**: Ingestão da discussão sobre propostas de valor, hipóteses lógicas e justificabilidade das decisões organizacionais no serviço público.
- **Criação de Artefatos**: Criação das notas [[03 artefatos/Value Proposition Ad Lib|Value Proposition Ad Lib]] e [[03 artefatos/Justificativa de Valor Público|Justificativa de Valor Público]], incluindo fichas resumo obrigatórias em conformidade com as diretrizes e sem o uso de emojis.
- **Criação de Conceito e Variável**: Criação do conceito teórico [[01 conceitos/Justificabilidade|Justificabilidade]] e da variável de sistema [[02 variaveis/Legitimidade Decisoria|Legitimidade Decisória]], cruzando as relações de aumento e redução com os artefatos correspondentes.
- **Criação de Perfil de Autor**: Criação do perfil biográfico de [[autores/Alexander Osterwalder|Alexander Osterwalder]], co-criador do canvas de proposta de valor.
- **Atualização de Índices**: Atualização dos índices cruzados [[00 índices/Indice de Artefatos|Índice de Artefatos]], [[00 índices/Indice de Autores|Índice de Autores]], [[00 índices/Indice de Conceitos|Índice de Conceitos]], [[00 índices/Indice de Variaveis|Índice de Variáveis]] e [[00 índices/Livros Indicados|Livros Indicados]] (inclusão da obra *Value Proposition Design*).
- **Atualização de Especialidades**: Vinculação dos novos artefatos e conceitos na nota da especialidade [[00 tipos de design/Design de Servicos|Design de Serviços]].
- **Limpeza de Inbox**: Limpeza do arquivo `00 inbox/Ingestão.md`, mantendo estritamente o frontmatter e título e esvaziando o texto ingerido.

## [2026-07-20]
- **Ingestão de Inbox**: Processamento da discussão arqueológica sobre o papel dos mascotes como fachada emocional e do prompt conversacional como metainterface em IA generativa.
- **Criação de Artefatos**: Criação das notas [[03 artefatos/Mascote|Mascote]] e [[03 artefatos/Prompt Conversacional|Prompt Conversacional]], contendo fichas resumo estruturadas em conformidade com as regras de escrita e sem emojis.
- **Criação de Conceitos**: Criação do conceito teórico [[01 conceitos/Antropomorfismo|Antropomorfismo]] mapeando-o aos dois novos artefatos e cruzando com as variáveis relevantes.
- **Atualização de Variáveis e Conceitos**: Enriquecimento das variáveis [[02 variaveis/Friccao|Fricção]] e [[02 variaveis/Atrito Decisorio|Atrito Decisório]], e do conceito [[01 conceitos/Formulação|Formulação]], com a inclusão e análise das propriedades operacionais do Prompt Conversacional.
- **Atualização de Especialidades**: Vinculação dos novos artefatos nas especialidades correspondentes: [[00 tipos de design/Design Grafico|Design Gráfico]] (Mascote) e [[00 tipos de design/Design de Interface|Design de Interface]] (Prompt Conversacional).
- **Atualização de Índices**: Inclusão das novas notas no [[00 índices/Indice de Artefatos|Índice de Artefatos]] e [[00 índices/Indice de Conceitos|Índice de Conceitos]].
- **Nova Categoria de Design**: Criação da nota de especialidade [[00 tipos de design/Design de IA|Design de IA]] na pasta de vertentes de design, e sua integração ao [[index|index.md]] como área de exploração dedicada à mediação de interações humano-máquina probabilísticas e agentes autônomos.
- **Limpeza de Inbox**: Limpeza do arquivo `00 inbox/Ingestão.md`, preservando o frontmatter e título de acordo com as regras de escrita.

## [2026-07-11]
- **Atualização de Fontes Bibliográficas**: Enriquecimento da seção de fontes bibliográficas em 29 perfis de autores para incluir os livros indicados em [[00 índices/Livros Indicados|Livros Indicados]] acompanhados de resumos críticos sobre suas contribuições teóricas para o design e a arqueologia, formatados como listas indentadas e sem o uso de emojis.
- **Criação em Lote de Perfis de Autores**: Criação de 24 novos arquivos de perfis históricos de autores/designers na pasta `autores/` (Clayton Christensen, Bob Moesta, Horst Rittel, Melvin Webber, Steve Krug, Dave Gray, Sunni Brown, James Macanufo, John Kotter, John Odling-Smee, Kevin Laland, Marcus Feldman, Francis Bacon, Richard H. Thaler, Cass R. Sunstein, Merlin Donald, Norbert Elias, Hans Barnard, Willeke Wendrich, Atul Gawande, David Kirkpatrick, Herbert Simon, Michel Foucault e Alan Klement).
  - Todas as biografias foram construídas sem emojis, com rigor histórico, referenciando obras bibliográficas, e utilizando wikilinks para os artefatos existentes e especialidades de design.
  - Atualização estrutural e reordenação do índice [[00 índices/Indice de Autores|Índice de Autores]] para acomodar e categorizar harmonicamente os novos perfis.
- **Criação de Perfis de Empresas**: Criação dos perfis de empresas listadas no índice que ainda não possuíam arquivos correspondentes no vault: [[empresas/AEG|AEG]], [[empresas/Braun|Braun]], [[empresas/Livework|Livework]], [[empresas/Engine|Engine]], [[empresas/Pentagram|Pentagram]], [[empresas/Chermayeff and Geismar|Chermayeff and Geismar]], [[empresas/Haas Type Foundry|Haas Type Foundry]] e [[empresas/Linotype|Linotype]].
- **Linkagem de Artefatos**: Conversão de projetos emblemáticos das novas empresas em wikilinks ativos direcionados para a pasta `03 artefatos/`.
  - Criação das notas de artefatos ausentes no vault mas já referenciados em índices: [[03 artefatos/Braun T3|Braun T3]] e [[03 artefatos/Helvetica|Helvetica]], incluindo suas respectivas Fichas Resumo detalhadas e sem emojis.
- **Criação de Perfis de Autores**: Criação dos perfis de autores/designers indicados no índice que ainda não possuíam arquivos correspondentes no vault: [[autores/Peter Behrens|Peter Behrens]], [[autores/Dieter Rams|Dieter Rams]], [[autores/Adrian Frutiger|Adrian Frutiger]], [[autores/Max Miedinger|Max Miedinger]], [[autores/Douglas Engelbart|Douglas Engelbart]], [[autores/G Lynn Shostack|G. Lynn Shostack]] e [[autores/Birgit Mager|Birgit Mager]].
  - Conexão e linkagem ativa de todos os autores aos seus respectivos projetos e especialidades de design por meio de wikilinks estruturados.
- **Ingestão**: Processamento completo de inbox com discussões sobre artefatos de autodeterminação, intenção, formulação e investigação.
  - Inclusão da *Pergunta Crítica de Autodeterminação* como tip de destaque em [[Instrucoes de Arqueologia|Instruções de Arqueologia]].
  - Criação de 15 novas notas de artefatos com suas respectivas Fichas Resumo atualizadas sem emojis: [[03 artefatos/Visão|Visão]], [[03 artefatos/Princípio|Princípio]], [[03 artefatos/Retrospectiva|Retrospectiva]], [[03 artefatos/Portfólio|Portfólio]], [[03 artefatos/Kanban|Kanban]], [[03 artefatos/Matriz RACI|Matriz RACI]], [[03 artefatos/Workshop|Workshop]], [[03 artefatos/Pergunta|Pergunta]], [[03 artefatos/Jobs to Be Done|Jobs to Be Done]], [[03 artefatos/Hipótese Científica|Hipótese Científica]], [[03 artefatos/Pergunta de Pesquisa|Pergunta de Pesquisa]], [[03 artefatos/North Star|North Star]], [[03 artefatos/Problema de Design|Problema de Design]], [[03 artefatos/Brief|Brief]] e [[03 artefatos/Wicked Problem|Wicked Problem]].
  - Criação de 4 novas notas de conceitos teóricos: [[01 conceitos/Autodeterminação|Autodeterminação]], [[01 conceitos/Intenção|Intenção]], [[01 conceitos/Formulação|Formulação]] e [[01 conceitos/Investigação|Investigação]].
  - Atualização dos índices cruzados: [[00 índices/Indice de Artefatos|Índice de Artefatos]], [[00 índices/Indice de Conceitos|Índice de Conceitos]] e [[00 índices/Livros Indicados|Livros Indicados]].
  - Limpeza do arquivo `00 inbox/Ingestão.md` conforme as diretrizes do vault.
- **Ingestão**: Processamento arqueológico sobre a história da leitura e tipografia medieval.
  - Criação do artefato: [[03 artefatos/Espaço entre Palavras|Espaço entre Palavras]] (tipografia/design gráfico).
  - Criação do conceito: [[01 conceitos/Redução de Inferências|Redução de Inferências]] (redução da adivinhação estrutural em vez de aceleração mecânica).
  - Atualização de variáveis: [[02 variaveis/Custo de Busca|Custo de Busca]].
  - Atualização de especialidade: [[00 tipos de design/Tipografia|Tipografia]] (inserida seção de artefatos relacionados).
  - Atualização de índices: [[00 índices/Indice de Artefatos|Índice de Artefatos]] (com correção de link para Bíblia de Gutenberg) e [[00 índices/Indice de Conceitos|Índice de Conceitos]].
  - Governança: Adicionadas as regras 8, 9 e 10 ao [[me|me.md]] (criação imediata de notas de artefatos, associação ativa de livros a autores e enriquecimento de notas existentes).
- **Ingestão**: Processamento completo do arquivo `00 inbox/Ingestão.md` contendo discussões sobre artefatos de simulação, controle, legitimidade e cognição distribuída.
  - Criação de 8 novas notas de artefatos com Ficha Resumo obrigatória sem emojis: [[03 artefatos/Projeto Piloto|Projeto Piloto]], [[03 artefatos/Manifesto|Manifesto]], [[03 artefatos/Checklist|Checklist]], [[03 artefatos/Assinatura|Assinatura]], [[03 artefatos/Carimbo|Carimbo]], [[03 artefatos/Número de Protocolo|Número de Protocolo]], [[03 artefatos/Login|Login]] e [[03 artefatos/Crachá|Crachá]].
  - Atualização do [[00 índices/Indice de Artefatos|Índice de Artefatos]] para incluir as novas notas em suas respectivas categorias.
  - Limpeza do arquivo de inbox `00 inbox/Ingestão.md` de acordo com a regra 5 do vault.
- **Subagente e Índices**: Criação e execução de subagente especializado em varredura bibliográfica.
  - Varredura automatizada nas pastas do vault para coletar livros indicados e fontes bibliográficas.
  - Criação do índice [[00 índices/Livros Indicados|Livros Indicados]] estruturado com tabela limpa sem emojis.
  - Integração do índice de livros no hub central [[index|index.md]] e nas diretrizes de estrutura em [[me|me.md]].
  - Adição dos livros *Niche Construction: The Neglected Process in Evolution* (Laland et al.) e *The Sciences of the Artificial* (Herbert Simon) associados ao [[03 artefatos/Projeto Piloto|Projeto Piloto]] e às discussões de evolução cultural e design.
- **Ingestão e Governança**: Processamento da inbox com discussões sobre artefatos de continuidade, sincronização social e relações de poder/autovigilância (Foucault).
  - Atualização estrutural em [[me|me.md]] (adicionada Regra 11 sobre as Quatro Camadas de Análise Crítica e Relações de Poder).
  - Atualização do manual [[Instrucoes de Arqueologia|Instruções de Arqueologia]] e do [[templates/template-artefato|template-artefato.md]] para incluir as novas perguntas espinha dorsal e as variáveis críticas da Ficha Resumo (`Hipótese sobre a natureza humana` e `Relação de poder`).
  - Criação do artefato: [[03 artefatos/Calendário|Calendário]] (design de interface/serviços) mapeando sua função de sincronização e o deslocamento de responsabilidade da força de vontade para a arquitetura do tempo.
  - Criação do conceito: [[01 conceitos/Sincronizacao|Sincronização]] conectando-o às teorias de Norbert Elias.
  - Atualização de conceitos e índices: [[01 conceitos/Memoria Distribuida|Memória Distribuída]], [[00 índices/Indice de Artefatos|Índice de Artefatos]], [[00 índices/Indice de Conceitos|Índice de Conceitos]] e [[00 tipos de design/Design de Serviços|Design de Serviços]].
  - Atualização bibliográfica: Adição das obras *Sobre o Tempo* (Norbert Elias), *Nudge* (Thaler & Sunstein) e *Vigiar e Punir* (Michel Foucault) em [[00 índices/Livros Indicados|Livros Indicados]].
  - Limpeza do arquivo `00 inbox/Ingestão.md` preservando frontmatter e título de acordo com a regra 5 do vault.
- **Ordenação do Log**: Inversão da estrutura cronológica do log para decrescente (mais recente primeiro) e inclusão desta regra em [[me|me.md]].

## [2026-07-09]
- **Ambiente**: Inicialização do vault de Arqueologia do Design com tema Cupertino e cor de destaque terracota/rust (#C2593F).
- **Arquitetura**: Criação das pastas principais: tipos de design, autores, empresas, artefatos, templates, índices e inbox.
- **Governança**: Criação dos arquivos [[me|me.md]] (perfil e regras do vault) e [[log|log.md]] (este registro de alterações).
- **Modelos**: Criação dos templates fundamentais:
  - [[templates/template-tipo-design|template-tipo-design.md]]
  - [[templates/template-autor|template-autor.md]]
  - [[templates/template-empresa|template-empresa.md]]
  - [[templates/template-artefato|template-artefato.md]]
- **Estruturação**: Criação do índice inicial [[index|index.md]] com os pilares da arqueologia do design e áreas sugeridas.
- **Ingestão**: Processamento completo do arquivo da inbox (inbox/09-07-2026.md) contendo histórias de interações e produtos.
  - Criação de perfis de autores: [[autores/Loren Brichter|Loren Brichter]], [[autores/Ben Shneiderman|Ben Shneiderman]], [[autores/Donald Norman|Donald Norman]], [[autores/Alan Kay|Alan Kay]] e [[autores/Susan Kare|Susan Kare]].
  - Criação de perfis de empresas: [[empresas/Xerox PARC|Xerox PARC]], [[empresas/Apple|Apple]], [[empresas/Facebook|Facebook]] e [[empresas/Google|Google]].
  - Criação de notas de invenções/artefatos de design de interface: [[Pull to Refresh|Pull to Refresh]], [[Infinite Scroll|Infinite Scroll]], [[Slide to Unlock|Slide to Unlock]], [[Botao Like|Botão Like]], [[Undo|Undo]], [[Pinch to Zoom|Pinch to Zoom]], [[Undo Send|Undo Send]] e [[Archive|Archive]].
  - Atualização dos índices centrais correspondentes em índices/.
- **Diretrizes**: Criação das instruções de persona baseadas no prompt do ChatGPT em [[Instrucoes de Arqueologia|Instruções de Arqueologia]] e configuração do arquivo [[AGENTS|AGENTS.md]] de redirecionamento de governança.
- **Ingestão**: Processamento do estudo sobre o artefato invisível de design de serviços [[Fila|Fila]], ligando-o ao [[Design de Servicos|Design de Serviços]] e atualizando o índice central de artefatos.
- **Padronização**: Adicionada a regra de obrigatoriedade da Ficha Resumo ao [[me|me.md]] e ao [[templates/template-artefato|template-artefato.md]], e incluída a ficha preenchida em todas as 9 notas de artefatos existentes.
- **Limpeza**: Remoção total e estrita de todos os emojis de todos os arquivos markdown do vault, seguindo a diretriz do usuário.
- **Ingestão**: Processamento do estudo sobre o [[Grid|Grid]] obtido de `00 inbox/Ingestão.md`.
  - Criação da nota de artefato [[Grid|Grid]] (incluindo Ficha Resumo).
  - Criação do perfil do autor [[autores/Josef Muller Brockmann|Josef Müller-Brockmann]].
  - Atualização do índice central de artefatos e da nota de especialidade [[Design Grafico|Design Gráfico]].
- **Governança**: Criada nova regra de escrita em [[me|me.md]] para preservar e apenas limpar arquivos de inbox após a ingestão. O arquivo `00 inbox/Ingestão.md` foi esvaziado mantendo o título de acordo com a regra.
- **Arquitetura**: Criado o diretório `conceitos/` e o [[templates/template-conceito|template-conceito.md]] para relacionar artefatos a variáveis teóricas (o que aumentam ou diminuem).
  - População inicial com 6 conceitos: [[02 variaveis/Custo do Erro|Custo do Erro]], [[02 variaveis/Atrito Decisorio|Atrito Decisório]], [[02 variaveis/Custo Transacional|Custo Transacional]], [[Legitimidade Social|Legitimidade Social]], [[01 conceitos/Manipulacao Direta|Manipulação Direta]] e [[02 variaveis/Previsibilidade Visual|Previsibilidade Visual]].
  - Criação do [[Indice de Conceitos|Índice de Conceitos]] e integração no [[index|index.md]] e [[me|me.md]].
- **Governança**: Adicionada a regra 6 no [[me|me.md]] para forçar a extração máxima de variáveis e conceitos ao analisar novos artefatos.
- **Ingestão**: Processamento do estudo sobre o [[Post-it|Post-it]] contido em `00 inbox/Ingestão.md`.
  - Criação da nota do artefato de design de produto [[Post-it|Post-it]] (incluindo Ficha Resumo).
  - Criação do perfil da empresa [[empresas/3M|3M]].
  - Criação de 4 novas notas de conceitos/variáveis: [[02 variaveis/Reversibilidade|Reversibilidade]], [[02 variaveis/Permanencia|Permanência]], [[01 conceitos/Memoria Distribuida|Memória Distribuída]] e [[01 conceitos/Autonomia da Atencao|Autonomia da Atenção]] relacionando-os aos artefatos que os maximizam/minimizam.
  - Atualização dos índices de artefatos, conceitos e da nota de especialidade [[Design de Produto|Design de Produto]].
  - Limpeza do arquivo `00 inbox/Ingestão.md` conforme a regra estabelecida.
- **Estruturação**: Criadas 6 novas notas de conceitos identificados nos artefatos existentes: [[01 conceitos/Affordance|Affordance]], [[01 conceitos/Design Systems|Design Systems]], [[01 conceitos/Economia da Atencao|Economia da Atenção]], [[01 conceitos/Esqueuomorfismo|Esqueuomorfismo]], [[01 conceitos/Justica Procedimental|Justiça Procedimental]] e [[01 conceitos/Recompensa Variavel|Recompensa Variável]], cruzando-as com os respectivos artefatos no [[Indice de Conceitos|Índice de Conceitos]].
- **Arquitetura**: Refinamento estrutural para separar fisicamente **Conceitos/Princípios** (teóricos) e **Variáveis** (mensuráveis que aumentam/diminuem).
  - Criação da pasta `variaveis/` e transferência de 6 notas da pasta `conceitos/` para `variaveis/` (`Custo do Erro`, `Atrito Decisorio`, `Custo Transacional`, `Permanencia`, `Reversibilidade` e `Previsibilidade Visual`).
  - Criação de duas novas variáveis: [[Atencao|Atenção]] e [[Justica|Justiça]].
  - Criação do [[templates/template-variavel|template-variavel.md]] e reformulação do [[templates/template-conceito|template-conceito.md]].
  - Criação do [[Indice de Variaveis|Índice de Variáveis]] e atualização do [[Indice de Conceitos|Índice de Conceitos]], [[index|index.md]] e [[me|me.md]].
- **Metodologia**: Integração das 5 Perguntas Espinha Dorsal focadas em capacidades humanas, genealogia e custos invisíveis de inovação no manual [[Instrucoes de Arqueologia|Instruções de Arqueologia]] e no [[templates/template-artefato|template-artefato.md]].
- **Estruturação**: Atualizadas todas as 13 notas de artefatos existentes na pasta `03 artefatos/` para reestruturar a seção "Inovação e Impacto" em torno das 5 Perguntas Espinha Dorsal sobre capacidades e linhagens humanas.
- **Ingestão**: Processamento da seção massiva sobre design de serviços contida em `00 inbox/Ingestão.md`.
  - Criação de 3 novas notas de artefatos: [[03 artefatos/Carrinho de Compras|Carrinho de Compras]] (design de produto/interface), [[03 artefatos/Agendamento|Agendamento]] (serviços) e [[03 artefatos/Cartao de Embarque|Cartão de Embarque]] (serviços/gráfico).
  - Criação de 3 novas notas de conceitos: [[01 conceitos/Eras da Economia|Eras da Economia e Design]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]] e [[01 conceitos/Servico de Reflexao|Serviço de Reflexão]].
  - Criação de 1 nova nota de variável: [[02 variaveis/Friccao|Fricção]].
  - Atualização de todos os índices correspondentes e da nota de especialidade [[00 tipos de design/Design de Serviços|Design de Serviços]].
  - Limpeza do arquivo `00 inbox/Ingestão.md` conforme a regra.
- **Ingestão**: Processamento do arquivo de inbox contendo discussões sobre a justiça operacional em serviços, a semiótica e territorialidade do tapete, e o login como limiar de identidade.
  - Criação de 2 novos artefatos: [[03 artefatos/Tapete|Tapete]] (design de produto) e [[03 artefatos/Tela de Login|Tela de Login]] (design de interface).
  - Criação de 3 novos conceitos: [[01 conceitos/Distribuicao de Escassez|Distribuição de Escassez]], [[01 conceitos/Limiares|Limiares]] e [[01 conceitos/Tecnologias de Delimitacao|Tecnologias de Delimitação]].
  - Atualização de artefatos e variáveis: [[03 artefatos/Fila|Fila]], [[02 variaveis/Justica|Justiça]] e [[02 variaveis/Friccao|Fricção]].
  - Atualização de índices e tipos de design: [[00 tipos de design/Design de Servicos|Design de Serviços]], [[00 tipos de design/Design de Interface|Design de Interface]], [[00 tipos de design/Design de Produto|Design de Produto]], [[00 índices/Indice de Artefatos|Índice de Artefatos]] e [[00 índices/Indice de Conceitos|Índice de Conceitos]].
  - Limpeza do arquivo `00 inbox/Ingestão.md` conforme a regra.
- **Ingestão**: Processamento da inbox com o estudo sobre atalhos de teclado (compressão de espaço) e garrafas de água (portabilidade de recursos e continuidade de acesso).
  - Criação de 2 novos artefatos: [[03 artefatos/Atalhos de Teclado|Atalhos de Teclado]] (design de interface) e [[03 artefatos/Garrafa de Agua|Garrafa de Água]] (design de produto).
  - Criação de 2 novos conceitos: [[01 conceitos/Compressao do Esforco|Compressão do Esforço]] e [[01 conceitos/Continuidade de Acesso|Continuidade de Acesso]].
  - Criação de 2 novas variáveis: [[02 variaveis/Variabilidade|Variabilidade]] e [[02 variaveis/Expectativa de Disponibilidade|Expectativa de Disponibilidade]].
  - Atualização dos tipos de design: [[00 tipos de design/Design de Interface|Design de Interface]] e [[00 tipos de design/Design de Produto|Design de Produto]].
  - Atualização de índices cruzados: [[00 índices/Indice de Artefatos|Índice de Artefatos]], [[00 índices/Indice de Conceitos|Índice de Conceitos]] e [[00 índices/Indice de Variaveis|Índice de Variáveis]].
  - Limpeza do arquivo `00 inbox/Ingestão.md` conforme a regra.
- **Ingestão**: Ingestão da discussão sobre rituais de entrada e limiares a partir da inbox, focando na Hero Section.
  - Criação da nota de artefato: [[03 artefatos/Hero Section|Hero Section]] (design de interface/arquitetura da informação).
  - Atualização estrutural do [[templates/template-artefato|template-artefato.md]] com os novos campos propostos para a Ficha Resumo (Família de ideias, Parentes, Hipótese central, Princípio de design revelado, Perguntas em aberto).
  - Atualização do conceito [[01 conceitos/Limiares|Limiares]] para incorporar a Hero Section como dispositivo de transição de atenção.
  - Atualização do tipo de design: [[00 tipos de design/Design de Interface|Design de Interface]].
  - Atualização do [[00 índices/Indice de Artefatos|Índice de Artefatos]].
  - Limpeza do arquivo `00 inbox/Ingestão.md` conforme as diretrizes do vault.
- **Ingestão**: Ingestão da discussão arqueológica sobre os artefatos de permanência física e cognitiva, focando na escavação do Botão Salvar.
  - Criação da nota de artefato: [[03 artefatos/Botao Salvar|Botão Salvar]] (design de interface).
  - Atualização do [[templates/template-artefato|template-artefato.md]] para incluir permanentemente o campo "Destino do artefato" na Ficha Resumo.
  - Atualização do tipo de design: [[00 tipos de design/Design de Interface|Design de Interface]].
  - Atualização do [[00 índices/Indice de Artefatos|Índice de Artefatos]].
  - Limpeza do arquivo `00 inbox/Ingestão.md` conforme a governança do vault.
