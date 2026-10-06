---
title: "AGENTS"
type: "manual"
status: "ativo"
---

# Global LLM Wiki Schema

## Leitura obrigatória (SSoT)

> [!IMPORTANT]
> A governança e as diretrizes deste vault foram centralizadas. Antes de executar qualquer tarefa, o agente deve ler os arquivos de identidade, método e escrita:
>
> 1. [[me|me.md]]: fonte principal de governança, arquitetura e workflows do vault.
> 2. [[Instrucoes de Arqueologia|Instruções de arqueologia]]: método de investigação, regimes de afirmação e modos de análise.
> 3. [[Guia de escrita|Guia de escrita]]: padrão editorial, sentence case em português do Brasil, ritmo de leitura, uso de fontes e regras de revisão.

> [!WARNING]
> Criar ou revisar materialmente um artigo sem executar o [[Instrucoes de Arqueologia#Protocolo de propagação|Protocolo de propagação]] é uma operação incompleta. Antes de encerrar, o agente deve verificar e atualizar, quando couber, tipos de design, conceitos, variáveis, artefatos relacionados, genealogias, percursos, autores, empresas, livros, índices, vínculos recíprocos, `Pistas de pesquisa.md` e `log.md`.
>
> `Pistas de pesquisa.md` é memória acumulativa da investigação. Pistas curadas não podem ser apagadas ou reconstruídas a partir do estado atual dos links; só saem do backlog por promoção, fusão ou descarte explícito e justificado. Automação pode acrescentar candidatos em seção própria, nunca substituir o conteúdo manual.
>
> Alterar modelo editorial, schema, função de uma camada ou regra estrutural também exige propagação. Nesses casos, execute o [[Instrucoes de Arqueologia#Protocolo de propagação de governança|Protocolo de propagação de governança]] e alinhe manuais, templates, auditorias e documentação pública afetados antes de considerar a mudança concluída.


## Regras de ritmo e estilo

> [!IMPORTANT]
> Ao criar ou revisar artigos, escreva em movimentos argumentativos amplos. Parágrafos devem desenvolver uma ideia com contexto, evidência, interpretação e consequência quando couber. Seções devem reunir vários parágrafos que sustentem uma mudança real do argumento. Evite sucessões de parágrafos de uma ou duas frases, headings para cada microideia e cortes que façam o texto soar como uma sequência de notas isoladas. Parágrafos curtos continuam possíveis quando houver função deliberada de ritmo, transição ou ênfase, mas não devem ser a cadência padrão.

> [!IMPORTANT]
> Evite a antítese automática típica de texto gerado por LLM: `não é X, é Y`, `não se trata de X, mas de Y`, `menos X e mais Y`, `não apenas X, mas Y` e variações usadas apenas para produzir efeito retórico. Prefira formular a tese afirmativamente e desenvolver a diferença em prosa. Contrastes continuam válidos quando distinguem conceitos realmente diferentes, corrigem uma equivalência enganosa ou são necessários ao argumento; nesses casos, a oposição deve ser específica e justificada, não um molde de frase repetido.


## Transações editoriais

> [!IMPORTANT]
> O branch `main` representa um estado editorialmente coerente e publicável. Uma criação ou revisão material que exija propagação não deve ser dividida em commits intermediários diretamente em `main` quando esses commits deixarem schema, links, reciprocidades, índices, percursos, genealogias ou log em estado incompleto.
>
> Quando a operação exigir várias gravações ou vários commits, o agente deve trabalhar em uma branch temporária e abrir pull request para `main`. O workflow de validação roda no pull request; a integração só deve ocorrer depois que o conjunto completo passar pelo gate de publicação.
>
> Se a ferramenta disponível conseguir produzir um único commit coerente com todas as alterações relacionadas, o commit direto em `main` continua permitido. `main` não deve ser usado como área de staging de uma operação ainda em propagação.

### Renomear, mover, consolidar ou apagar notas

> [!IMPORTANT]
> Operações destrutivas ou de identidade de nota exigem uma varredura de referências **antes** da alteração. Antes de renomear, mover, consolidar ou apagar uma nota, o agente deve localizar todos os wikilinks, backlinks, índices, percursos, genealogias, fichas e referências textuais relevantes que apontem para o título ou caminho antigo.
>
> A operação só está concluída quando cada referência tiver destino explícito: atualizar para a nova nota/caminho, redirecionar para a nota consolidada ou remover o vínculo quando ele tiver deixado de fazer sentido. Não apagar primeiro para descobrir links quebrados depois pelo gate.
>
> Quando houver várias alterações dependentes, aplicar a regra de [[#Transações editoriais|Transações editoriais]]: preparar tudo na mesma branch e validar o conjunto antes do merge em `main`.

## Contrato da automação

As decisões de schema, propostas revisáveis, pistas acumulativas e publicação estão em [[me#Automação e publicação|Automação e publicação]]. A ficha atual possui 33 campos. Scripts de conteúdo produzem propostas por padrão; a aplicação explícita exige revisar o diff e preservar valores e narrativa. A publicação bloqueia schema incompatível, possível perda de dados e links públicos ambíguos ou sem destino; capitalização e reciprocidade geram avisos.
