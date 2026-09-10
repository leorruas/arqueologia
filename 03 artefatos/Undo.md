---
title: "Undo"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Undo

Errar diante de um computador já significou reconstruir trabalho perdido ou voltar ao último ponto salvo. O **Undo** mudou essa relação porque transformou parte do erro em estado temporário. Em vez de exigir que toda ação fosse planejada como definitiva, passou a permitir que algumas ações fossem exploradas e depois revertidas.

## Antes de desfazer

Em sistemas interativos antigos, muitas mudanças em arquivos, programas ou estruturas de dados exigiam cuidado porque recuperar o estado anterior podia significar restaurar uma cópia, repetir trabalho ou reconstruir manualmente informações alteradas. O problema, portanto, não era apenas técnico. O custo alto do erro mudava o comportamento: experimentar exigia antecipação e prudência.

A analogia com a borracha física é útil como parentesco funcional. Lápis e borracha já permitiam produzir marcas provisórias em um suporte material. Ainda assim, não há evidência suficiente para descrever o comando Undo como descendente histórico direto da borracha. O computador precisou criar outra infraestrutura: registrar estados ou transformações de maneira que fosse possível reconstruir o que existia antes.

## Quando o sistema começou a guardar o passado

Uma implementação documentada aparece no BBN-LISP associado ao trabalho de Warren Teitelman. O manual de 1971 descreve um comando `UNDO` apoiado por uma lista que armazenava as informações necessárias para restaurar alterações anteriores. O sistema podia desfazer a modificação mais recente e, em alguns casos, operar sobre um histórico mais amplo.

Em um artigo de 1972 sobre o “programmer's assistant”, Teitelman apresenta a consequência comportamental de maneira particularmente importante para esta arqueologia: a existência do Undo permite trabalhar e experimentar sem precisar preparar antecipadamente uma cópia de segurança para cada mudança potencialmente perigosa. A reversibilidade deixa de ser apenas reparo e passa a ser condição de exploração.

Décadas depois, interfaces gráficas deram ao Undo uma forma mais previsível e pública. O Apple Lisa, lançado em 1983, tornou o comando parte de uma interface comercial integrada. Bill Atkinson recordou posteriormente que pressionou as equipes de aplicativos do Lisa para que todas oferecessem ao menos um nível de Undo, justamente para permitir que usuários experimentassem com segurança. O Macintosh, lançado em 1984, ajudou a disseminar esse vocabulário para um público mais amplo, inclusive por meio do menu Edit e do atalho Command-Z.

Essa sequência separa papéis que a versão anterior da nota misturava. Warren Teitelman e o BBN-LISP fornecem uma implementação inicial bem documentada. O Lisa refina e sistematiza a ideia dentro de uma GUI comercial. O Macintosh participa de sua popularização. A padronização acontece quando desfazer passa a ser esperado em editores, sistemas operacionais e ferramentas criativas de diferentes fabricantes.

## A consequência mais importante acontece antes do erro

O valor do Undo não aparece apenas quando alguém se arrepende. Saber que uma ação pode ser desfeita altera a disposição para agir. Um usuário pode mover, apagar, editar ou experimentar uma alternativa sem tratar cada gesto como compromisso definitivo.

É por isso que o Undo pertence à genealogia [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]]. Ele reduz [[02 variaveis/Custo do Erro|Custo do Erro]] e aumenta [[02 variaveis/Reversibilidade|Reversibilidade]], mas sua consequência mais profunda pode ser indireta: ampliar o espaço de experimentação.

Essa lógica ajuda a explicar seu papel em ferramentas criativas. Desenhar, editar imagens, escrever e programar tornam-se atividades mais iterativas quando o sistema registra estados suficientes para voltar atrás. O processo pode ser fragmentado em tentativas menores, aproximando a interação digital de práticas de esboço e experimentação.

## O que Undo não resolve

A reversibilidade quase sempre tem limites. Alguns sistemas desfazem apenas uma ação; outros mantêm pilhas extensas; certos comandos não podem ser revertidos. O histórico pode desaparecer ao fechar um documento, mudar de sessão ou executar operações incompatíveis. Por isso, o termo “Undo” comunica uma promessa que depende da arquitetura concreta de cada sistema.

A versão anterior desta nota sugeria que Undo “enfraquece a concentração cuidadosa” e produz impulsividade. Essa hipótese continua interessante, mas deve permanecer como hipótese, não como consequência demonstrada. O mesmo vale para a ideia de que ele cria a ilusão cultural de que ações físicas também deveriam ser reversíveis.

