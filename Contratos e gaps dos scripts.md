---
title: "Contratos e gaps dos scripts"
type: "manual"
status: "ativo"
publicar: false
---

# Contratos e gaps dos scripts

Atualizado em 6 de outubro de 2026, após aprovação das decisões pelo responsável pelo vault. Este documento descreve os scripts atuais, seus contratos e os gaps que permanecem. A governança principal continua em `AGENTS.md`, `me.md`, `Instrucoes de Arqueologia.md` e `Guia de escrita.md`.

## Decisões aplicadas

A ficha arqueológica oficial tem 33 campos. Template, migrador e auditor compartilham essa definição; a validação detecta divergências. A migração revisada acrescentou sete campos a 93 artefatos, preservando todas as linhas anteriores na mesma ordem. Campos sem investigação permanecem como “Ainda não explicitado.”, sem inferência histórica automática. Nove fichas tiveram seus registros de promessa e futuros recuperados literalmente do agrupamento feito pelo workflow antigo, mantendo o texto anterior como evidência.

Scripts de conteúdo geram propostas. A aplicação exige revisão e uma chamada explícita com `--apply`, que recusa originais modificados ou candidatos alterados desde a geração. Pistas são acumulativas, preservam origens e histórico e não provocam conversão automática dos links.

O catálogo e o pacote do site excluem `publicar: false`. Rascunhos permanecem públicos com aviso visível. O site usa um pacote filtrado, publicado pelo GitHub Actions após validação. A visibilidade do repositório continua sendo uma configuração independente.

Schema incompatível, fichas estruturais inválidas, links públicos ambíguos ou sem destino e possíveis perdas detectadas em propostas impedem a publicação. Capitalização e reciprocidade permanecem avisos para revisão contextual.

## Contrato operacional comum

Os módulos em `scripts/` usam Node.js, com Node 24 no workflow, e bibliotecas nativas. Devem ser executados a partir da raiz do vault; a raiz é `process.cwd()`. Não há dependência de instalação de pacotes para as rotinas de manutenção ou testes de contrato.

Scripts de conteúdo produzem `.review/<nome>/manifest.json` e candidatos nos caminhos relativos originais. O manifesto registra hash do original e do candidato. Revisar os candidatos antes de chamar o mesmo script com `--apply`; alterações posteriores exigem nova proposta. Toda alteração material aplicada deve atualizar `log.md`. A proposta não deve ser tratada como aprovação editorial automática.

## Rotinas de manutenção e publicação

### `scripts/artifact-schema.mjs`

Exporta `schemaVersion: 2`, a lista ordenada dos 33 campos com aliases e a função de normalização de nomes de campos. Não lê nem escreve o acervo. É a definição compartilhada pelo migrador, auditor e gate. O template continua sendo legível e editável em Markdown; sua concordância com o módulo é testada antes de publicar.

### `scripts/review-changes.mjs`

Suporte comum para gerar e aplicar propostas. Entrada: nome da rotina, caminho, original e candidato, com eventuais perdas detectadas. Saída: candidatos e manifesto em `.review/`. Aplicação explícita faz preflight de todos os hashes antes de escrever. Caminhos fora da raiz, propostas obsoletas, candidatos alterados ou perdas declaradas são recusados. O helper não substitui leitura humana; a segurança da transformação também depende das invariantes da rotina que o chama.

### `scripts/normalize-sentence-case.mjs`

Lê Markdown das nove camadas públicas, incluindo subpastas. Usa mapas conservadores para headings H2–H6, títulos entre aspas no frontmatter e primeiro H1. Não renomeia arquivos, não converte todos os nomes pela força e não edita texto corrido. Execução padrão propõe mudanças; `--apply` aplica a proposta previamente gerada e revisada. Não atua sobre a interface. Capitalização fora dos mapas continua exigindo revisão.

### `scripts/migrate-artifact-sheets.mjs`

Lê artefatos, incluindo subpastas, e encontra uma única ficha H2. Uma ficha ausente, duplicada, sem tabela reconhecível, com campos duplicados ou texto intercalado exige revisão manual e não é sobrescrita. A rotina preserva valores, aliases concorrentes e campos extras; recupera os sete registros quando um bloco completo e ordenado do migrador antigo está preservado em consequências, sem apagar esse registro; monta os 33 campos em ordem e acrescenta placeholders quando faltam registros. Narrativa, referências e texto fora da tabela permanecem intactos.

