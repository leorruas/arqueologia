---
title: "Guia de escrita"
type: "manual"
status: "ativo"
publicar: false
---

# Guia de escrita

Este documento define as regras editoriais da Arqueologia do Design. Ele vale para novas notas, revisões, ingestões e textos produzidos com apoio de LLM.

## Português do Brasil

O idioma editorial padrão é português do Brasil. Preferir construções claras, formais e naturais em pt-BR. Evitar traduções literais do inglês quando houver formulação corrente em português.

## Sentence case

Usar sentence case em títulos editoriais, headings, subtítulos, labels, tabs, botões e nomes genéricos de seção. Apenas a primeira palavra começa com maiúscula, além dos casos exigidos pela ortografia.

Correto:

- `História e contexto de criação`
- `Inovação e impacto`
- `Ficha arqueológica`
- `Conceitos relacionados`
- `Como o design aprendeu a guardar`

Evitar:

- `História e Contexto de Criação`
- `Inovação e Impacto`
- `Ficha Arqueológica`
- `Conceitos Relacionados`

Preservar grafias oficiais e nomes próprios, como `Xerox PARC`, `GitHub`, `Jobs to Be Done`, `Value Proposition Ad Lib`, `iPhone`, `Bauhaus`, nomes de pessoas, obras e organizações.

Nomes de arquivo são identificadores. Não renomear arquivos existentes apenas para corrigir capitalização, porque isso pode quebrar wikilinks, URLs e histórico. Corrigir a forma visível no frontmatter e nos headings.

## Narrativa como forma principal

Parágrafos são a unidade principal. Um estudo deve poder ser lido como ensaio ou capítulo, não apenas consultado como ficha.

A abertura deve começar por um problema, uma cena, um conflito, um gesto ou uma pergunta concreta. Evitar começar com ficha técnica ou definição enciclopédica quando houver uma entrada narrativa mais útil.

A estrutura metodológica orienta a pesquisa, mas não precisa aparecer como estrutura visível do texto. Problema, mundo anterior, invenção, refinamento, popularização, padronização, hipótese sobre comportamento, poder, impacto e legado são dimensões a investigar. Elas não são headings obrigatórios.

Em artefatos, preferir de três a cinco seções editoriais com títulos próprios que avancem o argumento. Um heading deve marcar uma mudança real de raciocínio. Evitar microseções como `Problema`, `Hipótese`, `Poder`, `Legado` ou quatro seções separadas para invenção, refinamento, popularização e padronização quando essas distinções puderem ser explicadas naturalmente em prosa.

Listas são adequadas para comparação, sequência, inventário, ficha, etapas ou consulta rápida. Quando uma sequência de tópicos puder ser transformada em argumento contínuo sem perda de clareza, preferir parágrafos.

## Afirmação e incerteza

Distinguir três regimes:

- história documentada: afirmações sustentadas por evidência;
- interpretação arqueológica: leitura produzida pelo projeto;
- hipótese em aberto: relação plausível ainda não demonstrada.

Essa distinção pode aparecer pela própria redação e pelas referências, sem exigir três blocos separados em todo artigo.

Evitar verbos de intenção quando a intenção do designer não estiver documentada. Formulações como `o artefato parece pressupor`, `uma hipótese é`, `podemos interpretar` ou `essa relação sugere` são preferíveis quando o texto está inferindo.

## Autoria e mudança histórica

Separar invenção, refinamento, popularização e padronização. Não chamar automaticamente de inventor quem popularizou uma solução, nem atribuir a transformação cultural apenas à primeira implementação conhecida.

Quando houver disputa de autoria, apresentar as versões relevantes e explicar por que a disputa existe. Quando não houver evidência suficiente para identificar uma primeira ocorrência, preferir `atribuição difusa`, `primeira ocorrência conhecida` ou formulação equivalente.

## Referências

A camada pública de referências passa a ser implantada progressivamente durante a revisão dos artigos. Afirmações históricas materiais devem trazer uma nota de referência junto da frase ou do parágrafo que depende daquela evidência. A referência completa fica na seção `Referências` ao final do estudo.

Fontes devem sustentar a função para a qual são citadas. Distinguir:

- fonte histórica ou primária para data, autoria, produto e contexto;
- fonte sobre o artefato para reconstrução de uso e desenvolvimento;
- fonte teórica para conceitos usados na interpretação;
- referência comparativa para hipóteses ou parentescos.

Não usar uma obra teórica como prova de um fato histórico apenas porque ela é conceitualmente relacionada ao tema. Não adicionar bibliografia decorativa. Sempre que possível, priorizar documentação primária, acervos, manuais, patentes, materiais contemporâneos ao artefato e literatura acadêmica ou histórica adequada.

