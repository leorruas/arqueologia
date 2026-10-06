---
title: "Contratos e gaps dos scripts"
type: "manual"
status: "ativo"
publicar: false
---

# Contratos e gaps dos scripts

Análise de 6 de outubro de 2026 do vault Arqueologia do Design. Base: `AGENTS.md`, `me.md`, `Instrucoes de Arqueologia.md`, `Guia de escrita.md`, templates, scripts JavaScript e workflow de atualização. Os contratos abaixo descrevem o comportamento implementado; as recomendações não constituem regras novas nem alterações executadas nas rotinas editoriais.

## Resultado principal

A automação cobre indexação, algumas invariantes editoriais e uma parte da integração estrutural da rede. Ela não comprova cumprimento integral da governança. O gap mais urgente é o schema: o template de artefato tem **33 campos**, enquanto a migração e a auditoria trabalham com **26**. A migração pode deslocar os sete campos novos para um registro genérico de consequências inesperadas. Um relatório sem erros estruturais, portanto, não garante preservação do modelo atual.

A execução isolada das auditorias, sem normalização, consolidação ou migração de conteúdo, encontrou 214 entradas, zero wikilinks não resolvidos, 40 candidatos de capitalização e nove ocorrências de rede. Candidatos de capitalização exigem leitura: nomes próprios e grafias oficiais são permitidos. As nove ocorrências incluem dois alertas sobre a mesma relação, portanto não representam necessariamente nove correções independentes.

## Inventário e contrato operacional

Todos os seis scripts de manutenção usam módulos Node.js e apenas `node:fs` e `node:path`. O workflow fixa Node 24. Eles usam `process.cwd()` como raiz: executar fora do vault muda o conjunto de entradas e o destino das escritas. Não há interface de argumentos, modo de simulação ou validação compartilhada da raiz. Executar com `node scripts/<nome>.mjs`, a partir da raiz. Falhas de leitura, JSON inválido ou escrita normalmente interrompem o processo; achados de auditoria, por si só, não causam saída diferente de zero.

### `scripts/build-search-index.mjs`

**Entrada:** Markdown nas nove camadas públicas: tipos de design, índices, conceitos, variáveis, artefatos, genealogias, percursos, autores e empresas. Percorre subpastas. Raiz, inbox e templates ficam fora do índice.

**Transformação:** extrai frontmatter com expressões regulares, listas de tags e aliases em formatos limitados, headings, texto simplificado e wikilinks. Resolve caminhos normalizados e depois nome de arquivo, título ou alias; em ambiguidade tenta a mesma categoria e depois escolhe o primeiro candidato. Calcula relações e backlinks. Algumas referências de governança e templates são excluídas da contagem de links quebrados.

**Saída:** substitui `search-index.json` e `link-report.json`. Índice com `version: 2`, `generatedAt`, `articleCount`, `brokenLinkCount` e `articles`. Cada entrada inclui título, nome de arquivo, categoria, caminho, tipo, status, origem, grau, eixo, tags, aliases, headings, headingData, plainText, related, unresolved e backlinks. Relatório com data, contagem de links, contagem de arquivos e lista `files` com `sourcePath/unresolved`.

**Limites:** não valida anchors, fidelidade das fontes, valores do schema ou `publicar: false`; status de rascunho não impede indexação. Backlink calculado é relação derivada, não escrita recíproca no Markdown. A data torna a saída diferente a cada execução, mesmo sem mudança substantiva.

### `scripts/normalize-sentence-case.mjs`

**Entrada:** Markdown das mesmas nove camadas, inclusive subpastas.

**Transformação:** aplica mapas explícitos de substituição a headings H2–H6; mapa menor a `title` entre aspas e ao primeiro H1. Não converte toda capitalização por regra linguística.

**Saída:** sobrescreve apenas notas alteradas e imprime contagens. Preserva nomes de arquivo e wikilinks.

**Limites:** não corrige texto corrido, interface ou qualquer título fora dos mapas. Não produz diff, backup ou log. As substituições são conservadoras, mas isso não equivale a auditoria editorial completa.

### `scripts/consolidate-unresolved-links.mjs`

**Entrada:** `link-report.json` e notas apontadas pelo relatório; `Pistas de pesquisa.md`, se existir. Sem relatório, informa a ausência e encerra com sucesso.

