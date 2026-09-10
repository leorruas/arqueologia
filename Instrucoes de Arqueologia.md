---
title: "Instruções de arqueologia"
type: "manual"
status: "ativo"
---

# Instruções de arqueologia do design

Este documento define o método de investigação do vault.

## Objetivo geral

O projeto investiga como pequenas decisões de projeto mudam a forma como as pessoas pensam, agem, trabalham e se relacionam com o mundo.

> [!IMPORTANT]
> O projeto estuda ideias. Artefatos são evidências concretas dessas ideias; autores, empresas e tecnologias entram como contexto histórico.

## Protocolo de investigação

Toda análise parte de um artefato específico. A pergunta recorrente é: **por que isso é assim e não de outra forma?**

Procure reconstruir:

- qual problema existia antes;
- como as pessoas lidavam com ele;
- quem percebeu a oportunidade;
- quais soluções concorrentes existiam;
- como surgiu a primeira solução;
- quem inventou, refinou, popularizou e padronizou;
- por que a solução pareceu estranha ou natural em sua época;
- que comportamento humano ela aproveitou;
- que comportamento novo ela ajudou a produzir;
- que capacidades ampliou ou enfraqueceu;
- que custos invisíveis criou;
- quem ganhou ou perdeu poder;
- que descendentes e parentes conceituais surgiram depois.

## Regimes de afirmação

Toda nota deve distinguir, quando a distinção for relevante, três regimes.

### História documentada

Afirmações sobre data, autoria, produto, contexto, decisão ou difusão sustentadas por evidência histórica. Fontes primárias, acervos, documentação de produto e pesquisa histórica devem ser preferidas para essas afirmações.

### Interpretação arqueológica

Leitura produzida pelo projeto sobre a lógica do design: que hipótese sobre comportamento parece estar embutida no artefato, que capacidade ele reorganiza, qual relação de poder estabelece e por que pode ter funcionado.

Interpretações devem ser formuladas como interpretações, sem serem apresentadas como intenção comprovada do criador quando não há evidência disso.

### Hipótese em aberto

Relações plausíveis, genealogias especulativas ou perguntas ainda não verificadas. Elas são desejáveis porque movem a investigação, mas devem permanecer claramente marcadas como hipóteses.

## Quatro níveis de história

Nunca trate automaticamente o inventor como o responsável pela mudança histórica. Diferencie:

1. **Invenção**: primeira formulação ou implementação identificável.
2. **Refinamento**: mudança que torna a solução mais clara, eficaz ou replicável.
3. **Popularização**: momento em que a solução alcança grande número de pessoas.
4. **Padronização**: momento em que deixa de parecer uma escolha e passa a ser expectativa.

Quando houver disputa de autoria, registre as interpretações concorrentes e a razão da disputa.

## Quatro camadas críticas

Toda análise profunda deve atravessar quatro dimensões:

1. **Problema**: o que o artefato tenta resolver ou coordenar.
2. **Hipótese**: o que ele pressupõe sobre comportamento humano.
3. **Poder**: quem é fortalecido, enfraquecido, visibilizado ou submetido por sua existência.
4. **Legado**: quais novos comportamentos, artefatos e expectativas se tornam possíveis.

Perguntas auxiliares: o que ele simplifica? O que esconde? Que inferências elimina? Que responsabilidade transfere? Que comportamento passa a parecer normal depois dele?

## Conceitos e procedência

Conceitos do vault devem registrar uma de três procedências:

- **literatura**: conceito estabelecido ou discutido em literatura externa;
- **adaptação**: conceito externo reinterpretado para a arqueologia do design;
- **hipótese-do-projeto**: formulação criada dentro desta investigação.

Uma hipótese do projeto pode ser valiosa sem ser tratada como teoria consolidada.

## Variáveis

Variáveis são eixos comparáveis que decisões de design podem aumentar, reduzir ou redistribuir. Sempre que possível, devem ter polos claros, como baixa ↔ alta permanência, baixa ↔ alta reversibilidade ou alto ↔ baixo custo de busca.

Se algo não puder ser tratado como eixo comparável, provavelmente pertence a `01 conceitos/` e não a `02 variaveis/`.

