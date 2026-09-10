---
title: "Pull to Refresh"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Pull to Refresh

O **Pull to Refresh** tornou uma operação banal de software, atualizar uma lista, parte do próprio gesto de navegar. Sua importância está menos em “inventar o refresh” do que em perceber que um movimento já disponível na interface podia carregar uma segunda intenção.

## O problema antes do artefato

Nos primeiros aplicativos para iPhone, atualizar conteúdo costumava exigir um controle dedicado. Em uma tela pequena, reservar espaço permanente para um botão de atualização competia com navegação e outras ações.

## História documentada

O gesto apareceu no **Tweetie 2**, cliente de Twitter para iPhone criado por [[autores/Loren Brichter|Loren Brichter]] e lançado em outubro de 2009. Uma prévia publicada pela TechCrunch em 28 de setembro de 2009 já descrevia o mecanismo: em vez de um botão separado, o usuário podia puxar a lista além do topo para solicitar novas mensagens. A Wired registrou a chegada do Tweetie 2 à App Store em 9 de outubro de 2009.

Uma troca de e-mails entre John Gruber e Brichter, datada de 1º de outubro de 2009 e posteriormente reproduzida em material de aula da Carnegie Mellon, mostra que usuários começaram rapidamente a tentar o mesmo gesto em outros aplicativos. Isso é um indício interessante de que a interação parecia transferível entre contextos.

Em abril de 2010, o Twitter adquiriu a Atebits, empresa de Brichter, e o Tweetie tornou-se base para o cliente oficial do Twitter no iPhone. Não há razão para tratar a Apple como empresa que adquiriu ou integrou a Atebits.

### Invenção

A atribuição mais aceita é a [[autores/Loren Brichter|Loren Brichter]], no Tweetie 2, em 2009.

### Refinamento

O padrão foi reproduzido e estilizado por muitos aplicativos depois de sua estreia. A linguagem visual de “puxe” e “solte para atualizar” tornou o limiar do gesto mais explícito.

### Popularização

A adoção em clientes sociais e outros aplicativos móveis transformou uma solução particular do Tweetie em gesto reconhecível fora dele.

### Padronização

O padrão tornou-se uma expectativa comum em listas móveis e passou a ser suportado por componentes e recomendações de plataformas. A padronização é posterior à invenção e não deve ser atribuída apenas ao Tweetie.

## Leitura arqueológica

### Problema

Como atualizar uma lista sem dedicar espaço visual permanente a um comando usado apenas ocasionalmente?

### Hipótese sobre o comportamento humano

Uma interpretação possível é que usuários compreendem melhor um gesto quando ele preserva uma lógica espacial: se conteúdo novo estaria “acima” do item mais recente, puxar a lista para revelar essa região torna a atualização coerente com o espaço da própria lista.

### Poder

O gesto devolve espaço de interface ao designer e reduz um controle visível. Ao mesmo tempo, comandos invisíveis dependem mais de aprendizagem, convenção e descoberta do que botões explícitos.

### Legado

O Pull to Refresh ajudou a consolidar uma família de interações em que movimentos de navegação também funcionam como comandos. Seu sucesso mostra como uma ação pode parecer “natural” depois de aprendida mesmo tendo sido uma convenção projetada recentemente.

## Por que funcionou

A solução combina economia de espaço, continuidade gestual e coerência espacial. O usuário já está manipulando a lista; a atualização acontece no limite dessa mesma manipulação, sem troca de modo ou deslocamento para outro controle.

## Consequências inesperadas

Em feeds atualizados continuamente, o gesto também pode participar de rotinas repetidas de verificação por novidade. Essa consequência precisa ser tratada como **interpretação comportamental**, e não como intenção documentada do criador.

## Parentes e descendentes