**Transformação:** converte os wikilinks classificados como não resolvidos em texto usando o rótulo, ou o último segmento do destino. Preserva referências ao próprio arquivo de pistas. Agrupa destinos por camada e escreve candidatos automáticos.

**Saída:** sobrescreve notas alteradas e atualiza `Pistas de pesquisa.md`; mantém conteúdo fora dos delimitadores `PISTAS-AUTOMATICAS:INICIO/FIM`. Não regenera os relatórios que consumiu.

**Limites:** confia no relatório sem verificar se o destino passou a existir. A seção automática é substituída pelo lote atual, não acumulada. Depois da conversão dos links, a execução seguinte pode eliminar os candidatos anteriores. Preservar as seções manuais está implementado; preservar toda memória automática até uma decisão explícita não está. Não há registro automático de promoção, fusão ou descarte.

### `scripts/migrate-artifact-sheets.mjs`

**Entrada:** Markdown diretamente em `03 artefatos/` — não percorre subpastas —, índice de artefatos, índice de livros e arquivos diretamente em percursos.

**Transformação:** localiza a primeira seção H2 `Ficha arqueológica` ou `Ficha resumo`; lê tabela ou lista legada, resolve aliases e produz tabela `Campo/Registro` com 26 campos fixos. Obtém tipo de design por headings conhecidos do índice, organizações por links presentes no artigo, percursos por referências ao artefato e leituras por linhas do índice bibliográfico. Junta campos legados em campos atuais e coloca registros não reconhecidos em consequências inesperadas.

**Saída:** sobrescreve fichas selecionadas; usa textos como “Ainda não explicitado.” para ausências. Imprime arquivos e total. Não cria ficha quando não encontra seção ou dados parseáveis; não resolve duplicidade de fichas.

**Limites:** enriquecimento estrutural não comprova pertinência intelectual. A leitura de livros divide linhas por `|`, o que pode conflitar com aliases em wikilinks. O schema de 26 campos está desatualizado frente ao template de 33; executar essa migração exige corrigir primeiro esse contrato e conferir preservação campo a campo.

### `scripts/audit-editorial.mjs`

**Entrada:** Markdown das nove camadas, com subpastas.

**Verificações:** candidatos de sentence case em título e H2–H6; headings legados por camada; percursos numerados; `status/origem/grau` em conceitos; `status/eixo` em variáveis; ficha única de artefato, tabela padrão e presença dos 26 campos conhecidos.

**Saída:** substitui `editorial-report.json`, com regras, contagens e listas de candidatos, estruturas legadas e metadados ausentes. Localizações incluem caminho e, quando disponível, linha.

**Limites:** ausência de campos é diferente de campos vazios ou placeholders; valida presença, não qualidade ou valores permitidos. Não testa posição da ficha antes de referências, ficha de genealogia, referências junto de afirmações, número adequado de seções, sentido dos eixos ou consistência semântica. Capitalização é heurística com falsos positivos. Sempre conclui com sucesso quando a execução técnica funciona.

### `scripts/audit-network.mjs`

**Entrada:** nove camadas e `index.md`. Resolve caminho ou basename único, normalizando acentos e caixa; não usa títulos/aliases como o indexador.

**Verificações:** títulos duplicados dentro de cada camada; presença em cinco índices (artefatos, conceitos, variáveis, autores e empresas); genealogias/percursos na home; nós sem entrada; retorno dos links da ficha de artefato para genealogias, percursos, autores, empresas e tipos de design; concordância entre tipo declarado na ficha e referência no ensaio disciplinar.

**Saída:** substitui `network-report.json` com `generatedAt`, `scope`, `issueCount`, `countsByKind` e `issues` contendo kind, sourcePath, targetPath e detail.

**Limites:** não audita reciprocidade de conceitos, variáveis ou outros artefatos; não confere todos os links narrativos, livros ou papéis históricos. Ausência do próprio índice é silenciosamente ignorada. Não filtra a exigência de home por status publicado. Detecta relação textual, não concordância de afirmações. Achados não bloqueiam o workflow.

## Contratos da publicação

Os módulos de navegador não exportam uma API pública. Sua integração depende dos IDs/classes do HTML, das rotas hash, do índice JSON e de observadores de alteração do DOM. Essas dependências são contratos implícitos: uma mudança em um módulo pode afetar os demais sem erro de sintaxe.

