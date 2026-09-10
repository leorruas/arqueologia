---
title: "Botão salvar"
type: "artefato"
status: "publicado"
tags:
  - design/artefato
  - arqueologia
---

# Botão salvar

Durante décadas, salvar foi uma responsabilidade explícita do usuário. O computador permitia criar e alterar um documento, mas a continuidade daquele trabalho dependia de um ritual: em algum momento era preciso mandar o sistema transformar o estado atual em algo persistente.

A história do “Salvar” contém pelo menos dois artefatos diferentes que costumam ser confundidos: **o comando de salvar** e **o ícone de disquete usado posteriormente para representá-lo**. Eles não nasceram necessariamente juntos.

## O problema antes do artefato

Computadores trabalham com estados temporários e suportes persistentes. Em sistemas antigos, gravar em disco ou fita era uma operação perceptível e custosa o bastante para ser tratada separadamente do ato de editar. Para o usuário, isso criava uma responsabilidade: decidir quando uma versão do trabalho deveria sobreviver a encerramentos, panes ou desligamentos.

## História documentada

Comandos para gravar programas e dados em suportes persistentes são anteriores às interfaces gráficas. O que as interfaces gráficas fizeram foi incorporar essa operação a uma linguagem de menus, caixas de diálogo e, mais tarde, barras de ferramentas.

O manual original do Macintosh de 1984 orientava o usuário a escolher **Save** no menu **File** e recomendava salvar o trabalho com frequência. O comando era textual. Isso é importante porque impede uma narrativa comum, mas frágil, de que o Macintosh teria simplesmente inventado o atual botão de disquete como representação universal do ato de salvar.

Documentação do Xerox Star do início dos anos 1980 mostra um ícone de unidade de disquete usado para representar o próprio dispositivo de armazenamento e permitir mover dados para dentro e para fora dele. Isso demonstra o uso do disquete como objeto gráfico na interface, mas não prova que ele já funcionava como símbolo abstrato e padronizado do comando “Save”.

O uso do disquete como botão de salvar tornou-se comum em barras de ferramentas sobretudo no fim dos anos 1980 e início dos anos 1990. A identificação de um único “inventor” do símbolo é incerta; a padronização parece ter sido gradual, por repetição entre aplicações.

### Invenção

Não há um inventor único bem estabelecido para a ideia de “salvar” dados: operações de escrita persistente são parte da história anterior do software. A invenção relevante para esta arqueologia é a transformação dessa operação técnica em comando compreensível ao usuário.

### Refinamento

Menus gráficos como **File > Save**, caixas de diálogo padronizadas e atalhos como `Ctrl+S` e `Cmd+S` reduziram o esforço necessário para executar a operação e tornaram seu significado mais consistente entre aplicações.

### Popularização

Computadores pessoais e aplicativos de produtividade dos anos 1980 e 1990 colocaram o ritual de salvar diante de milhões de usuários.

### Padronização

A palavra “Save”, os atalhos associados e o ícone de disquete acabaram se tornando convenções reconhecíveis entre aplicações. O ícone sobreviveu ao desaparecimento cotidiano do objeto físico que representava.

## Leitura arqueológica

### Problema

Como permitir que uma pessoa determine que um estado temporário do trabalho deve persistir?

### Hipótese sobre o comportamento humano

O comando assume que o usuário consegue perceber uma diferença relevante entre “estou trabalhando” e “quero preservar este estado”. Ele externaliza uma decisão que, no papel, podia acontecer de forma quase contínua: a marca física já permanecia à medida que era produzida.

### Poder

O Save dá ao usuário controle explícito sobre permanência, mas também transfere a ele a responsabilidade pela perda. Se o sistema exige que a pessoa lembre de salvar, uma falha de infraestrutura pode ser narrada como falha do usuário.

### Legado

Autosave, histórico de versões e colaboração em nuvem mudaram essa relação. Em muitos sistemas atuais, preservar deixa de ser uma ação e passa a ser condição padrão. O sucesso histórico do Save talvez esteja justamente em ter preparado o caminho para sua própria invisibilidade.

## Por que funcionou

O comando encaixava-se na arquitetura dos computadores e fornecia um momento perceptível de fechamento parcial. Também criava uma sensação de controle: depois de salvar, o usuário podia acreditar que o estado atual tinha adquirido maior estabilidade.

## Consequências inesperadas

O design produziu um ritual de autoproteção: salvar repetidamente, muitas vezes por atalho, tornou-se parte corporal do trabalho digital. Ao mesmo tempo, o ícone de disquete se transformou em um signo cujo significado pode sobreviver ao objeto que lhe deu origem.

## Parentes e descendentes