Se uma fonte existente não sustentar a afirmação à qual parece associada, manter a informação apenas se houver outra evidência adequada. Caso contrário, sinalizar a incerteza em vez de completar a lacuna por plausibilidade.

## Fichas

Notas que possuem ficha definida em seu template devem ter uma única ficha de consulta, posicionada depois da narrativa e antes das referências. Artefatos usam `Ficha arqueológica`. Genealogias usam `Ficha da genealogia`. Conceitos e variáveis seguem seus próprios templates. Tipos de design e percursos não precisam de ficha: neles, a síntese deve permanecer incorporada ao argumento e às conexões finais.

A ficha não deve repetir longamente a narrativa. Ela comprime o estudo em campos comparáveis. Informações que não cabem sem perda de nuance permanecem no corpo do artigo.

## Tipos de design

Notas em `00 tipos de design/` são **ensaios disciplinares**, não verbetes enciclopédicos nem índices de profissionais. O objetivo não é responder apenas “o que é design gráfico?” ou “quem foram seus pioneiros?”, mas investigar **que classe de problema passou a ser percebida, nomeada e tratada como campo de projeto**.

A abertura deve partir de uma tensão concreta do campo: tornar linguagem visível, tornar sistemas operáveis, industrializar objetos sem perder inteligibilidade, coordenar serviços distribuídos, projetar comportamento probabilístico etc. A história da disciplina entra para explicar como essa tensão ganhou práticas, instituições, vocabulários e critérios próprios.

Preferir de três a cinco seções editoriais que avancem um argumento. Evitar como esqueleto visível os headings `Origens e surgimento`, `Evolução e desenvolvimento`, `Figuras e autores de destaque`, `Empresas e estúdios de destaque` e equivalentes. Autores, organizações, escolas e tecnologias devem aparecer no ponto da narrativa em que explicam uma transformação, com seu papel histórico especificado.

Um tipo de design deve, quando relevante:

- mostrar o problema que existia antes de o campo receber um nome profissional;
- distinguir práticas antigas da posterior consolidação da disciplina;
- explicar que hipótese recorrente sobre pessoas, materiais, informação ou organização o campo tende a operar;
- mostrar fronteiras porosas com outros tipos de design, sem fingir territórios exclusivos;
- usar artefatos do vault como evidência concreta de como a área pensa, e não como uma lista exaustiva de backlinks;
- terminar abrindo rotas de leitura para conceitos, genealogias, percursos e um conjunto **curado** de artefatos representativos.

A nota de tipo não substitui o `Índice de artefatos`. Se a única função de um bloco for listar todos os estudos classificados naquela área, o conteúdo pertence ao índice, não ao ensaio disciplinar.

## Genealogias

Genealogias são textos de síntese, não listas de backlinks. Devem começar pela pergunta que aproxima artefatos aparentemente diferentes, explicar em prosa o mecanismo recorrente e mostrar onde a comparação funciona e onde deixa de funcionar.

Não presumir descendência histórica. O parentesco pode ser histórico, funcional, semiótico, comportamental, institucional ou uma hipótese comparativa do projeto. Essa natureza deve ficar clara no texto e na ficha.

A genealogia pode usar referências dos estudos ligados como base interna. Deve adicionar referência própria quando fizer uma afirmação histórica ou teórica externa que não esteja apenas sintetizando os artefatos já estudados.

## Percursos

Notas em `05 percursos/` são **capítulos de leitura**, não playlists de links nem listas numeradas de artefatos. Um percurso existe porque uma pergunta ganha força quando atravessa vários estudos em determinada ordem.

A unidade visível do texto deve ser a **mudança de ideia**, não o nome de cada artigo. Evitar o padrão `## 1. [[Artefato]]`, `## 2. [[Artefato]]` e equivalentes como estrutura principal. Links devem aparecer dentro de parágrafos que expliquem por que a passagem de um estudo para outro altera a pergunta.

Um percurso deve:

- abrir com uma pergunta ou transformação claramente formulada;
- declarar quando a sequência é editorial e não uma genealogia histórica;
- organizar de três a seis movimentos conceituais com headings narrativos próprios;
- conectar pelo menos dois artefatos dentro do mesmo argumento sempre que a comparação for o que produz a descoberta;
- mostrar o que muda de um estágio para outro — custo, capacidade, suporte, comportamento, poder, temporalidade, visibilidade ou responsabilidade;
- incluir contradições e bifurcações quando a história não for linear;
- terminar com uma formulação que só se torna visível depois de percorrer os casos e apontar genealogias ou estudos para continuidade.

Um percurso não deve resumir cada artigo isoladamente. Seu valor está no **intervalo entre os artigos**: a relação, a mudança e a pergunta que emerge quando um caso altera a leitura do anterior.