| Script | Entradas e gatilho | Resultado e dependências | Limites relevantes |
|---|---|---|---|
| `script.js` | HTML moderno; índice local; fallback para árvore GitHub; Markdown remoto; eventos de busca, navegação e tema | Controla home, `#/campo/<categoria>`, `#/estudo/<categoria>/<título>`, busca, leitor, TOC e tema `tema-arqueologia`; usa `marked` global | Rota depende do título visível. Metadados e títulos podem divergir no fallback. Publicação não é uma validação editorial |
| `enhancements.js` | Segunda leitura do índice local; DOMContentLoaded; MutationObserver; hashchange/popstate | Monta lentes, contagens, metadados e relações derivadas; recolhe seções reconhecidas; persiste `lente-arqueologia` | Recolhimento reconhece nomes legados, mas não `Ficha arqueológica` atual. Uniões de related/backlinks podem disfarçar falta de reciprocidade na fonte. Observador com atraso de 40 ms |
| `puc-parity.js` | DOM, rolagem, carga, mudança de rota e MutationObserver | Ajusta navbar e breadcrumbs; oculta orientações redundantes e remove card de artefatos da home | Também controla superfícies já controladas por `script.js`. Usa APIs modernas, incluindo `.at(-1)`; não integra a página legacy |
| `footnotes.js` | `#artigo-corpo` renderizado; MutationObserver e cliques | Converte definições e chamadas `[^rótulo]` em referências numeradas com retorno, IDs e navegação | Não verifica se a fonte sustenta a afirmação. Depende da forma de parágrafos gerada por marked e ignora chamadas em code/pre/links |
| `callouts.js` | Blockquotes do leitor iniciados por `[!tipo]`; DOMContentLoaded/MutationObserver | Aplica rótulos e classes de callout; mantém sinal de dobramento em dataset | O sinal `+/-` é metadado; não constitui por si uma implementação de expansão/recolhimento. Não faz julgamento metodológico |
| `legacy-ios12.js` | `legacy.html`; árvore e Markdown do GitHub; marked quando disponível | Implementação alternativa de home, campos, busca, leitor, referências, tabelas e fallback de Mermaid | Busca por título/categoria; não usa a riqueza do índice local nem os módulos modernos. Tem controle próprio para respostas de navegação obsoletas |
| `loader.js` — adicionado nesta alteração | Carregado no head das duas páginas; API `ARQUEOLOGIA_LOADER.iniciar/finalizar/pronto` | Overlay com linha de progresso, tema inicial, token por navegação e liberação inicial após catálogo e camada editorial. Legacy aguarda apenas catálogo. CSS em `loader.css` | Indicador visual, não porcentagem real. Fallback de 10 s libera a interface; requisições podem continuar. `finalizar` ignora tokens antigos |

## Contrato do workflow

`.github/workflows/build-search-index.yml` executa em pushes selecionados para `main` e manualmente. Usa checkout com histórico, Node 24 e permissão de escrita. A ordem é: checagem de sintaxe → normalização → índice preliminar → consolidação de links → migração de fichas → auditoria editorial → auditoria de rede → índice final → commit e push dos arquivos selecionados.

A rotina é **mutadora**, não apenas verificadora: pode alterar notas e converter links antes de auditar. O commit automático usa `[skip ci]`, sem atualizar `log.md`. Achados nos relatórios não interrompem o job. Cancelamento de execuções concorrentes reduz sobreposição, mas não prova ausência de conflito com um push externo.

A checagem original omitiria footnotes, callouts, legacy e o novo loader. Nesta alteração, a lista de sintaxe foi ampliada e os caminhos de disparo passaram a incluir esses arquivos, `legacy.html`, `loader.css` e `loader.js`. Isso não muda as rotinas de conteúdo nem cria um bloqueio editorial.

## Gaps entre governança e implementação