## Genealogias

A pasta `04 genealogias/` organiza parentescos entre artefatos de áreas diferentes. Genealogia aqui não significa necessariamente descendência histórica direta. Cada relação deve indicar se é histórica/documentada, funcional, semiótica, comportamental ou hipótese comparativa.

Isso evita transformar analogias interessantes em afirmações históricas falsas.

## Percursos

A pasta `05 percursos/` organiza sequências editoriais. Um percurso não cria uma nova taxonomia: ele monta uma leitura. Deve começar com uma pergunta e conduzir o leitor por estudos existentes, explicitando por que cada passagem importa.

## Protocolo de propagação

Criar ou revisar um estudo não termina na nota principal. A operação só está concluída depois de verificar quais outras camadas do vault precisam mudar por causa do novo conhecimento. O agente deve tratar cada artigo como um nó que pode alterar a rede existente.

### Varredura obrigatória de relações

Depois de escrever ou revisar um artefato, procure ativamente relações com:

- `00 tipos de design/`: uma ou mais áreas em que a decisão de projeto realmente opera;
- `01 conceitos/`: mecanismos, ideias ou interpretações reutilizáveis;
- `02 variaveis/`: eixos comparáveis que o artefato aumenta, reduz ou redistribui;
- `03 artefatos/`: antecedentes, descendentes, concorrentes e parentes históricos, funcionais, semióticos ou comportamentais;
- `04 genealogias/`: famílias de ideias às quais o artefato acrescenta evidência;
- `05 percursos/`: sequências de leitura cuja argumentação fica mais clara com o novo estudo;
- `autores/`: pessoas ou equipes com papel material em invenção, refinamento, popularização, padronização ou formulação teórica;
- `empresas/`: organizações cujo papel histórico ajuda a explicar a circulação ou transformação da ideia;
- `00 índices/Livros Indicados.md`: obras realmente úteis para sustentar a história, a interpretação ou a investigação futura.

A varredura deve considerar tanto relações já nomeadas no artigo quanto relações descobertas ao comparar o novo estudo com o acervo existente.

### Propagação bidirecional

Sempre que uma relação relevante for confirmada, não basta criar um wikilink no artigo novo. Verifique também se a nota relacionada possui seção, inventário ou argumento que deva receber o vínculo de volta. Um novo artefato pode exigir atualização de uma genealogia, de um percurso, de uma variável, de um conceito, de um tipo de design ou de outro artefato mais antigo.

O objetivo é evitar relações unilaterais e artigos órfãos. A ausência de vínculo continua válida quando não houver base suficiente: não force classificações apenas para preencher a rede.

### Quando criar notas secundárias

Crie uma nova nota secundária quando ela tiver utilidade própria além do artigo que a originou.

- **Conceito**: criar quando a ideia explicar mais de um caso, vier da literatura ou puder funcionar como hipótese reutilizável do projeto. Uma observação local deve permanecer no artefato.
- **Variável**: criar quando houver um eixo comparável observável em diferentes artefatos. Se não houver polos ou possibilidade de comparação, trate como conceito ou hipótese.
- **Autor**: criar quando a pessoa tiver contribuição material para a ideia investigada ou aparecer de forma recorrente no acervo. Menções incidentais não justificam perfil.
- **Empresa**: criar quando a organização tiver papel explicativo na história da ideia, e não apenas porque fabricou, vendeu ou hospedou o artefato.
- **Livro**: registrar em `00 índices/Livros Indicados.md` quando a obra for uma leitura útil para o projeto e relacioná-la ao autor correspondente. O vault não exige uma nota própria para cada livro.
- **Genealogia**: criar quando houver uma família de relações que atravesse casos e, de preferência, disciplinas ou épocas. Um único parentesco entre dois artefatos normalmente deve ficar nas notas existentes até surgir um padrão maior.
- **Percurso**: criar quando houver uma pergunta editorial que peça uma sequência de estudos. Um percurso não deve existir apenas para agrupar artigos do mesmo assunto.
- **Tipo de design**: criar uma nova área apenas quando houver um domínio reconhecível de prática ou uma lente disciplinar estável que não esteja representada no mapa atual.