- **Funcional**: [[03 artefatos/Archive|Archive]]: preserva informação enquanto muda sua posição no fluxo de atenção.
- **Institucional**: [[03 artefatos/Número de Protocolo|Número de Protocolo]]: faz uma informação ou demanda sobreviver à passagem entre pessoas e setores.
- **Comportamental**: [[03 artefatos/Post-it|Post-it]]: transfere a responsabilidade de lembrar da mente para um suporte externo.
- **Genealogia comparativa**: [[04 genealogias/Permanencia e Memoria Externa|Permanência e Memória Externa]].
- **Descendente funcional**: autosave e histórico de versões, ainda sem estudo próprio no vault.

## Hipóteses em aberto

Uma hipótese do projeto é que o Save foi um artefato de transição: tornou explícita uma divisão técnica entre estado temporário e persistente, mas tende a desaparecer quando a infraestrutura consegue preservar continuamente. Resta investigar se a perda do ato de salvar também reduz a sensação de fechamento, versão e autoria.

## Fontes

### Fontes históricas

- *Macintosh Manual*, Apple Computer, 1984: descreve o comando Save no menu File e recomenda salvamento periódico.
- *Inside Macintosh, Volume II*, Apple Computer, 1984: documenta o Standard File Package e os comandos Save e Save As.
- *Xerox Office Systems Technology: A Look Into the World of Tomorrow*, 1982: documenta o ícone de unidade de disquete do Star como representação do dispositivo de armazenamento.

### Fontes teóricas

- [[autores/Merlin Donald|Merlin Donald]]: útil para pensar sistemas externos de memória, sem servir como fonte para a história específica do comando Save.

## Ficha técnica

- **Criador(es)**: atribuição difusa; não há inventor único estabelecido para o comando ou para o ícone de disquete como convenção de salvar
- **Organização/contexto**: múltiplos sistemas e aplicações; Xerox, Apple, Microsoft e outros participaram de etapas diferentes da linguagem gráfica
- **Período**: comando anterior às GUIs; consolidação gráfica nas décadas de 1980 e 1990
- **Materiais/mídia**: software, menus, atalhos e ícones
- **Tipo(s) de design**: [[00 tipos de design/Design de Interface|Design de Interface]]
- **Status da atribuição histórica**: distribuída e parcialmente incerta

### Ficha resumo

- **Nome do artefato**: Botão Salvar
- **Categoria**: Interface digital
- **Período aproximado**: consolidação entre as décadas de 1980 e 1990
- **Pessoas ou equipes envolvidas**: múltiplas equipes de sistemas operacionais e aplicações
- **Produto ou contexto onde apareceu**: editores e aplicativos de produtividade em computadores pessoais
- **Problema original**: tornar explícita a passagem de um estado temporário para um registro persistente
- **Mundo antes da inovação**: operações de gravação existiam como comandos técnicos e procedimentos específicos de cada sistema
- **Invenção**: difusa; a operação de salvar antecede a interface gráfica
- **Refinamento**: menus, caixas de diálogo, atalhos e barras de ferramentas
- **Popularização**: computação pessoal e softwares de produtividade
- **Padronização**: convergência em torno de Save, atalhos recorrentes e ícone de disquete
- **Hipótese sobre o comportamento humano**: usuários podem assumir conscientemente a responsabilidade de marcar estados que merecem persistir
- **Relação de poder**: amplia controle explícito, mas também transfere ao usuário responsabilidade por lembrar de preservar
- **Comportamento aproveitado**: externalizar memória em suportes duráveis
- **Comportamento criado**: ritual recorrente de salvar durante o trabalho
- **Por que funcionou**: tornou uma operação técnica necessária previsível e repetível
- **Consequências inesperadas**: ansiedade por perda e sobrevivência semiótica do disquete
- **Legado**: autosave, versionamento e persistência contínua
- **Conceitos relacionados**: [[01 conceitos/Memoria Distribuida|Memória Distribuída]], [[01 conceitos/Continuidade de Acesso|Continuidade de Acesso]]
- **Variáveis relacionadas**: [[02 variaveis/Permanencia|Permanência]], [[02 variaveis/Custo do Erro|Custo do Erro]], [[02 variaveis/Reversibilidade|Reversibilidade]]
- **Genealogias**: [[04 genealogias/Permanencia e Memoria Externa|Permanência e Memória Externa]]
- **Família de ideias**: Artefatos de preservação da informação
- **Parentes**: [[03 artefatos/Post-it|Post-it]], [[03 artefatos/Archive|Archive]], [[03 artefatos/Número de Protocolo|Número de Protocolo]]
- **Hipótese central**: O Save torna visível uma responsabilidade que sistemas posteriores tendem a absorver na infraestrutura
- **Princípio de design revelado**: Uma operação pode desaparecer da interface quando a infraestrutura passa a executá-la de forma confiável sem exigir atenção contínua
- **Destino do artefato**: coexiste com autosave; o comando permanece em muitos softwares, mas perdeu centralidade em outros
- **Perguntas em aberto**: O que se perde cognitivamente quando o usuário deixa de perceber versões e momentos explícitos de preservação?