| Prioridade | Exigência e evidência | Gap e consequência | Encaminhamento recomendado |
|---|---|---|---|
| Alta | Template atual: 33 campos; migrador/auditor: 26 | Promessa e seis campos de futuros não possuem contrato próprio na automação; migração pode deslocá-los para campo genérico | Compartilhar schema versionado entre template, migrador e auditor; testar preservação e ausência de perda antes de reativar migração |
| Alta | Pistas são memória acumulativa, saída só por decisão explícita | Seção automática substituída; candidatos desaparecem após links serem convertidos | Acumular candidatos com identificador e estado, preservando origens e histórico; separar detecção de decisão |
| Alta | Mudanças materiais devem atualizar log | Workflow altera notas e faz commit sem registrar mudanças no log | Gerar resumo factual de alterações ou submeter mutações à revisão com log antes de integrar |
| Alta | Propagação bidirecional quando a arquitetura pedir | Rede cobre somente links da ficha para cinco camadas; exclui conceitos, variáveis e parentes | Ampliar cobertura com critérios por tipo de relação; não exigir backlinks exaustivos em ensaios curados |
| Média | Um link deve comunicar destino existente | Indexador e auditor têm resolvers diferentes; indexador escolhe primeiro candidato ambíguo | Resolver comum; ambiguidade como achado explícito; verificar anchors separadamente |
| Média | Propagação de governança alinha modelos e auditorias | Divergência 33/26 persiste e o relatório pode ficar “verde” | Comparação automática de schema; revisão de dependências quando mudar um template |
| Média | Ficha única após narrativa, antes de referências; genealogias têm ficha própria | Auditoria limita-se a presença de tabela em artefatos; publicação moderna só recolhe títulos antigos | Verificar posição/quantidade por tipo; alinhar nomes recolhíveis ao template atual |
| Média | Procedência e estados têm significados definidos | Presença textual é aceita sem enumeração, conteúdo ou adequação | Validar valores e placeholders; separar avisos de bloqueios; manter avaliação semântica |
| Média | Índices e home representam rede existente | Índice ausente é ignorado; home exige todas genealogias/percursos sem checar status | Distinguir arquivo de índice ausente, nota não indexada e nota não publicável |
| Média | Documentação e experiência pública devem concordar | Indexador não respeita `publicar: false`; status não filtra publicação | Definir explicitamente política de publicação e aplicá-la ao índice, fallback e navegação |
| Média | Operação só termina com integração verificada | Auditorias reportam achados com sucesso; não há limiar ou gate | Modo estrito para invariantes objetivas, mantendo capitalização e qualidade argumentativa como revisão |
| Baixa | Compatibilidade e manutenção da publicação | Módulos duplicam responsabilidades, dependem de DOM e rotas por título | Eventos de renderização explícitos, identificação estável e matriz moderna/legacy |

História documentada, distinção entre interpretação e intenção, pertinência das fontes, contingência genealógica, qualidade de argumento e preservação intelectual não devem virar promessas de validação por regex. Essas exigências continuam precisando de leitura e pesquisa. O gap operacional é não registrar que essa revisão foi feita, e não simplesmente faltar um teste sintático.

## Evidência reproduzida no acervo

Auditorias executadas numa cópia isolada, sem rodar scripts mutadores. Os relatórios completos acompanham este documento. Estado anterior à alteração do loader:

- Editorial: 40 candidatos de capitalização; zero ocorrências nas categorias de estruturas legadas auditadas; zero conceitos ou variáveis sem metadados obrigatórios; zero falhas na ficha segundo o schema antigo de 26 campos.
- Rede: `Mitologias da IA` ausente do índice de conceitos; sete relações sem retorno; um drift de tipo de design.
- Relações sem retorno: App de tracking de gastos → Paul Ricoeur; Botão Regenerar → Design de Interface; Calendário → Norbert Elias; Câmera fotográfica → Paul Ricoeur e Permanência e memória externa; Fila → Henri Bergson; Portfólio → Permanência e memória externa.
- O drift de Botão Regenerar → Design de Interface duplica a relação já listada entre os sete retornos ausentes.
- Busca: 214 entradas e zero wikilinks não resolvidos no escopo e resolver do indexador. Isso não demonstra inexistência de links quebrados na governança, inbox, templates ou anchors.

## Alteração de interface entregue

O loader reproduz a linha central e o overlay do Vault da PUC, com cores por tema, conclusão e fade, acessibilidade `role=status` e preferência por movimento reduzido. Aparece na carga inicial e nas transições para início, campos/índices e artigos. A conclusão é chamada após renderização ou erro; um limite de 10 segundos evita ocultação indefinida se um módulo ou serviço não responder. A camada editorial da home entra na espera inicial. Respostas antigas de artigos não substituem uma navegação mais nova na página moderna.

As rotinas editoriais e os gaps descritos acima foram documentados, não corrigidos nesta tarefa. Qualquer correção futura do migrador deve preservar os 33 campos e a informação existente antes de rodar sobre o acervo.