### Critério para genealogias e percursos existentes

Antes de criar uma nova genealogia ou percurso, verifique os arquivos existentes. Se o novo artigo fortalece, tensiona ou contradiz a tese de uma estrutura já presente, atualize essa estrutura. Uma genealogia deve explicar o tipo de parentesco; um percurso deve explicar por que a nova etapa altera a leitura.

### Entidades, fontes e papéis históricos

Autores, empresas e livros são contexto para ideias. Ao propagá-los, registre qual papel cumprem. Sempre que possível, diferencie quem inventou, refinou, popularizou ou padronizou. Uma empresa associada ao produto não deve receber crédito automático pela invenção, e uma obra teórica não deve ser tratada como prova histórica de um evento que não documenta.

### Fechamento da operação

Depois da propagação, atualize os índices afetados e `log.md`. O log deve registrar não apenas a criação da nota principal, mas também as mudanças relevantes que ela provocou na rede. Antes de encerrar, verifique wikilinks sem destino e confirme que as relações novas aparecem nas duas pontas quando a arquitetura das notas pedir reciprocidade.

Uma criação pode ser considerada completa quando o artigo está integrado ao acervo, e não apenas quando o arquivo existe.

## Modos de funcionamento

### Modo história

Conte a história como capítulo de livro: contexto, conflito, personagens, alternativas, mudanças e consequências. A ficha documental fica no fim.

### Modo arqueólogo

Escave uma decisão específica. Levante hipóteses, compare alternativas e procure detalhes aparentemente banais que revelam uma ideia maior.

## Estrutura sugerida para artefatos

A estrutura pode variar para preservar a narrativa, mas normalmente deve conter:

1. abertura pelo problema ou por uma cena concreta;
2. mundo antes da solução;
3. tentativas e alternativas;
4. história documentada da solução;
5. invenção, refinamento, popularização e padronização;
6. leitura arqueológica: problema, hipótese, poder e legado;
7. consequências inesperadas;
8. parentes e descendentes;
9. hipóteses e perguntas em aberto;
10. ficha resumo e fontes.

## Regras de escrita

A escrita deve ser formal, clara e investigativa. Parágrafos completos são a unidade principal. Listas entram quando ajudam a comparar, sequenciar ou consultar informação, sem substituir a narrativa por fragmentos.

No português do Brasil, títulos editoriais, headings, rótulos, tabs e nomes genéricos de seção usam sentence case. Isso significa usar maiúscula no início e onde a ortografia exigir, preservando nomes próprios, siglas e grafias oficiais. Exemplos corretos: `História e contexto de criação`, `Ficha técnica`, `Conceitos relacionados`. Exemplos a evitar: `História e Contexto de Criação`, `Ficha Técnica`, `Conceitos Relacionados`.

Nomes próprios e nomes oficiais não devem ser forçados para minúsculas: `Xerox PARC`, `GitHub`, `Jobs to Be Done`, `Value Proposition Ad Lib`, `iPhone` e `Bauhaus` mantêm suas grafias.

Nomes de arquivo podem permanecer estáveis mesmo quando usam capitalização antiga. Eles funcionam como identificadores. A regra de sentence case vale prioritariamente para aquilo que o leitor vê: frontmatter `title`, headings, texto corrido, navegação e interface.

Evite transformar interpretações em intenções atribuídas aos criadores. Evite também usar uma fonte teórica como se ela comprovasse autoria, data ou circunstância histórica. As referências devem ser escolhidas pela função que cumprem na afirmação.

## Princípio de leitura

A documentação não deve sufocar a leitura. No Markdown, preserve metadados e fichas. Na publicação, priorize a narrativa e permita recolher blocos de consulta como ficha técnica e ficha resumo.

## Criação de rede de conhecimento

Conecte estudos anteriores. Procure padrões que atravessem design gráfico, produto, serviços, tipografia e interfaces. O objetivo não é acumular casos: é descobrir ideias recorrentes e observar como elas mudam de forma ao atravessar mídias e épocas.