Execução padrão gera candidatos e verificações de preservação; `--apply` aplica somente a proposta verificada. Fichas já completas são idempotentes. A rotina deixou de inferir organizações, classificações e leituras a partir de menções ou índices: novas relações precisam ser decididas editorialmente. Campos extras não são despejados em “Consequências inesperadas”. Estruturas legadas não reconhecidas permanecem para revisão manual.

### `scripts/consolidate-unresolved-links.mjs`

Consome `link-report.json` atualizado e o arquivo de pistas. Propõe inserções cumulativas de destino, origem e estado pendente, com identificador por par destino/origem. Preserva conteúdo anterior e delimitadores. Um relatório vazio não apaga pistas; uma nova origem pode ser adicionada a uma investigação existente. Histórico identificado evita reabertura silenciosa de registros já decididos.

Não altera artigos nem converte links em texto. A aplicação ao arquivo de pistas é explícita. Delimitadores inconsistentes ou relatório ausente interrompem a operação. Promoção, fusão e descarte são decisões editoriais que devem permanecer registradas com justificativa.

### `scripts/build-search-index.mjs`

Lê Markdown das nove camadas públicas: tipos de design, índices, conceitos, variáveis, artefatos, genealogias, percursos, autores e empresas. Extrai títulos, metadados, tags, aliases, headings, texto e wikilinks. Produz `search-index.json` v2 e `link-report.json`.

Resolve caminho qualificado de maneira exata após normalização; nomes, títulos e aliases devem ter candidato único. Ambiguidade é relatada, sem escolher o primeiro resultado. Referências a notas existentes com `publicar: false` são reconhecidas internamente, mas essas notas, seu texto, relações públicas e backlinks não entram no catálogo. Rascunhos entram com status. Governança e templates possuem exceções históricas no relatório de links.

Índice: `version`, `generatedAt`, `articleCount`, `brokenLinkCount`, `articles`. Entradas: title, fileTitle, category, sourcePath, type, status, publicar, origem, grau, eixo, tags, aliases, headings, headingData, plainText, related, unresolved, ambiguous e backlinks. Relatório: contagens e listas de links não resolvidos e ambíguos. Não altera notas. Backlinks calculados não equivalem a escrita recíproca nos artigos.

### `scripts/audit-editorial.mjs`

Lê as nove camadas, com subpastas. Verifica candidatos de capitalização, estruturas legadas, percursos numerados, metadados obrigatórios de conceitos e variáveis, ficha única de artefato e presença dos 33 campos compartilhados. Escreve `editorial-report.json`, com contagens, caminhos e linhas quando disponíveis, além da versão do schema.

Não faz revisão intelectual. Nomes próprios podem gerar falsos positivos; presença de campo não comprova adequação histórica ou qualidade de argumento. Achados são classificados pelo gate: problemas estruturais de ficha bloqueiam; capitalização gera aviso.

### `scripts/audit-network.mjs`

Lê as nove camadas e `index.md`; verifica duplicidade de títulos, presença nos cinco índices existentes, genealogias/percursos na home, nós órfãos, retorno de links da ficha a genealogias, percursos, autores, empresas e tipos de design, além de concordância de classificação disciplinar.

Produz `network-report.json` com escopo, contagens por tipo e ocorrências. Mantém resolver próprio de caminhos/basenames, sem títulos/aliases. A cobertura é parcial: conceitos, variáveis e parentes entre artefatos não recebem teste completo de reciprocidade. Os resultados permanecem avisos para revisão contextual.

### `scripts/validate-publication.mjs`

Consome template, schema compartilhado e relatórios de links, editorial e rede; inspeciona perdas declaradas nos manifestos de propostas presentes. Confere 33 campos na mesma ordem, fichas inválidas e links públicos ambíguos ou sem destino. Escreve `publication-report.json` e retorna falha quando há bloqueios. Capitalização e rede aparecem como contagens de aviso.

O bloqueio de perda cobre riscos detectados pela transformação e pelos testes de preservação; não promete detectar toda perda intelectual numa reescrita humana. Revisão semântica e comparação com o original continuam obrigatórias.

### `scripts/build-public-site.mjs`

Exige `publication-report.json` aprovado. Monta `.site/` com HTML, CSS, módulos de navegador, índice e apenas Markdown publicável. Inclui `.nojekyll`. Não inclui manuais internos, templates, relatórios ou notas excluídas. Não publica sozinho; o workflow envia o pacote. Novos tipos de anexos ou mídia precisarão de suporte explícito no empacotamento.

## Módulos do navegador