- **Funcional**: [[03 artefatos/Infinite Scroll|Infinite Scroll]]: reduz uma interrupção explícita no fluxo de conteúdo.
- **Comportamental**: [[03 artefatos/Botao Like|Botão Like]]: comprime uma ação recorrente em um gesto de baixo custo.
- **Gestual**: [[03 artefatos/Slide to Unlock|Slide to Unlock]] e [[03 artefatos/Pinch to Zoom|Pinch to Zoom]]: transformam movimentos contínuos em comandos de interface.
- **Genealogia comparativa**: [[04 genealogias/Atencao e Recompensa|Atenção e Recompensa]]: investiga a relação entre atualização, novidade e repetição sem afirmar descendência histórica de máquinas de recompensa.

## Hipóteses em aberto

A comparação entre Pull to Refresh e mecanismos de recompensa variável pode ser produtiva para analisar comportamento, mas não deve ser descrita como linhagem histórica sem evidência de influência direta. Uma pergunta melhor é quando um gesto criado para economizar espaço começou a participar de ciclos de atualização compulsiva.

## Fontes

### Fontes históricas

- TechCrunch, “Preview: Tweetie 2 Takes The Best iPhone Twitter App And Ups The Sex Appeal”, 28 set. 2009.
- Wired, “Tweetie 2 for iPhone Flutters Into the App Store”, 9 out. 2009.
- Registros de troca entre John Gruber e Loren Brichter, 1 e 2 out. 2009, reproduzidos em material de IHC da Carnegie Mellon University.

### Ficha resumo

- **Nome do artefato**: Pull to Refresh
- **Categoria**: Interface digital / gesto móvel
- **Período aproximado**: 2009
- **Pessoas ou equipes envolvidas**: [[autores/Loren Brichter|Loren Brichter]] / Atebits
- **Produto ou contexto onde apareceu**: Tweetie 2 para iPhone
- **Problema original**: Atualizar uma lista sem ocupar espaço permanente com um botão dedicado
- **Invenção**: Loren Brichter, Tweetie 2
- **Refinamento**: Adoções posteriores tornaram feedback e limiares do gesto mais convencionais
- **Popularização**: Expansão do padrão por aplicativos móveis e pelo cliente oficial do Twitter
- **Padronização**: Incorporação posterior a componentes e convenções de plataformas móveis
- **Hipótese sobre o comportamento humano**: Um comando pode ser aprendido com facilidade quando prolonga uma manipulação espacial já em curso
- **Relação de poder**: Reduz controles visíveis e aumenta dependência de convenções gestuais aprendidas
- **Comportamento aproveitado**: Continuar puxando uma lista ao chegar ao seu limite
- **Comportamento criado**: Puxar listas para solicitar atualização
- **Por que funcionou**: Economia de espaço, continuidade do gesto e coerência espacial
- **Consequências inesperadas**: Participação possível em rotinas repetidas de verificação por novidade
- **Legado**: Padrão global de atualização gestual em interfaces móveis
- **Conceitos relacionados**: [[01 conceitos/Manipulacao Direta|Manipulação Direta]], [[01 conceitos/Affordance|Affordance]], [[01 conceitos/Recompensa Variavel|Recompensa Variável]]
- **Variáveis relacionadas**: [[02 variaveis/Friccao|Fricção]], [[02 variaveis/Atencao|Atenção]]
- **Genealogias**: [[04 genealogias/Atencao e Recompensa|Atenção e Recompensa]], [[04 genealogias/Compressao do Esforco|Compressão do Esforço]]
- **Família de ideias**: Gestos que incorporam comandos ao fluxo de navegação
- **Parentes**: [[03 artefatos/Infinite Scroll|Infinite Scroll]], [[03 artefatos/Slide to Unlock|Slide to Unlock]], [[03 artefatos/Pinch to Zoom|Pinch to Zoom]]
- **Hipótese central**: O gesto venceu porque transformou uma região excedente da rolagem em comando coerente com a própria lista
- **Princípio de design revelado**: Um gesto frequente pode absorver uma ação secundária quando a relação espacial entre ambos continua compreensível
- **Destino do artefato**: Padronizado e amplamente incorporado a interfaces móveis
- **Perguntas em aberto**: Quando a atualização gestual deixou de ser apenas economia de espaço e passou a participar de comportamentos repetitivos de busca por novidade?