## Relações entre artefatos

Ao dizer que dois artefatos são parentes, indicar a natureza da relação quando ela não for evidente: histórica, funcional, semiótica, comportamental, institucional ou hipótese comparativa.

Semelhança funcional não implica descendência histórica.

## Wikilinks e pistas

Criar `[[wikilink]]` apenas quando a nota de destino existir. Um link comunica ao leitor e ao grafo que há conteúdo disponível naquele destino; portanto, não deve funcionar como marcador de uma intenção futura.

Quando uma pessoa, empresa, conceito, relação ou artefato ainda não tiver nota, manter a expressão como texto simples. Se ela tiver valor potencial para investigações futuras, registrá-la em `Pistas de pesquisa.md`.

`Pistas de pesquisa.md` é uma memória editorial acumulativa, não um relatório descartável de links quebrados. Uma pista registrada permanece até que exista uma decisão explícita sobre seu destino. Ela pode ser promovida a estudo, fundida com uma pista mais adequada ou descartada com justificativa; não deve desaparecer porque uma automação foi executada, porque o link de origem deixou de existir ou porque o grafo atual está limpo.

A automação pode acrescentar candidatos detectados mecanicamente, mas deve mantê-los numa seção separada e nunca substituir as pistas curadas. Pistas manuais registram **perguntas que queremos continuar capazes de fazer**, mesmo quando ainda não sabemos que tipo de nota elas poderão se tornar.

Uma pista não é uma promessa de estudo. Ela é uma possibilidade preservada para avaliação posterior.

## Propagação de governança

Mudanças editoriais também precisam ser tratadas como mudanças de sistema. Se o formato de uma nota, o schema de uma ficha, a função de uma pasta ou uma regra de escrita mudar, não basta corrigir o texto que enuncia a nova regra. Verifique se os templates ainda produzem o formato correto, se a auditoria ainda testa a invariável certa e se `README.md`, `index.md` e `00 índices/Sobre o projeto.md` continuam descrevendo o mesmo modelo.

A documentação interna não deve divergir da experiência pública. Da mesma forma, um template não deve continuar fabricando o formato que o guia passou a proibir. Sempre que uma regra mudar, procure suas representações materiais no vault e propague a alteração apenas onde houver dependência real.

Nem toda qualidade editorial deve virar teste automático. A auditoria é adequada para invariantes estruturais, como metadados, schemas, headings legados e links. Qualidade de argumento, força da tese e pertinência de uma relação continuam exigindo leitura humana ou análise semântica.

## Preservação durante refatorações

Antes de reescrever uma nota existente, fazer um inventário do conteúdo original: fatos, exemplos, distinções, hipóteses, relações, autores, empresas, conceitos, variáveis, genealogias, perguntas em aberto e fontes.

Depois da reescrita, comparar a nova versão com esse inventário. Reorganizar, fundir redundâncias e melhorar formulações é permitido. Uma informação substantiva só pode desaparecer quando for duplicada de fato ou quando houver motivo para considerá-la incorreta, e essa correção deve ser justificável pela evidência disponível.

Quando a revisão acrescentar contexto externo, separar o que veio do artigo anterior do que foi pesquisado durante a refatoração. Não preencher lacunas históricas por plausibilidade.

## Densidade e repetição

Evitar repetir na narrativa informações já presentes na ficha, salvo quando forem necessárias para construir o argumento. Evitar também repetir a mesma hipótese em seções diferentes com palavras ligeiramente diferentes.

Cada seção deve acrescentar uma nova camada da investigação. Se um texto pode perder um heading sem perder orientação, provavelmente esse heading era apenas um rótulo de ficha disfarçado de narrativa.

## Revisão antes de publicar

Antes de considerar um estudo publicado, verificar:

- sentence case em português do Brasil;
- leitura fluida em parágrafos antes da camada documental;
- dimensões metodológicas integradas ao argumento sem fragmentação desnecessária;
- distinção entre fato, interpretação e hipótese;
- invenção, refinamento, popularização e padronização quando relevantes;
- consistência dos wikilinks;
- procedência dos conceitos;
- variáveis usadas como eixos comparáveis;
- referências junto das afirmações históricas centrais;
- adequação entre cada afirmação e a fonte usada para sustentá-la;
- ficha padronizada quando o tipo de nota possuir ficha;
- tipos de design escritos como ensaios disciplinares, sem estrutura enciclopédica de pioneiros/marcos/empresas;
- percursos escritos como argumentos entre estudos, sem sequência de resumos isolados;
- perguntas e relações promissoras ainda sem nota preservadas em `Pistas de pesquisa.md`;
- comparação com o inventário da versão anterior para evitar perda de conteúdo.