Os scripts usam IDs/classes do HTML, rotas hash e observadores de DOM. Essas dependências continuam implícitas; os módulos não expõem APIs próprias de renderização, com exceção do loader.

| Script | Entradas e gatilho | Resultado | Limites |
|---|---|---|---|
| `script.js` | Índice local, Markdown do próprio site, cliques, busca e rota | Home, campos, artigos, TOC, busca e tema; proteção contra respostas obsoletas e aviso de rascunho | Falha fechada sem índice; não usa árvore GitHub que poderia ignorar exclusões. Rotas ainda dependem do título |
| `enhancements.js` | Índice local; DOMContentLoaded, rotas e MutationObserver | Lentes, metadados, relações e fichas recolhíveis, incluindo `Ficha arqueológica` atual | Segunda leitura do índice e integração por DOM; relações derivadas não comprovam reciprocidade na fonte |
| `puc-parity.js` | Rolagem, DOM e rota | Navbar, breadcrumbs e limpeza de navegações redundantes | Compartilha responsabilidades com script.js; apenas página moderna |
| `footnotes.js` | Chamadas e definições `[^rótulo]` no leitor; DOM e cliques | Numeração de referências, navegação e retorno | Depende do HTML de marked; não verifica pertinência de fontes |
| `callouts.js` | Blockquotes `[!tipo]`; DOM | Rótulos e classes de callout | Sinal de dobramento fica em dataset; não implementa por si um controle expansível |
| `legacy-ios12.js` | Índice local, Markdown do próprio site, rotas e busca | Página compatível, referências, tabelas, aviso de rascunho e loader | Busca por título/categoria; sem riqueza completa dos módulos modernos; mesma política de exclusão |
| `loader.js` | Head do HTML e chamadas da aplicação | Overlay e linha no padrão PUC; `iniciar` retorna token, `finalizar` ignora token antigo, `pronto` libera a carga inicial | Fallback de dez segundos libera a tela; indicador visual sem porcentagem real |

`loader.css` fornece fundo por tema, linha de progresso, conclusão, fade e respeito a movimento reduzido. A home inicial aguarda catálogo e camada editorial; legacy aguarda o catálogo. Erros encerram o indicador e permitem mostrar o estado de falha.

## Workflow e testes

`.github/workflows/build-search-index.yml` roda em pushes a main, pull requests e despacho manual. Confere sintaxe, executa oito testes de contrato, gera índice/auditorias, prepara propostas sem aplicar, executa o gate e monta o site filtrado. Relatórios e propostas são artefatos revisáveis. Pull requests validam sem publicar. Em main, a implantação depende do job de validação aprovado, com permissão de Pages restrita ao job de deployment.

O workflow não reescreve notas, não cria commits de conteúdo e não converte links. A configuração do GitHub Pages precisa usar publicação por workflow para que o envio direto da raiz da branch não contorne o gate.

`tests/contracts.test.mjs` verifica ficha completa idempotente; acréscimo de sete campos preservando conteúdo; recusa de proposta obsoleta; proteção de estrutura não reconhecida; pistas cumulativas com origens e relatório vazio; exclusão de publicação e ambiguidade; bloqueios versus avisos.

## Gaps restantes

- Revisão histórica e semântica: fontes, intenção atribuída, contingência, qualidade de tese e propagação de correções continuam exigindo leitura.
- Rede: cobertura parcial de reciprocidade e resolver diferente do indexador. Não há exigência de backlinks exaustivos em ensaios curados.
- Editorial: presença de metadados não valida todos os valores, ficha de genealogia ou posição da ficha antes das referências.
- Links: o gate cobre destinos de notas no catálogo; anchors, governança, inbox e templates não recebem validação completa.
- Navegação: rotas por título podem mudar quando o título editorial muda. Os módulos ainda se coordenam por alterações do DOM.
- Migração: listas e formatos fora da tabela reconhecida exigem revisão manual. Não existe dedução automática de conteúdo para os sete campos novos.
- Mídia: novos anexos precisam ser incluídos explicitamente no pacote público.

## Evidências

O retrato inicial analisado tinha 214 entradas, 40 candidatos editoriais e nove ocorrências de rede. Ao integrar commits remotos mais recentes, o acervo passou a 250 entradas. Após a migração revisada: zero links públicos não resolvidos, zero ambiguidades, zero problemas estruturais de ficha e zero bloqueios. Permanecem 53 candidatos de capitalização e 16 ocorrências de rede, além de um heading legado em conceito; esses achados exigem revisão contextual e não foram corrigidos por preenchimento automático.