Também existe uma tensão entre reversão e memória. Um Undo pode eliminar o efeito de uma ação sem necessariamente preservar para o usuário uma história legível do processo. Sistemas de controle de versão, como Git, e históricos contínuos de documentos tratam o passado de outra maneira: em vez de apenas permitir voltar, tornam estados anteriores recuperáveis e, às vezes, inspecionáveis. São parentes funcionais, mas não simples descendentes do comando Undo.

## Referências

1. BBN-LISP TENEX Reference Manual, 1971, seção sobre `UNDO` e `undolst`.
2. Warren Teitelman. “Automated Programming: The Programmer's Assistant”. Fall Joint Computer Conference, 1972.
3. Computer History Museum. Materiais históricos sobre Apple Lisa e Macintosh.
4. Bill Atkinson, depoimento oral preservado pelo Computer History Museum sobre a implementação de Undo no Lisa.

## Ficha arqueológica
| Campo | Registro |
|---|---|
| **Artefato** | Undo |
| **Período** | Década de 1960 aos dias atuais |
| **Autoria** | Warren Teitelman e equipe BBN-LISP; equipes do Apple Lisa; Bill Atkinson; equipes do Macintosh |
| **Produto ou contexto** | BBN-LISP; Apple Lisa; Macintosh; posteriormente editores e sistemas de software em geral Categoria: Interface digital / comando de edição |
| **Tipo(s) de design** | [[00 tipos de design/Design de Interface|Design de interface]] |
| **Empresas ou instituições relacionadas** | Nenhuma organização materialmente necessária para explicar este estudo até o momento. |
| **Problema original** | Alto custo de recuperar estados anteriores depois de alterações ou erros |
| **Mundo antes** | Mudanças frequentemente exigiam backups prévios, reconstrução manual ou repetição do trabalho para recuperar um estado perdido |
| **Invenção** | Implementações iniciais documentadas de Undo em sistemas interativos como o BBN-LISP de Warren Teitelman |
| **Refinamento** | Integração consistente do comando a aplicativos gráficos, com destaque para o Lisa |
| **Popularização** | Disseminação em interfaces gráficas comerciais, incluindo o Macintosh |
| **Padronização** | Expectativa de que editores e ferramentas criativas ofereçam algum mecanismo de desfazer |
| **Hipótese de design** | O Undo transforma o erro de evento terminal em etapa possível de um processo exploratório Hipótese sobre o comportamento humano: Pessoas exploram mais quando o custo de uma tentativa mal-sucedida é reduzido |
| **Comportamento aproveitado** | Aprendizado por tentativa e erro, esboço e correção |
| **Comportamento produzido** | Experimentar ações digitais contando com a possibilidade de retornar ao estado anterior |
| **Relação de poder** | Transfere parte do controle sobre consequências da máquina de volta ao usuário |
| **Consequências inesperadas** | Pode alterar a expectativa cultural sobre quanto uma ação digital deve ser reversível Capacidade ampliada: Exploração, edição iterativa e recuperação de erros Capacidade reduzida ou deslocada: Pode diminuir a necessidade de antecipar todas as consequências antes de agir; o efeito comportamental dessa mudança permanece hipótese Custo invisível: Necessidade de armazenar estados ou operações e risco de comunicar uma reversibilidade maior do que o sistema realmente oferece |
| **Destino ou transformação posterior** | Padronizado e incorporado à gramática básica de interfaces de edição Legado: Tornou a reversibilidade uma propriedade central de sistemas interativos e criativos |
| **Conceitos relacionados** | [[01 conceitos/Manipulacao Direta|Manipulação Direta]], [[01 conceitos/Friccao Boa vs Friccao Ruim|Fricção Boa vs Fricção Ruim]], [[01 conceitos/Justica Procedimental|Justiça Procedimental]] |
| **Variáveis relacionadas** | [[02 variaveis/Reversibilidade|Reversibilidade]], [[02 variaveis/Custo do Erro|Custo do Erro]], [[02 variaveis/Justica|Justiça]] |
| **Genealogia** | [[04 genealogias/Reversibilidade e Custo do Erro|Reversibilidade e custo do erro]] Família de ideias: Tecnologias de reversibilidade |
| **Percurso(s)** | Ainda não integrado a um percurso editorial. |
| **Parentes** | [[03 artefatos/Undo Send|Undo Send]], [[03 artefatos/Quadro Branco|Quadro Branco]], [[03 artefatos/Botao Salvar|Botão Salvar]] |
| **Leituras-chave** | Nenhuma leitura-chave registrada no índice bibliográfico até o momento. |
| **Princípio de design revelado** | Reduzir o custo de voltar atrás pode aumentar a liberdade para avançar Por que funcionou: Transformou recuperação de erro em operação próxima e de baixo custo |
| **Questão em aberto** | Quanto da criatividade possibilitada por software depende menos da quantidade de ferramentas e mais da confiança de que tentativas podem ser revertidas? |
